import { ACTIVATE_TAB } from "../actions/types";

export const activateTab = activeTab => dispatch => {
  dispatch({ type: ACTIVATE_TAB, payload: activeTab });
};
