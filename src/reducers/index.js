//main redux
import { combineReducers } from 'redux';
import song from '../components/home/reducer';
import reducerArtist from '../components/singer/reducer';
import reducerUser from '../pages/userProfile/reducer';
const reducer = combineReducers({
	song,
	reducerArtist,
	reducerUser,
});
export default reducer;
