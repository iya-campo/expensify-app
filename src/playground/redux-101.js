import { createStore } from 'redux';

// Action Generators - "Something happened!"

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const setCount = ({ count = 1 } = {}) => ({
  type: 'SET',
  count,
});

const resetCount = () => ({
  type: 'RESET',
});

console.log('Redux 101');

// Reducer - "This is what happened..."
// 1. Reducers are pure functions, global variables are not allowed.
// 2. Never change/mutate state and action.

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { count: state.count - action.decrementBy };
    case 'SET':
      return { count: action.count };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 })); // 5
store.dispatch(incrementCount()); // 6
store.dispatch(resetCount()); // 0
store.dispatch(decrementCount()); // -1
store.dispatch(decrementCount({ decrementBy: 10 })); // 3
store.dispatch(setCount({ count: 101 })); // 8
