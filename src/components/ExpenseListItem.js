import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

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
        <p>Amount: {numeral(amount).format('$0,0.00')}</p>
        <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
      </div>
    </div>
  );
};

export default ExpenseListItem;
