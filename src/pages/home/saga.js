import { put, call, takeEvery } from 'redux-saga/effects';
import { actions as UserActions } from './reducer';
import * as promotionApi from './service';
import { USER_GET_DATA } from './reducer';

// Call API Functions
function* getListUser() {
	try {
		const { response, error } = yield call(promotionApi.getListUser);

		console.log(response);
		console.log('call api thanh cong');
		if (error) {
			yield put(UserActions.getListFail(error.message));
		} else {
			yield put(UserActions.getListSuccess(response.data));
		}
	} catch (error) {
		console.log('ERROR: ', error);
		yield put(UserActions.getListFail(error));
	}
}

// Config API to call once or many
function* userFlow() {
	yield takeEvery(USER_GET_DATA, getListUser);
}

export default userFlow;
