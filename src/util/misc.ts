import * as R from "ramda";

export const mergeObjects = <T>(obj1: T) => (obj2: Partial<T>) => ({
  ...obj1,
  ...obj2,
});

export const insertItem = <T>(array: T[], k: keyof T) => (payload: T) => {
  return R.map((item: T) => (item[k] === payload[k] ? payload : item), array);
};

export const generateOnChange = <T>(
  allTasks: T[],
  selector: keyof T,
  dispatch: Function,
  type: string
) => (task: T) => (data: Partial<T>) => {
  const dispatcher = <T>(fn: Function, type: string) => (data: Partial<T>) => {
    return fn({
      type,
      payload: data,
    });
  };
  return R.pipe(
    mergeObjects<T>(task),
    insertItem<T>(allTasks, selector),
    dispatcher(dispatch, type)
  )(data);
};
