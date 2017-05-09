ID_ManyDices =
	v:'2017-04-29'
	k:'-> range for if point [] operators ->'
	b : "# LOC:8 \n"
	a : """
dice = (x,y,d) ->
	for bits,i in [21,56,32,62,62,32,56]
		dx = 4 * [0,-1,-1,-1,1,1,1][i]
		dy = 4 * [0,-1,0,1,-1,0,1][i]
		if d&bits then point 10+x+dx,10+y+dy
for i in range 10
	for j in range 10
		dice 20*i, 20*j, 1 << (i+j) % 6
"""

ID_MidPoints =
	v:'2017-04-29'
	k:'sc sw point'
	b: "# LOC:11 \n"
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
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID_Moire =
	v:'2017-04-29'
	k:'bg range operators for line map class'
	b:"""
# LOC:11

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
	k:'bg sc fc for [] comparisons logical text nf if int round millis class'
	b:"""
# LOC:30
#
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
