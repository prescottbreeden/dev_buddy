import { SET_TASKS } from "../actions/tasks.actions";
import { TaskType } from "../../types/TaskType.type";

const initState: TaskType[] = [
  {
    name: "dingoes",
    relatedFeature: "dashboard",
    priority: 1,
    started: true,
    blocked: false,
    completed: true,
    startDate: new Date(Date.now()),
    completedDate: new Date(Date.now()),
  },
  {
    name: "llamas",
    relatedFeature: "dashboard",
    priority: 1,
    started: true,
    blocked: true,
    completed: false,
    completedDate: undefined,
  },
  {
    name: "flamingos",
    relatedFeature: "dashboard",
    priority: 1,
    started: false,
    blocked: false,
    completed: false,
    completedDate: undefined,
  },
];

export const tasksReducer = (tasks = initState, action: any) => {
  switch (action.type) {
    case SET_TASKS:
      return action.payload;

    default:
      return tasks;
  }
};
