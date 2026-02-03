import withLayoutBasic from "@/libs/components/layout/LayoutBasix";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("Community Component Pages router");
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>Community Mobile</Stack>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">Community</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(Community);
