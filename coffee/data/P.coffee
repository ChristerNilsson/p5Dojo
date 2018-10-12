ID_P5 =
	v:'2017-05-20'
	k:'-> text fc sc'
	l:11
	h:1
	b:"""
skriv = (txt,x,y,r,g,b,size) ->
	# Skriv din kod här!

# Ändra ingenting nedanför denna rad!

skriv "p5",      100,100,1,0,0,180
skriv "Lauren",  155, 43,0,0,0, 18
skriv "McCarthy",155,180,1,1,1, 18
skriv "Coding",   50, 20,1,1,0, 24
skriv "Train",    50, 48,0,1,0, 30
"""
	a:"""
skriv = (txt,x,y,r,g,b,size) ->
	textAlign CENTER,CENTER
	textSize size
	fc r,g,b
	sc()
	text txt,x,y

skriv "p5",      100,100,1,0,0,180
skriv "Lauren",  155, 43,0,0,0, 18
skriv "McCarthy",155,180,1,1,1, 18
skriv "Coding",   50, 20,1,1,0, 24
skriv "Train",    50, 48,0,1,0, 30
"""

ID_Paint =
	v:'2017-05-15'
	k:'bg sc range rect circle for class []'
	l:36
	b:"""
# colors from cc and cct
class Paint extends Application
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
	undo : ->
app = new Paint
"""
	a:"""
class Paint extends Application
	reset : ->
		super
		@picture = (Array(20).fill(0) for i in range 18)
		@selected = 3
		@history = []
		@state = 0
	draw : ->
		sc()
		for i in range 32
			index = i+@state*32
			fill cc index
			x = i % 16 * 10
			y = 10 * int i/16
			rect x,y,10,10
			if index == @selected
				fill cct @selected
				circle x+5,y+5,3
		for i in range 20
			for j in range 18
				fill cc @picture[j][i]
				rect 10*i,20+10*j,10,10
	mousePressed : (mx,my) ->
		i = int mx/10
		j = int my/10
		if j<=1
			if i <= 15 then @selected = 32*@state + 16*j + i
			else return @state = 1-@state
		else
			j -= 2
			@history.push [j,i,@picture[j][i]]
			@picture[j][i] = @selected
	undo : ->
		if @history.length==0 then return
		[a,b,c] = @history.pop()
		@picture[a][b] = c

app = new Paint "a"
"""
	c:
		app : "reset()|undo()"

ID_PentaLerp =
	v:'2017-09-11'
	k:'bg sc fc range circle for lerp'
	l:11
	h:3
	b:""
	a:"""
bg 0.5
sc()
for i in range 11
	for j in range 11
		r = 0.1*i
		g = 0.1*j
		fc r,g,0
		x = 20*i
		y = 20*j
		radius = lerp 0,1,(i+j)/2
		circle x,y,radius
"""

ID_PickingBerries =
	v:'2017-04-29'
	k:'bg sc fc sw [] operators line text constrain dist break for class'
	l:46
	b:"""
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

ID_point =
	v: '2018-04-26'
	k: 'point'
	l: 1
	h: 0
	b: """
# Rita en punkt

# Draw a point

# point x,y

point 170,10
"""
	a: """
point 170,10    
"""

ID_point_1 =
	v:'2018-04-25'
	k:'sw point'
	l:4
	h:1
	b: """
# Klicka "Koordinatsystem" till vänster för hjälp
# Öva dig på koordinatsystem genom att klicka "Coordinate Trainer 1" till vänster
# Öva dig på koordinatsystem genom att klicka "Coordinate Trainer 2" till vänster
#
# sw pixlar  # strokeWeight, strecktjocklek i pixlar
# point x,y  # ritar en punkt
"""
	a: """
sw 20
point 0,0
point 100,0
point 200,0
"""
	e :
		"Coordinate Trainer 1" : "https://christernilsson.github.io/Lab/2017/131-CoordTrainer/index.html"
		"Coordinate Trainer 2": "https://christernilsson.github.io/Lab/2017/133-CoordTrainer2/index.html"
		Koordinatsystem : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID_point_2 =
	v:'2018-04-25'
	k:'sc sw point'
	l:5
	h:1
	b: """
"""
	a: """
sw 10
sc 1,0,0
point 0,0
point 0,100
point 0,200
"""

ID_point_3 =
	v:'2018-04-24'
	k:'sc sw point'
	l:9
	h:1
	b: """
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

ID_point_4 =
	v:'2017-04-29'
	k:'sc sw point'
	l:11
	h:1
	b: """
"""
	a: """
sw 10
sc 1,0,0
point 100,100
sc 0,1,0
point 100,0
sc 1,1,0
point 0,100
sc 0
point 200,100
sc 1
point 100,200
"""

ID_point_5 =
	v:'2017-04-29'
	k:'sc sw point'
	l:17
	h:2
	b: """
"""
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

ID_point_6 =
	v:'2017-04-29'
	k:'sc sw point'
	l:17
	h:2
	b: """
"""
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

ID_point_7 =
	v:'2017-09-09'
	k:'bg sc sw point'
	l:8
	h:3
	b: ""
	a: """
bg 0,1,0
sw 20
sc 0,0,0
point 0,0

sc 0.5,0.5,0
point 100,100

sc 1,1,0
point 200,200
"""
	e:
		Matteboken : 'https://www.matteboken.se/lektioner/skolar-5/statistik/medelvarde'

ID_point_8 =
	v:'2017-04-29'
	k:'sc sw point'
	l:11
	h:3
	b: ""
	a: """
sw 20
sc 1,0,0
point 200,0

sc 0.75,0.25,0
point 150,50

sc 0.5,0.5,0
point 100,100

sc 0.25,0.75,0
point 50,150

sc 0,1,0
point 0,200
"""
	e:
		Matteboken : 'https://www.matteboken.se/lektioner/skolar-5/statistik/medelvarde'

ID_point_9 =
	v:'2018-04-12'
	k:'sc sw point'
	l:27
	h:3
	b : """
sw 2

sc 1        # Etta
point 10,10

sc 1,0,0    # Tvåa
point 190-5,10-5
point 190+5,10+5

sc
point
point
point
"""
	a: """
# sw 1 ger ej ghosteffekt, men syns knappt
sw 2
point 10,10
sc 1,0,0
point 185,5
point 195,15
sc 0,1,0
point 85,65
point 90,70
point 95,75
sc 1,1,0
point 165,105
point 165,115
point 175,105
point 175,115
sc 1,0,1
point 45,125
point 45,135
point 50,130
point 55,125
point 55,135
sc 0,1,1
point 105,165
point 105,170
point 105,175
point 115,165
point 115,170
point 115,175
"""

ID_Polygon =
	v:'2018-04-26'
	k:'bg sc range line for cos sin angleMode class'
	l:23
	h:3
	b:"""
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
		dx = d*cos @dir
		dy = d*sin @dir
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
		angleMode DEGREES
		for i in range @n
			t.fd @steg
			t.rt 360/@n

	antalSidor : (d) -> @n += d
	antalSteg : (d) -> @steg += d

app = new Polygon "a"
"""
	c:
		app : "reset()|antalSidor -1|antalSidor +1|antalSteg -1|antalSteg +1"

ID_PushPop =
	v:'2018-04-26'
	k:'angleMode rotate translate scale push pop for range rect rectMode'
	l:11
	h:0
	b:"""
# push sparar bl a translate, rotate och scale.
# pop återställer.

angleMode DEGREES
rectMode CENTER
rect 0,0,20,20
translate 100,100
rect 0,0,20,20
for i in range 6
	push()
	translate 50,0
	rect 0,0,10,10
	pop()
	rotate 60
"""
	a:"""
# push sparar bl a translate, rotate och scale.
# pop återställer.

angleMode DEGREES
rectMode CENTER
rect 0,0,20,20
translate 100,100
rect 0,0,20,20
for i in range 6
	push()
	translate 50,0
	rect 0,0,10,10
	pop()
	rotate 60
"""

ID_Pyramid_1 =
	v:'2018-10-12'
	k:'textAlign for range text'
	l:4
	h:2
	b:""
	a:"""
textAlign CENTER,CENTER
for i in range 10
	for j in range i+1
		text 'X',10+i*20,10+j*20
"""
	e:
		SlideNerd : "https://www.youtube.com/watch?v=a2b0WtMyXXE"

ID_Pyramid_2 =
	v:'2018-10-12'
	k:'textAlign for range text'
	l:4
	h:2
	b:""
	a:"""
textAlign CENTER,CENTER
for i in range 10
	for j in range i+1
		text 'X',10+(i-j)*20,10+j*20
"""

ID_Pyramid_3 =
	v:'2018-10-12'
	k:'textAlign for range text'
	l:4
	h:2
	b:""
	a:"""
textAlign CENTER,CENTER
for i in range 10
	for j in range i+1
		text 'X',10+(i-j)*20,10+(9-j)*20
"""

ID_Pyramid_4 =
	v:'2018-10-12'
	k:'textAlign for range text'
	l:4
	h:2
	b:""
	a:"""
textAlign CENTER,CENTER
for i in range 10
	for j in range i+1
		text 'X',10+(i)*20,10+(9-j)*20
"""

ID_Pyramid_5 =
	v:'2018-10-12'
	k:'textAlign for range text'
	l:4
	h:2
	b:""
	a:"""
textAlign CENTER,CENTER
for i in range 10
	for j in range i+1
		text i,10+(9-i)*20,10+j*20
"""

ID_Pyramid_6 =
	v:'2018-10-12'
	k:'textAlign for range text abs'
	l:9
	h:2
	b:""
	a:"""
textAlign CENTER,CENTER
textSize 20
bg 0
n = 5
for i in range 2*n-1
	for j in range 2*n-1
		dx = i-n+1
		dy = j-n+1
		if abs(dx)+abs(dy) < n then text 'X', 100+20 * dx, 100+20 * dy
"""

ID_Pyramid_Diamond =
	v:'2018-10-12'
	k:'for range abs text textSize textAlign'
	l:6
	h:3
	b:""
	a:"""
textAlign CENTER,CENTER
textSize 20
bg 0
for i in range 5
	for j in range 5
		text abs(i-j)+1,100+(j-i)*20,100+(4-j-i)*20
"""

ID_Pyramid_Distance =
	v:'2018-10-12'
	k:'sc for range dist text textSize textAlign'
	l:11
	h:3
	b:""
	a:"""
textAlign CENTER,CENTER
textSize 10
bg 1
n = 10
sc()
for i in range 2*n-1
	for j in range 2*n-1
		dx = i-n+1
		dy = j-n+1
		d = floor dist 0,0,dx,dy
		if d < n then text d, 100+10 * dx, 100+10 * dy
"""

ID_Pyramid_Manhattan =
	v:'2018-10-12'
	k:'for range abs text textSize textAlign'
	l:9
	h:3
	b:""
	a:"""
textAlign CENTER,CENTER
textSize 20
bg 0
n = 4
for i in range 2*n-1
	for j in range 2*n-1
		dx = i-n+1
		dy = j-n+1
		if abs(dx)+abs(dy) < n then text abs(dx)+1, 100+20 * dx, 100+20 * dy
"""

