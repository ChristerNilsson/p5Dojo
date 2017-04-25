// Generated by CoffeeScript 1.11.1
var ID260, ID261, ID262, ID263, ID264, ID265, ID266, ID267, ID268;

ID260 = {
  b: "# LOC:62 bg fc sc circle # * + - ^ if then else _.isEqual return <\n#        constrain text textAlign textSize class extends constructor new @ super ->\n\nclass Nim extends Application\n	reset : ->\n		super\n		@seed = 0\n	draw  : ->\n	newGame : ->\n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Nim",
  a: "class Nim extends Application\n	reset : ->\n		super\n		@RADIUS = 30\n		@BUTTONS = [[35,80],[100,80],[165,80], [35,150,'ok'],[100,150,'x'],[165,150,'hint']]\n		@seed = 0\n		@newGame()\n		@init()\n\n	init : ->\n		@active = -1\n		@player = 0\n		@original = @board[..]\n\n	move : (index) ->\n		if @active in [index,-1]\n			@active = index\n			@board[@active] = constrain @board[@active]-1, 0, 99\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n		@init()\n\n	ok : ->\n		if @active == -1 then return\n		@player = 1 - @player\n		@active = -1\n		@original = @board[..]\n\n	cancel : ->\n		@board = @original\n		@active = -1\n\n	draw : ->\n		textAlign CENTER,CENTER\n		textSize 32\n		bg 0\n		for [x,y,txt],i in @BUTTONS\n			fc 0\n			sc 1\n			sw 2\n			if i<=2 and @active==-1 or @active==i then circle x,y,@RADIUS\n			if i in [3,4] and @active!=-1 then circle x,y,@RADIUS\n			if i==5 and @active==-1 then circle x,y,@RADIUS\n			fc 1\n			sc()\n			if i<=2 then text @board[i],x,y\n			if i>=3 then text txt,x,y\n		fc 1,@player,0\n		circle 20 + @player * 160,20,10\n\n	hint : ->\n		if @active != -1 then return\n		[a,b,c] = @board\n		board = if (b^c) < a then [b^c,b,c] else if (a^c) < b then [a,a^c,c] else if (a^b) < c then [a,b,a^b] else [a,b,c]\n		if not _.isEqual(board,@board)\n			@board = board\n			@player = 1 - @player\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for button,i in @BUTTONS\n			if dist(button[0],button[1],mx,my) < @RADIUS then index = i\n		if index <= 2 then @move index\n		if index == 3 then @ok()\n		if index == 4 then @cancel()\n		if index == 5 then @hint()\n\napp = new Nim \"a\"\n",
  c: {
    app: "reset()|newGame()"
  },
  e: {
    Nim: "https://en.wikipedia.org/wiki/Nim",
    xor: "https://en.wikipedia.org/wiki/Bitwise_operation#XOR",
    Nimrod: "https://en.wikipedia.org/wiki/Nimrod_(computing)"
  }
};

ID261 = {
  b: "# LOC:53 bg fc sc sw range circle # rectMode class constructor super extends new @\n#        rect if then else text textSize textAlign for in split length indexOf\n#        \"\" toUpperCase _.isEqual % + - * / <= == [] push pop length and not substr\n# OBS!   Rockad, en passant samt bondeförvandling hanteras ej.\n#        Flytta pjäserna med musen. Klick utanför brädet innebär undo.\n\nclass Chess extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Chess",
  a: "class Chess extends Application\n	reset : ->\n		super\n		@SIZE = 22\n		@X = 100\n		@Y = 100\n		@board = ['RNBQKBNR','PPPPPPPP','........','........','........','........','pppppppp','rnbqkbnr']\n		@history = []\n		@memory = 0\n	draw : ->\n		bg 0.5\n		textSize 0.9 * @SIZE\n		textAlign CENTER,CENTER\n		rectMode CENTER\n		sc()\n		for i in range 8\n			for j in range 8\n				if (i+j)%2 == 0 then fc 0.6 else fc 0.8\n				x = @X-3.5*@SIZE+@SIZE*i\n				y = @Y-3.5*@SIZE+@SIZE*(7-j)\n				if _.isEqual @memory,[i,j] then fc 0,1,0\n				rect x,y, @SIZE, @SIZE\n				piece = @board[j][i]\n				if piece in \"RNBQKP\" then fc 0.95 else fc 0\n				if piece != '.'\n					if piece in \"pP\" then circle x,y,5 else text piece.toUpperCase(),x,y\n	setCharAt : (i,j,chr) ->\n    @board[j] = @board[j].substr(0,i) + chr + @board[j].substr(i+1)\n	move : (a,b) ->\n		[i1,j1] = a\n		[i2,j2] = b\n		taken = @board[j2][i2]\n		@setCharAt i2,j2, @board[j1][i1]\n		@setCharAt i1,j1,' '\n		@history.push [a,b,taken]\n	undo : () ->\n		if @history.length == 0 then return\n		[a,b,taken] = @history.pop()\n		[i1,j1] = a\n		[i2,j2] = b\n		@setCharAt i1,j1, @board[j2][i2]\n		@setCharAt i2,j2, taken\n	mousePressed : (mx,my) ->\n		i = int (mx-20)/20\n		j = 7 - int (my-20)/20\n		if 0 <= i <= 7 and 0 <= j <= 7\n			if @memory == 0\n				@memory = [i,j]\n			else\n				if not _.isEqual @memory,[i,j] then @move @memory,[i,j]\n				@memory = 0\n		else\n			@undo()\n\napp = new Chess \"a\"\n",
  c: {
    app: "reset()"
  }
};

ID262 = {
  b: "# LOC:63 sc fc sw range # text textAlign textSize class extends constructor new @ super ->\n#        point quad dist for in if then else << - -- + ++ * != & ^ ~ split\n# Se länken Nand2Tetris, sidan 36, för mer information!\n\nclass ALU extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new ALU",
  a: "class ALU extends Application\n	reset : ->\n		super\n		@x = 3\n		@y = 5\n		@flags = 0\n		@BUTTONS = [[5,1],[7,1],[9,1],[11,1],[13,1],[15,1],[3,3],[5,3],[15,3],[17,3]]\n\n	draw1 : (value,x0,y0) ->\n		sc()\n		fc 1,1,0\n		text value, x0,y0\n		for i in range 16\n			if (value & 1<<(15-i)) != 0 then fc 1 else fc 0.75\n			if (value & 1<<(15-i)) != 0 then r=2.5 else r=1\n			circle x0-40+3+5*i,y0+20,r\n\n	draw : ->\n		textAlign CENTER,CENTER\n		fc 1,1,0\n		quad 0,80, 200,80, 140,120, 60,120\n		[z,zr,ng] = @calc()\n		@draw1 @x,40,50\n		@draw1 @y,160,50\n		@draw1  z,100,130\n		flags = \"zx nx zy ny f no\".split \" \"\n		sc()\n		textSize 16\n		for i in range 6\n			[x,y] = @BUTTONS[i]\n			fc 1,0,0\n			circle 10*x,10*y,10\n			if @flags & 1<<i then fc 1 else fc 0.5\n			text flags[i],10*x,10*y\n		for ch,i in \"-+-+\"\n			[x,y] = @BUTTONS[6+i]\n			fc 1,0,0\n			circle 10*x,10*y,10\n			fc 1\n			text ch, 10*x,10*y\n		if zr==1 then fc 1 else fc 0.5\n		text \"zr\",90,170\n		if ng==1 then fc 1 else fc 0.5\n		text \"ng\",110,170\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for button,i in @BUTTONS\n			if dist(10*button[0],10*button[1],mx,my) < 10 then index = i\n		if 0 <= index <= 5 then @flags ^= 1<<index\n		if index == 6 then @x--\n		if index == 7 then @x++\n		if index == 8 then @y--\n		if index == 9 then @y++\n\n	calc : ->\n		x=@x\n		if @flags & 1 then x=0\n		if @flags & 2 then x=~x\n		y=@y\n		if @flags & 4 then y=0\n		if @flags & 8 then y=~y\n		if @flags & 16 then out = x+y else out = x&y\n		if @flags & 32 then out = ~out\n		if out==0 then zr=1 else zr=0\n		if out<0 then ng=1 else ng=0\n		[out,zr,ng]\n\napp = new ALU \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Nand2Tetris: "http://www.nand2tetris.org/chapters/chapter%2002.pdf"
  }
};

ID263 = {
  b: "# LOC:71 bg sc fc range # / % + * - == >= ++ -- \"\" [] {} push class extends constructor new @ super ->\n#        rect text textAlign for in if then else toLowerCase indexOf _.create prototype length @readText\n\n# De 36 rutorna numreras:\n#   0 1 2 3 4 5\n#   6 7 8 9 a b\n#   c d e f g h\n#   i j k l m n\n#   o p q r s t\n#   u v w x y z\n#\n# Placering av fordon:\n#   horisontellt: A=2 B=3\n#   vertikalt:    C=2 D=3\n#\n# Lösningar:\n# 	Bilarna namnges i följden XABCDEFGHIJKLMNOPQR\n# 	liten bokstav: vänster/uppåt\n# 	stor bokstav:  höger/nedåt\n\nclass Car\n	constructor : (ch,wh,@c) ->\n	render      : ->\n	move        : (d) ->\n\nclass RushHour extends Application\n	classes    : -> [Car]\n	reset      : ->\n		super\n	draw       : ->\n	enter_cars : -> # Ad0sBwCoD569\n	enter_move : -> # bbbEEEAfdccGGXXXXX\n	begin      : ->\n	backward   : (n=1) ->\n	forward    : (n=1) ->\n	end        : ->\napp = new RushHour\n",
  a: "class Car\n	constructor : (ch,wh,@c) ->\n		index = \"0123456789abcdefghijklmnopqrstuvwxyz\".indexOf ch\n		@i = index % 6\n		@j = int index / 6\n		[@w,@h] = wh\n\n	render : ->\n		fcc (@c+1) % 8\n		rect 40+20*@i+2, 40+20*@j+2, 20*@w-4, 20*@h-4\n		fc 0\n		tcc (@c+1) % 8\n		name = \"XABCDEFGHIJKLMNOP\"[@c]\n		small = name.toLowerCase()\n		text small, 50+20*@i,        50+20*@j\n		text name,  50+20*(@i+@w-1), 50+20*(@j+@h-1)\n\n	move : (d) -> # -1 eller +1\n		if @w == 1 then @j += d\n		if @h == 1 then @i += d\n\nclass RushHour extends Application\n	classes : -> [Car]\n	reset : ->\n		super\n		@enter_cars1 \"Ad0sBwCoD569\"\n		@enter_move1 \"bbbEEEAfdccGGXXXXX\"\n		@begin()\n\n	draw : ->\n		textAlign CENTER,CENTER\n		bg 0\n		sc()\n		fc 0.5\n		rect 40,40,120,120\n		rect 160,80,40,20\n		fc 1\n		sc()\n		for i in range 6\n			text \"012345\"[i],30,50+20*i\n			text \"012345\"[i],50+20*i,170\n		for car in @cars\n			car.render()\n\n	enter_cars : -> @enter_cars1 @readText()\n	enter_cars1 : (s) ->\n		@cars = []\n		@moves = \"\"\n		@index = 0\n		for ch in s\n			if ch in \"ABCD\" then wh = {A:[2,1], B:[3,1], C:[1,2], D:[1,3]}[ch]\n			else @cars.push new Car ch,wh,@cars.length\n\n	enter_move : -> @enter_move1 @readText()\n	enter_move1 : (s) ->\n		@moves = @moves[...@index]\n		@moves += s\n		@forward s.length\n\n	begin : -> @backward @index\n	backward : (n=1) ->\n		for i in range n\n			if @index == 0 then return\n			@index--\n			@bothward \"XABCDEFGHIJKLMNO\",\"xabcdefghijklmno\"\n	forward : (n=1) ->\n		for i in range n\n			if @index >= @moves.length then return\n			@bothward \"xabcdefghijklmno\",\"XABCDEFGHIJKLMNO\"\n			@index++\n	end : -> @forward @moves.length - @index\n\n	bothward : (a,b) ->\n		i = a.indexOf @moves[@index]\n		j = b.indexOf @moves[@index]\n		if i >= 0 then @cars[i].move -1\n		if j >= 0 then @cars[j].move +1\n\napp = new RushHour \"a\"",
  c: {
    app: "reset()|enter_cars()|enter_move()|begin()|backward()|forward()|end()"
  },
  e: {
    RushHour: "https://en.wikipedia.org/wiki/Rush_Hour_(board_game)"
  }
};

ID264 = {
  b: "# LOC:33 bg sc fc range # line [] length * / // % ** & | ^ ~ << >> + - > < == != <= >= int and or\n#        for in if then else text textSize textAlign class extends constructor new @ super ->\n\nclass BlackBox2D extends Application\n	reset : ->\n		super\n		@N = 10\n		@SIZE = 20\n		@index = 0\n	up   : -> @index = (@index+1) %% 36\n	down : -> @index = (@index-1) %% 36\n	draw : ->\napp = new BlackBox2D",
  a: "class BlackBox2D extends Application\n	reset : () ->\n		super\n		@N = 10\n		@SIZE = 20\n		@index = 0\n	up   : -> @index = (@index+1) %% 36\n	down : -> @index = (@index-1) %% 36\n	paint : (r,g,b,x,y,txt) ->\n		fc r,g,b\n		if txt? then text txt,x,y else circle x,y,5\n	draw : ->\n		sc()\n		textSize 14\n		textAlign CENTER,CENTER\n		for i in range @N\n			for j in range @N\n				x = @SIZE/2 + @SIZE*i\n				y = @SIZE/2 + @SIZE*j + 1\n				res = @calc i,j\n				if res == true       then @paint 0,1,0,x,y\n				else if res == false then @paint 1,0,0,x,y\n				else if res == 'NaN' then @paint 1,1,0,x,y,'?'\n				else if res >= 100   then @paint 0,1,0,x,y,'..'\n				else if res <= -100  then @paint 1,0,0,x,y,'..'\n				else if res < 0      then @paint 1,0,0,x,y,-res\n				else if res > 0      then @paint 0,1,0,x,y,res\n				else                      @paint 1,1,0,x,y,res\n	fix : (i,j) -> if j == 0 then ['NaN','NaN'] else [i//j, i%j]\n	calc : (i,j) ->\n		n = @N\n		[a,b] = @fix i,j\n		[i, i+j, i-j, i-5, j-6, j*n+i, i*n+j, (n-1-i)*n+n-1-j, (n-1-j)*n+n-1-i, (i-4)*(j-4), i*j, i*i+j*j, i**j, a, b, i%2, (i+j)%2, j&i, i|j, i^j, ~i, i<<j, j>>i, j&(2**i), i==j, i-j==1, i+j==9, i!=j, i>5, i<j, i<=j, i==3 and j==6, i==3 or j==6, (2<i<7) and (1<j<7), 4 <= dist(4.5,4.5,i,j) < 5, (i+j)%2==1][@index]\n\napp = new BlackBox2D \"a\"",
  c: {
    app: "reset()|up()|down()"
  },
  e: {
    Operatorer: "https://www.w3schools.com/jsref/jsref_operators.asp",
    BlackBox: "https://en.wikipedia.org/wiki/Black_box"
  }
};

ID265 = {
  b: "# LOC:65 bg fc sc range # %% * / + [] text textAlign textSize for in if then else return\n#        {} and < != == push pop length constrain class extends constructor new @ super ->\n\nclass Shortcut extends Application\n	reset : ->\n		super\n	draw : ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Shortcut",
  a: "class Shortcut extends Application\n	reset : ->\n		super\n		@W = 33\n		@H = 25\n		@seed = 0\n		@level = 1\n		@buttons = [[50,50,0],[150,50,0],[33,125,'/2'],[100,125,'+2'],[167,125,'*2'], [33,175,'undo'],[100,175,1],[167,175,'new']]\n		@createGame()\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	draw : ->\n		@buttons[0][2] = @a\n		@buttons[1][2] = @b\n		@buttons[6][2] = @level - @history.length\n		bg 0.5\n		textAlign CENTER,CENTER\n		textSize 30\n		sc()\n		for [x,y,txt],i in @buttons\n			if i in [0,1,6] then fc 0 else fc 1,1,0\n			text txt,x,y\n	newGame : ->\n		if @level >= @history.length and @a == @b then d=1 else d=-1\n		@level = constrain @level+d,1,16\n		@createGame()\n	createGame : ->\n		@history = []\n		@a = 1 + @randint 20\n		q1 = [@a]\n		q2 = []\n		visited = {}\n		visited[@a] = true\n		expand = (n) ->\n			if visited[n] then return\n			visited[n] = true\n			q2.push n\n		for level in range @level\n			for nr in q1\n				expand nr+2\n				expand nr*2\n				expand nr/2 if nr%2==0\n			q1 = q2\n			q2 = []\n		@b = @selectTarget q1 #[@randint(q1.length)]\n	selectTarget : (lst) -> # within 1..1000, if possible\n		bs = (x for x in lst when 1 <= x <= 1000)\n		return bs[@randint(bs.length)] if bs.length > 0\n		_.min lst\n	undo : ->\n		if @history.length == 0 then return\n		@a = @history.pop()\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y,txt],i in @buttons\n			if x-@W < mx < x+@W and  y-@H < my < y+@H\n				index = i\n		a = -1\n		if index == 2 and @a % 2 == 0 then a = @a / 2\n		if index == 3 then a = @a + 2\n		if index == 4 then a = @a * 2\n		if index == 5 then @undo()\n		if index == 7 then @newGame()\n		if a != -1\n			@history.push @a\n			@a = a\n\napp = new Shortcut \"a\"\n",
  c: {
    app: "reset()"
  }
};

ID266 = {
  b: "# LOC:80 bg fc sc range # * / + %% [] line circle text textAlign textSize for in if then else return int\n#        {} dist _.isEqual and < != == push pop length constrain class extends constructor new @ super ->\n\nclass Complex extends Application\n	reset : ->\n		super\n	draw : ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Complex",
  a: "class Complex extends Application\n	reset : ->\n		super\n		@RADIUS = 25\n		@buttons = [[30,130,'m'],[70,170,'*i'],[130,170,'*2'],[170,130,'+1'],[30,30,'undo'], [170,30,'new']]\n		@seed = 0\n		@level = 1\n		@createGame()\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	gr : ->\n		sc 1,1,1,0.5\n		for i in range 21\n			line 0, 10 * i, 200, 10 * i\n			line 10 * i, 0, 10 * i, 200\n		sc 1,1,1\n		line 100,0, 100,200\n		line 0,100, 200,100\n	draw : ->\n		@buttons[4][2] = @level - @history.length\n		bg 0\n		@gr()\n		textAlign CENTER,CENTER\n		textSize 25\n		sc()\n		fc 1,0,0\n		circle 100+10*@b[0], 100-10*@b[1], 5\n		fc 0,1,0\n		circle 100+10*@a[0], 100-10*@a[1], 4\n		for [x,y,txt],i in @buttons\n			fc 1,1,0,0.4\n			circle x,y,@RADIUS\n			fc 1,1,0\n			text txt,x,y\n	newGame : ->\n		if @level >= @history.length and _.isEqual(@a,@b) then d=1 else d=-1\n		@level = constrain @level+d,1,16\n		@createGame()\n	createGame : ->\n		@history = []\n		@a = [-10 + @randint(20), -10 + @randint(20)]\n		q1 = [@a]\n		q2 = []\n		visited = {}\n		visited[@a] = true\n		expand = (n) ->\n			if visited[n] then return\n			if n[0]*n[0] + n[1]*n[1] > 1000 then return\n			visited[n] = true\n			q2.push n\n		for level in range @level\n			for [x,y] in q1\n				expand [y,x]\n				expand [-y,x]\n				expand [2*x,2*y]\n				expand [x+1,y]\n			q1 = q2\n			q2 = []\n		@b = @selectTarget q1\n	selectTarget : (lst) -> # within 21x21 window, if possible\n		bs = ([x,y] for [x,y] in lst when -10 <= x <= 10 and -10 <= y <= 10)\n		return bs[@randint(bs.length)] if bs.length > 0\n		_.min lst, ([x,y]) -> dist 0,0,x,y\n	undo : ->\n		if @history.length == 0 then return\n		@a = @history.pop()\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y,txt],i in @buttons\n			if dist(mx,my,x,y) < @RADIUS then index = i\n		[x,y] = @a\n		a = []\n		if index == 0 then a = [y,x]\n		if index == 1 then a = [-y,x]\n		if index == 2 then a = [2*x,2*y]\n		if index == 3 then a = [x+1,y]\n		if index == 4 then @undo()\n		if index == 5 then @newGame()\n		if a.length != 0\n			@history.push @a\n			@a = a\n\napp = new Complex \"a\"\n",
  c: {
    app: "reset()"
  },
  e: {
    "Komplexa tal": "http://www.matteboken.se/lektioner/matte-4/komplexa-tal/rakna-med-komplexa-tal"
  }
};

ID267 = {
  b: "# LOC:121 bg fc sc range # [] push pop concat length if then else constrain for in int quad\n#         text textSize textAlign dist + - * / class extends constructor new @ super ->\n\nclass RubikCube extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\n	toggleNumbers : ->\napp = new RubikCube",
  a: "class RubikCube extends Application\n	newGame : ->\n		@level = @level + if @level==@history.length then 1 else -1\n		@level = constrain @level,0,100\n		@history = []\n		@board = []\n		@memory = -1\n		@board.push i for i in range 54\n		for i in range @level\n			@op @randint(6), 2*@randint(2)-1\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	undo : ->\n		if @history.length==0 then return\n		@memory = -1\n		[k,d] = @history.pop()\n		@op k,-d\n	turn : (a,b) -> # a,b in 0..54\n		if int(a/9) != int(b/9) then return\n		d = (a%9 - b%9)/2\n		if d in [-3,3] then d = -d/3\n		if d not in [-1,1] then return\n		k = int a/9\n		@op k,d\n		@history.push [k,d]\n	op : (k,d) -> # 0..5, [-1,1]\n		tiles = [\n			[0,1,42,41,40,   2,3,9,16,15,    4,5,20,19,18,   6,7,31,30,29]\n			[9,10,40,39,38,  11,12,49,48,47, 13,14,22,21,20, 15,16,4,3,2]\n			[18,19,6,5,4,    20,21,15,14,13, 22,23,47,46,45, 24,25,33,32,31]\n			[27,28,36,43,42, 29,30,0,7,6,    31,32,18,25,24, 33,34,45,52,51]\n			[36,37,51,50,49, 38,39,11,10,9,  40,41,2,1,0,    42,43,29,28,27]\n			[45,46,24,23,22, 47,48,13,12,11, 49,50,38,37,36, 51,52,27,34,33]]\n		arr = tiles[k]\n		carr = (@board[i] for i in arr)\n		limit = if d==1 then 5 else 15\n		carr = carr[limit..20].concat carr[0..limit]\n		@board[arr[i]] = carr[i] for i in range 20\n	reset : ->\n		super\n		@board = []\n		@memory = -1\n		@level = -1\n		@history = []\n		@buttons = [[40,140,@level], [160,140,\"new\"]]\n		@showNumbers = false\n		@seed = 0\n		@newGame()\n	colorize : (index,board) ->\n		k = int board[index] / 9\n		[r,g,b] = [[1,1,1],[0,0,1],[1,0,0],[0,1,0],[0.97, 0.57, 0],[1,1,0]][k]\n		fc r,g,b\n	textColorize : (index,board) -> fc [0,1,1,0,0,0][int board[index] / 9]\n	rita : (x,y,index,tilt,self) ->\n		a = 16\n		b = 9\n		self.colorize index,self.board\n		sc 0\n		if tilt == 0 then quad x-a,y, x,y-b, x+a,y, x,y+b\n		if tilt == 1 then quad x+a/2,y-b/2, x-a/2,y-3*b/2, x-a/2,y+b/2, x+a/2,y+3*b/2\n		if tilt == 2 then quad x-a/2,y-b/2, x+a/2,y-3*b/2, x+a/2,y+b/2, x-a/2,y+3*b/2\n		self.textColorize index,self.board\n		sc()\n		if self.showNumbers then text self.board[index],x,y\n		if self.memory? and index == self.memory then circle x,y,4\n		false\n	sense : (x,y,index,tilt,self) -> dist(x,y,mouseX,mouseY) < 9\n	draw : ->\n		bg 0\n		textSize 12\n		textAlign CENTER,CENTER\n		@traverse @rita\n		fc 1,1,0\n		textSize 20\n		@buttons[0][2] = @level - @history.length\n		text txt,x,y for [x,y,txt] in @buttons\n	traverse : (f) ->\n		a = 16\n		b = 9\n		y0 = 60\n		for index in range 54\n			side = int index / 9\n			if side==0 # vit\n				i = [-1,-1,-1,0,1,1,1,0,0][index % 9]\n				j = [0,1,2,2,2,1,0,0,1][index % 9]\n				if f 100+a*(i+j-1),y0+b*(i-j+1), index, 0, @ then return index\n			if side==1 # blå\n				i = [-1,-1,-1,0,1,1,1,0,0][index % 9]\n				j = [0,1,2,2,2,1,0,0,1][index % 9]\n				if f 100+a*(i+4.5),y0+b*(2*j+i-3.5), index, 1, @ then return index\n			if side==2 # röd\n				i = [-1,0,1,1,1,0,-1,-1,0][index % 9]\n				j = [0,0,0,1,2,2,2,1,1][index % 9]\n				if f 100+a*(i+1.5),y0+b*(2*j-i+2.5), index, 2, @ then return index\n			if side==3 # grön\n				i = [-1,-1,-1,0,1,1,1,0,0][index % 9]\n				j = [2,1,0,0,0,1,2,2,1][index % 9]\n				if f 100+a*(i-1.5),y0+b*(2*j+i+2.5), index, 1, @ then return index\n			if side==4 # orange\n				i = [-1, 0, 1, 1, 1, 0,-1,-1, 0][index % 9]\n				j = [ 2, 2, 2, 1, 0, 0, 0, 1, 1][index % 9]\n				if f 100+a*(i-4.5),y0+b*(2*j-i-3.5), index, 2, @ then return index\n			if side==5 # gul\n				i = [ 1, 1, 1, 0,-1,-1,-1, 0, 0][index % 9]\n				j = [ 0, 1, 2, 2, 2, 1, 0, 0, 1][index % 9]\n				if f 100+a*(i+j-1),y0+b*(i-j+13), index, 0, @ then return index\n		-1\n	mousePressed : (mx,my) ->\n		for [x,y,txt],i in @buttons\n			if dist(mx,my,x,y) < 10\n				if i==0 then return @undo()\n				if i==1 then return @newGame()\n		if @memory == -1\n			@memory = @traverse @sense\n			if @memory != -1\n				if @memory%9==8 then @memory = -1\n		else\n			index = @traverse @sense\n			if index != -1 and index%9 != 8 then @turn @memory,index\n			@memory = -1\n	toggleNumbers : ->\n		@showNumbers = not @showNumbers\n\napp = new RubikCube \"a\"",
  c: {
    app: "reset()|toggleNumbers()"
  },
  e: {
    "RubikCube": "https://sv.wikipedia.org/wiki/Rubiks_kub"
  }
};

ID268 = {
  b: "# LOC:45 fc range # if then else [] push pop _.last length split\n#        rect for in parseFloat class extends constructor new @ super ->\n# Hantera dessa kommandon: x y < > = + - * sq and floor %\n\nclass ForthHaiku extends Application\n	reset : ->\n		super\n	resolution : (@n,@size) ->\n	nextExample : ->\n	prevExample : ->\napp = new ForthHaiku",
  a: "class ForthHaiku extends Application\n	draw : ->\n		digit = (bool) -> if bool then 1 else 0\n		n = @n\n		size = @size\n		stack = []\n		dict = {}\n		dict['x'] = -> stack.push x / n\n		dict['y'] = -> stack.push y / n\n		dict['<'] = -> stack.push(digit stack.pop() > stack.pop())\n		dict['>'] = -> stack.push(digit(stack.pop() < stack.pop()))\n		dict['+'] =  -> stack.push stack.pop() + stack.pop()\n		dict['-'] =  -> stack.push -stack.pop() + stack.pop()\n		dict['*'] =  -> stack.push stack.pop() * stack.pop()\n		dict['sq'] =  ->\n			temp = stack.pop()\n			stack.push temp * temp\n		dict['%'] =  ->\n			a = stack.pop()\n			b = stack.pop()\n			stack.push b % a\n		dict['floor'] = -> stack.push floor stack.pop()\n		dict['and'] = -> #  pga kortslutning\n			a = stack.pop() != 0\n			b = stack.pop() != 0\n			stack.push digit a and b\n		examples = ['1','1 1','0 1','0.5 0.5 0.5','1 1 1','x','x y','x y >','x 0.5 >','x 0.5 - sq y 0.5 - sq + 0.25 <','x 8 * floor y 8 * floor + 2 %','x 0.5 < y 0.5 <','x 0.5 < y 0.5 < and']\n		arr = examples[@example % examples.length].split ' '\n		sc()\n		for x in range n\n		  for y in range n\n		    stack = []\n		    for cmd in arr\n		      if dict[cmd] then dict[cmd]()\n		      else stack.push parseFloat cmd\n		    stack.push 0 for i in range 3-stack.length\n		    fc stack[0], stack[1], stack[2]\n		    rect size * x, size * y, size, size\n	reset : ->\n		super\n		@resolution 10,10\n		@example = 0\n	resolution : (@n,@size) ->\n	nextExample : -> @example++\n	prevExample : -> @example--\n\napp = new ForthHaiku \"a\"",
  c: {
    app: "reset()|resolution 10,10|resolution 20,5|resolution 50,2|resolution 100,1|resolution 200,1|nextExample()|prevExample()"
  },
  e: {
    "ForthHaiku": "http://forthsalon.appspot.com"
  }
};
