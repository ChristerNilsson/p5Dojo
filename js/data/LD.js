// Generated by CoffeeScript 1.11.1
var ID260, ID261, ID262, ID263, ID264, ID265, ID266;

ID260 = {
  b: "# LOC:62 bg fc sc circle # * + - ^ if then else _.isEqual return <  \n#        constrain text textAlign textSize class extends constructor new @ super ->\n\nclass Nim extends Application\n	reset : -> \n		super\n		@seed = 0\n	draw  : -> super\n	newGame : -> \n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Nim  ",
  a: "class Nim extends Application\n	reset : -> \n		super\n		@RADIUS = 30\n		@BUTTONS = [[35,80],[100,80],[165,80], [35,150,'ok'],[100,150,'x'],[165,150,'hint']]\n		@seed = 0\n		@newGame()\n		@init()\n\n	init : ->\n		@active = -1\n		@player = 0\n		@original = @board[..]\n\n	move : (index) ->\n		if @active in [index,-1]\n			@active = index\n			@board[@active] = constrain @board[@active]-1, 0, 99\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n		@init()\n\n	ok : -> \n		if @active == -1 then return\n		@player = 1 - @player\n		@active = -1 \n		@original = @board[..]\n\n	cancel : ->\n		@board = @original\n		@active = -1 \n\n	draw : ->\n		textAlign CENTER,CENTER\n		textSize 32\n		bg 0\n		for [x,y,txt],i in @BUTTONS\n			fc 0\n			sc 1\n			sw 2\n			if i<=2 and @active==-1 or @active==i then circle x,y,@RADIUS\n			if i in [3,4] and @active!=-1 then circle x,y,@RADIUS\n			if i==5 and @active==-1 then circle x,y,@RADIUS\n			fc 1\n			sc()\n			if i<=2 then text @board[i],x,y \n			if i>=3 then text txt,x,y\n		fc 1,@player,0\n		circle 20 + @player * 160,20,10\n\n	hint : ->\n		if @active != -1 then return\n		[a,b,c] = @board\n		board = if (b^c) < a then [b^c,b,c] else if (a^c) < b then [a,a^c,c] else if (a^b) < c then [a,b,a^b] else [a,b,c]\n		if not _.isEqual(board,@board)\n			@board = board\n			@player = 1 - @player\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for button,i in @BUTTONS\n			if dist(button[0],button[1],mx,my) < @RADIUS then index = i\n		if index <= 2 then @move index\n		if index == 3 then @ok()\n		if index == 4 then @cancel()\n		if index == 5 then @hint()\n\napp = new Nim \"a\"   \n		",
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
  b: "# LOC:53 bg fc sc sw range circle # rectMode class constructor super extends new @\n#        rect if then else text textSize textAlign for in split length indexOf\n#        \"\" toUpperCase _.isEqual % + - * / <= == [] push pop length and not substr\n# OBS!   Rockad, en passant samt bondeförvandling hanteras ej.\n#        Flytta pjäserna med musen. Klick utanför brädet innebär undo.\n\nclass Chess extends Application\n	reset : -> super\n	draw  : -> super\n	mousePressed : (mx,my) ->\napp = new Chess",
  a: "class Chess extends Application\n	reset : ->\n		super\n		@SIZE = 22\n		@X = 100\n		@Y = 100\n		@board = ['RNBQKBNR','PPPPPPPP','........','........','........','........','pppppppp','rnbqkbnr']\n		@history = []\n		@memory = null			\n	draw : ->\n		bg 0.5\n		textSize 0.9 * @SIZE\n		textAlign CENTER,CENTER\n		rectMode CENTER\n		sc()\n		for i in range 8\n			for j in range 8\n				if (i+j)%2 == 0 then fc 0.6 else fc 0.8\n				x = @X-3.5*@SIZE+@SIZE*i\n				y = @Y-3.5*@SIZE+@SIZE*(7-j)\n				if _.isEqual @memory,[i,j] then fc 0,1,0\n				rect x,y, @SIZE, @SIZE\n				piece = @board[j][i]\n				if piece in \"RNBQKP\" then fc 0.95 else fc 0\n				if piece != '.'\n					if piece in \"pP\" then circle x,y,5 else text piece.toUpperCase(),x,y\n	setCharAt : (i,j,chr) ->\n    @board[j] = @board[j].substr(0,i) + chr + @board[j].substr(i+1)\n	move : (a,b) -> \n		[i1,j1] = a\n		[i2,j2] = b\n		taken = @board[j2][i2]\n		@setCharAt i2,j2, @board[j1][i1]\n		@setCharAt i1,j1,' '\n		@history.push [a,b,taken] 	\n	undo : () ->\n		if @history.length == 0 then return\n		[a,b,taken] = @history.pop()			\n		[i1,j1] = a\n		[i2,j2] = b\n		@setCharAt i1,j1, @board[j2][i2]\n		@setCharAt i2,j2, taken\n	mousePressed : (mx,my) ->\n		i = int (mx-20)/20\n		j = 7 - int (my-20)/20\n		if 0 <= i <= 7 and 0 <= j <= 7\n			if @memory == null\n				@memory = [i,j]\n			else\n				if not _.isEqual @memory,[i,j] then @move @memory,[i,j]\n				@memory = null\n		else\n			@undo()\n\napp = new Chess \"a\"\n",
  c: {
    app: "reset()"
  }
};

ID262 = {
  b: "# LOC:63 sc fc sw range # text textAlign textSize class extends constructor new @ super ->\n#        point quad dist for in if then else << - -- + ++ * != & ^ ~ split\n# Se länken Nand2Tetris, sidan 36, för mer information!\n\nclass ALU extends Application\n	reset : -> super\n	draw  : -> super\n	mousePressed : (mx,my) ->	\napp = new ALU",
  a: "class ALU extends Application\n	reset : -> \n		super\n		@x = 3\n		@y = 5\n		@flags = 0\n		@BUTTONS = [[5,1],[7,1],[9,1],[11,1],[13,1],[15,1],[3,3],[5,3],[15,3],[17,3]]\n\n	draw1 : (value,x0,y0) ->\n		sc()\n		fc 1,1,0\n		text value, x0,y0\n		for i in range 16\n			if (value & 1<<(15-i)) != 0 then fc 1 else fc 0.75\n			if (value & 1<<(15-i)) != 0 then r=2.5 else r=1\n			circle x0-40+3+5*i,y0+20,r\n\n	draw : -> \n		textAlign CENTER,CENTER\n		fc 1,1,0\n		quad 0,80, 200,80, 140,120, 60,120\n		[z,zr,ng] = @calc()\n		@draw1 @x,40,50\n		@draw1 @y,160,50\n		@draw1  z,100,130\n		flags = \"zx nx zy ny f no\".split \" \"\n		sc()\n		textSize 16\n		for i in range 6\n			[x,y] = @BUTTONS[i]\n			fc 1,0,0\n			circle 10*x,10*y,10\n			if @flags & 1<<i then fc 1 else fc 0.5\n			text flags[i],10*x,10*y\n		for ch,i in \"-+-+\"\n			[x,y] = @BUTTONS[6+i]\n			fc 1,0,0\n			circle 10*x,10*y,10\n			fc 1\n			text ch, 10*x,10*y\n		if zr==1 then fc 1 else fc 0.5\n		text \"zr\",90,170\n		if ng==1 then fc 1 else fc 0.5\n		text \"ng\",110,170\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for button,i in @BUTTONS\n			if dist(10*button[0],10*button[1],mx,my) < 10 then index = i\n		if 0 <= index <= 5 then @flags ^= 1<<index\n		if index == 6 then @x--\n		if index == 7 then @x++\n		if index == 8 then @y--\n		if index == 9 then @y++\n\n	calc : ->\n		x=@x\n		if @flags & 1 then x=0\n		if @flags & 2 then x=~x \n		y=@y\n		if @flags & 4 then y=0\n		if @flags & 8 then y=~y \n		if @flags & 16 then out = x+y else out = x&y\n		if @flags & 32 then out = ~out\n		if out==0 then zr=1 else zr=0\n		if out<0 then ng=1 else ng=0\n		[out,zr,ng]\n\napp = new ALU \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Nand2Tetris: "http://www.nand2tetris.org/chapters/chapter%2002.pdf"
  }
};

ID263 = {
  b: "# LOC:71 bg sc fc range # / % + * - == >= ++ -- \"\" [] {} push class extends constructor new @ super ->\n#        rect text textAlign for in if then else toLowerCase indexOf _.create prototype length @readText\n\n# De 36 rutorna numreras:\n#   0 1 2 3 4 5\n#   6 7 8 9 a b\n#   c d e f g h\n#   i j k l m n\n#   o p q r s t\n#   u v w x y z\n#\n# Placering av fordon:\n#   horisontellt: A=2 B=3\n#   vertikalt:    C=2 D=3\n# \n# Lösningar:\n# 	Bilarna namnges i följden XABCDEFGHIJKLMNOPQR\n# 	liten bokstav: vänster/uppåt\n# 	stor bokstav:  höger/nedåt\n\nclass Car\n	constructor : (ch,wh,@c) ->\n	render      : ->\n	move        : (d) ->\n\nclass RushHour extends Application\n	constructor : (@name) ->\n		super @name\n		if @cars then @cars = (_.create(Car.prototype, car) for car in @cars)	\n	reset      : -> super\n	draw       : -> super\n	enter_cars : -> # Ad0sBwCoD569\n	enter_move : -> # bbbEEEAfdccGGXXXXX\n	begin      : ->\n	backward   : (n=1) ->\n	forward    : (n=1) ->\n	end        : ->\n\napp = new RushHour\n",
  a: "class Car\n	constructor : (ch,wh,@c) ->\n		index = \"0123456789abcdefghijklmnopqrstuvwxyz\".indexOf ch\n		@i = index % 6\n		@j = int index / 6\n		[@w,@h] = wh\n\n	render : -> \n		fcc (@c+1) % 8\n		rect 40+20*@i+2, 40+20*@j+2, 20*@w-4, 20*@h-4\n		fc 0\n		tcc (@c+1) % 8\n		name = \"XABCDEFGHIJKLMNOP\"[@c]\n		small = name.toLowerCase()\n		text small, 50+20*@i,        50+20*@j\n		text name,  50+20*(@i+@w-1), 50+20*(@j+@h-1)\n\n	move : (d) -> # -1 eller +1\n		if @w == 1 then @j += d\n		if @h == 1 then @i += d\n\nclass RushHour extends Application\n\n	constructor : (@name) ->\n		super @name\n		if @cars then @cars = (_.create(Car.prototype, car) for car in @cars)\n\n	reset : ->\n		super\n		@enter_cars1 \"Ad0sBwCoD569\"\n		@enter_move1 \"bbbEEEAfdccGGXXXXX\"\n		@begin()\n\n	draw : ->\n		textAlign CENTER,CENTER\n		bg 0\n		sc()\n		fc 0.5\n		rect 40,40,120,120\n		rect 160,80,40,20\n		fc 1\n		sc()\n		for i in range 6\n			text \"012345\"[i],30,50+20*i\n			text \"012345\"[i],50+20*i,170\n		for car in @cars \n			car.render()\n\n	enter_cars : -> @enter_cars1 @readText() \n	enter_cars1 : (s) ->\n		@cars = []\n		@moves = \"\"\n		@index = 0\n		for ch in s\n			if ch in \"ABCD\" then wh = {A:[2,1], B:[3,1], C:[1,2], D:[1,3]}[ch]\n			else @cars.push new Car ch,wh,@cars.length\n\n	enter_move : -> @enter_move1 @readText() \n	enter_move1 : (s) ->\n		@moves = @moves[...@index]\n		@moves += s \n		@forward s.length\n		\n	begin : -> @backward @index \n	backward : (n=1) ->\n		for i in range n\n			if @index == 0 then return\n			@index--\n			@bothward \"XABCDEFGHIJKLMNO\",\"xabcdefghijklmno\"\n	forward : (n=1) ->\n		for i in range n\n			if @index >= @moves.length then return\n			@bothward \"xabcdefghijklmno\",\"XABCDEFGHIJKLMNO\"\n			@index++\n	end : -> @forward @moves.length - @index\n\n	bothward : (a,b) ->\n		i = a.indexOf @moves[@index]\n		j = b.indexOf @moves[@index]\n		if i >= 0 then @cars[i].move -1\n		if j >= 0 then @cars[j].move +1\n\napp = new RushHour \"a\"",
  c: {
    app: "reset()|enter_cars()|enter_move()|begin()|backward()|forward()|end()"
  },
  e: {
    RushHour: "https://en.wikipedia.org/wiki/Rush_Hour_(board_game)"
  }
};

ID264 = {
  b: "# LOC:85 bg fc sc circle # [] push length int .. + - * / % %% == < & << if then else rectMode rect push pop not \"\" split join\n#        parseInt _.isEqual text textAlign textSize rectMode while and constrain class extends constructor new @ super ->\n# OBS: Du bör använda variabeln rubikSquareData.\n\nclass RubikSquare extends Application\n	reset : -> \n	draw : ->\n	mousePressed : (mx,my) ->\napp = new RubikSquare   ",
  a: "class RubikSquare extends Application\n	reset : -> \n		super\n		@BUTTONS = [[4,3,3,3],[10,3,3,3],[16,3,3,3], [4,9,3,3],[10,9,3,3],[16,9,3,3], [4,15,3,3],[10,15,3,3],[16,15,3,3], [4,19,3,1],[10,19,3,1],[16,19,3,1]]\n		@seed = 0\n		@level = 1\n		@history = []\n		@memory = -1\n		@createGame()\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		if @level >= @history.length and _.isEqual @board,[0,1,2,0,1,2,0,1,2] then d=1 else d=-1\n		@level = constrain @level+d,1,6\n		@history = []\n		@createGame()\n\n	createGame : ->\n		bigstring = rubikSquareData[@level]\n		arr = bigstring.split ' '\n		s = arr[@randint(arr.length)]\n		@board = (parseInt(ch) for ch in s)\n\n	move : (m,d,board) ->\n		[i,j,k] = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]][m]\n		bd = board[..]\n		[a,b,c] = [bd[i],bd[j],bd[k]]\n		if d==0 then [a,b,c] = [b,c,a] else [a,b,c] = [c,a,b]\n		[bd[i],bd[j],bd[k]] = [a,b,c]\n		bd\n\n	draw : ->\n		bg 0\n		textAlign CENTER,CENTER\n		textSize 20\n		rectMode CENTER,CENTER\n		for c,i in @board\n			sc 1\n			if c==0 then fc 1,0,0\n			if c==1 then fc 0,1,0\n			if c==2 then fc 0,0,1\n			[x,y,w,h] = @BUTTONS[i]\n			rect 10*x,10*y,20*w,20*h\n		if @memory >= 0 \n			[x,y,w,h] = @BUTTONS[@memory]\n			fc 0\n			sc()\n			circle 10*x,10*y,10\n		[x,y,w,h] = @BUTTONS[10]\n		fc 1,1,0\n		sc()\n		text @level-@history.length,10*x,10*y\n		if @history.length > 0\n			[x,y,w,h] = @BUTTONS[9]\n			text \"undo\",10*x,10*y\n			[x,y,w,h] = @BUTTONS[11]\n			text \"new\",10*x,10*y\n\n	undo : -> \n		if @history.length == 0 then return\n		@board = @history.pop()\n		@memory = -1\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y,w,h],i in @BUTTONS\n			if x-w <= mx/10 <= x+w and y-h <= my/10 <= y+h then index = i\n		if 0 <= index < 9\n			if @memory == -1 \n				@memory = index \n			else if @memory == index \n				@memory = -1\n			else\n				hash = \n					\"01\":[0,1], \"02\":[0,0], \"10\":[0,0], \"12\":[0,1], \"20\":[0,1], \"21\":[0,0]\n					\"34\":[1,1], \"35\":[1,0], \"43\":[1,0], \"45\":[1,1], \"53\":[1,1], \"54\":[1,0]\n					\"67\":[2,1], \"68\":[2,0], \"76\":[2,0], \"78\":[2,1], \"86\":[2,1], \"87\":[2,0]\n					\"03\":[3,1], \"06\":[3,0], \"30\":[3,0], \"36\":[3,1], \"60\":[3,1], \"63\":[3,0]\n					\"14\":[4,1], \"17\":[4,0], \"41\":[4,0], \"47\":[4,1], \"71\":[4,1], \"74\":[4,0]\n					\"25\":[5,1], \"28\":[5,0], \"52\":[5,0], \"58\":[5,1], \"82\":[5,1], \"85\":[5,0]\n				pair = hash[\"\" + @memory + index] \n				if pair\n					[m,d] = pair\n					@history.push @board[..]\n					@board = @move m,d,@board\n					@memory = -1\n		if index==9 then @undo()\n		if index==11 then @newGame()\n\napp = new RubikSquare \"a\"   \n		",
  c: {
    app: "reset()"
  }
};

ID265 = {
  b: "# LOC:65 bg fc sc range # %% * / + [] text textAlign textSize for in if then else return\n#        {} and < != == push pop length constrain class extends constructor new @ super ->\n\nclass Shortcut extends Application\n	reset : -> super\n	draw : -> super\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Shortcut  ",
  a: "class Shortcut extends Application\n	reset : -> \n		super\n		@W = 33\n		@H = 25\n		@seed = 0\n		@level = 1\n		@buttons = [[50,50,0],[150,50,0],[33,125,'/2'],[100,125,'+2'],[167,125,'*2'], [33,175,'undo'],[100,175,1],[167,175,'new']]\n		@createGame()\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	draw : ->\n		@buttons[0][2] = @a\n		@buttons[1][2] = @b\n		@buttons[6][2] = @level - @history.length\n		bg 0.5\n		textAlign CENTER,CENTER\n		textSize 30\n		sc()\n		for [x,y,txt],i in @buttons\n			if i in [0,1,6] then fc 0 else fc 1,1,0\n			text txt,x,y\n	newGame : ->\n		if @level >= @history.length and @a == @b then d=1 else d=-1\n		@level = constrain @level+d,1,16\n		@createGame()\n	createGame : ->\n		@history = []\n		@a = 1 + @randint 20\n		q1 = [@a]\n		q2 = []\n		visited = {}\n		visited[@a] = true\n		expand = (n) ->\n			if visited[n] then return\n			visited[n] = true\n			q2.push n\n		for level in range @level\n			for nr in q1\n				expand nr+2\n				expand nr*2\n				expand nr/2 if nr%2==0\n			q1 = q2\n			q2 = []\n		@b = @selectTarget q1 #[@randint(q1.length)]\n	selectTarget : (lst) -> # within 1..1000, if possible\n		bs = (x for x in lst when 1 <= x <= 1000)\n		return bs[@randint(bs.length)] if bs.length > 0\n		_.min lst\n	undo : -> \n		if @history.length == 0 then return\n		@a = @history.pop()\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y,txt],i in @buttons\n			if x-@W < mx < x+@W and  y-@H < my < y+@H \n				index = i\n		a = -1\n		if index == 2 and @a % 2 == 0 then a = @a / 2\n		if index == 3 then a = @a + 2\n		if index == 4 then a = @a * 2\n		if index == 5 then @undo()\n		if index == 7 then @newGame()\n		if a != -1 \n			@history.push @a\n			@a = a \n\napp = new Shortcut \"a\"   \n		",
  c: {
    app: "reset()"
  }
};

ID266 = {
  b: "# LOC:80 bg fc sc range # * / + %% [] line circle text textAlign textSize for in if then else return int\n#        {} dist _.isEqual and < != == push pop length constrain class extends constructor new @ super ->\n\nclass Complex extends Application\n	reset : -> super\n	draw : -> super\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Complex  ",
  a: "class Complex extends Application\n	reset : -> \n		super\n		@RADIUS = 25\n		@buttons = [[30,130,'m'],[70,170,'*i'],[130,170,'*2'],[170,130,'+1'],[30,30,'undo'], [170,30,'new']]\n		@seed = 0\n		@level = 1\n		@createGame()\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	gr : ->\n		sc 1,1,1,0.5\n		for i in range 21\n			line 0, 10 * i, 200, 10 * i\n			line 10 * i, 0, 10 * i, 200\n		sc 1,1,1\n		line 100,0, 100,200\n		line 0,100, 200,100\n	draw : ->\n		@buttons[4][2] = @level - @history.length\n		bg 0\n		@gr()\n		textAlign CENTER,CENTER\n		textSize 25\n		sc()\n		fc 1,0,0\n		circle 100+10*@b[0], 100-10*@b[1], 5\n		fc 0,1,0\n		circle 100+10*@a[0], 100-10*@a[1], 4\n		for [x,y,txt],i in @buttons\n			fc 1,1,0,0.4\n			circle x,y,@RADIUS\n			fc 1,1,0\n			text txt,x,y\n	newGame : ->\n		if @level >= @history.length and _.isEqual(@a,@b) then d=1 else d=-1\n		@level = constrain @level+d,1,16\n		@createGame()\n	createGame : ->\n		@history = []\n		@a = [-10 + @randint(20), -10 + @randint(20)]\n		q1 = [@a]\n		q2 = []\n		visited = {}\n		visited[@a] = true\n		expand = (n) ->\n			if visited[n] then return\n			if n[0]*n[0] + n[1]*n[1] > 1000 then return\n			visited[n] = true\n			q2.push n\n		for level in range @level\n			for [x,y] in q1\n				expand [y,x]\n				expand [-y,x]\n				expand [2*x,2*y]\n				expand [x+1,y]\n			q1 = q2\n			q2 = []\n		@b = @selectTarget q1\n	selectTarget : (lst) -> # within 21x21 window, if possible\n		bs = ([x,y] for [x,y] in lst when -10 <= x <= 10 and -10 <= y <= 10)\n		return bs[@randint(bs.length)] if bs.length > 0\n		_.min lst, ([x,y]) -> dist 0,0,x,y\n	undo : -> \n		if @history.length == 0 then return\n		@a = @history.pop()\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y,txt],i in @buttons\n			if dist(mx,my,x,y) < @RADIUS then index = i\n		[x,y] = @a\n		a = []\n		if index == 0 then a = [y,x]\n		if index == 1 then a = [-y,x]\n		if index == 2 then a = [2*x,2*y]\n		if index == 3 then a = [x+1,y]\n		if index == 4 then @undo()\n		if index == 5 then @newGame()\n		if a.length != 0\n			@history.push @a\n			@a = a \n\napp = new Complex \"a\"   \n		",
  c: {
    app: "reset()"
  },
  e: {
    "Komplexa tal": "http://www.matteboken.se/lektioner/matte-4/komplexa-tal/rakna-med-komplexa-tal"
  }
};
