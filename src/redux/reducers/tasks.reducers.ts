import { SET_TASKS } from "../actions/tasks.actions";
import { TaskType } from "../../types/TaskType.type";
import {newId} from "../../util/misc";

const initState: TaskType[] = [
  {
    id: newId(),
    accumulatedTime: 258000,
    completed: false,
    description: "create generic workflow and approval components",
    isActive: false,
    name: "create generic workflow and approval components",
    notes:
      "These are my notes, there are many notes like them, but these are mine",
    originalEstimate: 0,
    priority: 1,
    relatedFeature: "Display of Needs Assessment Results",
    startedDate: new Date(2020, 4, 1, 12),
  }

];

export const tasksReducer = (tasks = initState, action: any) => {
  switch (action.type) {
    case SET_TASKS:
      return action.payload;

    default:
      return tasks;
  }
};
