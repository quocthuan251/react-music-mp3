import { put, takeLatest, all, call } from 'redux-saga/effects';
import homeFlow from '../components/home/saga';
import axios from 'axios';
function* fetchNews() {
	const json = yield fetch(
		'http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-15&sortBy=publishedAt&apiKey=8200026edf6141a2b806c8da92c37ef2'
	).then((response) => response.json());
	yield put({ type: 'NEWS_RECEIVED', json: json.articles });
}

export const callAPI = (
	endpoint,
	body,
	method = 'GET',
	typeAuthor = 'Token'
) => {
	return axios({
		url: `http://demo7080721.mockable.io/get-playlist`,
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

function* getListSongTest() {
	const { response, error } = yield call(callAPI);
	console.log('alo aloa aloaoskdoaskdosakso ákocaksok');
	if (error) {
		yield put({ type: 'GET_LIST_SONG_ERROR', error });
		console.log('loi o saga roi!');
	} else {
		yield put({ type: 'GET_LIST_SONG_SUCCESS', response });
	}
}
//////////////
function* actionWatcher() {
	yield takeLatest('GET_NEWS', fetchNews);
	//test
	yield takeLatest('GET_LIST_SONG', getListSongTest);
}
export default function* rootSaga() {
	yield all([actionWatcher(), homeFlow()]);
}
