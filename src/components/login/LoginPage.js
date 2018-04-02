import React, {PropTypes} from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import {connect} from 'react-redux';

import './Login.css';

import { Link } from 'react-router';

import * as AccountActions from '../../actions/accountActions';

//import ForgotPassword from './ForgotPassword';

class LoginPage extends React.Component {

	constructor(props, context){
		super(props);

		this.state = {
         email: '',
         password: ''
      }

		this.login = this.login.bind(this);
		this.updateState = this.updateState.bind(this);

		console.log(this.props.error);
	}



	login(){
		//const data = this.state;
    const { email, password } = this.state;
		console.log("data", email, password);
		this.props.AccountActions.login(this.state);
		const demo = this.props.error;
		console.log("demo", demo);
	}

	updateState(event){
	const target = event.target;
	const name = target.name;
		this.setState({
      [name] : event.target.value
      });
	}


	render() {
		const error  = this.props;

		console.log("r", error);
		
		return(
		<div className="container-fluid login-page">
			<div className="container">
				<div className="col-md-12">
					<div className="log-in">
					<img src="images/login-img.jpeg"/>
					<h3><strong>Log In</strong></h3>
					<input type="text" placeholder="email" name="email" className="username" value={this.state.email} onChange={this.updateState}/><br/>
					<input type="Password" placeholder="password" name="password" className="password" value={this.state.password} onChange={this.updateState}/><br />
					<button className="button" onClick={this.login}>Login</button><br />
					<h6><Link to={'/forgot-password'}>Forgot Password?</Link></h6>
					</div>
				</div>
			</div>
		</div>
		);
	}
}
/* return value of state from reducer */
/*const mapStateToProps = state => ({
	error: state.Error
});
*/
const mapStateToProps = state => {
	console.log("state", state.error);
  return Object.assign({}, state, {
    error: state.Error
  }
  )};

const mapDispatchToProps = dispatch => ({
  AccountActions: bindActionCreators(AccountActions, dispatch)
});

LoginPage.propType ={
	AccountActions: PropTypes.object,
  error: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
