export const ARTIST_GET_TEST = 'artist/action/GET_ARTIST_TEST';
export const ARTIST_TEST_SUCCESS = 'artist/action/GET_ARTIST_TEST_SUCCESS';
export const ARTIST_TEST_FAIL = 'artist/action/GET_ARTIST_TEST_FAIL';

export const getArtistTest = () => {
	return {
		type: ARTIST_GET_TEST,
	};
};

const reducerArtist = (state = {}, action) => {
	switch (action.type) {
		case ARTIST_GET_TEST:
			return { ...state, loading: true };
		case ARTIST_TEST_SUCCESS:
			console.log('hello');
			console.log(action.json);
			return { ...state, artist: action.json, loading: false };
		case ARTIST_TEST_FAIL:
			return { err: 'loi' };
		default:
			return state;
	}
};
export default reducerArtist;
