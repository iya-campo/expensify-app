import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/Login';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import PageNotFound from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={Login} exact />
        <PrivateRoute path='/dashboard' component={ExpenseDashboard} />
        <PrivateRoute path='/create' component={AddExpense} />
        <PrivateRoute path='/edit/:id?' component={EditExpense} />
        <PublicRoute component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
