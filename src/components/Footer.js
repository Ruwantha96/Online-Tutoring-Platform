import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {grey} from '@material-ui/core/colors';
import { createMuiTheme} from '@material-ui/core'

const theme =createMuiTheme({
    palette:{
      primary:{
        main:grey[900]
      },
    }
  })
  

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor:grey[700],
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer() {
  const classes = useStyles();
 

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
         Online Education
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        All rights reserved 2021
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

