'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'gren'];
  var FIRE_BALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.setupWizzard = {
    coatColors: COAT_COLORS,
    eyesColors: EYES_COLORS,
    fireBallColors: FIRE_BALL_COLORS
  };

})();


(function () {
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';
  var setupBlock = document.querySelector('.setup');
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  var personals = document.querySelector('.setup-similar-list');
  var fragmentHeroes = document.createDocumentFragment();

  var onLoad = function (wizards) {
    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragmentHeroes.appendChild(window.renderHero.getHero((wizards[i])));
    }
    personals.appendChild(fragmentHeroes);
  };

  var onError = function (errorText) {
    var errorBlock = document.createElement('div');
    errorBlock.style.position = 'absolute';
    errorBlock.style.top = 0;
    errorBlock.style.left = 0;
    errorBlock.style.width = '100%';
    errorBlock.style.height = 'auto';
    errorBlock.style.background = 'red';
    errorBlock.style.color = 'white';
    errorBlock.textContent = errorText;
    errorBlock.style.textAlign = 'center';
    errorBlock.style.zIndex = 1;
    document.body.insertAdjacentElement('afterbegin', errorBlock);
  };

  window.backend.load(URL_LOAD, onLoad, onError);

  var onSave = function () {
    setupBlock.classList.add('hidden');
  };

  var form = setupBlock.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(URL_SAVE, new FormData(form), onSave, onError);
    evt.preventDefault();
  });

})();


(function () {
  var randomElement;
  var inputCoat = document.querySelector('input[name=coat-color]');
  var inputEyes = document.querySelector('input[name=eyes-color]');
  var inputFireball = document.querySelector('input[name=fireball-color]');

  window.colorize = function (element) {
    element.addEventListener('click', function () {
      if (element.className === 'setup-fireball-wrap') {
        randomElement = window.util.getRandomEl(window.setupWizzard.fireBallColors);
        element.style.background = randomElement;
        inputFireball.value = randomElement;
      } else if (element.classList.value === 'wizard-eyes') {
        randomElement = window.util.getRandomEl(window.setupWizzard.eyesColors);
        element.style.fill = randomElement;
        inputEyes.value = randomElement;
      } else if (element.classList.value === 'wizard-coat') {
        randomElement = window.util.getRandomEl(window.setupWizzard.coatColors);
        element.style.fill = randomElement;
        inputCoat.value = randomElement;
      }
    });
  };
})();

