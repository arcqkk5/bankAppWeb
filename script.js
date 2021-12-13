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
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.querySelector('.header'));
// const sections = document.querySelectorAll('.section');
// console.log(sections);

// console.log(document.getElementById('section--1'));
// console.log(document.querySelector('#section--1'));

// const buttons = document.getElementsByTagName('button');
// console.log(buttons);

// const getButton = document.getElementsByClassName('btn');
// console.log(getButton);

///////////////////////////////////////
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'Мы используем на этом сайте cookie для улучшения функциональности';
// message.innerHTML =
//   'Мы используем на этом сайте cookie для улучшния его функциональности. <button class="btn btn--close-cookie">OK!</button>';
// const header = document.querySelector('.header');
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     //old
//     // message.parentElement.replaceChild(message);
//   });

/////////////////////////////////////
// message.style.backgroundColor = '#076785';
// message.style.width = '100%';

// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);

// // console.log(message.style.height);
// console.log(getComputedStyle(message).height); //43
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
// console.log(message.style.height); //93
///////////////////////////////////////
// document.documentElement.style.setProperty('--color-first', 'yellow');

///////////////////////////////////////
//atribut
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.getAttribute('dev'));
// logo.setAttribute('copy', 'no');

//////////////////////////////////////
// logo.classList.add('a', 'b');
// logo.classList.remove('a');
// logo.classList.toggle('a');
// logo.classList.contains('c');

/////////NOOOO////////////////
// logo.className = 'a'; // Перезатерает все названия классов
///Плавное прокручивание
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const section1Coords = section1.getBoundingClientRect();
  // console.log(section1Coords);
  // window.scrollTo(
  //   section1Coords.left + window.pageXOffset,
  //   section1Coords.top + window.pageYOffset
  // );

  //OLD
  // window.scrollTo({
  //   left: section1Coords.left + window.pageXOffset,
  //   top: section1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

///////////////////
//Event propagation
// rgb(123, 56, 78)

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const getRandomColor = () =>
//   `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(
//     0,
//     255
//   )})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandomColor();
// });

// document.querySelectorAll('.nav__link').forEach(htmlElement => {
//   htmlElement.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     console.log(href);

//     document.querySelector(href).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    // console.log(href);

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//////////////////////////////
// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'yellow';

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clickedButton = e.target.closest('.operations__tab');
  if (!clickedButton) return;
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedButton.classList.add('operations__tab--active');

  tabContents.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clickedButton.dataset.tab}`)
    .classList.add('operations__content--active');
});

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest('.nav__links')
      .querySelectorAll('.nav__link');
    const logo = linkOver.closest('.nav').querySelector('img');
    const logoTetx = linkOver.closest('.nav').querySelector('.nav__text');

    siblingLinks.forEach(item => {
      if (item !== linkOver) {
        item.style.opacity = 0.4;
      }
      logo.style.opacity = 0.4;
      logoTetx.style.opacity = 0.4;
    });
  }
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest('.nav__links')
      .querySelectorAll('.nav__link');
    const logo = linkOver.closest('.nav').querySelector('img');
    const logoTetx = linkOver.closest('.nav').querySelector('.nav__text');

    siblingLinks.forEach(item => {
      if (item !== linkOver) {
        item.style.opacity = 1;
      }
      logo.style.opacity = 1;
      logoTetx.style.opacity = 1;
    });
  }
});

// const section1Cords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   // console.log(e);
//   console.log(window.scrollY);
//   window.scrollY > section1Cords.top
//     ? nav.classList.add('sticky')
//     : nav.classList.remove('sticky');
// });

// const obserberCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };
// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obserberCallback, observerOptions);
// observer.observe(section1);
const getStickyNav = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = document.querySelector('.header');
const observer = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});
observer.observe(headerObserver);

const allSection = document.querySelectorAll('.section');

const appearanceSection = function (entries, observer) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.18,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

const loadImages = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    return;
  }

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const lazyImages = document.querySelectorAll('img[data-src]');
const lazyImagesObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.45,
});

lazyImages.forEach(image => lazyImagesObserver.observe(image));

// Создание слайдера
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let currentSlide = 0;
const slidesNumber = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(1300px)';
// slider.style.overflow = 'visible';

const createDots = function () {
  slides.forEach(function (_, index) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};

createDots();

const activateCurrentDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

activateCurrentDot(0);

const moveToSlide = function (slide) {
  slides.forEach(
    (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
  );
};

moveToSlide(0);

const nextSlide = function () {
  if (currentSlide === slidesNumber - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  moveToSlide(currentSlide);
  // 1 - -100%, 2 - 0%, 3 - 100%, 4 - 200%)
  activateCurrentDot(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slidesNumber - 1;
  } else {
    currentSlide--;
  }

  moveToSlide(currentSlide);
  // 1 - -100%, 2 - 0%, 3 - 100%, 4 - 200%)
  activateCurrentDot(currentSlide);
};

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') previousSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    moveToSlide(slide);
    activateCurrentDot(slide);
  }
});

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('Дерево DOM создно!', e);
});

window.addEventListener('load', function (e) {
  console.log('Старница полностью загружена', e);
});
