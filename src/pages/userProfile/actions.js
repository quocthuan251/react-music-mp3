export const GET_USER_DETAIL = 'USER/GET_USER_DETAIL';
export const GET_USER_DETAIL_SUCCESS = 'USER/GET_USER_DETAIL_SUCCESS';
export const GET_USER_DETAIL_FAIL = 'USER/GET_USER_DETAIL_FAIL';

export const getUserDetail = () => {
	return {
		type: GET_USER_DETAIL,
	};
};

