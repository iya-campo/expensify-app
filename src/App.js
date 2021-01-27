import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const subscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(
  addExpense({
    description: 'Water Bill',
    amount: 4500,
  })
);

store.dispatch(
  addExpense({
    description: 'Gas Bill',
    createdAt: 1000,
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 109500,
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
