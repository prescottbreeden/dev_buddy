import { SET_TASKS } from "../actions/tasks.actions";
import { TaskType } from "../../types/TaskType.type";

const initState: TaskType[] = [
  {
    id: "1",
    accumulatedTime: 0,
    completed: true,
    completedDate: new Date(Date.now()),
    description: "create generic workflow and approval components",
    isActive: true,
    name: "create generic workflow and approval components",
    notes:
      "These are my notes, there are many notes like them, but these are mine",
    originalEstimate: 0,
    priority: 1,
    relatedFeature: "Grants | Local Plans | Display of Needs Assessment Results (2/2)",
    started: true,
    startedDate: new Date(Date.now()),
  },
  {
    id: "2",
    accumulatedTime: 0,
    completed: true,
    completedDate: new Date(Date.now()),
    description: "create generic workflow and approval components",
    isActive: false,
    name: "create generic workflow and approval components",
    notes:
      "These are my notes, there are many notes like them, but these are mine",
    originalEstimate: 0,
    priority: 1,
    relatedFeature: "Grants | Local Plans | Display of Needs Assessment Results (2/2)",
    started: true,
    startedDate: new Date(Date.now()),
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
