import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import { MenuOpenProvider } from "@/components/context/menuOpenContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <MenuOpenProvider>
        <Component {...pageProps} />
      </MenuOpenProvider>
    </StrictMode>
  );
}
