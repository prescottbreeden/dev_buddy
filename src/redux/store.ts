import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { tasksMiddleware } from "./middleware/feature/tasks.middleware";
import {apiMiddleware} from "./middleware/core/api.middleware";
import {tasksReducer} from "./reducers/tasks.reducers";
import {loaderReducer} from "./reducers/loader.reducers";
import {notificationsReducer} from "./reducers/notification.reducers";
import {DevTools} from "../components/DevTools";
import {currentTaskReducer} from "./reducers/currentTask.reducers";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  loader: loaderReducer,
  notification: notificationsReducer,
  currentTask: currentTaskReducer,
});

const featureMiddleware: any = [
  tasksMiddleware,
];

const coreMiddleware: any = [
  apiMiddleware,
];

const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware),
  DevTools.instrument()
);

export const store = createStore(rootReducer, {}, enhancer);
