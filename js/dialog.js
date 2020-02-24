'use strict';

(function () {
  var blockSimilar = document.querySelector('.setup-similar');
  var setupBlock = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupBlock.querySelector('.setup-close');
  var inputUserName = document.querySelector('.setup-user-name');
  var setupCoord = {
    x: '50%',
    y: '80px'
  };

  var onPopupEscHandler = function (evt) {
    if (inputUserName === document.activeElement) {
      return;
    } else {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  var openPopup = function () {
    setupBlock.classList.remove('hidden');
    blockSimilar.classList.remove('hidden');
    setupBlock.style.left = setupCoord.x;
    setupBlock.style.top = setupCoord.y;
    document.addEventListener('keydown', onPopupEscHandler);
  };

  var closePopup = function () {
    setupBlock.classList.add('hidden');
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

(function () {
  var setupBlock = document.querySelector('.setup');
  var upload = setupBlock.querySelector('.upload');
  var isDragged = false;

  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoord = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (MoveEvt) {
      isDragged = true;

      var shift = {
        x: startCoord.x - MoveEvt.clientX,
        y: startCoord.y - MoveEvt.clientY
      };

      startCoord = {
        x: MoveEvt.clientX,
        y: MoveEvt.clientY
      };

      setupBlock.style.left = setupBlock.offsetLeft - shift.x + 'px';
      setupBlock.style.top = setupBlock.offsetTop - shift.y + 'px';
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();
      if (isDragged) {
        var onClickPreventDefault = function (evtElement) {
          evtElement.preventDefault();
          upload.removeEventListener('click', onClickPreventDefault);
        };
        upload.addEventListener('click', onClickPreventDefault);
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
