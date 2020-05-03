import {SET_CURRENT_TASK} from "../actions/currenttask.actions";

const initState = {
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
};

export const currentTaskReducer = (currentTask = initState, action: any) => {
  switch (true) {
    case action.type.includes(SET_CURRENT_TASK):
      return action.payload;

    default:
      return currentTask;
  }
};
