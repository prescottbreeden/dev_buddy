import { SET_TASKS } from "../actions/tasks.actions";
import { TaskType } from "../../types/TaskType.type";

const initState: TaskType[] = [
  {
    id: '1',
    description: 'Rubber baby buggy bumpers',
    name: "dingoes",
    relatedFeature: "dashboard",
    priority: 1,
    started: true,
    blocked: false,
    completed: true,
    startDate: new Date(Date.now()),
    completedDate: new Date(Date.now()),
    notes: 'These are my notes, there are many notes like them, but these are mine',
    stats: {},
  },
  {
    id: '2',
    description: 'Rubber baby buggy bumpers',
    name: "llamas",
    relatedFeature: "dashboard",
    priority: 1,
    started: true,
    blocked: true,
    completed: false,
    completedDate: undefined,
    notes: '',
    stats: {},
  },
  {
    id: '3',
    description: 'Rubber baby buggy bumpers',
    name: "flamingos",
    relatedFeature: "dashboard",
    priority: 1,
    started: false,
    blocked: false,
    completed: false,
    completedDate: undefined,
    notes: '',
    stats: {},
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
