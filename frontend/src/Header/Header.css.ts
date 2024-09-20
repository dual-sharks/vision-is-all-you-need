import { style } from "@vanilla-extract/css";
import { vars } from "../theme";
import { rem } from "@mantine/core";

export const title = style({
  color: vars.colors.black,
  fontSize: rem(50),
  fontWeight: 900,
  letterSpacing: rem(-2),
  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
  },

  "@media": {
    [vars.smallerThan("md")]: {
      fontSize: rem(25),
    },
  },
});

export const header = style({
  height: 60,
  backgroundColor: vars.colors.body,
  borderBottom: `1px solid ${vars.colors.gray[3]}`,
  borderBottomColor: vars.colors.gray[3],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  selectors: {
    [vars.darkSelector]: {
      borderBottomColor: vars.colors.dark[4],
    },
  },
});