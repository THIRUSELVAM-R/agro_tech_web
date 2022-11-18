import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="header_root">
          <Typography variant="h6">Agro Tech Drone</Typography>
          <div>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/live-survey">
              <Button color="inherit">Live Survey</Button>
            </Link>
            <Link to="/analytics">
              <Button color="inherit">Analytics</Button>
            </Link>
            <Link to="/export">
              <Button color="inherit">Export</Button>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
