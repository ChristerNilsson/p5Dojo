ID_GalaxiesColliding =
	v:'2017-04-29'
	k:'fc range for lerp rect if'
	b: "# LOC:8 (David Larsson)\n"
	a: """
for i in range 10
	for j in range 10
		fc()
		if i-j in [-2,0,2] then fc 1,1,0
		if i+j in [7,9,11] then fc 1,0,0
		x = 20*i
		y = 20*j
		rect x,y, 20,20
"""

ID_GameOfLife =
	v:'2017-04-29'
	k:'bg range for [] operators if int class'
	b:"""
# LOC:40

class GameOfLife extends Application
	reset : (n) ->
		super
	draw : ->
	mousePressed : (mx,my) ->
	tick : ->
app = new GameOfLife

"""
	a:"""
class GameOfLife extends Application
	reset : (n) ->
		super
		@n = n
		@size = 200/@n
		@matrix = {}
		@ticks = 0
		for [i,j] in [[0,0],[2,0],[1,1],[2,1],[1,2]]
			@matrix[i+','+j] = 1
	draw : ->
		bg 0.5
		for i in range @n
			for j in range @n
				if @matrix[i+','+j]==1
					rect @size*i, @size*j, @size, @size
	count : (x,y) ->
		res = 0
		for dx in [-1,0,1]
			for dy in [-1,0,1]
				i = (x+dx) %% @n
				j = (y+dy) %% @n
				res++ if @matrix[i+','+j]==1 and (dx!=0 or dy!=0)
		res
	tick : ->
		@ticks++
		m = {}
		for i in range @n
			for j in range @n
				c = @count(i,j)
				key = i+','+j
				if @matrix[key] == 1
					if 2 <= c <= 3 then m[key]=1
				else
					if c==3 then m[key]=1
		@matrix = m
	mousePressed : (mx,my) ->
		i = int mx/@size
		j = int my/@size
		key = i+','+j
		@matrix[key] = if @matrix[key] == 1 then undefined else 1

app = new GameOfLife "a"

"""
	c:
		app : "reset 10|reset 20|reset 40|tick()"
	e:
		Wikipedia : "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"

ID_Girlang =
	v:'2017-04-29'
	k:'sc bg sw range for line class'
	b:"""
# LOC:16

class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->

girlang = (x,y,n,width,dx,dy) ->

girlang 0,0,9,5,20,20
"""
	a:"""
class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->
		sc @r,@g,@b
		line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]

girlang = (x,y,n,width,dx,dy) ->
	a = new Cartesius 1,0,0, x+dx/2,0
	b = new Cartesius 1,1,0, x,y+dy/2

	bg 0
	sw width

	for i in range n
		a.go 0,dy
		b.go dx,0
		b.go 0,dy
		a.go dx,0

girlang 0,0,9,5,20,20
"""

ID_GoldenStar =
	v:'2017-04-29'
	k:'bg fc range for triangle translate rotate cos sin class'
	b: """
# LOC:23

class GoldenStar extends Application
	reset : ->
		super
	draw  : ->
	n     : (d) ->
	outer : (d) ->
	inner : (d) ->
app = new GoldenStar
"""
	a: """
class GoldenStar extends Application
	reset : ->
		super
		@_X = 100
		@_Y = 100
		@_n = 4
		@_outer = 100
		@_inner = 25
	n : (d) -> @_n = constrain @_n+d,3,12
	outer : (d) -> @_outer = constrain @_outer+d, 0, 100
	inner : (d) -> @_inner = constrain @_inner+d, 0, 100
	draw : ->
		bg 0
		translate @_X,@_Y
		v = TWO_PI/@_n
		rotate -PI/2
		x1 = @_inner * cos v/2
		y1 = @_inner * sin v/2
		for i in range @_n
			fc 1,1,0
			triangle 0,0, @_outer,0, x1,y1
			fc 1,0.7,0
			triangle 0,0, @_outer,0, x1,-y1
			rotate v

app = new GoldenStar "a"
"""
	c:
		app : "reset()|n -1|n +1|outer -1|outer +1|inner -1|inner +1"

ID_GreenEllipse =
	v:'2017-04-29'
	k:'fc ellipse'
	b:"# LOC:2 \n"
	a:"""
fc 0,1,0
ellipse 120,60, 60,40
"""

ID_GreenRect =
	v:'2017-04-29'
	k:'fc rect'
	b:"# LOC:2 \n"
	a:"""
fc 0,1,0
rect 60,80, 40,50
"""

ID_Grid =
	v:'2017-04-29'
	k:'sc sw range for line'
	b:"# LOC:5 \n"
	a:"""
sc 1,1,0
sw 2
for i in range 10,200,10
	line 10,i,190,i
	line i,190, i,10
"""

ID_GrowingCircles =
	v:'2017-04-29'
	k:'range fc circle for lerp'
	b:"# LOC:6 \n"
	a:"""
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	r = i
	circle x,y,r
"""

ID_GrowingRedSquares =
	v:'2017-04-29'
	k:'fc range for lerp rect rectMode'
	b:"# LOC:8 \n"
	a:"""
rectMode CENTER
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	w = 2*i
	h = 2*i
	rect x,y,w,h
"""

ID_GrowingSquares =
	v:'2017-04-29'
	k:'range rect rectMode for lerp'
	b:"# LOC:7 \n"
	a:"""
rectMode CENTER
for i in range 10
	x = 10+20*i
	y = 10
	w = 2*i
	h = 2*i
	rect x,y, w,h
"""

ID_GuessANumber =
	v:'2017-04-29'
	k:'bg fc sc range text for if operators int class'
	b:"""
# LOC:29

class Guess extends Application
	reset        : ->
		super
	draw         : ->
	newGame : ->
	mousePressed : (mx,my) ->
app = new Guess
"""
	a:"""
class Guess extends Application
	reset : ->
		super
		@N = 100
		@seed = 0
		@newGame()

	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

	newGame : ->
		@start = 0
		@stopp = @N-1
		@secret = @randint @N

	draw : ->
		bg 0.1
		textAlign CENTER,CENTER
		for i in range @N
			if @start <= i <= @stopp then fc 1 else fc 0.5
			sc()
			x = i % 10
			y = int i / 10
			text i, 10 + 20 * x, 10 + 20 * y

	mousePressed : (mx,my) ->
		guess = int mx/20 + 10 * int my/20
		if guess <= @secret then @start = guess+1
		if guess >= @secret then @stopp = guess-1

app = new Guess "a"
			"""
	c:
		app : "reset()|newGame()"

