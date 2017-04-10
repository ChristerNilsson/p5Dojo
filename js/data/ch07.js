// Generated by CoffeeScript 1.11.1
var ID140, ID141, ID142, ID143, ID144, ID145, ID146, ID147, ID148;

ID140 = {
  b: "# LOC:6 fc rd # text textAlign textSize translate\n",
  a: "fc 1,1,0\ntextSize 32\ntextAlign CENTER,CENTER\ntranslate 100,100\nrd 90\ntext 'Coffeescript',0,0"
};

ID141 = {
  b: "# LOC:6 fc rd # text textAlign textSize translate\n",
  a: "fc 1,1,0\ntextSize 32\ntextAlign CENTER,CENTER\ntranslate 100,100\nrd 180\ntext 'Coffeescript',0,0"
};

ID142 = {
  b: "# LOC:5 rd # ellipse translate\n",
  a: "fc 1,0,0\nsc()\ntranslate 100,100\nrd 45\nellipse 0,0, 80,40"
};

ID143 = {
  b: "# LOC:4 fc # rect\n",
  a: "fc 1,0,0\nrect 60,100, 40,40\nfc 0,1,0\nrect 140,100, 40,40"
};

ID144 = {
  b: "# LOC:12 fc rd # rect translate push pop\n",
  a: "push()\nfc 1,0,0\ntranslate 60,100\nrd 45\nrect 0,0, 40,40\npop()\npush()\nfc 0,1,0\ntranslate 140,100\nrd 45\nrect 0,0, 40,40\npop()"
};

ID145 = {
  b: "# LOC:13 fc rd # rect translate push pop\n",
  a: "rectMode CENTER\npush()\nfc 1,0,0\ntranslate 80,120\nrd 45\nrect 0,0, 40,40\npop()\npush()\nfc 0,1,0\ntranslate 160,120\nrd 45\nrect 0,0, 40,40\npop()"
};

ID146 = {
  b: "# LOC:10 fc sc circle range rd # rect rectMode for in lerp translate\n",
  a: "rectMode CENTER\nsc 1\ntranslate 100,100\nfor i in range 18,-1,-1\n  r = 1.0*i/18\n  fc r,0,0\n  w = 70+5*i\n  h = 70+5*i\n  rect 0,0, w,h\n  rd 5"
};

ID147 = {
  b: "# LOC:17 bg fc sc range rd # rect rectMode for in lerp translate push pop\n",
  a: "bg 1\nrectMode CENTER\nsc()\nfor i in range 10\n  for j in range 10\n    push()\n		x = lerp 10,30,i\n		y = lerp 10,30,j\n    translate x,y\n    rd lerp 0,10,i-j\n    r = lerp 0.1,0.2,i\n    g = lerp 0.1,0.2,j\n    fc r,g,0\n		w = lerp 5,6,i\n		h = lerp 5,6,j\n    rect 0,0, w,h\n    pop()"
};

ID148 = {
  b: "# LOC:17 bg sw fc sc range rd # for in if then else == % / [] \"\" PI\n#        length text textAlign arc strokeCap translate push pop\n\nnumbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]",
  a: "numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]\nbg 0.5\ntranslate 100,100\nd = PI/numbers.length\nsw 20\nstrokeCap SQUARE\ntextAlign CENTER,CENTER\nfor number,i in numbers\n	fc()\n	if i==0 then sc 0,1,0 else sc i%2,0,0\n	arc 0,0,180,180,-PI/2-d,-PI/2+d\n	translate 0,-90\n	sc()\n	fc 1\n	text number,0,0\n	translate 0,90\n	rd 360 / numbers.length"
};
