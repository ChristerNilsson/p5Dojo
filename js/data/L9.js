// Generated by CoffeeScript 1.11.1
var ID180, ID181, ID182, ID183, ID184, ID185, ID186, ID187, ID188, ID189;

ID180 = {
  b: "# LOC:12 bg fc sc # text textAlign textSize + - class extends constructor new @ super ->\n# Klicka på reset() om du får ett felmeddelande!\n\nclass Counter extends Application\n	reset : ->\n		super\n	draw  : ->\n	up    : ->\n	down  : ->\n	mousePressed : (mx,my) -> print \"mousePressed\",mx,my\napp = new Counter",
  a: "class Counter extends Application\n	reset : ->\n		super\n		@counter = 0\n	up : -> @counter += 1\n	down : -> @counter -= 1\n	draw : ->\n		bg 0.5\n		fc 1,1,0\n		sc()\n		textAlign CENTER,CENTER\n		textSize 100\n		text @counter,100,100\n	mousePressed : (mx,my) -> if my < 100 then @counter += 1 else @counter -= 1\n\napp = new Counter \"a\"",
  c: {
    app: "reset()|up()|down()"
  }
};

ID181 = {
  b: "# LOC:17 bg sc fc # for in [] '' text textSize textAlign textFont monospace\n#        int millis nf length unshift class extends constructor new @ super ->\n# OBS! Tiderna kan skilja med flera millisekunder. Sorry!\n\nclass Stopwatch extends Application\n	reset : -> super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Stopwatch",
  a: "class Stopwatch extends Application\n	reset : ->\n		super\n		@start = int millis()\n		@times = []\n		@count = 0\n	draw : ->\n		bg 0\n		textFont \"monospace\"\n		textSize 32\n		textAlign RIGHT,BOTTOM\n		fc 1,0,0\n		sc()\n		for time,i in @times\n			text @count-i,  50, 202-40*i\n			text nf(time/1000,1,3),195, 202-40*i\n	mousePressed : (mx,my) ->\n		@count++\n		@times.unshift int millis()-@start\n		if @times.length > 5 then @times.pop()\n\napp = new Stopwatch \"a\"",
  c: {
    app: "reset()"
  }
};

ID182 = {
  b: "# LOC:19 bg fc sc circle # % %% / * + << & [] int Math.sin\n#        for in class extends constructor new @ super ->\n\nclass RandomDice extends Application\n	reset : ->\n		super\n		@seed = 0\n	draw : ->\n	mousePressed : (mx,my) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\napp = new RandomDice",
  a: "class RandomDice extends Application\n	reset : ->\n		super\n		@RADIUS = 20\n		@BITS = [0,1,24,25,90,91,126]\n		@XY = [22,11,12,13,31,32,33]\n		@seed = 0\n		@throw()\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	throw : -> @value = 1 + @randint 6\n	mousePressed : (mx,my) -> @throw()\n	draw : ->\n		bg 1\n		sc 1\n		for xy,i in @XY\n			x = int xy/10\n			y = xy % 10\n			if @BITS[@value] & 1<<i then circle 50*x,50*y,@RADIUS\n\napp = new RandomDice \"a\"",
  c: {
    app: "reset()"
  }
};

ID183 = {
  b: "# LOC:11 bg range # * + - for line map class extends constructor new @ super ->\n\nclass Moire extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Moire",
  a: "class Moire extends Application\n	reset : ->\n		super\n		[@x,@y] = [100,100]\n	draw : ->\n		bg 0\n		for i in range 40\n			for j in range 4\n				[x,y] = [0,i*5,200,200-i*5,0][j..j+1]\n				line @x,@y,x,y\n	mousePressed : (mx,my) -> [@x,@y] = [mx,my]\n\napp = new Moire \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Moir%C3%A9_pattern"
  }
};

ID185 = {
  b: "# LOC:29 bg fc sc range # text textAlign for in if then else * / + - % <=\n#        int class extends constructor new @ super ->\n\nclass Guess extends Application\n	reset        : ->\n		super\n	draw         : ->\n	newGame : ->\n	mousePressed : (mx,my) ->\napp = new Guess",
  a: "class Guess extends Application\n	reset : ->\n		super\n		@N = 100\n		@seed = 0\n		@newGame()\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		@start = 0\n		@stopp = @N-1\n		@secret = @randint @N\n\n	draw : ->\n		bg 0.1\n		textAlign CENTER,CENTER\n		for i in range @N\n			if @start <= i <= @stopp then fc 1 else fc 0.5\n			sc()\n			x = i % 10\n			y = int i / 10\n			text i, 10 + 20 * x, 10 + 20 * y\n\n	mousePressed : (mx,my) ->\n		guess = int mx/20 + 10 * int my/20\n		if guess <= @secret then @start = guess+1\n		if guess >= @secret then @stopp = guess-1\n\napp = new Guess \"a\"",
  c: {
    app: "reset()|newGame()"
  }
};

ID186 = {
  b: "# LOC:10 sc circle # if return < class extends constructor new @ super ->\n\nclass RecursiveCircle extends Application\n	reset   : ->\n		super\n	draw    : ->\n	circles : (x,y,r,level) ->\n	mousePressed : (mx,my) ->\napp = new RecursiveCircle",
  a: "\nclass RecursiveCircle extends Application\n	reset : ->\n		super\n		@n = 0\n	draw : -> @circles 100,100,100,@n\n	circles : (x,y,r,level) ->\n		circle x,y,r\n		if level <= 0 then return\n		@circles x-r/2, y, r/2, level-1\n		@circles x+r/2, y, r/2, level-1\n	mousePressed : (mx,my) -> @n = constrain @n + (if my < 100 then 1 else -1),0,10\n\napp = new RecursiveCircle \"a\"",
  c: {
    app: "reset()"
  }
};

ID187 = {
  b: "# LOC:0\n# Här kan du laborera med egna idéer!\n\nclass Laboratorium extends Application\n	reset : ->\n		super\n		@x = 100\n		@y = 100\n		@command = \"Ge ett kommando!\"\n	draw  : ->\n		textAlign CENTER,CENTER\n		textSize 24\n		fc 1,1,0\n		sc()\n		text @command,@x,@y\n	mousePressed : (mx,my) ->\n	left  : -> @x -= 10\n	right : -> @x += 10\n	up    : -> @y -= 10\n	down  : -> @y += 10\n	a     : -> @command = \"a\"\n	b     : -> @command = \"b\"\n	c     : -> @command = \"c\"\n	d     : -> @command = \"d\"\n	e     : -> @command = int random 1,7\n	f     : -> @command = int millis()\napp = new Laboratorium",
  a: "class Laboratorium extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\n	left : ->\n	right : ->\n	up : ->\n	down : ->\n	a : ->\n	b : ->\n	c : ->\n	d : ->\n	e : ->\n	f : ->\n\napp = new Laboratorium \"a\"",
  c: {
    app: "reset()|left()|right()|up()|down()|a()|b()|c()|d()|e()|f()"
  }
};

ID188 = {
  b: "# LOC:62 bg sc fc range circle # quad rect triangle class extends constructor new @ super ->\n#        or and == dist reverse if then < and * / + - ++ text textAlign textSize rectMode\n\nclass Vector\n	constructor : (@x,@y) ->\n	add : (b) -> new Vector @x+b.x,@y+b.y\n	div : (n) -> new Vector @x/n,@y/n\n\nclass ClickDetector extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new ClickDetector",
  a: "class Vector # pga att p5.Vector krockar med min serialisering\n	constructor : (@x,@y) ->\n	add : (b) -> cv @x+b.x,@y+b.y\n	div : (n) -> cv @x/n,@y/n\ncv = (x,y) -> new Vector x,y\n\nclass Figure\n	constructor : (pc) ->\n		@pc = cv(int(pc.x),int(pc.y))\n		@counter = 0\n	draw : -> text @counter,@pc.x,@pc.y\n	detect : (bool) ->\n		if bool then @counter++\n		bool\n\nclass Circle extends Figure\n	constructor : (@p,@radius,@r,@g,@b) -> super @p\n	detect : (mx,my) -> super @radius > dist @p.x,@p.y,mx,my\n	draw : -> super circle @p.x,@p.y, @radius\n\nclass Rect extends Figure\n	constructor : (@p,@w,@h,@r,@g,@b) -> super @p\n	detect : (mx,my) -> super @p.x-@w/2 < mx < @p.x+@w/2 and @p.y-@h/2 < my < @p.y+@h/2\n	draw : -> super rect @p.x,@p.y,@w,@h\n\nclass Triangle extends Figure\n	constructor : (@v1,@v2,@v3,@r=0,@g=0,@b=0) -> super @v1.add(@v2).add(@v3).div(3)\n	detect : (mx,my) ->\n		pt = cv mx,my\n		sign = (p1,p2,p3) -> (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y)\n		b1 = 0 > sign pt, @v1, @v2\n		b2 = 0 > sign pt, @v2, @v3\n		b3 = 0 > sign pt, @v3, @v1\n		super b1 == b2 and b2 == b3\n	draw : -> super triangle @v1.x,@v1.y, @v2.x,@v2.y, @v3.x,@v3.y\n\nclass Quad extends Figure\n	constructor : (@v1,@v2,@v3,@v4, @r,@g,@b) -> super @v1.add(@v2).add(@v3).add(@v4).div(4)\n	detect : (mx,my) ->\n		t1 = new Triangle @v1,@v2,@v3\n		t2 = new Triangle @v1,@v3,@v4\n		super t1.detect(mx,my) or t2.detect(mx,my)\n	draw : -> super quad @v1.x,@v1.y, @v2.x,@v2.y, @v3.x,@v3.y, @v4.x,@v4.y\n\nclass ClickDetector extends Application\n	classes : -> [Vector,Circle,Rect,Triangle,Quad]\n	reset : ->\n		super\n		@figures = []\n		@figures.push new Circle cv(70,70), 50, 1,0,0\n		@figures.push new Rect cv(130,130), 100,100, 1,1,0\n		@figures.push new Triangle cv(100,100), cv(120,0), cv(190,120), 0,1,0\n		@figures.push new Quad cv(0,160), cv(60,100), cv(100,120), cv(60,200), 0.5,0.5,0.5\n	draw : ->\n		rectMode CENTER\n		textAlign CENTER,CENTER\n		textSize 50\n		bg 0.5\n		sc 0\n		sw 2\n		for figure in @figures\n			fc figure.r,figure.g,figure.b,0.5\n			figure.draw()\n	mousePressed : (mx,my) ->\n		rev = @figures[..]\n		rev.reverse()\n		for figure in rev\n			return if figure.detect mx,my\n\napp = new ClickDetector \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Triangle: "http://stackoverflow.com/questions/2049582/how-to-determine-if-a-point-is-in-a-2d-triangle"
  }
};

ID189 = {
  b: "# LOC:10 range # line sin cos radians for in if then else constrain * / + - class extends constructor new @ super ->\n\nclass IndianSun extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new IndianSun",
  a: "class IndianSun extends Application\n	reset : ->\n		super\n		@n = 5\n	draw : ->\n		points = ([100+100*cos(i*radians 360/@n), 100+100*sin(i*radians 360/@n)] for i in range @n)\n		for [x1,y1] in points\n			for [x2,y2] in points\n				line x1,y1,x2,y2\n	mousePressed : (mx,my) -> @n = constrain @n + (if my < 100 then 1 else -1), 3, 20\n\napp = new IndianSun \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Kojo: "http://www.kogics.net/codesketch?id=28"
  }
};

ID184 = {
  b: "# LOC:30 bg sc fc # for in [] '' == <= and text textSize textAlign textFont monospace nf\n#        if then else int round millis length class extends constructor new @ super ->\n#\n# OBS! Tiderna kan skilja med flera millisekunder. Sorry!\n\nclass MultiTimer extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new MultiTimer",
  a: "class MultiTimer extends Application\n	reset : ->\n		super\n		@start = int millis()\n		@buttons = [[0,0,\"A\",0],[100,0,\"B\",0],[0,50,\"C\",0],[100,50,\"D\",0],[0,100,\"E\",0],[100,100,\"F\",0],[0,150,\"G\",0],[100,150,\"H\",0]]\n		@active = -1\n	draw : ->\n		bg 0\n		textFont \"monospace\"\n		textSize 24\n		sc()\n		for [x,y,txt,time],i in @buttons\n			if @active==i then fc 1,0,0 else fc 1,1,0\n			textAlign LEFT,TOP\n			text txt, x+10,y\n			textAlign RIGHT,TOP\n			secs = round time/1000\n			text nf(int(secs / 60),2) + ':' + nf(secs % 60,2), x+100,y\n	mousePressed : (mx,my) ->\n		for [x,y,txt,time],i in @buttons\n			if x <= mx <= x+100 and y <= my <= y+50 then active = i\n		if active == @active\n			@buttons[@active][3] += int millis() - @start\n			@active = -1\n		else if @active == -1\n			@active = active\n		else # byte\n			@buttons[@active][3] += int millis() - @start\n			@active = active\n		@start = int millis()\n\napp = new MultiTimer \"a\"",
  c: {
    app: "reset()"
  }
};
