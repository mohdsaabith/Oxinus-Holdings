import "@/styles/globals.css";
import muiTheme from "@/styles/theme";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import { MenuOpenProvider } from "@/components/context/menuOpenContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App({ Component, pageProps }: AppProps) {
  let theme = createTheme(muiTheme);
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <MenuOpenProvider>
          <Component {...pageProps} />
        </MenuOpenProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
