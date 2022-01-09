import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
    order: orderReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))