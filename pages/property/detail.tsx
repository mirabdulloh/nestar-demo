import withLayoutBasic from "@/libs/components/layout/LayoutBasix";
import { Container, Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  console.log("Property Component Pages router");
  return (
    <>
      <Container>Property Detail</Container>
    </>
  );
};

export default withLayoutBasic(PropertyDetail);
