import { Stack } from "@mui/material";
import brown from "@mui/material/colors/brown";
import green from "@mui/material/colors/green";
import Head from "next/head";
import { Component } from "react";
import Top from "../Top";
import Footer from "../Footer";
import HeaderFilter from "../HomePage/HeaderFilter";


const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack id="top">
            <Top/>
          </Stack>
          <Stack id="header-main">
            <Stack className="container">
              <HeaderFilter />
            </Stack>
          </Stack>

          <Stack id="main">
            <Component {...props} />
          </Stack>
          <Stack id="footer">
              <Footer/>
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
