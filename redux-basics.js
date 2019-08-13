let redux = require('redux');
let createstore = redux.createStore;

let sam = {
    counter: 0
}

let reducer = (state = sam, action) => {
    if (action.type === 'inc') {
        return {
            ...state,
            counter: ++state.counter,
            name: 'arun'
        }
    } else if (action.type === 'dec') {
        return {
            ...state,
            counter: --state.counter,
            name: 'kumar'
        }
    }
    return state
}

const store = createstore(reducer);

store.subscribe(() => {
    let x = store.getState();
    console.log(x);
});

store.dispatch({type: 'inc'});
store.dispatch({type: 'inc'});
store.dispatch({type: 'dec'});
