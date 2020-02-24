'use strict';

(function () {
  var personal = [];

  for (var i = 0; i < 4; i++) {
    personal[i] = {
      name: window.util.getRandomEl(window.setupWizzard.firstNames) + ' ' + window.util.getRandomEl(window.setupWizzard.lastNames),
      coatColors: window.util.getRandomEl(window.setupWizzard.coatColors),
      eyesColors: window.util.getRandomEl(window.setupWizzard.eyesColors)
    };
  }

  window.generateHero = {
    personal: personal
  };

})();

(function () {
  var templateHero = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  window.renderHero = {
    getHero: function (hero) {
      var heroElement = templateHero.cloneNode(true);
      heroElement.querySelector('.setup-similar-label').textContent = hero.name;
      heroElement.querySelector('.wizard-coat').style.fill = hero.coatColors;
      return heroElement;
    }
  };
})();

(function () {
  var personals = document.querySelector('.setup-similar-list');
  var fragmentHeroes = document.createDocumentFragment();
  for (var i = 0; i < window.generateHero.personal.length; i++) {
    fragmentHeroes.appendChild(window.renderHero.getHero((window.generateHero.personal[i])));
  }
  personals.appendChild(fragmentHeroes);
})();
