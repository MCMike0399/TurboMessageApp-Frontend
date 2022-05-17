import React from "react";
import { Grid } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

function TopBar() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      fontSize="48px"
      sx={{ background: "#202c33" }}
      height="5.65rem"
    >
      <FaceIcon
        fontSize="inherit"
        sx={{
          minHeight: 40,
          color: "white",
          marginRight: 4
        }}
      />
    </Grid>
  );
}

export default TopBar;
