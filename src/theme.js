import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const palette = {
  primary: { main: "#6200EA", contrastText: "#ffffff" },
  secondary: { main: "#00e5ff" }
};
const themeName = "Electric Violet Cyan / Aqua Leopard";

let theme = createMuiTheme({ palette, themeName });
theme = responsiveFontSizes(theme);

export default theme;
