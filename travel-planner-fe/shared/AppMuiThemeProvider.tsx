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
import { StaticImageData } from "next/image";
import milford from "../public/milford.jpg";

const contextIsDark = createContext<
  { isDark: boolean; setIsDark: (isDark: boolean) => void } | undefined
>(undefined);

const contextBackgroundImage = createContext<
  | {
      backgroundImage: string;
      setBackgroundImage: (image: string) => void;
    }
  | undefined
>(undefined);

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  // @ts-ignore
  return <NextLink ref={ref} {...props} />;
});

export default function AppMuiThemeProvider(props: {
  children: React.ReactNode;
}) {
  const { children } = props;
  const [backgroundImage, setBackgroundImage] = useState<string>(milford.src);
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
            main: "#FF4F61",
          },
          secondary: {
            main: "#FFCB3A",
          },
          background: {
            paper: "#0049B7",
            default: "#1E2425",
          },
          text: {
            primary: "#FFF",
            secondary: "#FFFFFF",
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
  const wrap = useMemo(
    () => ({ backgroundImage, setBackgroundImage }),
    [backgroundImage]
  );

  return (
    <ThemeProvider theme={theme}>
      <contextBackgroundImage.Provider value={wrap}>
        <Box
          id="app-container"
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {children}
        </Box>
      </contextBackgroundImage.Provider>
    </ThemeProvider>
  );
}

export function useBackgroundImage() {
  const wrap = useContext(contextBackgroundImage);

  if (wrap === undefined) {
    throw new Error("Not wrapped in provider");
  }

  return wrap;
}

export function useIsDark() {
  const wrap = useContext(contextIsDark);

  if (wrap === undefined) {
    throw new Error("Not wrapped in provider");
  }

  return wrap;
}
