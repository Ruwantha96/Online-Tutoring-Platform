import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import {indigo,grey} from '@material-ui/core/colors';
import { createMuiTheme} from '@material-ui/core'


const theme =createMuiTheme({
  palette:{
    primary:{
      main:grey[900]
    },
    secondary: {
      main: indigo[900]
    },
  }
})


const styles = theme => ({

  root: {
    flexGrow: 0,
    backgroundColor:indigo[300],
    
  },

  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
    
  },
  title: {
    display: "none",
    
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class ToolbarComponent extends React.Component {
  state = {
    achorEl: false,
    MobileMoreAnchorEl: false
  };

  render() {
    const { classes } = this.props;
    return (
      
      <div className={classes.grow}>
        <Grid item xs={12} container spacing={0} >
        <Grid item xs={3}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={this.props.openDrawerHandler} >
              <MenuIcon />
              <Typography className={classes.title}> COURSE CATEGORIES </Typography>
            </IconButton>

          </Toolbar>
        </AppBar>
        </Grid>
         
        <Grid  container justify="space-evenly" item xs={9} className={classes.root}  >
           <Button>HOME PAGE</Button>
           <Button>ABOUT</Button>
           <Button>INSTITUTES</Button>
           <Button>BECOME A TEACHER</Button>
           <Button>BECOME A STUDENT</Button>
           <Button>CONTACT</Button>
           

        </Grid>
        </Grid>
      </div>
     
    );
  }
}

export default withStyles(styles)(ToolbarComponent);


        
      
    