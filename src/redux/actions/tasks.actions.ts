import {TaskPayload} from "../../types/TaskPayload.type";

// feature name
export const TASKS = '[Tasks]';

// action types
export const FETCH_TASKS = `${TASKS} FETCH`;
export const SET_TASKS = `${TASKS} SET`;

// action creators
export const setTasks = ({tasks}: TaskPayload) => {
  return {
    type: SET_TASKS,
    payload: tasks,
  };
};

export const fetchTasks = (query: any) => {
  return {
    type: FETCH_TASKS,
    payload: query,
  };
};
