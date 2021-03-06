function countdown(callback) {
  window.setTimeout(callback)
}


function createMultiplier(multiplierValue) {
  return function (num) {
    return multiplierValue * num;
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(val1, val2) {
  return val1 * val2;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
