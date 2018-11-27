import { ACTIVATE_TAB } from "../actions/types";

const initialState = {
  activeTab: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIVATE_TAB:
      return { ...state, activeTab: payload };
    default:
      return state;
  }
};
