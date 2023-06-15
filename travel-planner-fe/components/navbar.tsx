"use client";
import { useState } from "react";
import "./menu.css";
import Link from "next/link";
import CurrentUser from "./currentUserComponent";
import { Drawer, IconButton, Stack } from "@mui/material";
import { Menu } from "@mui/icons-material";
import HamburgerList from "./hamburgerMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };
  return (
    <Stack direction="row" justifyContent="space-between">
      <IconButton onClick={toggleMenu}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={handleCloseMenu} onKeyDown={handleCloseMenu}>
        <HamburgerList handleCloseMenu={handleCloseMenu} />
      </Drawer>
      <CurrentUser />
    </Stack>
  );
};

export default Navbar;
