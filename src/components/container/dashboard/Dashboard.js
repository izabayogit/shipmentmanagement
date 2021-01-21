import React, { Component } from 'react';
import {Col, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import CustomerTable from './CustomerTable';

import { Scrollbars } from 'react-custom-scrollbars';
class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-tab'>
                <div className='dashboard-container'>
                        <Col>
                            <div className='middle-dash-div'>
                                <div className="dash-bar">
                                    <span className='dash-title'> Customers</span>
    
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
                                <Scrollbars style={{ width: 750, height: 500 }}>
                                {/* <div className="dash-intro">
                                    <aside className="dash-aside">
                                        <h3> Welcome Dumy</h3>
                                        <p> Be safe far away form risks.
                                            by ensuring your cargo to the world&apos;s best shipping expert
                                        </p>
                                    </aside>
                                    <img className='dash-intro-photo' alt ='#' src='https://image.freepik.com/free-vector/tiny-people-near-hashtag-social-media-flat-illustration_74855-11115.jpg'/>
                                </div>                            */}
                                <CustomerTable customers={this.props.customers}/>  
                                </Scrollbars>                        
                            </div>
                        </Col>
                </div>
            </div>
        );
    }
}

export default Dashboard;
