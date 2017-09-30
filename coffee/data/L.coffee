ID_Laboratorium =
	v:'2017-04-29'
	k:''
	l:0
	b:"""
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

ID_Lerp =
	v:'2017-05-18'
	k:'-> bg fc sc if text lerp operators'
	l:1
	b : """
lerp = (a,b,i) -> 0

# Ändra ingenting nedanför denna rad!
bg 0
y = 19
test = (a,b) ->
	sc()
	textSize 20
	fc 0,1,0
	text a, 0,y
	if a==b then fc 0,1,0 else fc 1,0,0
	text b, 100,y
	y+=20

test 10, lerp 10,20,0
test 20, lerp 10,20,1
test 30, lerp 10,20,2
test 0,  lerp 10,20,-1
test 15, lerp 10,20,0.5
test 11, lerp 1,2,10
test 21, lerp 1,3,10
test -1, lerp 1,0,2
test 2,  lerp 10,9,8
test 0.4,lerp 0.1,0.2,3
"""
	e:
		Matteboken : "https://www.matteboken.se/lektioner/matte-1/funktioner/linjara-funktioner"

	a : """
lerp = (a,b,i) -> a+(b-a)*i

# Ändra ingenting nedanför denna rad!
bg 0
y = 19
test = (a,b) ->
	sc()
	textSize 20
	fc 0,1,0
	text a, 0,y
	if a==b then fc 0,1,0 else fc 1,0,0
	text b, 100,y
	y+=20

test 10, lerp 10,20,0
test 20, lerp 10,20,1
test 30, lerp 10,20,2
test 0,  lerp 10,20,-1
test 15, lerp 10,20,0.5
test 11, lerp 1,2,10
test 21, lerp 1,3,10
test -1, lerp 1,0,2
test 2,  lerp 10,9,8
test 0.4,lerp 0.1,0.2,3
"""

ID_Line =
	v:'2017-04-29'
	k:'sc line'
	l:2
	b: ""
	a: """
sc 1,1,0
line 20,0, 200,20
"""

ID_Lines =
	v:'2017-04-29'
	k:'bg range for lerp line'
	l:5
	b:"# (Noel Watson)\n"
	a:"""
bg 0
for i in range 37
	line 10,10, 190,10+i*5
	line 10,100, 190,10+i*5
	line 10,190, 190,10+i*5
"""

