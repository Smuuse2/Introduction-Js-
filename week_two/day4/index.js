console.log('CONNECTED TO HTML');

// LEARNING OBJECT LITERALS || JAVASCRIPT OBJECTS

// NO OBJECTS

// const username = "jama"
// const email = 'jama@info.com'
// const isAdmin = true

// USING OBJECTS

// let person = {
//   id: 1,
//   username: 'mohamed',
//   email: 'sidiikpro@gmail.com',
//   password: 'password',
//   phoneNumber: 063444444,
//   isAdmin: false,
//   fathersName: undefined,
// };

const users = [
  {
    id: 1,
    username: 'jama',
    isAdmin: false,
  },
  {
    id: 2,
    username: 'sakiriye',
    isAdmin: false,
  },
  {
    id: 3,
    username: 'admin',
    isAdmin: true,
  },
];

let User = (users[2].username = 'Siciid');
console.log([User], [users]);
