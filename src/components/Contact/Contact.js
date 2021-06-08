import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../Contact/Contact.css'
import Header from '../Header/Header'
import NavBar from '../NavigationBar/NavBar'
import Footer from '../Footer/Footer';
import Image from '../../images/w.jpg'

const useStyles = makeStyles((theme) => ({
  
  Contact: {
    position: 'relative',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
  },
 
  aboutPostContent: {
      
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },

}));

export default function Contact() {
  const classes = useStyles();
  
  return (

    <div>
         <Header />
        <NavBar />
   
    <Paper className={classes.Contact}>
    
      <Grid container >
      <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: '100%', height: '150px'}}></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
      </Grid>
    </Paper>
    <Footer />
    </div>
  );
}