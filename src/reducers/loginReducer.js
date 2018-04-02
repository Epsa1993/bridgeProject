import * as types from '../actions/actionTypes';

export  function loginReducer(state=[], action){
	switch(action.type){

		case types.LOGIN_SUCCESS:
			return action.data/* THIS IS THE ACTION FROM API CALL */
		case types.LOGIN_FAILURE: 
			let error ={
				Error: action.error
			};
			console.log("e", error);
			return error
		default:
			return state;
	}
}


export  function forgotpasswordReducer(state=[], action){
	switch(action.type){
		case types.FORGOTPASSWORD_SUCCESS:
			return action.data;
		case types.FORGOTPASSWORD_FAILURE:
			return action.error;
		default:
			return state;
	}
}
