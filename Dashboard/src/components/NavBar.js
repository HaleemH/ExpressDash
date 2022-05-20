import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Avatar, Stack, Button, Menu, MenuItem } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <div className="main__nav">
      <h2 className="Headline">Express Dashboard</h2>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>Overview</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={handleClose}>Inventory</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={handleClose}>Schedule</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
      </Menu>

      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>HH</Avatar>
      </Stack>
    </div>
  );
}

export default NavBar;
