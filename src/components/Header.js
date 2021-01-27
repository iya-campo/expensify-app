import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul className='list-group'>
      <li className='list-group-item'>
        <NavLink to='/' activeClassName='is-active' exact>
          Dashboard
        </NavLink>
      </li>
      <li className='list-group-item'>
        <NavLink to='/create' activeClassName='is-active'>
          Add Expense
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
