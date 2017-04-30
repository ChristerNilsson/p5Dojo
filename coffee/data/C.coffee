ID_Cards =
	v:'2017-04-29'
	b:"# LOC:10 fc sc circle range rd # rect rectMode for in lerp translate\n"
	a:"""
rectMode CENTER
sc 1
translate 100,100
for i in range 18,-1,-1
	r = 1.0*i/18
	fc r,0,0
	w = 70+5*i
	h = 70+5*i
	rect 0,0, w,h
	rd 5
"""

ID_ChessBoard =
	v:'2017-04-29'
	b:"# LOC:7 bg fc range # for in lerp rect\n"
	a:"""
bg 0.5
for i in range 8
	for j in range 8
		fc (i+j)%2
		x = 20+20*i
		y = 20+20*j
		rect x,y, 20,20
"""

ID_ChessGame =
	v:'2017-04-29'
	b:"""
# LOC:53 bg fc sc sw range circle # rectMode class constructor super extends new @
#        rect if then else text textSize textAlign for in split length indexOf
#        "" toUpperCase _.isEqual % + - * / <= == [] push pop length and not substr
# OBS!   Rockad, en passant samt bondeförvandling hanteras ej.
#        Flytta pjäserna med musen. Klick utanför brädet innebär undo.

class Chess extends Application
	reset : ->
		super
	draw  : ->
	mousePressed : (mx,my) ->
app = new Chess
"""
	a:"""
class Chess extends Application
	reset : ->
		super
		@SIZE = 22
		@X = 100
		@Y = 100
		@board = ['RNBQKBNR','PPPPPPPP','........','........','........','........','pppppppp','rnbqkbnr']
		@history = []
		@memory = 0
	draw : ->
		bg 0.5
		textSize 0.9 * @SIZE
		textAlign CENTER,CENTER
		rectMode CENTER
		sc()
		for i in range 8
			for j in range 8
				if (i+j)%2 == 0 then fc 0.6 else fc 0.8
				x = @X-3.5*@SIZE+@SIZE*i
				y = @Y-3.5*@SIZE+@SIZE*(7-j)
				if _.isEqual @memory,[i,j] then fc 0,1,0
				rect x,y, @SIZE, @SIZE
				piece = @board[j][i]
				if piece in "RNBQKP" then fc 0.95 else fc 0
				if piece != '.'
					if piece in "pP" then circle x,y,5 else text piece.toUpperCase(),x,y
	setCharAt : (i,j,chr) ->
    @board[j] = @board[j].substr(0,i) + chr + @board[j].substr(i+1)
	move : (a,b) ->
		[i1,j1] = a
		[i2,j2] = b
		taken = @board[j2][i2]
		@setCharAt i2,j2, @board[j1][i1]
		@setCharAt i1,j1,' '
		@history.push [a,b,taken]
	undo : () ->
		if @history.length == 0 then return
		[a,b,taken] = @history.pop()
		[i1,j1] = a
		[i2,j2] = b
		@setCharAt i1,j1, @board[j2][i2]
		@setCharAt i2,j2, taken
	mousePressed : (mx,my) ->
		i = int (mx-20)/20
		j = 7 - int (my-20)/20
		if 0 <= i <= 7 and 0 <= j <= 7
			if @memory == 0
				@memory = [i,j]
			else
				if not _.isEqual @memory,[i,j] then @move @memory,[i,j]
				@memory = 0
		else
			@undo()

app = new Chess "a"

"""
	c:
		app : "reset()"

ID_ChessRow =
	v:'2017-04-29'
	b:"# LOC:5 bg fc range # % for in lerp rect\n"
	a:"""
bg 0.5
for i in range 8
	fc i%2
	x = 20+20*i
	rect x,20, 20,20
"""

ID_ClickDetector =
	v:'2017-04-29'
	b:"""
# LOC:62 bg sc fc range circle # quad rect triangle class extends constructor new @ super ->
#        or and == dist reverse if then < and * / + - ++ text textAlign textSize rectMode

class Vector
	constructor : (@x,@y) ->
	add : (b) -> new Vector @x+b.x,@y+b.y
	div : (n) -> new Vector @x/n,@y/n

class ClickDetector extends Application
	reset : ->
		super
	draw  : ->
	mousePressed : (mx,my) ->
app = new ClickDetector
"""
	a:"""
class Vector # pga att p5.Vector krockar med min serialisering
	constructor : (@x,@y) ->
	add : (b) -> cv @x+b.x,@y+b.y
	div : (n) -> cv @x/n,@y/n
cv = (x,y) -> new Vector x,y

class Figure
	constructor : (pc) ->
		@pc = cv(int(pc.x),int(pc.y))
		@counter = 0
	draw : -> text @counter,@pc.x,@pc.y
	detect : (bool) ->
		if bool then @counter++
		bool

class Circle extends Figure
	constructor : (@p,@radius,@r,@g,@b) -> super @p
	detect : (mx,my) -> super @radius > dist @p.x,@p.y,mx,my
	draw : -> super circle @p.x,@p.y, @radius

class Rect extends Figure
	constructor : (@p,@w,@h,@r,@g,@b) -> super @p
	detect : (mx,my) -> super @p.x-@w/2 < mx < @p.x+@w/2 and @p.y-@h/2 < my < @p.y+@h/2
	draw : -> super rect @p.x,@p.y,@w,@h

class Triangle extends Figure
	constructor : (@v1,@v2,@v3,@r=0,@g=0,@b=0) -> super @v1.add(@v2).add(@v3).div(3)
	detect : (mx,my) ->
		pt = cv mx,my
		sign = (p1,p2,p3) -> (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y)
		b1 = 0 > sign pt, @v1, @v2
		b2 = 0 > sign pt, @v2, @v3
		b3 = 0 > sign pt, @v3, @v1
		super b1 == b2 and b2 == b3
	draw : -> super triangle @v1.x,@v1.y, @v2.x,@v2.y, @v3.x,@v3.y

class Quad extends Figure
	constructor : (@v1,@v2,@v3,@v4, @r,@g,@b) -> super @v1.add(@v2).add(@v3).add(@v4).div(4)
	detect : (mx,my) ->
		t1 = new Triangle @v1,@v2,@v3
		t2 = new Triangle @v1,@v3,@v4
		super t1.detect(mx,my) or t2.detect(mx,my)
	draw : -> super quad @v1.x,@v1.y, @v2.x,@v2.y, @v3.x,@v3.y, @v4.x,@v4.y

class ClickDetector extends Application
	classes : -> [Vector,Circle,Rect,Triangle,Quad]
	reset : ->
		super
		@figures = []
		@figures.push new Circle cv(70,70), 50, 1,0,0
		@figures.push new Rect cv(130,130), 100,100, 1,1,0
		@figures.push new Triangle cv(100,100), cv(120,0), cv(190,120), 0,1,0
		@figures.push new Quad cv(0,160), cv(60,100), cv(100,120), cv(60,200), 0.5,0.5,0.5
	draw : ->
		rectMode CENTER
		textAlign CENTER,CENTER
		textSize 50
		bg 0.5
		sc 0
		sw 2
		for figure in @figures
			fc figure.r,figure.g,figure.b,0.5
			figure.draw()
	mousePressed : (mx,my) ->
		rev = @figures[..]
		rev.reverse()
		for figure in rev
			return if figure.detect mx,my

app = new ClickDetector "a"
"""
	c:
		app : "reset()"
	e:
		Triangle : "http://stackoverflow.com/questions/2049582/how-to-determine-if-a-point-is-in-a-2d-triangle"

ID_CoffeescriptClock =
	v:'2017-04-29'
	b:"""
# LOC:10 bg fc sc range # * + - for in "" radians text textSize textAlign
"""
	a:"""
bg 1
fc 0
sc()
textSize 20
textAlign CENTER,CENTER
for i in range 12
	v = radians 30*i-90
	x = 100 + 90 * cos v
	y = 100 + 90 * sin v
	text "Coffeescript"[i],x,y
"""

ID_ColorCross =
	v:'2017-04-29'
	b:"# LOC:11 bg sc sw range # for in point\n"
	a:"""
bg 0.5
for k in range 6
	x = [75,25,75,125,75,75][k]
	y = [50,50,100,50,0,150][k]
	for i in range 50
		r = [i/50,0,i/50,1,i/50,i/50][k]
		for j in range 50
			g = [j/50,j/50,1,j/50,0,(50-j)/50][k]
			b = [0,(50-i)/50,j/50,i/50,(50-j)/50,1][k]
			sc r,g,b
			point x+i,y+j
"""

ID_ColorCube =
	v:'2017-04-29'
	b: """
# LOC:33 bg range # for in class extends constructor new @ super ->
#        quad [] push pop fill stroke if then and * / + - <= return

class ColorCube extends Application
	reset       : ->
		super
	draw        : ->
	undo 				: ->
	mousePressed : (mx,my) ->
app = new ColorCube
"""
	a: """
class ColorCube extends Application
	reset : ->
		super
		@r = 0
		@g = 0
		@b = 0
		@size = 256
		@history = []
	draw : ->
		bg 0
		@c = @size / 4
		for b in range 4
			for r in range 4
				for g in range 4
					fill   @r+r*@c+@c/2, @g+g*@c+@c/2, @b+b*@c+@c/2
					stroke @r+r*@c+@c/2, @g+g*@c+@c/2, @b+b*@c+@c/2
					x = r*40-g*10
					y = g*10+b*50 + 5
					quad x+40,y+0, x+80,y+0, x+70,y+10, x+30,y+10
	mousePressed : (mx,my) ->
		if @size == 4 then return
		for b in range 4
			for r in range 4
				for g in range 4
					x = r*40-g*10
					y = g*10+b*50 + 5
					if x+35 <= mx <= x+75 and y <= my <= y+10
						@history.push [@r,@g,@b,@size]
						@size /= 4
						@r += r * @size
						@g += g * @size
						@b += b * @size
						return

	undo : -> if @history.length > 0 then [@r,@g,@b,@size] = @history.pop()

app = new ColorCube "a"
"""
	c:
		app : "reset()|undo()"
	e:
		ColorCube : "https://www.google.se/search?q=color+cube&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjo3_Cm3Y7TAhUJb5oKHcFhCKQQsAQIJg&biw=1745&bih=963&dpr=1.1"

ID_ColorPair =
	v:'2017-04-29'
	b: """
# LOC:41 fc circle # [] .. push dist length splice _.isEqual colorMode HSB
#        _.max _.pairs _.sortBy for in class extends constructor new @ super ->

class ColorPair extends Application
	reset : ->
		super
		@seed = 0
	draw : ->
	mousePressed : (mx,my) ->
	enterName : ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
app = new ColorPair
"""
	a:"""
class ColorPair extends Application
	reset : ->
		super
		@radius = 0
		@seed = 0
		@level = 0
		@changeLevel 1
		@name = ""
		@highScore = {}

	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

	draw : ->
		bg 1
		sw 2
		sc 1,1,1,0.5
		colorMode HSB
		for [x,y,c] in @circles
			fill color c,100,100,0.5
			circle x,y,@radius

	mousePressed : (mx,my) ->
		hitlist = []
		for [x,y,c],i in @circles
			if dist(x,y,mx,my) < @radius then hitlist.push i
		if hitlist.length == 1
			i = hitlist[0]
			circle = @circles[i]
			if @memory == -1
				@memory = circle[2]
				@circles.splice i,1
			else if _.isEqual(@memory, circle[2])
				@memory = -1
				@circles.splice i,1
				if @circles.length == 0
					@updateHighScore() if @name != ""
					@changeLevel 1
			else
				@changeLevel -1
		else
			@changeLevel -1

	updateHighScore : ->
		@highScore[@name] = _.max [@level, @highScore[@name]]
		@topList = _.pairs @highScore
		@topList = _.sortBy @topList, ([name,level]) -> -level

	changeLevel : (d) ->
		@memory = -1
		@level = constrain @level+d, 1, 20
		@circles = []
		@radius = 50
		for i in range @level
			@radius *= 0.95
			c = int i * 360 / @level
			@circles.push [@randint(200), @randint(200), c]
			@circles.push [@randint(200), @randint(200), c]

	enterName : -> @name = @readText()

app = new ColorPair "a"
"""
	c:
		app : "reset()|enterName()"
	e:
		ColorPair : "https://christernilsson.github.io/ColorPair"

ID_Complex =
	v:'2017-04-29'
	b:"""
# LOC:80 bg fc sc range # * / + %% [] line circle text textAlign textSize for in if then else return int
#        {} dist _.isEqual and < != == push pop length constrain class extends constructor new @ super ->

class Complex extends Application
	reset : ->
		super
	draw : ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	mousePressed : (mx,my) ->
app = new Complex
"""
	a:"""
class Complex extends Application
	reset : ->
		super
		@RADIUS = 25
		@buttons = [[30,130,'m'],[70,170,'*i'],[130,170,'*2'],[170,130,'+1'],[30,30,'undo'], [170,30,'new']]
		@seed = 0
		@level = 1
		@createGame()
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	gr : ->
		sc 1,1,1,0.5
		for i in range 21
			line 0, 10 * i, 200, 10 * i
			line 10 * i, 0, 10 * i, 200
		sc 1,1,1
		line 100,0, 100,200
		line 0,100, 200,100
	draw : ->
		@buttons[4][2] = @level - @history.length
		bg 0
		@gr()
		textAlign CENTER,CENTER
		textSize 25
		sc()
		fc 1,0,0
		circle 100+10*@b[0], 100-10*@b[1], 5
		fc 0,1,0
		circle 100+10*@a[0], 100-10*@a[1], 4
		for [x,y,txt],i in @buttons
			fc 1,1,0,0.4
			circle x,y,@RADIUS
			fc 1,1,0
			text txt,x,y
	newGame : ->
		if @level >= @history.length and _.isEqual(@a,@b) then d=1 else d=-1
		@level = constrain @level+d,1,16
		@createGame()
	createGame : ->
		@history = []
		@a = [-10 + @randint(20), -10 + @randint(20)]
		q1 = [@a]
		q2 = []
		visited = {}
		visited[@a] = true
		expand = (n) ->
			if visited[n] then return
			if n[0]*n[0] + n[1]*n[1] > 1000 then return
			visited[n] = true
			q2.push n
		for level in range @level
			for [x,y] in q1
				expand [y,x]
				expand [-y,x]
				expand [2*x,2*y]
				expand [x+1,y]
			q1 = q2
			q2 = []
		@b = @selectTarget q1
	selectTarget : (lst) -> # within 21x21 window, if possible
		bs = ([x,y] for [x,y] in lst when -10 <= x <= 10 and -10 <= y <= 10)
		return bs[@randint(bs.length)] if bs.length > 0
		_.min lst, ([x,y]) -> dist 0,0,x,y
	undo : ->
		if @history.length == 0 then return
		@a = @history.pop()
	mousePressed : (mx,my) ->
		index = -1
		for [x,y,txt],i in @buttons
			if dist(mx,my,x,y) < @RADIUS then index = i
		[x,y] = @a
		a = []
		if index == 0 then a = [y,x]
		if index == 1 then a = [-y,x]
		if index == 2 then a = [2*x,2*y]
		if index == 3 then a = [x+1,y]
		if index == 4 then @undo()
		if index == 5 then @newGame()
		if a.length != 0
			@history.push @a
			@a = a

app = new Complex "a"

"""
	c:
		app : "reset()"
	e:
		"Komplexa tal" : "http://www.matteboken.se/lektioner/matte-4/komplexa-tal/rakna-med-komplexa-tal"

ID_Connect4 =
	v:'2017-04-29'
	b:"""
# LOC:33 % bg fc sc sw circle range # text textAlign textSize for in
#        push pop class extends constructor new @ super ->

class Connect4 extends Application
	reset : ->
		super
	draw  : ->
	undo  : ->
	mousePressed : (mx,my) ->
app = new Connect4
			"""
	a:"""
class Connect4 extends Application
	reset : ->
		super
		@SIZE = 27
		@list = ([] for i in range 7)
		@moves = []
	draw : ->
		bg 0
		textAlign CENTER,CENTER
		textSize @SIZE/2
		fc()
		sc 0.1,0.3,1
		sw 0.2 * @SIZE
		for i in range 7
			for j in range 6
				circle 100-@SIZE*3+@SIZE*i, 180-@SIZE*j, @SIZE/2
		for column,i in @list
			for nr,j in column
				fc 1,nr%2,0
				sw 1
				circle 100-@SIZE*3+@SIZE*i, 180-@SIZE*j, @SIZE*0.4
				fc 0
				sc()
				text nr, 100-@SIZE*3+@SIZE*i, 180-@SIZE*j
		sc()
		fc 1,(@moves.length+1)%2,0
		circle 100,15,10
	mousePressed : (mx,my) ->
		nr = int (mx-(200-7*@SIZE)/2)/@SIZE
		if 0 <= nr <= 6
			@moves.push nr
			@list[nr].push @moves.length
	undo : -> if @moves.length > 0 then @list[@moves.pop()].pop()

app = new Connect4 "a"
"""
	c:
		app : "reset()|undo()"
	e:
		Wikipedia : "https://en.wikipedia.org/wiki/Connect_Four"

ID_CornerPoints =
	v:'2017-04-29'
	b: """
# LOC:9 sc sw # point

sw
sc
point

"""
	a: """
sw 10
sc 1,0,0
point 0,0
sc 0,1,0
point 200,0
sc 1,1,0
point 0,200
sc 0
point 200,200
"""
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID_CornerPoints3 =
	v:'2017-04-29'
	b: "# LOC:17 sc sw # point\n"
	a: """
sw 10
sc 1,0,0
point 20,0
point 20,20
point 0,20

sc 0,1,0
point 180,0
point 180,20
point 200,20

sc 1,1,0
point 20,180
point 20,200
point 0,180

sc 1
point 180,180
point 180,200
point 200,180
"""
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID_CornerPoints7 =
	v:'2017-04-29'
	b: "# LOC:17 sc sw # point\n"
	a: """
sw 10
sc 1,0,0
point 30,0
point 30,10
point 30,20
point 30,30
point 10,30
point 20,30
point 0,30

sc 0,1,0
point 170,200
point 170,190
point 170,180
point 170,170
point 190,170
point 180,170
point 200,170
"""
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID_Counter =
	v:'2017-04-29'
	b:"""
# LOC:12 bg fc sc # text textAlign textSize + - class extends constructor new @ super ->
# Klicka på reset() om du får ett felmeddelande!

class Counter extends Application
	reset : ->
		super
	draw  : ->
	up    : ->
	down  : ->
	mousePressed : (mx,my) -> print "mousePressed",mx,my
app = new Counter
"""
	a:"""
class Counter extends Application
	reset : ->
		super
		@counter = 0
	up : -> @counter += 1
	down : -> @counter -= 1
	draw : ->
		bg 0.5
		fc 1,1,0
		sc()
		textAlign CENTER,CENTER
		textSize 100
		text @counter,100,100
	mousePressed : (mx,my) -> if my < 100 then @counter += 1 else @counter -= 1

app = new Counter "a"
"""
	c:
		app : "reset()|up()|down()"

ID_Cross =
	v:'2017-04-29'
	b:"# LOC:4 fc # rect\n"
	a:"""
fc 1,0,0
sc()
rect 85,70, 70,10
rect 115,40, 10,100
"""

