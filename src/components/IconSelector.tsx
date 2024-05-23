import { useContext } from "react";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import AirplayRoundedIcon from "@mui/icons-material/AirplayRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import { PlaceThemeContext } from "../context/ThemeContext";

interface IIcon {
  text: string;
}

const IconSelector = ({ text }: IIcon) => {
  const {
    currentTheme: {
      updatedTheme: { texts },
    },
  } = useContext(PlaceThemeContext);

  switch (text) {
    case "Dashboard":
      return <DashboardCustomizeRoundedIcon style={{ fill: texts.text100 }} />;
    case "About me":
      return <AccessibilityNewRoundedIcon style={{ fill: texts.text100 }} />;
    case "Front end projects":
      return <AirplayRoundedIcon style={{ fill: texts.text100 }} />;
    case "Back end projects":
      return <StorageRoundedIcon style={{ fill: texts.text100 }} />;
    default:
      return <></>;
  }
};

export default IconSelector;
