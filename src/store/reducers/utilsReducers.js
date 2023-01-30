import { SET_THEME_COLOR } from "store/types";
import { THEME_COLOR } from "utils/constants";

const utilsInitialState = {
  themeColor: THEME_COLOR.blue,
}

export default function utilsReducer(state = utilsInitialState, action) {
  switch (action.type) {
    case SET_THEME_COLOR:
      return {
        ...state,
        themeColor: THEME_COLOR[action.payload ?? 'blue'],
      }
    default:
      return state;
  }
}