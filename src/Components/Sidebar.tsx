import React from 'react';
import { Grid } from "@mui/material";
import Header from './SideBar/Header';
import WaSearchBar from './SideBar/WaSearchBar';

function SideBar() {
  return (
    <Grid sx={{width: '25%'}} >
        <Header />
        <WaSearchBar />
    </Grid>
  )
}

export default SideBar