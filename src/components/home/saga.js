import { put, call, takeEvery } from 'redux-saga/effects';
import { actions as HomeActions } from './reducer';
import * as songApi from './service';
import { HOME_GET_lIST_SONG } from './reducer';

// Call API Functions
function* getListSong() {
	try {
		const { response, error } = yield call(songApi.getListSong);

		console.log(response);
		console.log('call api thanh cong');
		if (error) {
			yield put(HomeActions.getListFail(error.message));
		} else {
			yield put(HomeActions.getListSuccess(response.data));
			console.log('log get list success');
			console.log(response.data);
		}
	} catch (error) {
		console.log('ERROR: ', error);
		yield put(HomeActions.getListFail(error));
	}
}

// Config API to call once or many
function* homeFlow() {
	yield takeEvery(HOME_GET_lIST_SONG, getListSong);
}

export default homeFlow;
