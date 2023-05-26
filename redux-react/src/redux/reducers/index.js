import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReducers({
    listOfProducts : productReducer,
});

export default reducers;