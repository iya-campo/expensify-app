import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDCYFcBAOhWovsTQ0IWFdbTn4Xcr7M2x6s',
  authDomain: 'expensify-faa4b.firebaseapp.com',
  databaseURL: 'https://expensify-faa4b-default-rtdb.firebaseio.com',
  projectId: 'expensify-faa4b',
  storageBucket: 'expensify-faa4b.appspot.com',
  messagingSenderId: '706196708826',
  appId: '1:706196708826:web:b86ff450fe25a8acc334e3',
  measurementId: 'G-G7PKHF6RY7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('New expense added!');
// });

// database.ref('expenses').push({
//   description: 'Water',
//   note: 'Payment for water usage?',
//   amount: 500,
//   createdAt: 800,
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// const onValueChange = database.ref('expenses').on(
//   'value',
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (e) => {
//     console.log('Error fetching data!', e);
//   }
// );

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python',
// });

// database.ref('notes/-MS7vkckVcM5ESmzWZfY').remove();

// Fetch 1
// database
//   .ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// Fetch 2
// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log('Error with data fetching!', e);
//   }
// );

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// });

// setTimeout(() => {
//   database.ref('job/company').set('Steam');
// }, 2000);

// database
//   .ref()
//   .set({
//     name: 'Floof',
//     age: 22,
//     stressLevel: 11,
//     job: {
//       title: 'Frontend Developer',
//       company: 'LOGO Inc.',
//     },
//     location: {
//       city: 'Angono',
//       country: 'Philippines',
//     },
//   })
//   .then(() => {
//     console.log('Data is saved!');
//   })
//   .catch((e) => {
//     console.log('Error: ', e);
//   });

// database.ref().update({
//   stressLevel: 1,
//   'job/company': 'Self-Employed',
//   'location/city': 'Home',
// });

// database.ref('isSingle').set(null);

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data is removed!');
//   })
//   .catch((e) => {
//     console.log('Error removing data: ', e);
//   });
