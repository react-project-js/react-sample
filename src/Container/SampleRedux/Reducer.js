const initialState = {
    item: []
}

// Reducer
const rootReducer = (state = initialState, action, add) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            item: state.item.push(add)
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;	
};

export default rootReducer;