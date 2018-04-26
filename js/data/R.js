'use strict';

// Generated by CoffeeScript 2.0.3
var ID_RandomDice, ID_RecursiveCircle, ID_Reversi, ID_Rotate, ID_RotatedEllipse, ID_RotatedRectA, ID_RotatedRectB, ID_RotatedRectC, ID_Roulette, ID_RubikCube, ID_RubikSquare, ID_RushHour, ID_rect, ID_rect_2, ID_rect_3, ID_rect_4, ID_rects;

ID_RandomDice = {
  v: '2017-05-21',
  k: 'bg sc circle operators [] int for class',
  l: 18,
  h: 1,
  b: "class RandomDice extends Application\n	reset : ->\n		super\n		@seed = 0\n	draw : ->\n	mousePressed : (mx,my) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\napp = new RandomDice",
  a: "class RandomDice extends Application\n	reset : ->\n		super\n		@seed = 0\n		@throw()\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	throw : -> @value = 1 + @randint 6\n	mousePressed : (mx,my) -> @throw()\n	draw : ->\n		bg 1\n		sc 1\n		coords = []\n		if @value in [1,3,5] then coords.push [100,100]\n		if @value in [4,5,6] then coords = coords.concat [[150,150],[ 50,50]]\n		if @value in [2,3,4,5,6] then coords = coords.concat [[ 150,50],[ 50,150]]\n		if @value in [6] then coords = coords.concat [[ 150,100],[ 50,100]]\n		circle x,y,20 for [x,y] in coords\napp = new RandomDice \"a\"\n",
  c: {
    app: "reset()"
  }
};

ID_rect = {
  v: '2018-04-27',
  k: 'rect',
  l: 7,
  h: 0,
  b: "# Rita en rektangel\n\n# Draw a rectangle\n\n# rectMode CORNER\n#    x1,y1, w, h\nrect 80,40,40,20     \n\nrectMode CENTER\n#      x, y, w, h\nrect 100,90,40,20    \n\nrectMode CORNERS\n#    x1, y1, x2, y2\nrect 80,120,120,140  \n\nrectMode RADIUS\n#      x,  y,w/2,h/2 \nrect 100,170, 20, 10",
  a: "# Rita en rektangel\n\n# Draw a rectangle\n\n# rectMode CORNER\n#    x1,y1, w, h\nrect 80,40,40,20     \n\nrectMode CENTER\n#      x, y, w, h\nrect 100,90,40,20    \n\nrectMode CORNERS\n#    x1, y1, x2, y2\nrect 80,120,120,140  \n\nrectMode RADIUS\n#      x,  y,w/2,h/2 \nrect 100,170, 20, 10"
};

ID_rects = {
  v: '2018-04-26',
  k: 'fc rect sc sw',
  l: 6,
  h: 1,
  b: "# rect x,y,w,h",
  a: "# rect x,y,w,h\n\nsw 10\nsc 0,0,0,0.5\n\nfc 0,1,0\nrect 20,20,100,120\n\nfc 1,1,0,0.5\nrect 60,80,120,100"
};

ID_rect_2 = {
  v: '2017-10-31',
  k: 'fc rect sc',
  l: 4,
  h: 2,
  b: "",
  a: "fc 1,0,0\nsc()\nrect 85,70, 70,10\nrect 115,40, 10,100"
};

ID_rect_3 = {
  v: '2017-04-29',
  k: 'fc sc sw rect',
  l: 11,
  h: 2,
  b: "",
  a: "fc 0,1,1\nsc()\nrect 60,60, 80,20\nrect 60,120, 80,20\nrect 60,60, 20,80\nrect 120,60, 20,80\nfc()\nsc 1,0,0\nsw 3\nrect 60,60, 80,80\nrect 80,80, 40,40"
};

ID_rect_4 = {
  v: '2018-04-23',
  k: 'bg sc fc rect',
  l: 7,
  h: 3,
  b: "",
  a: "bg 0.5\nsc()\nfc 0,0,1\nrect 20,50,160,100\nfc 1,1,0\nrect 70,50,20,100\nrect 20,90,160,20",
  e: {
    "Wikipedia": "https://sv.wikipedia.org/wiki/Sveriges_flagga#/media/File:Sweden_flag_construction_sheet.png"
  }
};

ID_RecursiveCircle = {
  v: '2017-04-29',
  k: 'sc circle if return operators class',
  l: 10,
  b: "class RecursiveCircle extends Application\n	reset   : ->\n		super\n	draw    : ->\n	circles : (x,y,r,level) ->\n	mousePressed : (mx,my) ->\napp = new RecursiveCircle",
  a: "\nclass RecursiveCircle extends Application\n	reset : ->\n		super\n		@n = 0\n	draw : -> @circles 100,100,100,@n\n	circles : (x,y,r,level) ->\n		circle x,y,r\n		if level <= 0 then return\n		@circles x-r/2, y, r/2, level-1\n		@circles x+r/2, y, r/2, level-1\n	mousePressed : (mx,my) -> @n = constrain @n + (if my < 100 then 1 else -1),0,10\n\napp = new RecursiveCircle \"a\"",
  c: {
    app: "reset()"
  }
};

// ID_RedRect =
// 	v:'2017-04-29'
// 	k:'fc rect'
// 	l:2
// 	b:""
// 	a:"""
// fc 1,0,0
// rect 80,70, 40,100
// """
ID_Reversi = {
  v: '2017-05-02',
  k: 'sc fc bg range [] rect circle while if operators class',
  l: 49,
  b: "class Reversi extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new Reversi",
  a: "class Reversi extends Application\n	reset : ->\n		super\n		@newGame()\n	newGame : ->\n		@board = []\n		@drag = 0\n		for j in range 8\n			@board.push []\n			for i in range 8\n				@board[j].push 0\n		@board[3][3]=2 # White\n		@board[3][4]=1 # Black\n		@board[4][3]=1\n		@board[4][4]=2\n	draw : ->\n		sc 0\n		for i in range 8\n			for j in range 8\n				sq = @board[j][i]\n				fc 0,1,0\n				rect 20+20*i, 20+20*j,20,20\n				if sq in [1,2]\n					fc sq-1\n					circle 30.5+20*i, 30.5+20*j,10-2\n	move : (i,j) ->\n		res = []\n		mycol = 1 + @drag % 2\n		other = [0,2,1][mycol]\n		for di in [-1,0,1]\n			for dj in [-1,0,1]\n				if not (di==0 and dj==0)\n					i1=i+di\n					j1=j+dj\n					temp = []\n					while 0 <= i1 < 8 and 0 <= j1 < 8 and @board[j1][i1] == other\n						temp.push [i1,j1]\n						i1 = i1+di\n						j1 = j1+dj\n					if 0 <= i1 < 8 and 0 <= j1 < 8 and @board[j1][i1] == mycol\n						if temp.length > 0 then	res = res.concat temp\n		if res.length > 0\n			@board[j][i] = mycol\n			for [i,j] in res then	@board[j][i] = mycol\n			@drag++\n	mousePressed : (mx,my) ->\n		i = int mx / 20 - 1\n		j = int my / 20 - 1\n		if 0 <= i < 8 and 0 <= j < 8 and @board[j][i] == 0 then @move i,j\n\napp = new Reversi \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Reversi: "https://en.wikipedia.org/wiki/Reversi"
  }
};

ID_Rotate = {
  v: '2018-04-26',
  k: 'angleMode rotate translate rect fc',
  l: 8,
  h: 0,
  b: "# rotate angle\n\nangleMode DEGREES\nfc()\nrect 0,0,40,20\ntranslate 100,100\nrect 0,0,40,20\nrotate 45\nfc 1,1,1,0.5\nrect 0,0,40,20",
  a: "# rotate angle\n\nangleMode DEGREES\nfc()\nrect 0,0,40,20\ntranslate 100,100\nrect 0,0,40,20\nrotate 45\nfc 1,1,1,0.5\nrect 0,0,40,20"
};

ID_RotatedEllipse = {
  v: '2017-09-30',
  k: 'angleMode rotate ellipse translate',
  l: 6,
  h: 1,
  b: "",
  a: "fc 1,0,0\nsc()\ntranslate 100,100\nangleMode DEGREES\nrotate 45\nellipse 0,0, 80,40"
};

ID_RotatedRectA = {
  v: '2017-04-29',
  k: 'fc rect',
  l: 4,
  h: 1,
  b: "",
  a: "fc 1,0,0\nrect 60,100, 40,40\nfc 0,1,0\nrect 140,100, 40,40"
};

ID_RotatedRectB = {
  v: '2017-09-30',
  k: 'fc angleMode rotate rect translate push pop',
  l: 12,
  h: 1,
  b: "",
  a: "push()\nfc 1,0,0\ntranslate 60,100\nangleMode DEGREES\nrotate 45\nrect 0,0, 40,40\npop()\npush()\nfc 0,1,0\ntranslate 140,100\nrotate 45\nrect 0,0, 40,40\npop()"
};

ID_RotatedRectC = {
  v: '2017-09-30',
  k: 'fc angleMode rotate rect translate push pop',
  l: 13,
  h: 1,
  b: "",
  a: "rectMode CENTER\npush()\nfc 1,0,0\ntranslate 80,120\nangleMode DEGREES\nrotate 45\nrect 0,0, 40,40\npop()\npush()\nfc 0,1,0\ntranslate 160,120\nrotate 45\nrect 0,0, 40,40\npop()"
};

ID_Roulette = {
  v: '2017-09-30',
  k: 'bg sw fc sc range angleMode rotate for if operators [] "" PI text arc strokeCap translate',
  l: 15,
  h: 3,
  b: "numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]",
  a: "numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]\nbg 0.5\ntranslate 100,100\nd = 180/numbers.length\nsw 20\nstrokeCap SQUARE\ntextAlign CENTER,CENTER\nangleMode DEGREES\nfor number,i in numbers\n	fc()\n	if i==0 then sc 0,1,0 else sc i%2,0,0\n	arc 0,0,180,180,-90-d,-90+d\n	sc()\n	fc 1\n	text number,0,-90\n	rotate 360 / numbers.length",
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Roulette"
  }
};

ID_RubikCube = {
  v: '2017-04-29',
  k: 'bg fc sc range [] if constrain for int quad text dist operators class',
  l: 121,
  h: 2,
  b: "class RubikCube extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\n	toggleNumbers : ->\napp = new RubikCube",
  a: "class RubikCube extends Application\n	newGame : ->\n		@level = @level + if @level==@history.length then 1 else -1\n		@level = constrain @level,0,100\n		@history = []\n		@board = []\n		@memory = -1\n		@board.push i for i in range 54\n		for i in range @level\n			@op @randint(6), 2*@randint(2)-1\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	undo : ->\n		if @history.length==0 then return\n		@memory = -1\n		[k,d] = @history.pop()\n		@op k,-d\n	turn : (a,b) -> # a,b in 0..54\n		if int(a/9) != int(b/9) then return\n		d = (a%9 - b%9)/2\n		if d in [-3,3] then d = -d/3\n		if d not in [-1,1] then return\n		k = int a/9\n		@op k,d\n		@history.push [k,d]\n	op : (k,d) -> # 0..5, [-1,1]\n		tiles = [\n			[0,1,42,41,40,   2,3,9,16,15,    4,5,20,19,18,   6,7,31,30,29]\n			[9,10,40,39,38,  11,12,49,48,47, 13,14,22,21,20, 15,16,4,3,2]\n			[18,19,6,5,4,    20,21,15,14,13, 22,23,47,46,45, 24,25,33,32,31]\n			[27,28,36,43,42, 29,30,0,7,6,    31,32,18,25,24, 33,34,45,52,51]\n			[36,37,51,50,49, 38,39,11,10,9,  40,41,2,1,0,    42,43,29,28,27]\n			[45,46,24,23,22, 47,48,13,12,11, 49,50,38,37,36, 51,52,27,34,33]]\n		arr = tiles[k]\n		carr = (@board[i] for i in arr)\n		limit = if d==1 then 5 else 15\n		carr = carr[limit..20].concat carr[0..limit]\n		@board[arr[i]] = carr[i] for i in range 20\n	reset : ->\n		super\n		@board = []\n		@memory = -1\n		@level = -1\n		@history = []\n		@buttons = [[40,140,@level], [160,140,\"new\"]]\n		@showNumbers = false\n		@seed = 0\n		@newGame()\n	colorize : (index,board) ->\n		k = int board[index] / 9\n		[r,g,b] = [[1,1,1],[0,0,1],[1,0,0],[0,1,0],[0.97, 0.57, 0],[1,1,0]][k]\n		fc r,g,b\n	textColorize : (index,board) -> fc [0,1,1,0,0,0][int board[index] / 9]\n	rita : (x,y,index,tilt,self) ->\n		a = 16\n		b = 9\n		self.colorize index,self.board\n		sc 0\n		if tilt == 0 then quad x-a,y, x,y-b, x+a,y, x,y+b\n		if tilt == 1 then quad x+a/2,y-b/2, x-a/2,y-3*b/2, x-a/2,y+b/2, x+a/2,y+3*b/2\n		if tilt == 2 then quad x-a/2,y-b/2, x+a/2,y-3*b/2, x+a/2,y+b/2, x-a/2,y+3*b/2\n		self.textColorize index,self.board\n		sc()\n		if self.showNumbers then text self.board[index],x,y\n		if self.memory? and index == self.memory then circle x,y,4\n		false\n	sense : (x,y,index,tilt,self) -> dist(x,y,mouseX,mouseY) < 9\n	draw : ->\n		bg 0\n		textSize 12\n		textAlign CENTER,CENTER\n		@traverse @rita\n		fc 1,1,0\n		textSize 20\n		@buttons[0][2] = @level - @history.length\n		text txt,x,y for [x,y,txt] in @buttons\n	traverse : (f) ->\n		a = 16\n		b = 9\n		y0 = 60\n		for index in range 54\n			side = int index / 9\n			if side==0 # vit\n				i = [-1,-1,-1,0,1,1,1,0,0][index % 9]\n				j = [0,1,2,2,2,1,0,0,1][index % 9]\n				if f 100+a*(i+j-1),y0+b*(i-j+1), index, 0,@ then return index\n			if side==1 # blå\n				i = [-1,-1,-1,0,1,1,1,0,0][index % 9]\n				j = [0,1,2,2,2,1,0,0,1][index % 9]\n				if f 100+a*(i+4.5),y0+b*(2*j+i-3.5), index, 1,@ then return index\n			if side==2 # röd\n				i = [-1,0,1,1,1,0,-1,-1,0][index % 9]\n				j = [0,0,0,1,2,2,2,1,1][index % 9]\n				if f 100+a*(i+1.5),y0+b*(2*j-i+2.5), index, 2,@ then return index\n			if side==3 # grön\n				i = [-1,-1,-1,0,1,1,1,0,0][index % 9]\n				j = [2,1,0,0,0,1,2,2,1][index % 9]\n				if f 100+a*(i-1.5),y0+b*(2*j+i+2.5), index, 1,@ then return index\n			if side==4 # orange\n				i = [-1, 0, 1, 1, 1, 0,-1,-1, 0][index % 9]\n				j = [ 2, 2, 2, 1, 0, 0, 0, 1, 1][index % 9]\n				if f 100+a*(i-4.5),y0+b*(2*j-i-3.5), index, 2,@ then return index\n			if side==5 # gul\n				i = [ 1, 1, 1, 0,-1,-1,-1, 0, 0][index % 9]\n				j = [ 0, 1, 2, 2, 2, 1, 0, 0, 1][index % 9]\n				if f 100+a*(i+j-1),y0+b*(i-j+13), index, 0,@ then return index\n		-1\n	mousePressed : (mx,my) ->\n		for [x,y,txt],i in @buttons\n			if dist(mx,my,x,y) < 10\n				if i==0 then return @undo()\n				if i==1 then return @newGame()\n		if @memory == -1\n			@memory = @traverse @sense\n			if @memory != -1\n				if @memory%9==8 then @memory = -1\n		else\n			index = @traverse @sense\n			if index != -1 and index%9 != 8 then @turn @memory,index\n			@memory = -1\n	toggleNumbers : ->\n		@showNumbers = not @showNumbers\n\napp = new RubikCube \"a\"\n\n",
  c: {
    app: "reset()|toggleNumbers()"
  },
  e: {
    "RubikCube": "https://sv.wikipedia.org/wiki/Rubiks_kub"
  }
};

ID_RubikSquare = {
  v: '2017-04-29',
  k: 'bg fc sc circle [] int .. operators if rectMode rect "" parseInt _.isEqual text while constrain class',
  l: 85,
  h: 1,
  b: "# OBS: Du bör använda variabeln rubikSquareData.\n\nclass RubikSquare extends Application\n	reset : ->\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new RubikSquare",
  a: "class RubikSquare extends Application\n	reset : ->\n		super\n		@BUTTONS = [[4,3,3,3],[10,3,3,3],[16,3,3,3], [4,9,3,3],[10,9,3,3],[16,9,3,3], [4,15,3,3],[10,15,3,3],[16,15,3,3], [4,19,3,1],[10,19,3,1],[16,19,3,1]]\n		@seed = 0\n		@level = 1\n		@history = []\n		@memory = -1\n		@createGame()\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		if @level >= @history.length and _.isEqual @board,[0,1,2,0,1,2,0,1,2] then d=1 else d=-1\n		@level = constrain @level+d,1,6\n		@history = []\n		@createGame()\n\n	createGame : ->\n		bigstring = rubikSquareData[@level]\n		arr = bigstring.split ' '\n		s = arr[@randint(arr.length)]\n		@board = (parseInt(ch) for ch in s)\n\n	move : (m,d,board) ->\n		[i,j,k] = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]][m]\n		bd = board[..]\n		[a,b,c] = [bd[i],bd[j],bd[k]]\n		if d==0 then [a,b,c] = [b,c,a] else [a,b,c] = [c,a,b]\n		[bd[i],bd[j],bd[k]] = [a,b,c]\n		bd\n\n	draw : ->\n		bg 0\n		textAlign CENTER,CENTER\n		textSize 20\n		rectMode CENTER,CENTER\n		for c,i in @board\n			sc 1\n			if c==0 then fc 1,0,0\n			if c==1 then fc 0,1,0\n			if c==2 then fc 0,0,1\n			[x,y,w,h] = @BUTTONS[i]\n			rect 10*x,10*y,20*w,20*h\n		if @memory >= 0\n			[x,y,w,h] = @BUTTONS[@memory]\n			fc 0\n			sc()\n			circle 10*x,10*y,10\n		[x,y,w,h] = @BUTTONS[10]\n		fc 1,1,0\n		sc()\n		text @level-@history.length,10*x,10*y\n		if @history.length > 0\n			[x,y,w,h] = @BUTTONS[9]\n			text \"undo\",10*x,10*y\n			[x,y,w,h] = @BUTTONS[11]\n			text \"new\",10*x,10*y\n\n	undo : ->\n		if @history.length == 0 then return\n		@board = @history.pop()\n		@memory = -1\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y,w,h],i in @BUTTONS\n			if x-w <= mx/10 <= x+w and y-h <= my/10 <= y+h then index = i\n		if 0 <= index < 9\n			if @memory == -1\n				@memory = index\n			else if @memory == index\n				@memory = -1\n			else\n				hash =\n					\"01\":[0,1], \"02\":[0,0], \"10\":[0,0], \"12\":[0,1], \"20\":[0,1], \"21\":[0,0]\n					\"34\":[1,1], \"35\":[1,0], \"43\":[1,0], \"45\":[1,1], \"53\":[1,1], \"54\":[1,0]\n					\"67\":[2,1], \"68\":[2,0], \"76\":[2,0], \"78\":[2,1], \"86\":[2,1], \"87\":[2,0]\n					\"03\":[3,1], \"06\":[3,0], \"30\":[3,0], \"36\":[3,1], \"60\":[3,1], \"63\":[3,0]\n					\"14\":[4,1], \"17\":[4,0], \"41\":[4,0], \"47\":[4,1], \"71\":[4,1], \"74\":[4,0]\n					\"25\":[5,1], \"28\":[5,0], \"52\":[5,0], \"58\":[5,1], \"82\":[5,1], \"85\":[5,0]\n				pair = hash[\"\" + @memory + index]\n				if pair\n					[m,d] = pair\n					@history.push @board[..]\n					@board = @move m,d,@board\n					@memory = -1\n		if index==9 then @undo()\n		if index==11 then @newGame()\n\napp = new RubikSquare \"a\"\n",
  c: {
    app: "reset()"
  }
};

ID_RushHour = {
  v: '2017-04-29',
  k: 'bg sc fc range operators "" [] {} class rect text for if readText',
  l: 71,
  b: "# De 36 rutorna numreras:\n#   0 1 2 3 4 5\n#   6 7 8 9 a b\n#   c d e f g h\n#   i j k l m n\n#   o p q r s t\n#   u v w x y z\n#\n# Placering av fordon:\n#   horisontellt: A=2 B=3\n#   vertikalt:    C=2 D=3\n#\n# Lösningar:\n# 	Bilarna namnges i följden XABCDEFGHIJKLMNOPQR\n# 	liten bokstav: vänster/uppåt\n# 	stor bokstav:  höger/nedåt\n\nclass Car\n	constructor : (ch,wh,@c) ->\n	render      : ->\n	move        : (d) ->\n\nclass RushHour extends Application\n	classes    : -> [Car]\n	reset      : ->\n		super\n	draw       : ->\n	enter_cars : -> # Ad0sBwCoD569\n	enter_move : -> # bbbEEEAfdccGGXXXXX\n	begin      : ->\n	backward   : (n=1) ->\n	forward    : (n=1) ->\n	end        : ->\napp = new RushHour\n",
  a: "class Car\n	constructor : (ch,wh,@c) ->\n		index = \"0123456789abcdefghijklmnopqrstuvwxyz\".indexOf ch\n		@i = index % 6\n		@j = int index / 6\n		[@w,@h] = wh\n\n	render : ->\n		fill cc (@c+1) % 8\n		rect 40+20*@i+2, 40+20*@j+2, 20*@w-4, 20*@h-4\n		fc 0\n		fill cct (@c+1) % 8\n		name = \"XABCDEFGHIJKLMNOP\"[@c]\n		small = name.toLowerCase()\n		text small, 50+20*@i,        50+20*@j\n		text name,  50+20*(@i+@w-1), 50+20*(@j+@h-1)\n\n	move : (d) -> # -1 eller +1\n		if @w == 1 then @j += d\n		if @h == 1 then @i += d\n\nclass RushHour extends Application\n	classes : -> [Car]\n	reset : ->\n		super\n		@enter_cars1 \"Ad0sBwCoD569\"\n		@enter_move1 \"bbbEEEAfdccGGXXXXX\"\n		@begin()\n\n	draw : ->\n		textAlign CENTER,CENTER\n		bg 0\n		sc()\n		fc 0.5\n		rect 40,40,120,120\n		rect 160,80,40,20\n		fc 1\n		sc()\n		for i in range 6\n			text \"012345\"[i],30,50+20*i\n			text \"012345\"[i],50+20*i,170\n		for car in @cars\n			car.render()\n\n	enter_cars : -> @enter_cars1 @readText()\n	enter_cars1 : (s) ->\n		@cars = []\n		@moves = \"\"\n		@index = 0\n		for ch in s\n			if ch in \"ABCD\" then wh = {A:[2,1], B:[3,1], C:[1,2], D:[1,3]}[ch]\n			else @cars.push new Car ch,wh,@cars.length\n\n	enter_move : -> @enter_move1 @readText()\n	enter_move1 : (s) ->\n		@moves = @moves[...@index]\n		@moves += s\n		@forward s.length\n\n	begin : -> @backward @index\n	backward : (n=1) ->\n		for i in range n\n			if @index == 0 then return\n			@index--\n			@bothward \"XABCDEFGHIJKLMNO\",\"xabcdefghijklmno\"\n	forward : (n=1) ->\n		for i in range n\n			if @index >= @moves.length then return\n			@bothward \"xabcdefghijklmno\",\"XABCDEFGHIJKLMNO\"\n			@index++\n	end : -> @forward @moves.length - @index\n\n	bothward : (a,b) ->\n		i = a.indexOf @moves[@index]\n		j = b.indexOf @moves[@index]\n		if i >= 0 then @cars[i].move -1\n		if j >= 0 then @cars[j].move +1\n\napp = new RushHour \"a\"",
  c: {
    app: "reset()|enter_cars()|enter_move()|begin()|backward()|forward()|end()"
  },
  e: {
    RushHour: "https://en.wikipedia.org/wiki/Rush_Hour_(board_game)"
  }
};
//# sourceMappingURL=R.js.map
