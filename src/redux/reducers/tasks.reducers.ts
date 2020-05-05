import { SET_TASKS } from "../actions/tasks.actions";
import { TaskType } from "../../types/TaskType.type";

const initState: TaskType[] = [];

export const tasksReducer = (tasks = initState, action: any) => {
  switch (action.type) {
    case SET_TASKS:
      return action.payload;

    default:
      return tasks;
  }
};
