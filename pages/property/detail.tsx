import withLayoutBasic from "@/libs/components/layout/LayoutBasix";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  console.log("Property Component Pages router");
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>Property Detail Mobile</Stack>;
  } else {
    return (
      <>
        <Container>Property Detail</Container>
      </>
    );
  }
};

export default withLayoutBasic(PropertyDetail);
