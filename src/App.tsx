import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
