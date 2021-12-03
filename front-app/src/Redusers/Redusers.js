import { createStore } from "redux";

export const reduceActions = {
    scrollTo: 'scrollTo'
}

const reducer = (state, action) => {
    switch (action.type) {
        case reduceActions.scrollTo: {
            const newState = {
                ...state,
                currentPagePos: action.value || 1
            };
            return newState;
        }
        default:
            return state;
    }
}

export const storage = createStore(reducer, {currentPagePos: 0});
