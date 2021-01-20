import React, { Component } from 'react';
import {Tab, Nav, Row, Col, } from 'react-bootstrap';
// import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FcCustomerSupport } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';
import { BiPowerOff} from 'react-icons/bi';
import { BsFillGearFill} from 'react-icons/bs';
import Dashboard from './Dashboard';
import CustomerForm from '../../common/CustomerForm';
import {getCustomers} from '../../../Redux/actions/customerActions';
import {connect} from 'react-redux';
import {logoutUser} from '../../../Redux/actions/authActions';

class Vtab extends Component {
constructor(props){
  super(props);
}
  componentDidMount(){
    this.props.getCustomers();
  }
  logout = () =>{
this.props.logoutUser();
this.props.history.push('/login')
  }
    render() {
        return (
            <div className='tabs'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                        <div className='tab-list'>
                        <h6 className='dash-logo'>Shipmentmanagement</h6>
                      <Nav variant="pills"  className="flex-column nav-tab">
                        {/* <Nav.Item className="tab-item">
                          <Nav.Link eventKey="first"><AiOutlineHome className='tab-icon'/> Home</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="first"><FcCustomerSupport className='tab-icon'/>Customers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="second"><BsFillPeopleFill className='tab-icon'/> Users</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="third"><FaUserCircle className='tab-icon'/>Profiles</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="fourth"><BsFillGearFill className='tab-icon'/> Settings</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tab-item">
                          <Nav.Link eventKey="fith" onClick={this.logout}><BiPowerOff className='tab-icon'/>Logout</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      </div>
                    </Col>
                    <Col sm={9}>
      <Tab.Content className='.tab-content'>
        <Tab.Pane eventKey="first" >
            <div className='tab-pane-div'>
          <Dashboard customers ={ this.props.allCustomers}/>
          <Col>
         <CustomerForm/>
         </Col>             
          </div>
        </Tab.Pane>
        {/* <Tab.Pane eventKey="second">
          <Sonnet />
        </Tab.Pane> */}
      </Tab.Content>
    </Col>
                  </Row>
                </Tab.Container>
            </div>
        );
    }
}

const mapStateToProps =({customerReducer}) =>{
  const {allCustomers, error} = customerReducer;
  return {allCustomers, error}
}
export default connect( mapStateToProps, {getCustomers, logoutUser})(Vtab);
