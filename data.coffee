# b : comment line. LOC and keyword clues
# a : facit
# c : call 

data = 

#####################################
	Nyheter :
#####################################

		Nyheter :
			b:"""
# NYHETER 2017 MAR
#   L6: Two Arcs
#   L7: Roulette
#   L8: boardGame, sevenSegment, OlympicRing
#   L9: Connect4, RushHour, girlang, braid, OlympicRings, chessGame
#   L10: alphanumeric, GoldenStar, spaceShip

# Klicka nu på L1!

# Eller besök Utställningen.
# Dessa bilder är framtagna av deltagare på p5Dojo.
# Vill du också visa upp ditt alster? Ge i så fall koden till din mentor.
"""
			a:"""
"""

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
# LOC:4 fc text textAlign textSize

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
# LOC:2 fc ellipse

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
# LOC:11 fc sc sw rect

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

		"horizontal squares": 
			b:"""
# LOC:3 rect for in range lerp 

rect  5,5,10,10
rect 25,5,10,10
for i in range 5
	x = lerp 5,25,i 
	rect
"""
			a:"""
for i in range 10
	x = 5+20*i
	rect x,5, 10,10
"""

		"vertical squares": 
			b:"# LOC:3 rect for in range lerp\n"
			a:"""
for i in range 10
	y = 5+20*i
	rect 5,y, 10,10
"""

		"diagonal squares": 
			b:"# LOC:4 rect for in range lerp\n"
			a:"""
for i in range 10
	x = 5+20*i
	y = 5+20*i
	rect x,y, 10,10
"""

		"double for loop": 
			b:"# LOC:5 rect for in range lerp\n"
			a:"""
for i in range 10
	for j in range 10
		x = 5+20*i
		y = 5+20*j
		rect x,y, 10,10
"""

		"growing squares": 
			b:"# LOC:7 rect rectMode for in range lerp\n"
			a:"""
rectMode CENTER
for i in range 10
	x = 10+20*i
	y = 10
	w = 2*i
	h = 2*i
	rect x,y, w,h
"""

		"growings red squares": 
			b:"# LOC:8 fc for in range lerp rect rectMode\n"
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

		"growing circles": 
			b:"# LOC:6 for in range fc circle lerp\n"
			a:"""
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	r = i
	circle x,y,r
"""

		"shrinking circles": 
			b:"# LOC:4 for in range fc circle lerp\n"
			a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	r = 10 * i
	circle 100,100, r
"""

		"red cone": 
			b:"""
# LOC:6 for in range fc circle lerp
"""
			a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	x = 10*i
	y = 10*i
	r = 10*i
	circle x,y,r
"""

		"penta lerp": 
			b:"""
# LOC:11 bg sc fc for in range circle lerp
"""
			a:"""
bg 0.5
sc()
for i in range 10
	for j in range 10
		r = lerp 0.1,0.2,i
		g = lerp 0.1,0.2,j
		fc r,g,0
		x = lerp 10,30,i
		y = lerp 10,30,j
		radius = lerp 1,1.5,i+j
		circle x,y,radius
"""

#####################################	
	"L5: line for lerp" :
#####################################

		HorizontalLine: 
			b: "# LOC:2 sc line\n"
			a: """
sc 1,0,1
line 10,70, 190,70
"""

		VerticalLine: 
			b: "# LOC:3 sc sw line\n"
			a: """
sc 1,1,0
sw 10
line 110,30, 110,170
"""

		Line: 
			b: "# LOC:2 sc line\n"
			a: """
sc 1,1,0
line 20,0, 200,20
"""

		Grid: 
			b:"# LOC:5 sc sw for in range line \n"
			a:"""
sc 1,1,0
sw 2
for i in range 10,200,10
	line 10,i,190,i
	line i,190,i,10
"""

		Skislope:
			b: "# LOC:4 bg sc for in range lerp line"
			a: """
bg 0
sc 1,0,0
for i in range 21
	line i*10,0,200,i*10
"""

		Sunshine:
			b: "# LOC:5 bg sc for in range lerp line\n"
			a: """
bg 0
sc 1,1,0
for i in range 10
	line i*20,0,200-i*20,200
	line 0,20+i*20,200,180-i*20
"""
		
		Lines:  
			b:"# LOC:5 bg for in range lerp line (Noel Watson)\n"
			a:"""
bg 0
for i in range 37
	line 10,10,190,10+i*5
	line 10,100,190,10+i*5
	line 10,190,190,10+i*5
"""

		chessRow: 
			b:"# LOC:5 % bg fc for in range lerp rect\n"
			a:"""
bg 0.5
for i in range 8
	fc i%2
	x = 20+20*i 
	rect x,20, 20,20
"""
		
		chessBoard: 
			b:"# LOC:7 bg fc for in range lerp rect\n"
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
			b: "# LOC:8 for in range lerp rect if then fc (David Larsson)\n"
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

		"Two Arcs":
			b:"""
# LOC:7 fc sc sw arc radians strokeCap
"""
			a:"""
fc()
sc 1,0,0
sw 20
arc 100,70, 100,100, radians(-90),radians(90)
sc 1,1,0
strokeCap SQUARE
arc 100,120, 100,100, radians(90),radians(-90)
"""

#####################################
	"L7: translate rotate push pop" : 
#####################################

		textC: 
			b:"# LOC:6 fc text textAlign textSize translate rd\n"
			a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 90
text 'Coffeescript',0,0
"""

		textD: 
			b:"# LOC:6 fc text textAlign textSize translate rd\n"
			a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 180
text 'Coffeescript',0,0
"""
		
		rotatedEllipse: 
			b:"# LOC:5 ellipse translate rd\n"
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
			b:"# LOC:12 fc rect translate rd push pop\n"
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
			b:"# LOC:13 fc rect translate rd push pop\n"
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
			b:"# LOC:10 fc sc circle rect rectMode for in range lerp translate rd\n"
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

		"Snow White and the 7 lerps": 
			b:"""
# LOC:17 bg fc sc rect rectMode for in range lerp translate rd push pop
"""
			a:"""
bg 1
rectMode CENTER
sc()
for i in range 10
  for j in range 10
    push()
		x = lerp 10,30,i
		y = lerp 10,30,j
    translate x,y
    rd lerp 0,10,i-j
    r = lerp 0.1,0.2,i
    g = lerp 0.1,0.2,j
    fc r,g,0
		w = lerp 5,6,i
		h = lerp 5,6,j
    rect 0,0, w,h
    pop()
""" 

		Roulette:
			b:"""
# LOC:20 bg sw fc sc for in range if then else == % / [] "" text textAlign arc strokeCap translate rotate rd TWO_PI push pop 

numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]
"""
			a:"""
numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]
bg 0.5
translate 100,100
rd -90
d = PI/numbers.length
sw 20
strokeCap SQUARE
textAlign CENTER,CENTER
for i in range numbers.length
	push()
	fc()
	if i==0 then sc 0,1,0 else sc i%2,0,0
	arc 0,0,180,180,-d,d
	translate 90,0
	rd 90
	sc()
	fc 1
	text numbers[i],0,0
	pop()
	rotate TWO_PI / numbers.length
"""

#####################################
	"L8: function, class" : 
#####################################

		manyDices: 
			b : """
# LOC:20 -> fc for in if then point [] % -> ==

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

fc 0
for i in range 10
	for j in range 10
		dice 20*i,20*j,1+(i+j)%6
"""
		

		girlang :
			b:"""
# LOC: 16 sc bg sw for in range line class constructor new @

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

		braid:
			b : """
# LOC: 19 sc bg sw for in range line class constructor new @

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

		OlympicRings:
			b: """
			# LOC:24 sc bg fc sw arc strokeCap class constructor new @

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

#####################################
	"L9: interactivity, basic" : 
#####################################

		counter :
			b:"""		
# LOC:12 text textAlign textSize + - class extends constructor new @ super ->

class Counter extends LocalStorage
	reset : -> super
	draw : -> super
	up : -> 
	down : -> 

counter = new Counter "b"     
"""
			a:"""
class Counter extends LocalStorage
	reset : -> 
		super
		@counter = 0
	up : -> @counter += 1
	down : -> @counter -= 1
	draw : ->
		bg 0.5
		textAlign CENTER,CENTER
		textSize 100
		fc 1,1,0
		text @counter,100,100

counter = new Counter "a"   		
"""
			c:
				counter : "reset()|up()|down()"

		Moire: 
			b:"""
# LOC:10 bg for line map class extends constructor new @ super ->

class Moire extends LocalStorage
	reset : -> super
	draw : -> super
	more : -> 
	less : -> 

moire = new Moire "b"
			"""
			a: """
class Moire extends LocalStorage
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

		square : 
			b: """
# LOC:21 bg sw fc rect rectMode translate rd + class extends constructor new @ super ->

class Square extends LocalStorage
	reset : -> super
	draw : -> super
	horisontellt : (d) -> 
	vertikalt : (d) ->
	storlek : (d) -> 
	tjocklek : (d) -> 
	rotera : (d) ->

square = new Square "b"
"""
			a: """
class Square extends LocalStorage
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

		boardGame :
			b:"""
# LOC:10 bg fc sc circle for in range ->

class Board extends LocalStorage
	reset : -> super
	draw : ->	super
	_r : (d) ->
	_d : (d) ->
	_n : (d) ->

board = new Board "b" 
"""
			a:"""

class Board extends LocalStorage
	reset : ->
		super
		@x = 100
		@y = 100
		@d = 18
		@r = 7
		@n = 5
	draw : ->	
		bg 1
		fc 0
		sc()
		@one @d,@r,@x-@n*@d, @y-@d,2*@n+1,3
		@one @d,@r,@x-@d, @y-@n*@d,3,2*@n+1
	one : (d,r,x0,y0,m,n) ->
		for i in range m
			for j in range n
				circle x0+d*i,y0+d*j,r
	_r : (d) -> @r+=d
	_d : (d) -> @d+=d
	_n : (d) -> @n+=d
board = new Board "a" 
"""
			c:
				board : "reset()|_r -1|_r 1|_d -1|_d 1|_n -1|_n 1"

		colorCube:
			b: """
# LOC:20 -> bg fc for in range rect class extends constructor new @ super ->

class ColorCube extends LocalStorage
	reset : -> super
	draw : -> super
	moreDetails : ->
	lessDetails : ->
	moreBlue : ->
	lessBlue : ->

cc = new ColorCube "b"
"""
			a: """
class ColorCube extends LocalStorage

	draw : ->
		bg 0
		d = 200.0/@n
		m = @n-1.0
		for r in range @n
			for g in range @n
				fc r/m,g/m,@b/m
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
# LOC:21 sc fc sw arc strokeCap class extends constructor new @ super ->

class Ring extends LocalStorage
	reset   : -> super
	draw    : -> super
	_start  : (d) ->
	_stopp  : (d) -> 
	_radius : (d) ->
	_width  : (d) ->

ring = new Ring "b"
"""
			a:"""
class Ring extends LocalStorage
	reset : ->
		super
		@start = 3
		@stopp = 6
		@w = 5
		@radius = 50
	_start : (d) -> @start+=d
	_stopp : (d) -> @stopp+=d
	_radius : (d) -> @radius+=d
	_width : (d) -> @w+=d
	draw : ->
		hour = PI/6
		strokeCap SQUARE
		fc()
		sw @w
		sc 1,1,0
		arc 100,100,2*@radius,2*@radius,(@start-3)*hour,(@stopp-3)*hour

ring = new Ring "a"
"""
			c: 
				ring : "reset()|_start -1|_start 1|_stopp -1|_stopp 1|_radius -1|_radius 1|_width -1|_width 1"

		sevenSegment :
			b : """
# LOC:26 bg sc fc rect rectMode if then & [] class extends constructor new @ super ->

class Digit extends LocalStorage
	reset : -> super
	draw : -> super
	up : -> 
	down : -> 

digit = new Digit "b"
			"""
			a:"""
class Digit extends LocalStorage
	reset : ->
		super
		@d=0
		@x=100
		@y=100
		@w=80
		@h=18
	draw : ->
		bg 0.5
		sc()
		fc 1,0,0
		rectMode CENTER
		pattern = [63,6,91,79,102,109,125,7,127,111]
		p = pattern[@d]
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
	up : -> @d++
	down : -> @d--

digit = new Digit "a"
"""
			c: 
				digit : "reset()|up()|down()"

		korg: 
			b:"""
# LOC:27 -> bg fc sc sw rect for if else class extends constructor new @ super ->

class Korg extends LocalStorage
	reset   : -> super
	draw    : -> super
	more    : ->
	less    : ->
	thinner : ->
	thicker : ->

korg = new Korg "b"
"""
			a: """
class Korg extends LocalStorage
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
# LOC:31 bg sc fc circle %% * / + - <= >= text textAlign for in range Math.floor if then return < class extends constructor new @ super ->

class Guess extends LocalStorage
	reset : -> super
	draw  : -> super
	left  : -> 
	right : ->
	up    : ->
	down  : ->
	guess : ->

guess = new Guess "b"
"""
			a:"""
class Guess extends LocalStorage
	reset : ->
		super
		@n = 100
		@i = @n/2
		@start = 0
		@stopp = @n-1
		@secret = 27

	left  :-> @i = (@i-1) %% @n
	right :-> @i = (@i+1) %% @n
	up    :-> @i = (@i-10) %% @n
	down  :-> @i = (@i+10) %% @n
	guess :-> 
		if @i <= @secret then @start = @i+1 
		if @i >= @secret then @stopp = @i-1 

	draw : ->
		bg 0.1
		textAlign CENTER,CENTER
		for i in range @n
			if @start <= i <= @stopp then fc 1 else fc 0.5
			sc()
			x = i % 10
			y = Math.floor i / 10
			text i, 10 + 20 * x, 10 + 20 * y
		fc 1,1,0
		sc()
		x = @i % 10
		y = Math.floor @i / 10
		circle 10 + 20 * x, 10 + 20 * y,10
		fc 0
		text @i, 10 + 20 * x, 10 + 20 * y

guess = new Guess "a"
			"""
			c:
				guess : "reset()|left()|right()|up()|down()|guess()"

		BouncingBalls :
			b : """
# LOC: 43 + ++ - -- %% == push if then for in splice length circle fc sw sc _.create class constructor super extends new @

class Ball 
	constructor : ->
	update : (grav) ->
	render : (sel) ->

class BouncingBalls extends LocalStorage

	constructor : (@name) ->
		super @name
		if @balls then @balls = (_.create Ball.prototype, ball for ball in @balls)

	reset : -> super
	draw : -> super
	update : -> 
	add : -> 
	delete :->
	selNext : -> 
	selPrev : -> 
	grow : ->    
	shrink : ->  
	nextCol : -> 
	prevCol : -> 
	gravity : ->

bouncingBalls = new BouncingBalls "b"
"""

			a:"""
class Ball 
	constructor : ->
		@x = 100
		@y = 100
		@r = 10
		@c = 1
		@dx = 3
		@dy = 4
	update : (grav) ->
		@x += @dx
		@y += @dy
		if not (@r < @x < 200-@r) then @dx = - @dx
		if not (@r < @y < 200-@r) then @dy = - @dy
		if grav and @y < 200-@r then @dy += 1 
	render : (sel) ->
		fcc @c
		sw 2
		if sel then scc 7 else sc()
		circle @x,@y,@r

class BouncingBalls extends LocalStorage

	constructor : (@name) ->
		super @name
		if @balls then @balls = (_.create Ball.prototype, ball for ball in @balls)

	reset : ->
		super
		@balls = []
		@sel = -1
		@grav = false
	draw : ->
		for ball,i in @balls
			ball.render i==@sel, @grav
	update : -> 
		for ball in @balls
			ball.update(@grav)

	add : -> 
		@balls.push new Ball
		@sel = @balls.length - 1

	delete :->
		@balls.splice @sel, 1
		if @sel >= @balls.length then @sel = @balls.length - 1  
	selNext : -> @sel = (@sel + 1) %% @balls.length
	selPrev : -> @sel = (@sel - 1) %% @balls.length
	grow : ->    @balls[@sel].r++
	shrink : ->  @balls[@sel].r--
	nextCol : -> @balls[@sel].c = (@balls[@sel].c+1) %% 8
	prevCol : -> @balls[@sel].c = (@balls[@sel].c-1) %% 8
	gravity : -> @grav = not @grav 

bouncingBalls = new BouncingBalls "a"
"""
			c:
				bouncingBalls : "reset()|update()|add()|delete()|selNext()|selPrev()|grow()|shrink()|nextCol()|prevCol()|gravity()"


		
		Braider:
			b : """
# LOC: 61 sc bg sw for in range if then + line class constructor extends new @

class Braider extends LocalStorage
	braid2 : ->
	braid3 : ->
	braid4 : ->
	draw : -> super
	forward : ->
	back : ->

braider = new Braider "b"
"""

			a:"""
class Cartesius
	constructor : (@x,@y,@c) ->
	go : (dx,dy) ->
		scc @c 
		line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]
	down : (d) -> @go 0,d
	left : (d) -> @go -d,0

class Braider extends LocalStorage

	braid2 : ->
		@type = 2
		@n = 0
	braid3 : ->
		@type = 3
		@n = 0
	braid4 : ->
		@type = 4
		@n = 0
	draw : ->
		if @type==2
			sw 5
			a = new Cartesius 200,20, 1 # röd
			b = new Cartesius 190,10, 2 # grön
			for i in range @n
				if i%4 == 0 then b.down 20
				if i%4 == 1 then a.left 20
				if i%4 == 2 then a.down 20
				if i%4 == 3 then b.left 20
		if @type==3
			sw 5
			a = new Cartesius 200,30, 1
			b = new Cartesius 190,10, 2
			c = new Cartesius 180,20, 3
			for i in range @n
				if i%6 == 0 then b.down 30
				if i%6 == 1 then a.left 30
				if i%6 == 2 then c.down 30
				if i%6 == 3 then b.left 30
				if i%6 == 4 then a.down 30
				if i%6 == 5 then c.left 30
		if @type==4
			sw 10
			a = new Cartesius 150,40, 1 # röd
			b = new Cartesius 170,20, 2 # grön
			c = new Cartesius 160,30, 3 # gul
			d = new Cartesius 190,50, 4 # blå
			for i in range @n
				if i%12 == 0 then b.down 50
				if i%12 == 1 then c.left 30; c.down 30
				if i%12 == 2 then d.left 50
				if i%12 == 3 then a.down 50
				if i%12 == 4 then b.left 50
				if i%12 == 5 then c.down 50
				if i%12 == 6 then d.left 30; d.down 30
				if i%12 == 7 then a.left 50
				if i%12 == 8 then b.left 30; b.down 30
				if i%12 == 9 then d.down 50
				if i%12 == 10 then c.left 50
				if i%12 == 11 then a.left 30; a.down 30

	forward : -> @n++
	back : -> @n--

braider = new Braider "a"
"""
			c:
				braider : "braid2()|braid3()|braid4()|forward()|back()"

			e:
				braid : "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"

		Laboratorium :
			b:"""		
# Här kan du laborera med egna idéer!

class Laboratorium extends LocalStorage
	reset : ->
		super
		@x = 100
		@y = 100
		@command = ""
	left : -> @x -= 10
	right : -> @x += 10
	up : -> @y -= 10
	down : -> @y += 10
	a : -> @command = "a"
	b : -> @command = "b"
	c : -> @command = "c"
	d : -> @command = "d"
	e : -> @command = Math.floor random 1,7
	f : -> @command = Math.floor millis()
	draw : -> 
		textAlign CENTER,CENTER
		textSize 50
		fc 1,1,0
		text @command,@x,@y

laboratorium = new Laboratorium "b"     
"""
			a:"""
class Laboratorium extends LocalStorage
	reset : -> super
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
	draw : -> 

laboratorium = new Laboratorium "a"   		
"""
			c:
				laboratorium : "reset()|left()|right()|up()|down()|a()|b()|c()|d()|e()|f()"

#####################################
	"LA: interactivity, advanced" :
#####################################


		klocka: 
			b: """
# LOC:36 -> fc sc point rect rectMode circle for in range if else translate rd push pop class extends constructor new @ super ->

class Klocka extends LocalStorage
	reset : -> super
	draw : -> super
	incr_hour   : -> 
	decr_hour   : -> 
	incr_minute : -> 
	decr_minute : -> 
	incr_second : -> 
	decr_second : -> 

klocka = new Klocka "b"
			"""
			a: """
class Klocka extends LocalStorage
	reset : -> 
		super
		@h=10
		@m=9
		@s=30
	draw : ->
		rectMode CENTER
		translate 100,100
		@urtavla()
		@visare (@h+@m/60.0)*30, 7,60,1,0,0
		@visare (@m+@s/60.0)*6,5,80,0,1,0
		@visare @s*6,2,80,0,0,1
	incr_hour   : -> @h++
	incr_minute : -> @m++
	incr_second : -> @s++
	decr_hour   : -> @h--
	decr_minute : -> @m--
	decr_second : -> @s--

	visare : (v,w,l,r,g,b) ->
		push()
		rd v-90
		translate l/2,0
		fc r,g,b
		rect 0,0,l,w
		pop()
	urtavla : ->
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
klocka = new Klocka "a"
"""
			c: 
				klocka : "reset()|incr_hour()|decr_hour()|incr_minute()|decr_minute()|incr_second()|decr_second()"


		recursiveCircle: 
			b: """
# LOC:10 -> sc circle if return < class extends constructor new @ super ->

class RecursiveCircle extends LocalStorage
	reset : -> super
	draw : -> super
	circles : (x,y,r,level) ->
	more : -> 
	less : -> 

rc = new RecursiveCircle "b"
"""
			a: """

class RecursiveCircle extends LocalStorage
	reset : -> 
		super
		@n = 0
	draw : -> @circles 100,100,100,@n		
	circles : (x,y,r,level) ->
		circle x,y,r
		if level <= 0 then return
		@circles x-r/2, y,r/2, level-1
		@circles x+r/2, y,r/2, level-1
	more : -> @n = constrain @n+1,0,10
	less : -> @n = constrain @n-1,0,10

rc = new RecursiveCircle "a"
"""
			c:
				rc : "reset()|more()|less()"

		Nim:
			b:"""		
# LOC:34 -> bg fc sc circle * + - ^ if then else _.isEqual return < constrain text textAlign textSize class extends constructor new @ super ->

class Nim extends LocalStorage
	reset : -> super
	draw : -> super
	a : ->
	b : ->
	c : ->
	ok : -> 
	hint : ->

nim = new Nim "b"  
"""
			a:"""
class Nim extends LocalStorage
	reset : -> 
		super
		@board = [7,8,9]
		@active = -1
		@player = 0
	move : (index) ->
		if @active in [index,-1]
			@active = index
			@board[@active] = constrain @board[@active]-1, 0, 99

	a : -> @move 0
	b : -> @move 1
	c : -> @move 2
	ok : -> 
		if @active == -1 then return
		@player = 1 - @player
		@active = -1 
	draw : ->
		textAlign CENTER,CENTER
		textSize 50
		bg 0
		fc 1
		sc()
		text @board[0],50,100
		text @board[1],100,100
		text @board[2],150,100
		fc 1,@player,0
		circle 20 + @player * 160,20,10
	hint : ->
		if @active != -1 then return
		[a,b,c] = @board
		board = if (b^c) < a then [b^c,b,c] else if (a^c) < b then [a,a^c,c] else if (a^b) < c then [a,b,a^b] else [a,b,c]
		if not _.isEqual(board,@board)
			@board = board
			@player = 1 - @player

nim = new Nim "a"   
		
"""
			c:
				nim : "reset()|a()|b()|c()|ok()|hint()"
			e:
				Nim : "https://en.wikipedia.org/wiki/Nim"
				xor : "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"
				Nimrod : "https://en.wikipedia.org/wiki/Nimrod_(computing)"



		Connect4 :
			b:"""
# LOC:29 % bg fc sc sw circle text textAlign textSize for in range push class extends constructor new @ super -> 

class Connect4 extends LocalStorage
	reset : -> super
	draw : -> super
	move : (nr) ->

connect4 = new Connect4 "b"
			"""
			a:"""
class Connect4 extends LocalStorage
	reset : ->
		super
		@size = 27
		@list = ([] for i in range 7)
		@moves = []
	draw : ->
		bg 0
		textAlign CENTER,CENTER
		textSize @size/2
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
		sc()
		fc 1,(@moves.length+1)%2,0
		circle 100,15,10
	move : (nr) ->
		@moves.push nr
		@list[nr].push @moves.length 

connect4 = new Connect4 "a"
"""
			c:
				connect4 : "reset()|move 0|move 1|move 2|move 3|move 4|move 5|move 6"


		chessGame :
			b:"""
# LOC:64 bg fc sc sw point rect rectMode if then else text textSize textAlign class constructor new @
#        for in range push split length indexOf

class Chess extends LocalStorage
	reset : -> super
	draw : -> super
	move : (d) ->

chess = new Chess "b"
"""
			a:"""
class Chess extends LocalStorage

	reset : ->
		super
		@moves = "e2e4 e7e5 g1f3 b8c6 f1c4".split " "
		@size = 22
		@x = 100
		@y = 100
		@n = 0

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
			[col,row] = @getIndex sq
			res[8*col+row] = chr	
		res

	getIndex : (sq) ->
		col = "abcdefgh".indexOf sq[0]
		row = "12345678".indexOf sq[1]
		[col,row]
		
	render : (pieces,c) ->
		fc c
		sc c
		for row in range 8
			for col in range 8
				piece = pieces[8*col+row]
				x = @x - 3.5 * @size + col * @size
				y = @y - 3.5 * @size + (7-row) * @size
				if piece == "o"
					sw @size/2
					point x,y
				else if piece in "KQRBN"
					sw 1-c
					text piece,x, 1+y		
				
	draw : ->
		bg 0.5
		textSize 0.9 * @size
		textAlign CENTER,CENTER
		rectMode CENTER
		sc()
		for i in range 8
			for j in range 8
				if (i+j)%2 == 1 then fc 0.4 else fc 0.6
				rect @x-3.5*@size+@size*i, @y-3.5*@size+@size*j, @size, @size

		white = @putPieces "Ra1 Nb1 Bc1 Qd1 Ke1 Bf1 Ng1 Rh1 a2 b2 c2 d2 e2 f2 g2 h2"
		black = @putPieces "Ra8 Nb8 Bc8 Qd8 Ke8 Bf8 Ng8 Rh8 a7 b7 c7 d7 e7 f7 g7 h7"

		for i in range @n
			@movePiece @moves[i], if i%2==0 then white else black		

		@render white,1
		@render black,0

	movePiece : (m,player) ->
		[col1,row1] = @getIndex m[0..1]
		[col2,row2] = @getIndex m[2..3]
		player[col2*8+row2] = player[col1*8+row1]
		player[col1*8+row1] = ""

	move : (d) -> 
		@n += d
		@n = constrain @n,0,@moves.length

chess = new Chess "a"

"""
			c:
				chess : "reset()|move -1|move 1"

		SpaceShip :
			b:"""
# LOC:35 sc sw point triangle translate rd cos sin radians push pop class extends constructor new @ super ->

class Shot
	constructor : (@x,@y,@dir) ->
	render : ->	
	move : ->

class Ship extends LocalStorage
	constructor : (@name) ->
		super @name
		if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)
	reset : -> super
	draw : -> super
	lt : -> 
	rt : -> 
	fd : -> 
	shoot : ->		

ship = new Ship "b"	
"""
			a: """
class Shot
	constructor : (@x,@y,@dir) ->
	render : ->	point @x,@y 
	move : ->
		@x += 5 * cos radians @dir
		@y += 5 * sin radians @dir

class Ship extends LocalStorage 

	constructor : (@name) ->
		super @name
		if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)

	reset : ->
		super
		@x = 100
		@y = 100
		@s = 10
		@dir = 0
		@shots = []

	lt : -> @dir -= 5
	rt : -> @dir += 5
	fd : -> 
		@x += 5 * cos radians @dir
		@y += 5 * sin radians @dir

	shoot : ->
		@shots.push new Shot @x,@y,@dir

	draw : ->
		push()
		translate @x,@y
		rd @dir
		sc 1,1,0
		sw 2
		triangle 2*@s,0, -@s,@s, -@s,-@s
		sw 5
		point 0,0
		pop()
		for shot in @shots
			shot.move()
			shot.render()

ship = new Ship "a"	
"""
			c:
				ship: "reset()|lt()|rt()|fd()|shoot()"


		RushHour :
			b:"""
# LOC:51 bg sc fc rect text textAlign push class extends constructor new @ super -> 
#	       if then else for in range toLowerCase indexOf 

class Car
	constructor : (@i,@j,@w,@h,@r,@g,@b) ->
	render : (i) -> 
	move : (d) ->

class RushHour extends LocalStorage
	constructor : (@name) ->
		super @name
		if @a then @a = _.create Car.prototype, @a
		if @b then @b = _.create Car.prototype, @b
		if @c then @c = _.create Car.prototype, @c
		if @d then @d = _.create Car.prototype, @d
	reset : -> super
	draw : -> super
	add : (pos,r,g,b) -> 
	A_Left  : ->
	A_Right : ->
	B_Up  : -> 
	B_Down : -> 
	C_Left  : -> 
	C_Right : ->
	D_Up  : -> 
	D_Down : -> 

rushHour = new RushHour "b"

"""
			a:"""
class Car
	constructor : (@i,@j,@w,@h,@r,@g,@b) ->
	render : (i) -> 
		fc @r,@g,@b
		rect 40+20*@i+2, 40+20*@j+2, 20*@w-4, 20*@h-4
		fc 0
		text "ABCDEFGH"[i], 50+20*@i, 50+20*@j
	move : (d) ->
		if @w == 1 then @j += d
		if @h == 1 then @i += d

class RushHour extends LocalStorage

	constructor : (@name) ->
		super @name
		if @a then @a = _.create Car.prototype, @a
		if @b then @b = _.create Car.prototype, @b
		if @c then @c = _.create Car.prototype, @c
		if @d then @d = _.create Car.prototype, @d

	reset : ->
		super
		@a = @add "d3e3",1,0,0
		@b = @add "d6d5",1,1,0
		@c = @add "e5f5",0,1,0
		@d = @add "f3f1",0,1,1

	draw : ->
		textAlign CENTER,CENTER
		bg 0
		sc()
		fc 0.5,0.5,0.5
		rect 40,40,120,120
		rect 160,80,40,20
		fc 1
		sc()
		for i in range 6
			text "123456"[i],30,50+20*i
			text "abcdef"[i],50+20*i,170
		@a.render 0
		@b.render 1
		@c.render 2
		@d.render 3

	col : (s) -> "abcdef".indexOf s
	row : (s) -> "123456".indexOf s

	add : (pos,r,g,b) -> 
		i = @col pos[0] 
		j = @row pos[3]
		w = @col(pos[2]) - i + 1
		#h = j - @row(pos[1]) + 1 
		h = @row(pos[1]) - j + 1 
		new Car i,j,w,h,r,g,b

	A_Left  : -> @a.move -1
	A_Right : -> @a.move  1	
	B_Up    : -> @b.move -1	
	B_Down  : -> @b.move  1
	C_Left  : -> @c.move -1
	C_Right : -> @c.move  1
	D_Up    : -> @d.move -1
	D_Down  : -> @d.move  1
			
rushHour = new RushHour "a"
"""
			c:
				rushHour : "reset()|A_Left()|A_Right()|B_Up()|B_Down()|C_Left()|C_Right()|D_Up()|D_Down()"
			e:
				RushHour : "https://en.wikipedia.org/wiki/Rush_Hour_(board_game)"

		PickingBerries :
			b:"""
# LOC:46 bg sc fc sw [] * + line text textSize textAlign constrain dist splice break for in class extends constructor new @ super ->

class PickingBerries extends LocalStorage
	reset      : -> super
	draw       : -> super
	left       : -> 
	right      : -> 
	up         : -> 
	down       : -> 
	snailSpeed : ->
	slowSpeed  : ->
	highSpeed  : ->
	warpSpeed  : ->
	pick       : ->

berries = new PickingBerries "b"
"""
			a:"""
class PickingBerries extends LocalStorage

	reset : ->
		super
		@x = 100
		@y = 100
		@speed = 1
		@clix = 0
		@xs = [100,189,124,196,13,187,12,153,32,131]
		@ys = [107,175,138,188,37,78,168,31,20,188]

	draw : ->
		bg 0
		sc 1
		sw 1
		d = 5 + @speed
		line @x-d,@y,@x,@y
		line @x,@y-d,@x,@y
		line @x,@y,@x+d,@y
		line @x,@y,@x,@y+d
		
		fc 1,1,0
		sc()
		textSize 20
		textAlign CENTER,CENTER
		text @clix,100,180

		sc 1,0,0
		sw 2
		for [x,y] in _.zip @xs,@ys
			line x-3,y-3,x+3,y+3
			line x+3,y-3,x-3,y+3

	move : (dx,dy) -> 		
		@x += dx * @speed
		@y += dy * @speed
		@clix++

	left    : -> @move -1,0
	right   : -> @move 1,0
	up      : -> @move 0,-1
	down    : -> @move 0,1
	snailSpeed : -> @speed = 1
	slowSpeed : -> @speed = 5
	highSpeed : -> @speed = 10
	warpSpeed : -> @speed = 50

	step : (d) -> 
		@clix++
		constrain @zoom+d,0,3 
	pick : ->
		for [x,y],i in _.zip @xs,@ys
			if dist(x,y,@x,@y) <= 2
				@xs.splice i,1
				@ys.splice i,1
				break
		@clix++

berries = new PickingBerries "a"
			"""
			c:
				berries : "reset()|left()|right()|up()|down()|snailSpeed()|slowSpeed()|highSpeed()|warpSpeed()|pick()"

#####################################
	"LB: miscellaneous" :
#####################################

		alphanumeric:
			b:"""
# LOC:15 bg for in range indexOf & ** circle {} [] '' if then else class extends constructor new @ super ->

class AlphaNumeric extends LocalStorage
	reset : -> super
	draw : -> super
	character : (ch) -> 

alpha = new AlphaNumeric "b"
"""
			a:"""
class AlphaNumeric extends LocalStorage
	reset : -> 
		super
		@pattern = {1:'4c4444e', 2:'eh1248v', A:'ehhvhhh', B:'uhhuhhu'}
		@ch = 'A'
	draw : ->
		bg 0
		sc()
		for ch,j in @pattern[@ch]
			index = '0123456789abcdefghijklmnopqrstuv'.indexOf ch
			for i in range 5
				if index & 2**i then fc 0,1,0 else fc 0,0.3,0
				x = 140-20*i
				y = 40+20*j
				circle x,y,8
	character : (ch) -> @ch = ch

alpha = new AlphaNumeric "a"
"""
			c:
				alpha: "reset()|character 'A'|character 'B'|character '1'|character '2'"

		GoldenStar:
			b: """
# LOC:23 bg fc for in range triangle translate rotate cos sin class extends constructor new @ super ->

class GoldenStar extends LocalStorage
	reset : -> super
	draw : -> super
	_n : (d) -> 
	_outer : (d) ->
	_inner : (d) ->

star = new GoldenStar "b"
"""
			a: """
class GoldenStar extends LocalStorage
	reset : ->
		super
		@x = 100
		@y = 100
		@n = 4
		@outer = 100
		@inner = 25
	_n : (d) -> @n = constrain @n+d,3,12
	_outer : (d) -> @outer = constrain @outer+d, 0, 100
	_inner : (d) -> @inner = constrain @inner+d, 0, 100
	draw : ->
		bg 0
		translate @x,@y
		v = TWO_PI/@n
		rotate -PI/2
		x1 = @inner * cos v/2
		y1 = @inner * sin v/2
		for i in range @n
			fc 1,1,0
			triangle 0,0, @outer,0, x1,y1
			fc 1,0.7,0
			triangle 0,0, @outer,0, x1,-y1
			rotate v

star = new GoldenStar "a"
"""
			c:
				star : "reset()|_n -1|_n +1|_outer -1|_outer +1|_inner -1|_inner +1"
		
		Polygon:
			b:"""
# LOC:23 bg sc line for in range cos sin radians class extends constructor new @ super ->

class Turtle
	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->
	fd : (d) ->
	rt : (a) ->

class Polygon extends LocalStorage
	reset : -> super
	draw : -> super
	antalSidor : (d) ->
	antalSteg : (d) -> 

polygon = new Polygon "b"
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

class Polygon extends LocalStorage
	reset : ->
		super
		@n = 6
		@steg = 60

	draw : ->
		t = new Turtle()
		bg 0
		for i in range @n
			t.fd @steg
			t.rt 360/@n

	antalSidor : (d) -> @n += d
	antalSteg : (d) -> @steg += d

polygon = new Polygon "a"
"""
			c:
				polygon : "reset()|antalSidor -1|antalSidor +1|antalSteg -1|antalSteg +1|"

