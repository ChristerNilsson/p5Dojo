'use strict';

// Generated by CoffeeScript 2.0.3
var ID_Magnifier, ID_ManyDices, ID_Map, ID_MidPoints, ID_MineSweeper, ID_Moire, ID_MultiTimer;

ID_Magnifier = {
  v: '2017-09-16',
  k: 'for range if while [] operators text rect circle class',
  l: 69,
  b: "class Magnifier extends Application\n	reset : ->\n		super\n	draw  : ->\n	up    : ->\n	down  : ->\napp = new Magnifier",
  a: "class Magnifier extends Application\n	reset : ->\n		super\n		@n=2\n	draw  : ->\n		bg 0\n		n = @n\n		if n==2\n			fc 1\n			rect 0,0,200,200\n		if n>=3\n			w = int n/3\n			for i in range 200/n\n				sc 1,0,0\n				fc 1,0,0\n				rect 0*w+n*i,0,w,200\n				sc 0,1,0\n				fc 0,1,0\n				rect 1*w+n*i,0,w,200\n				sc 0,0,1\n				fc 0,0,1\n				rect 2*w+n*i,0,w,200\n	up    : -> @n++\n	down  : -> @n--\napp = new Magnifier \"a\"",
  c: {
    app: "reset()|up()|down()"
  }
};

ID_ManyDices = {
  v: '2017-10-22',
  k: '-> range for if circle sc fc "" split [] operators',
  l: 14,
  b: "# b   e\n# c a f\n# d   g\ndice = (i,j,side) ->",
  a: "# b   e\n# c a f\n# d   g\ndice = (i,j,side) ->\n	x = lerp 10,30, i\n	y = lerp 10,30, j\n	dots = 'a de dae bedg abedg bcdefg'.split(' ')[side]\n	for dot,k in 'abcdefg'\n		if dot in dots \n			dx = [0,-1,-1,-1, 1,1,1][k]\n			dy = [0,-1, 0, 1,-1,0,1][k]\n			circle x + 4*dx, y + 4*dy,1\n\nsc()\nfc 1\nfor i in range 10\n	for j in range 10\n		dice i, j, (i+j) % 6"
};

ID_Map = {
  v: '2017-05-18',
  k: '-> bg fc sc if text map operators',
  l: 1,
  b: "map = (x,x0,x1,y0,y1) -> 0\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 50,  map 10,10,20,50,150\ntest 100, map 15,10,20,50,150\ntest 150, map 20,10,20,50,150\ntest 250, map 30,10,20,50,150\ntest -50, map 0,10,20,50,150\ntest 5,   map 10,10,20,5,15\ntest 10,  map 15,10,20,5,15\ntest 15,  map 20,10,20,5,15\ntest 25,  map 30,10,20,5,15\ntest -5,  map 0,10,20,5,15\n",
  a: "map = (x,x0,x1,y0,y1) -> y0 + (x-x0)*(y1-y0)/(x1-x0)\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 50,  map 10,10,20,50,150\ntest 100, map 15,10,20,50,150\ntest 150, map 20,10,20,50,150\ntest 250, map 30,10,20,50,150\ntest -50, map 0,10,20,50,150\ntest 5,   map 10,10,20,5,15\ntest 10,  map 15,10,20,5,15\ntest 15,  map 20,10,20,5,15\ntest 25,  map 30,10,20,5,15\ntest -5,  map 0,10,20,5,15",
  e: {
    Likformighet: 'https://www.matteboken.se/lektioner/matte-2/geometri/likformighet-och-kongruens',
    Ekvationssystem: 'https://www.matteboken.se/lektioner/matte-2/linjara-funktioner-och-ekvationssystem/linjara-ekvationssystem-grafisk-losning'
  }
};

ID_MidPoints = {
  v: '2017-04-29',
  k: 'sc sw point',
  l: 11,
  b: "",
  a: "sw 10\nsc 1,0,0\npoint 100,100\nsc 0,1,0\npoint 100,0\nsc 1,1,0\npoint 0,100\nsc 0\npoint 200,100\nsc 1\npoint 100,200",
  e: {
    Koordinatsystem: "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"
  }
};

ID_MineSweeper = {
  v: '2017-05-19',
  k: 'for range if while [] operators text rect circle class',
  l: 69,
  b: "class MineSweeper extends Application\n	reset : (w,totalBombs) ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\napp = new MineSweeper",
  a: "\nclass MineSweeper extends Application\n	reset : (w,totalBombs) ->\n		super\n		@seed = 0\n		@w = w\n		@n = int 200 / @w\n		@newGame totalBombs\n	newGame : (totalBombs) ->\n		@state = 0\n		@revealed = []\n		@bombs = (@randint @n*@n for i in range totalBombs)\n	neighborCount : (i0,j0) ->\n		total = 0\n		for di in [-1,0,1]\n			for dj in [-1,0,1]\n				[i,j] = [i0 + di,j0 + dj]\n				if -1 < i < @n and -1 < j < @n\n					if @n*j+i in @bombs then total++\n		total\n	draw : ->\n		textAlign CENTER,CENTER\n		textSize @w\n		rectMode CENTER\n		for i in range @n\n			for j in range @n\n				index = @n * j + i\n				[x,y] = [@w*i+@w/2, @w*j+@w/2]\n				sc 0\n				fc 0.5\n				rect x, y, @w, @w\n				if @state==1 or index in @revealed\n					fc 0\n					if index in @bombs then circle x, y, @w * 0.25\n					else\n						fc 0.75\n						rect x, y, @w, @w\n						nc = @neighborCount i,j\n						sc()\n						fill cc nc\n						if nc > 0 then text nc, x+1, y+1\n	mousePressed : (mx,my) ->\n		if @state==1 then @newGame @bombs.length\n		else\n			i = int mx/@w\n			j = int my/@w\n			index = @n*j+i\n			if index in @bombs then	@state = 1 else	@reveal i,j\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	reveal : (i,j) ->\n		@revealed.push @n*j+i\n		if @neighborCount(i,j) == 0 then @floodFill i,j\n	floodFill : (i0,j0) ->\n		for di in [-1,0,1]\n			for dj in [-1,0,1]\n				i = i0 + di\n				j = j0 + dj\n				if -1 < i < @n and -1 < j < @n\n					index = @n*j+i\n					if not (index in @bombs or index in @revealed) then @reveal i,j\n\napp = new MineSweeper \"a\"",
  c: {
    app: "reset 20,10|reset 20,20|reset 20,30|reset 10,40"
  },
  e: {
    CodingTrain: "https://www.youtube.com/watch?v=LFU5ZlrR21E",
    Wikipedia: "https://en.wikipedia.org/wiki/Minesweeper_(video_game)"
  }
};

ID_Moire = {
  v: '2017-04-29',
  k: 'bg range operators for line map class',
  l: 11,
  b: "class Moire extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Moire",
  a: "class Moire extends Application\n	reset : ->\n		super\n		[@x,@y] = [100,100]\n	draw : ->\n		bg 0\n		for i in range 40\n			for j in range 4\n				[x,y] = [0,i*5,200,200-i*5,0][j..j+1]\n				line @x,@y,x,y\n	mousePressed : (mx,my) -> [@x,@y] = [mx,my]\n\napp = new Moire \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Moir%C3%A9_pattern"
  }
};

ID_MultiTimer = {
  v: '2017-04-29',
  k: 'bg sc fc for [] operators text nf if int round millis class',
  l: 30,
  b: "# OBS! Tiderna kan skilja med flera millisekunder. Sorry!\n\nclass MultiTimer extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new MultiTimer",
  a: "class MultiTimer extends Application\n	reset : ->\n		super\n		@start = int millis()\n		@buttons = [[0,0,\"A\",0],[100,0,\"B\",0],[0,50,\"C\",0],[100,50,\"D\",0],[0,100,\"E\",0],[100,100,\"F\",0],[0,150,\"G\",0],[100,150,\"H\",0]]\n		@active = -1\n	draw : ->\n		bg 0\n		textFont \"monospace\"\n		textSize 24\n		sc()\n		for [x,y,txt,time],i in @buttons\n			if @active==i then fc 1,0,0 else fc 1,1,0\n			textAlign LEFT,TOP\n			text txt, x+10,y\n			textAlign RIGHT,TOP\n			secs = round time/1000\n			text nf(int(secs / 60),2) + ':' + nf(secs % 60,2), x+100,y\n	mousePressed : (mx,my) ->\n		for [x,y,txt,time],i in @buttons\n			if x <= mx <= x+100 and y <= my <= y+50 then active = i\n		if active == @active\n			@buttons[@active][3] += int millis() - @start\n			@active = -1\n		else if @active == -1\n			@active = active\n		else # byte\n			@buttons[@active][3] += int millis() - @start\n			@active = active\n		@start = int millis()\n\napp = new MultiTimer \"a\"",
  c: {
    app: "reset()"
  }
};
//# sourceMappingURL=M.js.map
