import { useContext, useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
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
import DrawerMenu from "../components/DrawerMenu";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

import "../styles/SideMenu.scss";

const drawerWidth = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SideMenu = ({ children }: any) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [title, setTitle] = useState("Dashboard");

  const themeContext = useContext(PlaceThemeContext);

  const {
    currentTheme: {
      updatedTheme: { backgrounds, texts },
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
        <Toolbar
          style={{
            backgroundColor: backgrounds.bg300,
          }}
        >
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
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{
                color: texts.text100,
              }}
            >
              {title}
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
          <DrawerMenu setTitle={setTitle} />
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
          <DrawerMenu setTitle={setTitle} />
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
