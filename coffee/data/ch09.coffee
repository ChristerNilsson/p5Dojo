#####################################
	ch09 = # "L9: interactivity, basic" : 
#####################################

		Counter :
			b:"""
# LOC:12 bg fc sc # text textAlign textSize + - class extends constructor new @ super ->
# Klicka på reset() om du får ett felmeddelande!

class Counter extends Application
	reset : -> super
	draw  : -> super
	up    : -> 
	down  : -> 
	mousePressed : (mx,my) -> print "mousePressed",mx,my

counter = new Counter "b"     
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

counter = new Counter "a"   		
"""
			c:
				counter : "reset()|up()|down()"

		Stopwatch:
			b:"""
# LOC:17 bg sc fc # for in [] '' text textSize textAlign textFont monospace
#        int millis nf length unshift class extends constructor new @ super ->
# OBS! Tiderna kan skilja med flera millisekunder. Sorry!

class Stopwatch extends Application
	reset : -> super
	draw  : -> super
	stopp : -> 
stopwatch = new Stopwatch "b"
"""
			a:"""
class Stopwatch extends Application
	reset : -> 
		super
		@start = int millis()
		@times = []
		@count = 0
	draw : ->
		bg 0
		textFont "monospace"
		textSize 32
		textAlign RIGHT,BOTTOM
		fc 1,0,0
		sc()
		for time,i in @times
			text @count-i,  50, 202-40*i
			text nf(time/1000,1,3),195, 202-40*i
	stopp : -> 
		@count++
		@times.unshift int millis()-@start
		if @times.length > 5 then @times.pop()

stopwatch = new Stopwatch "a"
"""
			c:
				stopwatch: "reset()|stopp()"

		Moire: 
			b:"""
# LOC:10 bg # for line map class extends constructor new @ super ->

class Moire extends Application
	reset : -> super
	draw  : -> super
	more  : -> 
	less  : -> 

moire = new Moire "b"
			"""
			a: """
class Moire extends Application
	reset : ->
		super
		@n = 2
	draw : ->
		background 0
		for i in range @n
			for j in range 37
				line 10,map(i,0,@n-1,10,190),190,10+j*5
	more : -> @n = constrain @n+1,2,10
	less : -> @n = constrain @n-1,2,10

moire = new Moire "a"
"""
			c: 
				moire : "reset()|more()|less()"

		Square : 
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

square = new Square "b"
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

square = new Square "a"
"""
			c: 
				square : "reset()|horisontellt -1|horisontellt +1|vertikalt -1|vertikalt +1|storlek -1|storlek +1|tjocklek -1|tjocklek 1|rotera -1|rotera +1"   

		BoardGame :
			b:"""
# LOC:21 bg fc sc circle range # for in ->

class Board extends Application
	reset : -> super
	draw  : -> super
	r     : (d) ->
	d     : (d) ->
	n     : (d) ->

board = new Board "b" 
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

board = new Board "a" 
"""
			c:
				board : "reset()|r -1|r +1|d -1|d +1|n -1|n +1"

		ColorCube:
			b: """
# LOC:17 -> bg fc range # for in rect class extends constructor new @ super ->

class ColorCube extends Application
	reset       : -> super
	draw        : -> super
	moreDetails : ->
	lessDetails : ->
	moreBlue    : ->
	lessBlue    : ->

cc = new ColorCube "b"
"""
			a: """
class ColorCube extends Application
	draw : ->
		bg 0
		d = 200.0/@n
		m = @n-1.0
		sc()
		for r in range @n
			for g in range @n
				fc r/m,g/m,@b/m
				sc r/m,g/m,@b/m
				rect r*d,g*d,d,d
	reset : -> 
		super
		@n=2
		@b=0
	moreDetails : -> if @n<255 then @n++
	lessDetails : -> if @n>2 then @n--
	moreBlue : -> if @b<@n-1 then @b+=1
	lessBlue : -> if @b>0 then @b-=1

cc = new ColorCube "a"
"""
			c: 
				cc : "reset()|moreDetails()|lessDetails()|moreBlue()|lessBlue()"

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

ring = new Ring "b"
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

ring = new Ring "a"
"""
			c: 
				ring : "reset()|start -1|start +1|stopp -1|stopp +1|radius -1|radius +1|width -1|width +1"

		SevenSegment :
			b : """
# LOC:26 bg sc fc # rect rectMode if then & [] class extends constructor new @ super ->

class Digit extends Application
	reset : -> super
	draw  : -> super
	up    : -> 
	down  : -> 

digit = new Digit "b"
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
	up   : -> @d = constrain @d + 1, 0, 9
	down : -> @d = constrain @d - 1, 0, 9

digit = new Digit "a"
"""
			c: 
				digit : "reset()|up()|down()"
			e: 
				"7 segment" : "https://www.google.se/search?q=7+segment&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjg_5n55OrSAhWpZpoKHQP8DxoQ_AUIBigB&biw=1310&bih=945"

		Korg: 
			b:"""
# LOC:27 -> bg fc sc sw # rect for if else class extends constructor new @ super ->

class Korg extends Application
	reset   : -> super
	draw    : -> super
	more    : ->
	less    : ->
	thinner : ->
	thicker : ->

korg = new Korg "b"
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

korg = new Korg "a"
"""
			c: 
				korg : "reset()|more()|less()|thinner()|thicker()"

		Guess_a_number :
			b:"""
# LOC:20 bg fc sc range @readInt # text textAlign for in if then else * / + - % <=
#        int class extends constructor new @ super ->

class Guess extends Application
	reset     : -> super
	draw      : -> super
	readGuess : ->

guess = new Guess "b"
"""
			a:"""
class Guess extends Application
	reset : ->
		super
		@n = 100
		@start = 0
		@stopp = @n-1
		@secret = 27

	readGuess :-> 
		guess = @readInt()
		if guess <= @secret then @start = guess+1 
		if guess >= @secret then @stopp = guess-1 

	draw : ->
		bg 0.1
		textAlign CENTER,CENTER
		for i in range @n
			if @start <= i <= @stopp then fc 1 else fc 0.5
			sc()
			x = i % 10
			y = int i / 10
			text i, 10 + 20 * x, 10 + 20 * y

guess = new Guess "a"
			"""
			c:
				guess : "reset()|readGuess()"



		Connect4 :
			b:"""
# LOC:31 % bg fc sc sw circle range # text textAlign textSize for in
#        push pop class extends constructor new @ super -> 

class Connect4 extends Application
	reset : -> super
	draw  : -> super
	move  : (nr) ->
	undo  : ->

connect4 = new Connect4 "b"
			"""
			a:"""
class Connect4 extends Application
	reset : ->
		super
		@list = ([] for i in range 7)
		@moves = []
	draw : ->
		size = 27
		bg 0
		textAlign CENTER,CENTER
		textSize size/2
		fc()
		sc 0.1,0.3,1
		sw 0.2 * size
		for i in range 7
			for j in range 6
				circle 100-size*3+size*i, 180-size*j, size/2
		for column,i in @list
			for nr,j in column
				fc 1,nr%2,0
				sw 1
				circle 100-size*3+size*i, 180-size*j, size*0.4
				fc 0
				sc()
				text nr, 100-size*3+size*i, 180-size*j
		sc()
		fc 1,(@moves.length+1)%2,0
		circle 100,15,10
	move : (nr) ->
		@moves.push nr
		@list[nr].push @moves.length 
	undo : -> if @moves.length > 0 then @list[@moves.pop()].pop()

connect4 = new Connect4 "a"
"""
			c:
				connect4 : "reset()|move 0|move 1|move 2|move 3|move 4|move 5|move 6|undo()"


		Laboratorium :
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

laboratorium = new Laboratorium "b"     
"""
			a:"""
class Laboratorium extends Application
	reset : -> super
	draw : -> 
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

laboratorium = new Laboratorium "a"   		
"""
			c:
				laboratorium : "reset()|left()|right()|up()|down()|a()|b()|c()|d()|e()|f()"
