// Generated by CoffeeScript 1.11.1
var ID242, ID244, ID245, ID246, ID247, ID248, ID249;

ID242 = {
  b: "# LOC:49 sc bg sw range # for in if then + line class constructor extends new @\n\nclass Cartesius\n	constructor : (x,y,c) ->\n	go          : (dx,dy) ->\n	down        : (d) ->\n	left        : (d) ->\n\nclass Braider extends Application\n	braid   : (type) ->\n	draw    : ->\n	forward : ->\n	back    : ->\napp = new Braider",
  a: "class Cartesius\n	constructor : (@x,@y,@c) ->\n	go : (dx,dy) ->\n		scc @c\n		line @x,@y,@x+dx,@y+dy\n		[@x,@y] = [@x+dx,@y+dy]\n	down : (d) -> @go 0,d\n	left : (d) -> @go -d,0\n\nclass Braider extends Application\n\n	braid : (@type) ->\n		@n = 0\n		@forward()\n	draw : ->\n		if @type==1\n			sw 5\n			a = new Cartesius 200,20, 1 # röd\n			for i in range @n\n				a.go -20,20\n		if @type==2\n			sw 5\n			a = new Cartesius 200,20, 1 # röd\n			b = new Cartesius 190,10, 2 # grön\n			for i in range @n\n				if i%4 == 0 then b.down 20\n				if i%4 == 1 then a.left 20\n				if i%4 == 2 then a.down 20\n				if i%4 == 3 then b.left 20\n		if @type==3\n			sw 5\n			a = new Cartesius 200,30, 1\n			b = new Cartesius 190,10, 2\n			c = new Cartesius 180,20, 3\n			for i in range @n\n				if i%6 == 0 then b.down 30\n				if i%6 == 1 then a.left 30\n				if i%6 == 2 then c.down 30\n				if i%6 == 3 then b.left 30\n				if i%6 == 4 then a.down 30\n				if i%6 == 5 then c.left 30\n		if @type==4\n			sw 10\n			a = new Cartesius 150,40, 1 # röd\n			b = new Cartesius 170,20, 2 # grön\n			c = new Cartesius 160,30, 3 # gul\n			d = new Cartesius 190,50, 4 # blå\n			for i in range @n\n				if i%12 == 0 then b.down 50\n				if i%12 == 1 then c.left 30; c.down 30\n				if i%12 == 2 then d.left 50\n				if i%12 == 3 then a.down 50\n				if i%12 == 4 then b.left 50\n				if i%12 == 5 then c.down 50\n				if i%12 == 6 then d.left 30; d.down 30\n				if i%12 == 7 then a.left 50\n				if i%12 == 8 then b.left 30; b.down 30\n				if i%12 == 9 then d.down 50\n				if i%12 == 10 then c.left 50\n				if i%12 == 11 then a.left 30; a.down 30\n\n	forward : -> @n++\n	back : -> @n--\n\napp = new Braider \"a\"",
  c: {
    app: "braid 1|braid 2|braid 3|braid 4|forward()|back()"
  },
  e: {
    braid: "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"
  }
};

ID244 = {
  b: "# LOC:46 bg sc fc range @readText # + - * / of {} in [] shift unshift\n#        text textSize textAlign length for Math.sqrt Math.PI splice\n#        parseFloat \"\" split class extends constructor new @ super ->\n# TIPS! Börja med de fyra räknesätten.\n#       @words ska kunna utökas med \":\". T ex \": sq dup *\"\n#       Definiera t ex invers, distans och parallella motstånd\n\nclass Kalkylator extends Application\n	reset : ->\n		super\n	draw  : ->\n	chs   : -> # ( n -- n )\n	swap  : -> # ( a b -- b a )\n	drop  : -> # ( n -- )\n	dup   : -> # ( n -- n n )\n	sqrt  : -> # ( n -- n )\n	clr   : -> # ( a b -- )\n	pi    : -> # ( -- n)\n	enter : -> # inmatning från textrutan under kommandolistan.\napp = new Kalkylator",
  a: "class Kalkylator extends Application\n	reset : ->\n		super\n		@stack = [0,1,2,3]\n		@words = {\"sq\":[\"dup\",\"*\"]}\n	draw : ->\n		bg 0\n		sc()\n		textSize 32\n		textAlign RIGHT, BOTTOM\n		fc 1,0,0\n		for value,i in _.first @stack,5\n			s = \"\" + value\n			text s[0..9],190, 200 - i*40\n\n	shift : -> @stack.shift()\n	over : -> @stack.splice(1,1)[0]\n	unshift : (item) -> @stack.unshift item\n	chs : -> @unshift -@shift()\n	swap : -> [@stack[0],@stack[1]] = [@stack[1],@stack[0]]\n	drop : -> @shift()\n	dup : -> @unshift @stack[0]\n	sqrt : -> @unshift Math.sqrt @shift()\n	clr : -> @stack = []\n	pi : -> @unshift Math.PI\n\n	execute : (arr) ->\n		for cmd in arr\n			if cmd==\"\" then continue\n			if cmd=='+' then @unshift @shift() + @shift()\n			else if cmd=='*' then @unshift @shift() * @shift()\n			else if cmd=='/' then @unshift @over() / @shift()\n			else if cmd=='-' then @unshift @over() - @shift()\n			else if cmd=='chs' then @chs()\n			else if cmd=='swap' then @swap()\n			else if cmd=='drop' then @drop()\n			else if cmd=='dup' then @dup()\n			else if cmd=='sqrt' then @sqrt()\n			else if cmd=='clr' then @clr()\n			else if cmd=='pi' then @pi()\n			else if cmd of @words then @execute @words[cmd]\n			else @stack.unshift eval cmd\n\n	enter : ->\n		commands = @readText()\n		if commands==\"\" then return\n		arr = commands.split ' '\n		if arr[0]==':' then @words[arr[1]] = arr[2..]\n		else @execute arr\n\napp = new Kalkylator \"a\"",
  c: {
    app: "reset()|chs()|swap()|drop()|dup()|sqrt()|clr()|pi()|enter()"
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
};

ID245 = {
  b: "# LOC:47 bg fc sc range # + * - % < == != dist for in [] push pop length quad circle\n#        if then else text textAlign textSize class extends constructor new @ super ->\n\nclass Hex extends Application\n	reset : ->\n		super\n	draw : ->\n	newGame : ->\n	undo : ->\n	mousePressed : (mx,my) ->\napp = new Hex",
  a: "class Hex extends Application\n	reset : ->\n		super\n		@A = 6\n		@B = 5\n		@C = 3\n		@newGame()\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for i in range -5,6\n			for j in range -5,6\n				x = 100 + i*(2*@A+1) + @A*j\n				y = 100 + j*(2*@B+@C-1)\n				if dist(x,y,mx,my) < 7 then index = 11*(j+5)+i+5\n		if index >= 0 and @board[index] == 0\n			@history.push index\n			n = @history.length\n			if n % 2 == 0 then n = -n\n			@board[index] = n\n\n	newGame : ->\n		@history = []\n		@board = Array(11*11).fill 0\n\n	undo : ->\n		if @history.length > 0\n			index = @history.pop()\n			@board[index] = 0\n\n	draw : ->\n		bg 0.5\n		textAlign CENTER,CENTER\n		textSize 9\n		for i in range -5,6\n			for j in range -5,6\n				index = 11*(j+5)+i+5\n				x = 100+i*(2*@A+1) + @A*j\n				y = 100+j*(2*@B+@C-1)\n				bc = @B+@C\n				sc 0,1,0\n				fc 0,1,0\n				quad x,y-bc, x,y+bc, x-@A,y+@C, x-@A,y-@C\n				quad x,y-bc, x,y+bc, x+@A,y+@C, x+@A,y-@C\n				n = @board[index]\n				if n != 0\n					if n>0 then fc(1) else fc(0)\n					circle x,y,6\n					sc()\n					if n>0 then fc(0) else fc(1)\n					text abs(n),x,y\n\napp = new Hex \"a\"",
  c: {
    app: "reset()|newGame()|undo()"
  },
  e: {
    Play: "http://www.lutanho.net/play/hex.html",
    Wikipedia: "https://en.wikipedia.org/wiki/Hex_(board_game)"
  }
};

ID246 = {
  b: "# LOC:46 bg sc fc sw # [] * + line text textSize textAlign constrain dist\n#        splice break for in class extends constructor new @ super ->\n\nclass PickingBerries extends Application\n	reset      : ->\n		super\n	draw       : ->\n	left       : ->\n	right      : ->\n	up         : ->\n	down       : ->\n	snailSpeed : ->\n	slowSpeed  : ->\n	highSpeed  : ->\n	warpSpeed  : ->\n	pick       : ->\napp = new PickingBerries",
  a: "class PickingBerries extends Application\n\n	reset : ->\n		super\n		@SPEEDS = [1,5,20,50]\n		@x = 100\n		@y = 100\n		@speed = 2 # 0..3\n		@clicks = 0\n		@xs = [100,189,124,196,13,187,12,153,32,131]\n		@ys = [107,175,138,188,37,78,168,31,20,188]\n		@moves = \"\"\n		@dxdy = [[1,0],[0,1],[-1,0],[0,-1]]\n\n	draw : ->\n		bg 0\n		rectMode CENTER\n		sc 1\n		sw 1\n		rect @x,@y,2*@SPEEDS[@speed],2*@SPEEDS[@speed]\n		for [dx,dy] in @dxdy\n			for i in range 4\n				point @x+dx*@SPEEDS[i], @y+dy*@SPEEDS[i]\n\n		fc 1,1,0\n		sc()\n		textSize 20\n		textAlign CENTER,CENTER\n		text @clicks,100,180\n\n		sc 1,0,0\n		sw 2\n		for [x,y] in _.zip @xs,@ys\n			line x-3,y-3,x+3,y+3\n			line x+3,y-3,x-3,y+3\n\n	move : (i) ->\n		[dx,dy] = @dxdy[i]\n		@x += dx * @SPEEDS[@speed]\n		@y += dy * @SPEEDS[@speed]\n		@clicks++\n		@moves += 'abcd'[i]\n\n	setSpeed : (index) ->\n		@speed = index\n		@moves += index\n\n	right   : -> @move 0\n	down    : -> @move 1\n	left    : -> @move 2\n	up      : -> @move 3\n\n	snailSpeed : -> @setSpeed 0\n	slowSpeed  : -> @setSpeed 1\n	highSpeed  : -> @setSpeed 2\n	warpSpeed  : -> @setSpeed 3\n\n	step : (d) ->\n		@clicks++\n		constrain @zoom+d,0,3\n	pick : ->\n		for [x,y],i in _.zip @xs,@ys\n			if dist(x,y,@x,@y) <= 2\n				@xs.splice i,1\n				@ys.splice i,1\n				break\n		@clicks++\n\napp = new PickingBerries \"a\"",
  c: {
    app: "reset()|left()|right()|up()|down()|snailSpeed()|slowSpeed()|highSpeed()|warpSpeed()|pick()"
  }
};

ID247 = {
  b: "# LOC:47 bg fc # [] rect %% + ++ * == < and push dist length for in\n#        if then else class extends constructor new @ super ->\n\nclass Snake extends Application\n	reset : ->\n		super\n	setSize : (s) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new Snake",
  a: "class Snake extends Application\n	reset : ->\n		super\n		@BUTTONS = [[33,167],[167,167]]\n		@DIRS = [[1,0],[0,-1],[-1,0],[0,1]]\n		@setSize 20\n	setSize : (s) ->\n		@SIZE = s\n		@N = 200/@SIZE\n		@seed = 0\n		@segments = [[5,5]]\n		@dir = 0\n		@total = 2\n		@cherry = [3,3]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	update : ->\n		[di,dj] = @DIRS[@dir]\n		[i,j] = @segments[0]\n		i = (i+di) %% @N\n		j = (j+dj) %% @N\n		@segments.unshift [i,j]\n		if @total < @segments.length then @segments.pop()\n		if i==@cherry[0] and j==@cherry[1]\n			@total++\n			@cherry = [@randint(@N),@randint(@N)]\n	draw : ->\n		bg 1,0,0\n		[i,j] = @segments[0]\n		for [si,sj],k in @segments\n			if k>0 and i==si and j==sj then return\n		bg 1\n		[ci,cj] = @cherry\n		fc 1,0,0\n		rect @SIZE*ci,@SIZE*cj,@SIZE,@SIZE\n		for [i,j],k in @segments\n			if k==0 then fc 0 else fc 0.5\n			rect @SIZE*i,@SIZE*j,@SIZE,@SIZE\n		fc 0.9,0.9,0.9,0.3\n		for [x,y] in @BUTTONS\n			circle x,y,33\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y],i in @BUTTONS\n			if dist(x,y,mx,my) < 33 then index = i\n		if index == 0 then @dir = (@dir+1) %% 4\n		if index == 1 then @dir = (@dir-1) %% 4\n		@update()\n\napp = new Snake \"a\"",
  c: {
    app: "reset()|setSize 20|setSize 10|setSize 5|setSize 2"
  },
  e: {
    Snake: "https://en.wikipedia.org/wiki/Snake_(video_game)"
  }
};

ID248 = {
  b: "# LOC:43 bg fc # [] rect %% + ++ * == < and or push dist length for in\n#        if then else class extends constructor new @ super ->\n\nclass Snake4 extends Application\n	reset : ->\n		super\n	setSize : (s) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new Snake4",
  a: "class Snake4 extends Application\n	reset : ->\n		super\n		@BUTTONS = [[167,100], [100,33], [33,100], [100,167]]\n		@DIRS = [[1,0],[0,-1],[-1,0],[0,1]]\n		@setSize 20\n	setSize : (s) ->\n		@SIZE = s\n		@N = 200/@SIZE\n		@seed = 0\n		@segments = [[5,5]]\n		@dir = 0\n		@total = 2\n		@cherry = [3,3]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	update : ->\n		[di,dj] = @DIRS[@dir]\n		[i,j] = @segments[0]\n		i = i+di\n		j = j+dj\n		@segments.unshift [i,j]\n		if @total < @segments.length then @segments.pop()\n		if i==@cherry[0] and j==@cherry[1]\n			@total++\n			@cherry = [@randint(@N),@randint(@N)]\n	draw : ->\n		bg 1,0,0\n		[i,j] = @segments[0]\n		if i in [-1,@N] or j in [-1,@N] then return\n		bg 1\n		[ci,cj] = @cherry\n		fc 1,0,0\n		rect @SIZE*ci,@SIZE*cj,@SIZE,@SIZE\n		for [i,j],k in @segments\n			if k==0 then fc 0 else fc 0.5\n			rect @SIZE*i,@SIZE*j,@SIZE,@SIZE\n		fc 0.9,0.9,0.9,0.3\n		for [x,y] in @BUTTONS\n			circle x,y,33\n	mousePressed : (mx,my) ->\n		for [x,y],i in @BUTTONS\n			if dist(x,y,mx,my) < 33 and abs(i-@dir)!=2 then @dir = i\n		@update()\n\napp = new Snake4 \"a\"",
  c: {
    app: "reset()|setSize 20|setSize 10|setSize 5|setSize 2"
  },
  e: {
    Play: "http://patorjk.com/games/snake",
    Source: "https://github.com/patorjk/JavaScript-Snake/blob/master/js/snake.js",
    Wikipedia: "https://en.wikipedia.org/wiki/Snake_(video_game)"
  }
};

ID249 = {
  b: "# LOC:85 bg fc sc circle # [] push length int .. + - * / % %% == < & << if then else rectMode rect push pop not \"\" split join\n#        parseInt _.isEqual text textAlign textSize rectMode while and constrain class extends constructor new @ super ->\n# OBS: Du bör använda variabeln rubikSquareData.\n\nclass RubikSquare extends Application\n	reset : ->\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new RubikSquare",
  a: "class RubikSquare extends Application\n	reset : ->\n		super\n		@BUTTONS = [[4,3,3,3],[10,3,3,3],[16,3,3,3], [4,9,3,3],[10,9,3,3],[16,9,3,3], [4,15,3,3],[10,15,3,3],[16,15,3,3], [4,19,3,1],[10,19,3,1],[16,19,3,1]]\n		@seed = 0\n		@level = 1\n		@history = []\n		@memory = -1\n		@createGame()\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		if @level >= @history.length and _.isEqual @board,[0,1,2,0,1,2,0,1,2] then d=1 else d=-1\n		@level = constrain @level+d,1,6\n		@history = []\n		@createGame()\n\n	createGame : ->\n		bigstring = rubikSquareData[@level]\n		arr = bigstring.split ' '\n		s = arr[@randint(arr.length)]\n		@board = (parseInt(ch) for ch in s)\n\n	move : (m,d,board) ->\n		[i,j,k] = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]][m]\n		bd = board[..]\n		[a,b,c] = [bd[i],bd[j],bd[k]]\n		if d==0 then [a,b,c] = [b,c,a] else [a,b,c] = [c,a,b]\n		[bd[i],bd[j],bd[k]] = [a,b,c]\n		bd\n\n	draw : ->\n		bg 0\n		textAlign CENTER,CENTER\n		textSize 20\n		rectMode CENTER,CENTER\n		for c,i in @board\n			sc 1\n			if c==0 then fc 1,0,0\n			if c==1 then fc 0,1,0\n			if c==2 then fc 0,0,1\n			[x,y,w,h] = @BUTTONS[i]\n			rect 10*x,10*y,20*w,20*h\n		if @memory >= 0\n			[x,y,w,h] = @BUTTONS[@memory]\n			fc 0\n			sc()\n			circle 10*x,10*y,10\n		[x,y,w,h] = @BUTTONS[10]\n		fc 1,1,0\n		sc()\n		text @level-@history.length,10*x,10*y\n		if @history.length > 0\n			[x,y,w,h] = @BUTTONS[9]\n			text \"undo\",10*x,10*y\n			[x,y,w,h] = @BUTTONS[11]\n			text \"new\",10*x,10*y\n\n	undo : ->\n		if @history.length == 0 then return\n		@board = @history.pop()\n		@memory = -1\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y,w,h],i in @BUTTONS\n			if x-w <= mx/10 <= x+w and y-h <= my/10 <= y+h then index = i\n		if 0 <= index < 9\n			if @memory == -1\n				@memory = index\n			else if @memory == index\n				@memory = -1\n			else\n				hash =\n					\"01\":[0,1], \"02\":[0,0], \"10\":[0,0], \"12\":[0,1], \"20\":[0,1], \"21\":[0,0]\n					\"34\":[1,1], \"35\":[1,0], \"43\":[1,0], \"45\":[1,1], \"53\":[1,1], \"54\":[1,0]\n					\"67\":[2,1], \"68\":[2,0], \"76\":[2,0], \"78\":[2,1], \"86\":[2,1], \"87\":[2,0]\n					\"03\":[3,1], \"06\":[3,0], \"30\":[3,0], \"36\":[3,1], \"60\":[3,1], \"63\":[3,0]\n					\"14\":[4,1], \"17\":[4,0], \"41\":[4,0], \"47\":[4,1], \"71\":[4,1], \"74\":[4,0]\n					\"25\":[5,1], \"28\":[5,0], \"52\":[5,0], \"58\":[5,1], \"82\":[5,1], \"85\":[5,0]\n				pair = hash[\"\" + @memory + index]\n				if pair\n					[m,d] = pair\n					@history.push @board[..]\n					@board = @move m,d,@board\n					@memory = -1\n		if index==9 then @undo()\n		if index==11 then @newGame()\n\napp = new RubikSquare \"a\"\n",
  c: {
    app: "reset()"
  }
};
