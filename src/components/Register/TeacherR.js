import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../Contact/Contact.css'
import Header from '../Header/Header'
import NavBar from '../NavigationBar/NavBar'
import Footer from '../Footer/Footer';
import Image from '../../images/e.jpg'

class RegisterTea extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      address: '',
      password: ''
    }
  }

  render() {
  return (

    <div>
         <Header />
        <NavBar />
   
    <Paper >
      
      <div  />
        <div >
        <img src={Image} height="300px" width="100%"/>
        </div>


      <div className="col-lg-12  d-flex justify-content-center">
      <div className="contact-image">
                
      </div>
        <div className="justify-content-center col-lg-5 col-md-6 col-sm-12">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <h4 className="text-primary text-center m-5">Register as a Teacher</h4>
               <div className="row">
                    <div className="pb-5">
                        <div className="d-flex col-12 justify-content-between">
                          <div className="form-group float-left col-lg-6 col-sm-12 mb-3">
                              <input type="text" name="txtFirstName"  className="form-control col-lg-11" placeholder="Your First Name *" value={this.state.fName} onChange={this.onFNameChange.bind(this)} />
                          </div>
                          <div className="form-group float-left col-lg-6 col-sm-12 mb-3">
                              <input type="text" name="txtLastName" className="form-control col-lg-11" placeholder="Your Last Name *" value={this.state.lName} onChange={this.onLNameChange.bind(this)} />
                          </div>
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email Address*" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="txtAddress" className="form-control" placeholder="Your Address *" value={this.state.address} onChange={this.onAddressChange.bind(this)} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" name="txtPassword" className="form-control" placeholder="Your Password *" value={this.state.password} onChange={this.onPasswordChange.bind(this)} />
                        </div>
                        <div className="form-group mb-2">
                            <input type="submit" name="btnSubmit" className=" form-control bg-primary text-white mt-5  " value="SIGN UP" />
                        </div>
                        <p className="text-center text-primary ">Already have account? Sign in</p>
                    </div>
                </div>
            </form>
        </div>
            
      </div>
    </Paper>
    <Footer />
    </div>
  );
}

onFNameChange(event) {
  this.setState({fName: event.target.value})
}

onLNameChange(event) {
  this.setState({lName: event.target.value})
}

onEmailChange(event) {
  this.setState({email: event.target.value})
}

onMessageChange(event) {
  this.setState({message: event.target.value})
}
onPhoneChange(event) {
  this.setState({phone: event.target.value})
}
onAddressChange(event) {
  this.setState({address: event.target.value})
}
onPasswordChange(event) {
  this.setState({password: event.target.value})
}

handleSubmit(event) {
  event.preventDefault();
  if (this.state.fName=='') {
    console.log("please add name");
  } else if (this.state.lName=='') {
    console.log("please add lname");
  } else if(this.state.email==''){
    console.log("please add email");
  } else if(this.state.phone==''){
    console.log("please add phone");
  } else if(this.state.address==''){
    console.log("please add address");
  }else if(this.state.password==''){
    console.log("please add pass");
  } else{
    // console.log("All data Ready to send");
    // console.log(this.state);
    this.createTeacher();
    this.resetForm();

  }
  
}
resetForm(){
  this.setState({name: '', email: '', message: '', phone: '', address: ''})
}

}
export default RegisterTea;