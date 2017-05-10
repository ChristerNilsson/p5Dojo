// Generated by CoffeeScript 1.11.1
var ID_GalaxiesColliding, ID_GameOfLife, ID_Girlang, ID_GoldenStar, ID_GreenEllipse, ID_GreenRect, ID_Grid, ID_GrowingCircles, ID_GrowingRedSquares, ID_GrowingSquares, ID_GuessANumber;

ID_GalaxiesColliding = {
  v: '2017-04-29',
  k: 'fc range for lerp rect if',
  b: "# LOC:8 (David Larsson)\n",
  a: "for i in range 10\n	for j in range 10\n		fc()\n		if i-j in [-2,0,2] then fc 1,1,0\n		if i+j in [7,9,11] then fc 1,0,0\n		x = 20*i\n		y = 20*j\n		rect x,y, 20,20"
};

ID_GameOfLife = {
  v: '2017-04-29',
  k: 'bg range for [] operators if int class',
  b: "# LOC:40\n\nclass GameOfLife extends Application\n	reset : (n) ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\n	tick : ->\napp = new GameOfLife\n",
  a: "class GameOfLife extends Application\n	reset : (n) ->\n		super\n		@n = n\n		@size = 200/@n\n		@matrix = {}\n		@ticks = 0\n		for [i,j] in [[0,0],[2,0],[1,1],[2,1],[1,2]]\n			@matrix[i+','+j] = 1\n	draw : ->\n		bg 0.5\n		for i in range @n\n			for j in range @n\n				if @matrix[i+','+j]==1\n					rect @size*i, @size*j, @size, @size\n	count : (x,y) ->\n		res = 0\n		for dx in [-1,0,1]\n			for dy in [-1,0,1]\n				i = (x+dx) %% @n\n				j = (y+dy) %% @n\n				res++ if @matrix[i+','+j]==1 and (dx!=0 or dy!=0)\n		res\n	tick : ->\n		@ticks++\n		m = {}\n		for i in range @n\n			for j in range @n\n				c = @count(i,j)\n				key = i+','+j\n				if @matrix[key] == 1\n					if 2 <= c <= 3 then m[key]=1\n				else\n					if c==3 then m[key]=1\n		@matrix = m\n	mousePressed : (mx,my) ->\n		i = int mx/@size\n		j = int my/@size\n		key = i+','+j\n		@matrix[key] = if @matrix[key] == 1 then undefined else 1\n\napp = new GameOfLife \"a\"\n",
  c: {
    app: "reset 10|reset 20|reset 40|tick()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
  }
};

ID_Girlang = {
  v: '2017-04-29',
  k: 'sc bg sw range for line class',
  b: "# LOC:16\n\nclass Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n\ngirlang = (x,y,n,width,dx,dy) ->\n\ngirlang 0,0,9,5,20,20",
  a: "class Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n		sc @r,@g,@b\n		line @x,@y,@x+dx,@y+dy\n		[@x,@y] = [@x+dx,@y+dy]\n\ngirlang = (x,y,n,width,dx,dy) ->\n	a = new Cartesius 1,0,0, x+dx/2,0\n	b = new Cartesius 1,1,0, x,y+dy/2\n\n	bg 0\n	sw width\n\n	for i in range n\n		a.go 0,dy\n		b.go dx,0\n		b.go 0,dy\n		a.go dx,0\n\ngirlang 0,0,9,5,20,20"
};

ID_GoldenStar = {
  v: '2017-04-29',
  k: 'bg fc range for triangle translate rotate cos sin class',
  b: "# LOC:23\n\nclass GoldenStar extends Application\n	reset : ->\n		super\n	draw  : ->\n	n     : (d) ->\n	outer : (d) ->\n	inner : (d) ->\napp = new GoldenStar",
  a: "class GoldenStar extends Application\n	reset : ->\n		super\n		@_X = 100\n		@_Y = 100\n		@_n = 4\n		@_outer = 100\n		@_inner = 25\n	n : (d) -> @_n = constrain @_n+d,3,12\n	outer : (d) -> @_outer = constrain @_outer+d, 0, 100\n	inner : (d) -> @_inner = constrain @_inner+d, 0, 100\n	draw : ->\n		bg 0\n		translate @_X,@_Y\n		v = TWO_PI/@_n\n		rotate -PI/2\n		x1 = @_inner * cos v/2\n		y1 = @_inner * sin v/2\n		for i in range @_n\n			fc 1,1,0\n			triangle 0,0, @_outer,0, x1,y1\n			fc 1,0.7,0\n			triangle 0,0, @_outer,0, x1,-y1\n			rotate v\n\napp = new GoldenStar \"a\"",
  c: {
    app: "reset()|n -1|n +1|outer -1|outer +1|inner -1|inner +1"
  }
};

ID_GreenEllipse = {
  v: '2017-04-29',
  k: 'fc ellipse',
  b: "# LOC:2 \n",
  a: "fc 0,1,0\nellipse 120,60, 60,40"
};

ID_GreenRect = {
  v: '2017-04-29',
  k: 'fc rect',
  b: "# LOC:2 \n",
  a: "fc 0,1,0\nrect 60,80, 40,50"
};

ID_Grid = {
  v: '2017-04-29',
  k: 'sc sw range for line',
  b: "# LOC:5 \n",
  a: "sc 1,1,0\nsw 2\nfor i in range 10,200,10\n	line 10,i,190,i\n	line i,190, i,10"
};

ID_GrowingCircles = {
  v: '2017-04-29',
  k: 'range fc circle for lerp',
  b: "# LOC:6 \n",
  a: "for i in range 10\n	fc i/10.0,0,0\n	x = 10+20*i\n	y = 10\n	r = i\n	circle x,y,r"
};

ID_GrowingRedSquares = {
  v: '2017-04-29',
  k: 'fc range for lerp rect rectMode',
  b: "# LOC:8 \n",
  a: "rectMode CENTER\nfor i in range 10\n	fc i/10.0,0,0\n	x = 10+20*i\n	y = 10\n	w = 2*i\n	h = 2*i\n	rect x,y,w,h"
};

ID_GrowingSquares = {
  v: '2017-04-29',
  k: 'range rect rectMode for lerp',
  b: "# LOC:7 \n",
  a: "rectMode CENTER\nfor i in range 10\n	x = 10+20*i\n	y = 10\n	w = 2*i\n	h = 2*i\n	rect x,y, w,h"
};

ID_GuessANumber = {
  v: '2017-04-29',
  k: 'bg fc sc range text for if operators int class',
  b: "# LOC:29\n\nclass Guess extends Application\n	reset        : ->\n		super\n	draw         : ->\n	newGame : ->\n	mousePressed : (mx,my) ->\napp = new Guess",
  a: "class Guess extends Application\n	reset : ->\n		super\n		@N = 100\n		@seed = 0\n		@newGame()\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		@start = 0\n		@stopp = @N-1\n		@secret = @randint @N\n\n	draw : ->\n		bg 0.1\n		textAlign CENTER,CENTER\n		for i in range @N\n			if @start <= i <= @stopp then fc 1 else fc 0.5\n			sc()\n			x = i % 10\n			y = int i / 10\n			text i, 10 + 20 * x, 10 + 20 * y\n\n	mousePressed : (mx,my) ->\n		guess = int mx/20 + 10 * int my/20\n		if guess <= @secret then @start = guess+1\n		if guess >= @secret then @stopp = guess-1\n\napp = new Guess \"a\"",
  c: {
    app: "reset()|newGame()"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcRy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsb0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDJCQURGO0VBRUEsQ0FBQSxFQUFHLDJCQUZIO0VBR0EsQ0FBQSxFQUFHLGtLQUhIOzs7QUFjRCxhQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx3Q0FERjtFQUVBLENBQUEsRUFBRSx3SkFGRjtFQWNBLENBQUEsRUFBRSx3NUJBZEY7RUEyREEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLG1DQUFOO0dBNUREO0VBNkRBLENBQUEsRUFDQztJQUFBLFNBQUEsRUFBWSx1REFBWjtHQTlERDs7O0FBZ0VELFVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLCtCQURGO0VBRUEsQ0FBQSxFQUFFLGlKQUZGO0VBYUEsQ0FBQSxFQUFFLDhXQWJGOzs7QUFxQ0QsYUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUseURBREY7RUFFQSxDQUFBLEVBQUcsOEpBRkg7RUFjQSxDQUFBLEVBQUcsMmpCQWRIO0VBMENBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSx1REFBTjtHQTNDRDs7O0FBNkNELGVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLFlBREY7RUFFQSxDQUFBLEVBQUUsWUFGRjtFQUdBLENBQUEsRUFBRSxpQ0FIRjs7O0FBUUQsWUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsU0FERjtFQUVBLENBQUEsRUFBRSxZQUZGO0VBR0EsQ0FBQSxFQUFFLDZCQUhGOzs7QUFRRCxPQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxzQkFERjtFQUVBLENBQUEsRUFBRSxZQUZGO0VBR0EsQ0FBQSxFQUFFLCtFQUhGOzs7QUFXRCxpQkFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsMEJBREY7RUFFQSxDQUFBLEVBQUUsWUFGRjtFQUdBLENBQUEsRUFBRSxpRkFIRjs7O0FBWUQsb0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLGlDQURGO0VBRUEsQ0FBQSxFQUFFLFlBRkY7RUFHQSxDQUFBLEVBQUUsOEdBSEY7OztBQWNELGlCQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSw4QkFERjtFQUVBLENBQUEsRUFBRSxZQUZGO0VBR0EsQ0FBQSxFQUFFLCtGQUhGOzs7QUFhRCxlQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxnREFERjtFQUVBLENBQUEsRUFBRSwwSkFGRjtFQWFBLENBQUEsRUFBRSx3bUJBYkY7RUE2Q0EsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLG1CQUFOO0dBOUNEIiwic291cmNlc0NvbnRlbnQiOlsiSURfR2FsYXhpZXNDb2xsaWRpbmcgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidmYyByYW5nZSBmb3IgbGVycCByZWN0IGlmJ1xuXHRiOiBcIiMgTE9DOjggKERhdmlkIExhcnNzb24pXFxuXCJcblx0YTogXCJcIlwiXG5mb3IgaSBpbiByYW5nZSAxMFxuXHRmb3IgaiBpbiByYW5nZSAxMFxuXHRcdGZjKClcblx0XHRpZiBpLWogaW4gWy0yLDAsMl0gdGhlbiBmYyAxLDEsMFxuXHRcdGlmIGkraiBpbiBbNyw5LDExXSB0aGVuIGZjIDEsMCwwXG5cdFx0eCA9IDIwKmlcblx0XHR5ID0gMjAqalxuXHRcdHJlY3QgeCx5LCAyMCwyMFxuXCJcIlwiXG5cbklEX0dhbWVPZkxpZmUgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidiZyByYW5nZSBmb3IgW10gb3BlcmF0b3JzIGlmIGludCBjbGFzcydcblx0YjpcIlwiXCJcbiMgTE9DOjQwXG5cbmNsYXNzIEdhbWVPZkxpZmUgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IChuKSAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5cdHRpY2sgOiAtPlxuYXBwID0gbmV3IEdhbWVPZkxpZmVcblxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBHYW1lT2ZMaWZlIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAobikgLT5cblx0XHRzdXBlclxuXHRcdEBuID0gblxuXHRcdEBzaXplID0gMjAwL0BuXG5cdFx0QG1hdHJpeCA9IHt9XG5cdFx0QHRpY2tzID0gMFxuXHRcdGZvciBbaSxqXSBpbiBbWzAsMF0sWzIsMF0sWzEsMV0sWzIsMV0sWzEsMl1dXG5cdFx0XHRAbWF0cml4W2krJywnK2pdID0gMVxuXHRkcmF3IDogLT5cblx0XHRiZyAwLjVcblx0XHRmb3IgaSBpbiByYW5nZSBAblxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgQG5cblx0XHRcdFx0aWYgQG1hdHJpeFtpKycsJytqXT09MVxuXHRcdFx0XHRcdHJlY3QgQHNpemUqaSwgQHNpemUqaiwgQHNpemUsIEBzaXplXG5cdGNvdW50IDogKHgseSkgLT5cblx0XHRyZXMgPSAwXG5cdFx0Zm9yIGR4IGluIFstMSwwLDFdXG5cdFx0XHRmb3IgZHkgaW4gWy0xLDAsMV1cblx0XHRcdFx0aSA9ICh4K2R4KSAlJSBAblxuXHRcdFx0XHRqID0gKHkrZHkpICUlIEBuXG5cdFx0XHRcdHJlcysrIGlmIEBtYXRyaXhbaSsnLCcral09PTEgYW5kIChkeCE9MCBvciBkeSE9MClcblx0XHRyZXNcblx0dGljayA6IC0+XG5cdFx0QHRpY2tzKytcblx0XHRtID0ge31cblx0XHRmb3IgaSBpbiByYW5nZSBAblxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgQG5cblx0XHRcdFx0YyA9IEBjb3VudChpLGopXG5cdFx0XHRcdGtleSA9IGkrJywnK2pcblx0XHRcdFx0aWYgQG1hdHJpeFtrZXldID09IDFcblx0XHRcdFx0XHRpZiAyIDw9IGMgPD0gMyB0aGVuIG1ba2V5XT0xXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpZiBjPT0zIHRoZW4gbVtrZXldPTFcblx0XHRAbWF0cml4ID0gbVxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5cdFx0aSA9IGludCBteC9Ac2l6ZVxuXHRcdGogPSBpbnQgbXkvQHNpemVcblx0XHRrZXkgPSBpKycsJytqXG5cdFx0QG1hdHJpeFtrZXldID0gaWYgQG1hdHJpeFtrZXldID09IDEgdGhlbiB1bmRlZmluZWQgZWxzZSAxXG5cbmFwcCA9IG5ldyBHYW1lT2ZMaWZlIFwiYVwiXG5cblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQgMTB8cmVzZXQgMjB8cmVzZXQgNDB8dGljaygpXCJcblx0ZTpcblx0XHRXaWtpcGVkaWEgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbndheSUyN3NfR2FtZV9vZl9MaWZlXCJcblxuSURfR2lybGFuZyA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J3NjIGJnIHN3IHJhbmdlIGZvciBsaW5lIGNsYXNzJ1xuXHRiOlwiXCJcIlxuIyBMT0M6MTZcblxuY2xhc3MgQ2FydGVzaXVzXG5cdGNvbnN0cnVjdG9yIDogKEByLEBnLEBiLCBAeCxAeSkgLT5cblx0Z28gOiAoZHgsZHkpIC0+XG5cbmdpcmxhbmcgPSAoeCx5LG4sd2lkdGgsZHgsZHkpIC0+XG5cbmdpcmxhbmcgMCwwLDksNSwyMCwyMFxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBDYXJ0ZXNpdXNcblx0Y29uc3RydWN0b3IgOiAoQHIsQGcsQGIsIEB4LEB5KSAtPlxuXHRnbyA6IChkeCxkeSkgLT5cblx0XHRzYyBAcixAZyxAYlxuXHRcdGxpbmUgQHgsQHksQHgrZHgsQHkrZHlcblx0XHRbQHgsQHldID0gW0B4K2R4LEB5K2R5XVxuXG5naXJsYW5nID0gKHgseSxuLHdpZHRoLGR4LGR5KSAtPlxuXHRhID0gbmV3IENhcnRlc2l1cyAxLDAsMCwgeCtkeC8yLDBcblx0YiA9IG5ldyBDYXJ0ZXNpdXMgMSwxLDAsIHgseStkeS8yXG5cblx0YmcgMFxuXHRzdyB3aWR0aFxuXG5cdGZvciBpIGluIHJhbmdlIG5cblx0XHRhLmdvIDAsZHlcblx0XHRiLmdvIGR4LDBcblx0XHRiLmdvIDAsZHlcblx0XHRhLmdvIGR4LDBcblxuZ2lybGFuZyAwLDAsOSw1LDIwLDIwXG5cIlwiXCJcblxuSURfR29sZGVuU3RhciA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2JnIGZjIHJhbmdlIGZvciB0cmlhbmdsZSB0cmFuc2xhdGUgcm90YXRlIGNvcyBzaW4gY2xhc3MnXG5cdGI6IFwiXCJcIlxuIyBMT0M6MjNcblxuY2xhc3MgR29sZGVuU3RhciBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRkcmF3ICA6IC0+XG5cdG4gICAgIDogKGQpIC0+XG5cdG91dGVyIDogKGQpIC0+XG5cdGlubmVyIDogKGQpIC0+XG5hcHAgPSBuZXcgR29sZGVuU3RhclxuXCJcIlwiXG5cdGE6IFwiXCJcIlxuY2xhc3MgR29sZGVuU3RhciBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBfWCA9IDEwMFxuXHRcdEBfWSA9IDEwMFxuXHRcdEBfbiA9IDRcblx0XHRAX291dGVyID0gMTAwXG5cdFx0QF9pbm5lciA9IDI1XG5cdG4gOiAoZCkgLT4gQF9uID0gY29uc3RyYWluIEBfbitkLDMsMTJcblx0b3V0ZXIgOiAoZCkgLT4gQF9vdXRlciA9IGNvbnN0cmFpbiBAX291dGVyK2QsIDAsIDEwMFxuXHRpbm5lciA6IChkKSAtPiBAX2lubmVyID0gY29uc3RyYWluIEBfaW5uZXIrZCwgMCwgMTAwXG5cdGRyYXcgOiAtPlxuXHRcdGJnIDBcblx0XHR0cmFuc2xhdGUgQF9YLEBfWVxuXHRcdHYgPSBUV09fUEkvQF9uXG5cdFx0cm90YXRlIC1QSS8yXG5cdFx0eDEgPSBAX2lubmVyICogY29zIHYvMlxuXHRcdHkxID0gQF9pbm5lciAqIHNpbiB2LzJcblx0XHRmb3IgaSBpbiByYW5nZSBAX25cblx0XHRcdGZjIDEsMSwwXG5cdFx0XHR0cmlhbmdsZSAwLDAsIEBfb3V0ZXIsMCwgeDEseTFcblx0XHRcdGZjIDEsMC43LDBcblx0XHRcdHRyaWFuZ2xlIDAsMCwgQF9vdXRlciwwLCB4MSwteTFcblx0XHRcdHJvdGF0ZSB2XG5cbmFwcCA9IG5ldyBHb2xkZW5TdGFyIFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8biAtMXxuICsxfG91dGVyIC0xfG91dGVyICsxfGlubmVyIC0xfGlubmVyICsxXCJcblxuSURfR3JlZW5FbGxpcHNlID1cblx0djonMjAxNy0wNC0yOSdcblx0azonZmMgZWxsaXBzZSdcblx0YjpcIiMgTE9DOjIgXFxuXCJcblx0YTpcIlwiXCJcbmZjIDAsMSwwXG5lbGxpcHNlIDEyMCw2MCwgNjAsNDBcblwiXCJcIlxuXG5JRF9HcmVlblJlY3QgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidmYyByZWN0J1xuXHRiOlwiIyBMT0M6MiBcXG5cIlxuXHRhOlwiXCJcIlxuZmMgMCwxLDBcbnJlY3QgNjAsODAsIDQwLDUwXG5cIlwiXCJcblxuSURfR3JpZCA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J3NjIHN3IHJhbmdlIGZvciBsaW5lJ1xuXHRiOlwiIyBMT0M6NSBcXG5cIlxuXHRhOlwiXCJcIlxuc2MgMSwxLDBcbnN3IDJcbmZvciBpIGluIHJhbmdlIDEwLDIwMCwxMFxuXHRsaW5lIDEwLGksMTkwLGlcblx0bGluZSBpLDE5MCwgaSwxMFxuXCJcIlwiXG5cbklEX0dyb3dpbmdDaXJjbGVzID1cblx0djonMjAxNy0wNC0yOSdcblx0azoncmFuZ2UgZmMgY2lyY2xlIGZvciBsZXJwJ1xuXHRiOlwiIyBMT0M6NiBcXG5cIlxuXHRhOlwiXCJcIlxuZm9yIGkgaW4gcmFuZ2UgMTBcblx0ZmMgaS8xMC4wLDAsMFxuXHR4ID0gMTArMjAqaVxuXHR5ID0gMTBcblx0ciA9IGlcblx0Y2lyY2xlIHgseSxyXG5cIlwiXCJcblxuSURfR3Jvd2luZ1JlZFNxdWFyZXMgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidmYyByYW5nZSBmb3IgbGVycCByZWN0IHJlY3RNb2RlJ1xuXHRiOlwiIyBMT0M6OCBcXG5cIlxuXHRhOlwiXCJcIlxucmVjdE1vZGUgQ0VOVEVSXG5mb3IgaSBpbiByYW5nZSAxMFxuXHRmYyBpLzEwLjAsMCwwXG5cdHggPSAxMCsyMCppXG5cdHkgPSAxMFxuXHR3ID0gMippXG5cdGggPSAyKmlcblx0cmVjdCB4LHksdyxoXG5cIlwiXCJcblxuSURfR3Jvd2luZ1NxdWFyZXMgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidyYW5nZSByZWN0IHJlY3RNb2RlIGZvciBsZXJwJ1xuXHRiOlwiIyBMT0M6NyBcXG5cIlxuXHRhOlwiXCJcIlxucmVjdE1vZGUgQ0VOVEVSXG5mb3IgaSBpbiByYW5nZSAxMFxuXHR4ID0gMTArMjAqaVxuXHR5ID0gMTBcblx0dyA9IDIqaVxuXHRoID0gMippXG5cdHJlY3QgeCx5LCB3LGhcblwiXCJcIlxuXG5JRF9HdWVzc0FOdW1iZXIgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidiZyBmYyBzYyByYW5nZSB0ZXh0IGZvciBpZiBvcGVyYXRvcnMgaW50IGNsYXNzJ1xuXHRiOlwiXCJcIlxuIyBMT0M6MjlcblxuY2xhc3MgR3Vlc3MgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCAgICAgICAgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgICAgICAgICA6IC0+XG5cdG5ld0dhbWUgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5hcHAgPSBuZXcgR3Vlc3NcblwiXCJcIlxuXHRhOlwiXCJcIlxuY2xhc3MgR3Vlc3MgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRATiA9IDEwMFxuXHRcdEBzZWVkID0gMFxuXHRcdEBuZXdHYW1lKClcblxuXHRyYW5kaW50IDogKG4pIC0+IGludCBuICogZnJhY3Rpb24gMTAwMDAgKiBNYXRoLnNpbiBAc2VlZCsrXG5cblx0bmV3R2FtZSA6IC0+XG5cdFx0QHN0YXJ0ID0gMFxuXHRcdEBzdG9wcCA9IEBOLTFcblx0XHRAc2VjcmV0ID0gQHJhbmRpbnQgQE5cblxuXHRkcmF3IDogLT5cblx0XHRiZyAwLjFcblx0XHR0ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxuXHRcdGZvciBpIGluIHJhbmdlIEBOXG5cdFx0XHRpZiBAc3RhcnQgPD0gaSA8PSBAc3RvcHAgdGhlbiBmYyAxIGVsc2UgZmMgMC41XG5cdFx0XHRzYygpXG5cdFx0XHR4ID0gaSAlIDEwXG5cdFx0XHR5ID0gaW50IGkgLyAxMFxuXHRcdFx0dGV4dCBpLCAxMCArIDIwICogeCwgMTAgKyAyMCAqIHlcblxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5cdFx0Z3Vlc3MgPSBpbnQgbXgvMjAgKyAxMCAqIGludCBteS8yMFxuXHRcdGlmIGd1ZXNzIDw9IEBzZWNyZXQgdGhlbiBAc3RhcnQgPSBndWVzcysxXG5cdFx0aWYgZ3Vlc3MgPj0gQHNlY3JldCB0aGVuIEBzdG9wcCA9IGd1ZXNzLTFcblxuYXBwID0gbmV3IEd1ZXNzIFwiYVwiXG5cdFx0XHRcIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8bmV3R2FtZSgpXCJcblxuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\G.coffee