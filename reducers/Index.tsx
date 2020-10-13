import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from '../reducers/counterReducers'

const AppReducers = combineReducers({
    counterReducer,
});

const rootReducer = (state:any, action:any) => {
	return AppReducers(state,action);
}


let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;