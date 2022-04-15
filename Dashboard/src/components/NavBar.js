import React, {useState} from "react";
import {Avatar, Stack, Button, Menu, MenuItem} from "@mui/material";
import { deepOrange } from "@mui/material/colors";


function NavBar() {
const[anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (e) => { 
  setAnchorEl(e.currentTarget);
}
const handleClose = () => { 
  setAnchorEl(null)
};

  return (
    <div className="main__nav">
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>HH</Avatar>
      </Stack>
    </div>
  );
}

export default NavBar;
