import { put, takeLatest, all, call } from 'redux-saga/effects';
import homeFlow from '../components/home/saga';
import artistFlow from '../components/singer/saga';
import axios from 'axios';
export default function* rootSaga() {
	yield all([homeFlow(), artistFlow()]);
}
