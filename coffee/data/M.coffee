ID_Magnifier =
	v:'2017-09-16'
	k:'for range if while [] operators text rect circle class'
	l:69
	b:"""
class Magnifier extends Application
	reset : ->
		super
	draw  : ->
	up    : ->
	down  : ->
app = new Magnifier
"""
	a:"""
class Magnifier extends Application
	reset : ->
		super
		@n=2
	draw  : ->
		bg 0
		n = @n
		if n==2
			fc 1
			rect 0,0,200,200
		if n>=3
			w = int n/3
			for i in range 200/n
				sc 1,0,0
				fc 1,0,0
				rect 0*w+n*i,0,w,200
				sc 0,1,0
				fc 0,1,0
				rect 1*w+n*i,0,w,200
				sc 0,0,1
				fc 0,0,1
				rect 2*w+n*i,0,w,200
	up    : -> @n++
	down  : -> @n--
app = new Magnifier "a"
"""
	c:
		app : "reset()|up()|down()"

ID_Mandelbrot =
	v:'2018-04-23'
	k:'sc point'
	l:36
	h:2
	b:"""
# The color is mapped as bbbgggrrr
class Mandelbrot extends Application
	reset : ->
		super
	draw  : ->
	undo  : ->
	mousePressed : (mx,my) ->
app = new Mandelbrot
"""
	a:"""
class Mandelbrot extends Application
	reset : ->
		super
		@SIZE = 100
		@BITS = 3 
		@N = 2**@BITS
		@N1 = @N-1
		@DEPTH = 2**(3*@BITS)
		@hist = []
		[@x,@y] = [-0.5,0]
		@zoom = 0.01
	draw  : ->
		for i in range -@SIZE,@SIZE
			for j in range -@SIZE,@SIZE
				cx = @x + @zoom*i
				cy = @y + @zoom*j
				f = @calc cx,cy
				b = f % @N; f //= @N
				g = f % @N; f //= @N
				r = f % @N; f //= @N
				sc r/@N1, g/@N1, b/@N1
				point @SIZE+i,@SIZE+j
	undo : -> if @hist.length>0 then [@x,@y,@zoom] = @hist.pop()
	calc : (cx,cy) ->
		[x,y] = [cx,cy]
		count = 0
		for k in range @DEPTH
			if 2 > dist x,y,0,0 then count++ else return count
			[x,y] = [x*x-y*y+cx, 2*x*y+cy]
		#if count == @DEPTH-1 then count = 0 
		count
	mousePressed : (mx,my) ->
		@hist.push [@x,@y,@zoom]
		@x = map mx, 0, 2*@SIZE, @x-@zoom*@SIZE, @x+@zoom*@SIZE
		@y = map my, 0, 2*@SIZE, @y-@zoom*@SIZE, @y+@zoom*@SIZE
		@zoom /= 2
app = new Mandelbrot 'a'
"""
	c:
		app : "reset()|undo()"
	e:
		Wikipedia : 'https://sv.wikipedia.org/wiki/Mandelbrotm%C3%A4ngden'
		Youtube : 'https://www.youtube.com/watch?v=UuOTuFVnWv0'

ID_ManyDices =
	v : '2017-10-22'
	k : '-> range for if circle sc fc "" split [] operators'
	l : 14
	h:3
	b : """
# b   e
# c a f
# d   g
dice = (i,j,side) ->
"""	
	a : """
# b   e
# c a f
# d   g
dice = (i,j,side) ->
	x = lerp 10,30, i
	y = lerp 10,30, j
	dots = 'a de dae bedg abedg bcdefg'.split(' ')[side]
	for dot,k in 'abcdefg'
		if dot in dots 
			dx = [0,-1,-1,-1, 1,1,1][k]
			dy = [0,-1, 0, 1,-1,0,1][k]
			circle x + 4*dx, y + 4*dy,1

sc()
fc 1
for i in range 10
	for j in range 10
		dice i, j, (i+j) % 6
"""

ID_Map =
	v:'2017-05-18'
	k:'-> bg fc sc if text map operators'
	l:1
	h:3
	b : """
map = (x,x0,x1,y0,y1) -> 0

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

test 50,  map 10,10,20,50,150
test 100, map 15,10,20,50,150
test 150, map 20,10,20,50,150
test 250, map 30,10,20,50,150
test -50, map 0,10,20,50,150
test 5,   map 10,10,20,5,15
test 10,  map 15,10,20,5,15
test 15,  map 20,10,20,5,15
test 25,  map 30,10,20,5,15
test -5,  map 0,10,20,5,15

"""

	a : """
map = (x,x0,x1,y0,y1) -> y0 + (x-x0)*(y1-y0)/(x1-x0)

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

test 50,  map 10,10,20,50,150
test 100, map 15,10,20,50,150
test 150, map 20,10,20,50,150
test 250, map 30,10,20,50,150
test -50, map 0,10,20,50,150
test 5,   map 10,10,20,5,15
test 10,  map 15,10,20,5,15
test 15,  map 20,10,20,5,15
test 25,  map 30,10,20,5,15
test -5,  map 0,10,20,5,15
"""
	e:
		Likformighet : 'https://www.matteboken.se/lektioner/matte-2/geometri/likformighet-och-kongruens'
		Ekvationssystem : 'https://www.matteboken.se/lektioner/matte-2/linjara-funktioner-och-ekvationssystem/linjara-ekvationssystem-grafisk-losning'

ID_MayFlower =
	v:'2018-02-26'
	k:'-> angleMode push pop translate rotate scale circle fill'
	l:23
	h:2
	b : """

flower = (c1,c2,c3,c4,x,y,r1,r2,r3,r4,r5) ->
	
angleMode DEGREES
flower '#F00','#FF0','#0F0','#000', 100,100, 50,25,35,20,5
scale 0.25
flower '#FF0','#F00','#FFF','#000', 100,100, 50,25,35,20,5
"""
	a:"""
flower = (c1,c2,c3,c4,x,y,r1,r2,r3,r4,r5) ->
	push()
	translate x,y
	fill c1
	rotate 54
	for i in range 5
		circle r1,0,r2
		rotate 72
	rotate 36
	fill c2
	for i in range 5
		circle r1,0,r2
		rotate 72
	translate -x,-y
	circle x,y,r3
	fill c3
	circle x,y,r4
	fill c4
	circle x,y,r5
	pop()
	
angleMode DEGREES
flower '#F00','#FF0','#0F0','#000', 100,100, 50,25,35,20,5
scale 0.25
flower '#FF0','#F00','#FFF','#000', 100,100, 50,25,35,20,5
"""
	e:
		Majblomman : 'https://www.google.se/search?q=majblomman&dcr=0&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwiG2JGjo8TZAhWLhywKHWGeC6wQsAQITQ&biw=738&bih=409'

ID_MineSweeper =
	v:'2017-05-19'
	k:'for range if while [] operators text rect circle class'
	l:69
	b:"""
class MineSweeper extends Application
	reset : (w,totalBombs) ->
		super
	draw  : ->
	mousePressed : (mx,my) ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
app = new MineSweeper
"""
	a: """

class MineSweeper extends Application
	reset : (w,totalBombs) ->
		super
		@seed = 0
		@w = w
		@n = int 200 / @w
		@newGame totalBombs
	newGame : (totalBombs) ->
		@state = 0
		@revealed = []
		@bombs = (@randint @n*@n for i in range totalBombs)
	neighborCount : (i0,j0) ->
		total = 0
		for di in [-1,0,1]
			for dj in [-1,0,1]
				[i,j] = [i0 + di,j0 + dj]
				if -1 < i < @n and -1 < j < @n
					if @n*j+i in @bombs then total++
		total
	draw : ->
		textAlign CENTER,CENTER
		textSize @w
		rectMode CENTER
		for i in range @n
			for j in range @n
				index = @n * j + i
				[x,y] = [@w*i+@w/2, @w*j+@w/2]
				sc 0
				fc 0.5
				rect x, y, @w, @w
				if @state==1 or index in @revealed
					fc 0
					if index in @bombs then circle x, y, @w * 0.25
					else
						fc 0.75
						rect x, y, @w, @w
						nc = @neighborCount i,j
						sc()
						fill cc nc
						if nc > 0 then text nc, x+1, y+1
	mousePressed : (mx,my) ->
		if @state==1 then @newGame @bombs.length
		else
			i = int mx/@w
			j = int my/@w
			index = @n*j+i
			if index in @bombs then	@state = 1 else	@reveal i,j
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	reveal : (i,j) ->
		@revealed.push @n*j+i
		if @neighborCount(i,j) == 0 then @floodFill i,j
	floodFill : (i0,j0) ->
		for di in [-1,0,1]
			for dj in [-1,0,1]
				i = i0 + di
				j = j0 + dj
				if -1 < i < @n and -1 < j < @n
					index = @n*j+i
					if not (index in @bombs or index in @revealed) then @reveal i,j

app = new MineSweeper "a"
"""
	c:
		app : "reset 20,10|reset 20,20|reset 20,30|reset 10,40"
	e:
		CodingTrain : "https://www.youtube.com/watch?v=LFU5ZlrR21E"
		Wikipedia : "https://en.wikipedia.org/wiki/Minesweeper_(video_game)"

ID_Moire =
	v:'2017-04-29'
	k:'bg range operators for line map class'
	l:11
	h:1
	b:"""
class Moire extends Application
	reset : ->
		super
	draw  : ->
	mousePressed : (mx,my) ->
app = new Moire
			"""
	a: """
class Moire extends Application
	reset : ->
		super
		[@x,@y] = [100,100]
	draw : ->
		bg 0
		for i in range 40
			for j in range 4
				[x,y] = [0,i*5,200,200-i*5,0][j..j+1]
				line @x,@y,x,y
	mousePressed : (mx,my) -> [@x,@y] = [mx,my]

app = new Moire "a"
"""
	c:
		app : "reset()"
	e:
		Wikipedia : "https://en.wikipedia.org/wiki/Moir%C3%A9_pattern"

ID_MultiTimer =
	v:'2017-04-29'
	k:'bg sc fc for [] operators text nf if int round millis class'
	l:30
	b:"""
# OBS! Tiderna kan skilja med flera millisekunder. Sorry!

class MultiTimer extends Application
	reset : ->
		super
	draw  : ->
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

