import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import MessageReducer from './app/message/reducer';
import ToDoReducer from './app/to-do/reducer';

/**
 * Creates namespaces within state. (state.toDo, state.message)
 * Each corresponds to a subset of the application state that a reducer is focused on.
 */

const reducer = combineReducers({ toDo: ToDoReducer, message: MessageReducer });

/**
 * Store brings actions and reducers together.
 * The store holds application state and allows it to be updated via dispatch(action).
 * There's only one per application.
 */

/**
 * Thunk middleware allows redux to perform asynchronous tasks.
 * Allows action creators to return a function instead of an action.
 */

export default createStore(reducer, composeWithDevTools(applyMiddleware(Thunk)));
