import React, { Component } from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import {connect} from 'react-redux';
import Header from './Header';
import {userSignin} from '../../Redux/actions/authActions';
import {  toast } from 'react-toastify';
import Loader from '../common/Spinner';

toast.configure()
class Login extends Component {
    constructor(props){
        super(props);
        this.state={ username:'', password:'', usernameError:'', passwordError:'' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) =>{
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
       else{
          return true
        }
      }
    handleSubmit = () =>{
        const isValid = this.validate();
        const {userSignin} = this.props;
        if(isValid){
            userSignin(this.state.username, this.state.password)
         }
         this.setState({username: '', password: ''});    
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(!nextProps.currentUser.loading)
        {if (nextProps.currentUser?.data?.error) {
            toast.error(`${nextProps.currentUser?.data?.message}........`,{position: toast.POSITION.BOTTOM_LEFT});
        }else{
            this.props.history.push('/dashboard');
        }}
    }
    render() {
        console.log(this.props.currentUser)
        return (
            <div>
                <Header/>
               <div className="position-div-login">
        <div className="signup-div-login">
        
            <Card className="signup-card">
                <Form className="input-form" >
                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Username <p>{this.state.usernameError}</p></Form.Label>
                            <Form.Control  name="username" placeholder="Enter username" onChange={this.handleChange} value={this.state.username}/>
                    </Form.Group>

                    <Form.Group className="formgroup">
                            <Form.Label className='label'>Password <p>{this.passwordError}</p></Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                    </Form.Group>
                    <Button variant="primary"  className= 'form-button' onClick={this.handleSubmit}>
                    {this.props.currentUser.loading? <Loader/>  :'Login'}                
                    </Button>
                    <div className="have-account" >
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

const mapStateToProps =({authReducer}) =>{
    const {currentUser, error} = authReducer;
    return {currentUser, error}
}

export default connect(mapStateToProps, {userSignin})(Login);

