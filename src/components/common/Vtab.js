import React, { Component } from 'react';
import {Tab, Nav, Row, Col, } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FcCustomerSupport } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';
import { BiPowerOff} from 'react-icons/bi';
import { BsFillGearFill} from 'react-icons/bs';


class Vtab extends Component {
    render() {
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills"  className="flex-column nav-tab">
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="first"><AiOutlineHome className='tab-icon'/> Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="second"><BsFillPeopleFill className='tab-icon'/> Users</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="third"><FcCustomerSupport className='tab-icon'/>Customers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="fourth"><FaUserCircle className='tab-icon'/>Profiles</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="fith"><BsFillGearFill className='tab-icon'/> Settings</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="sixth"><BiPowerOff className='tab-icon'/>Logout</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="seventh">Tab 2</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default Vtab;
