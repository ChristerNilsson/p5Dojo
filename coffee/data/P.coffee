ID_PickingBerries =
	v:'2017-04-29'
	b:"""
# LOC:46 bg sc fc sw # [] * + line text textSize textAlign constrain dist
#        splice break for in class extends constructor new @ super ->

class PickingBerries extends Application
	reset      : ->
		super
	draw       : ->
	left       : ->
	right      : ->
	up         : ->
	down       : ->
	snailSpeed : ->
	slowSpeed  : ->
	highSpeed  : ->
	warpSpeed  : ->
	pick       : ->
app = new PickingBerries
"""
	a:"""
class PickingBerries extends Application

	reset : ->
		super
		@SPEEDS = [1,5,20,50]
		@x = 100
		@y = 100
		@speed = 2 # 0..3
		@clicks = 0
		@xs = [100,189,124,196,13,187,12,153,32,131]
		@ys = [107,175,138,188,37,78,168,31,20,188]
		@moves = ""
		@dxdy = [[1,0],[0,1],[-1,0],[0,-1]]

	draw : ->
		bg 0
		rectMode CENTER
		sc 1
		sw 1
		rect @x,@y,2*@SPEEDS[@speed],2*@SPEEDS[@speed]
		for [dx,dy] in @dxdy
			for i in range 4
				point @x+dx*@SPEEDS[i], @y+dy*@SPEEDS[i]

		fc 1,1,0
		sc()
		textSize 20
		textAlign CENTER,CENTER
		text @clicks,100,180

		sc 1,0,0
		sw 2
		for [x,y] in _.zip @xs,@ys
			line x-3,y-3,x+3,y+3
			line x+3,y-3,x-3,y+3

	move : (i) ->
		[dx,dy] = @dxdy[i]
		@x += dx * @SPEEDS[@speed]
		@y += dy * @SPEEDS[@speed]
		@clicks++
		@moves += 'abcd'[i]

	setSpeed : (index) ->
		@speed = index
		@moves += index

	right   : -> @move 0
	down    : -> @move 1
	left    : -> @move 2
	up      : -> @move 3

	snailSpeed : -> @setSpeed 0
	slowSpeed  : -> @setSpeed 1
	highSpeed  : -> @setSpeed 2
	warpSpeed  : -> @setSpeed 3

	step : (d) ->
		@clicks++
		constrain @zoom+d,0,3
	pick : ->
		for [x,y],i in _.zip @xs,@ys
			if dist(x,y,@x,@y) <= 2
				@xs.splice i,1
				@ys.splice i,1
				break
		@clicks++

app = new PickingBerries "a"
			"""
	c:
		app : "reset()|left()|right()|up()|down()|snailSpeed()|slowSpeed()|highSpeed()|warpSpeed()|pick()"

ID_Polygon =
	v:'2017-04-29'
	b:"""
# LOC:23 bg sc range # line for in cos sin radians class extends constructor new @ super ->

class Turtle
	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->
	fd : (d) ->
	rt : (a) ->

class Polygon extends Application
	reset      : ->
		super
	draw       : ->
	antalSidor : (d) ->
	antalSteg  : (d) ->
app = new Polygon
"""
	a:"""
class Turtle
	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->
	fd : (d) ->
		dx = d*cos radians @dir
		dy = d*sin radians @dir
		sc @r,@g,@b
		line @x,@y,@x+dx,@y+dy
		@x += dx
		@y += dy
	rt : (a) ->
		@dir +=a

class Polygon extends Application
	reset : ->
		super
		@n = 6
		@steg = 60

	draw : ->
		t = new Turtle()
		bg 0
		for i in range @n
			t.fd @steg
			t.rt 360/@n

	antalSidor : (d) -> @n += d
	antalSteg : (d) -> @steg += d

app = new Polygon "a"
"""
	c:
		app : "reset()|antalSidor -1|antalSidor +1|antalSteg -1|antalSteg +1|"

