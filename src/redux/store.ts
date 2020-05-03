import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const rootReducer = combineReducers({});

const coreMiddleware: any = [];

const featureMiddleware: any = [];

const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware)
);

export const store = createStore(rootReducer, {}, enhancer);
