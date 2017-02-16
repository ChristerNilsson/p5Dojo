# b : comment line. LOC and keyword clues
# a : facit
# c : call 

data = 

#####################################

	"L1: bg point sc sw": 

		Background1: 
			a: "bg 1"
			b: """
# Den översta bitmappen till höger visar resultatet av din kod.
# Den mellersta bitmappen ska du efterlikna.
# Den understa bitmappen visar skillnaden mellan de två andra.

# Tryck på nedåtpil för att komma till sista raden.
# Skriv in följande kommando: bg 1
# Kontrollera att de båda övre bitmapparna nu är lika.

# Klicka på Background2 för att komma till nästa övning.
# Klicka på Help nere till vänster för mera information.
# Klicka på Reference för att se fler kommandon.

"""
		Background2: 
			b: "# LOC:1 bg\n"
			a: "bg 0.5"

		Background3: 
			b: "# LOC:1 bg\n"
			a: "bg 1,0,0"

		Background4: 
			b: "# LOC:1 bg\n"
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
			b: "# LOC:11 sc sw point\n"
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
			b: "# LOC:17 sc sw point\n"
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
			b: "# LOC:15 sc sw point\n"
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
			b: "# LOC:23 sc sw point\n"
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

		dices : 
			b : "# LOC:26 point sc\n" 
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
			b: "# LOC:7 bg circle fc sc\n" 
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
			b:"# LOC:2 circle fc\n"
			a:"""
fc 1
circle 60,80,30
"""

		whiteEmptyCircle: 
			b:"# LOC:2 circle fc sc sw\n"
			a:"""
sc 1
fc()
sw 2
circle 70,90,40
"""

		twoDiscsA: 
			b:"# LOC:3 circle fc\n"
			a:"""
fc 1,0,0 
circle 80,100,40
fc 0,1,0
circle 100,120,50
"""

		twoDiscsB:
			b:"# LOC:3 circle fc\n"
			a:"""
fc 1,0,0
circle 80,100,40
fc 0,1,0, 0.5
circle 120,100,50
"""

		textA: 
			b:"# LOC:3 text textSize\n"
			a:"""
fc 1,1,0
textSize 40
text 'Javascript',100,100
"""

		textB: 
			b:"# LOC:4 text textAlign textSize\n"
			a:"""
fc 1,1,0
textSize 40
textAlign CENTER,CENTER
text 'Coffeescript',100,100
"""

#####################################			
	
	"L3: ellipse rect" : 

		greenEllipse: 
			b:"# LOC:2 ellipse fc\n"
			a:"""
fc 0,1,0
ellipse 120,60, 60,40
"""

		greenRect: 
			b:"# LOC:2 fc rect\n"
			a:"""
fc 0,1,0
rect 60,80, 40,50
"""

		redRect:
			b:"# LOC:2 fc rect\n"
			a:"""
fc 1,0,0
rect 80,70, 40,100
"""

		cross: 
			b:"# LOC:3 fc rect\n"
			a:"""
fc 1,0,0
sc()
rect 85,70, 70,10
rect 115,40, 10,100
"""

		squareHole: 
			b : "# LOC:12 fc rect sc sw \n"
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

		for01: 
			b:"# LOC:2 for lerp rect\n"
			a:"""
for i in range 10
	x = 5+20*i
	rect x,5, 10,10
"""

		for02: 
			b:"# LOC:2 for lerp rect\n"
			a:"""
for i in range 10
	y = 5+20*i
	rect 5,y, 10,10
"""

		for03: 
			b:"# LOC:2 for lerp rect\n"
			a:"""
for i in range 10
	x = 5+20*i
	y = 5+20*i
	rect x,y, 10,10
"""

		for04: 
			b:"# LOC:3 for lerp rect\n"
			a:"""
for i in range 10
	for j in range 10
		x = 5+20*i
		y = 5+20*j
		rect x,y, 10,10
"""

		for05: 
			b:"# LOC:3 for lerp rect rectMode\n"
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
			b:"# LOC:4 fc for lerp rect rectMode\n"
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
			b:"# LOC:3 for fc circle lerp\n"
			a:"""
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	r = i
	circle x,y,r
"""

		for08: 
			b:"# LOC:3 for fc circle lerp\n"
			a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	r = 10 * i
	circle 100,100, r
"""

		for09: 
			b:"# LOC:3 for fc circle lerp\n"
			a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	x = 10*i
	y = 10*i
	r = 10*i
	circle x,y,r
"""

		for10: 
			b:"# LOC:4 for fc circle lerp\n"
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
			b:"# LOC:5 bg fc for rect\n"
			a:"""
bg 0.5
for i in range 1,9
	for j in range 1,9
		fc (i+j)%2
		rect 20*i,20*j, 20,20
"""
		
#####################################

	"L6: triangle quad arc" :

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

	"L7: Rotate" : 

		textC: 
			b:"# LOC:6 rd text textAlign textSize translate\n"
			a:"""
fc 1,1,0
textSize 40
textAlign CENTER,CENTER
translate 100,100
rd 90
text 'Javascript',0,0
"""

		textD: 
			b:"# LOC:6 rd text textAlign textSize translate\n"
			a:"""
fc 1,1,0
textSize 40
textAlign CENTER,CENTER
translate 100,100
rd 180
text 'Javascript',0,0
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
			b:"# LOC:10 push pop rd rect translate\n"
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
			b:"# LOC:11 fc push pop rd rect translate\n"
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
			b:"# LOC:7 for fc circle lerp rd rectMode sc translate\n"
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
			b:"# LOC:10 fc for lerp push pop rd rect rectMode sc translate\n"
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

	"L8: Function" : 

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
			# LOC:34 -> fc for if point [] %
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
		
		klocka: 
			b: """
			# LOC:37 -> circle else fc for if point push pop rd rect rectMode sc translate
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
		
		recursiveCircles: 
			b: """
			# LOC:7 -> circle if return sc <
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

		"Olympic Ring Prep":
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

	"L9: Guess a Number" :

		guess1:
			b:"# LOC:10 bg rectMode for range rect\n"
			a:"""
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
			b:"# LOC:15 bg rectMode for range rect textAlign text sc fc\n"
			a:"""
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
			b:"# LOC:15 bg rectMode for range rect textAlign text sc fc\n"
			a:"""
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
			b:"""
# LOC:20 bg rectMode for range rect textAlign text sc fc
f = (nx,ny) ->
"""
			a:"""
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
			b:"""
# LOC:26 bg rectMode for range rect textAlign text sc fc if else
f = (nx,ny,start,stopp) ->
"""
			a:"""
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
			b:"""
# LOC:30 bg rectMode for range rect textAlign text sc fc if else
f = (nx,ny,start,stopp,mx,my,target) ->
"""
			a:"""
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

	"L10: Class" : 

		"Olympic Rings":
			b: """
			# LOC:23 class constructor sc arc bg fc sw strokeCap
			class Ring
				constructor : (@x,@y,@r,@g,@b) ->
				draw : (start=3,stopp=3,hour=PI/6) ->

			olympic = (x=100,y=100,radius=50,d=60,w=10) ->
			"""
			a:"""
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

#####################################

	Exhibition :

		clown:
			b:"# LOC:32 bg circle fc sc sw line lerp (by David Larsson)\n"
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
			b:"# LOC:12 circle fc sc triangle (by Sabrina Larsson)\n"
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
			b:"# LOC:21 circle fc line sc triangle (by David Larsson)\n"
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
			b:"# LOC:35 bg circle fc line rect quad sc triangle (by Sabrina Larsson)\n"
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
			b:"# LOC:18 bg circle ellipse fc rect quad sc triangle (by Sabrina Larsson)\n"
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
			b:"# LOC:10 bg circle dist fc lerp map sc\n"
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
			b:"# LOC:10 bg circle dist fill map noStroke sin\n"
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
			b:"# LOC:9 circle colorMode fill map noStroke sin PI\n"
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
			b:"# LOC:10 bg circle colorMode cos fc map PI sc sin\n"
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
			b:"# LOC:12 bg circle colorMode cos fill map noStroke translate sin PI\n"
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
			b:"# LOC:12 circle colorMode cos fill map noStroke PI sin translate \n"
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
			b:"# LOC:17 circle cos map PI push pop rotate sin translate \n"
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
			b: "# LOC:6 circle lerp\n"
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

		chesscross : 
			b: "# LOC:6 for rect if fc David Larsson\n"
			a: """
for i in range 10
	for j in range 10
		fc()
		if i-j in [-2,0,2] then fc 0,1,0
		if i+j in [7,9,11] then fc 1,0,1
		rect 20*i,20*j,20,20
"""