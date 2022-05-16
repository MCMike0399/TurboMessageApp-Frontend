import React from "react";
import { Grid } from "@mui/material";

function TopBar() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      fontSize="48px"
      sx={{ background: "#202c33", width: "75%" }}
    ></Grid>
  );
}

export default TopBar;
