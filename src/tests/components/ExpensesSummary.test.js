import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpenseSummary';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should render ExpensesSummary with one expense correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={[expenses[0]].length} expensesTotal={selectExpensesTotal([expenses[0]])} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={selectExpensesTotal(expenses)} />);
  expect(wrapper).toMatchSnapshot();
});
