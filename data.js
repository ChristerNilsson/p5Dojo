// a : facit
// b : student
// c : call
// Observe:  local variables a,b and c must be declared var. e.g. r,g,b
// Eventually, skip a,b and c and use a list instead

data = {
  Lektion1: {
    whiteBackground: {a: "bg(1)",b: "//Lines Of Code:1 bg"},
    grayBackground: {a: "bg(0.5)",b: "//LOC:1"},
    redBackground: {a: "bg(1,0,0)",b: "//LOC:1"},
    greenBackground: {a: "bg(0,1,0)",b: "//LOC:1"},
    yellowBackground: {a: "bg(1,1,0)",b: "//LOC:1"},
    Point: {a: "point(10,30)", b: "//LOC:1 point"},
    redPoint: {a: "sc(1,0,0); point(20,40)", b: "//LOC:2 sc"},
    greenPoint: {a: "sc(0,1,0); point(30,10)", b: "//LOC:2"},
  },
  Lektion2: {
    dices: {a: "point(10,10); sc(1,0,0);point(25,5);point(35,15); sc(0,1,0);point(45,5);point(50,10);point(55,15); sc(1,1,0);point(65,5);point(65,15);point(75,5);point(75,15); sc(1,0,1);point(85,5);point(85,15);point(90,10);point(95,5);point(95,15); sc(0,1,1);point(105,5);point(105,10);point(105,15);point(115,5);point(115,10);point(115,15)",  b: "//LOC:26" },
  },
  Lektion3: {
    horizontalLine: {a: "sc(1,0,1); line(10,70, 190,70)",b: "//LOC:2 line"},
    verticalLine: {a: "sc(1,1,0);sw(10);line(110,30, 110,170)",b: "//LOC:3 sw"},
    yellowLine: {a: "sc(1,1,0);line(20,0, 200,20)",b: "//LOC:2"},
    grid: {a:"sc(1,1,0); sw(2); for (var i=10; i<200; i+=10) { line(10,i,190,i);line(i,190,i,10);}", b:"//LOC:5 loopa line"},
    skislope:{a: "bg(0);sc(1,0,0);for (i of range(21)) line(i*10,0,200,i*10)",b: "//LOC:4 loopa line"},
    sunshine:{a: "bg(0);sc(1,1,0);for (i of range(10)) {line(i*20,0,200-i*20,200);line(0,20+i*20,200,180-i*20)}",b: "//LOC:5 lerp"},
  },
  Lektion3_5: {
    for01: {a:"for (i of range(10)) {x = 5+20*i; rect(x,5, 10,10);}", b:"//LOC:2 rect"},
    for02: {a:"for (i of range(10)) {y = 5+20*i; rect(5,y, 10,10);}", b:"//LOC:2"},
    for03: {a:"for (i of range(10)) {x = 5+20*i; y = 5+20*i; rect(x,y, 10,10);}", b:"//LOC:2"},
    for04: {a:"for (i of range(10)) {for (j of range(10)) {x = 5+20*i;y = 5+20*j;rect(x,y, 10,10);}}", b:"//LOC:3"},
    for05: {a:"rectMode(CENTER);for (i of range(10)) {x = 10+20*i;y = 10;w = 2*i;h = 2*i;rect(x,y, w,h);}", b:"//LOC:3 rectMode"},
    for06: {a:"rectMode(CENTER);for (i of range(10)) {fc(i/10.0,0,0);x = 10+20*i;y = 10;w = 2*i;h = 2*i;rect(x,y,w,h);}", b:"//LOC:4 fc"},
    for07: {a:"for (i of range(10)) {fc(i/10.0,0,0);x = 10+20*i;y = 10;r = i;circle(x,y,r);}", b:"//LOC:3 circle"},
    for08: {a:"for (i of range(10,0,-1)) {fc(i/10.0,0,0);r = 10 * i;circle(100,100, r);}", b:"//LOC:3"},
    for09: {a:"for (i of range(10,0,-1)) {fc(i/10.0,0,0);x = 10*i;y = 10*i;r = 10*i;circle(x,y,r);}", b:"//LOC:3"},
    for10: {a:"for (i of range(10)) {for (j of range(10)) {fc(i/10.0,j/10.0,0);x = 10+20*i;y = 10+20*j;r = (i+j)/2;circle(x,y,r);}}", b:"//LOC:4"},
    for11: {a:"rectMode(CENTER);sc(1); translate(100,100);for (i of range(18,-1,-1)) {r = 1.0*i/18;fc(r,0,0);w = 70+5*i;h = 70+5*i;rect(0,0, w,h);rd(5);}", b:"//LOC:7 translate rd"},
    for12: {a:"rectMode(CENTER); sc(); for (i of range(10)) { for (j of range(10)) { push(); translate(10+20*i,10+20*j); rd(5*(i+j)); var r = i/9.0; var g = j/9.0; var b = 0; fc(r,g,b);rect(0,0, 10,10); pop()}}", b:"//LOC:10 push pop"},
  },
  Lektion4: {
    whiteCircle: {a:" fc(1);circle(60,80,30)", b:"//LOC:2"},
    whiteEmptyCircle: {a:"sc(1); fc(); sw(2);circle(70,90,40)", b:"//LOC:2"},
    twoDiscsA: {a:"fc(1,0,0);circle(80,100,40);fc(0,1,0);circle(100,120,50)", b:"//LOC:3"},
    twoDiscsB: {a:"fc(0,1,0);circle(140,120,60);fc(1,0,0);circle(60,80,50)", b:"//LOC:3"},
    twoDiscsC: {a:"fc(1,0,0);circle(80,100,40);fc(0,1,0, 0.5);circle(120,100,50)", b:"//LOC:3"},
    twoDiscsD: {a:"fc(1,0,0, 0.5);circle(80,90,60);fc(0,1,0);circle(110,120,50)", b:"//LOC:3"},
    twoDiscsE: {a:"fc(1,0,0, 0.5);circle(70,90,50);fc(0,1,0, 0.5);circle(100,130,70)", b:"//LOC:3"},
    twoDiscsF: {a:"fc(0,1,0, 0.5);circle(120,140,40);fc(1,0,0);circle(80,70,50)", b:"//LOC:3"},
    twoDiscsG: {a:"fc(0,1,0);circle(110,120,40);fc(1,0,0, 0.5);circle(80,100,60)", b:"//LOC:3"},
    twoDiscsH: {a:"fc(0,1,0, 0.5);circle(120,100,40);fc(1,0,0, 0.5);circle(80,90,60)", b:"//LOC:3"},
  },
  Lektion5: {
    greenEllipse: {a:"fc(0,1,0);ellipse(120,60, 60,40)", b:"//LOC:2 ellipse"}, 
    greenRect: {a:" fc(0,1,0);rect(60,80, 40,50) ", b:"//LOC:2"},
    redRect: {a:"fc(1,0,0);rect(80,70, 40,100)", b:"//LOC:2"},
    cross: {a:"fc(1,0,0);sc();rect(85,70, 70,10);rect(115,40, 10,100)", b:"//LOC:3"},
    squareHole: {a:"fc(0,1,1);sc();rect(60,60, 80,20);rect(60,120, 80,20);rect(60,60, 20,80);rect(120,60, 20,80);sc(0);fc();sc(1,0,0);sw(3);rect(60,60, 80,80);rect(80,80, 40,40)", b:"//LOC:12"},
  },
  Lektion6: {
    whiteTriangle: {a:"fc(1);triangle(20,40, 160,100, 100,140)", b:"//LOC:2 triangle"}, 
    yellowQuad: {a:"fc(1,1,0);quad(150,100, 180,20, 40,20, 100,140)", b:"//LOC:2 quad"}, 
    pacMan: {a:"fc(1,1,0);arc(100,100, 80,80, radians(-135),radians(135), PIE)", b:"//LOC:2 arc radians PIE"}, 
  },
  LektionZ: {
    chessRow: {
      a:"bg(0.5);for (i of range(8)) {;fc(i%2);rect(20+20*i,20, 20,20)}",
      b:"//LOC:4 %"
    },
    chessBoard: {
      a:";bg(0.5);for (i of range(1,9))  {;for (j of range(1,9)) {;fc((i+j)%2);rect(20*i,20*j, 20,20)}}",
      b:"//LOC:5"
    },
    colorCube: {    
      a: "function colorCube(n,b) {;bg(0);d = 200.0/n;m = n-1.0;for (r of range(n)) {;for (g of range(n)) {;fc(r/m,g/m,b/m);rect(r*d,g*d,d,d)}}}",
      b: "//LOC:8 function",
      c: {
        "colorCube(2,0)":0, 
        "colorCube(2,1)":0,
        "colorCube(3,0)":0,
        "colorCube(3,1)":0,
        "colorCube(3,2)":0
      }
    },
    korg: {    
      a: "function korg(n,w,c1,c2) {bg(0);sw(w);fill(c1);stroke(c2);q = 2*n+1;d = 200.0/q;for (i of range(n)) { ;rect(d+i*2*d,0,d,200);};for (j of range(n)) { ;rect(0,d+j*2*d,200,d);};for (i of range(n)) { ;for (j of range(n)) {;if ((i+j) % 2 == 1) {;rect(i*2*d,d+j*2*d,3*d,d);} else {;rect(d+i*2*d,j*2*d,d,3*d)}}}}", 
      b:"//LOC:17 function if else",
      c: {
        "korg(1,5,co(1,0,0),co(1,1,0))":0, 
        "korg(2,4,co(0.5),co(1))":0, 
        "korg(3,3,co(1,1,0),co(1,0,0))":0,
        "korg(4,2,co(1),co(0.5))":0, 
        "korg(5,1,co(1,0,0),co(1,1,0))":0, 
      }      
    },
    textA: {
      a:"fc(1,1,0);textSize(40);text('Javascript',100,100)", 
      b:"//LOC:3 textSize text"
    },
    textB: {
      a:"fc(1,1,0);textSize(40);textAlign(CENTER,CENTER);text('Javascript',100,100)", 
      b:"//LOC:4 textAlign"
    },
    textC: {
      a:"fc(1,1,0);textSize(40);textAlign(CENTER,CENTER);translate(100,100);rd(90);text('Javascript',0,0)",
      b:"//LOC:6 translate rd"
    },
    textD: {
      a:"fc(1,1,0);textSize(40);textAlign(CENTER,CENTER);translate(100,100);rd(180);text('Javascript',0,0)",
      b:"//LOC:6"
    },
    
    rotatedEllipse: {
      a:"fc(1,0,0);sc();translate(100,100);rd(45);ellipse(0,0, 80,40)", 
      b:"//LOC:5 translate rd"
    },
    rotatedRectA: {
      a:"fc(1,0,0);rect(60,100, 40,40);fc(0,1,0);rect(140,100, 40,40)",
      b:"//LOC:4"
    },
    rotatedRectB: {
      a:"push();fc(1,0,0);translate(60,100);rd(45);rect(0,0, 40,40);pop();push();fc(0,1,0);translate(140,100);rd(45);rect(0,0, 40,40);pop()", 
      b:"//LOC:10 push pop translate rd"
    },
    rotatedRectC: {
      a:";rectMode(CENTER);push();fc(1,0,0);translate(80,120);rd(45);rect(0,0, 40,40);pop();push();fc(0,1,0);translate(160,120);rd(45);rect(0,0, 40,40);pop()",
      b:"//LOC:11"
    },
    
    manyDices: {
      a:"function dots(x,y,dots) { for (dot of dots) { if (dot==1) point(x+8,y+8); if (dot==2) point(x+8,y+10); if (dot==3) point(x+8,y+12); if (dot==4) point(x+10,y+10); if (dot==5) point(x+12,y+8); if (dot==6) point(x+12,y+10); if (dot==7) point(x+12,y+12);}}" +
        "function dice(x,y,d) {if (d==1) dots(x,y,[4]);if (d==2) dots(x,y,[1,7]);if (d==3) dots(x,y,[1,4,7]);if (d==4) dots(x,y,[1,3,5,7]);if (d==5) dots(x,y,[1,3,4,5,7]);if (d==6) dots(x,y,[1,2,3,5,6,7]); }" +
        "function manyDices() {fc(0); for (i of range(10)) { for (j of range(10)) { dice(20*i,20*j,1+(i+j)%6) } } }", 
      b:"//LOC:34 function if [] % for",
      c:{"manyDices()":0} 
    },
    
    klocka: {
      a: "function visare(v,w,l,r,g,b) {push();rd(v-90);translate(l/2,0);fc(r,g,b);rect(0,0,l,w);pop()};" +
         "function klocka(h,m,s) {rectMode(CENTER);translate(100,100);urtavla();visare((h+m/60.0)*30, 7,60,1,0,0);visare((m+s/60.0)*6,5,80,0,1,0);visare(s*6,2,80,0,0,1)}" +
         "function urtavla() {fc(0);sc(1);circle(0,0,90);fc(1);for (i of range(60)) {if (i%5==0) {  circle(85,0,2)} else {  point(85,0)}rd(6)}};" +
         "function visare(v,w,l,r,g,b) {push();rd(v-90);translate(l/2,0);fc(r,g,b);rect(0,0,l,w);pop()};function klocka(h,m,s) {rectMode(CENTER);translate(100,100);urtavla();visare((h+m/60.0)*30,7,60,1,0,0);visare((m+s/60.0)*6,5,80,0,1,0);visare(s*6,2,80,0,0,1)}",
      b: "//LOC:37 function push pop translate rd rectMode if else",
      c: {
        "klocka(10,9,30)":0, 
        "klocka(11,30,15)":0
      } 
    },
    
    recursiveCircles: {
      a: "sc(1); function circles(x,y,r) {circle(x,y,r);if (r < 10) return;circles(x-r/2,y,r/2);circles(x+r/2,y,r/2)}",
      b: "//LOC:7 function if",
      c: {"circles(100,100,100)":0}
    },
    
    hypnoticA : {
      a: "function hypnoticA() {bg(0.5, 0, 0);noStroke();fc(1);for (i of range(100)) {x = 100 + cos(i) * i;y = 100 + sin(i) * i;circle(x, y, 5)}    }",
      b: "//LOC:6 function cos sin",
      c: {"hypnoticA()":0}
    },
    hypnoticB : {
      a: "function hypnoticB(t) {bg(0.5, 0, 0);noStroke();fc(1);for (i of range(100)) {x = 100 + cos(i) * i;y = 100 + sin(i) * i;speed = i/10.0;r = map(sin(t*speed), -1, 1, 2, 5);circle(x, y, r)}}",
      b: "//LOC:7 map",
      c: {
        "hypnoticB(1)":0, 
        "hypnoticB(5)":0,
      }
    },
    
    square : {
      a: "function square(x,y,size) { rect(x,y,size,size) }",
      b: "//LOC:2 function",
      c: {
        "square(100,90,50)":0, 
        "square(100,100,60)":0,
      }
    },

    gravity : {
      a: "fc(1); for (i of range(15)) { x=5+10*i; y=5+lerp(0,lerp(0,1,i),i); circle(x,y,5);}",
      b: "//LOC:5 lerp lerp",
    },
  },
    
  Assert1: {
    Operator1: { a:"function f(x) { return x }", b:"// + - * / %\n", c: { "f(2)":2, "f(3)":3, }}, 
    Operator2: { a:"function f(x) { return -x }", b:"// + - * / %\n", c: { "f(-4)":4, "f(3)":-3, }}, 
    Operator3: { a:"function f(x) { return x+1 }", b:"// + - * / %\n", c: { "f(7)":8, "f(8)":9, }}, 
    Operator4: { a:"function f(x) { return x }", b:"// + - * / %\n", c: { "f(2)":2, "f(3)":3, }}, 
    Operator5: { a:"function f(x) { return 2*x }", b:"// + - * / %\n", c: { "f(5)":10, "f(6)":12, }}, 
    Operator6: { a:"function f(x) { return x*x }", b:"// + - * / %\n", c: { "f(5)":25, "f(6)":36, }}, 
    Operator7: { a:"function f(x) { return x-2 }", b:"// + - * / %\n" , c: { "f(7)":5, "f(17)":15, }}, 
    Operator8: { a:"function f(x) { return x/2 }", b:"// + - * / %\n", c: { "f(8)":4, "f(6)":3, }}, 
    Operator9: { a:"function f(x) { return x%2 }", b:"// + - * / %\n", c: { "f(7)":1, "f(8)":0, "f(10)":0, "f(11)":1,}}, 
    Operator10: { a:"function f(a,b) { return a*b }", b:"// + - * / %\n", c: { "f(3,4)":12, "f(4,6)":24, }}, 
    Operator11: { a:"function f(a,b) { return a+b }", b:"// + - * / %\n", c: { "f(3,4)":7, "f(4,6)":10, }}, 
    Operator12: { a:"function f(a,b) { return b-a }", b:"// + - * / %\n", c: { "f(3,4)":1, "f(4,6)":2, }}, 
    Operator13: { a:"function f(a,b) { return a/b }", b:"// + - * / %\n", c: { "f(8,4)":2, "f(12,3)":4, }}, 
    Operator14: { a:"function f(a,b) { return a%b }", b:"// + - * / %\n", c: { "f(8,4)":0, "f(9,4)":1, "f(10,4)":2, "f(11,4)":3, }}, 
  }
}

