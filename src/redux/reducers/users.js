import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, CLEAR_USERS, ADD_NEW_USER } from "../actions/users"

const initialState = {
  loading: false,
  users: [],
  error: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ""
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: []
      }
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default: return state
  }
}

export default reducer;