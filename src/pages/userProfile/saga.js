import { put, call, takeEvery } from 'redux-saga/effects';
import {
	GET_USER_DETAIL,
	GET_USER_DETAIL_SUCCESS,
	GET_USER_DETAIL_FAIL,
} from './actions';
import * as songApi from './service';

function* getDataUser() {
	try {
		const { response, error } = yield call(songApi.getUsers);
		yield put({
			type: GET_USER_DETAIL_SUCCESS,
			data: response.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_USER_DETAIL_FAIL, error: error });
	}
}

// Config API to call once or many
function* usersFlow() {
	yield takeEvery(GET_USER_DETAIL, getDataUser);
}

export default usersFlow;
