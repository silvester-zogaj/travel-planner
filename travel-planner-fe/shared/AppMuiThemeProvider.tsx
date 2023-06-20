"use client";
import {
  createContext,
  useState,
  useMemo,
  forwardRef,
  useContext,
  useEffect,
} from "react";
import createTheme from "@mui/material/styles/createTheme";
import Paper from "@mui/material/Paper";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import NextLink from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";

const contextIsDark = createContext<
  { isDark: boolean; setIsDark: (isDark: boolean) => void } | undefined
>(undefined);

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  // @ts-ignore
  return <NextLink ref={ref} {...props} />;
});

export default function AppMuiThemeProvider(props: {
  children: React.ReactNode;
}) {
  const { children } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    const rootColorSchemeStyleTagId = "root-color-scheme";

    document.getElementById(rootColorSchemeStyleTagId)?.remove();

    document.head.insertAdjacentHTML(
      "afterend",
      `<style id="${rootColorSchemeStyleTagId}">:root { color-scheme: ${
        prefersDarkMode ? "dark" : "light"
      }; }</style>`
    );
  }, [prefersDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            light: "#FFD180",
            main: "#FFA726",
            dark: "#E65100",
            contrastText: "#fff",
          },
          secondary: {
            light: "#FFCC80",
            main: "#FF9800",
            dark: "#EF6C00",
            contrastText: "#fff",
          },
          background: {
            default: "#FFB74D",
            paper: "#FFE0B2",
          },
        },
        typography: {
          // fontFamily: "Do Hyeon",
        },
        shape: {
          borderRadius: 16,
        },
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
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="app-container"
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}

export function useIsDark() {
  const wrap = useContext(contextIsDark);

  if (wrap === undefined) {
    throw new Error("Not wrapped in provider");
  }

  return wrap;
}
