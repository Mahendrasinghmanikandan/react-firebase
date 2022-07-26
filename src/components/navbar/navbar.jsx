import { Avatar } from "@mui/material";
import React, { useState } from "react";
import Login from "../login/Login";
import "./navbar.css";
const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="left_side">
          <Avatar>M</Avatar>
        </div>
        <div className="center_side">
          <h1>Firebase Crud</h1>
        </div>
        <div className="right_side">
          {auth ? (
            <button className="buttons">Logout</button>
          ) : (
            <button
              className="buttons"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
      {open && <Login status={open} setStatus={setOpen} />}
    </>
  );
};

export default Navbar;
