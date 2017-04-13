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

ID181 = # Stopwatch:
	b:"""
# LOC:17 bg sc fc # for in [] '' text textSize textAlign textFont monospace
#        int millis nf length unshift class extends constructor new @ super ->
# OBS! Tiderna kan skilja med flera millisekunder. Sorry!

class Stopwatch extends Application
	reset : -> super
	draw  : -> super
	mousePressed : (mx,my) -> 
app = new Stopwatch
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
	mousePressed : (mx,my) -> 
		@count++
		@times.unshift int millis()-@start
		if @times.length > 5 then @times.pop()

app = new Stopwatch "a"
"""
	c:
		app: "reset()"
				
ID182 = # RandomDice :
	b: """
# LOC:19 bg fc sc circle # % %% / * + << & [] int Math.sin   
#        for in class extends constructor new @ super ->

class RandomDice extends Application
	reset : -> 
		super
		@seed = 0
	draw : -> super
	mousePressed : (mx,my) ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
app = new RandomDice
"""
	a:"""
class RandomDice extends Application
	reset : -> 
		super
		@RADIUS = 20
		@BITS = [0,1,24,25,90,91,126]
		@XY = [22,11,12,13,31,32,33]
		@seed = 0
		@throw()
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	throw : -> @value = 1 + @randint 6
	mousePressed : (mx,my) -> @throw()
	draw : -> 
		bg 1
		sc 1
		for xy,i in @XY
			x = int xy/10
			y = xy % 10
			if @BITS[@value] & 1<<i then circle 50*x,50*y,@RADIUS 			

app = new RandomDice "a"
"""
	c:
		app : "reset()"

ID183 = # Moire: 
	b:"""
# LOC:10 bg range # [] push * + for line map class extends constructor new @ super ->

class Moire extends Application
	reset : -> super
	draw  : -> super
	mousePressed : (mx,my) ->
app = new Moire
			"""
	a: """
class Moire extends Application
	reset : ->
		super
		@points = []
	draw : ->
		bg 0
		for [x,y] in @points
			for j in range 37
				line x,y,190,10+j*5
	mousePressed : (mx,my) -> @points.push [mx,my]

app = new Moire "a"
"""
	c: 
		app : "reset()"

ID185 = # Guess_a_number :
	b:"""
# LOC:29 bg fc sc range # text textAlign for in if then else * / + - % <=
#        int class extends constructor new @ super ->

class Guess extends Application
	reset        : -> super
	draw         : -> super
	newGame : ->
	mousePressed : (mx,my) -> 
app = new Guess
"""
	a:"""
class Guess extends Application
	reset : ->
		super
		@N = 100
		@seed = 0
		@newGame()

	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

	newGame : ->
		@start = 0
		@stopp = @N-1
		@secret = @randint @N

	draw : ->
		bg 0.1
		textAlign CENTER,CENTER
		for i in range @N
			if @start <= i <= @stopp then fc 1 else fc 0.5
			sc()
			x = i % 10
			y = int i / 10
			text i, 10 + 20 * x, 10 + 20 * y

	mousePressed : (mx,my) -> 
		guess = int mx/20 + 10 * int my/20
		if guess <= @secret then @start = guess+1 
		if guess >= @secret then @stopp = guess-1 

app = new Guess "a"
			"""
	c:
		app : "reset()|newGame()"

ID186 = # RecursiveCircle: 
	b: """
# LOC:10 sc circle # if return < class extends constructor new @ super ->

class RecursiveCircle extends Application
	reset   : -> super
	draw    : -> super
	circles : (x,y,r,level) ->
	mousePressed : (mx,my) -> 
app = new RecursiveCircle
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
	mousePressed : (mx,my) -> @n = constrain @n + (if my < 100 then 1 else -1),0,10

app = new RecursiveCircle "a"
"""
	c:
		app : "reset()"

ID187 = # Laboratorium :
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
	reset : -> super
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

ID188 = # ClickDetector :
	b:"""		
# LOC:16 circle # {} class extends constructor new @ super ->
#        if then < and / ++ + - text textAlign textSize rectMode 

class ClickDetector extends Application
	reset : -> super
	draw  : -> super
	mousePressed : (mx,my) ->
app = new ClickDetector   		
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
		if dist(mx,my,@a.x,@a.y) < @a.radius then return @a.counter++ 
		if @b.x-@b.w/2 < mx < @b.x+@b.w/2 and @b.y-@b.h/2 < my < @b.y+@b.h/2 then @b.counter++ 

app = new ClickDetector "a"   		
"""
	c:
		app : "reset()"

ID189 = # IndianSun :
	b:"""
# LOC:10 range # line sin cos radians for in if then else constrain * / + - class extends constructor new @ super ->

class IndianSun extends Application
	reset : -> super
	draw : -> super
	mousePressed : (mx,my) -> 
app = new IndianSun   		
"""
	a:"""
class IndianSun extends Application
	reset : -> 
		super
		@n = 5
	draw : ->
		points = ([100+100*cos(i*radians 360/@n), 100+100*sin(i*radians 360/@n)] for i in range @n)
		for [x1,y1] in points
			for [x2,y2] in points
				line x1,y1,x2,y2
	mousePressed : (mx,my) -> @n = constrain @n + (if my < 100 then 1 else -1), 3, 20

app = new IndianSun "a"   		
"""
	c:
		app : "reset()"
	e:
		Kojo : "http://www.kogics.net/codesketch?id=28"

ID184 = # MultiTimer
	b:"""
# LOC:30 bg sc fc # for in [] '' == <= and text textSize textAlign textFont monospace nf
#        if then else int round millis length class extends constructor new @ super ->
#        
# OBS! Tiderna kan skilja med flera millisekunder. Sorry!

class MultiTimer extends Application
	reset : -> super
	draw  : -> super
	mousePressed : (mx,my) -> 
app = new MultiTimer
"""
	a:"""
class MultiTimer extends Application
	reset : -> 
		super
		@start = int millis()
		@buttons = [[0,0,"A",0],[100,0,"B",0],[0,50,"C",0],[100,50,"D",0],[0,100,"E",0],[100,100,"F",0],[0,150,"G",0],[100,150,"H",0]]
		@active = -1
	draw : ->
		bg 0
		textFont "monospace"
		textSize 24
		sc()
		for [x,y,txt,time],i in @buttons
			if @active==i then fc 1,0,0 else fc 1,1,0 
			textAlign LEFT,TOP
			text txt, x+10,y
			textAlign RIGHT,TOP
			secs = round time/1000
			text nf(int(secs / 60),2) + ':' + nf(secs % 60,2), x+100,y
	mousePressed : (mx,my) -> 
		for [x,y,txt,time],i in @buttons
			if x <= mx <= x+100 and y <= my <= y+50 then active = i
		if active == @active
			@buttons[@active][3] += int millis() - @start 	
			@active = -1
		else if @active == -1
			@active = active
		else # byte
			@buttons[@active][3] += int millis() - @start 	
			@active = active
		@start = int millis()

app = new MultiTimer "a"
"""
	c:
		app: "reset()"