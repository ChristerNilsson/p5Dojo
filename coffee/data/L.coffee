ID_Laboratorium =
	v:'2017-04-29'
	b:"""
# LOC:0
# Här kan du laborera med egna idéer!

class Laboratorium extends Application
	reset : ->
		super
		@x = 100
		@y = 100
		@command = "Ge ett kommando!"
	draw  : ->
		textAlign CENTER,CENTER
		textSize 24
		fc 1,1,0
		sc()
		text @command,@x,@y
	mousePressed : (mx,my) ->
	left  : -> @x -= 10
	right : -> @x += 10
	up    : -> @y -= 10
	down  : -> @y += 10
	a     : -> @command = "a"
	b     : -> @command = "b"
	c     : -> @command = "c"
	d     : -> @command = "d"
	e     : -> @command = int random 1,7
	f     : -> @command = int millis()
app = new Laboratorium
"""
	a:"""
class Laboratorium extends Application
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
	left : ->
	right : ->
	up : ->
	down : ->
	a : ->
	b : ->
	c : ->
	d : ->
	e : ->
	f : ->

app = new Laboratorium "a"
"""
	c:
		app : "reset()|left()|right()|up()|down()|a()|b()|c()|d()|e()|f()"

