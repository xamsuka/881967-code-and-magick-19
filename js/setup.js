'use strict';
(function () {
  // eslint-disable-next-line no-shadow
  var ESC_KEY = 'Escape';
  // eslint-disable-next-line no-shadow
  var ENTER_KEY = 'Enter';

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.key === ESC_KEY) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === ENTER_KEY) {
        action();
      }
    }
  };
})();

var getRandomElement = function (arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

(function () {
  var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницка', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'gren'];
  var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.setupWizzard = {
    firstNames: firstNames,
    lastNames: lastNames,
    coatColors: coatColors,
    eyesColors: eyesColors,
    fireBallColors: fireBallColors
  };

})();

(function () {
  var personal = [];

  for (var i = 0; i < 4; i++) {
    personal[i] = {
      name: getRandomElement(window.setupWizzard.firstNames) + ' ' + getRandomElement(window.setupWizzard.lastNames),
      coatColors: getRandomElement(window.setupWizzard.coatColors),
      eyesColors: getRandomElement(window.setupWizzard.eyesColors)
    };
  }

  window.generateHero = {
    personal: personal
  };

})();

var personals = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var renderHero = function (hero) {
  var heroElement = template.cloneNode(true);
  heroElement.querySelector('.setup-similar-label').textContent = hero.name;
  heroElement.querySelector('.wizard-coat').style.fill = hero.coatColors;
  return heroElement;
};

for (var i = 0; i < window.generateHero.personal.length; i++) {
  fragment.appendChild(renderHero(window.generateHero.personal[i]));
}

personals.appendChild(fragment);

(function () {
  var randomElement;
  var inputCoat = document.querySelector('input[name=coat-color]');
  var inputEyes = document.querySelector('input[name=eyes-color]');
  var inputFireball = document.querySelector('input[name=fireball-color]');

  window.colorize = function (element) {
    element.addEventListener('click', function () {
      if (element.className === 'setup-fireball-wrap') {
        randomElement = getRandomElement(window.setupWizzard.fireBallColors);
        element.style.background = randomElement;
        inputFireball.value = randomElement;
      } else if (element.classList.value === 'wizard-eyes') {
        randomElement = getRandomElement(window.setupWizzard.eyesColors);
        element.style.fill = randomElement;
        inputEyes.value = randomElement;
      } else if (element.classList.value === 'wizard-coat') {
        randomElement = getRandomElement(window.setupWizzard.coatColors);
        element.style.fill = randomElement;
        inputCoat.value = randomElement;
      }
    });
  };
})();

(function () {
  var blockSimilar = document.querySelector('.setup-similar');
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var inputUserName = document.querySelector('.setup-user-name');

  var onPopupEscHandler = function (evt) {
    if (inputUserName === document.activeElement) {
      return;
    } else {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    blockSimilar.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscHandler);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    blockSimilar.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscHandler);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, closePopup);
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var wizardCoat = document.querySelector('.wizard-coat');
  var fireBall = document.querySelector('.setup-fireball-wrap');
  var wizardEyes = document.querySelector('.wizard-eyes');

  window.colorize(wizardCoat);
  window.colorize(fireBall);
  window.colorize(wizardEyes);
})();
