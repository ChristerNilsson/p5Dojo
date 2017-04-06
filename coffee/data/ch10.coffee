ID200 = # Square : 
	b: """
# LOC:21 bg sw fc rd # rect rectMode translate + class extends constructor new @ super ->

class Square extends Application
	reset        : -> super
	draw         : -> super
	horisontellt : (d) -> 
	vertikalt    : (d) ->
	storlek      : (d) -> 
	tjocklek     : (d) -> 
	rotera       : (d) ->

app = new Square
"""
	a: """
class Square extends Application
	reset : ->
		super
		@x = 100
		@y = 100
		@size = 100
		@w = 1
		@dir = 0
	draw : ->
		bg 0
		rectMode CENTER
		sw @w
		fc 0.5
		translate @x,@y
		rd @dir 
		rect 0,0,@size,@size

	horisontellt : (d) -> @x += d
	vertikalt : (d) -> @y += d
	storlek : (d) -> @size += d
	tjocklek : (d) -> @w += d
	rotera : (d) -> @dir += d 

app = new Square "a"
"""
	c: 
		app : "reset()|horisontellt -1|horisontellt +1|vertikalt -1|vertikalt +1|storlek -1|storlek +1|tjocklek -1|tjocklek 1|rotera -1|rotera +1"   

ID201 = # BoardGame :
	b:"""
# LOC:21 bg fc sc circle range # for in ->

class Board extends Application
	reset : -> super
	draw  : -> super
	r     : (d) ->
	d     : (d) ->
	n     : (d) ->
app = new Board 
"""
	a:"""

class Board extends Application
	reset : ->
		super
		@_x = 100
		@_y = 100
		@_d = 18
		@_r = 7
		@_n = 5
	draw : ->	
		bg 1
		fc 0
		sc()
		@one @_d,@_r,@_x-@_n*@_d, @_y-@_d,2*@_n+1,3
		@one @_d,@_r,@_x-@_d, @_y-@_n*@_d,3,2*@_n+1
	one : (d,r,x0,y0,m,n) ->
		for i in range m
			for j in range n
				circle x0+d*i,y0+d*j,r
	r : (d) -> @_r += d
	d : (d) -> @_d += d
	n : (d) -> @_n += d

app = new Board "a" 
"""
	c:
		app : "reset()|r -1|r +1|d -1|d +1|n -1|n +1"
		
"OlympicRing Prep":
	b:"""
# LOC:21 sc fc sw # arc strokeCap class extends constructor new @ super ->

class Ring extends Application
	reset  : -> super
	draw   : -> super
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

ID202 = # SevenSegment :
	b : """
# LOC:31 bg sc fc # rect rectMode if then & [] class extends constructor new @ super ->

class Digit extends Application
	reset : -> super
	draw  : -> super
	up    : -> 
	down  : -> 

app = new Digit
			"""
	a:"""
class Digit extends Application
	reset : ->
		super
		@d=0
		@x=100
		@y=100
		@w=80
		@h=18
		@pattern = [63,6,91,79,102,109,125,7,127,111]
	draw : ->
		bg 0.5
		sc()
		fc 1,0,0
		rectMode CENTER
		p = @pattern[@d]
		w0 = @w-20
		if p & 1 then fc 1,0,0 else fc 0.3,0,0
		rect @x,@y-@w,w0,@h 
		if p & 2 then fc 1,0,0 else fc 0.3,0,0
		rect @x+@w/2,@y-@w/2,@h,w0 
		if p & 4 then fc 1,0,0 else fc 0.3,0,0
		rect @x+@w/2,@y+@w/2,@h,w0 
		if p & 8 then fc 1,0,0 else fc 0.3,0,0
		rect @x,@y+@w,w0,@h 
		if p & 16 then fc 1,0,0 else fc 0.3,0,0
		rect @x-@w/2,@y+@w/2,@h,w0
		if p & 32 then fc 1,0,0 else fc 0.3,0,0
		rect @x-@w/2,@y-@w/2,@h,w0 
		if p & 64 then fc 1,0,0 else fc 0.3,0,0
		rect @x,@y,w0,@h 
	mousePressed : (mx,my) -> @d = constrain @d + (if my<100 then 1 else -1), 0, 9

app = new Digit "a"
"""
	c: 
		app : "reset()"
	e: 
				"7 segment" : "https://www.google.se/search?q=7+segment&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjg_5n55OrSAhWpZpoKHQP8DxoQ_AUIBigB&biw=1310&bih=945"

ID203 = # GoldenStar:
	b: """
# LOC:23 bg fc range # for in triangle translate rotate cos sin class extends constructor new @ super ->

class GoldenStar extends Application
	reset : -> super
	draw  : -> super
	n     : (d) -> 
	outer : (d) ->
	inner : (d) ->

app = new GoldenStar
"""
	a: """
class GoldenStar extends Application
	reset : ->
		super
		@_x = 100
		@_y = 100
		@_n = 4
		@_outer = 100
		@_inner = 25
	n : (d) -> @_n = constrain @_n+d,3,12
	outer : (d) -> @_outer = constrain @_outer+d, 0, 100
	inner : (d) -> @_inner = constrain @_inner+d, 0, 100
	draw : ->
		bg 0
		translate @_x,@_y
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
		
ID204 = # Polygon:
	b:"""
# LOC:23 bg sc range # line for in cos sin radians class extends constructor new @ super ->

class Turtle
	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->
	fd : (d) ->
	rt : (a) ->

class Polygon extends Application
	reset      : -> super
	draw       : -> super
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

ID205 = # Alphanumeric:
	b:"""
# LOC:29 bg sc fc range circle # for in & + - * ^ ** %% [] length splice dist
#        push if then else class extends constructor new @ super ->

class AlphaNumeric extends Application
	reset : -> super
	draw  : -> super
	add   : -> 
	del   : ->
	left  : -> 
	right : ->
	mousePressed : (mx,my) ->

app = new AlphaNumeric
"""
	a:"""
class AlphaNumeric extends Application
	reset : -> 
		super
		@pattern = [[4,12,4,4,4,4,14], [14,17,1,2,4,8,31], [14,17,17,31,17,17,17],[30,17,17,30,17,17,30]]
		@index = 0
		@radius = 8
		@distance = 20
	draw : ->
		bg 0
		sc()
		for index,j in @pattern[@index]
			y =  40+@distance*j
			for i in range 5
				if index & 1<<i then fc 0,1,0 else fc 0,0.3,0
				x = 140-@distance*i
				circle x,y,@radius
	add   : -> 
		@pattern.push [0,0,0,0,0,0,0]
		@index = @pattern.length - 1
	del   : -> @pattern.splice @index, 1
	left  : -> @index = (@index - 1) %% @pattern.length
	right : -> @index = (@index + 1) %% @pattern.length

	mousePressed : (mx,my) ->
		for index,j in @pattern[@index]
			y =  40+@distance*j
			for i in range 5
				x = 140-@distance*i
				if dist(x,y,mx,my) < @radius
					@pattern[@index][j] ^= 1<<i

app = new AlphaNumeric "a"
"""
	c:
		app: "reset()|add()|del()|left()|right()"
	e:
		binärt : "http://www.matteboken.se/lektioner/matte-1/tal/talsystem"
		hexadecimalt : "http://www.matteguiden.se/matte-1/grunder/binara-och-hexadecimala-tal"
		'5x7 matris' : "https://www.google.se/search?q=5x7+matrix&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjWjYen5OrSAhXhJ5oKHf8BBmgQ_AUIBigB&biw=1310&bih=945&dpr=1.1"

ID206 = # Korg: 
	b:"""
# LOC:27 bg fc sc sw # rect for if else class extends constructor new @ super ->

class Korg extends Application
	reset   : -> super
	draw    : -> super
	more    : ->
	less    : ->
	thinner : ->
	thicker : ->
app = new Korg
"""
	a: """
class Korg extends Application
	reset : ->
		super
		@n = 1
		@w = 5

	draw : ->
		c1 = co 1,0,0
		c2 = co 1,1,0
		bg 0
		sw @w
		fill c1
		stroke c2
		q = 2*@n+1
		d = 200.0/q
		for i in range @n
			rect d+i*2*d,0,d,200
		for j in range @n
			rect 0,d+j*2*d,200,d
		for i in range @n
			for j in range @n
				if (i+j) % 2 == 1
					rect i*2*d,d+j*2*d,3*d,d
				else
					rect d+i*2*d,j*2*d,d,3*d
	more : -> @n = constrain @n+1,1,10
	less : -> @n = constrain @n-1,1,10
	thinner : -> @w = constrain @w-1,0,10
	thicker : -> @w = constrain @w+1,0,10

app = new Korg "a"
"""
	c: 
		app : "reset()|more()|less()|thinner()|thicker()"

ID207 = # Korsord :
	b: """
# LOC:29 bg fc sc @readText # / % + * != and text textAlign textSize if then for in 
#        "" split join _.filter class constructor new @ extends super [] length
# Mata in t ex b..l och få ut bill samt boll.

class Korsord extends Application
	reset : -> super
	draw  : -> super
	enter : -> 
app = new Korsord
"""
	a:"""
class Korsord extends Application
	reset : -> 
		print "reset"
		super
		@found = ""
		@pattern = ''
	draw : -> 
		n = 15
		bg 0
		textAlign LEFT,TOP
		textSize 12
		fc 1,1,0
		sc()
		for word,i in @found.split " "
			x = int i / n
			y = i % n
			text word,5+200/4*x,200*y/n
	match : (word,pattern) ->
		for letter,i in pattern
			if letter != '.' and letter != word[i] then	return false
		true
	enter : -> 
		words = ordlista.split " "
		@pattern = @readText()
		@found = [] 
		for w in words
			if w.length == @pattern.length and @match w,@pattern then @found.push w
		#@found = _.filter words, (w) -> w.length == @pattern.length and @match w,@pattern
		@found = @found.join " "

app = new Korsord "a"
"""
	c:
		app : "reset()|enter()"

	e:
		'_.some' : "http://underscorejs.org/#some"
		'_.filter' : "http://underscorejs.org/#filter"
		'_.countBy' : "http://underscorejs.org/#countBy"

ID208 = # EngineeringNotation :
	b:"""		
# LOC:28 fc sc bg # Math.floor Math.log10 constrain + - * / < ** text split
#        textAlign textSize class extends constructor new @ super ->

class Engineering extends Application
	reset : -> super
	draw  : -> super 
	more  : -> 
	less  : -> 
app = new Engineering   		
"""
	a:"""
class Engineering extends Application
	reset : -> 
		super
		@numbers = "-273.15 1.6021766208e-19 3.1415926535 9.80665 101325 299792458 1073741824 6.022140857e23"
		@digits = 3
		@prefixes = "yzafpnµm kMGTPEZY"
	format : (x) -> 
		if x<0 then return "-" + @format(-x)
		exponent = 3 * Math.floor Math.log10(x)/3
		x = x / 10 ** exponent
		if x < 10 then factor = 10 ** (@digits-1) 
		else if x < 100 then factor = 10 ** (@digits-2)
		else factor = 10 ** (@digits-3)
		Math.round(x * factor) / factor + @prefixes[8+exponent/3]
	draw  : -> 
		bg 0
		textAlign RIGHT,TOP
		textSize 20
		textFont "monospace"
		fc 1,0,0
		sc()
		textAlign RIGHT,TOP
		for nr,i in @numbers.split " "
			x = parseFloat nr
			if i<8 then text @format(1/x), 100-5,i*20
			text @format(x), 200-5,i*20
	more  : -> @digits = constrain @digits+1, 1,6
	less  : -> @digits = constrain @digits-1, 1,6

app = new Engineering "a"   		
"""
	c:
		app : "reset()|more()|less()"
	e:
		EngineeringNotation : "https://en.wikipedia.org/wiki/Engineering_notation"

ID209 = # ColorCube:
	b: """
# LOC:33 bg range # for in class extends constructor new @ super ->
#        quad [] push pop fill stroke if then and * / + - <= return

class ColorCube extends Application
	reset       : -> super
	draw        : -> super
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
