// Generated by CoffeeScript 1.11.1
var ID180, ID181, ID182, ID183, ID184, ID185, ID186, ID187, ID188;

ID180 = {
  b: "# LOC:12 bg fc sc # text textAlign textSize + - class extends constructor new @ super ->\n# Klicka på reset() om du får ett felmeddelande!\n\nclass Counter extends Application\n	reset : -> super\n	draw  : -> super\n	up    : -> \n	down  : -> \n	mousePressed : (mx,my) -> print \"mousePressed\",mx,my\n\ncounter = new Counter \"b\"     ",
  a: "class Counter extends Application\n	reset : -> \n		super\n		@counter = 0\n	up : -> @counter += 1\n	down : -> @counter -= 1\n	draw : ->\n		bg 0.5\n		fc 1,1,0\n		sc()\n		textAlign CENTER,CENTER\n		textSize 100\n		text @counter,100,100\n	mousePressed : (mx,my) -> if my < 100 then @counter += 1 else @counter -= 1\n\ncounter = new Counter \"a\"   		",
  c: {
    counter: "reset()|up()|down()"
  }
};

ID181 = {
  b: "# LOC:17 bg sc fc # for in [] '' text textSize textAlign textFont monospace\n#        int millis nf length unshift class extends constructor new @ super ->\n# OBS! Tiderna kan skilja med flera millisekunder. Sorry!\n\nclass Stopwatch extends Application\n	reset : -> super\n	draw  : -> super\n	stopp : -> \nstopwatch = new Stopwatch \"b\"",
  a: "class Stopwatch extends Application\n	reset : -> \n		super\n		@start = int millis()\n		@times = []\n		@count = 0\n	draw : ->\n		bg 0\n		textFont \"monospace\"\n		textSize 32\n		textAlign RIGHT,BOTTOM\n		fc 1,0,0\n		sc()\n		for time,i in @times\n			text @count-i,  50, 202-40*i\n			text nf(time/1000,1,3),195, 202-40*i\n	stopp : -> \n		@count++\n		@times.unshift int millis()-@start\n		if @times.length > 5 then @times.pop()\n\nstopwatch = new Stopwatch \"a\"",
  c: {
    stopwatch: "reset()|stopp()"
  }
};

ID182 = {
  b: "# LOC:19 bg fc sc circle # % %% / * + << & [] Math.floor Math.sin   \n#        for in class extends constructor new @ super ->\n\nclass RandomDice extends Application\n	reset : -> \n		super\n		@seed = 0\n	draw : -> super\n	mousePressed : (mx,my) ->\n	fraction : (x) -> x %% 1\n	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++\nrandomdice = new RandomDice \"b\"",
  a: "class RandomDice extends Application\n	reset : -> \n		super\n		@seed = 0\n		@radius = 20\n		@bits = [0,1,24,25,90,91,126]\n		@xy = [22,11,12,13,31,32,33]\n		@throw()\n	fraction : (x) -> x %% 1\n	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++\n	throw : -> @value = 1 + @randint 6\n	mousePressed : (mx,my) -> @throw()\n	draw : -> \n		bg 1\n		sc 1\n		for xy,i in @xy\n			x = int xy/10\n			y = xy % 10\n			if @bits[@value] & 1<<i then circle 50*x,50*y,@radius 			\n\nrandomdice = new RandomDice \"a\"",
  c: {
    randomdice: "reset()"
  }
};

ID183 = {
  b: "# LOC:10 bg # for line map class extends constructor new @ super ->\n\nclass Moire extends Application\n	reset : -> super\n	draw  : -> super\n	more  : -> \n	less  : -> \n\nmoire = new Moire \"b\"",
  a: "class Moire extends Application\n	reset : ->\n		super\n		@n = 2\n	draw : ->\n		background 0\n		for i in range @n\n			for j in range 37\n				line 10,map(i,0,@n-1,10,190),190,10+j*5\n	more : -> @n = constrain @n+1,2,10\n	less : -> @n = constrain @n-1,2,10\n\nmoire = new Moire \"a\"",
  c: {
    moire: "reset()|more()|less()"
  }
};

ID184 = {
  b: "# LOC:17 -> bg fc range # for in rect class extends constructor new @ super ->\n\nclass ColorCube extends Application\n	reset       : -> super\n	draw        : -> super\n	moreDetails : ->\n	lessDetails : ->\n	moreBlue    : ->\n	lessBlue    : ->\n\ncc = new ColorCube \"b\"",
  a: "class ColorCube extends Application\n	draw : ->\n		bg 0\n		d = 200.0/@n\n		m = @n-1.0\n		sc()\n		for r in range @n\n			for g in range @n\n				fc r/m,g/m,@b/m\n				sc r/m,g/m,@b/m\n				rect r*d,g*d,d,d\n	reset : -> \n		super\n		@n=2\n		@b=0\n	moreDetails : -> if @n<255 then @n++\n	lessDetails : -> if @n>2 then @n--\n	moreBlue : -> if @b<@n-1 then @b+=1\n	lessBlue : -> if @b>0 then @b-=1\n\ncc = new ColorCube \"a\"",
  c: {
    cc: "reset()|moreDetails()|lessDetails()|moreBlue()|lessBlue()"
  }
};

ID185 = {
  b: "# LOC:20 bg fc sc range @readInt # text textAlign for in if then else * / + - % <=\n#        int class extends constructor new @ super ->\n\nclass Guess extends Application\n	reset     : -> super\n	draw      : -> super\n	readGuess : ->\n\nguess = new Guess \"b\"",
  a: "class Guess extends Application\n	reset : ->\n		super\n		@n = 100\n		@start = 0\n		@stopp = @n-1\n		@secret = 27\n\n	readGuess :-> \n		guess = @readInt()\n		if guess <= @secret then @start = guess+1 \n		if guess >= @secret then @stopp = guess-1 \n\n	draw : ->\n		bg 0.1\n		textAlign CENTER,CENTER\n		for i in range @n\n			if @start <= i <= @stopp then fc 1 else fc 0.5\n			sc()\n			x = i % 10\n			y = int i / 10\n			text i, 10 + 20 * x, 10 + 20 * y\n\nguess = new Guess \"a\"",
  c: {
    guess: "reset()|readGuess()"
  }
};

ID186 = {
  b: "# LOC:10 -> sc circle # if return < class extends constructor new @ super ->\n\nclass RecursiveCircle extends Application\n	reset   : -> super\n	draw    : -> super\n	circles : (x,y,r,level) ->\n	more    : -> \n	less    : -> \n\nrc = new RecursiveCircle \"b\"",
  a: "\nclass RecursiveCircle extends Application\n	reset : -> \n		super\n		@n = 0\n	draw : -> @circles 100,100,100,@n		\n	circles : (x,y,r,level) ->\n		circle x,y,r\n		if level <= 0 then return\n		@circles x-r/2, y, r/2, level-1\n		@circles x+r/2, y, r/2, level-1\n	more : -> @n = constrain @n+1,0,10\n	less : -> @n = constrain @n-1,0,10\n\nrc = new RecursiveCircle \"a\"",
  c: {
    rc: "reset()|more()|less()"
  }
};

ID187 = {
  b: "# Här kan du laborera med egna idéer!\n\nclass Laboratorium extends Application\n	reset : ->\n		super\n		@x = 100\n		@y = 100\n		@command = \"Ge ett kommando!\"\n	draw  : -> \n		textAlign CENTER,CENTER\n		textSize 24\n		fc 1,1,0\n		sc()\n		text @command,@x,@y\n	left  : -> @x -= 10\n	right : -> @x += 10\n	up    : -> @y -= 10\n	down  : -> @y += 10\n	a     : -> @command = \"a\"\n	b     : -> @command = \"b\"\n	c     : -> @command = \"c\"\n	d     : -> @command = \"d\"\n	e     : -> @command = int random 1,7\n	f     : -> @command = int millis()\n\nlaboratorium = new Laboratorium \"b\"     ",
  a: "class Laboratorium extends Application\n	reset : -> super\n	draw : -> \n	left : -> \n	right : -> \n	up : -> \n	down : -> \n	a : -> \n	b : -> \n	c : -> \n	d : -> \n	e : -> \n	f : -> \n\nlaboratorium = new Laboratorium \"a\"   		",
  c: {
    laboratorium: "reset()|left()|right()|up()|down()|a()|b()|c()|d()|e()|f()"
  }
};

ID188 = {
  b: "# LOC:16 circle # {} class extends constructor new @ super ->\n#        if then < and / ++ + - text textAlign textSize rectMode \n\nclass ClickDetector extends Application\n	reset : -> super\n	draw  : -> super\n	mousePressed : (mx,my) ->\nclickdetector = new ClickDetector \"b\"   		",
  a: "class ClickDetector extends Application\n	reset : -> \n		super\n		@a = {x:70,y:70,radius:50,counter:0}\n		@b = {x:130,y:130,w:100,h:100,counter:0}\n	draw : -> \n		rectMode CENTER\n		textAlign CENTER,CENTER\n		textSize 50\n		rect @b.x,@b.y,@b.w,@b.h\n		text @b.counter,@b.x,@b.y\n		circle @a.x,@a.y,@a.radius\n		text @a.counter,@a.x,@a.y\n	mousePressed : (mx,my) ->\n		if dist(mx,my,@a.x,@a.y) < @a.radius then @a.counter++ \n		if @b.x-@b.w/2 < mx < @b.x+@b.w/2 and @b.y-@b.h/2 < my < @b.y+@b.h/2 then @b.counter++ \n\nclickdetector = new ClickDetector \"a\"   		",
  c: {
    clickdetector: "reset()"
  }
};
