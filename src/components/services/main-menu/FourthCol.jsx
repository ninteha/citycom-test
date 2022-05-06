import styled from "@emotion/styled";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const SearchIconMod = styled(SearchIcon)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.54)",
  marginRight: "5px",
  margin: "5px",
}));

const SearchMod = styled("div")(({ theme }) => ({
  marginRight: "15%",
  width: "308px",
  border: "1px solid #D1D5DB",
  borderRadius: "27px",
  color: "black",
  backgroundColor: "#f3f4f6",
}));

const FourthCol = ({ setSearch }) => {
  return (
    <SearchMod>
      <InputBase
        placeholder="სერვისის დასახელება"
        startAdornment={<SearchIconMod />}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchMod>
  );
};

export default FourthCol;
