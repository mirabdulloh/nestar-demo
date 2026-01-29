import withLayoutBasic from "@/libs/components/layout/LayoutBasix";
import { Container, Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  console.log("Property Component Pages router");
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">Property List</Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
