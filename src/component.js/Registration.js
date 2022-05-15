import React from 'react'
import Card from "react-bootstrap/Card";
import ml from "../images/ml.jpg"
import arti from "../images/Arti.jpg"
import ds from "../images/ds.jpg"
import  Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import './service.css';
import FormGroup from 'react-bootstrap/esm/FormGroup';
function registration() {
  return (
    <div className='App'>
      <h1 className="heading2">Registration form</h1>
            <div>
            <Form className="Form">
  <Form.Group className="xs-3" controlId="accountUsername">
    <Form.Label>Enter User name</Form.Label>
    <Form.Control type="email" placeholder="Enter Username"  className='label'/>
    <Form.Text className="text-muted">
      We'll never share your username with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="text">
  <Form.Label>Enter Your Name</Form.Label>
      <Form.Control placeholder="First name" className='label'/>
      <Form.Control placeholder="Last name"  className='label'/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="text">
    <Form.Label>Enter University/College name</Form.Label>
    <Form.Select aria-label='Chooose your college' className="label">
      <option>Select from below</option>
      <option value="1">VNRVJIET</option>
      <option value="2">CBIT</option>
      <option value="3">VCE</option>
      <option value="4">TKR</option>

    </Form.Select>


  </Form.Group>
  <Form.Group>
    <Form.Label>Enter your Graduation</Form.Label>
    <Form.Select aria-label="Select your degree" className="label">
  <option value="1">B.Tech</option>
  <option value="2">M.Tech</option>
  <option value="3">MS</option>
</Form.Select>
  </Form.Group>
  <Form.Group>
    <Form.Label>Enter card number</Form.Label>
    <Form.Control className='label'/>
  </Form.Group>
  <Col xs="auto">
      <Button type="submit" className="mb-2">
        Make Payment
      </Button>
      </Col>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
</Form>
            </div>  
           
    </div>
  )
}

export default registration
