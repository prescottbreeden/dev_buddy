import { SET_TASKS } from "../actions/tasks.actions";
import { TaskType } from "../../types/TaskType.type";

const initState: TaskType[] = [
  {
    id: '1',
    name: "dingoes",
    relatedFeature: "dashboard",
    priority: 1,
    started: true,
    blocked: false,
    completed: true,
    startDate: new Date(Date.now()),
    completedDate: new Date(Date.now()),
    notes: 'These are my notes, there are many notes like them, but these are mine',
  },
  {
    id: '2',
    name: "llamas",
    relatedFeature: "dashboard",
    priority: 1,
    started: true,
    blocked: true,
    completed: false,
    completedDate: undefined,
    notes: '',
  },
  {
    id: '3',
    name: "flamingos",
    relatedFeature: "dashboard",
    priority: 1,
    started: false,
    blocked: false,
    completed: false,
    completedDate: undefined,
    notes: '',
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
