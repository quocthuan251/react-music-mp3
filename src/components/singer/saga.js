import { put, call, takeEvery } from 'redux-saga/effects';
import { actions as HomeActions } from './reducer';
import * as songApi from './service';
import { ARTIST_GET_TEST } from './reducer';

// Call API Functions
function* getArtistTest() {
	try {
		const { response, error } = yield call(songApi.getArtist);
		if (error) {
			console.log('loio oday');
			yield put({
				type: 'artist/action/GET_ARTIST_TEST_FAIL',
			});
		} else {
			yield put({
				type: 'artist/action/GET_ARTIST_TEST_SUCCESS',
				json: response.data,
			});
			console.log('log get list test success');
			console.log(response.data);
		}
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: 'artist/action/GET_ARTIST_TEST_FAIL' });
	}
}

// Config API to call once or many
function* artistFlow() {
	yield takeEvery(ARTIST_GET_TEST, getArtistTest);
}

export default artistFlow;
