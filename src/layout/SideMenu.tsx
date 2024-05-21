import { useContext, useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  Stack,
  Switch,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {
  IPlaceThemeProvider,
  PlaceThemeContext,
} from "../context/ThemeContext";
import { sectionsData } from "../data/data";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

import DarkDev from "../assets/dev-icon-dark.svg";
import LightDev from "../assets/dev-icon-light.svg";

import "../styles/SideMenu.scss";
import { ISection } from "../interfaces/layout-interfaces";
import Section from "../components/Section";

const drawerWidth = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SideMenu = ({ children }: any) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const themeContext = useContext(PlaceThemeContext);

  const {
    currentTheme: {
      updatedTheme: { backgrounds, texts },
      updatedTheme: { themeType },
    },
  } = themeContext;

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleThemeChange: any = (themeContext: IPlaceThemeProvider) => {
    const { currentTheme, setNewTheme } = themeContext;

    if (currentTheme.updatedTheme.themeType == "light") {
      setNewTheme(dark);
    } else if (currentTheme.updatedTheme.themeType == "dark") {
      setNewTheme(light);
    }
  };

  const drawer = (
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
          return <Section text={section.text} />;
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            width="100%"
          >
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
            <div className="ThemeSwitcher">
              <Switch
                size="small"
                onChange={() => handleThemeChange(themeContext)}
              />
            </div>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default SideMenu;
