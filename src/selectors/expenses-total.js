export default (expenses) => {
  let expenseList = [];
  expenses.map((expense) => {
    expenseList = [...expenseList, expense.amount];
  });
  return expenseList.reduce((total, num) => total + num, 0);
  // if (expenses.length === 0) {
  //   return 0;
  // } else {
  //   let expenseList = [];
  //   expenses.map((expense) => {
  //     expenseList = [...expenseList, expense.amount];
  //   });
  //   return expenseList.reduce((total, num) => total + num, 0);
  // //   Shorter Version
  // //   return expenses.map((expense) => expense.amount).reduce((total, num) => total + num);
  // }
};
