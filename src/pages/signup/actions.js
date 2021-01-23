export const GET_LOGIN = 'USER/GET_LOGIN';
export const GET_LOGIN_SUCCESS = 'USER/GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAIL = 'USER/GET_LOGIN_FAIL';

export const getSignup = (payload) => {
	return {
		type: GET_LOGIN,
		payload,
	};
};
