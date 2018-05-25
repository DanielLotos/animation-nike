const btnInvertLogin = document.querySelector('.form__forgot--login');
const btnInvertReset = document.querySelector('.form__forgot--reset');
const formLogin = document.querySelector('.login-form--login');
const formReset = document.querySelector('.login-form--reset');
const formFlipper = document.querySelector('.login-form__flipper');

btnInvertLogin.addEventListener('click', function (event) {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  formFlipper.classList.remove('login-form__flipper--unflip');
  formFlipper.classList.add('login-form__flipper--flip');
});

btnInvertReset.addEventListener('click', function (event) {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  formFlipper.classList.remove('login-form__flipper--flip');
  formFlipper.classList.add('login-form__flipper--unflip');
});
