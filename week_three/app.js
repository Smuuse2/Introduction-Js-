// // GET ELEMENT BY BY ID

// // const heading = document.getElementById('heading');

// // console.log(heading.textContent);

// // GET ELEMENT BY CLASSNAME

// // const h1 = document.getElementsByClassName('heading');
// // console.log(h1);

// // QUERY SELECTOR ALL

// // const paragraphs = document.querySelectorAll('p');

// // QUERY SELECTOR ONLY

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');

// function changeHeader() {
//   heading.innerHTML = 'TEXT WAS UPDATED';
//   btn.style.backgroundColor = 'blue';
// }

// btn.addEventListener('click', changeHeader);

// const heading = document.querySelector('.heading');
// const button = document.querySelector('.btn');
// const container = document.querySelector('.container');

// function changeText() {
//   const newEl = document.createElement('h1');
//   newEl.innerText = 'I am new HEADING';
//   newEl.classList.add('new');
//   container.append(newEl);
// }

// function changeColor() {
//   button.classList.toggle('new');
// }

// button.addEventListener('click', changeText);
// button.addEventListener('mouseover', changeColor);

// // TODO APP
// // NOTES APP

const btnToggle = document.querySelector('.btnToggle');
const menus = document.querySelector('.menus');

console.log(btnToggle);

btnToggle.addEventListener('click', function () {
  menus.classList.toggle('active');
});
