import { fromJS } from 'immutable'

// 1. Define const for reducer
export const USER_GET_DATA = 'User/action/GET_LIST'
export const USER_GET_DATA_SUCCESS = 'User/action/GET_LIST_SUCCESS'
export const USER_GET_DATA_FAIL = 'User/action/GET_LIST_FAIL'


// 2. Define function for reducer
const getList = () => {
  return {
    type: USER_GET_DATA,
  }
}
const getListSuccess = payload => {
  return {
    type: USER_GET_DATA_SUCCESS,
    payload,
  }
}

const getListFail = errorMessage => {
  return {
    type: USER_GET_DATA_FAIL,
    errorMessage,
  }
}



// 3. Export actions
export const actions = {
  getList,
  getListSuccess,
  getListFail,
  
}

// 4. Export state & function for setting states
const emptyList = fromJS([])
// const emptyObject = fromJS({})

export const initialState = fromJS({
  isLoadingUserList: false,
  users: emptyList,
  errorMessage: '',
})

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_GET_DATA:
      return state.set('isLoading', true)

    case USER_GET_DATA_SUCCESS: {
      const { payload } = action
      return state.set('users', fromJS(payload)).set('isLoading', false)
    }
    case USER_GET_DATA_FAIL:
      return state.set('errorMessage', action.errorMessage).set('isLoading', false)

    default:
      return state
  }
}

// 5. Functions to map state to props
export const getUsers = ({ user }) => user.get('users', emptyList)
