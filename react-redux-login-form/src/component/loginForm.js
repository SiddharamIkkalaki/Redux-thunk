import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/reducer';
import './loginForm.css';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        let{email, password} = this.state;
        let{isLoggedPending, isLoggedSuccess, loggedError} = this.props;
        return(
            <div className="login-form-wrapper" onSubmit={this.onSubmit}>
             <form name="loginForm">
            <input 
                 className="email"
                 type="email" 
                 name="email"
                 placeholder="Enter Your Email" 
                 onChange={e=>this.setState({email:e.target.value})}  
            /><br />
             <input
                  className="password" 
                  type="password" 
                  name="password"
                  placeholder="Enter Your Password"  
                  onChange={e=>this.setState({password:e.target.value})}
                  /><br /><br />
             <input type="submit" value="Login"  className="submit"/>
             {isLoggedPending && <div>Please wait...</div>}
             {isLoggedSuccess && <div>Wel come back...</div>}
             {loggedError && <div className={loggedError?"redClass":"blackClass"}>{loggedError.message}</div>}
             </form>
            </div>
        )
    }
    onSubmit = (e) => {
        e.preventDefault();
        let{email, password} = this.state;
        this.props.login(email, password); 
    }
}
const mapStateToProps = (state) =>{
    return {
        isLoggedPending: state.isLoggedPending,
        isLoggedSuccess: state.isLoggedSuccess,
        loggedError: state.loggedError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        login: (email, password) => dispatch(login(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);