import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  startEditExpense,
  editExpense,
  startRemoveExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

// for async functions
const uid = 'thisisatestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abc123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123',
  });
});

test('should remove expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', { note: "Here's a new note!" });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { note: "Here's a new note!" },
  });
});

test('should edit expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = {
    amount: 15000,
  };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toEqual(updates.amount);
      done();
    });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('should add expense database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'For my latest build!',
    createdAt: 1000,
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefault = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefault,
        },
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
    });
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});
