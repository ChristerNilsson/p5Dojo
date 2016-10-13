// underscore

//var canvas
//var code
var myCodeMirror
var msg
var sel1, sel2, sel3
var chapter, exercise, call = ''

function grid() {
  push()
  sc(1)
  for (var i in range(11)) {
    line(0, 20 * i, 200, 20 * i)
    line(20 * i, 0, 20 * i, 200)
  }
  pop()
}

function co() {
  return fixColor(arguments)
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
    //console.log(_.range(arguments[0],arguments[1],arguments[2]))
    return _.range(arguments[0],arguments[1],arguments[2])
  }
}

function fillSelect(sel, dict) {
  sel.empty()
  for (key in dict) {
    sel.append($("<option>").attr('value', key).text(key))
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
  fillSelect(sel3, data[chapter][exercise]["c"])
  code1 = data[chapter][exercise]["a"]
  run(1, code1)

  b = data[chapter][exercise]["b"]
  myCodeMirror.setValue(b)
  myCodeMirror.focus() 
}

function sel3change(sel) {
  call = sel.value

  a = data[chapter][exercise]["a"]
  run(1, a + call)

  b = data[chapter][exercise]["b"]
  run(0, b + call)
  myCodeMirror.focus() 
}

function setup() {

  c = createCanvas(5+201+5, 5+201+5+201+5+201+5)
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
    mode: "javascript",
    keyMap: "sublime",
    theme: "dracula",
    autoCloseBrackets: true,
    lineWiseCopyCut: true
  });
  
  $(".CodeMirror").css('font-size',"16pt")
  myCodeMirror.on("change", run0)

  help = createA('https://github.com/ChristerNilsson/p5Dojo/blob/master/README.md', 'help', '_blank')
  help.position(10,638)
  
  background(128)
  run(0, "")
  run(1, "")
  run(2, "bg(1,1,0)")

  chapter = 'Lektion1'
  sel1.val(chapter).change()
  exercise = 'whiteBackground'
  sel2.val(exercise).change()
  
  myCodeMirror.focus()

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
  b = myCodeMirror.getValue()
  data[chapter][exercise]["b"] = b
  run1()
  run2()
  run(0, b + ";" + call)
}

function run1() {
  a = data[chapter][exercise]["a"] 
  run(1, a + ";" + call)
}

function run2() {
  run(2, "bg(1,1,0)")
}

function reset() {
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
    eval(code)
    pop()
  } catch (err) {
    console.log(err)
    pop()
    setMsg(err.stack)
  }
}