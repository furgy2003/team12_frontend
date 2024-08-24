import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ClientNav from "@/components/clients/ClientNav";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

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
        primary: "#585858",
      },
      red: {
        main: "#B23239",
      },
      gray: {
        main: "#EFEFEF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={inter.className}>
        <ClientNav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
