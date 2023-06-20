import { createMakeAndWithStyles } from "tss-react";
import useTheme from "@mui/material/styles/useTheme";

export const { makeStyles, useStyles, withStyles } = createMakeAndWithStyles({
  useTheme,
});
