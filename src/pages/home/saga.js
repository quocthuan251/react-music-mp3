import { put, call, takeEvery } from 'redux-saga/effects';
import {
	GET_LIST_RECOMMEND,
	GET_LIST_RECOMMEND_SUCCESS,
	GET_LIST_RECOMMEND_FAIL,
	GET_LIST_MIX,
	GET_LIST_MIX_SUCCESS,
	GET_LIST_MIX_FAIL,
	GET_PLAYSTREAM,
	GET_PLAYSTREAM_SUCCESS,
	GET_PLAYSTREAM_FAIL,
	GET_RUN_PLAYSTREAM,
	GET_RUN_PLAYSTREAM_SUCCESS,
	GET_RUN_PLAYSTREAM_FAIL,
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
// stream
function* getListPlayStream({ payload }) {
	yield put({
		type: GET_PLAYSTREAM_SUCCESS,
		data: payload,
	});
}
// run
function* runPlayStream() {
	yield put({
		type: GET_RUN_PLAYSTREAM_SUCCESS,
	});
}
// Config API to call once or many
function* homeFlow() {
	yield takeEvery(GET_LIST_RECOMMEND, getDataRecommend);
	yield takeEvery(GET_LIST_MIX, getDataListMix);
	yield takeEvery(GET_PLAYSTREAM, getListPlayStream);
	yield takeEvery(GET_RUN_PLAYSTREAM, runPlayStream);
}

export default homeFlow;
