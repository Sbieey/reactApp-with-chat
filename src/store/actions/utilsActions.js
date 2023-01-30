import { SET_THEME_COLOR } from "store/types";

export const setThemeColor = (payload) => {
  return {
    type: SET_THEME_COLOR,
    payload,
  }
}