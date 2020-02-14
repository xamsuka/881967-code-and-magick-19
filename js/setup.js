'use strict';
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницка', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'gren'];
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var blockSetup = document.querySelector('.setup');
var blockSimilar = document.querySelector('.setup-similar');


var getRandomElement = function (arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

var generateHero = function () {
  var personal = [];

  for (var i = 0; i < 4; i++) {
    personal[i] = {
      name: getRandomElement(firstNames) + ' ' + getRandomElement(lastNames),
      coatColors: getRandomElement(coatColors),
      eyesColors: getRandomElement(eyesColors)
    };
  }

  return personal;
};

var heroes = generateHero();
var personals = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var renderHero = function (hero) {
  var heroElement = template.cloneNode(true);
  heroElement.querySelector('.setup-similar-label').textContent = hero.name;
  heroElement.querySelector('.wizard-coat').style.fill = hero.coatColors;
  return heroElement;
};

for (var i = 0; i < heroes.length; i++) {
  fragment.appendChild(renderHero(heroes[i]));
}

personals.appendChild(fragment);

var buttonOpen = document.querySelector('.setup-open-icon');
var buttonClose = document.querySelector('.setup-close');
var inputUserName = document.querySelector('.setup-user-name');

var onPopupEscHandler = function (evt) {
  if (inputUserName === document.activeElement) {
    return;
  } else if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  blockSetup.classList.remove('hidden');
  blockSimilar.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscHandler);
};

var closePopup = function () {
  blockSetup.classList.add('hidden');
  blockSimilar.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscHandler);
};

buttonOpen.addEventListener('click', function () {
  openPopup();
});

buttonOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

buttonClose.addEventListener('click', function () {
  closePopup();
});

buttonClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var wizard = document.querySelector('.setup-wizard-appearance');
var fireBall = document.querySelector('.setup-fireball-wrap');

var changeColor = function (evt) {
  var target = evt.target;
  var randomElement;
  var inputCoat = document.querySelector('input[name=coat-color]');
  var inputEyes = document.querySelector('input[name=eyes-color]');
  var inputFireball = document.querySelector('input[name=fireball-color]');

  if (target.parentElement.className === 'setup-fireball-wrap') {
    randomElement = getRandomElement(fireBallColors);
    target.parentElement.style.background = randomElement;
    inputFireball.value = randomElement;
  } else if (target.className.baseVal === 'wizard-eyes') {
    randomElement = getRandomElement(eyesColors);
    target.style.fill = randomElement;
    inputEyes.value = randomElement;
  } else if (target.className.baseVal === 'wizard-coat') {
    randomElement = getRandomElement(coatColors);
    target.style.fill = randomElement;
    inputCoat.value = randomElement;
  }
};

wizard.addEventListener('click', changeColor);
fireBall.addEventListener('click', changeColor);
