console.log('FIRST LOGIN TO CONSOLE');

// creating variable

// // var myName = '' // NOT USED AS USUAL
// let firstName = 'SIDIQ';
// let lastName = 'omar';

// // let fullNmae = firstName + ' ' + lastName; // not used

// let fullNmae = `Magacaygu waa ${firstName} ${lastName}`;

// const myArray = [1, 2, 3, 4, 5, 6, true, 'string', undefined, null];
// const anotherArray = [true, false];

// console.log(anotherArray[1]);

// let firstname = 'ali';
// let lastname = 'ahmed';
// let isAdmin = false;

const person = {
  id: 1,
  firstname: 'sidiiq',
  lastname: 'omar',
  email: 'email@email.com',
  isAdmin: false,
};

const product = {
  productId: 100,
  productName: 'Iphone xs',
  productPrice: 450,
  isAvailable: false,
  stock: 0,
};

const products = [
  {
    productId: 100,
    productName: 'Iphone xs',
    productPrice: 450,
    isAvailable: false,
    stock: 0,
  },
  {
    productId: 101,
    productName: 'Iphone 12',
    productPrice: 450,
    isAvailable: false,
    stock: 0,
  },
  {
    productId: 100,
    productName: 'Iphone 14',
    productPrice: 450,
    isAvailable: true,
    stock: 0,
  },
];

// function add(num1, num2) {
//   return Number(num1) + Number(num2);
// }

// ARGUMENT ONE -> 2
// ARGEUMENT TWO -> number of squares\\

// function cali(num1, num2) {
//   return num1 - num2;
// }

// console.log(cali(10, 2));

// cali = (num2, numer3) => {
//   return num2 / numer3;
// };
// console.log(cali(3, 5));

// class Students {
//   constructor(firstname, lastname, address) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.address = address;
//   }
//   maxamed() {
//     return `firsName ${this.firstname} lastName ${this.lastname}, address ${this.address}`;
//   }
// }

// let person1 = new Students('maxamed', 'cabdiqani', 'macalin haaruun');

// console.log(person1);

// let cabdriaxman = () => {};

// console.log(cabdriaxman());

function abs(number) {
  if (number < 0) {
    return -number;
  } else {
    return number;
  }
}

console.log(abs(4));

// 1. CREATE A FUNCTION
// 2. FUNCTIONS TAKES 2 PARAMS
// 3. FIRSTNAME AND LASTNAME
// 4. MAGACAAGU WAA + THE PARAMS

function logName(fname, lname) {
  if (typeof fname === 'number' || typeof lname === 'number') {
    return 'Lama ogola';
  } else {
    return `Magacagu waaa ${fname} ${lname}`;
  }
}

const name = logName('jama', 'farah');

console.log(name);
