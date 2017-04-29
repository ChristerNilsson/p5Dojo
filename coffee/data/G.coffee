ID_GameOfLife =
	v:'2017-04-29'
	b:"""
# LOC:40 bg range # for in [] push Array fill * / + - == != < <= ++
#        if then and or int class extends constructor new @ super ->

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

ID_GoldenStar =
	v:'2017-04-29'
	b: """
# LOC:23 bg fc range # for in triangle translate rotate cos sin class extends constructor new @ super ->

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

ID_GuessANumber =
	v:'2017-04-29'
	b:"""
# LOC:29 bg fc sc range # text textAlign for in if then else * / + - % <=
#        int class extends constructor new @ super ->

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

