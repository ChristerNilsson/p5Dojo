var myCodeMirror
var msg
var sel1, sel2, sel3
var chapter, exercise, call = ''
var expectedResult

function grid() {
  push()
  sc(1)
  for (var i in range(11)) {
    line(0, 20 * i, 200, 20 * i)
    line(20 * i, 0, 20 * i, 200)
  }
  pop()
}

function myprint() {
  console.log(Array.prototype.slice.call(arguments).join(" "))
}

function co() {
  return fixColor(arguments)
}

function ip(y1,y2,x,x1,x2) {
  if (arguments.length==3) {
    x1=0
    x2=9
  }
  return map(x,x1,x2,y1,y2)
}

function fixColor(args) {
  var n = args.length
  var r, g, b, a=1
  if (n == 1) {
    r = args[0]
    g = r
    b = r
  } else if (n == 3) {
    r = args[0]
    g = args[1]
    b = args[2]
  } else if (n==4) {
    r = args[0]
    g = args[1]
    b = args[2]
    a = args[3]    
  }
  return color(255 * r, 255 * g, 255 * b, 255 * a)
}

function bg() {
  fill(fixColor(arguments))
  rect(0, 0, 200, 200)
}

function fc() {
  var n = arguments.length
  if (n == 0) {
    noFill()
  } else {
    fill(fixColor(arguments))
  }
}

function sc(r, g, b) {
  var n = arguments.length
  if (n == 0) {
    noStroke()
  } else {
    stroke(fixColor(arguments))
  }
}

function sw(n) {
  strokeWeight(n)
}

function circle(x,y,r) {
  ellipse(x,y,2*r,2*r)
}

function rd(vinkel) {
  return rotate(radians(vinkel))
}

function range() {
  n = arguments.length
  if (n==1) {
    return _.range(arguments[0])
  } else if (n==2) {
    return _.range(arguments[0],arguments[1])
  } else if (n==3) {
    return _.range(arguments[0],arguments[1],arguments[2])
  }
}

function fillSelect(sel, dict) {
  sel.empty()
  for (key in dict) {
    sel.append($("<option>").attr('value', key).text(key))
  }
}

function fillSelectAssert(sel, dict) { 
  sel.empty()
  for (key in dict) {
    var val = dict[key]
    sel.append($("<option>").attr('value', key).text(key + '==' + JSON.stringify(val)))
  }
}

function sel1change(sel) {
  chapter = sel.value
  exercise = ""
  call = ""
  fillSelect(sel2, data[chapter])
  sel3.empty()
}

function sel2change(sel) {
  exercise = sel.value
  call = ""
  if (chapter.indexOf("Assert")==0) {
    fillSelectAssert(sel3, data[chapter][exercise]["c"])    
  } else {
    fillSelect(sel3, data[chapter][exercise]["c"])    
  }
  /*
  console.log(chapter)
  console.log(exercise)
  var d = data[chapter][exercise]["c"]
  var keys = Object.keys(d)
  console.log(d)
  console.log(keys.length)
  if (keys.length > 0) {
    sel3.val(keys[0])
    sel3change(sel3)
  } else {
    */
    
    var a = data[chapter][exercise]["a"]
    run(1, a)
  
    var b = data[chapter][exercise]["b"]
    myCodeMirror.setValue(b)
    myCodeMirror.focus() 
    compare()
  //}

}

function sel3change(sel) {
  call = sel.value
  expectedResult = data[chapter][exercise]["c"][sel.value]

  var a = data[chapter][exercise]["a"]
  run(1, a + call)

  var b = data[chapter][exercise]["b"]
  //run(0, b + call)
  run0()
  myCodeMirror.focus()
  compare()
}

function changeLayout() {
    var w = $(window).width()
    $(".CodeMirror").width(w-430)
    $("#canvas").css({top: 0, left: w-215, position:'absolute'});    
    $("#msg").width(w-435)
};

var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(changeLayout, 10);
});

function setup() {

  c = createCanvas(5+201+5, 5+201+5+201+5+201+5)
  pixelDensity(1)
  c.parent('canvas')
  
  msg = $('#msg')
 
  sel1 = $('#sel1')
  sel2 = $('#sel2')
  sel3 = $('#sel3')

  fillSelect(sel1, data)
}

window.onload = function () {

  var ta = document.getElementById("code")

  myCodeMirror = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "coffeescript",
    keyMap: "sublime",
    theme: "dracula",
    autoCloseBrackets: true,
    lineWiseCopyCut: true,
    tabSize: 2,
    indentWithTabs: true,
  });
  
  $(".CodeMirror").css('font-size',"16pt")
  //$(".CodeMirror").css('font-family',"Webdings")
  myCodeMirror.on("change", run0)

  help = createA('https://github.com/ChristerNilsson/p5Dojo/blob/master/README.md', 'help', '_blank')
  help.position(10,638)

  p5Color = createA('https://christernilsson.github.io/p5Color/', 'p5Color', '_blank')
  p5Color.position(50,638)
  
  background(128)
  run(0, "")
  run(1, "")

  chapter = 'Lektion1'
  sel1.val(chapter).change()
  exercise = 'whiteBackground'
  sel2.val(exercise).change()
  
  myCodeMirror.focus()
  window.resizeTo(1000,750)
  changeLayout()
}

function setMsg(txt) {
  msg.val(txt)
  if(txt == '') {
    msg.css('background-color' , '#FFFFFF');
  } else {
    msg.css('background-color' , '#FF0000');
  }  
}

function run0() {
  background(128)
  var b = myCodeMirror.getValue()
  data[chapter][exercise]["b"] = b
  //console.log(transpile(b))
  if (window.f != null) window.f = null
  if (chapter.indexOf('Assert') == -1) {
    run1()
    run(0, transpile(b + "\n" + call))
  } else {
    console.log(transpile(b))
    result = null
    run(0, "result = " + transpile(b + "\nreturn " + call))    
    if (result != null) {
      console.log(result)
      if (_.isEqual(result, expectedResult)) {
        run(0,"bg(0,1,0)")
      } else {
        run(0,"bg(1,0,0)")
        setMsg('Unexpected result was: ' + result)
      }
    } else {
        setMsg('No Result')
    }
  }

  if (msg.val()=='') compare()
}

function run1() {
  var a = data[chapter][exercise]["a"] 
  run(1, a + ";" + call)
}

function reset() {
  colorMode(RGB,255)
  angleMode(RADIANS)
  bg(0)
  fc(0)
  sc(1)
  grid()
}

function run(n, code) {
  resetMatrix()
  rectMode(CORNER)
  push()
  translate(5, 5+n * 206)
  reset()

  try {
    setMsg('')
    console.log(code)
    eval(code)
    pop()
  } catch (err) {
    pop()
    setMsg(err.stack)
  }
}

function compare() {
  
  GAP = 5
  WIDTH = 201
  HEIGHT = 201
  
  loadPixels()
  
  var area1 = new Area(pixels,GAP,GAP,                WIDTH,HEIGHT)
  var area2 = new Area(pixels,GAP,1*(GAP+HEIGHT)+GAP, WIDTH,HEIGHT)
  var area3 = new Area(pixels,GAP,2*(GAP+HEIGHT)+GAP, WIDTH,HEIGHT)
 
  var count = 0
  
  for (var i of range(WIDTH+1)) {
    for (var j of range(HEIGHT+1)) {
    
      var lst1 = area1.getPixel(i,j)
      var r1 = lst1[0]
      var g1 = lst1[1]
      var b1 = lst1[2]
      var lst2 = area2.getPixel(i,j)
      var r2 = lst2[0]
      var g2 = lst2[1]
      var b2 = lst2[2]
      var r = abs(r1-r2)
      var g = abs(g1-g2)
      var b = abs(b1-b2)

      area3.setPixel(i,j,[r,g,b,255]) 
      if (r+g+b > 9) { // t ex whiteTriangle i motsatt riktning
        count += 1
        //if (count < 10) console.log(i,j,":",r,g,b)
      }
    }
  } 
  updatePixels()
  //if (count > 0) console.log(count)
  return count
}

function mousePressed() {
  compare()
}