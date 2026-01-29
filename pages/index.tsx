import withLayoutMain from "@/libs/components/layout/LayoutHome";
import Top from "@/libs/components/Top";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrendProperties from "@/libs/components/HomePage/TrendProperties";
import PopularProperties from "@/libs/components/HomePage/PopularProperties";
import Advertisement from "@/libs/components/HomePage/Advertisement";
import TopProperties from "@/libs/components/HomePage/TopProperties";
import TopAgents from "@/libs/components/HomePage/TopAgents";

const Home: NextPage = () => {
  return (
    <Stack className="homepage">
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};

export default withLayoutMain(Home);
