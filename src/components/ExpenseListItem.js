import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <div className='card'>
        <h3>
          {description}
          <Link className='ml-3' to={`/edit/${id}`}>
            Edit
          </Link>
        </h3>
        <p>Amount: {amount}</p>
        <p>{moment(createdAt).format('MMM Do, YYYY')}</p>
      </div>
    </div>
  );
};

export default ExpenseListItem;
