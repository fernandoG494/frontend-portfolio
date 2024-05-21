import { useReducer } from "react";
import SideMenu from "./layout/SideMenu";
import light from "./styles/themes/light";
import { ThemeProvider } from "styled-components";
import ThemeReducer from "./context/ThemeReducer";
import { IPlaceThemeProvider, PlaceThemeContext } from "./context/ThemeContext";

import "./App.scss";
import { Container, Typography } from "@mui/material";

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
            {
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod
                quis viverra nibh cras. Metus vulputate eu scelerisque felis
                imperdiet proin fermentum leo. Mauris commodo quis imperdiet
                massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
                augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
              </Typography>
            }
          </SideMenu>
        </Container>
      </ThemeProvider>
    </PlaceThemeContext.Provider>
  );
}

export default App;
