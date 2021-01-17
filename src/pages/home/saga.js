import { put, call, takeEvery } from 'redux-saga/effects';
import {
	GET_LIST_RECOMMEND,
	GET_LIST_RECOMMEND_SUCCESS,
	GET_LIST_RECOMMEND_FAIL,
	GET_LIST_MIX,
	GET_LIST_MIX_SUCCESS,
	GET_LIST_MIX_FAIL,
} from './actions';
import * as Api from './service';

function* getDataRecommend() {
	try {
		const { response, error } = yield call(Api.getListRecommend);
		yield put({
			type: GET_LIST_RECOMMEND_SUCCESS,
			data: response.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_LIST_RECOMMEND_FAIL, error: error });
	}
}
// call list mix
function* getDataListMix() {
	try {
		const { response, error } = yield call(Api.getListMix);
		// console.log(response);
		yield put({
			type: GET_LIST_MIX_SUCCESS,
			data: response.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_LIST_MIX_FAIL, error: error });
	}
}
// Config API to call once or many
function* homeFlow() {
	yield takeEvery(GET_LIST_RECOMMEND, getDataRecommend);
	yield takeEvery(GET_LIST_MIX, getDataListMix);
}

export default homeFlow;
