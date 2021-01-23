//main redux
import { combineReducers } from 'redux';
import reducerArtist from '../components/singer/reducer';
import reducerUser from '../pages/userProfile/reducer';
import reducerHome from '../pages/home/reducer';
import reducerLogin from '../pages/signin/reducer';
const reducer = combineReducers({
	reducerArtist,
	reducerUser,
	reducerHome,
	reducerLogin,
});
export default reducer;
