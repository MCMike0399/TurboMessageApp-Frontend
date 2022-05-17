import React from "react";
import { Grid, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";

function App(): JSX.Element {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <Grid
        container
        direction="row"
        sx={{ minHeight: "44rem", width: "90vw" }}
      >
        <Grid sx={{ width: "25%" }}>
          <SideBar />
        </Grid>
        <Grid sx={{ width: "75%" }}>
          <TopBar />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
