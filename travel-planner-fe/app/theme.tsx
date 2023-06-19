"use client";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import NextLink from "next/link";
import React, { ReactElement, ReactNode, forwardRef, useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  // @ts-ignore
  return <NextLink ref={ref} {...props} />;
});

export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        // @ts-ignore
        component: LinkBehaviour,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
      },
    },
  },
});

const MakeTheme = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MakeTheme;
