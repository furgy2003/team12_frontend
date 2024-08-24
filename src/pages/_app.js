import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F9EF1F",
      },
      secondary: {
        main: "#01A9FF",
      },
      text: {
        main: "#585858",
      },
      red: {
        main: "#B23239",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
