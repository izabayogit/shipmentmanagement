import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
 
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar  expand="lg" className="navigation">
  <Navbar.Brand href="/" className="brand">Shipment Management</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/login" className="brand">Login</Nav.Link>
      <Nav.Link href="/" className="brand">Signup</Nav.Link>
  
    </Nav>

  </Navbar.Collapse>
</Navbar>
            </div>
        );
        }
    }


export default Header;
