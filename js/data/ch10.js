// Generated by CoffeeScript 1.11.1
var ch10;

ch10 = {
  Klocka: {
    b: "# LOC:44 fc sc circle range rd # point rect rectMode for in if then else \n#        translate push pop class extends constructor new @ super ->\n\nclass Klocka extends Application\n	reset  : -> super\n	draw   : -> super\n	hour   : (h) ->\n	minute : (m) ->\n	second : (s) ->\n\nklocka = new Klocka \"b\"",
    a: "class Klocka extends Application\n	reset : -> \n		super\n		@h=10\n		@m=9\n		@s=30\n	draw : ->\n		bg 0.5\n		rectMode CENTER\n		translate 100,100\n		@urtavla()\n		@visare (@h+@m/60.0)*30, 7,60,1,0,0\n		@visare (@m+@s/60.0)*6,5,80,0,1,0\n		@visare @s*6,2,80,1,1,0\n	hour   : (h) -> @adjust h,0,0\n	minute : (m) -> @adjust 0,m,0\n	second : (s) -> @adjust 0,0,s\n\n	adjust : (h,m,s) ->\n		@h+=h\n		@m+=m\n		@s+=s\n		t = 3600 * @h + 60 * @m + @s\n		@s = t %% 60\n		t = (t - @s) / 60\n		@m = t %% 60\n		t = (t - @m) / 60\n		@h = t %% 24\n\n	visare : (v,w,l,r,g,b) ->\n		push()\n		rd v-90\n		translate l/2,0\n		fc r,g,b\n		rect 0,0,l,w\n		pop()\n	urtavla : ->\n		fc 0\n		sc 1\n		sw 2\n		circle 0,0,90\n		fc 1\n		sc()\n		for i in range 60\n			circle 85,0, if i%5==0 then 3 else 2\n			rd 6\n\nklocka = new Klocka \"a\"",
    c: {
      klocka: "reset()|hour -1|hour +1|minute -1|minute +1|second -1|second +1"
    }
  },
  BouncingBalls: {
    b: "# LOC: 43 fc sw sc circle # + ++ - -- %% == push if then for in \n#         splice length _.create class constructor super extends new @\n\nclass Ball \n	constructor : ->\n	update      : (grav) ->\n	render      : (sel) ->\n\nclass BouncingBalls extends Application\n\n	constructor : (@name) ->\n		super @name\n		if @balls then @balls = (_.create Ball.prototype, ball for ball in @balls)\n\n	reset   : -> super\n	draw    : -> super\n	update  : -> \n	add     : -> \n	delete  : ->\n	selNext : -> \n	selPrev : -> \n	grow    : ->    \n	shrink  : ->  \n	nextCol : -> \n	prevCol : -> \n	gravity : ->\n\nbouncingBalls = new BouncingBalls \"b\"",
    a: "class Ball \n	constructor : ->\n		@x = 100\n		@y = 100\n		@r = 10\n		@c = 1\n		@dx = 3\n		@dy = 4\n	update : (grav) ->\n		@x += @dx\n		@y += @dy\n		if not (@r < @x < 200-@r) then @dx = - @dx\n		if not (@r < @y < 200-@r) then @dy = - @dy\n		if grav and @y < 200-@r then @dy += 1 \n	render : (sel) ->\n		fcc @c\n		sw 2\n		if sel then scc 7 else sc()\n		circle @x,@y,@r\n\nclass BouncingBalls extends Application\n\n	constructor : (@name) ->\n		super @name\n		if @balls then @balls = (_.create Ball.prototype, ball for ball in @balls)\n\n	reset : ->\n		super\n		@balls = []\n		@sel = -1\n		@grav = false\n	draw : ->\n		for ball,i in @balls\n			ball.render i==@sel, @grav\n	update : -> \n		for ball in @balls\n			ball.update(@grav)\n\n	add : -> \n		@balls.push new Ball\n		@sel = @balls.length - 1\n\n	delete :->\n		@balls.splice @sel, 1\n		if @sel >= @balls.length then @sel = @balls.length - 1  \n	selNext : -> @sel = (@sel + 1) %% @balls.length\n	selPrev : -> @sel = (@sel - 1) %% @balls.length\n	grow : ->    @balls[@sel].r++\n	shrink : ->  @balls[@sel].r--\n	nextCol : -> @balls[@sel].c = (@balls[@sel].c+1) %% 8\n	prevCol : -> @balls[@sel].c = (@balls[@sel].c-1) %% 8\n	gravity : -> @grav = not @grav \n\nbouncingBalls = new BouncingBalls \"a\"",
    c: {
      bouncingBalls: "reset()|update()|add()|delete()|selNext()|selPrev()|grow()|shrink()|nextCol()|prevCol()|gravity()"
    }
  },
  Braider: {
    b: "# LOC: 49 sc bg sw range # for in if then + line class constructor extends new @\n\nclass Cartesius\n	constructor : (x,y,c) ->\n	go          : (dx,dy) ->\n	down        : (d) ->\n	left        : (d) ->\n\nclass Braider extends Application\n	braid   : (type) -> \n	draw    : -> super\n	forward : ->\n	back    : ->\n\nbraider = new Braider \"b\"",
    a: "class Cartesius\n	constructor : (@x,@y,@c) ->\n	go : (dx,dy) ->\n		scc @c \n		line @x,@y,@x+dx,@y+dy\n		[@x,@y] = [@x+dx,@y+dy]\n	down : (d) -> @go 0,d\n	left : (d) -> @go -d,0\n\nclass Braider extends Application\n\n	braid : (@type) -> \n		@n = 0\n		@forward()\n	draw : ->\n		if @type==1\n			sw 5\n			a = new Cartesius 200,20, 1 # röd\n			for i in range @n\n				a.go -20,20\n		if @type==2\n			sw 5\n			a = new Cartesius 200,20, 1 # röd\n			b = new Cartesius 190,10, 2 # grön\n			for i in range @n\n				if i%4 == 0 then b.down 20\n				if i%4 == 1 then a.left 20\n				if i%4 == 2 then a.down 20\n				if i%4 == 3 then b.left 20\n		if @type==3\n			sw 5\n			a = new Cartesius 200,30, 1\n			b = new Cartesius 190,10, 2\n			c = new Cartesius 180,20, 3\n			for i in range @n\n				if i%6 == 0 then b.down 30\n				if i%6 == 1 then a.left 30\n				if i%6 == 2 then c.down 30\n				if i%6 == 3 then b.left 30\n				if i%6 == 4 then a.down 30\n				if i%6 == 5 then c.left 30\n		if @type==4\n			sw 10\n			a = new Cartesius 150,40, 1 # röd\n			b = new Cartesius 170,20, 2 # grön\n			c = new Cartesius 160,30, 3 # gul\n			d = new Cartesius 190,50, 4 # blå\n			for i in range @n\n				if i%12 == 0 then b.down 50\n				if i%12 == 1 then c.left 30; c.down 30\n				if i%12 == 2 then d.left 50\n				if i%12 == 3 then a.down 50\n				if i%12 == 4 then b.left 50\n				if i%12 == 5 then c.down 50\n				if i%12 == 6 then d.left 30; d.down 30\n				if i%12 == 7 then a.left 50\n				if i%12 == 8 then b.left 30; b.down 30\n				if i%12 == 9 then d.down 50\n				if i%12 == 10 then c.left 50\n				if i%12 == 11 then a.left 30; a.down 30\n\n	forward : -> @n++\n	back : -> @n--\n\nbraider = new Braider \"a\"",
    c: {
      braider: "braid 1|braid 2|braid 3|braid 4|forward()|back()"
    },
    e: {
      braid: "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"
    }
  },
  RecursiveCircle: {
    b: "# LOC:10 -> sc circle # if return < class extends constructor new @ super ->\n\nclass RecursiveCircle extends Application\n	reset   : -> super\n	draw    : -> super\n	circles : (x,y,r,level) ->\n	more    : -> \n	less    : -> \n\nrc = new RecursiveCircle \"b\"",
    a: "\nclass RecursiveCircle extends Application\n	reset : -> \n		super\n		@n = 0\n	draw : -> @circles 100,100,100,@n		\n	circles : (x,y,r,level) ->\n		circle x,y,r\n		if level <= 0 then return\n		@circles x-r/2, y, r/2, level-1\n		@circles x+r/2, y, r/2, level-1\n	more : -> @n = constrain @n+1,0,10\n	less : -> @n = constrain @n-1,0,10\n\nrc = new RecursiveCircle \"a\"",
    c: {
      rc: "reset()|more()|less()"
    }
  },
  EngineeringNotation: {
    b: "# LOC:28 fc sc bg # Math.floor Math.log10 constrain + - * / < ** text split\n#        textAlign textSize class extends constructor new @ super ->\n\nclass Engineering extends Application\n	reset : -> super\n	draw  : -> super \n	more  : -> \n	less  : -> \nengineering = new Engineering \"b\"   		",
    a: "class Engineering extends Application\n	reset : -> \n		super\n		@numbers = \"-273.15 1.6021766208e-19 3.1415926535 9.80665 101325 299792458 1073741824 6.022140857e23\"\n		@digits = 3\n		@prefixes = \"yzafpnµm kMGTPEZY\"\n	format : (x) -> \n		if x<0 then return \"-\" + @format(-x)\n		exponent = 3 * Math.floor Math.log10(x)/3\n		x = x / 10 ** exponent\n		if x < 10 then factor = 10 ** (@digits-1) \n		else if x < 100 then factor = 10 ** (@digits-2)\n		else factor = 10 ** (@digits-3)\n		Math.round(x * factor) / factor + @prefixes[8+exponent/3]\n	draw  : -> \n		bg 0\n		textAlign RIGHT,TOP\n		textSize 20\n		textFont \"monospace\"\n		fc 1,0,0\n		sc()\n		textAlign RIGHT,TOP\n		for nr,i in @numbers.split \" \"\n			x = parseFloat nr\n			if i<8 then text @format(1/x), 100-5,i*20\n			text @format(x), 200-5,i*20\n	more  : -> @digits = constrain @digits+1, 1,6\n	less  : -> @digits = constrain @digits-1, 1,6\n\nengineering = new Engineering \"a\"   		",
    c: {
      engineering: "reset()|more()|less()"
    },
    e: {
      EngineeringNotation: "https://en.wikipedia.org/wiki/Engineering_notation"
    }
  },
  Nim: {
    b: "# LOC:62 bg fc sc circle # * + - ^ if then else _.isEqual return <  \n#        constrain text textAlign textSize class extends constructor new @ super ->\n\nclass Nim extends Application\n	reset : -> \n		super\n		@seed = 0\n	draw  : -> super\n	newGame : -> \n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n	fraction : (x) -> x %% 1\n	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\nnim = new Nim \"b\"  ",
    a: "class Nim extends Application\n	reset : -> \n		super\n		@seed = 0\n		@radius = 30\n		@buttons = [[35,80],[100,80],[165,80], [35,150,'ok'],[100,150,'x'],[165,150,'hint']]\n		@newGame()\n		@init()\n\n	init : ->\n		@active = -1\n		@player = 0\n		@original = @board[..]\n\n	move : (index) ->\n		if @active in [index,-1]\n			@active = index\n			@board[@active] = constrain @board[@active]-1, 0, 99\n\n	fraction : (x) -> x %% 1\n	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n		@init()\n\n	ok : -> \n		if @active == -1 then return\n		@player = 1 - @player\n		@active = -1 \n		@original = @board[..]\n\n	cancel : ->\n		@board = @original\n		@active = -1 \n\n	draw : ->\n		textAlign CENTER,CENTER\n		textSize 32\n		bg 0\n		for [x,y,txt],i in @buttons\n			fc 0\n			sc 1\n			sw 2\n			if i<=2 and @active==-1 or @active==i then circle x,y,@radius\n			if i in [3,4] and @active!=-1 then circle x,y,@radius\n			if i==5 and @active==-1 then circle x,y,@radius\n			fc 1\n			sc()\n			if i<=2 then text @board[i],x,y \n			if i>=3 then text txt,x,y\n		fc 1,@player,0\n		circle 20 + @player * 160,20,10\n\n	hint : ->\n		if @active != -1 then return\n		[a,b,c] = @board\n		board = if (b^c) < a then [b^c,b,c] else if (a^c) < b then [a,a^c,c] else if (a^b) < c then [a,b,a^b] else [a,b,c]\n		if not _.isEqual(board,@board)\n			@board = board\n			@player = 1 - @player\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for button,i in @buttons\n			if dist(button[0],button[1],mx,my) < @radius then index = i\n		if index <= 2 then @move index\n		if index == 3 then @ok()\n		if index == 4 then @cancel()\n		if index == 5 then @hint()\n\nnim = new Nim \"a\"   \n		",
    c: {
      nim: "reset()|newGame()"
    },
    e: {
      Nim: "https://en.wikipedia.org/wiki/Nim",
      xor: "https://en.wikipedia.org/wiki/Bitwise_operation#XOR",
      Nimrod: "https://en.wikipedia.org/wiki/Nimrod_(computing)"
    }
  },
  ChessGame: {
    b: "# LOC:64 bg fc sc sw range # point rect rectMode class constructor new @\n#        if then else text textSize textAlign for in push split length indexOf\n\nclass Chess extends Application\n	reset : -> super\n	draw  : -> super\n	move  : (d) ->\n\nchess = new Chess \"b\"",
    a: "class Chess extends Application\n\n	reset : ->\n		super\n		@moves = \"e2e4 e7e5 g1f3 b8c6 f1c4\".split \" \"\n		@size = 22\n		@x = 100\n		@y = 100\n		@n = 0\n\n	putPieces : (pieces) ->\n		res = []\n		for i in range 64\n			res.push \"\" \n		arr = pieces.split \" \"\n		for piece in arr\n			if piece.length == 2\n				chr = \"o\"\n				sq = piece\n			else\n				chr = piece[0]\n				sq = piece[1..]\n			[col,row] = @getIndex sq\n			res[8*col+row] = chr	\n		res\n\n	getIndex : (sq) ->\n		col = \"abcdefgh\".indexOf sq[0]\n		row = \"12345678\".indexOf sq[1]\n		[col,row]\n		\n	render : (pieces,c) ->\n		fc c\n		sc c\n		for row in range 8\n			for col in range 8\n				piece = pieces[8*col+row]\n				x = @x - 3.5 * @size + col * @size\n				y = @y - 3.5 * @size + (7-row) * @size\n				if piece == \"o\"\n					sw @size/2\n					point x,y\n				else if piece in \"KQRBN\"\n					sw 1-c\n					text piece,x, 1+y		\n				\n	draw : ->\n		bg 0.5\n		textSize 0.9 * @size\n		textAlign CENTER,CENTER\n		rectMode CENTER\n		sc()\n		for i in range 8\n			for j in range 8\n				if (i+j)%2 == 1 then fc 0.4 else fc 0.6\n				rect @x-3.5*@size+@size*i, @y-3.5*@size+@size*j, @size, @size\n\n		white = @putPieces \"Ra1 Nb1 Bc1 Qd1 Ke1 Bf1 Ng1 Rh1 a2 b2 c2 d2 e2 f2 g2 h2\"\n		black = @putPieces \"Ra8 Nb8 Bc8 Qd8 Ke8 Bf8 Ng8 Rh8 a7 b7 c7 d7 e7 f7 g7 h7\"\n\n		for i in range @n\n			@movePiece @moves[i], if i%2==0 then white else black		\n\n		@render white,1\n		@render black,0\n\n	movePiece : (m,player) ->\n		[col1,row1] = @getIndex m[0..1]\n		[col2,row2] = @getIndex m[2..3]\n		player[col2*8+row2] = player[col1*8+row1]\n		player[col1*8+row1] = \"\"\n\n	move : (d) -> \n		@n += d\n		@n = constrain @n,0,@moves.length\n\nchess = new Chess \"a\"\n",
    c: {
      chess: "reset()|move -1|move 1"
    }
  },
  SpaceShip: {
    b: "# LOC:35 sc sw rd # point triangle translate cos sin radians \n#        push pop class extends constructor new @ super ->\n\nclass Shot\n	constructor : (@x,@y,@dir) ->\n	render      : ->	\n	move        : ->\n\nclass Ship extends Application\n	constructor : (@name) ->\n		super @name\n		if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)\n	reset   : -> super\n	draw    : -> super\n	left    : -> \n	right   : -> \n	forward : -> \n	shoot   : ->		\n\nship = new Ship \"b\"	",
    a: "class Shot\n	constructor : (@x,@y,@dir) ->\n	render : ->	point @x,@y \n	move : ->\n		@x += int 5 * cos radians @dir\n		@y += int 5 * sin radians @dir\n\nclass Ship extends Application \n\n	constructor : (@name) ->\n		super @name\n		if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)\n\n	reset : ->\n		super\n		@x = 100\n		@y = 100\n		@s = 10\n		@dir = 0\n		@shots = []\n\n	left    : -> @dir -= 5\n	right   : -> @dir += 5\n	forward : -> \n		@x += 5 * cos radians @dir\n		@y += 5 * sin radians @dir\n\n	shoot : ->\n		@shots.push new Shot int(@x), int(@y), @dir\n\n	draw : ->\n		push()\n		translate @x,@y\n		rd @dir\n		sc 1,1,0\n		sw 2\n		triangle 2*@s,0, -@s,@s, -@s,-@s\n		sw 5\n		point 0,0\n		pop()\n		for shot in @shots\n			shot.move()\n			shot.render()\n\nship = new Ship \"a\"	",
    c: {
      ship: "reset()|left()|right()|forward()|shoot()"
    }
  },
  PickingBerries: {
    b: "# LOC:46 bg sc fc sw # [] * + line text textSize textAlign constrain dist \n#        splice break for in class extends constructor new @ super ->\n\nclass PickingBerries extends Application\n	reset      : -> super\n	draw       : -> super\n	left       : -> \n	right      : -> \n	up         : -> \n	down       : -> \n	snailSpeed : ->\n	slowSpeed  : ->\n	highSpeed  : ->\n	warpSpeed  : ->\n	pick       : ->\n\nberries = new PickingBerries \"b\"",
    a: "class PickingBerries extends Application\n\n	reset : ->\n		super\n		@x = 100\n		@y = 100\n		@speed = 2 # 0..3\n		@speeds = [1,5,20,50]\n		@clicks = 0\n		@xs = [100,189,124,196,13,187,12,153,32,131]\n		@ys = [107,175,138,188,37,78,168,31,20,188]\n		@moves = \"\"\n		@dxdy = [[1,0],[0,1],[-1,0],[0,-1]]\n\n	draw : ->\n		bg 0\n		rectMode CENTER\n		sc 1\n		sw 1\n		rect @x,@y,2*@speeds[@speed],2*@speeds[@speed]\n		for [dx,dy] in @dxdy\n			for i in range 4\n				point @x+dx*@speeds[i], @y+dy*@speeds[i]\n		\n		fc 1,1,0\n		sc()\n		textSize 20\n		textAlign CENTER,CENTER\n		text @clicks,100,180\n\n		sc 1,0,0\n		sw 2\n		for [x,y] in _.zip @xs,@ys\n			line x-3,y-3,x+3,y+3\n			line x+3,y-3,x-3,y+3\n\n	move : (i) ->\n		[dx,dy] = @dxdy[i] 		\n		@x += dx * @speeds[@speed]\n		@y += dy * @speeds[@speed]\n		@clicks++\n		@moves += 'abcd'[i] \n\n	setSpeed : (index) ->\n		@speed = index\n		@moves += index\n\n	right   : -> @move 0\n	down    : -> @move 1\n	left    : -> @move 2\n	up      : -> @move 3\n	\n	snailSpeed : -> @setSpeed 0\n	slowSpeed  : -> @setSpeed 1\n	highSpeed  : -> @setSpeed 2\n	warpSpeed  : -> @setSpeed 3\n\n	step : (d) -> \n		@clicks++\n		constrain @zoom+d,0,3 \n	pick : ->\n		for [x,y],i in _.zip @xs,@ys\n			if dist(x,y,@x,@y) <= 2\n				@xs.splice i,1\n				@ys.splice i,1\n				break\n		@clicks++\n\nberries = new PickingBerries \"a\"",
    c: {
      berries: "reset()|left()|right()|up()|down()|snailSpeed()|slowSpeed()|highSpeed()|warpSpeed()|pick()"
    }
  }
};