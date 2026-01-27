import { Stack } from "@mui/material";
import brown from "@mui/material/colors/brown";
import green from "@mui/material/colors/green";
import Head from "next/head";
import { Component } from "react";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
   return(
     <>
      <Head>
        <title>Nestar</title>
      </Head>
      <Stack id="pc-wrap">
        <Stack sx={{ background: green[300] }}>Header Basic</Stack>
        <Stack id="main">
          <Component {...props} />
        </Stack>
        <Stack sx={{ background: brown[300] }}>Footer</Stack>
      </Stack>
    </>
   )
  };
};

export default withLayoutBasic;
