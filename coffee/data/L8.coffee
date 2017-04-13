ID160 = # ManyDices: 
	b : "# LOC:8 -> range # for in if then point [] * + % & << ->\n"
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

ID161 = # Girlang :
	b:"""
# LOC:16 sc bg sw range # for in line class constructor new @

class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->

girlang = (x,y,n,width,dx,dy) ->

girlang 0,0,9,5,20,20
"""		
	a:"""
class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->
		sc @r,@g,@b
		line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]

girlang = (x,y,n,width,dx,dy) ->
	a = new Cartesius 1,0,0, x+dx/2,0
	b = new Cartesius 1,1,0, x,y+dy/2

	bg 0
	sw width

	for i in range n
		a.go 0,dy
		b.go dx,0
		b.go 0,dy
		a.go dx,0

girlang 0,0,9,5,20,20			
"""

ID162 = # Braid:
	b : """
# LOC:19 sc bg sw range # for in line class constructor new @

class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->

braid = (n,dx,dy,width) ->	

braid 5,18,18,6
"""

	a:"""
class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->
		sc @r,@g,@b
		line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]

braid = (n,dx,dy,width) ->		

	a = new Cartesius 1,0,0, 100-dx/2,dy/3
	b = new Cartesius 1,1,0, 100+dx/2,2*dy/3
	c = new Cartesius 0,1,0, 100-dx/2,dy

	bg 0
	sw width

	for i in range n
		a.go dx,dy
		b.go -dx,dy
		c.go dx,dy

		a.go -dx,dy
		b.go dx,dy
		c.go -dx,dy

braid 5,18,18,6
"""
	e:
		braid : "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"

ID163 = # OlympicRings:
	b: """
# LOC:24 sc bg fc sw # arc strokeCap class constructor new @

class Ring
	constructor : (@x,@y,@r,@g,@b) ->
	draw : (start=3,stopp=3,hour=PI/6) ->

olympic = (x=100,y=100,radius=50,d=60,w=10) ->

olympic()
"""
	a: """
class Ring
	constructor : (@x,@y,@radius, @r,@g,@b) ->
	draw : (start=3,stopp=3,hour=PI/6) ->
		sc @r,@g,@b
		arc @x,@y,@radius,@radius,(start-3)*hour,(stopp-3)*hour
		
olympic = (x=100,y=100,radius=50,d=60,w=10) ->
	r1 = new Ring x-d,  y,     radius, 0,0,1
	r2 = new Ring x,    y,     radius, 0,0,0
	r3 = new Ring x+d,  y,     radius, 1,0,0
	r4 = new Ring x-d/2,y+d/3, radius, 1,1,0
	r5 = new Ring x+d/2,y+d/3, radius, 0,1,0

	strokeCap SQUARE
	bg 0.5
	fc()
	sw w

	r1.draw()
	r3.draw()
	r4.draw()
	r5.draw()
	r1.draw 2,4
	r2.draw()
	r4.draw 12,2
	r5.draw 8,10
	r3.draw 6,8

olympic()			
"""	

ID164 = # OneDiceHistogram
	b:"# LOC:10 range # Array fill length int random text textAlign for in ++ * / + - rect []\n"
	a:"""
counts = Array(6).fill 0
dice = -> int 6 * random() 
textAlign CENTER,CENTER
for i in range 1000
	counts[dice()]++
w = 30
for count,i in counts
	x = w*i + (200-w*counts.length)/2
	rect x,0,w,count         
	text i+1,x+w/2,10                	
"""

ID165 = # TwoDiceHistogram
	b:"# LOC:10 range # Array fill length int random text textAlign for in ++ * / + - rect []\n"
	a:"""
counts = Array(11).fill 0
dice = -> int 6 * random() 
textAlign CENTER,CENTER
for i in range 1000
	counts[dice() + dice()]++
w = 16
for count,i in counts
	x = w*i + (200-w*counts.length)/2
	rect x,0,w,count         
	text i+2,x+w/2,10                	
"""
	e:
		Kojo : "https://www.youtube.com/watch?v=X6YSgNkcgAs"
