import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
    listOfProducts : productReducer,
    product : selectedProductReducer,
});

export default reducers;