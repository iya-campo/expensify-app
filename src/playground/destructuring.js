console.log('Destructuring!');

// //
// // Object Destructuring
// //

// const person = {
//   name: 'Floof',
//   age: 23,
//   location: {
//     city: 'Angono',
//     temp: 36,
//   },
// };

// // Object Destructuring Features
// // 1. Simplify objects to shorten code.
// // 2. Set default values for undefined variables.
// // 3. Rename variables from the object.

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && typeof temperature === 'number') {
//   console.log(`It's currently ${temperature} degrees in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { title, author } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`"${title}" is written by ${author} and published by ${publisherName}.`);

// --------------------------------------------------------------

//
// Array Destructuring
//

// Array Destructuring Features
// 1. Simplify arrays to make code more readable.
// 2. Destructure only select elements by leaving commas in place.
//    and omitting the ones at the end.
// 3. Set default values for undefined arrays.

const address = ['Aurora Subdivision', 'Angono', 'Rizal', '1930'];
const [, , state = 'The Middle of Nowhere'] = address;

console.log(`You are in ${state}.`);

const item = ['Iced Coffee', '$2.00', '$3.50', '$2.75'];
const [name = 'Coffee', , mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}.`);
