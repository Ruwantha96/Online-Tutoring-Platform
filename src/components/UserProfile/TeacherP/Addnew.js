import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
import './Addnew.css';
import Button from 'react-bootstrap/Button';
import Upload from './drag&drop'
const axios = require("axios");


export default class Addnew extends React.Component {

render() {
  return(
    <div>
 <Form>

    <h5 class="text-primary" style={{fontWeight:"bold" , marginLeft:"100px"}} >ADD A NEW TUTORIAL</h5>

  <Form.Group className='addnewline' controlId="Batch">
    <Form.Control type="text" placeholder="Batch" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className='addnewline' controlId="Class">
    <Form.Control type="text" placeholder="Class" />
  </Form.Group>

  <Form.Group className='addnewline' controlId="Lesson">
    <Form.Control type="text" placeholder="Lesson" />
  </Form.Group>

  <Form.Group className='addnewline' controlId="Fee">
    <Form.Control type="text" placeholder="Fee (Rs.)" />
  </Form.Group>

  <Upload/>

  <div style={{marginTop:'20px'}}>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>

</Form>

</div>
    )
  }
}