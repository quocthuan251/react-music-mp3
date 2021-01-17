import { put, takeLatest, all, call } from 'redux-saga/effects';
import homeFlow from '../pages/home/saga';
import artistFlow from '../components/singer/saga';
import usersFlow from '../pages/userProfile/saga';
import loginFlow from '../pages/signin/saga';
export default function* rootSaga() {
	yield all([homeFlow(), artistFlow(), usersFlow(), loginFlow()]);
}
