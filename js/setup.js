'use strict';

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницка', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'gren'];

var blockSetup = document.querySelector('.setup');
var blockSimilar = document.querySelector('.setup-similar');
blockSetup.classList.remove('hidden');
blockSimilar.classList.remove('hidden');

var getRandomElement = function (arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
}

var generateHero = function () {
  var personal = [];

  for (var i = 0; i < 4; i++) {
    personal[i] = {
      name: getRandomElement(firstName) + ' ' + getRandomElement(lastName),
      coatColor: getRandomElement(coatColor),
      eyesColor: getRandomElement(eyesColor)
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
  heroElement.querySelector('.wizard-coat').style.fill = hero.coatColor;
  return heroElement;
};

for (var i = 0; i < heroes.length; i++) {
  fragment.appendChild(renderHero(heroes[i]));
}

personals.appendChild(fragment);
