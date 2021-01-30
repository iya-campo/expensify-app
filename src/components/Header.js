import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <ul className='list-group'>
      <li className='list-group-item'>
        <NavLink to='/dashboard' activeClassName='is-active' exact>
          Dashboard
        </NavLink>
      </li>
      <li className='list-group-item'>
        <NavLink to='/create' activeClassName='is-active'>
          Add Expense
        </NavLink>
      </li>
      <li className='list-group-item'>
        <button onClick={startLogout}>Logout</button>
      </li>
    </ul>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
