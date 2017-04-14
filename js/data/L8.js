// Generated by CoffeeScript 1.11.1
var ID160, ID161, ID162, ID163, ID164, ID165;

ID160 = {
  b: "# LOC:8 -> range # for in if then point [] * + % & << ->\n",
  a: "dice = (x,y,d) ->\n	for bits,i in [21,56,32,62,62,32,56]\n		dx = 4 * [0,-1,-1,-1,1,1,1][i]\n		dy = 4 * [0,-1,0,1,-1,0,1][i]\n		if d&bits then point 10+x+dx,10+y+dy\nfor i in range 10\n	for j in range 10\n		dice 20*i, 20*j, 1 << (i+j) % 6"
};

ID161 = {
  b: "# LOC:16 sc bg sw range # for in line class constructor new @\n\nclass Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n\ngirlang = (x,y,n,width,dx,dy) ->\n\ngirlang 0,0,9,5,20,20",
  a: "class Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n		sc @r,@g,@b\n		line @x,@y,@x+dx,@y+dy\n		[@x,@y] = [@x+dx,@y+dy]\n\ngirlang = (x,y,n,width,dx,dy) ->\n	a = new Cartesius 1,0,0, x+dx/2,0\n	b = new Cartesius 1,1,0, x,y+dy/2\n\n	bg 0\n	sw width\n\n	for i in range n\n		a.go 0,dy\n		b.go dx,0\n		b.go 0,dy\n		a.go dx,0\n\ngirlang 0,0,9,5,20,20"
};

ID162 = {
  b: "# LOC:19 sc bg sw range # for in line class constructor new @\n\nclass Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n\nbraid = (n,dx,dy,width) ->	\n\nbraid 5,18,18,6",
  a: "class Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n		sc @r,@g,@b\n		line @x,@y,@x+dx,@y+dy\n		[@x,@y] = [@x+dx,@y+dy]\n\nbraid = (n,dx,dy,width) ->		\n\n	a = new Cartesius 1,0,0, 100-dx/2,dy/3\n	b = new Cartesius 1,1,0, 100+dx/2,2*dy/3\n	c = new Cartesius 0,1,0, 100-dx/2,dy\n\n	bg 0\n	sw width\n\n	for i in range n\n		a.go dx,dy\n		b.go -dx,dy\n		c.go dx,dy\n\n		a.go -dx,dy\n		b.go dx,dy\n		c.go -dx,dy\n\nbraid 5,18,18,6",
  e: {
    braid: "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"
  }
};

ID163 = {
  b: "# LOC:24 sc bg fc sw # arc strokeCap class constructor new @\n\nclass Ring\n	constructor : (@x,@y,@r,@g,@b) ->\n	draw : (start=3,stopp=3,hour=PI/6) ->\n\nolympic = (x=100,y=100,radius=50,d=60,w=10) ->\n\nolympic()",
  a: "class Ring\n	constructor : (@x,@y,@radius, @r,@g,@b) ->\n	draw : (start=3,stopp=3,hour=PI/6) ->\n		sc @r,@g,@b\n		arc @x,@y,@radius,@radius,(start-3)*hour,(stopp-3)*hour\n		\nolympic = (x=100,y=100,radius=50,d=60,w=10) ->\n	r1 = new Ring x-d,  y,     radius, 0,0,1\n	r2 = new Ring x,    y,     radius, 0,0,0\n	r3 = new Ring x+d,  y,     radius, 1,0,0\n	r4 = new Ring x-d/2,y+d/3, radius, 1,1,0\n	r5 = new Ring x+d/2,y+d/3, radius, 0,1,0\n\n	strokeCap SQUARE\n	bg 0.5\n	fc()\n	sw w\n\n	r1.draw()\n	r3.draw()\n	r4.draw()\n	r5.draw()\n	r1.draw 2,4\n	r2.draw()\n	r4.draw 12,2\n	r5.draw 8,10\n	r3.draw 6,8\n\nolympic()"
};

ID164 = {
  b: "# LOC:17 fc sc range # Array fill length int random text textAlign for in ++ * / + - rect []\n# OBS: På grund av random blir bitmapparna inte likadana\n\nh = 50\ncounts = Array(4).fill 150\nfor count,i in counts\n	y = h*i\n	rect 0,y,count,h\n	text y,0,y",
  a: "counts = Array(6).fill 0\ndice = -> int 6 * random() \nfor i in range 1000\n	counts[dice()]++\nh = int 200/6\nsc()\nfor count,i in counts\n	y = h*i\n	fc 1,1,0,0.5\n	sc 1,1,0\n	rect 0,y,count,h-3\n	fc 1,1,0\n	sc()\n	textAlign LEFT,CENTER\n	text i+1, 5,y+h/2\n	textAlign RIGHT,CENTER\n	text count, count-5,y+h/2"
};

ID165 = {
  b: "# LOC:22 bg fc sc range # Array fill length int random text textAlign if else for in ++ * / + - < rect []\n# OBS: På grund av random blir bitmapparna inte likadana",
  a: "counts = Array(11).fill 0\ndice = -> int 6 * random() \ntextAlign CENTER,CENTER\nfor i in range 1000\n	counts[dice() + dice()]++\nh = int 200/11\nbg 0\nfor count,i in counts\n	y = h*i\n	fc 1,1,0,0.5\n	sc 1,1,0\n	rect 0,y,count,h-3\n	fc 1,1,0\n	sc()\n	textAlign LEFT,CENTER\n	text i+2, 5,y+h/2\n	if count < 100\n		textAlign LEFT,CENTER\n		text count, count+5,y+h/2\n	else\n		textAlign RIGHT,CENTER\n		text count, count-5,y+h/2",
  e: {
    Animering: "https://www.openprocessing.org/sketch/124236"
  }
};
