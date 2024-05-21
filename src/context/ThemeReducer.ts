import { DefaultTheme } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeReducer = (state: any, updatedTheme: DefaultTheme) => {
  return { ...state, updatedTheme };
};

export default ThemeReducer;
