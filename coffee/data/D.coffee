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
