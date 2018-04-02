import axios from 'axios';
import * as types from './actionTypes';
import urls from './urls';

export function loginSuccess(data) {/*THIS "DATA" IS THE "RESPONSE" OF THE API */
  return {
    type: types.LOGIN_SUCCESS,
    data: data
  };
}

export function loginFailure(error) {
	return{
		type: types.LOGIN_FAILURE,
		error: error
	};
}

export function login(data){
  console.log("actiondata", data)
;	return function(dispatch){
		return axios.post(urls.LOGIN, data).then((response) =>{
      //console.log("urldata", data);
      console.log("responsedata", response, response.data);
      /*success data comes on success of api call*/
			dispatch(loginSuccess(response));                   /* dispatch is for action call, response takes the data of api cALL ON SUCESS*/
		}).catch((error) =>{/*error data comes from api after failure*/
      //console.log("error", error.response.data);
			dispatch(loginFailure(error.response.data))
		});
	}
}


export function forgotpasswordSuccess(data){
	return{
		type: types.FORGOTPASSWORD_SUCCESS,
		data: data
	};
}

export function forgotpasswordFailure(error){
	return{
		type: types.FORGOTPASSWORD_FAILURE,
		error: error
	};
}

export function forgotPassword(data){
	return function(dispatch){
		return axios.post(urls.FORGOTPASSWORD, data).then((data) =>{
			dispatch(forgotpasswordSuccess(data));
		}).catch((error) =>{
			dispatch(forgotpasswordFailure(error));
		});
	}
}

// export function logoutSuccess(data){
// 	return {
// 		type: types.LOGIN_SUCCESS,
// 		data: data
// 	};
// }

// export function logoutFailure(error){
// 	return {
// 		type: types.LOGIN_FAILURE,
// 		error: error
// 	}
// }


// export function logout(){
// 	return function(dispatch){
// 		return axios.post(urls.LOGOUT, {}).then((data) =>{
// 			dispatch(logoutSuccess(data))
// 		}).catch((error) =>{
// 			dispatch(loginFailure(error))
// 		})
// 	}

// }
