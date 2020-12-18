import axios from 'axios';

export const getUsers = (
	endpoint,
	body,
	method = 'GET',
	typeAuthor = 'Token'
) => {
	return axios({
		url: `http://demo7080721.mockable.io/get-song-detail`,
		method: method,
		headers: {
			'content-type': 'application/json',
			accept: 'application/json',
		},
		data: body,
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
