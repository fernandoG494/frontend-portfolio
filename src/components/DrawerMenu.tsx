import { useContext } from "react";
import { PlaceThemeContext } from "../context/ThemeContext";

import { IDrawer, ISection } from "../interfaces/layout-interfaces";
import Section from "../components/Section";

import DarkDev from "../assets/dev-icon-dark.svg";
import LightDev from "../assets/dev-icon-light.svg";

import { sectionsData } from "../data/data";
import { List, Stack, Typography } from "@mui/material";

const DrawerMenu = ({ setTitle }: IDrawer) => {
  const themeContext = useContext(PlaceThemeContext);

  const {
    currentTheme: {
      updatedTheme: { backgrounds, texts },
      updatedTheme: { themeType },
    },
  } = themeContext;

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: backgrounds.bg100,
        color: texts.text100,
      }}
    >
      <span>
        <Stack
          direction="row"
          className="developer-portfolio-title"
          spacing={1}
        >
          <img
            src={themeType == "light" ? DarkDev : LightDev}
            alt="Developer icon"
            className="Dev-icon"
          ></img>
          <Typography variant="h5">Developer Portfolio</Typography>
        </Stack>
      </span>
      <List>
        {sectionsData.map((section: ISection) => {
          return (
            <Section
              text={section.text}
              key={section.text}
              url={section.url}
              setTitle={setTitle}
            />
          );
        })}
      </List>
    </div>
  );
};

export default DrawerMenu;
