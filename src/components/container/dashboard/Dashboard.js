import React, { Component } from 'react';
import {Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Vtab from '../../common/Vtab'
import { FaSearch } from 'react-icons/fa';
import CustomerTable from './CustomerTable';
import Profile from './Profile'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className='dashboard-container'>
                    <Row>
                        <Col>
                            <div className='right-dash'>
                                <h6 className='dash-logo'>Shipmentmanagement</h6>
                                <Vtab/>
                            </div>
                        </Col>
                        <Col>
                            <div className='middle-dash-div'>
                                <div className="dash-bar">
                                    <span className='dash-title'> Dashboard</span>
    
                                    <InputGroup className="mb-3 dash-search">
                                        <FormControl
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2"><FaSearch/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </div>
                                <div className="dash-intro">
                                    <aside className="dash-aside">
                                        <h3> Welcome Dumy</h3>
                                        <p> Be safe far away form risks.
                                            by ensuring your cargo to the world&apos;s best shipping expert
                                        </p>
                                    </aside>
                                    <img className='dash-intro-photo' alt ='#' src='https://image.freepik.com/free-vector/tiny-people-near-hashtag-social-media-flat-illustration_74855-11115.jpg'/>
                                </div>                           
                                <CustomerTable/>                          
                            </div>
                        </Col>
                        <Col>
                            <Profile/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
