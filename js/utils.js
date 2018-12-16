"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Generated by CoffeeScript 2.3.2
var BLACK, BLUE, DARKGREEN, GREEN, RED, WHITE, YELLOW, addCell, calcBranch, goDeeper, makeButton, makeDiv, pretty, range, sum;

BLACK = "#000";

WHITE = "#FFF";

GREEN = "#0F0";

RED = "#F00";

YELLOW = "#FF0";

BLUE = "#00F";

DARKGREEN = "#080";

range = _.range;

pretty = function pretty(antal, pris) {
  return antal + "x" + pris + "kr";
};

sum = function sum(hash) {
  if (!hash) {
    return 0;
  }
  return _.reduce(Object.values(hash), function (memo, num) {
    return memo + num;
  }, 0);
};

// assert 3, sum {a:1, b:2}
calcBranch = function calcBranch(a, b) {
  var i, j, len, n, ref;
  n = Math.min(a.length, b.length);
  ref = range(n);
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (a[i] !== b[i]) {
      return b;
    }
  }
  if (a.length < b.length) {
    return b;
  } else {
    return b.slice(0, n - 1);
  }
};

// assert [], calcBranch [0],[0]
// assert [0], calcBranch [0,0],[0,0]
// assert [], calcBranch [0,0],[0]
// assert [0], calcBranch [],[0]
// assert [0,0], calcBranch [0],[0,0]
// assert [1], calcBranch [0],[1]
// assert [0], calcBranch [1],[0]
// assert [0,1], calcBranch [0,0],[0,1]
// assert [0], calcBranch [1,0],[0]
goDeeper = function goDeeper(a, b) {
  var i, j, len, ref;
  ref = range(Math.min(a.length, b.length));
  //console.log 'goDeeper'
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return a.length >= b.length;
};

// assert true,  goDeeper [],[]
// assert true,  goDeeper [0],[0]
// assert true,  goDeeper [0,0],[0,0]
// assert true,  goDeeper [0],[]
// assert true,  goDeeper [0,0],[0]
// assert false, goDeeper [],[0]
// assert false, goDeeper [0],[0,0]
// assert false, goDeeper [0],[1]
// assert false, goDeeper [1],[0]
// assert false, goDeeper [0,0],[0,1]
// assert false, goDeeper [1,0],[0]
makeButton = function makeButton(value, level, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      bg = _ref2[0],
      sc = _ref2[1];

  var res;
  res = document.createElement("input");
  res.type = 'button';
  res.value = value;
  res.style.backgroundColor = bg;
  res.style.color = sc;
  res.style.width = '205px';
  res.style.textAlign = 'left';
  res.style.paddingLeft = 10 * level + "px";
  return res;
};

makeDiv = function makeDiv(value) {
  var align = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';

  var res;
  res = document.createElement("div");
  res.innerHTML = value;
  res.style.cssText = "font-size:100%; width:100%; text-align:" + align;
  return res;
};

addCell = function addCell(tr, value, width) {
  var td;
  td = document.createElement("td");
  td.style.cssText = "width:" + width + "%";
  td.appendChild(value);
  return tr.appendChild(td);
};
//# sourceMappingURL=utils.js.map
