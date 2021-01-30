const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Floof',
    //   age: 22,
    // });
    reject('Something went wrong!');
  }, 5000);
});

console.log('Before');

promise
  .then((data) => {
    console.log('1', data);
  })
  .catch((error) => {
    console.log('Error: ', error);
  });

// promise.then(
//   (data) => {
//     console.log('1', data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

console.log('After');
