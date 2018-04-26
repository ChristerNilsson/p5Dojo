ID_Laboratorium =
	v:'2017-04-29'
	k:''
	l:0
	h:1
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

ID_lerp =
	v: '2018-04-26'
	k: 'lerp sw point for range'
	l: 15
	h: 0
	b: """
# lerp a,b,i

sw 10
point 10,90 # Från vänster till höger
point 30,90
#     x     lerp 

for i in range 10
	x = lerp 10,30,i # 10,30,50,70...
	y = 90
	point x,y
	
sw 5
sc 1,0,0
point 110,190 # Nerifrån och upp
point 110,170
#         y   lerp 

for i in range 10
	x = 110
	y = lerp 190,170,i # 190,170,150,130...
	point x,y
"""
	a: """
# lerp a,b,i

sw 10
point 10,90 # Från vänster till höger
point 30,90
#     x     lerp 

for i in range 10
	x = lerp 10,30,i # 10,30,50,70...
	y = 90
	point x,y
	
sw 5
sc 1,0,0
point 110,190 # Nerifrån och upp
point 110,170
#         y   lerp 

for i in range 10
	x = 110
	y = lerp 190,170,i # 190,170,150,130...
	point x,y
"""

ID_Lerp =
	v:'2017-05-18'
	k:'-> bg fc sc if text lerp operators'
	l:1
	h:2
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

ID_line =
	v: '2018-04-27'
	k: 'line'
	l: 6
	h: 0
	b: """
# Rita en linje mellan två punkter

# Draw a line between two points

# line x1,y1,x2,y2

sw 2
line 60,20,140,20 

sw 4
line 60,40,140,120 

sw 6
line 60,100,60,180 
"""
	a: """
sw 2
line 60,20,140,20 

sw 4
line 60,40,140,120 

sw 6
line 60,100,60,180 
"""

ID_lines =
	v:'2018-04-26'
	k:'sc line'
	l:5
	h:1
	b: """
# line x1,y1,x2,y2
"""
	a: """
sw 10
sc 1,1,0,0.5
line 20,20,180,20
line 40,20,180,40
line 60,20,180,60
"""

# ID_line_2 =
# 	v:'2017-04-29'
# 	k:'sc sw line'
# 	l:3
# 	h:1
# 	b: ""
# 	a: """
# sc 1,1,0
# sw 10
# line 110,30, 110,170
# """

# ID_line_3 =
# 	v:'2017-04-29'
# 	k:'sc line'
# 	l:2
# 	h:1
# 	b: ""
# 	a: """
# sc 1,1,0
# line 20,0, 200,20
# """

ID_LinearRegression =
	v:'2017-11-02'
	k:'class line [] for in'
	l: 34
	h:3
	b: """
class LinearRegression extends Application
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
	pop : ->
app = new LinearRegression
	"""
	a: """
class LinearRegression extends Application
	reset : ->
		super
		@points = [] # [[20,100],[40,80],[60,140],[80,180],[100,140],[120,180],[140,200]]
		@k=0
		@m=0
		@n=0
		@r=0

	draw : ->
		sw 3
		@n = @points.length
		for [x,y] in @points
			point x,y
		if @n<2 then return 
		@linReg()
		x1 = 0
		x2 = 200
		y1 = @k*x1+@m
		y2 = @k*x2+@m
		sw 1
		line x1,y1,x2,y2

	mousePressed : (mx,my) -> @points.push [mx,my]
	pop : -> @points.pop() if @points.length > 0 

	linReg : ->
		@sxy=@sx=@sy=@sxx=@syy=0
		for [x,y] in @points
			@sxy += x*y
			@sx  += x
			@sy  += y
			@sxx += x*x
			@syy += y*y
		@k = (@n*@sxy - @sx*@sy) / (@n*@sxx - @sx*@sx)
		@m = @sy/@n - @k*@sx/@n
		@r = (@n * @sxy - @sx * @sy) / Math.sqrt((@n*@sxx - @sx**2) * (@n*@syy - @sy**2))

app = new LinearRegression "a"
"""	
	c:
		app : "reset()|pop()"
	e:
		k_and_m : "images/k_and_m.JPG"
		r : "images/r.PNG"
		"LinearRegression" : "https://www.youtube.com/watch?v=9ytvxgxq0OQ"

