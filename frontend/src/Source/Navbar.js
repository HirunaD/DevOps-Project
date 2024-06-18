import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const navItems = [
  { text: "Home", link: "/" },
  { text: "About", link: "/promointerface" },
  { text: "Service", link: "/myorders" },
  { text: "Contact", link: "/contactus" },
];

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#4B0150" }}>
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1, color: "white" }}>
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ height: "50px", marginRight: "8px" }}
          />
          <b>Alpha Medicals</b>
        </Typography>

        <div>
          {navItems.map((item, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={item.link}
              style={{ marginLeft: "10px", color: "white" }}
            >
              {item.text}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
