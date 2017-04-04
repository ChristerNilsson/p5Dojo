ID180 = # Counter :
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

ID181 = # Stopwatch:
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
				
ID182 = # RandomDice :
	b: """
# LOC:19 bg fc sc circle # % %% / * + << & [] Math.floor Math.sin   
#        for in class extends constructor new @ super ->

class RandomDice extends Application
	reset : -> 
		super
		@seed = 0
	draw : -> super
	mousePressed : (mx,my) ->
	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++
randomdice = new RandomDice "b"
"""
	a:"""
class RandomDice extends Application
	reset : -> 
		super
		@seed = 0
		@radius = 20
		@bits = [0,1,24,25,90,91,126]
		@xy = [22,11,12,13,31,32,33]
		@throw()
	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++
	throw : -> @value = 1 + @randint 6
	mousePressed : (mx,my) -> @throw()
	draw : -> 
		bg 1
		sc 1
		for xy,i in @xy
			x = int xy/10
			y = xy % 10
			if @bits[@value] & 1<<i then circle 50*x,50*y,@radius 			

randomdice = new RandomDice "a"
"""
	c:
		randomdice : "reset()"

ID183 = # Moire: 
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


ID184 = # ColorCube:
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


ID185 = # Guess_a_number :
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




ID186 = # RecursiveCircle: 
	b: """
# LOC:10 -> sc circle # if return < class extends constructor new @ super ->

class RecursiveCircle extends Application
	reset   : -> super
	draw    : -> super
	circles : (x,y,r,level) ->
	more    : -> 
	less    : -> 

rc = new RecursiveCircle "b"
"""
	a: """

class RecursiveCircle extends Application
	reset : -> 
		super
		@n = 0
	draw : -> @circles 100,100,100,@n		
	circles : (x,y,r,level) ->
		circle x,y,r
		if level <= 0 then return
		@circles x-r/2, y, r/2, level-1
		@circles x+r/2, y, r/2, level-1
	more : -> @n = constrain @n+1,0,10
	less : -> @n = constrain @n-1,0,10

rc = new RecursiveCircle "a"
"""
	c:
		rc : "reset()|more()|less()"

ID187 = # Laboratorium :
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

ID188 = # ClickDetector :
	b:"""		
# LOC:16 circle # {} class extends constructor new @ super ->
#        if then < and / ++ + - text textAlign textSize rectMode 

class ClickDetector extends Application
	reset : -> super
	draw  : -> super
	mousePressed : (mx,my) ->
clickdetector = new ClickDetector "b"   		
"""
	a:"""
class ClickDetector extends Application
	reset : -> 
		super
		@a = {x:70,y:70,radius:50,counter:0}
		@b = {x:130,y:130,w:100,h:100,counter:0}
	draw : -> 
		rectMode CENTER
		textAlign CENTER,CENTER
		textSize 50
		rect @b.x,@b.y,@b.w,@b.h
		text @b.counter,@b.x,@b.y
		circle @a.x,@a.y,@a.radius
		text @a.counter,@a.x,@a.y
	mousePressed : (mx,my) ->
		if dist(mx,my,@a.x,@a.y) < @a.radius then @a.counter++ 
		if @b.x-@b.w/2 < mx < @b.x+@b.w/2 and @b.y-@b.h/2 < my < @b.y+@b.h/2 then @b.counter++ 

clickdetector = new ClickDetector "a"   		
"""
	c:
		clickdetector : "reset()"
