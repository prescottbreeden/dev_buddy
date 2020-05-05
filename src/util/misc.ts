import * as R from "ramda";
import * as L from "lodash";
import { BaseAction } from "../types/BaseAction.type";

export const mergeObjects = <T>(obj1: T) => (obj2: Partial<T>): T => ({
  ...obj1,
  ...obj2,
});

export const insertItem = <T>(array: T[], k: keyof T) => (payload: T): T[] => {
  return L.map(array, (item: T) => (item[k] === payload[k] ? {...payload} : { ...item }));
};

export const upsertItem = <T>(array: T[], k: keyof T) => (payload: T): T[] => {
  const payloadValue = L.get(payload, k, -1);
  const index = L.findIndex(array, (item: any) => item[k] === payloadValue);
  return index === -1
    ? [...array, payload]
    : insertItem<T>(array, k)(payload)
};

export const dispatcher = (fn: (action: BaseAction) => void) => (
  action: BaseAction
) => {
  return fn(action);
};

export const buildOnChange = <T>(
  allItems: T[],
  selector: keyof T,
  actionCreator: (data: T[]) => BaseAction,
  dispatcher: (action: BaseAction) => void
) => (item: T) => (data: Partial<T>) => {
  return R.pipe(
    mergeObjects<T>(item),
    upsertItem<T>(allItems, selector),
    actionCreator,
    dispatcher
  )(data);
};

export const newId = () => Math.random().toString(36).substring(7);
