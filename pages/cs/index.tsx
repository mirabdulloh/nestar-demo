import withLayoutBasic from "@/libs/components/layout/LayoutBasix";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const CS: NextPage = () => {
  console.log("CS Pages router");
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">CS</Stack>
    </div>
  );
};

export default withLayoutBasic(CS);
