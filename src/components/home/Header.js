import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {Link } from 'react-router-dom';
 
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar  expand="lg" className="navigation">
  <Navbar.Brand href="/" className="brand">Shipment Management</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  > <Link to="/login" className="brand">Login</Link></Nav.Link>
      <Nav.Link ><Link to="/" className="brand">Signup</Link></Nav.Link>
  
    </Nav>

  </Navbar.Collapse>
</Navbar>
            </div>
        );
        }
    }


export default Header;
