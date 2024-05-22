import { useReducer } from "react";
import SideMenu from "./layout/SideMenu";
import light from "./styles/themes/light";
import { ThemeProvider } from "styled-components";
import ThemeReducer from "./context/ThemeReducer";
import { IPlaceThemeProvider, PlaceThemeContext } from "./context/ThemeContext";

import "./App.scss";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AboutMe from "./pages/AboutMe";
import FrontendProjects from "./pages/FrontendProjects";
import BackendProjects from "./pages/BackendProjects";
import ErrorPage from "./pages/ErrorPage";

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
          <SideMenu>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/frontend-projects" element={<FrontendProjects />} />
              <Route path="/backend-projects" element={<BackendProjects />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </SideMenu>
        </Container>
      </ThemeProvider>
    </PlaceThemeContext.Provider>
  );
}

export default App;
