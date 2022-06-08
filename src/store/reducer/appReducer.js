import { CHANGE_MENU } from "../constant";

const defaultState = {
  currentMenu: "home",
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_MENU:
      return {
        ...state,
        currentMenu: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
