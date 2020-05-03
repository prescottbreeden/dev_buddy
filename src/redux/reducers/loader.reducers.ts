import { SET_LOADER } from "../actions/loader.actions";

const initState = {
  loading: false,
};

export const loaderReducer = (loader = initState, action: any) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...loader, loading: action.payload };

    default:
      return loader;
  }
};
