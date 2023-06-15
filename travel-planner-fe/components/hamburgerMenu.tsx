"use client";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link, { LinkProps } from "@mui/material/Link";
import { Home, FormatListBulleted, Logout, Login } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

interface HamburgerListProps {
  handleCloseMenu: () => void;
}

const HamburgerList = ({ handleCloseMenu }: HamburgerListProps) => {
  const { user } = useContext(AuthContext);
  const Buttons = [
    {
      name: "Home",
      link: "/",
      icon: Home,
    },
    {
      name: "My Itineraries",
      link: "/itineraries",
      icon: FormatListBulleted,
    },
    {
      name: user ? "Logout" : "Sign In",
      link: user ? "/logout" : "/sign-in",
      icon: user ? Logout : Login,
    },
  ];

  return (
    <List>
      {Buttons.map((button) => {
        return (
          <ListItem key={button.name} disablePadding>
            <ListItemButton
              onClick={handleCloseMenu}
              component={Link}
              href={button.link}
            >
              <ListItemIcon>
                <button.icon />
              </ListItemIcon>
              <ListItemText primary={button.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default HamburgerList;
