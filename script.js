'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(item =>
  item.addEventListener('click', openModalWindow)
);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

//////////////////////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'));
const sections = document.querySelectorAll('.section');
console.log(sections);

console.log(document.getElementById('section--1'));
console.log(document.querySelector('#section--1'));

const buttons = document.getElementsByTagName('button');
console.log(buttons);

const getButton = document.getElementsByClassName('btn');
console.log(getButton);

///////////////////////////////////////
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'Мы используем на этом сайте cookie для улучшения функциональности';
message.innerHTML =
  'Мы используем на этом сайте cookie для улучшния его функциональности. <button class="btn btn--close-cookie">OK!</button>';
const header = document.querySelector('.header');
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //old
    // message.parentElement.replaceChild(message);
  });

/////////////////////////////////////
message.style.backgroundColor = '#076785';
message.style.width = '100%';

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);

// console.log(message.style.height);
console.log(getComputedStyle(message).height); //43
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
console.log(message.style.height); //93
///////////////////////////////////////
// document.documentElement.style.setProperty('--color-first', 'yellow');

///////////////////////////////////////
//atribut
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.getAttribute('dev'));
logo.setAttribute('copy', 'no');

//////////////////////////////////////
logo.classList.add('a', 'b');
logo.classList.remove('a');
logo.classList.toggle('a');
logo.classList.contains('c');

/////////NOOOO////////////////
logo.className = 'a'; // Перезатерает все названия классов
