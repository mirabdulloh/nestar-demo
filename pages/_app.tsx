import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useEffect, useState } from "react";
import "../scss/app.scss";
import "../scss/pc/main.scss";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore

  const [theme, setTheme] = useState(createTheme(light));
  //! Socket.IO Client Init
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
