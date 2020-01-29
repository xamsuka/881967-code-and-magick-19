var POS_X = 150;
var FIRST_POS_Y = 245;
var LAST_POS_Y = 75;
var WIDTH_SPACE = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 130, 30);
  ctx.fillText('Список результатов:', 130, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'red';
      ctx.fillRect(POS_X + (WIDTH_SPACE + BAR_WIDTH) * i, FIRST_POS_Y - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

    } else {
      ctx.fillStyle = 'hsl(255, 100%, ${10% * i})';
      ctx.fillRect(POS_X + (WIDTH_SPACE + BAR_WIDTH) * i, FIRST_POS_Y - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], POS_X + (WIDTH_SPACE + BAR_WIDTH) * i, FIRST_POS_Y + 10);
    ctx.fillText(Math.round(times[i]), POS_X + (WIDTH_SPACE + BAR_WIDTH) * i, LAST_POS_Y);
  }
};
