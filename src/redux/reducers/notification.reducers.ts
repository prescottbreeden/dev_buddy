import { SET_NOTIFICATION } from "../actions/notification.actions";

const initState: any[] = [];

export const notificationsReducer = (
  notifications = initState,
  action: any
) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION):
      return [...notifications, action.payload];

    default:
      return notifications;
  }
};
