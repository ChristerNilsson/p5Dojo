ID_OlympicRingPrep =
	v:'2017-04-29'
	b:"""
# LOC:21 sc fc sw # arc strokeCap class extends constructor new @ super ->

class Ring extends Application
	reset  : ->
		super
	draw   : ->
	start  : (d) ->
	stopp  : (d) ->
	radius : (d) ->
	width  : (d) ->
app = new Ring
"""
	a:"""
class Ring extends Application
	reset : ->
		super
		@_start = 3
		@_stopp = 6
		@_w = 5
		@_radius = 50
	start : (d) -> @_start+=d
	stopp : (d) -> @_stopp+=d
	radius : (d) -> @_radius+=d
	width : (d) -> @_w+=d
	draw : ->
		hour = PI/6
		strokeCap SQUARE
		fc()
		sw @_w
		sc 1,1,0
		arc 100,100,2*@_radius,2*@_radius,(@_start-3)*hour,(@_stopp-3)*hour

app = new Ring "a"
"""
	c:
		app : "reset()|start -1|start +1|stopp -1|stopp +1|radius -1|radius +1|width -1|width +1"

ID_OlympicRings =
	v:'2017-04-29'
	b: """
# LOC:24 sc bg fc sw # arc strokeCap class constructor new @

class Ring
	constructor : (@x,@y,@r,@g,@b) ->
	draw : (start=3,stopp=3,hour=PI/6) ->

olympic = (x=100,y=100,radius=50,d=60,w=10) ->

olympic()
"""
	a: """
class Ring
	constructor : (@x,@y,@radius, @r,@g,@b) ->
	draw : (start=3,stopp=3,hour=PI/6) ->
		sc @r,@g,@b
		arc @x,@y,@radius,@radius,(start-3)*hour,(stopp-3)*hour

olympic = (x=100,y=100,radius=50,d=60,w=10) ->
	r1 = new Ring x-d,  y,     radius, 0,0,1
	r2 = new Ring x,    y,     radius, 0,0,0
	r3 = new Ring x+d,  y,     radius, 1,0,0
	r4 = new Ring x-d/2,y+d/3, radius, 1,1,0
	r5 = new Ring x+d/2,y+d/3, radius, 0,1,0

	strokeCap SQUARE
	bg 0.5
	fc()
	sw w

	r1.draw()
	r3.draw()
	r4.draw()
	r5.draw()
	r1.draw 2,4
	r2.draw()
	r4.draw 12,2
	r5.draw 8,10
	r3.draw 6,8

olympic()
"""
	e :
		Wikipedia : "https://en.wikipedia.org/wiki/Olympic_symbols"

ID_OneDiceHistogram =
	v:'2017-04-29'
	b:"""
# LOC:17 fc sc range # Array fill length int random text textAlign for in ++ * / + - rect []
# OBS: På grund av random blir bitmapparna inte likadana

h = 50
counts = Array(4).fill 150
for count,i in counts
	y = h*i
	rect 0,y,count,h
	text y,0,y
"""
	a:"""
counts = Array(6).fill 0
dice = -> int 6 * random()
for i in range 1000
	counts[dice()]++
h = int 200/6
sc()
for count,i in counts
	y = h*i
	fc 1,1,0,0.5
	sc 1,1,0
	rect 0,y,count,h-3
	fc 1,1,0
	sc()
	textAlign LEFT,CENTER
	text i+1, 5,y+h/2
	textAlign RIGHT,CENTER
	text count, count-5,y+h/2
"""

ID_Reversi =
	v:'2017-05-02'
	b: """
# LOC:49 sc fc bg range # [] push length rect circle not and while if then
#        % + - * / <= < == class extends constructor new @ super ->

class Reversi extends Application
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
app = new Reversi
"""
	a: """
class Reversi extends Application
	reset : ->
		super
		@newGame()
	newGame : ->
		@board = []
		@drag = 0
		for i in range 8
			@board.push []
			for j in range 8
				@board[i].push 0
		@board[3][3]=1 # Black
		@board[3][4]=2 # White
		@board[4][3]=2
		@board[4][4]=1
	draw : ->
		sc 0
		for i in range 8
			for j in range 8
				sq = @board[j][i]
				fc 0,1,0
				rect 20+20*i, 20+20*j,20,20
				if sq in [1,2]
					fc sq-1
					circle 30.5+20*i, 30.5+20*j,10-2
	move : (i,j) ->
		res = []
		mycol = 1 + @drag % 2
		other = [0,2,1][mycol]
		for di in [-1,0,1]
			for dj in [-1,0,1]
				if not (di==0 and dj==0)
					i1=i+di
					j1=j+dj
					temp = []
					while 0 <= i1 < 8 and 0 <= j1 < 8 and @board[j1][i1] == other
						temp.push [i1,j1]
						i1 = i1+di
						j1 = j1+dj
					if 0 <= i1 < 8 and 0 <= j1 < 8 and @board[j1][i1] == mycol
						if temp.length > 0 then	res = res.concat temp
		if res.length > 0
			@board[j][i] = mycol
			for [i,j] in res then	@board[j][i] = mycol
			@drag++
	mousePressed : (mx,my) ->
		i = int mx / 20 - 1
		j = int my / 20 - 1
		if 0 <= i < 8 and 0 <= j < 8 and @board[j][i] == 0 then @move i,j

app = new Reversi "a"
"""
	c:
		app : "reset()"
	e:
		Reversi : "https://en.wikipedia.org/wiki/Reversi"
