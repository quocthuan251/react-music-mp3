//main redux
import { combineReducers } from 'redux';
import song from '../components/home/reducer';
import reducerArtist from '../components/singer/reducer';
const reducer = combineReducers({
	song,
	reducerArtist,
});
export default reducer;
