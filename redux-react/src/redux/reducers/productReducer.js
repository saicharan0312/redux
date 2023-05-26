import { ActionTypes } from "../constants/action-types"
const initailState = {
    products : [],
};

export const productReducer = (state = initailState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS :
            return {...state, products : payload};
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {} , {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT :
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

// export const removeSelectedProductReducer = (state, {type}) => {
//     switch(type) {
//         case ActionTypes.removeSelectedProductReducer :
//             return {};
//         default:
//             return {};
//     }
// };