'use strict';

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
