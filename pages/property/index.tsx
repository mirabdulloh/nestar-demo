import withLayoutBasic from "@/libs/components/layout/LayoutBasix";
import { Box, Button, Container, Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import { NextPage } from "next";
import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Filter from "@/libs/components/Property/Filtes";
import PropertyCard from "@/libs/components/Property/PropertyCard";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const PropertyList: NextPage = () => {
  const device = useDeviceDetect();
  const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const totalItems = 13;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (device === "mobile") {
    return <Stack>Property List Mobile</Stack>;
  } else {
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
              <Stack className="pagination">
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "16px",
                    justifyContent: "center",
                  }}
                >
                  <button
                    className="pagination-arrow"
                    onClick={() =>
                      currentPage > 1 && setCurrentPage(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                  >
                    <KeyboardArrowLeftRoundedIcon />
                  </button>
                  <div className="pagination-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          className={`page-number ${currentPage === page ? "active" : ""}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      ),
                    )}
                  </div>
                  <button
                    className="pagination-arrow"
                    onClick={() =>
                      currentPage < totalPages &&
                      setCurrentPage(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                  >
                    <KeyboardArrowRightRoundedIcon />
                  </button>
                </Stack>
                <span className="pagination-info">
                  Total {totalItems} properties available
                </span>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
};
export default withLayoutBasic(PropertyList);
