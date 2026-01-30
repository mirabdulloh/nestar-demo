import {
  Button,
  Checkbox,
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  Stack,
  Tooltip,
  Typography,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { start } from "repl";

const Filter = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const squareOptions = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const priceOptions = [
    0, 50000, 100000, 150000, 200000, 300000, 400000, 500000, 750000, 1000000,
    1500000, 2000000,
  ];

  return (
    <Stack className="filter-main">
      <Stack className="find-your-home" mb={"40px"}>
        <Typography className="title-main">Find Your Home</Typography>
        <Stack className="input-box">
          <OutlinedInput
            sx={{
             
            }}
            value={searchText}
            type="text"
            className="search-input"
            placeholder="what are you looking?"
            onChange={(e: any) => setSearchText(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src="/img/icons/search_icon.png"
                  alt="search-icon"
                  className="search-icon"
                />
              </InputAdornment>
            }
          />
          <Tooltip title="Reset">
            <IconButton>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
      <Stack className="find-your-home" mb={"30px"}>
        <Typography className="title">Location</Typography>
        <Stack className="property-location">
          {["SEOUL", "BUSAN", "DAEGU"].map((location) => {
            return (
              <Stack className="input-box" key={location}>
                <Checkbox
                  sx={{ padding: "0px" }}
                  id={location}
                  className="property-checkbox"
                  color="default"
                  size="small"
                  value={location}
                  checked={false}
                />
                <label htmlFor={location} style={{ cursor: "pointer" }}>
                  <Typography className="property-type">{location}</Typography>
                </label>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <Stack className="find-your-home" mb={"30px"}>
        <Typography className="title">Property Type</Typography>
        <Stack className="property-type-list">
          {["APARTMENT", "VILLA", "HOUSE"].map((type) => {
            return (
              <Stack className="input-box" key={type}>
                <Checkbox
                  sx={{ padding: "0px" }}
                  id={type}
                  className="property-checkbox"
                  color="default"
                  size="small"
                  value={type}
                  checked={false}
                />
                <label htmlFor={type} style={{ cursor: "pointer" }}>
                  <Typography className="property-type">{type}</Typography>
                </label>
              </Stack>
            );
          })}
        </Stack>
      </Stack>

      <Stack className="find-your-home" mb={"30px"}>
        <Typography className="title">Rooms</Typography>
        <Stack className="button-group">
          <Button
            sx={{
              borderRadius: "12px 0 0 12px",
              border: "1px solid  #DDD",
            }}
          >
            Any
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid  #DDD",
            }}
          >
            1
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid  #DDD",
            }}
          >
            2
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid  #DDD",
            }}
          >
            3
          </Button>

          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid  #DDD",
            }}
          >
            4
          </Button>
          <Button
            sx={{
              borderRadius: "0 12px 12px 0",
              border: "1px solid  #DDD",
            }}
          >
            5+
          </Button>
        </Stack>
      </Stack>
      <Stack className="find-your-home" mb={"30px"}>
        <Typography className="title">BedRooms</Typography>
        <Stack className="button-group">
          <Button
            sx={{
              borderRadius: "12px 0 0 12px",
              border: "1px solid  #DDD",
            }}
          >
            Any
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid  #DDD",
            }}
          >
            1
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid  #DDD",
            }}
          >
            2
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid  #DDD",
            }}
          >
            3
          </Button>

          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid  #DDD",
            }}
          >
            4
          </Button>
          <Button
            sx={{
              borderRadius: "0 12px 12px 0",
              border: "1px solid  #DDD",
            }}
          >
            5+
          </Button>
        </Stack>
      </Stack>
      <Stack className="find-your-home" mb={"30px"}>
        <Typography className="title">Options</Typography>
        <Stack className="input-box">
          <Checkbox
            id="Barter"
            className="property-checkbox"
            color="primary"
            size="small"
            value="Barter"
            checked={false}
          />
          <label htmlFor="Barter" style={{ cursor: "pointer" }}>
            <Typography className="property-type">Barter</Typography>
          </label>
        </Stack>
        <Stack className="input-box">
          <Checkbox
            id="Buy"
            className="property-checkbox"
            color="primary"
            size="small"
            value="Buy"
            checked={false}
          />
          <label htmlFor="Buy" style={{ cursor: "pointer" }}>
            <Typography className="property-type">Buy</Typography>
          </label>
        </Stack>
      </Stack>

      <Stack className="find-your-home" mb={"30px"}>
        <Typography className="title">Square Meter</Typography>
        <Stack className="square-year-input">
          <FormControl className="form-control">
            <InputLabel className="demo-simple-select-label">Min</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Min"
            >
              {squareOptions.map((square: number) => (
                <MenuItem key={square} value={square}>
                  {square} m²
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          -
          <FormControl className="form-control">
            <InputLabel className="demo-max-select-label">Max</InputLabel>
            <Select
              labelId="demo-max-select-label"
              id="demo-max-select"
              value={500}
              label="Max"
            >
              {squareOptions.map((square: number) => (
                <MenuItem key={square} value={square}>
                  {square} m²
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack className="find-your-home" mb={"30px"}>
        <Typography className="title">Price Range</Typography>
        <Stack className="square-year-input">
          <FormControl className="form-control">
            <InputLabel className="demo-simple-select-label">Min</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Min"
            >
              {priceOptions.map((price: number) => (
                <MenuItem key={price} value={price}>
                  {price} $
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          -
          <FormControl className="form-control">
            <InputLabel className="demo-max-select-label">Max</InputLabel>
            <Select
              labelId="demo-max-select-label"
              id="demo-max-select"
              value={2000000}
              label="Max"
            >
              {priceOptions.map((price: number) => (
                <MenuItem key={price} value={price}>
                  {price} $
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Filter;
