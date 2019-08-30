import { lighten } from "polished";

const primaryColor = "#1171b7";

const theme = {
  primaryColor,
  primaryColorHover: lighten(0.1, primaryColor),
  borderColor: "#ccc",
  textColor: "#444444"
};

export default theme;
