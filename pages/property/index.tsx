import withLayoutBasic from "@/libs/components/layout/LayoutBasix";
import { Box, Button, Container, Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import { NextPage } from "next";
import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Filter from "@/libs/components/Property/Filtes";
import PropertyCard from "@/libs/components/Property/PropertyCard";

const PropertyList: NextPage = () => {
  const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  return (
    <div id={"property-list-page"} style={{ position: "relative" }}>
      <Stack className={"container"}>
        <Box className={"right"}>
          <span>Sort by</span>{" "}
          <div>
            <Button endIcon={<KeyboardArrowDownRoundedIcon />}>New</Button>
          </div>
        </Box>
        <Stack className={"property-page"}>
          <Stack className="filter-config">
            <Filter />
          </Stack>
          <Stack className="main-config">
            {properties.map((property, index) => (
              <PropertyCard key={index} />
            ))}
          </Stack>
          <Stack className="pagination">
            
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};
export default withLayoutBasic(PropertyList);
