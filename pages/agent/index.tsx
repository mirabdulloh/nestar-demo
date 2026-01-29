import withLayoutBasic from "@/libs/components/layout/LayoutBasix";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AGENT: NextPage = () => {
  console.log("AGENT Component Pages router");
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">AGENT LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(AGENT);
