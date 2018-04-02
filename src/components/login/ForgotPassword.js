import React from 'react';

import { Link } from 'react-router';

class ForgotPassword extends React.Component {

	render(){
		return(
			<div className="container-fluid login-page">
			<div className="container">
				<div className="col-md-12">
					<div className="log-in">
					<p>We just need your registered Email id to <br />send you password reset instructions </p>
					<label>Email</label><br />
					<input type="text" /><br /><br />
					<button>Submit</button><br /><br />
					<label><Link to={'/login'}>Go Back TO Login!</Link></label>
					</div>
				</div>
			</div>
			</div>
		);
	}
}


export default ForgotPassword;