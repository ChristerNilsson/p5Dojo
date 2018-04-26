'use strict';

// Generated by CoffeeScript 2.0.3
var ID_2048, ID_Tetramino, ID_Tetris, ID_TextCoffee, ID_TextRotate, ID_TextRotateAlign, ID_Texts, ID_TowerOfHanoi, ID_Translate, ID_TwoDiceHistogram, ID_text, ID_triangle, ID_triangles;

ID_2048 = {
  v: '2017-10-19',
  k: 'fc sc range [] for rect if operators class text',
  l: 103,
  h: 2,
  b: "class Button \n	constructor : (@number,@i,@j) ->\n	draw : ->\n\nclass C2048 extends Application\n	reset : ->\n		super\n		@seed=0\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	classes : -> [Button]\n	draw  : ->\n	right : ->\n	left : ->\n	up : ->\n	down : ->\napp = new C2048",
  a: "\nclass Button \n	constructor : (@number,@i,@j) ->\n		@x = @i * 50\n		@y = @j * 50\n	draw : ->\n		fc 1\n		sc 0\n		rect @x,@y, 50,50\n		fc 0\n		textSize [0,40,40,30,20,15][str(@number).length]\n		if @number != 0 then text @number, 25+@x, 25+@y\n\nclass C2048 extends Application\n	reset : ->\n		super\n		@N = 4\n		@state = ''\n		@buttons = []\n		@seed = 0\n\n		for i in range @N\n			for j in range @N\n				button = new Button 0,i,j\n				@buttons.push button \n\n		@new_piece()\n		@new_piece()\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	new_piece : ->\n		moves = range @N*@N\n		cands = (i for i in moves when @buttons[i].number==0)\n		i = cands[@randint cands.length]\n		@buttons[i].number = [2,4][@randint 2]\n\n	shift : (numbers, index,delta) ->\n		lst = (numbers[index+i*delta] for i in range @N) \n		lst = (item for item in lst when item != 0)\n		for i in range lst.length\n			if lst[i]==lst[i+1] and lst[i] != 0\n				lst[i] *= 2\n				lst[i+1] = 0\n\n		while lst.length < @N\n			lst.push 0\n\n		for i in range @N\n			numbers[index+i*delta] = lst[i]\n\n		numbers\n\n	move : (start,a,b) ->\n		numbers = (button.number for button in @buttons) \n		last = numbers.slice()\n		for i in range @N\n			numbers = @shift numbers, start+i*a,b\n		for button,i in @buttons\n			button.number = numbers[i]\n		if not _.isEqual numbers,last then @new_piece()\n		numbers\n\n	up    : -> @move 0,4,1\n	down  : -> @move 3,4,-1\n	left  : -> @move 0,1,4\n	right : -> @move 12,1,-4\n	check_lose : (b) ->\n		numbers = (button.number for button in @buttons when button.number==0)\n		if numbers.length==0 then @state = 'LOSE'\n\n	classes : -> [Button]\n\n	draw : ->\n		textAlign CENTER,CENTER\n		for button in @buttons\n			button.draw()\n		@check_lose()\n		if @state != ''\n			fc 1,0,0,0.5\n			textSize 64\n			text @state,100,100\n\napp = new C2048 'a'",
  c: {
    app: "reset()|right()|left()|up()|down()"
  },
  e: {
    "2048": "https://en.wikipedia.org/wiki/2048_(video_game)"
  }
};

ID_Tetramino = {
  v: '2017-06-07',
  k: 'bg fill cc range [] for rect if operators class',
  l: 32,
  b: "class Piece\n	constructor : (@color,@patterns) ->\nclass Tetramino extends Application\n	reset : ->\n		super\n	classes : -> [Piece]\n	draw  : ->\n	right : ->\n	left : ->\n	prev : ->\n	next : ->\napp = new Tetramino",
  a: "class Piece\n	constructor : (@color,@patterns) -> @current = 0\n	right : -> @current = (@current+1) %% @patterns.length\n	left  : -> @current = (@current-1) %% @patterns.length\n	draw  : ->\n		pattern = @patterns[@current]\n		fill cc @color\n		for i in range 16\n			if pattern >> i & 1\n				x = i % 4\n				y = i // 4\n				rect 20*x,20*y,20,20\nf = (a,b,c,d) -> 2**a + 2**b + 2**c + 2**d\nclass Tetramino extends Application\n	reset : ->\n		super\n		@pieces = []\n		@pieces.push new Piece 0,[f(1,5,9,13),f(4,5,6,7)]\n		@pieces.push new Piece 1,[f(5,6,9,10)]\n		@pieces.push new Piece 2,[f(1,5,6,9),f(4,5,6,9),f(1,4,5,9),f(1,4,5,6)]\n		@pieces.push new Piece 3,[f(2,5,6,9),f(4,5,9,10)]\n		@pieces.push new Piece 4,[f(1,5,6,10),f(5,6,8,9)]\n		@pieces.push new Piece 5,[f(1,5,9,10),f(4,5,6,8),f(0,1,5,9),f(4,5,6,2)]\n		@pieces.push new Piece 6,[f(1,5,9,8),f(0,4,5,6),f(1,2,5,9),f(4,5,6,10)]\n		@current = 0\n	classes : -> [Piece]\n	draw  : -> @pieces[@current].draw()\n	right : -> @pieces[@current].right()\n	left : -> @pieces[@current].left()\n	prev : -> @current = (@current-1) %% @pieces.length\n	next : -> @current = (@current+1) %% @pieces.length\napp = new Tetramino 'a'",
  c: {
    app: "reset()|right()|left()|prev()|next()"
  },
  e: {
    "Wikipedia": "https://en.wikipedia.org/wiki/Tetris",
    "Meth Meth Method": "https://www.youtube.com/watch?v=H2aW5V46khA"
  }
};

ID_Tetris = {
  v: '2017-05-07',
  k: 'bg fc range [] {} for rect if while _.contains operators class',
  l: 109,
  h: 2,
  b: "class Tetris extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Tetris",
  a: "class Tetris extends Application\n	reset : ->\n		super\n		@buttons = [[140,105,'-90'],[180,105,'+90'],[160,130,'dn'],[140,155,'lt'],[180,155,'rt'],[160,180,''],[160,50,0]]\n		@seed = 0\n		@arena = (new Array(12).fill(0) for i in range 20)\n		@x=0\n		@y=0\n		@matrix = null\n		@score = 0\n		@playerReset()\n	draw : ->\n		bg 0\n		fc 0.5\n		rect 0,0,120,200\n		sc 0\n		@drawMatrix @arena, 0,0\n		@drawMatrix @matrix, @x,@y\n		@arenaSweep()\n		textSize 20\n		textAlign CENTER,CENTER\n		@buttons[6][2] = @score\n		for [x,y,txt],index in @buttons\n			fc 0.5\n			if index < 5 then circle x,y,15\n			fc 1,1,0\n			text txt,x,y\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\n		for [x,y,txt],index in @buttons\n			if dist(mx,my,x,y) < 15\n				if index==0 then @playerRotate -1 # -90\n				if index==1 then @playerRotate 1  # +90\n				if index==2 then @playerDown()    # DOWN\n				if index==3 then @playerMove -1   # LEFT\n				if index==4 then @playerMove 1    # RIGHT\n				#if index==5 then @playerDrop()    # SPACE\n	arenaSweep : ->\n		for i in range @arena.length\n			y = 19-i\n			rad = @arena[y]\n			if not _.contains rad, 0\n				row = @arena.splice(y, 1)[0].fill 0\n				@arena.unshift row\n				@score++\n	playerRotate : (dir) ->\n		xpos = @x\n		offset = 1\n		@rotera @matrix, dir\n		while @collide()\n			@x += offset\n			offset = -(offset + (offset > 0 ? 1 : -1))\n			if offset > @matrix[0].length\n				@rotera @matrix, -dir\n				@x = xpos\n				return\n	playerReset : ->\n		pieces = 'TJLOSZI'\n		@matrix = @createPiece pieces[@randint pieces.length]\n		@y = 0\n		@x = (@arena[0].length / 2 | 0) - (@matrix[0].length / 2 | 0)\n		if @collide()\n			row.fill(0) for row in @arena\n			@score = 0\n	playerDown : ->\n		@y++\n		if @collide()\n			@y--\n			@merge()\n			@playerReset()\n			@arenaSweep()\n	playerDrop : -> # hänger sig här!\n		while not @collide()\n			@playerDown()\n	playerMove : (offset) ->\n		@x += offset\n		if @collide() then @x -= offset\n	merge : ->\n		for row,y in @matrix\n			for value,x in row\n				if value != 0 then @arena[y + @y][x + @x] = value\n	rotera : (matrix, dir) ->\n		for y in range matrix.length\n			for x in range y\n				[matrix[x][y], matrix[y][x]] = [matrix[y][x],matrix[x][y]]\n		if dir > 0\n			row.reverse() for row in matrix\n		else\n			matrix.reverse()\n	collide : ->\n		m = @matrix\n		for y in range m.length\n			for x in range m[y].length\n				if (m[y][x] != 0 and (@arena[y + @y] and @arena[y + @y][x + @x]) != 0) then return true\n		false\n	createPiece : (type) ->\n		if type == 'I' then [[0, 1, 0, 0],	[0, 1, 0, 0],	[0, 1, 0, 0],	[0, 1, 0, 0],]\n		else if type == 'L' then [[0, 2, 0],[0, 2, 0],[0, 2, 2],]\n		else if type == 'J' then [[0, 3, 0],[0, 3, 0],[3, 3, 0],]\n		else if type == 'O' then [[4, 4],[4, 4],]\n		else if type == 'Z' then [[5, 5, 0],[0, 5, 5],[0, 0, 0]]\n		else if type == 'S' then [[0, 6, 6],[6, 6, 0],[0, 0, 0]]\n		else if type == 'T' then [[0, 7, 0],[7, 7, 7],[0, 0, 0]]\n	drawMatrix : (matrix, xoff,yoff) ->\n		for row,y in matrix\n			for value,x in row\n				if value != 0\n					fill cc value\n					rect 10*(x + xoff), 10*(y + yoff), 10,10\n\napp = new Tetris \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    "Wikipedia": "https://en.wikipedia.org/wiki/Tetris",
    "Meth Meth Method": "https://www.youtube.com/watch?v=H2aW5V46khA"
  }
};

ID_text = {
  v: '2018-04-26',
  k: 'text textSize textAlign sw sc',
  l: 13,
  h: 0,
  b: "# Ritar en text\n# Draws a text\n\n# textSize pixles  # höjd\n# textAlign horizontal,vertical\n# text string,x,y  # ritar ut string\n\ntext \"Aj\",60,40\n\nsw 3\ntextSize 40\ntext \"Bg\",140,40\n\ntextAlign CENTER\ntext \"Cq\",60,100\n\ntextAlign CENTER,CENTER\nfc 0,1,0\ntext \"Dp\",140,100\n\nsc 1,0,0\ntext \"Ew\",60,160\n\nsc()\ntext \"Fr\",140,160",
  a: "# Ritar en text\n# Draws a text\n\n# textSize pixles  # höjd\n# textAlign horizontal,vertical\n# text string,x,y  # ritar ut string\n\ntext \"Aj\",60,40\n\nsw 3\ntextSize 40\ntext \"Bg\",140,40\n\ntextAlign CENTER\ntext \"Cq\",60,100\n\ntextAlign CENTER,CENTER\nfc 0,1,0\ntext \"Dp\",140,100\n\nsc 1,0,0\ntext \"Ew\",60,160\n\nsc()\ntext \"Fr\",140,160"
};

ID_Texts = {
  v: '2018-04-26',
  k: 'bg for range text textSize textAlign',
  l: 10,
  h: 1,
  b: "",
  a: "# textSize pixlar  # höjd\n# textAlign horizontal,vertical\n# text string,x,y  # ritar ut string\n\nbg 1\ntextSize 20\nfor i in range 10\n	letter = \"ABCDEFGHIJ\"[i]\n	textAlign LEFT\n	text letter,40,20+i*20\n	textAlign CENTER\n	text letter,100,20+i*20	\n	textAlign RIGHT\n	text letter,160,20+i*20"
};

// ID_TextB =
// 	v:'2017-04-29'
// 	k:'fc sc text textSize textAlign'
// 	l:5
// 	h:1
// 	b:""
// 	a:"""
// fc 1,1,0
// sc()
// textSize 32
// textAlign CENTER,CENTER
// text 'Coffeescript',100,100
// """
ID_TextCoffee = {
  v: '2017-09-30',
  k: 'sc fc angleMode rotate text translate textSize textAlign',
  l: 10,
  h: 2,
  b: "",
  a: "sc()\nfc 1,1,0\ntextSize 64\ntextAlign CENTER,CENTER\ntranslate 100,100\nangleMode DEGREES\nrotate 90\ntext 'Coffee',0,0\nfc 1,0,0\nrotate 90\ntext 'script',0,0"
};

ID_TextRotate = {
  v: '2018-04-25',
  k: 'angleMode rotate text translate textSize',
  l: 7,
  h: 0,
  b: "angleMode DEGREES\ntextSize 100\nfc 1,1,0,0.5\ntranslate 100,100\nfor i in range 6\n	text \"f\",0,0\n	rotate 60",
  a: ""
};

ID_TextRotateAlign = {
  v: '2018-04-24',
  k: 'angleMode rotate text translate textSize textAlign',
  l: 8,
  h: 0,
  b: "angleMode DEGREES\ntextAlign CENTER,CENTER\ntextSize 200\nfc 1,0,0,0.5\ntranslate 100,100\nfor i in range 4\n	text \"A\",0,0\n	rotate 90",
  a: ""
};

ID_TowerOfHanoi = {
  v: '2017-05-13',
  k: 'bg fc sc range operators [] text for if return constrain class line',
  l: 40,
  b: "class TowerOfHanoi extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new TowerOfHanoi",
  a: "class TowerOfHanoi extends Application\n	reset : ->\n		super\n		@level = 0\n		@H = 10\n		@buttons = [33,100,167]\n		@disk = null\n		@newGame()\n	draw : ->\n		bg 0.75\n		textSize 32\n		textAlign CENTER,CENTER\n		sc()\n		text @counter,100,180\n		for pile,i in @board\n			x = @buttons[i]\n			sc 0.5\n			sw 3\n			line x,55,x,140\n			sc 0\n			line 0,140,200,140\n			sw @H\n			for disk,j in pile\n				y = 134 - j*@H\n				stroke cc disk\n				line x-3*(disk+1),y, x+3*(disk+1),y\n	newGame : ->\n		@counter=0\n		@level = constrain @level+1,1,8\n		@board = [range(@level).reverse(), [], []]\n	mousePressed : (mx,my) ->\n		if @disk==null and @board[0].length==0 and @board[1].length==0\n			@newGame()\n		else\n			for x,index in @buttons\n				if x-33 <= mx <= x+33\n					if @disk == null\n						@disk = @board[index].pop()\n					else\n						pile = @board[index]\n						if pile.length == 0 or _.last(pile) > @disk\n							@counter++\n							pile.push @disk\n							@disk = null\n\napp = new TowerOfHanoi \"a\"\n",
  c: {
    app: "reset()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Tower_of_Hanoi"
  }
};

ID_Translate = {
  v: '2018-04-26',
  k: 'translate fc rect',
  l: 5,
  h: 0,
  b: "# translate x,y\n\nfc()\nrect 0,0,20,20\ntranslate 100,100\nfc 1\nrect 0,0,20,20",
  a: "# translate x,y\n\nfc()\nrect 0,0,20,20\ntranslate 100,100\nfc 1\nrect 0,0,20,20"
};

ID_triangle = {
  v: '2018-04-27',
  k: 'triangle',
  l: 1,
  h: 0,
  b: "# Rita en triangel\n\n# Draw a triangle\n\n#        x1,y1,x2,y2, x3,y3\ntriangle 20,20,20,80,100,80",
  a: "# Rita en triangel\n\n# Draw a triangle\n\n#        x1,y1,x2,y2, x3,y3\ntriangle 20,20,20,80,100,80"
};

ID_triangles = {
  v: '2018-04-26',
  k: 'fc triangle',
  l: 4,
  h: 1,
  b: "# triangle x1,y1, x2,y2, x3,y3",
  a: "fc 1,1,0,0.5\ntriangle 20,40, 160,100, 100,140\nfc 0,1,0,0.5\ntriangle 100,20, 160,80, 60,140"
};

ID_TwoDiceHistogram = {
  v: '2017-04-29',
  k: 'bg fc sc range int random text if for operators rect []',
  l: 22,
  b: "# OBS: På grund av random blir bitmapparna inte likadana",
  a: "counts = Array(11).fill 0\ndice = -> int 6 * random()\ntextAlign CENTER,CENTER\nfor i in range 1000\n	counts[dice() + dice()]++\nh = int 200/11\nbg 0\nfor count,i in counts\n	y = h*i\n	fc 1,1,0,0.5\n	sc 1,1,0\n	rect 0,y,count,h-3\n	fc 1,1,0\n	sc()\n	textAlign LEFT,CENTER\n	text i+2, 5,y+h/2\n	if count < 100\n		textAlign LEFT,CENTER\n		text count, count+5,y+h/2\n	else\n		textAlign RIGHT,CENTER\n		text count, count-5,y+h/2",
  e: {
    Animering: "https://www.openprocessing.org/sketch/124236"
  }
};
//# sourceMappingURL=T.js.map
