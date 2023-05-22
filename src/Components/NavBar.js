import { Button, Input } from "@mui/joy";
import React, { useState } from "react";

import iimage from "../Images/ShoppingLogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div
        className="container d-flex p-0 "
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img src={iimage} alt="Logo" style={{ width: 100 }} />
        </Link>
        <h1 style={{ marginLeft: "20px" }}>Shopping Platform</h1>

        <Input
          placeholder="Search "
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{ marginLeft: "20px" }}
          endDecorator={
            <Button style={{ backgroundColor: "transparent", color: "black" }}>
              <SearchIcon
                onClick={() => {
                  setSearch("");
                  alert("Search Icon pressed");
                }}
              />
            </Button>
          }
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "10px",
          }}
        >
          <Link to={"/signin"} style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              style={{ marginLeft: "10px", paddingInline: "45px" }}
            >
              Sign In
            </Button>
          </Link>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              style={{ marginLeft: "10px", paddingInline: "45px" }}
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
