import { useReducer } from "react";
import { IPlaceThemeProvider, PlaceThemeContext } from "./context/ThemeContext";
import SideMenu from "./layout/SideMenu";
import light from "./styles/themes/light";
import ThemeReducer from "./context/ThemeReducer";
import { ThemeProvider } from "styled-components";

import "./App.scss";

function App() {
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, []);

  const themeContextProviderValue: IPlaceThemeProvider = {
    currentTheme,
    setNewTheme,
  };

  if (Array.isArray(currentTheme) && !currentTheme.length) {
    setNewTheme(light);
  }

  return (
    <PlaceThemeContext.Provider value={themeContextProviderValue}>
      <ThemeProvider theme={currentTheme.updatedTheme}>
        <SideMenu />
      </ThemeProvider>
    </PlaceThemeContext.Provider>
  );
}

export default App;
