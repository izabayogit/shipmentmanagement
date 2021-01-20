import React, { Component } from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {connect} from 'react-redux';
import {createCustomer} from '../../Redux/actions/customerActions';
import Loader from '../common/Spinner';
import {  toast } from 'react-toastify';
import {getCustomers} from '../../Redux/actions/customerActions';

class CustomerForm extends Component {
    constructor(props){
        super(props);
        this.state ={name:'', phone:'', contact: '', email: '', nameError:'', phoneError:'', contactError:'', emailErrror: '' }
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange = (e) =>{
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
  
    validate = () =>{
        if(this.state.name === ''){
          this.setState({nameError: 'name is required'});
          return false
        }
        if(this.state.phone === ''){
          this.setState({phoneError: 'phone is required'});
          return false
        }
        if(this.state.contact === ''){
            this.setState({contactError: 'contact is required'});
            return false
          }
          if(this.state.email === ''){
            this.setState({emailError: 'email is required'});
            return false
          }
       else{
           this.setState({nameError:'', phoneError:'', contactError:'', emailErrror: ''})
          return true
        }
      }
      handleSubmit = () =>{
        const isValid = this.validate();
        const {createCustomer} = this.props;
        if(isValid){
            createCustomer(this.state.name, this.state.phone, this.state.contact, this.state.email)
         }
         this.setState({name: '', phone: '', contact:'', email: ''}); 
      }
      notifySuccess = () =>{
        toast.success('Customer Created Successfully',{position: toast.POSITION.BOTTOM_CENTER});
       
      }
      UNSAFE_componentWillReceiveProps(nextProps){
        if(!nextProps.newCustomer.loading)
        {if (nextProps.newCustomer?.data?.success) {
            this.props.getCustomers();
            this.notifySuccess();
        }}
    }
    render() {
        return (
            <div>
               
                <Card className="customer-card">
                <Card.Title className='form-title'>Add a new customer</Card.Title>
                <Form className="input-form" >
                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Name <p>{this.state.nameError}</p></Form.Label>
                            <Form.Control  name="name" placeholder="Enter Customer Name" onChange={this.handleChange} value={this.state.name} />
                    </Form.Group>

                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Phone <p>{this.state.phoneError}</p></Form.Label>
                            <PhoneInput  className='phone-input'  country={'us'} value={this.state.phone} onChange={phone => this.setState({ phone })}/>
                           
                    </Form.Group>
                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Contact <p>{this.state.contactError}</p></Form.Label>
                            <Form.Control name="contact"  placeholder="Customer Contact" onChange = {this.handleChange} value={this.state.contact}/>
                    </Form.Group>
                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Email <p>{this.state.emailErrror}</p></Form.Label>
                            <Form.Control name="email" type="email" placeholder="Customer Email" onChange = {this.handleChange} value={this.state.email}/>
                    </Form.Group>
                    <Button variant="primary"  className= 'form-button' onClick ={this.handleSubmit}>
                        {this.props.newCustomer.loading? <Loader/>  :'Create Customer'}                                 
                    </Button>
                    <div className="have-account" >
                
                    </div>
                </Form>
            </Card>
            </div>
        );
    }
}
const mapStateToProps = ({customerReducer}) =>{
    const {newCustomer, error} = customerReducer;
    return {newCustomer, error}
}

export default connect(mapStateToProps, {createCustomer, getCustomers})(CustomerForm);
