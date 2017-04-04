// Generated by CoffeeScript 1.11.1
var ch12;

ch12 = {
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
  ColorPair: {
    b: "# LOC:41 fc circle # [] .. push dist length splice _.isEqual colorMode HSB\n#        for in class extends constructor new @ super ->\n\nclass ColorPair extends Application\n	reset : -> \n		super\n		@seed = 0\n	draw : -> super\n	mousePressed : (mx,my) ->\n	fraction : (x) -> x %% 1\n	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++\ncolorpair = new ColorPair \"b\"",
    a: "class ColorPair extends Application\n	reset : -> \n		super\n		@seed = 0\n		@level = 0\n		@changeLevel 1\n		@radius = 40\n\n	fraction : (x) -> x %% 1\n	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++\n\n	draw : -> \n		bg 1\n		sw 2\n		sc 1,1,1,0.5\n		colorMode HSB\n		for [x,y,c] in @circles\n			fill color c,100,100,0.5\n			circle x,y,@radius\n		\n	mousePressed : (mx,my) ->\n		hitlist = []\n		for [x,y,c],i in @circles\n			if dist(x,y,mx,my) < @radius then hitlist.push i \n		if hitlist.length == 1\n			i = hitlist[0]\n			circle = @circles[i]\n			if @memory == -1\n				@memory = circle[2]\n				@circles.splice i,1\n			else if _.isEqual(@memory, circle[2]) \n				@memory = -1\n				@circles.splice i,1\n				if @circles.length == 0 then @changeLevel 1\n			else\n				@changeLevel -1\n		else\n			@changeLevel -1\n\n	changeLevel : (d) ->\n		@memory = -1\n		@level = constrain @level+d, 1, 20\n		@circles = []\n		for i in range @level\n			c = int i * 360 / @level\n			@circles.push [@randint(200), @randint(200), c]\n			@circles.push [@randint(200), @randint(200), c]\n\ncolorpair = new ColorPair \"a\"",
    c: {
      colorpair: "reset()"
    },
    e: {
      ColorPair: "https://christernilsson.github.io/ColorPair"
    }
  },
  Kalkylator: {
    b: "# LOC:46 bg sc fc range @readText # + - * / of {} in [] shift unshift \n#        text textSize textAlign length for Math.sqrt Math.PI splice \n#        parseFloat \"\" split class extends constructor new @ super ->\n# TIPS! Börja med de fyra räknesätten. \n#       @words ska kunna utökas med \":\". T ex \": sq dup *\"\n#       Definiera t ex invers, distans och parallella motstånd\n\nclass Kalkylator extends Application\n	reset : -> super\n	draw  : -> super\n	chs   : -> # ( n -- n ) \n	swap  : -> # ( a b -- b a )\n	drop  : -> # ( n -- ) \n	dup   : -> # ( n -- n n )\n	sqrt  : -> # ( n -- n )\n	clr   : -> # ( a b -- )\n	pi    : -> # ( -- n)\n	enter : -> # inmatning från textrutan under kommandolistan.\n\nkalkylator = new Kalkylator \"b\"",
    a: "class Kalkylator extends Application\n	reset : ->\n		super\n		@stack = [0,1,2,3]\n		@words = {\"sq\":[\"dup\",\"*\"]}\n	draw : ->\n		bg 0\n		sc()\n		textSize 32\n		textAlign RIGHT, BOTTOM\n		fc 1,0,0\n		for value,i in _.first @stack,5\n			s = \"\" + value\n			text s[0..9],190, 200 - i*40\n\n	shift : -> @stack.shift()\n	over : -> @stack.splice(1,1)[0]\n	unshift : (item) -> @stack.unshift item \n	chs : -> @unshift -@shift()\n	swap : -> [@stack[0],@stack[1]] = [@stack[1],@stack[0]]\n	drop : -> @shift()\n	dup : -> @unshift @stack[0]\n	sqrt : -> @unshift Math.sqrt @shift()\n	clr : -> @stack = []\n	pi : -> @unshift Math.PI\n\n	execute : (arr) ->\n		for cmd in arr\n			if cmd==\"\" then continue\n			if cmd=='+' then @unshift @shift() + @shift()\n			else if cmd=='*' then @unshift @shift() * @shift()\n			else if cmd=='/' then @unshift @over() / @shift()\n			else if cmd=='-' then @unshift @over() - @shift()\n			else if cmd=='chs' then @chs()\n			else if cmd=='swap' then @swap()\n			else if cmd=='drop' then @drop()\n			else if cmd=='dup' then @dup()\n			else if cmd=='sqrt' then @sqrt()\n			else if cmd=='clr' then @clr()\n			else if cmd=='pi' then @pi()\n			else if cmd of @words then @execute @words[cmd]\n			else @stack.unshift eval cmd\n\n	enter : ->\n		commands = @readText()\n		if commands==\"\" then return\n		arr = commands.split ' '\n		if arr[0]==':' then @words[arr[1]] = arr[2..]\n		else @execute arr\n\nkalkylator = new Kalkylator \"a\"",
    c: {
      kalkylator: "reset()|chs()|swap()|drop()|dup()|sqrt()|clr()|pi()|enter()"
    },
    e: {
      parseInt: "https://www.w3schools.com/jsref/jsref_parseint.asp",
      stack: "https://sv.wikipedia.org/wiki/Stack_(datastruktur)",
      split: "https://coffeescript-cookbook.github.io/chapters/strings/splitting-a-string",
      "Omvänd Polsk Notation": "https://sv.wikipedia.org/wiki/Omv%C3%A4nd_polsk_notation",
      RPN: "https://en.wikipedia.org/wiki/Reverse_Polish_notation",
      "HP-35": "https://neil.fraser.name/software/hp-35",
      "Forth Haiku": "http://forthsalon.appspot.com/word-list"
    }
  },
  Hex: {
    b: "# LOC:49 bg fc sc range # + * - % < == != dist for in [] push pop length quad circle\n#        if then else text textAlign textSize class extends constructor new @ super ->\n\nclass Hex extends Application\n	reset : -> super\n	draw : ->\n	newGame : ->\n	undo : ->\n	mousePressed : (mx,my) ->\nhex = new Hex \"b\"",
    a: "class Hex extends Application\n	reset : ->\n		super\n		@a = 6\n		@b = 5\n		@c = 3\n		@newGame()\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for i in range -5,6\n			for j in range -5,6\n				x = 100 + i*(2*@a+1) + @a*j\n				y = 100 + j*(2*@b+@c-1)\n				if dist(x,y,mx,my) < 7 then index = 11*(j+5)+i+5\n		if index >= 0 and @board[index] == 0\n			@history.push index\n			n = @history.length\n			if n % 2 == 0 then n = -n \n			@board[index] = n \n\n	newGame : ->\n		@history = []\n		@board = []\n		for i in range 11*11\n			@board.push 0\n\n	undo : ->\n		if @history.length > 0\n			index = @history.pop()\n			@board[index] = 0\n\n	draw : ->\n		bg 0.5\n		textAlign CENTER,CENTER\n		textSize 9\n		for i in range -5,6\n			for j in range -5,6\n				index = 11*(j+5)+i+5\n				x = 100+i*(2*@a+1) + @a*j\n				y = 100+j*(2*@b+@c-1)\n				bc = @b+@c\n				sc 0,1,0\n				fc 0,1,0\n				quad x,y-bc, x,y+bc, x-@a,y+@c, x-@a,y-@c\n				quad x,y-bc, x,y+bc, x+@a,y+@c, x+@a,y-@c\n				n = @board[index]\n				if n != 0\n					if n>0 then fc(1) else fc(0)\n					circle x,y,6\n					sc()\n					if n>0 then fc(0) else fc(1)\n					text abs(n),x,y\n\nhex = new Hex \"a\"",
    c: {
      hex: "reset()|newGame()|undo()"
    },
    e: {
      Hex: "https://en.wikipedia.org/wiki/Hex_(board_game)"
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
