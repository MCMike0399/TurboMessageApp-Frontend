import React from 'react'
import { Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';

function Header() {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" fontSize='48px' sx={{background:'#202c33'}}>
        <AccountCircleIcon 
        fontSize='inherit'
        sx={{
            minHeight: 40,
            color: 'white'
        }}
        />
        
        <MessageIcon fontSize='large' sx={{color: 'white'}} />
    </Grid>
  )
}

export default Header