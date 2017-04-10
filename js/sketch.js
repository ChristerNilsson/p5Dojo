// Generated by CoffeeScript 1.11.1
var Application, bg, bgc, block, buffer, call, calls, changeLayout, chapter, circle, co, compare, d, dd, decorate, editor_change, exercise, fc, fcc, fetch, fillSelect, fillTable, fixColor, fix_frames, gap, grid, ip, linkAppend, linksClear, mousePressed, msg, myCodeMirror, myprint, range, rd, reset, resizeTimer, run, run0, run1, saveToKeyStorage, sc, scc, sel1, sel1change, sel1click, sel2, sel2change, sel2click, sel3, sel3click, setLinks, setMsg, setup, store, sw, tableAppend, tableClear, tcc;

myCodeMirror = null;

msg = null;

sel1 = null;

sel2 = null;

sel3 = null;

chapter = "";

exercise = "";

call = '';

calls = {};

gap = 0;

block = 0;

buffer = [[], [], []];

setMsg = function(txt) {
  msg.val(txt);
  return msg.css('background-color', txt === '' ? '#FFFFFF' : '#FF0000');
};

grid = function() {
  var i, l, len, ref;
  push();
  bg(0.25);
  sc(0.5);
  ref = range(11);
  for (l = 0, len = ref.length; l < len; l++) {
    i = ref[l];
    line(0, 20 * i, 200, 20 * i);
    line(20 * i, 0, 20 * i, 200);
  }
  return pop();
};

myprint = function() {
  return print(Array.prototype.slice.call(arguments).join(" "));
};

co = function() {
  return fixColor(arguments);
};

ip = function(y1, y2, x, x1, x2) {
  if (arguments.length === 3) {
    x1 = 0;
    x2 = 9;
  }
  return map(x, x1, x2, y1, y2);
};

fixColor = function(args) {
  var a, b, g, n, r;
  n = args.length;
  r = 0;
  g = 0;
  b = 0;
  a = 1;
  if (n === 1) {
    r = args[0];
    g = r;
    b = r;
  } else if (n === 3) {
    r = args[0];
    g = args[1];
    b = args[2];
  } else if (n === 4) {
    r = args[0];
    g = args[1];
    b = args[2];
    a = args[3];
  }
  return color(255 * r, 255 * g, 255 * b, 255 * a);
};

bg = function() {
  return background(fixColor(arguments));
};

fc = function() {
  var n;
  n = arguments.length;
  if (n === 0) {
    return noFill();
  } else {
    return fill(fixColor(arguments));
  }
};

sc = function() {
  var n;
  n = arguments.length;
  if (n === 0) {
    return noStroke();
  } else {
    return stroke(fixColor(arguments));
  }
};

bgc = function(cc) {
  return bg(cc % 2, int(cc / 2) % 2, int(cc / 4));
};

fcc = function(cc) {
  return fc(cc % 2, int(cc / 2) % 2, int(cc / 4));
};

scc = function(cc) {
  return sc(cc % 2, int(cc / 2) % 2, int(cc / 4));
};

tcc = function(cc) {
  return fcc([7, 7, 0, 0, 7, 0, 0, 0][cc]);
};

sw = function(n) {
  return strokeWeight(n);
};

circle = function(x, y, r) {
  return ellipse(x, y, 2 * r, 2 * r);
};

rd = function(vinkel) {
  return rotate(radians(vinkel));
};

range = _.range;

fillSelect = function(sel, dict) {
  var key;
  sel.empty();
  for (key in dict) {
    sel.append($("<option>").attr('value', key).text(key));
  }
  if (sel === sel2) {
    return sel.append($("<option>").attr('value', 'BACK').text('BACK'));
  }
};

sel1change = function(sel) {
  chapter = sel.value;
  exercise = "";
  call = "";
  calls = {};
  fillSelect(sel2, data[chapter]);
  return sel2.show();
};

sel2change = function(sel) {
  var calls_without_draw;
  if (sel.value === 'BACK') {
    exercise = "";
    myCodeMirror.setValue("");
    tableClear();
    linksClear();
    bg(0.5);
    sel2.hide();
    return;
  }
  exercise = sel.value;
  if (exercise === "") {
    myCodeMirror.setValue("");
    bg(0.5);
    return;
  }
  call = "";
  calls = decorate(data[chapter][exercise]["c"]);
  setLinks();
  calls_without_draw = _.omit(calls, 'draw()');
  fillSelect(sel3, calls_without_draw);
  myCodeMirror.setValue(data[chapter][exercise]["b"]);
  tableClear();
  if (calls != null) {
    sel3.val("draw()").change();
    call = calls["draw()"];
  }
  run1();
  run0();
  myCodeMirror.focus();
  return compare('sel2change');
};

sel1click = function(sel) {
  return sel2.show();
};

sel2click = function(sel) {
  if (sel.value === 'BACK') {
    return $("#sel2").hide();
  }
};

sel3click = function(sel) {
  if (calls != null) {
    call = calls[sel.value];
  }
  run1();
  run0();
  myCodeMirror.focus();
  return compare('sel3click');
};

mousePressed = function() {
  var dict, objekt, p, ref, ref1, ref2, ref3;
  p = null;
  if ((0 <= (ref = mouseX - 5) && ref <= 200) && (0 <= (ref1 = mouseY - 5) && ref1 <= 200)) {
    p = [mouseX - 5, mouseY - 5];
  }
  if ((0 <= (ref2 = mouseX - 5) && ref2 <= 200) && (0 <= (ref3 = mouseY - 210) && ref3 <= 200)) {
    p = [mouseX - 5, mouseY - 210];
  }
  if (p) {
    dict = data[chapter][exercise]["c"];
    if (dict != null) {
      objekt = _.keys(dict)[0];
      call = objekt + (".mousePressed(" + p[0] + "," + p[1] + "); ") + objekt + ".draw(); " + objekt + ".store()";
      run1();
      run0();
      myCodeMirror.focus();
      return compare('mousePressed');
    }
  }
};

setLinks = function() {
  var link, ref, results, text;
  linksClear();
  linkAppend(links, "https://github.com/ChristerNilsson/p5Dojo/blob/master/README.md", "p5Dojo");
  linkAppend(links, "https://p5js.org/reference", "p5");
  linkAppend(links, "http://coffeescript.org", "Coffeescript");
  linkAppend(links, "https://www.w3schools.com/js", "Javascript");
  linkAppend(links, "https://github.com/ChristerNilsson/Nilsson/blob/master/README.md", "Nilsson");
  linkAppend(links, "https://christernilsson.github.io/p5Color", "p5Color");
  linkAppend(links, "http://underscorejs.org/", "Underscore");
  ref = data[chapter][exercise]["e"];
  results = [];
  for (text in ref) {
    link = ref[text];
    results.push(linkAppend(links, link, text));
  }
  return results;
};

linksClear = function() {
  return $("#links tr").remove();
};

d = function(s) {
  return "'" + s + "'";
};

dd = function(s) {
  return '"' + s + '"';
};

linkAppend = function(t, link, text) {
  var cell1, row, s;
  row = t.insertRow(-1);
  cell1 = row.insertCell(-1);
  s = '<a href=' + d(link);
  s += ' target=' + d('_blank');
  s += ' onmouseover=' + d('this.style.color=' + dd('yellow') + ';');
  s += ' onmouseout=' + d('this.style.color=' + dd('black') + ';');
  s += '>';
  s += text;
  s += '</a>';
  return cell1.innerHTML = s;
};

decorate = function(dict) {
  var l, len, method, methods, objekt, res, s;
  if (dict === void 0) {
    return {};
  }
  if (dict === null) {
    return {};
  }
  res = {};
  for (objekt in dict) {
    s = dict[objekt];
    methods = s.split("|");
    res["draw()"] = objekt + ".draw(); " + objekt + ".store()";
    for (l = 0, len = methods.length; l < len; l++) {
      method = methods[l];
      res[method] = objekt + "." + method + "; " + objekt + ".draw(); " + objekt + ".store()";
    }
  }
  return res;
};

changeLayout = function() {
  var w;
  w = $(window).width();
  $(".CodeMirror").width(w - 425);
  $("#canvas").css({
    top: 0,
    left: 205,
    position: 'absolute'
  });
  return $("#msg").width(w - 430);
};

resizeTimer = 0;

$(window).resize(function() {
  clearTimeout(resizeTimer);
  return resizeTimer = setTimeout(changeLayout, 10);
});

setup = function() {
  var c;
  c = createCanvas(5 + 201 + 5, 3 * 201 + 20);
  gap = 5 * width * 4;
  block = 201 * width * 4;
  pixelDensity(1);
  c.parent('canvas');
  msg = $('#msg');
  sel1 = $('#sel1');
  sel2 = $('#sel2');
  sel3 = $('#sel3');
  sel2.hide();
  return fillSelect(sel1, data);
};

window.onbeforeunload = function() {
  var blob, i, key1, key2, l, len, ref, res, s;
  if (document.URL.indexOf("record") === -1) {
    return;
  }
  res = [];
  for (key1 in data) {
    chapter = data[key1];
    for (key2 in chapter) {
      exercise = chapter[key2];
      if (exercise.d) {
        res.push("### " + key1 + " ### " + key2 + "\n");
        ref = exercise.d;
        for (i = l = 0, len = ref.length; l < len; i = ++l) {
          s = ref[i];
          res.push("=== " + i + "\n");
          res.push(s + "\n");
        }
      }
    }
  }
  blob = new Blob(res, {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, "recording.txt");
  return true;
};

window.onload = function() {
  var ta;
  ta = document.getElementById("code");
  myCodeMirror = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "coffeescript",
    keyMap: "sublime",
    theme: "dracula",
    autoCloseBrackets: true,
    lineWiseCopyCut: true,
    tabSize: 2,
    indentWithTabs: true
  });
  $(".CodeMirror").css('font-size', "16pt");
  myCodeMirror.on("change", editor_change);
  chapter = "";
  exercise = "";
  myCodeMirror.focus();
  window.resizeTo(1000, 750);
  return changeLayout();
};

saveToKeyStorage = function(b) {
  var l, len, line, place, ref, s;
  s = "";
  ref = b.split('\n');
  for (l = 0, len = ref.length; l < len; l++) {
    line = ref[l];
    if (line.indexOf("#") !== 0) {
      s += line;
    }
  }
  place = data[chapter][exercise];
  if (!place.d) {
    place.d = [];
  }
  return place.d.push(s);
};

editor_change = function() {
  if (_.size(calls) === 0) {
    call = "";
  } else {
    call = calls["draw()"];
  }
  run1();
  run0();
  if (msg.val() === '') {
    return compare('editor_change');
  }
};

run0 = function() {
  var b;
  if (exercise === "") {
    return;
  }
  b = myCodeMirror.getValue();
  data[chapter][exercise]["b"] = b;
  return run(0, b + "\n" + call);
};

run1 = function() {
  if (exercise === "") {
    return;
  }
  return run(1, data[chapter][exercise]["a"] + "\n" + call);
};

reset = function() {
  colorMode(RGB, 255);
  angleMode(RADIANS);
  sw(1);
  strokeCap(ROUND);
  textAlign(LEFT, BASELINE);
  bg(0);
  fc(0);
  sc(1);
  return grid();
};

run = function(_n, coffee) {
  var code, e;
  resetMatrix();
  rectMode(CORNER);
  push();
  translate(5, 5);
  reset();
  setMsg("");
  if (exercise === "") {
    return;
  }
  try {
    code = transpile(coffee);
    try {
      eval(code);
      buffer[1 - _n] = store();
    } catch (error) {
      e = error;
      setMsg(e.stack.split('\n')[0]);
    }
    pop();
    return true;
  } catch (error) {
    e = error;
    pop();
    setMsg(e.name + ": " + e.message);
    return false;
  }
};

store = function() {
  loadPixels();
  return pixels.slice(gap, gap + block);
};

fetch = function(buffer, y0) {
  var i, l, len, ref;
  loadPixels();
  ref = range(block);
  for (l = 0, len = ref.length; l < len; l++) {
    i = ref[l];
    pixels[gap + (gap + block) * y0 + i] = buffer[i];
  }
  return updatePixels();
};

fix_frames = function() {
  var i, j, k, l, len, len1, len2, len3, m, o, q, ref, ref1, ref2, ref3;
  loadPixels();
  ref = range(4);
  for (l = 0, len = ref.length; l < len; l++) {
    k = ref[l];
    ref1 = range(gap);
    for (m = 0, len1 = ref1.length; m < len1; m++) {
      i = ref1[m];
      pixels[(gap + block) * k + i] = 128 - 64;
    }
  }
  ref2 = range(height);
  for (o = 0, len2 = ref2.length; o < len2; o++) {
    j = ref2[o];
    ref3 = range(20);
    for (q = 0, len3 = ref3.length; q < len3; q++) {
      i = ref3[q];
      pixels[j * width * 4 + i] = 128 - 64;
      pixels[j * width * 4 + 206 * 4 + i] = 128 - 64;
    }
  }
  return updatePixels();
};

compare = function(msg) {
  var a, b, c, i, i4, l, len, ref;
  a = buffer[0];
  b = buffer[1];
  c = a.slice(0);
  ref = range(block / 4);
  for (l = 0, len = ref.length; l < len; l++) {
    i = ref[l];
    i4 = 4 * i;
    c[i4 + 0] = abs(c[i4 + 0] - b[i4 + 0]);
    c[i4 + 1] = abs(c[i4 + 1] - b[i4 + 1]);
    c[i4 + 2] = abs(c[i4 + 2] - b[i4 + 2]);
    c[i4 + 3] = 255;
  }
  fetch(a, 0);
  fetch(b, 1);
  fetch(c, 2);
  return fix_frames();
};

Application = (function() {
  function Application(name1) {
    var dict, key, name, obj, value;
    this.name = name1 != null ? name1 : 'b';
    name = chapter + "/" + exercise + "/" + this.name;
    obj = localStorage.getItem(name);
    if (obj) {
      dict = JSON.parse(obj);
      for (key in dict) {
        value = dict[key];
        this[key] = value;
      }
    }
  }

  Application.prototype.store = function() {
    var name, obj;
    name = chapter + "/" + exercise + "/" + this.name;
    obj = JSON.stringify(this);
    localStorage.setItem(name, obj);
    return fillTable(chapter + "/" + exercise + "/a", chapter + "/" + exercise + "/b");
  };

  Application.prototype.draw = function() {
    textSize(32);
    textAlign(CENTER, CENTER);
    fc(1, 1, 0);
    return text("Define draw!", 100, 100);
  };

  Application.prototype.reset = function() {
    var key, l, len, ref, results;
    ref = _.keys(this);
    results = [];
    for (l = 0, len = ref.length; l < len; l++) {
      key = ref[l];
      if (key !== "name") {
        results.push(delete this[key]);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Application.prototype.readText = function() {
    return $('#input').val();
  };

  Application.prototype.readInt = function() {
    return parseInt(this.readText());
  };

  Application.prototype.readFloat = function() {
    return parseFloat(this.readText());
  };

  Application.prototype.mousePressed = function(mx, my) {};

  return Application;

})();

tableClear = function() {
  return $("#tabell tr").remove();
};

tableAppend = function(t, call, expected, actual) {
  var cell1, cell2, cell3, row, sp;
  sp = "&nbsp;";
  row = t.insertRow(-1);
  cell1 = row.insertCell(-1);
  cell1.innerHTML = sp + call + sp;
  cell1.style.backgroundColor = '#FFFF00';
  cell2 = row.insertCell(-1);
  cell2.innerHTML = sp + JSON.stringify(expected) + sp;
  cell2.style.backgroundColor = '#00FF00';
  cell3 = row.insertCell(-1);
  cell3.innerHTML = sp + JSON.stringify(actual) + sp;
  return cell3.style.backgroundColor = _.isEqual(expected, actual) ? '#00FF00' : '#FF0000';
};

fillTable = function(a, b) {
  var key, keys, l, len, results, value;
  a = JSON.parse(localStorage[a]);
  b = JSON.parse(localStorage[b]);
  tableClear();
  keys = [];
  for (key in a) {
    value = a[key];
    keys.push(key);
  }
  for (key in b) {
    value = b[key];
    keys.push(key);
  }
  sort(keys);
  keys = _.uniq(keys);
  results = [];
  for (l = 0, len = keys.length; l < len; l++) {
    key = keys[l];
    if (key !== 'name') {
      results.push(tableAppend(tabell, "@" + key, a[key], b[key]));
    } else {
      results.push(void 0);
    }
  }
  return results;
};
