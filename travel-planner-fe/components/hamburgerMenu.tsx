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
import { default as NextLink } from "next/link";
import { Home, FormatListBulleted, Logout } from "@mui/icons-material";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={NextLink} />;
}

interface HamburgerListProps {
  handleCloseMenu: () => void;
}

const HamburgerList = ({ handleCloseMenu }: HamburgerListProps) => {
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
      name: "Logout",
      link: "/logout",
      icon: Logout,
    },
  ];

  return (
    <List>
      {Buttons.map((button) => {
        return (
          <ListItem key={button.name} disablePadding>
            <ListItemButton
              onClick={handleCloseMenu}
              component={LinkRouter as any}
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
