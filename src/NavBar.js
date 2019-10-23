import React from 'react';
import AppBar from 'material-ui/core/AppBar';
import ToolBar from 'material-ui/core/ToolBar';
import Typography from 'material-ui/Typography'

const NavBar = () => {
  return(
      <div>
      <AppBar position="static">
          <Toolbar>
              <Typography variant="title" color="inherit">
              React & Material-UI Sample Application
              </Typography>
          </Toolbar>
      </AppBar>
      </div>
  )
}
export default NavBar;

//Props are data from outside. State is data from inside. 