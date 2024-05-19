import { useReducer } from "react";
import SideMenu from "./layout/SideMenu";
import light from "./styles/themes/light";
import { ThemeProvider } from "styled-components";
import ThemeReducer from "./context/ThemeReducer";
import { IPlaceThemeProvider, PlaceThemeContext } from "./context/ThemeContext";

import "./App.scss";
import { Container } from "@mui/material";

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
        <Container>
          <SideMenu />
        </Container>
      </ThemeProvider>
    </PlaceThemeContext.Provider>
  );
}

export default App;
