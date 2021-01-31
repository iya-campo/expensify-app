import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? props.expense.amount : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide a description and amount.',
      }));
      if (!this.state.description && this.state.amount) {
        this.setState(() => ({
          error: 'Please provide a description.',
        }));
      } else if (this.state.description && !this.state.amount) {
        this.setState(() => ({
          error: 'Please provide an amount.',
        }));
      }
    } else {
      this.props.onSubmit({
        description: this.state.description,
        // amount: parseFloat(this.state.amount, 10) * 100, doesn't work?
        amount: Math.round(this.state.amount * 100) / 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
      });
      this.setState(() => ({
        error: '',
      }));
    }
  };
  render() {
    return (
      <form className='form' action='' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          className='text-input'
          type='text'
          placeholder='Description'
          value={this.state.description}
          onChange={this.onDescriptionChange}
          autoFocus
        />
        <input className='text-input' type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className='textarea'
          type='text'
          placeholder='Add a note for your expense... (Optional)'
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className='btn'>Save Expense</button>
        </div>
      </form>
    );
  }
}
