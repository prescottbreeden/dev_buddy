import React from "react";
import { createDevTools } from "redux-devtools";
//@ts-ignore
import Inspector from "redux-devtools-inspector";
import ViewState from "../ViewState";

const tabs = (defaultTabs: any) => {
  return [...defaultTabs, { name: "View", component: ViewState }];
};

export const DevTools = createDevTools(<Inspector tabs={tabs} />);
