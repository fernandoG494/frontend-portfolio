import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ISection } from "../interfaces/layout-interfaces";
import IconSelector from "./IconSelector";

import { useNavigate } from "react-router-dom";

const Section = ({ text, url, setTitle }: ISection) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    setTitle(text);
    navigate(url);
  };

  return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={handleNavigation}>
        <ListItemIcon>
          <IconSelector text={text} />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default Section;
