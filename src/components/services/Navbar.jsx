import React from "react";
import "./Services.css";
import logo from "../../assets/Logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { Container, InputBase } from "@mui/material";

const Nav = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  bottomBorder: "1px solid #e0e0e0",
  boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 6%)",
  height: "74px",
  justifyContent: "center",
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Search = styled("div")(({ theme }) => ({
  marginRight: "15%",
  borderRadius: "7px",
  width: "592px",
  border: "1px solid #D1D5DB",
}));

const SearchIconMod = styled(SearchIcon)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.54)",
  marginRight: '5px', 
  margin: '5px'
}));

const Navbar = () => {
  return (
    <Nav position="sticky">
    <Container>
      <StyledToolBar>
        <img src={logo} alt="logo" className="logo" />
        <Search>
          <InputBase
            placeholder="ძიება..."
            startAdornment={<SearchIconMod />}
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </StyledToolBar>
      </Container>
    </Nav>
  );
};

export default Navbar;

//  {/* // <div className="navbar">
//     //   <div className="">
//     //     <div className="navbar-2 m-[15%] ">
//     //       <div className="logo">
//     //         <img src={logo} alt="logo" />
//     //       </div>
//     //       <div>
//     //         <div className="absolute top-5 right-[54%]">
//     //           <input placeholder="ძიება " type='text' className="search-input border-2 rounded-[10px]"/>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div> */}
