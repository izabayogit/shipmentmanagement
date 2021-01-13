import React, { Component } from 'react';
import {Form, Button, Card, Row, Col} from 'react-bootstrap';
  
import Header from './Header';
import Welcome from './Welcome'

class Signup extends Component {
    render() {
        return (
<div className="signup-container">
     <Header/>
     <Row>
         <Welcome/>
         <Col>  
        <div className="position-div">
        <div className="signup-div">
        
            <Card className="signup-card">
                <Form className="input-form">
                    <Form.Group className="formgroup">
                            <Form.Label>Username</Form.Label>
                            <Form.Control   placeholder="Enter username"  />
                    </Form.Group>

                    <Form.Group className="formgroup">
                            <Form.Label>Password</Form.Label>
                            <Form.Control  type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="formgroup">
                            <Form.Label>Retype Passwrod</Form.Label>
                            <Form.Control  type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="formgroup">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control   placeholder="Enter Display Name"  />
                    </Form.Group>
                    <Button variant="primary" type="submit" className= 'form-button'>
                        Create Account
                    </Button>
                    <div className="have-account">
                    <a href="#"> Already Have Account ? </a>
                    </div>
                </Form>
            </Card>
         
        </div>     
     </div>
     </Col>
       </Row>
  </div>
        );
    }
}

export default Signup;
