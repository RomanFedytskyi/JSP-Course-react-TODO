import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users';

const allReducers = combineReducers({
    users: usersReducer
});

export const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
);