ID_DavidStar = 
	v:'2018-06-14'
	k:'class sc if angleMode sw bg for'
	l:30
	h:2
	b:"""
class Turtle
	constructor : (@x,@y,@r=1,@g=1,@b=1,@dir=0) -> @draw = false
	fd : (d) ->
		sc @r,@g,@b
		dx = d * cos @dir
		dy = d * sin @dir 
		if @draw then line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]
	rt : (d) ->
	lt : (d) ->
	up   : ->
	down : -> 
"""
	a:"""
class Turtle
	constructor : (@x,@y,@r=1,@g=1,@b=1,@dir=0) -> @draw = false
	fd : (d) ->
		sc @r,@g,@b
		dx = d * cos @dir
		dy = d * sin @dir 
		if @draw then line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]
	rt : (d) -> @dir += d
	lt : (d) -> @dir -= d
	up   : -> @draw = false
	down : -> @draw = true

r = new Turtle 100,60,1,0,0
g = new Turtle 100,60,0,1,0
angleMode DEGREES
sw 16
bg 0
s = 72
r.fd s*2/3
r.lt 60
r.fd -s/3
r.rt 120
r.down()
g.down()

for i in range 6
	if i%2==0 then x = g else x = r
	x.fd s 
	x.rt 120
	x.fd s 
g.fd s
"""

ID_DifferenceEngine =
	v:'2018-10-19'
	k:'bg fc sc sw range circle class if text textAlign for []'
	l:44
	h:3
	b:"""
class Button
	constructor : (@title,@x,@y,@r) ->
	inside : (x,y) ->
	render : ->
class DifferenceEngine extends Application
	classes : -> [Button]
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
app = new DifferenceEngine

# Ställ t ex in [1,0] längst ner. 
# Klicka därefter upprepat på Forward. 
# Nu har du löst 1 2 3 4 5 ...
#
# 1 2 3 4 5 ...
# 2 4 6 8 10 ... Jämna tal
# 1 4 9 16 25 ... Kvadrater
# 1 8 27 64 125 ... Kuber
# 1 1 2 3 5 8 13 21 ... Fibonacci (omöjlig)
"""
	a:"""
# events lagras inte i Buttons eftersom kod inte serialiseras till localStorage
# Därför hanteras events i mousePressed istället
class Button
	constructor : (@title,@x,@y,@r) ->
	inside : (x,y) -> @r > dist x,y,@x,@y
	render : ->
		fc 1
		circle @x,@y,@r
		fc 0
		text @title,@x,@y
class DifferenceEngine extends Application
	classes : -> [Button]
	reset : ->
		super
		@buttons = []
		@vars = []
		@buttons.push new Button 'Back',135,135,17 
		@buttons.push new Button 'Forw',175,135,17 
		@buttons.push new Button 'Clr',155,170,17
		for i in range 10 
			@buttons.push new Button '+',80,190-20*i,8 
			@buttons.push new Button '-',100,190-20*i,8
		@clr()	
		@draw()	
	draw : ->
		bg 0.5
		fc 0
		sc()
		textAlign CENTER,CENTER
		button.render() for button in @buttons
		fc 1,1,0
		text t,155,30+20*i for t,i in 'Difference Engine'.split ' '
		textAlign RIGHT,CENTER
		text v,60,190-20*i for v,i in @vars
	clr : -> @vars = [0,0,0,0,0,0,0,0,0,0] # 0th to 9th differnce
	forw : -> @vars[i] += @vars[i+1] for i in range 9
	back : -> @vars[i] -= @vars[i+1] for i in range 8,-1,-1	
	mousePressed : (mx,my) ->
		for button,i in @buttons
			if button.inside mx,my 
				index = (i-3)//2
				if button.title == 'Back' then @back()
				if button.title == 'Forw' then @forw()
				if button.title == 'Clr' then @clr()
				if button.title == '+' then @vars[index]++
				if button.title == '-' then @vars[index]--

app = new DifferenceEngine "a"
"""
	c:
		app : "reset()"

	e:
		"Babbage's Difference Part 1" : 'https://www.youtube.com/watch?v=PFMBU17eo_4'
		'Finite Differences Tutorial' : 'https://www.youtube.com/watch?v=vIriKhGsaPk'
		Youtube1 : 'https://www.youtube.com/watch?v=be1EM3gQkAY'
		Youtube2 : 'https://www.youtube.com/watch?v=0anIyVGeWOI'
		'Babbage 1822': 'https://en.wikipedia.org/wiki/Difference_engine'
		'Scheutz 1843' : "https://en.wikipedia.org/wiki/Difference_engine#Scheutzian_calculation_engine"
		Scheutz_2 : 'https://en.wikipedia.org/wiki/Per_Georg_Scheutz'
		Scheutz_3 : 'http://history-computer.com/Babbage/NextDifferentialEngines/Scheutz.html'
		'Wiberg 1860' : 'https://en.wikipedia.org/wiki/Martin_Wiberg'
