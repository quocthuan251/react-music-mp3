import axios from 'axios';
const token = localStorage.getItem('@userToken');
export const getListRecommend = (
	endpoint,
	body,
	method = 'GET',
	typeAuthor = 'Token'
) => {
	return axios({
		url: `http://localhost:8081/song?page=1&limit=10`,
		method: method,
		headers: {
			Authorization: `Bearer ${token}`,
			'content-type': 'application/json',
			accept: 'application/json',
		},
		data: body,
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
export const getListMix = (
	endpoint,
	body,
	method = 'GET',
	typeAuthor = 'Token'
) => {
	// console.log(token);
	return axios({
		url: `http://localhost:8081/song?page=1&limit=10`,
		method: method,
		headers: {
			Authorization: `Bearer ${token}`,
			'content-type': 'application/json',
			accept: 'application/json',
		},
		data: body,
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
