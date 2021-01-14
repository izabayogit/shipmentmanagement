import React, { Component } from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import Header from './Header';

class Login extends Component {
    render() {
        return (
            <div>
                <Header/>
               <div className="position-div-login">
        <div className="signup-div-login">
        
            <Card className="signup-card">
                <Form className="input-form" >
                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Username <p></p></Form.Label>
                            <Form.Control  name="username" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Password <p></p></Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary"  className= 'form-button' >
                        Create Account                   
                    </Button>
                    <div className="have-account">
                    <a href="/"> Don&apos;t Have Account ? </a>
                    </div>
                </Form>
            </Card>
         
        </div>     
     </div>
            </div>
        );
    }
}

export default Login;
