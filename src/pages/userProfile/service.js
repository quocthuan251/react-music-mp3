import axios from 'axios';
const token = localStorage.getItem('@userToken');
export const getUsers = (
	endpoint,
	body,
	method = 'GET',
	typeAuthor = 'Token'
) => {
	return axios({
		url: `http://localhost:8081/playlist?userPlaylist=1&name=Nhạc của tôi`,
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
export const getDataStreaming = (endpoint) => {
	return axios({
		url: `http://localhost:8081/downloadFile/${endpoint}`,
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'content-type': 'application/json',
			accept: 'application/json',
		},
		// data: body,
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
