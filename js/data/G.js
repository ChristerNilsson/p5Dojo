// Generated by CoffeeScript 1.11.1
var ID_GalaxiesColliding, ID_GameOfLife, ID_Girlang, ID_GoldenStar, ID_GreenEllipse, ID_GreenRect, ID_Grid, ID_GrowingCircles, ID_GrowingRedSquares, ID_GrowingSquares, ID_GuessANumber, ID_GuessANumberHex;

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

ID_GuessANumberHex = {
  v: '2017-05-11',
  k: 'bg fc sc range text for if operators int class',
  b: "# LOC:33 hex\n\nclass GuessANumberHex extends Application\n	reset        : ->\n		super\n	draw         : ->\n	newGame : ->\n	mousePressed : (mx,my) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\napp = new GuessANumberHex",
  a: "class GuessANumberHex extends Application\n	reset : ->\n		super\n		@BASE = 16\n		@N = @BASE*@BASE\n		@S = 200 / @BASE\n		@seed = 1\n		@newGame()\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	newGame : ->\n		@start = 0\n		@stopp = @N-1\n		@secret = @randint @N\n		@count = 0\n	draw : ->\n		bg 0\n		textAlign CENTER,CENTER\n		textSize 9\n		for i in range @N\n			if @start <= i <= @stopp then fc 1 else fc 0.5\n			sc()\n			x = i % @BASE\n			y = int i / @BASE\n			text hex(i,2), @S/2 + @S * x, @S/2 + @S * y\n		fc 1,1,1,0.5\n		textSize 100\n		text @count,100,100\n	mousePressed : (mx,my) ->\n		guess = int mx/@S + @BASE * int my/@S\n		@seed += mx % 2\n		@count++\n		if guess <= @secret then @start = guess+1\n		if guess >= @secret then @stopp = guess-1\n\napp = new GuessANumberHex \"a\"",
  c: {
    app: "reset()|newGame()"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcRy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsb0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDJCQURGO0VBRUEsQ0FBQSxFQUFHLDJCQUZIO0VBR0EsQ0FBQSxFQUFHLGtLQUhIOzs7QUFjRCxhQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx3Q0FERjtFQUVBLENBQUEsRUFBRSx3SkFGRjtFQWNBLENBQUEsRUFBRSx3NUJBZEY7RUEyREEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLG1DQUFOO0dBNUREO0VBNkRBLENBQUEsRUFDQztJQUFBLFNBQUEsRUFBWSx1REFBWjtHQTlERDs7O0FBZ0VELFVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLCtCQURGO0VBRUEsQ0FBQSxFQUFFLGlKQUZGO0VBYUEsQ0FBQSxFQUFFLDhXQWJGOzs7QUFxQ0QsYUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUseURBREY7RUFFQSxDQUFBLEVBQUcsOEpBRkg7RUFjQSxDQUFBLEVBQUcsMmpCQWRIO0VBMENBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSx1REFBTjtHQTNDRDs7O0FBNkNELGVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLFlBREY7RUFFQSxDQUFBLEVBQUUsWUFGRjtFQUdBLENBQUEsRUFBRSxpQ0FIRjs7O0FBUUQsWUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsU0FERjtFQUVBLENBQUEsRUFBRSxZQUZGO0VBR0EsQ0FBQSxFQUFFLDZCQUhGOzs7QUFRRCxPQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxzQkFERjtFQUVBLENBQUEsRUFBRSxZQUZGO0VBR0EsQ0FBQSxFQUFFLCtFQUhGOzs7QUFXRCxpQkFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsMEJBREY7RUFFQSxDQUFBLEVBQUUsWUFGRjtFQUdBLENBQUEsRUFBRSxpRkFIRjs7O0FBWUQsb0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLGlDQURGO0VBRUEsQ0FBQSxFQUFFLFlBRkY7RUFHQSxDQUFBLEVBQUUsOEdBSEY7OztBQWNELGlCQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSw4QkFERjtFQUVBLENBQUEsRUFBRSxZQUZGO0VBR0EsQ0FBQSxFQUFFLCtGQUhGOzs7QUFhRCxlQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxnREFERjtFQUVBLENBQUEsRUFBRSwwSkFGRjtFQWFBLENBQUEsRUFBRSx3bUJBYkY7RUE2Q0EsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLG1CQUFOO0dBOUNEOzs7QUFnREQsa0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLGdEQURGO0VBRUEsQ0FBQSxFQUFFLCtPQUZGO0VBY0EsQ0FBQSxFQUFFLGt5QkFkRjtFQW1EQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0sbUJBQU47R0FwREQiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9HYWxheGllc0NvbGxpZGluZyA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2ZjIHJhbmdlIGZvciBsZXJwIHJlY3QgaWYnXG5cdGI6IFwiIyBMT0M6OCAoRGF2aWQgTGFyc3NvbilcXG5cIlxuXHRhOiBcIlwiXCJcbmZvciBpIGluIHJhbmdlIDEwXG5cdGZvciBqIGluIHJhbmdlIDEwXG5cdFx0ZmMoKVxuXHRcdGlmIGktaiBpbiBbLTIsMCwyXSB0aGVuIGZjIDEsMSwwXG5cdFx0aWYgaStqIGluIFs3LDksMTFdIHRoZW4gZmMgMSwwLDBcblx0XHR4ID0gMjAqaVxuXHRcdHkgPSAyMCpqXG5cdFx0cmVjdCB4LHksIDIwLDIwXG5cIlwiXCJcblxuSURfR2FtZU9mTGlmZSA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2JnIHJhbmdlIGZvciBbXSBvcGVyYXRvcnMgaWYgaW50IGNsYXNzJ1xuXHRiOlwiXCJcIlxuIyBMT0M6NDBcblxuY2xhc3MgR2FtZU9mTGlmZSBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogKG4pIC0+XG5cdFx0c3VwZXJcblx0ZHJhdyA6IC0+XG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0dGljayA6IC0+XG5hcHAgPSBuZXcgR2FtZU9mTGlmZVxuXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIEdhbWVPZkxpZmUgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IChuKSAtPlxuXHRcdHN1cGVyXG5cdFx0QG4gPSBuXG5cdFx0QHNpemUgPSAyMDAvQG5cblx0XHRAbWF0cml4ID0ge31cblx0XHRAdGlja3MgPSAwXG5cdFx0Zm9yIFtpLGpdIGluIFtbMCwwXSxbMiwwXSxbMSwxXSxbMiwxXSxbMSwyXV1cblx0XHRcdEBtYXRyaXhbaSsnLCcral0gPSAxXG5cdGRyYXcgOiAtPlxuXHRcdGJnIDAuNVxuXHRcdGZvciBpIGluIHJhbmdlIEBuXG5cdFx0XHRmb3IgaiBpbiByYW5nZSBAblxuXHRcdFx0XHRpZiBAbWF0cml4W2krJywnK2pdPT0xXG5cdFx0XHRcdFx0cmVjdCBAc2l6ZSppLCBAc2l6ZSpqLCBAc2l6ZSwgQHNpemVcblx0Y291bnQgOiAoeCx5KSAtPlxuXHRcdHJlcyA9IDBcblx0XHRmb3IgZHggaW4gWy0xLDAsMV1cblx0XHRcdGZvciBkeSBpbiBbLTEsMCwxXVxuXHRcdFx0XHRpID0gKHgrZHgpICUlIEBuXG5cdFx0XHRcdGogPSAoeStkeSkgJSUgQG5cblx0XHRcdFx0cmVzKysgaWYgQG1hdHJpeFtpKycsJytqXT09MSBhbmQgKGR4IT0wIG9yIGR5IT0wKVxuXHRcdHJlc1xuXHR0aWNrIDogLT5cblx0XHRAdGlja3MrK1xuXHRcdG0gPSB7fVxuXHRcdGZvciBpIGluIHJhbmdlIEBuXG5cdFx0XHRmb3IgaiBpbiByYW5nZSBAblxuXHRcdFx0XHRjID0gQGNvdW50KGksailcblx0XHRcdFx0a2V5ID0gaSsnLCcralxuXHRcdFx0XHRpZiBAbWF0cml4W2tleV0gPT0gMVxuXHRcdFx0XHRcdGlmIDIgPD0gYyA8PSAzIHRoZW4gbVtrZXldPTFcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIGM9PTMgdGhlbiBtW2tleV09MVxuXHRcdEBtYXRyaXggPSBtXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0XHRpID0gaW50IG14L0BzaXplXG5cdFx0aiA9IGludCBteS9Ac2l6ZVxuXHRcdGtleSA9IGkrJywnK2pcblx0XHRAbWF0cml4W2tleV0gPSBpZiBAbWF0cml4W2tleV0gPT0gMSB0aGVuIHVuZGVmaW5lZCBlbHNlIDFcblxuYXBwID0gbmV3IEdhbWVPZkxpZmUgXCJhXCJcblxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCAxMHxyZXNldCAyMHxyZXNldCA0MHx0aWNrKClcIlxuXHRlOlxuXHRcdFdpa2lwZWRpYSA6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29ud2F5JTI3c19HYW1lX29mX0xpZmVcIlxuXG5JRF9HaXJsYW5nID1cblx0djonMjAxNy0wNC0yOSdcblx0azonc2MgYmcgc3cgcmFuZ2UgZm9yIGxpbmUgY2xhc3MnXG5cdGI6XCJcIlwiXG4jIExPQzoxNlxuXG5jbGFzcyBDYXJ0ZXNpdXNcblx0Y29uc3RydWN0b3IgOiAoQHIsQGcsQGIsIEB4LEB5KSAtPlxuXHRnbyA6IChkeCxkeSkgLT5cblxuZ2lybGFuZyA9ICh4LHksbix3aWR0aCxkeCxkeSkgLT5cblxuZ2lybGFuZyAwLDAsOSw1LDIwLDIwXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIENhcnRlc2l1c1xuXHRjb25zdHJ1Y3RvciA6IChAcixAZyxAYiwgQHgsQHkpIC0+XG5cdGdvIDogKGR4LGR5KSAtPlxuXHRcdHNjIEByLEBnLEBiXG5cdFx0bGluZSBAeCxAeSxAeCtkeCxAeStkeVxuXHRcdFtAeCxAeV0gPSBbQHgrZHgsQHkrZHldXG5cbmdpcmxhbmcgPSAoeCx5LG4sd2lkdGgsZHgsZHkpIC0+XG5cdGEgPSBuZXcgQ2FydGVzaXVzIDEsMCwwLCB4K2R4LzIsMFxuXHRiID0gbmV3IENhcnRlc2l1cyAxLDEsMCwgeCx5K2R5LzJcblxuXHRiZyAwXG5cdHN3IHdpZHRoXG5cblx0Zm9yIGkgaW4gcmFuZ2UgblxuXHRcdGEuZ28gMCxkeVxuXHRcdGIuZ28gZHgsMFxuXHRcdGIuZ28gMCxkeVxuXHRcdGEuZ28gZHgsMFxuXG5naXJsYW5nIDAsMCw5LDUsMjAsMjBcblwiXCJcIlxuXG5JRF9Hb2xkZW5TdGFyID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgZmMgcmFuZ2UgZm9yIHRyaWFuZ2xlIHRyYW5zbGF0ZSByb3RhdGUgY29zIHNpbiBjbGFzcydcblx0YjogXCJcIlwiXG4jIExPQzoyM1xuXG5jbGFzcyBHb2xkZW5TdGFyIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgIDogLT5cblx0biAgICAgOiAoZCkgLT5cblx0b3V0ZXIgOiAoZCkgLT5cblx0aW5uZXIgOiAoZCkgLT5cbmFwcCA9IG5ldyBHb2xkZW5TdGFyXG5cIlwiXCJcblx0YTogXCJcIlwiXG5jbGFzcyBHb2xkZW5TdGFyIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QF9YID0gMTAwXG5cdFx0QF9ZID0gMTAwXG5cdFx0QF9uID0gNFxuXHRcdEBfb3V0ZXIgPSAxMDBcblx0XHRAX2lubmVyID0gMjVcblx0biA6IChkKSAtPiBAX24gPSBjb25zdHJhaW4gQF9uK2QsMywxMlxuXHRvdXRlciA6IChkKSAtPiBAX291dGVyID0gY29uc3RyYWluIEBfb3V0ZXIrZCwgMCwgMTAwXG5cdGlubmVyIDogKGQpIC0+IEBfaW5uZXIgPSBjb25zdHJhaW4gQF9pbm5lcitkLCAwLCAxMDBcblx0ZHJhdyA6IC0+XG5cdFx0YmcgMFxuXHRcdHRyYW5zbGF0ZSBAX1gsQF9ZXG5cdFx0diA9IFRXT19QSS9AX25cblx0XHRyb3RhdGUgLVBJLzJcblx0XHR4MSA9IEBfaW5uZXIgKiBjb3Mgdi8yXG5cdFx0eTEgPSBAX2lubmVyICogc2luIHYvMlxuXHRcdGZvciBpIGluIHJhbmdlIEBfblxuXHRcdFx0ZmMgMSwxLDBcblx0XHRcdHRyaWFuZ2xlIDAsMCwgQF9vdXRlciwwLCB4MSx5MVxuXHRcdFx0ZmMgMSwwLjcsMFxuXHRcdFx0dHJpYW5nbGUgMCwwLCBAX291dGVyLDAsIHgxLC15MVxuXHRcdFx0cm90YXRlIHZcblxuYXBwID0gbmV3IEdvbGRlblN0YXIgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxuIC0xfG4gKzF8b3V0ZXIgLTF8b3V0ZXIgKzF8aW5uZXIgLTF8aW5uZXIgKzFcIlxuXG5JRF9HcmVlbkVsbGlwc2UgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidmYyBlbGxpcHNlJ1xuXHRiOlwiIyBMT0M6MiBcXG5cIlxuXHRhOlwiXCJcIlxuZmMgMCwxLDBcbmVsbGlwc2UgMTIwLDYwLCA2MCw0MFxuXCJcIlwiXG5cbklEX0dyZWVuUmVjdCA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2ZjIHJlY3QnXG5cdGI6XCIjIExPQzoyIFxcblwiXG5cdGE6XCJcIlwiXG5mYyAwLDEsMFxucmVjdCA2MCw4MCwgNDAsNTBcblwiXCJcIlxuXG5JRF9HcmlkID1cblx0djonMjAxNy0wNC0yOSdcblx0azonc2Mgc3cgcmFuZ2UgZm9yIGxpbmUnXG5cdGI6XCIjIExPQzo1IFxcblwiXG5cdGE6XCJcIlwiXG5zYyAxLDEsMFxuc3cgMlxuZm9yIGkgaW4gcmFuZ2UgMTAsMjAwLDEwXG5cdGxpbmUgMTAsaSwxOTAsaVxuXHRsaW5lIGksMTkwLCBpLDEwXG5cIlwiXCJcblxuSURfR3Jvd2luZ0NpcmNsZXMgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidyYW5nZSBmYyBjaXJjbGUgZm9yIGxlcnAnXG5cdGI6XCIjIExPQzo2IFxcblwiXG5cdGE6XCJcIlwiXG5mb3IgaSBpbiByYW5nZSAxMFxuXHRmYyBpLzEwLjAsMCwwXG5cdHggPSAxMCsyMCppXG5cdHkgPSAxMFxuXHRyID0gaVxuXHRjaXJjbGUgeCx5LHJcblwiXCJcIlxuXG5JRF9Hcm93aW5nUmVkU3F1YXJlcyA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2ZjIHJhbmdlIGZvciBsZXJwIHJlY3QgcmVjdE1vZGUnXG5cdGI6XCIjIExPQzo4IFxcblwiXG5cdGE6XCJcIlwiXG5yZWN0TW9kZSBDRU5URVJcbmZvciBpIGluIHJhbmdlIDEwXG5cdGZjIGkvMTAuMCwwLDBcblx0eCA9IDEwKzIwKmlcblx0eSA9IDEwXG5cdHcgPSAyKmlcblx0aCA9IDIqaVxuXHRyZWN0IHgseSx3LGhcblwiXCJcIlxuXG5JRF9Hcm93aW5nU3F1YXJlcyA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J3JhbmdlIHJlY3QgcmVjdE1vZGUgZm9yIGxlcnAnXG5cdGI6XCIjIExPQzo3IFxcblwiXG5cdGE6XCJcIlwiXG5yZWN0TW9kZSBDRU5URVJcbmZvciBpIGluIHJhbmdlIDEwXG5cdHggPSAxMCsyMCppXG5cdHkgPSAxMFxuXHR3ID0gMippXG5cdGggPSAyKmlcblx0cmVjdCB4LHksIHcsaFxuXCJcIlwiXG5cbklEX0d1ZXNzQU51bWJlciA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2JnIGZjIHNjIHJhbmdlIHRleHQgZm9yIGlmIG9wZXJhdG9ycyBpbnQgY2xhc3MnXG5cdGI6XCJcIlwiXG4jIExPQzoyOVxuXG5jbGFzcyBHdWVzcyBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0ICAgICAgICA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgICAgICAgIDogLT5cblx0bmV3R2FtZSA6IC0+XG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cbmFwcCA9IG5ldyBHdWVzc1xuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBHdWVzcyBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBOID0gMTAwXG5cdFx0QHNlZWQgPSAwXG5cdFx0QG5ld0dhbWUoKVxuXG5cdHJhbmRpbnQgOiAobikgLT4gaW50IG4gKiBmcmFjdGlvbiAxMDAwMCAqIE1hdGguc2luIEBzZWVkKytcblxuXHRuZXdHYW1lIDogLT5cblx0XHRAc3RhcnQgPSAwXG5cdFx0QHN0b3BwID0gQE4tMVxuXHRcdEBzZWNyZXQgPSBAcmFuZGludCBATlxuXG5cdGRyYXcgOiAtPlxuXHRcdGJnIDAuMVxuXHRcdHRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgQE5cblx0XHRcdGlmIEBzdGFydCA8PSBpIDw9IEBzdG9wcCB0aGVuIGZjIDEgZWxzZSBmYyAwLjVcblx0XHRcdHNjKClcblx0XHRcdHggPSBpICUgMTBcblx0XHRcdHkgPSBpbnQgaSAvIDEwXG5cdFx0XHR0ZXh0IGksIDEwICsgMjAgKiB4LCAxMCArIDIwICogeVxuXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0XHRndWVzcyA9IGludCBteC8yMCArIDEwICogaW50IG15LzIwXG5cdFx0aWYgZ3Vlc3MgPD0gQHNlY3JldCB0aGVuIEBzdGFydCA9IGd1ZXNzKzFcblx0XHRpZiBndWVzcyA+PSBAc2VjcmV0IHRoZW4gQHN0b3BwID0gZ3Vlc3MtMVxuXG5hcHAgPSBuZXcgR3Vlc3MgXCJhXCJcblx0XHRcdFwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxuZXdHYW1lKClcIlxuXG5JRF9HdWVzc0FOdW1iZXJIZXggPVxuXHR2OicyMDE3LTA1LTExJ1xuXHRrOidiZyBmYyBzYyByYW5nZSB0ZXh0IGZvciBpZiBvcGVyYXRvcnMgaW50IGNsYXNzJ1xuXHRiOlwiXCJcIlxuIyBMT0M6MzMgaGV4XG5cbmNsYXNzIEd1ZXNzQU51bWJlckhleCBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0ICAgICAgICA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgICAgICAgIDogLT5cblx0bmV3R2FtZSA6IC0+XG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0cmFuZGludCA6IChuKSAtPiBpbnQgbiAqIGZyYWN0aW9uIDEwMDAwICogTWF0aC5zaW4gQHNlZWQrK1xuYXBwID0gbmV3IEd1ZXNzQU51bWJlckhleFxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBHdWVzc0FOdW1iZXJIZXggZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAQkFTRSA9IDE2XG5cdFx0QE4gPSBAQkFTRSpAQkFTRVxuXHRcdEBTID0gMjAwIC8gQEJBU0Vcblx0XHRAc2VlZCA9IDFcblx0XHRAbmV3R2FtZSgpXG5cdHJhbmRpbnQgOiAobikgLT4gaW50IG4gKiBmcmFjdGlvbiAxMDAwMCAqIE1hdGguc2luIEBzZWVkKytcblx0bmV3R2FtZSA6IC0+XG5cdFx0QHN0YXJ0ID0gMFxuXHRcdEBzdG9wcCA9IEBOLTFcblx0XHRAc2VjcmV0ID0gQHJhbmRpbnQgQE5cblx0XHRAY291bnQgPSAwXG5cdGRyYXcgOiAtPlxuXHRcdGJnIDBcblx0XHR0ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxuXHRcdHRleHRTaXplIDlcblx0XHRmb3IgaSBpbiByYW5nZSBATlxuXHRcdFx0aWYgQHN0YXJ0IDw9IGkgPD0gQHN0b3BwIHRoZW4gZmMgMSBlbHNlIGZjIDAuNVxuXHRcdFx0c2MoKVxuXHRcdFx0eCA9IGkgJSBAQkFTRVxuXHRcdFx0eSA9IGludCBpIC8gQEJBU0Vcblx0XHRcdHRleHQgaGV4KGksMiksIEBTLzIgKyBAUyAqIHgsIEBTLzIgKyBAUyAqIHlcblx0XHRmYyAxLDEsMSwwLjVcblx0XHR0ZXh0U2l6ZSAxMDBcblx0XHR0ZXh0IEBjb3VudCwxMDAsMTAwXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0XHRndWVzcyA9IGludCBteC9AUyArIEBCQVNFICogaW50IG15L0BTXG5cdFx0QHNlZWQgKz0gbXggJSAyXG5cdFx0QGNvdW50Kytcblx0XHRpZiBndWVzcyA8PSBAc2VjcmV0IHRoZW4gQHN0YXJ0ID0gZ3Vlc3MrMVxuXHRcdGlmIGd1ZXNzID49IEBzZWNyZXQgdGhlbiBAc3RvcHAgPSBndWVzcy0xXG5cbmFwcCA9IG5ldyBHdWVzc0FOdW1iZXJIZXggXCJhXCJcblx0XHRcdFwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxuZXdHYW1lKClcIlxuXG4iXX0=
//# sourceURL=C:\github\p5Dojo\coffee\data\G.coffee