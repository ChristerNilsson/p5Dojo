# b : comment line. LOC and keyword clues
# a : facit
# c : call 

data = 

	Nyheter :
		Nyheter :
			b:"""
# NYHETER 2017-03-01
#   L5: boardGame
# 	L8: sevenSegment, alphanumeric, GoldenStar, OlympicRing
#		L9: Connect4, RushHour, girlang, braid, OlympicRings, spaceShip, chessGame

# Klicka nu på L1!
"""
			a:"""
"""

#####################################
	"L1: bg point sc sw": 
#####################################

		Background1: 
			b: """
# Den översta bitmappen till höger visar resultatet av din kod.
# Den mellersta bitmappen ska du efterlikna.
# Den understa bitmappen visar skillnaden mellan de två andra.

# Tryck på PgDn för att komma till sista raden.
# Skriv in följande kommando: bg 1
# Kontrollera att de båda övre bitmapparna nu är lika.

# Klicka på Background2 för att komma till nästa övning.
# Klicka på Help nere till vänster för mera information.
# Klicka på Reference för att se fler kommandon.

"""
			a: "bg 1"

		Background2: 
			b: """
# LOC:1 bg

"""
			a: "bg 0.5"

		Background3: 
			b: """
# LOC:1 bg

"""
			a: "bg 1,0,0"

		Background4: 
			b: """
# LOC:1 bg

"""
			a: "bg 1,1,0"

		CornerPoints: 
			b: """
# LOC:9 sc sw point

sw 5
sc 1,0,0
point 0,0

"""
			a: """
sw 5
sc 1,0,0
point 0,0
sc 0,1,0
point 200,0
sc 1,1,0
point 0,200
sc 0
point 200,200
"""

		MidPoints: 
			b: """
# LOC:11 sc sw point

"""
			a: """
sw 5
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

		CornerPoints3: 
			b: """
# LOC:17 sc sw point

"""
			a: """
sw 5
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

		CornerPoints7: 
			b: """
# LOC:17 sc sw point

"""
			a: """
sw 5
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

		Diagonal: 
			b: """
# LOC:23 sc sw point

"""
			a: """
sc 1,0,0
sw 11
point 200,0
sw 10
point 180,20
sw 9
point 160,40
sw 8
point 140,60
sw 7
point 120,80
sw 6
point 100,100
sw 5
point 80,120
sw 4
point 60,140
sw 3
point 40,160
sw 2
point 20,180
sw 1
point 0,200
"""

#####################################
	"L2: circle fc text" : 
#####################################

		dices : 
			b : """
# LOC:26 point sc

"""
			a: """
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
		
		Five: 
			b: """
# LOC:12 bg circle fc sc

""" 
			a: """
bg 0.5
sc()
fc 1
circle 100,100,20
fc 1,0,0
circle 40,40,20
fc 1,1,0
circle 40,160,20
fc 0,1,0
circle 160,160,20
fc 0,0,1
circle 160,40,20
""" 

		whiteCircle: 
			b:"""
# LOC:2 circle fc

"""
			a:"""
fc 1
circle 60,80,30
"""

		whiteEmptyCircle: 
			b:"""
# LOC:4 circle fc sc sw

"""
			a:"""
sc 1
fc()
sw 2
circle 70,90,40
"""

		twoDiscsA: 
			b:"""
# LOC:4 circle fc

"""
			a:"""
fc 1,0,0 
circle 80,100,40
fc 0,1,0
circle 100,120,50
"""

		twoDiscsB:
			b:"""
# LOC:4 circle fc

"""
			a:"""
fc 1,0,0
circle 80,100,40
fc 0,1,0, 0.5
circle 120,100,50
"""

		textA: 
			b:"""
# LOC:3 fc textSize text

"""
			a:"""
fc 1,1,0
textSize 32
text 'Coffeescript',100,100
"""

		textB: 
			b:"""
# LOC:4 fc text textAlign textSize text

"""
			a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
text 'Coffeescript',100,100
"""

#####################################				
	"L3: ellipse rect" : 
#####################################

		greenEllipse: 
			b:"""
# LOC:2 ellipse fc

"""
			a:"""
fc 0,1,0
ellipse 120,60, 60,40
"""

		greenRect: 
			b:"""
# LOC:2 fc rect

"""
			a:"""
fc 0,1,0
rect 60,80, 40,50
"""

		redRect:
			b:"""
# LOC:2 fc rect

"""
			a:"""
fc 1,0,0
rect 80,70, 40,100
"""

		cross: 
			b:"""
# LOC:4 fc rect

"""
			a:"""
fc 1,0,0
sc()
rect 85,70, 70,10
rect 115,40, 10,100
"""

		squareHole: 
			b : """
# LOC:11 fc rect sc sw

"""
			a:"""
fc 0,1,1
sc()
rect 60,60, 80,20
rect 60,120, 80,20
rect 60,60, 20,80
rect 120,60, 20,80
fc()
sc 1,0,0
sw 3
rect 60,60, 80,80
rect 80,80, 40,40
""" 

#####################################
	"L4: for lerp rect" : 
#####################################

		for01: 
			b:"""
# LOC:3 for lerp rect

rect  5,5,10,10
rect 25,5,10,10
for i in range 0
	x = lerp 5,25,i 
	rect
"""
			a:"""
for i in range 10
	x = 5+20*i
	rect x,5, 10,10
"""

		for02: 
			b:"# LOC:3 for lerp rect\n"
			a:"""
for i in range 10
	y = 5+20*i
	rect 5,y, 10,10
"""

		for03: 
			b:"# LOC:4 for lerp rect\n"
			a:"""
for i in range 10
	x = 5+20*i
	y = 5+20*i
	rect x,y, 10,10
"""

		for04: 
			b:"# LOC:5 for lerp rect\n"
			a:"""
for i in range 10
	for j in range 10
		x = 5+20*i
		y = 5+20*j
		rect x,y, 10,10
"""

		for05: 
			b:"# LOC:7 for lerp rect rectMode\n"
			a:"""
rectMode CENTER
for i in range 10
	x = 10+20*i
	y = 10
	w = 2*i
	h = 2*i
	rect x,y, w,h
"""

		for06: 
			b:"# LOC:8 fc for lerp rect rectMode\n"
			a:"""
rectMode CENTER
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	w = 2*i
	h = 2*i
	rect x,y,w,h
"""

		for07: 
			b:"# LOC:6 for fc circle lerp\n"
			a:"""
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	r = i
	circle x,y,r
"""

		for08: 
			b:"# LOC:4 for fc circle lerp\n"
			a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	r = 10 * i
	circle 100,100, r
"""

		for09: 
			b:"# LOC:6 for fc circle lerp\n"
			a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	x = 10*i
	y = 10*i
	r = 10*i
	circle x,y,r
"""

		for10: 
			b:"# LOC:7 for fc circle lerp\n"
			a:"""
for i in range 10
	for j in range 10
		fc i/10.0,j/10.0,0
		x = 10+20*i
		y = 10+20*j
		r = (i+j)/2
		circle x,y,r
"""

#####################################	
	"L5: line for lerp" :
#####################################

		HorizontalLine: 
			b: "# LOC:2 line sc\n"
			a: """
sc 1,0,1
line 10,70, 190,70
"""

		VerticalLine: 
			b: "# LOC:3 line sc sw\n"
			a: """
sc 1,1,0
sw 10
line 110,30, 110,170
"""

		Line: 
			b: "# LOC:2 line sc\n"
			a: """
sc 1,1,0
line 20,0, 200,20
"""

		Grid: 
			b:"# LOC:5 for line sc sw\n"
			a:"""
sc 1,1,0
sw 2
for i in range 10,200,10
	line 10,i,190,i
	line i,190,i,10
"""

		Skislope:
			b: "# LOC:4 bg for lerp line sc"
			a: """
bg 0
sc 1,0,0
for i in range 21
	line i*10,0,200,i*10
"""

		Sunshine:
			b: "# LOC:5 bg for lerp line sc\n"
			a: """
bg 0
sc 1,1,0
for i in range 10
	line i*20,0,200-i*20,200
	line 0,20+i*20,200,180-i*20
"""
		
		Lines:  
			b:"# LOC:5 bg for lerp line (by Noel Watson)\n"
			a:"""
bg 0
for i in range 37
	line 10,10,190,10+i*5
	line 10,100,190,10+i*5
	line 10,190,190,10+i*5
"""

		chessRow: 
			b:"# LOC:5 % bg fc for rect\n"
			a:"""
bg 0.5
for i in range 8
	fc i%2
	x = 20+20*i 
	rect x,20, 20,20
"""
		
		chessBoard: 
			b:"# LOC:7 bg fc for rect\n"
			a:"""
bg 0.5
for i in range 8
	for j in range 8
		fc (i+j)%2
		x = 20+20*i
		y = 20+20*j
		rect x,y, 20,20
"""
		
		chessCross : 
			b: "# LOC:8 for rect if fc (David Larsson)\n"
			a: """
for i in range 10
	for j in range 10
		fc()
		if i-j in [-2,0,2] then fc 1,1,0
		if i+j in [7,9,11] then fc 1,0,0
		x = 20*i
		y = 20*j
		rect x,y, 20,20
"""

		boardGame :
			b:"""
# LOC:10 for in range circle bg fc sc

board = (x,y,d,r,n) ->
			"""
			a:"""
one = (d,r,x0,y0,m,n) ->
	for i in range m
		for j in range n
			circle x0+d*i,y0+d*j,r

board = (x,y,d,r,n) ->
	bg 1
	fc 0
	sc()
	one d,r,x-n*d, y-d,2*n+1,3
	one d,r,x-d, y-n*d,3,2*n+1"""
			c:
				"board 100,100,18, 7,5" : 0
				"board 100,100,25,10,3" : 0
				"board 100,100,35,15,2" : 0
				"board  50, 50, 9, 4,5" : 0
				"board  50,150,12, 5,3" : 0
				"board 150,150,18, 8,2" : 0

#####################################
	"L6: triangle quad arc" :
#####################################

		Triangle: 
			b:"# LOC:2 fc triangle\n" 
			a:"""
fc 1
triangle 20,40, 160,100, 100,140
"""

		Quad: 
			b:"# LOC:2 fc quad\n"
			a:"""
fc 1,1,0
quad 150,100, 180,20, 40,20, 100,140
"""

		PacMan: 
			b:"# LOC:2 arc fc radians PIE\n"
			a:"""
fc 1,1,0
arc 100,100, 80,80, radians(-135),radians(135), PIE
"""

#####################################
	"L7: translate rotate push pop" : 
#####################################

		textC: 
			b:"# LOC:6 fc rd textAlign textSize translate text\n"
			a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 90
text 'Coffeescript',0,0
"""

		textD: 
			b:"# LOC:6 fc textAlign textSize translate rd text\n"
			a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 180
text 'Coffeescript',0,0
"""
		
		rotatedEllipse: 
			b:"# LOC:5 ellipse rd translate\n"
			a:"""
fc 1,0,0
sc()
translate 100,100
rd 45
ellipse 0,0, 80,40
"""

		rotatedRectA: 
			b:"# LOC:4 fc rect\n"
			a:"""
fc 1,0,0
rect 60,100, 40,40
fc 0,1,0
rect 140,100, 40,40
"""

		rotatedRectB: 
			b:"# LOC:12 push pop rd rect translate\n"
			a:"""
push()
fc 1,0,0
translate 60,100
rd 45
rect 0,0, 40,40
pop()
push()
fc 0,1,0
translate 140,100
rd 45
rect 0,0, 40,40
pop()
"""

		rotatedRectC: 
			b:"# LOC:13 fc push pop rd rect translate\n"
			a:"""
rectMode CENTER
push()
fc 1,0,0
translate 80,120
rd 45
rect 0,0, 40,40
pop()
push()
fc 0,1,0
translate 160,120
rd 45
rect 0,0, 40,40
pop()
"""

		cards: 
			b:"# LOC:10 for fc circle lerp rd rectMode sc translate\n"
			a:"""
rectMode CENTER
sc 1
translate 100,100
for i in range 18,-1,-1
  r = 1.0*i/18
  fc r,0,0
  w = 70+5*i
  h = 70+5*i
  rect 0,0, w,h
  rd 5
""" 

		tiles: 
			b:"# LOC:13 fc for lerp push pop rd rect rectMode sc translate\n"
			a:"""
rectMode CENTER
sc()
for i in range 10
  for j in range 10
    push()
    translate 10+20*i,10+20*j
    rd 5*(i+j)
    r = i/9.0
    g = j/9.0
    b = 0
    fc r,g,b
    rect 0,0, 10,10
    pop()
""" 

#####################################
	"L8: function" : 
#####################################

		square : 
			b: """
			# LOC:5 -> bg sw fc rect

			square = (x,y,size,w=1, r=0.5,g=0.5,b=0.5) ->
			"""
			a: """
square = (x,y,size,w=1,r=0.5,g=0.5,b=0.5) ->
	bg 0
	sw w
	fc r,g,b
	rect x,y,size,size
			"""
			c: 
				"square 100,100,50" : 0
				"square 10,10,20" : 0
				"square 50,70,40,2" : 0
				"square 30,150,30,3,1,0,0" : 0

		multimoire: 
			b:"""
			# LOC:5 bg for line map

			moire = (k) ->
			"""
			a: """
moire = (k) ->
	background 0
	for i in range k
		for j in range 37
			line 10,map(i,0,k-1,10,190),190,10+j*5
"""
			c: 
				"moire 2":0
				"moire 3":0
				"moire 4":0
				"moire 5":0
		
		colorCube:
			b: """
			# LOC:8 -> bg fc for rect

			colorCube = (n,b) ->
			"""
			a: """
colorCube = (n,b) ->
	bg 0
	d = 200.0/n
	m = n-1.0
	for r in range n
		for g in range n
			fc r/m,g/m,b/m
			rect r*d,g*d,d,d
"""
			c:
				"colorCube 2,0":0
				"colorCube 2,1":0
				"colorCube 3,0":0
				"colorCube 3,1":0
				"colorCube 3,2":0

		manyDices: 
			b : """
			# LOC:21 -> fc for if point [] %

			manyDices = () ->
			"""
			a:"""
dots = (x,y,dots) ->
	for dot in dots
		if dot==1 then point x+8,y+8
		if dot==2 then point x+8,y+10
		if dot==3 then point x+8,y+12
		if dot==4 then point x+10,y+10
		if dot==5 then point x+12,y+8
		if dot==6 then point x+12,y+10
		if dot==7 then point x+12,y+12
dice = (x,y,d) ->
	if d==1 then dots x,y,[4]
	if d==2 then dots x,y,[1,7]
	if d==3 then dots x,y,[1,4,7]
	if d==4 then dots x,y,[1,3,5,7]
	if d==5 then dots x,y,[1,3,4,5,7]
	if d==6 then dots x,y,[1,2,3,5,6,7]
manyDices = () ->
	fc(0)
	for i in range 10
		for j in range 10
			dice 20*i,20*j,1+(i+j)%6
"""
			c : "manyDices()":0

		sevenSegment :
			b : """
# LOC:22 bg sc fc rectMode if then & rect []

digit = (d,x=100,y=100,w=80,h=10) ->
			"""
			a:"""
digit = (d,x=100,y=100,w=80,h=18) ->
	bg 0.5
	sc()
	fc 1,0,0
	rectMode CENTER
	pattern = [63,6,91,79,102,109,125,7,127,111]
	p = pattern[d]
	w0 = w-20
	if p & 1 then fc 1,0,0 else fc 0.3,0,0
	rect x,y-w,w0,h 
	if p & 2 then fc 1,0,0 else fc 0.3,0,0
	rect x+w/2,y-w/2,h,w0 
	if p & 4 then fc 1,0,0 else fc 0.3,0,0
	rect x+w/2,y+w/2,h,w0 
	if p & 8 then fc 1,0,0 else fc 0.3,0,0
	rect x,y+w,w0,h 
	if p & 16 then fc 1,0,0 else fc 0.3,0,0
	rect x-w/2,y+w/2,h,w0
	if p & 32 then fc 1,0,0 else fc 0.3,0,0
	rect x-w/2,y-w/2,h,w0 
	if p & 64 then fc 1,0,0 else fc 0.3,0,0
	rect x,y,w0,h 
"""
			c:
				"digit 0" : 0
				"digit 1" : 0
				"digit 2" : 0
				"digit 3" : 0
				"digit 4" : 0
				"digit 5" : 0
				"digit 6" : 0
				"digit 7" : 0
				"digit 8" : 0
				"digit 9" : 0
		
		alphanumeric:
			b:"""
# LOC:11 bg for in range indexOf & ** circle {} [] '' if then else

letter = (chr) ->
			"""
			a:"""
letter = (chr) ->
	bg 0
	sc()
	pattern = {1:'4c4444e', 2:'eh1248v', A:'ehhvhhh', B:'uhhuhhu'}
	for ch,j in pattern[chr]
		index = '0123456789abcdefghijklmnopqrstuv'.indexOf ch
		for i in range 5
			if index & 2**i then fc 0,1,0 else fc 0,0.3,0
			x = 140-20*i
			y = 40+20*j
			circle x,y,8
			"""
			c:
				"letter 'A'" : 0
				"letter 'B'" : 0
				"letter '1'" : 0
				"letter '2'" : 0	

		klocka: 
			b: """
			# LOC:25 -> circle else fc for if point push pop rd rect rectMode sc translate

			klocka = (h,m,s) ->
			"""
			a: """
visare = (v,w,l,r,g,b) ->
	push()
	rd v-90
	translate l/2,0
	fc r,g,b
	rect 0,0,l,w
	pop()
klocka = (h,m,s) ->
	rectMode CENTER
	translate 100,100
	urtavla()
	visare (h+m/60.0)*30, 7,60,1,0,0
	visare (m+s/60.0)*6,5,80,0,1,0
	visare s*6,2,80,0,0,1
urtavla = () ->
	fc 0
	sc 1
	circle 0,0,90
	fc 1
	for i in range 60
		if i%5==0
			circle 85,0,2
		else
			point 85,0
		rd 6
"""
			c: 
				"klocka 10,9,30":0
				"klocka 11,30,15":0

		GoldenStar:
			b: """
# LOC:13 translate rotate cos sin for range fc triangle bg

star = (x,y,n,a,b) ->
"""
			a: """
star = (x,y,n,a,b) ->
	bg 0
	translate x,y
	v = TWO_PI/n
	rotate -PI/2
	x1 = b * cos v/2
	y1 = b * sin v/2
	for i in range n
		fc 1,1,0
		triangle 0,0,a,0,x1,y1
		fc 1,0.7,0
		triangle 0,0,a,0,x1,-y1
		rotate v
"""
			c:
				"star 100,125,3,110,30" : 0
				"star 100,100,4,100,25" : 0
				"star 100,110,5,100,38" : 0
				"star 100,100,6,100,50" : 0
		
		recursiveCircles: 
			b: """
			# LOC:6 -> circle if return sc <

			circles = (x,y,r) ->
			"""
			a: """
sc 1
circles = (x,y,r) ->
	circle x,y,r
	if r < 10 then return
	circles x-r/2,y,r/2
	circles x+r/2,y,r/2
"""
			c: "circles 100,100,100":0		
		
		korg: 
			b:"""
			# LOC:17 -> bg fc for if else rect sc sw

			korg = (n,w,c1,c2) ->
			"""
			a: """
korg = (n,w,c1,c2) ->
	bg 0
	sw w
	fill c1
	stroke c2
	q = 2*n+1
	d = 200.0/q
	for i in range n
		rect d+i*2*d,0,d,200
	for j in range n
		rect 0,d+j*2*d,200,d
	for i in range n
		for j in range n
			if (i+j) % 2 == 1
				rect i*2*d,d+j*2*d,3*d,d
			else
				rect d+i*2*d,j*2*d,d,3*d
"""
			c: 
				"korg 1,5,co(1,0,0),co(1,1,0)":0
				"korg 2,4,co(0.5),co(1)":0
				"korg 3,3,co(1,1,0),co(1,0,0)":0
				"korg 4,2,co(1),co(0.5)":0
				"korg 5,1,co(1,0,0),co(1,1,0)":0

		"OlympicRing Prep":
			b:"""
# LOC:7 sc arc fc sw strokeCap

ring = (x,y,radius,w, r,g,b, start=3,stopp=3) ->
"""
			a:"""
ring = (x,y,radius,w, r,g,b, start=3,stopp=3) ->
	hour = PI/6
	strokeCap SQUARE
	fc()
	sw w
	sc r,g,b
	arc x,y,2*radius,2*radius,(start-3)*hour,(stopp-3)*hour
"""
			c: 
				"ring 100,100,60,20, 1,1,0":0
				"ring 100,100,80,10, 1,0,0, 3,6":0
				"ring 100,100,80,10, 0,1,0, 2,4":0
				"ring 100,100,80,10, 0,1,0, 4,2":0

#####################################
	"L9: class constructor new" : 
#####################################

		Connect4 :
			b:"""
# LOC:23 class constructor new textAlign textSize text for in range push % fc sc circle

class Connect4
	constructor : (moves,@size=27) -> 
	render : () ->

c1 = new Connect4 [0,1,2,0],20
c2 = new Connect4 [3,3,3,3,3,3,3,0,1,2,4,5,6]
c3 = new Connect4 [3,2,4,3,2,1,0,0,5,6,1,2,1,1,4,4,3,2,0,0,3,0]
			"""
			a:"""
class Connect4
	constructor : (moves,@size=27) ->
		bg 0
		textAlign CENTER,CENTER
		textSize @size/2
		@list = ([] for i in range 7)
		for move,i in moves
			@list[move].push i 
	render : () ->
		fc()
		sc 0.1,0.3,1
		sw 0.2 * @size
		for i in range 7
			for j in range 6
				circle 100-@size*3+@size*i, 180-@size*j, @size/2
		for column,i in @list
			for nr,j in column
				fc 1,nr%2,0
				sw 1
				circle 100-@size*3+@size*i, 180-@size*j, @size*0.4
				fc 0
				sc()
				text nr, 100-@size*3+@size*i, 180-@size*j

c1 = new Connect4 [0,1,2,0],20
c2 = new Connect4 [3,3,3,3,3,3,0,1,2,4,5,6]
c3 = new Connect4 [3,2,4,3,2,1,0,0,5,6,1,2,1,1,4,4,3,2,0,0,3,0]
"""
			c:
				"c1.render()" : 0
				"c2.render()" : 0
				"c3.render()" : 0


		RushHour :
			b:"""
# LOC:40 class constructor new textAlign text push bg sc fc rect 
#	       if then else for in range toLowerCase indexOf 
# https://en.wikipedia.org/wiki/Rush_Hour_(board_game)

class RushHour
	constructor : ->
	add : (pos,r,g,b) ->
	move : (n) ->

rushhour = new RushHour()
rushhour.add "d4e4",1,0,0
rushhour.add "d1d2",1,1,0
rushhour.add "e2f2",0,1,0
rushhour.add "f4f6",0,1,1
rushhour.moves = "aaBBBBcdddAAAAA"

"""
			a:"""
textAlign CENTER,CENTER
col = (s) -> "abcdef".indexOf s
row = (s) -> "123456".indexOf s

class Car
	constructor : (pos,@r,@g,@b) ->
		@i = col pos[0] 
		@j = row pos[3]
		@w = col(pos[2]) - @i + 1
		@h = @j - row(pos[1]) + 1 
	render : (i) -> 
		fc @r,@g,@b
		rect 40+20*@i+2, 140-20*@j+2, 20*@w-4, 20*@h-4
		fc 0
		text "ABCDEFGH"[i], 50+20*@i, 150-20*@j
	move : (positive) ->
		if positive then d=1 else d=-1
		if @w == 1 then @j += d
		if @h == 1 then @i += d
		
class RushHour
	constructor : -> @cars=[]
	add : (pos,r,g,b) -> @cars.push new Car pos,r,g,b
	move : (n) ->
		for i in range n
			ch = @moves[i].toLowerCase()
			car = @cars["abcdefgh".indexOf(ch)]
			car.move ch != @moves[i]
		@render()			

	render : ->
		bg 0
		sc()
		fc 0.5,0.5,0.5
		rect 40,40,120,120
		rect 160,80,40,20
		fc 1
		sc()
		for i in range 6
			text "654321"[i],30,50+20*i
			text "abcdef"[i],50+20*i,170
		for car,i in @cars
			car.render i
			
rushhour = new RushHour()
rushhour.add "d4e4",1,0,0
rushhour.add "d1d2",1,1,0
rushhour.add "e2f2",0,1,0
rushhour.add "f4f6",0,1,1
rushhour.moves = "aaBBBBcdddAAAAA"
"""
			c:
				"rushhour.move 0" : 0
				"rushhour.move 1" : 0
				"rushhour.move 2" : 0
				"rushhour.move 3" : 0
				"rushhour.move 4" : 0
				"rushhour.move 5" : 0
				"rushhour.move 6" : 0
				"rushhour.move 7" : 0
				"rushhour.move 8" : 0
				"rushhour.move 9" : 0
				"rushhour.move 10" : 0
				"rushhour.move 11" : 0
				"rushhour.move 12" : 0
				"rushhour.move 13" : 0
				"rushhour.move 14" : 0
				"rushhour.move 15" : 0

		Polygon:
			b:"""
# LOC:17 class constructor new cos sin radians sc line for range bg

class Turtle
	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->
	fd : (d) ->
	rt : (a) ->

polygon = (n,d) ->
	t = new Turtle()
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

polygon = (n,d) ->
	t = new Turtle()
	bg 0
	for i in range n
		t.fd d
		t.rt 360/n
"""
			c:
				"polygon 3,60" : 0
				"polygon 4,60" : 0
				"polygon 5,60" : 0
				"polygon 6,60" : 0
				"polygon 8,50" : 0
				"polygon 16,32" : 0
				"polygon 32,16" : 0
				"polygon 64,8" : 0

		girlang :
			b:"""
# LOC: 16 class constructor new sc line bg sw for in range

class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->

girlang = (x,y,n,width,dx,dy) ->
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
"""
			c: 
				"girlang 0,0,9,5,20,20" : 0
				"girlang 200,0,9,7,-20,20" : 0

		braid:
			b : """
# LOC: 19 class constructor new sc line bg sw for range
# https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg

class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->

braid = (n,dx,dy,width) ->		
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
		"""
			c:
				"braid 5,18,18,6" : 0
				"braid 4,30,21,14" : 0
				"braid 6,24,15,5" : 0

		OlympicRings:
			b: """
			# LOC:24 class constructor sc arc bg fc sw strokeCap

			class Ring
				constructor : (@x,@y,@r,@g,@b) ->
				draw : (start=3,stopp=3,hour=PI/6) ->

			olympic = (x=100,y=100,radius=50,d=60,w=10) ->
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
"""	
			c:
				"olympic()" : 0
				"olympic 100,50,25,30,5" : 0
				"olympic 100,100,100,120,20" : 0

		SpaceShip :
			b:"""
# LOC: 22 class constructor cos sin radians translate rd sc sw triangle point new

class Ship
	constructor : (@x,@y,@s,@dir, @r=1,@g=1,@b=0) ->
	lt : (a=90) -> 
		@
	draw : ->
			
s1 = new Ship 20,120,10,0		
s2 = new Ship 100,100,20,-90, 1,0,0	
			"""
			a: """
class Ship
	constructor : (@x,@y,@s,@dir, @r=1,@g=1,@b=0) ->
	lt : (a=90) -> 
		@dir -= a
		@
	rt : (a=90) -> 
		@dir += a
		@
	fd : (d=100) -> 
		@x += d * cos radians @dir
		@y += d * sin radians @dir
		@
	draw : ->
		translate @x,@y
		rd @dir
		sc @r,@g,@b
		sw 2
		triangle 2*@s,0, -@s,@s, -@s,-@s
		sw 5
		point 0,0

s1 = new Ship 20,120,10,0		
s2 = new Ship 100,100,20,-90, 1,0,0	
			"""
			c:
				"s1.draw()" : 0
				"s2.draw()" : 0
				"s1.lt(45).draw()" : 0
				"s1.rt(45).draw()" : 0
				"s1.rt().draw()" : 0
				"s1.rt(180).draw()" : 0
				"s1.fd(50).draw()" : 0
				"s1.lt().fd().rt().fd().rt().draw()" : 0
				"s1.fd().rt(45).draw()" : 0
				"s1.rt(45).fd().draw()" : 0

		chessGame :
			b:"""
# LOC:60 class constructor new if then else textSize textAlign text rectMode rect 
#        for in range point bg fc sc sw push split length indexOf

class Chess
	constructor : (@moves="", @size=22, w="",b="", @x=100,@y=100) ->
	move : (n) ->

bg 0.5
big = new Chess "e2e4 e7e5 g1f3 b8c6 f1c4"
small = new Chess "g2g4 e7e5 f2f4 d8h4",18

			"""
			a:"""
class Chess
	constructor : (@moves="",@size=22,w="",b="",@x=100,@y=100) ->
		if b == "" then b = "Ra8 Nb8 Bc8 Qd8 Ke8 Bf8 Ng8 Rh8 a7 b7 c7 d7 e7 f7 g7 h7"
		if w == "" then w = "Ra1 Nb1 Bc1 Qd1 Ke1 Bf1 Ng1 Rh1 a2 b2 c2 d2 e2 f2 g2 h2"
		textSize 0.9 * @size
		textAlign CENTER,CENTER
		rectMode CENTER
		@white = @putPieces w
		@black = @putPieces b
		@moves = @moves.split " "

	putPieces : (pieces) ->
		res = []
		for i in range 64
			res.push "" 
		arr = pieces.split " "
		for piece in arr
			if piece.length == 2
				chr = "o"
				sq = piece
			else
				chr = piece[0]
				sq = piece[1..]
			[col,row] = getIndex sq
			res[8*col+row] = chr	
		res

	getIndex = (sq) ->
		col = "abcdefgh".indexOf sq[0]
		row = "12345678".indexOf sq[1]
		[col,row]
		
	render1 : (pieces,c) ->
		fc c
		sc c
		for row in range 8
			for col in range 8
				piece = pieces[8*col+row]
				x = @x-3.5*@size+col*@size
				y = @y-3.5*@size+(7-row)*@size
				if piece == "o"
					sw @size/2
					point x,y
				else if piece in "KQRBN"
					sw 1-c
					text piece,x, 1+y		
				
	render : () ->
		sc()
		for i in range 8
			for j in range 8
				if (i+j)%2 == 1 then fc 0.4 else fc 0.6
				rect @x-3.5*@size+@size*i, @y-3.5*@size+@size*j, @size, @size
		@render1 @white,1
		@render1 @black,0

	movePiece = (m,player) ->
		[col1,row1] = getIndex m[0..1]
		[col2,row2] = getIndex m[2..3]
		player[col2*8+row2] = player[col1*8+row1]
		player[col1*8+row1] = ""
		
	move : (n) ->
		for i in range n
			movePiece @moves[i], if i%2==0 then @white else @black
		@render()

bg 0.5
big = new Chess "e2e4 e7e5 g1f3 b8c6 f1c4"
small = new Chess "g2g4 e7e5 f2f4 d8h4",18

"""
			c:
				"big.move 0" : 0
				"big.move 1" : 0
				"big.move 2" : 0
				"big.move 3" : 0
				"big.move 4" : 0
				"big.move 5" : 0
				"small.move 0" : 0
				"small.move 1" : 0
				"small.move 2" : 0
				"small.move 3" : 0
				"small.move 4" : 0

#####################################
	"L10: Guess a Number" :
#####################################

		guess1:
			b: """
# LOC:11 bg rectMode for range rect

"""
			a: """
bg 1
rectMode CENTER,CENTER
n = 200
size = n / 8
sc 0
for i in range 8
	x = i * size + size/2
	y = size/2
	w = size
	h = size
	rect x,y,w,h
"""

		guess2:
			b: """
# LOC:16 bg rectMode for range rect textAlign text sc fc

"""
			a: """
bg 1
rectMode CENTER,CENTER
textAlign CENTER,CENTER
n = 200
size = n / 8
for i in range 8
	x = i * size + size/2
	y = size/2
	w = size
	h = size
	fc()
	sc 0
	rect x,y,w,h
	fc 0
	sc()
	text i,x,y
"""

		guess3:
			b: """
# LOC:17 bg rectMode for range rect textAlign text sc fc

"""
			a: """
bg 1
rectMode CENTER,CENTER
textAlign CENTER,CENTER
n = 200
size = n / 8
for i in range 8
	for j in range 8
		x = i * size + size/2
		y = j * size + size/2
		w = size
		h = size
		fc()
		sc 0
		rect x,y,w,h
		fc 0
		sc()
		text i+8*j,x,y
"""

		guess4:
			b: """
# LOC:19 bg rectMode for range rect textAlign text sc fc

f = (nx,ny) ->
"""
			a: """
f = (nx,ny) ->
	bg 1
	rectMode CENTER,CENTER
	textAlign CENTER,CENTER
	n = 200
	px = n/nx
	py = n/ny
	for i in range nx
		for j in range ny
			x = i * px + px/2
			y = j * py + py/2
			w = px
			h = py
			fc()
			sc 0
			rect x,y,w,h
			fc 0
			sc()
			text i+nx*j,x,y
"""
			c:
				"f 8,6":0
				"f 6,6":0

		guess5:
			b: """
# LOC:23 bg rectMode for range rect textAlign text sc fc if else

f = (nx,ny,start,stopp) ->
"""
			a: """
f = (nx,ny,start,stopp) ->
	bg 1
	rectMode CENTER,CENTER
	textAlign CENTER,CENTER
	n = 200
	px = n/nx
	py = n/ny
	for i in range nx
		for j in range ny
			x = i * px + px/2
			y = j * py + py/2
			w = px
			h = py
			fc()
			sc 0
			rect x,y,w,h
			index = i+nx*j
			sc()
			if start <= index && index <= stopp
				fc 0
			else
				fc 0.8
			text index,x,y
"""
			c:
				"f 8,8,18,45" : 0
				"f 6,6,10,25" : 0

		guess6:
			b: """
# LOC:28 bg rectMode for range rect textAlign text sc fc if else

f = (nx,ny,start,stopp,mx,my,target) ->
"""
			a: """
f = (nx,ny,start,stopp,mx,my,target) ->
	bg 1
	rectMode CENTER,CENTER
	textAlign CENTER,CENTER
	n = 200
	px = n/nx
	py = n/ny
	i = int mx/px
	j = int my/py 
	clicked = i+nx*j
	if clicked <= target then start = clicked + 1
	if clicked >= target then stopp = clicked - 1
	for i in range nx
		for j in range ny
			x = i * px + px/2
			y = j * py + py/2
			w = px
			h = py
			fc()
			sc 0
			rect x,y,w,h
			index = i+nx*j
			sc()
			if start <= index and index <= stopp
				fc 0
			else
				fc 0.8
			text index,x,y
"""
			c:
				"f 8,8,18,45,70,90,28":0
				"f 6,6,10,25,90,90,20":0

#####################################
	Exhibition :
#####################################

		clown:
			b:"""
# LOC:30 bg circle fc sc sw line lerp (David Larsson)

"""
			a:"""
bg 0, 1, 0, 0.5
fc 1, 0, 0
circle 10, 10, 5
circle 20, 20, 10
for i in range 10
	x = lerp 10, 20, i
	y = x
	r = lerp 5, 10, i
	circle x, y, r
fc 0, 1, 1
circle 190, 10, 5
circle 180, 20, 10
for i in range 10
	x = lerp 190, 180, i
	y = lerp 10, 20, i
	r = lerp 5, 10, i
	circle x, y, r
fc 1
circle 100, 100, 50
fc 0
circle 80, 80, 10
circle 120, 80, 10
sc 1, 1, 0
sw 5
line 70, 105, 80, 120
line 80, 120, 115, 120
line 115, 120, 130, 105
fc 1, 0, 0
sc 1, 0, 0
circle 100, 100, 10
"""

		tomteluva:
			b:"""
# LOC:12 circle fc sc triangle (Sabrina Larsson)

"""
			a:"""
bg 0,1,0
fc 1,0,0
sc 1,0,0
triangle 60,140,100,60,140,140
fc 1
sc 1
circle 60,140,10
circle 80,140,10
circle 100,140,10
circle 120,140,10
circle 140,140,10
circle 100,60,10		
"""

		snowman:
			b:"""
# LOC:21 circle fc line sc triangle (David Larsson)

"""
			a:"""
fc 1
circle 100, 150, 50
circle 100, 70, 40
fc 0
circle 80, 60, 8
circle 120, 60, 8
circle 85, 90, 6
circle 95, 95, 6
circle 115, 90, 6
circle 105, 95, 6
fc 1, 0, 0, 0.5
triangle 100, 65, 90, 80, 105, 75
sc 1, 1, 0
sw 3
line 50, 140, 30, 90
line 35, 100, 40, 80
line 140, 140, 170, 90
line 160, 105, 155, 100
fc 1
sc 1
rect 2, 180, 196, 20
"""

		christmasTree:
			b:"""
# LOC:35 bg circle fc line rect quad sc triangle (Sabrina Larsson)

"""
			a:"""
bg 0 
fc 0, 1, 0 
sc 0, 1, 0 
triangle 100, 100, 180, 160, 20, 160 
triangle 100, 60, 160, 120, 40, 120 
triangle 100, 40, 140, 80, 60, 80 
fc 0.5 
sc 0.5 
rect 80, 160, 40, 20 
fc 1, 1, 0 
sc 1, 1, 0 
quad 100, 0, 120, 20, 100, 40, 80, 20 
rect 85, 5, 30, 30 
sc 1, 1, 0 
line 80, 60, 140, 120 
line 60, 100, 120, 160 
fc 1, 0, 0 
sc 1, 0, 0 
circle 80, 100, 5 
circle 140, 140, 5 
circle 100, 60, 5 
circle 60, 160, 5 
circle 100, 120, 5 
fc 1 
sc 1 
rect 0, 180, 200, 20 
circle 20, 20, 5 
circle 40, 40, 5 
circle 10, 80, 5 
circle 30, 140, 5 
circle 50, 100, 5 
circle 120, 50, 5 
circle 160, 20, 5 
circle 180, 80, 5 
circle 160, 130, 5 
circle 190, 180, 5 
"""

		santa:
			b:"""
# LOC:18 bg circle ellipse fc rect quad sc triangle (Sabrina Larsson)

"""
			a:"""
bg 0,0,1
fc 1,0,0
sc 1,0,0
ellipse 100,50,60,70
rect 60,20,30,10
quad 140,10,145,20,120,25,115,20
fc 0
sc 0
circle 50,25,10
rect 70,40,60,10
circle 140,20,10
sc 1,1,0
rect 100,45,5,5
fc 0.5
sc 0.5
rect 60,80,80,20
rect 80,100,40,60
triangle 100,140,0,200,200,200
"""

		dist: 
			b:"""
# LOC:10 bg circle dist fc lerp map sc

"""
			a:"""
bg 0
fc 1
sc()
for i in range 10
	x = lerp 10,30,i
	for j in range 10
		y = lerp 10,30,j
		d = dist 100,100,x,y
		r = map(d,0,150,1,20)/2
		circle x,y,r
""" 
		
		bulge: 
			b:"""
# LOC:10 bg circle dist fill map noStroke sin

"""
			a:"""
bg 0
fill 255
noStroke()
for i in range 20
	for j in range 20
		x = i*200/20+5
		y = j*200/20+5
		r = map(sin(i*PI/20),-1,1,1,3) * map(sin(j*PI/20),-1,1,1,3) / 2
		circle x,y,r
"""

		wave: 
			b:"""
# LOC:9 circle colorMode fill map noStroke sin PI

"""
			a:"""
colorMode HSB,360,100,100
noStroke()
bg 0
for i in range 21
	fill map(i,0,20,0,360),100,100
	a = map i,0,20,0,2*PI
	x = 10*i
	y = map sin(a),-1,1,0,200
	circle x,y,3
"""

		circle: 
			b:"""
# LOC:10 bg circle colorMode cos fc map PI sc sin

"""
			a:"""
bg 0
colorMode HSB,360,100,100
for i in range 20
	r=map i,0,19,0,360
	fill r,255,255
	a=map i,0,20,0,2*PI
	sc()
	x=map cos(a),-1,1,0,200
	y=map sin(a),-1,1,0,200
	circle x,y,3
"""
	
		circles: 
			b:"""
# LOC:12 bg circle colorMode cos fill map noStroke translate sin PI

"""
			a:"""
bg 0
noStroke()
colorMode HSB,360,100,100
translate 100,100
for i in range 20
	for j in range 11
		fill map(i,0,20,0,360),255,255
		a = map i,0,20,0,2*PI
		x = map cos(a),-1,1,-j*10,j*10
		y = map sin(a),-1,1,-j*10,j*10
		r = 3
		circle x,y,r
"""
		
		sized_circles: 
			b:"""
# LOC:12 circle colorMode cos fill map noStroke PI sin translate

"""
			a:"""
bg 0
noStroke()
colorMode HSB,360,100,100
translate 100,100
for i in range 20
	fill map(i,0,20,0,360),255,255
	a = map i,0,20,0,2*PI
	for j in range 11
		x = map cos(a),-1,1,-j*10,j*10
		y = map sin(a),-1,1,-j*10,j*10
		r = map(j,0,10,0,10)/2
		circle x,y,r
"""
		
		rotated_circles: 
			b:"""
# LOC:17 circle cos map PI push pop rotate sin translate

"""
			a:"""
colorMode HSB,360,100,100
sc()
bg 0
translate 100,100
for i in range 20
	r = map i,0,20,0,360
	a=map i,0,20,0,2*PI
	for j in range 11
		push()
		rotate map j,0,10,0,360
		fill r,255,255
		x=map cos(a),-1,1,-j*10,j*10
		y=map sin(a),-1,1,-j*10,j*10
		circle x,y,j/2
		pop()
"""

		gravity : 
			b: """
# LOC:6 circle lerp

"""
			a: """
fc 1
for i in range 15
	x=5+10*i
	y=5+lerp(0,lerp(0,1,i),i)
	circle x,y,5
"""

		hypnoticA : 
			b: """
			# LOC:6 -> bg circle cos fc sc sin

			hypnoticA = () ->
			"""
			a: """
hypnoticA = () ->
	bg 0.5, 0, 0
	sc()
	fc 1
	for i in range 100
		x = 100 + cos(i) * i
		y = 100 + sin(i) * i
		circle x, y, 5
"""
			c: "hypnoticA()":0

		hypnoticB : 
			b: """
			# LOC:7 -> bg circle cos fc map sc sin

			hypnoticB = (t) ->
			"""
			a: """
hypnoticB = (t) ->
	bg 0.5, 0, 0
	sc()
	fc 1
	for i in range 100
		x = 100 + cos(i) * i
		y = 100 + sin(i) * i
		speed = i/10.0
		r = map sin(t*speed), -1, 1, 2, 5
		circle x, y, r
"""
			c: 
				"hypnoticB 1":0
				"hypnoticB 5":0

