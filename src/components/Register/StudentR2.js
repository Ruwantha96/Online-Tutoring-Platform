import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image from '../../images/c.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import NavBar from '../NavigationBar/NavBar'


const useStyles = makeStyles((theme) => ({
  
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      
    },
   
    mainFeaturedPostContent: {
        
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('xs')]: {
        padding: theme.spacing(10),
        
      },
    },

    paper: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
   
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  
   

  
  }));


export default function StudentR2 () {

    const classes = useStyles();

    return (

      <div className="App">
        <Header />
        <NavBar />
        <div>
            
    <Paper className={classes.mainFeaturedPost}>
      
      <div className={classes.overlay} />
      <Grid container >
        <Grid container justify="center" item xs={12}>
          <div className={classes.mainFeaturedPostContent}>
              
            <Typography component="h1" variant="h3"  gutterBottom>
               STUDENT
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
             " Online learning empowers your employees to train with full autonomy and flexibility. It taps into the fundamentals of intrinsic motivation and allows each individual employee to control their own learning journey "
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
        </div>


        <div>
          
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h2" variant="h5" color='primary'>
          Register as a Student
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoComplete="first name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="last name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone_number"
                label="Phone Number"
                id="phone_number"
                autoComplete="phone"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                id="address"
                autoComplete="address"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>

            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    
    </Container>
        </div>
        <Footer />
      </div> 
    );
  }
  