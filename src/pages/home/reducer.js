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
const initialState = {
	data: [],
	loading: false,
	error: '',
	listMix: [],
	listRecommend: [],
	listMix: [],
	isPlay: false,
	listStream: [
		{
			id: 3,
			title: 'Nàng Thơ',
			downloadPremit: true,
			shareLinks: 'NangTho-HoangDung-6413381.mp3',
			image: {
				id: 5,
				imgLocation:
					'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/d/b/d/7dbd810967b549bdcecdb3fe8484fdd0.jpg',
				name: 'Ride It',
			},
			albums: {
				id: 1,
				name: 'Sơn Tùng MTP',
				releasedDate: '2020-01-15T17:00:00.000+00:00',
				totalTracks: 5,
				downloadPermit: true,
				image: {
					id: 1,
					imgLocation:
						'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/9/493e761d37d31c5cdef4281c0c0ef6d4_1458805399.jpg',
					name: 'Son Tung',
				},
				genreDTO: {
					id: 1,
					name: 'Nhạc Trẻ',
				},
			},
			album: {
				id: 1,
				name: 'Sơn Tùng MTP',
				releasedDate: '2020-01-15T17:00:00.000+00:00',
				totalTracks: 5,
				downloadPermit: true,
				image: {
					id: 1,
					imgLocation:
						'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/9/493e761d37d31c5cdef4281c0c0ef6d4_1458805399.jpg',
					name: 'Son Tung',
				},
				genreDTO: {
					id: 1,
					name: 'Nhạc Trẻ',
				},
			},
		},
	],
};

const reducerHome = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_RECOMMEND: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LIST_RECOMMEND_SUCCESS: {
			console.log('list recommend');
			console.log(action.data.listResult);
			return {
				...state,
				listRecommend: action.data.listResult,
				loading: false,
			};
		}
		case GET_LIST_RECOMMEND_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		//call list mix
		case GET_LIST_MIX: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LIST_MIX_SUCCESS: {
			console.log('list mix');
			console.log(action.data.listResult);
			return {
				...state,
				listMix: action.data.listResult,
				loading: false,
			};
		}
		case GET_LIST_MIX_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		//add stream
		case GET_PLAYSTREAM: {
			return { ...state, loading: true, error: '' };
		}
		case GET_PLAYSTREAM_SUCCESS: {
			console.log('list mix');
			console.log(action.data);
			const test = [...state.listStream];
			test.push(action.data);
			return {
				...state,
				listStream: test,
				loading: false,
			};
		}
		case GET_PLAYSTREAM_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		//add run
		case GET_RUN_PLAYSTREAM: {
			return { ...state, loading: true, error: '' };
		}
		case GET_RUN_PLAYSTREAM_SUCCESS: {
			const test = state.isPlay;
			console.log(test);
			return {
				...state,
				isPlay: !test,
				loading: false,
			};
		}
		case GET_RUN_PLAYSTREAM_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		default:
			return state;
	}
};
export default reducerHome;
