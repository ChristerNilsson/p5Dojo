// Generated by CoffeeScript 1.11.1
var ID200, ID201, ID202, ID203, ID204, ID205, ID206, ID209;

ID200 = {
  b: "# LOC:21 bg sw fc rd # rect rectMode translate + class extends constructor new @ super ->\n\nclass Square extends Application\n	reset        : -> super\n	draw         : ->\n	horisontellt : (d) ->\n	vertikalt    : (d) ->\n	storlek      : (d) ->\n	tjocklek     : (d) ->\n	rotera       : (d) ->\napp = new Square",
  a: "class Square extends Application\n	reset : ->\n		super\n		@x = 100\n		@y = 100\n		@size = 100\n		@w = 1\n		@dir = 0\n	draw : ->\n		bg 0\n		rectMode CENTER\n		sw @w\n		fc 0.5\n		translate @x,@y\n		rd @dir\n		rect 0,0,@size,@size\n\n	horisontellt : (d) -> @x += d\n	vertikalt : (d) -> @y += d\n	storlek : (d) -> @size += d\n	tjocklek : (d) -> @w += d\n	rotera : (d) -> @dir += d\n\napp = new Square \"a\"",
  c: {
    app: "reset()|horisontellt -1|horisontellt +1|vertikalt -1|vertikalt +1|storlek -1|storlek +1|tjocklek -1|tjocklek 1|rotera -1|rotera +1"
  }
};

ID201 = {
  b: "# LOC:21 bg fc sc circle range # for in ->\n\nclass Board extends Application\n	reset : -> super\n	draw  : ->\n	r     : (d) ->\n	d     : (d) ->\n	n     : (d) ->\napp = new Board",
  a: "\nclass Board extends Application\n	reset : ->\n		super\n		@_X = 100\n		@_Y = 100\n		@_d = 18\n		@_r = 7\n		@_n = 5\n	draw : ->\n		bg 1\n		fc 0\n		sc()\n		@one @_d,@_r,@_X-@_n*@_d, @_Y-@_d,2*@_n+1,3\n		@one @_d,@_r,@_X-@_d, @_Y-@_n*@_d,3,2*@_n+1\n	one : (d,r,x0,y0,m,n) ->\n		for i in range m\n			for j in range n\n				circle x0+d*i,y0+d*j,r\n	r : (d) -> @_r += d\n	d : (d) -> @_d += d\n	n : (d) -> @_n += d\n\napp = new Board \"a\"",
  c: {
    app: "reset()|r -1|r +1|d -1|d +1|n -1|n +1"
  }
};

({
  "OlympicRing Prep": {
    b: "# LOC:21 sc fc sw # arc strokeCap class extends constructor new @ super ->\n\nclass Ring extends Application\n	reset  : -> super\n	draw   : ->\n	start  : (d) ->\n	stopp  : (d) ->\n	radius : (d) ->\n	width  : (d) ->\napp = new Ring",
    a: "class Ring extends Application\n	reset : ->\n		super\n		@_start = 3\n		@_stopp = 6\n		@_w = 5\n		@_radius = 50\n	start : (d) -> @_start+=d\n	stopp : (d) -> @_stopp+=d\n	radius : (d) -> @_radius+=d\n	width : (d) -> @_w+=d\n	draw : ->\n		hour = PI/6\n		strokeCap SQUARE\n		fc()\n		sw @_w\n		sc 1,1,0\n		arc 100,100,2*@_radius,2*@_radius,(@_start-3)*hour,(@_stopp-3)*hour\n\napp = new Ring \"a\"",
    c: {
      app: "reset()|start -1|start +1|stopp -1|stopp +1|radius -1|radius +1|width -1|width +1"
    }
  }
});

ID202 = {
  b: "# LOC:31 bg sc fc # rect rectMode if then & [] class extends constructor new @ super ->\n\nclass Digit extends Application\n	reset : -> super\n	draw  : ->\n	up    : ->\n	down  : ->\napp = new Digit",
  a: "class Digit extends Application\n	reset : ->\n		super\n		@PATTERN = [63,6,91,79,102,109,125,7,127,111]\n		@X=100\n		@Y=100\n		@W=80\n		@H=18\n		@d=0\n	draw : ->\n		bg 0.5\n		sc()\n		fc 1,0,0\n		rectMode CENTER\n		p = @PATTERN[@d]\n		w0 = @W-20\n		if p & 1 then fc 1,0,0 else fc 0.3,0,0\n		rect @X,@Y-@W,w0,@H\n		if p & 2 then fc 1,0,0 else fc 0.3,0,0\n		rect @X+@W/2,@Y-@W/2,@H,w0\n		if p & 4 then fc 1,0,0 else fc 0.3,0,0\n		rect @X+@W/2,@Y+@W/2,@H,w0\n		if p & 8 then fc 1,0,0 else fc 0.3,0,0\n		rect @X,@Y+@W,w0,@H\n		if p & 16 then fc 1,0,0 else fc 0.3,0,0\n		rect @X-@W/2,@Y+@W/2,@H,w0\n		if p & 32 then fc 1,0,0 else fc 0.3,0,0\n		rect @X-@W/2,@Y-@W/2,@H,w0\n		if p & 64 then fc 1,0,0 else fc 0.3,0,0\n		rect @X,@Y,w0,@H\n	mousePressed : (mx,my) -> @d = constrain @d + (if my<100 then 1 else -1), 0, 9\n\napp = new Digit \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    "7 segment": "https://www.google.se/search?q=7+segment&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjg_5n55OrSAhWpZpoKHQP8DxoQ_AUIBigB&biw=1310&bih=945"
  }
};

ID203 = {
  b: "# LOC:23 bg fc range # for in triangle translate rotate cos sin class extends constructor new @ super ->\n\nclass GoldenStar extends Application\n	reset : -> super\n	draw  : ->\n	n     : (d) ->\n	outer : (d) ->\n	inner : (d) ->\napp = new GoldenStar",
  a: "class GoldenStar extends Application\n	reset : ->\n		super\n		@_X = 100\n		@_Y = 100\n		@_n = 4\n		@_outer = 100\n		@_inner = 25\n	n : (d) -> @_n = constrain @_n+d,3,12\n	outer : (d) -> @_outer = constrain @_outer+d, 0, 100\n	inner : (d) -> @_inner = constrain @_inner+d, 0, 100\n	draw : ->\n		bg 0\n		translate @_X,@_Y\n		v = TWO_PI/@_n\n		rotate -PI/2\n		x1 = @_inner * cos v/2\n		y1 = @_inner * sin v/2\n		for i in range @_n\n			fc 1,1,0\n			triangle 0,0, @_outer,0, x1,y1\n			fc 1,0.7,0\n			triangle 0,0, @_outer,0, x1,-y1\n			rotate v\n\napp = new GoldenStar \"a\"",
  c: {
    app: "reset()|n -1|n +1|outer -1|outer +1|inner -1|inner +1"
  }
};

ID204 = {
  b: "# LOC:23 bg sc range # line for in cos sin radians class extends constructor new @ super ->\n\nclass Turtle\n	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->\n	fd : (d) ->\n	rt : (a) ->\n\nclass Polygon extends Application\n	reset      : -> super\n	draw       : ->\n	antalSidor : (d) ->\n	antalSteg  : (d) ->\napp = new Polygon",
  a: "class Turtle\n	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->\n	fd : (d) ->\n		dx = d*cos radians @dir\n		dy = d*sin radians @dir\n		sc @r,@g,@b\n		line @x,@y,@x+dx,@y+dy\n		@x += dx\n		@y += dy\n	rt : (a) ->\n		@dir +=a\n\nclass Polygon extends Application\n	reset : ->\n		super\n		@n = 6\n		@steg = 60\n\n	draw : ->\n		t = new Turtle()\n		bg 0\n		for i in range @n\n			t.fd @steg\n			t.rt 360/@n\n\n	antalSidor : (d) -> @n += d\n	antalSteg : (d) -> @steg += d\n\napp = new Polygon \"a\"",
  c: {
    app: "reset()|antalSidor -1|antalSidor +1|antalSteg -1|antalSteg +1|"
  }
};

ID205 = {
  b: "# LOC:29 bg sc fc range circle # for in & + - * ^ ** %% [] length splice dist\n#        push if then else class extends constructor new @ super ->\n\nclass AlphaNumeric extends Application\n	reset : -> super\n	draw  : ->\n	add   : ->\n	del   : ->\n	left  : ->\n	right : ->\n	mousePressed : (mx,my) ->\napp = new AlphaNumeric",
  a: "class AlphaNumeric extends Application\n	reset : ->\n		super\n		@RADIUS = 8\n		@DISTANCE = 20\n		@pattern = [[4,12,4,4,4,4,14], [14,17,1,2,4,8,31], [14,17,17,31,17,17,17],[30,17,17,30,17,17,30]]\n		@index = 0\n	draw : ->\n		bg 0\n		sc()\n		for index,j in @pattern[@index]\n			y =  40+@DISTANCE*j\n			for i in range 5\n				if index & 1<<i then fc 0,1,0 else fc 0,0.3,0\n				x = 140-@DISTANCE*i\n				circle x,y,@RADIUS\n	add   : ->\n		@pattern.push [0,0,0,0,0,0,0]\n		@index = @pattern.length - 1\n	del   : -> @pattern.splice @index, 1\n	left  : -> @index = (@index - 1) %% @pattern.length\n	right : -> @index = (@index + 1) %% @pattern.length\n\n	mousePressed : (mx,my) ->\n		for index,j in @pattern[@index]\n			y =  40+@DISTANCE*j\n			for i in range 5\n				x = 140-@DISTANCE*i\n				if dist(x,y,mx,my) < @RADIUS\n					@pattern[@index][j] ^= 1<<i\n\napp = new AlphaNumeric \"a\"",
  c: {
    app: "reset()|add()|del()|left()|right()"
  },
  e: {
    binärt: "http://www.matteboken.se/lektioner/matte-1/tal/talsystem",
    hexadecimalt: "http://www.matteguiden.se/matte-1/grunder/binara-och-hexadecimala-tal",
    '5x7 matris': "https://www.google.se/search?q=5x7+matrix&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjWjYen5OrSAhXhJ5oKHf8BBmgQ_AUIBigB&biw=1310&bih=945&dpr=1.1"
  }
};

ID206 = {
  b: "# LOC:27 bg fc sc sw # rect for if else class extends constructor new @ super ->\n\nclass Korg extends Application\n	reset   : -> super\n	draw    : ->\n	more    : ->\n	less    : ->\n	thinner : ->\n	thicker : ->\napp = new Korg",
  a: "class Korg extends Application\n	reset : ->\n		super\n		@n = 1\n		@w = 5\n\n	draw : ->\n		c1 = co 1,0,0\n		c2 = co 1,1,0\n		bg 0\n		sw @w\n		fill c1\n		stroke c2\n		q = 2*@n+1\n		d = 200.0/q\n		for i in range @n\n			rect d+i*2*d,0,d,200\n		for j in range @n\n			rect 0,d+j*2*d,200,d\n		for i in range @n\n			for j in range @n\n				if (i+j) % 2 == 1\n					rect i*2*d,d+j*2*d,3*d,d\n				else\n					rect d+i*2*d,j*2*d,d,3*d\n	more : -> @n = constrain @n+1,1,10\n	less : -> @n = constrain @n-1,1,10\n	thinner : -> @w = constrain @w-1,0,10\n	thicker : -> @w = constrain @w+1,0,10\n\napp = new Korg \"a\"",
  c: {
    app: "reset()|more()|less()|thinner()|thicker()"
  }
};

ID209 = {
  b: "# LOC:33 bg range # for in class extends constructor new @ super ->\n#        quad [] push pop fill stroke if then and * / + - <= return\n\nclass ColorCube extends Application\n	reset       : -> super\n	draw        : ->\n	undo 				: ->\n	mousePressed : (mx,my) ->\napp = new ColorCube",
  a: "class ColorCube extends Application\n	reset : ->\n		super\n		@r = 0\n		@g = 0\n		@b = 0\n		@size = 256\n		@history = []\n	draw : ->\n		bg 0\n		@c = @size / 4\n		for b in range 4\n			for r in range 4\n				for g in range 4\n					fill   @r+r*@c+@c/2, @g+g*@c+@c/2, @b+b*@c+@c/2\n					stroke @r+r*@c+@c/2, @g+g*@c+@c/2, @b+b*@c+@c/2\n					x = r*40-g*10\n					y = g*10+b*50 + 5\n					quad x+40,y+0, x+80,y+0, x+70,y+10, x+30,y+10\n	mousePressed : (mx,my) ->\n		if @size == 4 then return\n		for b in range 4\n			for r in range 4\n				for g in range 4\n					x = r*40-g*10\n					y = g*10+b*50 + 5\n					if x+35 <= mx <= x+75 and y <= my <= y+10\n						@history.push [@r,@g,@b,@size]\n						@size /= 4\n						@r += r * @size\n						@g += g * @size\n						@b += b * @size\n						return\n\n	undo : -> if @history.length > 0 then [@r,@g,@b,@size] = @history.pop()\n\napp = new ColorCube \"a\"",
  c: {
    app: "reset()|undo()"
  },
  e: {
    ColorCube: "https://www.google.se/search?q=color+cube&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjo3_Cm3Y7TAhUJb5oKHcFhCKQQsAQIJg&biw=1745&bih=963&dpr=1.1"
  }
};
