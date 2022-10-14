// DECLARATIONS

const btnToggle = document.querySelector('.btnToggle');
const links = document.querySelector('.links');
const btnSignUp = document.querySelector('.signup');
const hallow = document.querySelector('.hallow')
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close');
const Password =document.querySelector('.Password')
const formEl = document.querySelector('form');
const username = document.querySelector('.username');
const registerBtn = document.querySelector('.registerbtn');
const userError = document.querySelector('.usernameError');
const emailJazz = document.querySelector('.email')
const textEmail = document.querySelector('.text')

// FUNCTIONS

function toggle() {
  links.classList.toggle('active');
}

// LISTENERS

closeModal.addEventListener('click', closeModal);
btnToggle.addEventListener('click', toggle);

btnSignUp.addEventListener('click', function () {
  overlay.classList.toggle('activeModal');
});

closeModal.addEventListener('click', function () {
  overlay.classList.remove('activeModal');
});

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(username.value);
  if (username.value === '') {
    userError.classList.remove('hidden');
    userError.textContent = 'Username must be provided';
  } else if (username.value.length < 5) {
    userError.classList.remove('hidden');
    userError.textContent = 'Username must be 5 chars long';
  } 

  else {
    userError.classList.add('hidden');
    userError.textContent = 'Username must be 5 chars long';
  }
  if (Password.value.length < 5){
    hallow.textContent = 'Password kaagu yaanu ka yaraan 5 xaraf'

  }
  else{

   if(emailJazz.value ===''){

    console.log('email Gali')
    textEmail.textContent ='Waa inaanu ku jirin space  kana koobnadaa Number iyo Xuruuf '
   }
  

  }

 
});
