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
    },
    getRandomEl: function (arr) {
      var randomElement = arr[Math.floor(Math.random() * arr.length)];
      return randomElement;
    }
  };
})();
