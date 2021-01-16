import React, { Component } from 'react';
import {Form, Button, Card, Row, Col} from 'react-bootstrap';
import Loader from '../common/Spinner';
import {  connect } from 'react-redux';
import Header from './Header';
import Welcome from './Welcome'
import {userSignup} from '../../Redux/actions/authActions'
import {  toast } from 'react-toastify';
 
toast.configure()
class Signup extends Component {
  constructor(props) {
    super(props);
        this.state = {
        username:'', password: '', retyped: '', roleId: 1, displayName: '', error: '',
        usernameError:'', passwordError: '', retypedError: '', displayNameError: '', location: null
    }

    this.handleInput = this.handleInput.bind(this);
    this.validate = this.validate.bind(this);
    this.handeleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this)
      }
      notifySuccess = () =>{
        toast.success('Signup is successful........',{position: toast.POSITION.BOTTOM_LEFT});
       
      }
  redirect = () =>{
    return this.props.history.push('/login');
     
  }
      notifyFailure = () =>{
        toast.error('Signup error!......',{position: toast.POSITION.BOTTOM_LEFT})
      }
     handleInput = (e) =>{
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });
       
      }
     validate = () =>{
        if(this.state.username === ''){
          this.setState({usernameError: 'username can\'t be empty'});
          return false
        }
        if(this.state.password === ''){
          this.setState({passwordError: 'password can\'t be empty'});
          return false
        }
        if(this.state.retyped === ''){
          this.setState({retypedError: 'Retype your password'});
          return false
        }
        if(this.state.retyped != this.state.password){
            this.setState({retypedError: 'Password does not match'});
            return false
          }
          if(this.state.displayName === ''){
            this.setState({displayNameError: 'display name can\'t be empty'});
            return false
          }else{
          return true
        }
      }
      
       handleSubmit= async()=>{
        const isValid = this.validate();
        const {userSignup } = this.props
        
        if(isValid){
         userSignup(this.state.username, this.state.password, this.state.displayName, this.state.roleId)  
      }
      this.setState({username: '', password: '', retyped: '', displayName: '', error: ''});
    
      }
      
    render() {
     if (this.props.user_signup?.data?.success){
      this.notifySuccess();         
      this.redirect();
      }
        return (
<div className="signup-container">
     <Header/>
     <Row className="responsive-row">
       
         <Welcome/>
         <Col>  
        <div className="position-div">
        <div className="signup-div">
        
            <Card className="signup-card">
                <Form className="input-form" >
                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Username <p>{this.state.usernameError}</p></Form.Label>
                            <Form.Control  name="username" placeholder="Enter username"   onChange={this.handleInput} value={this.state.username}/>
                    </Form.Group>

                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Password <p>{this.state.passwordError}</p></Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password"  onChange={this.handleInput} value={this.state.password}/>
                    </Form.Group>
                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Retype Password  <p>{this.state.retypedError}</p></Form.Label>
                            <Form.Control name="retyped" type="password" placeholder="Password"  onChange={this.handleInput} value={this.state.retyped}/>
                    </Form.Group>
                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Display Name <p>{this.state.displayNameError}</p></Form.Label> 
                            <Form.Control  name="displayName" placeholder="Enter Display Name"  onChange={this.handleInput} value={this.state.displayName}/>
                    </Form.Group>
                    <Button variant="primary"  className= 'form-button' onClick={this.handeleSubmit}>
                    {this.props.user_signup.loading? <Loader/>  :'Create Account'} 
                    
                    </Button>
                    <div className="have-account">
                    <a href="/login"> Already Have Account ? </a>
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
const mapStateToProps = ({authReducer }) => {
  const {user_signup, error} = authReducer;
  return {user_signup, error}
  }

export default connect(mapStateToProps, {userSignup})(Signup);
