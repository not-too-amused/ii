import { ThemeProvider } from "theme-ui";
import { theme } from "./theme/theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>hello world</h1>
    </ThemeProvider>
  );
}

export default App;
