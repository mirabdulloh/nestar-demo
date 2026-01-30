import React from "react";
import { Stack, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PaginationCard = () => {
  return (
    <Stack className="property-pagination">

      <IconButton className="nav-btn">
        <ChevronLeftIcon />
      </IconButton>

      {[1, 2, 3, 4, 5].map((num) => (
        <Typography
          key={num}
          className={`page-number ${num === 2 ? "active" : ""}`}
        >
          {num}
        </Typography>
      ))}

      <Typography className="dots">...</Typography>
      <Typography className="page-number">20</Typography>

      <IconButton className="nav-btn">
        <ChevronRightIcon />
      </IconButton>

    </Stack>
  );
};

export default PaginationCard;
