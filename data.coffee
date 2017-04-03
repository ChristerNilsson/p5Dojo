# b : comment line. LOC and keyword clues
# a : original code
# c : object method calls
# e : links

data = 

#####################################
	Nyheter :
#####################################

		Nyheter :
			b:"""
# NYHETER 2017 APR 01
#   LB: Nand2Tetris ALU
#   LB: RandomDice ColorPair RubikSquare
# NYHETER 2017 MAR 26
#   L9: EngineeringNotation
#   LA: Stopwatch
#   LB: Kalkylator Nian Korsord
# NYHETER 2017 MAR 19
#   LA: PickingBerries
# NYHETER 2017 MAR 12
#   L7: Roulette
# NYHETER 2017 MAR 5
#   L6: Two Arcs
#   L9: BoardGame, SevenSegment, OlympicRing
#   LA: Connect4, RushHour, Girlang, Braid, OlympicRings, ChessGame
#   LB: Alphanumeric, GoldenStar, SpaceShip

# Klicka nu på L1!

# Eller besök Utställningen.
# Dessa program är skapade av deltagare på p5Dojo.
# Vill du också visa upp ditt alster? Ge i så fall koden till din mentor.
"""
			a:"""
"""

		clown:
			b:"""
# LOC:30 bg circle fc sc sw # line lerp (David Larsson)

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
"""
			a: """
bg 0.5, 0, 0
sc()
fc 1
for i in range 100
	x = 100 + cos(i) * i
	y = 100 + sin(i) * i
	circle x, y, 5
"""

		hypnoticB : 
			b: """
# LOC:7 -> bg circle cos fc map sc sin
"""
			a: """
bg 0.5, 0, 0
sc()
fc 1
for i in range 100
	x = 100 + cos(i) * i
	y = 100 + sin(i) * i
	speed = i/10.0
	r = map sin(5*speed), -1, 1, 2, 5
	circle x, y, r
"""

#####################################
	"L1: bg point sc sw": 
#####################################

		Background1: 
			b: """
# Första bilden ska du efterlikna.
# Andra bilden skapas av din kod.
# Tredje bilden visar skillnaden mellan de två andra. Ska bli svart när du är klar.

# Tryck på PgDn för att komma till sista raden.
# Skriv in följande kommando: bg 1
# Kontrollera att de två första bilderna nu är lika, och att den tredje är helt svart.

# Klicka på Background2 för att komma till nästa övning.
# Klicka på p5Dojo nere till vänster för mera information.
# Klicka på p5 för att se fler kommandon.

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

		X: 
			b: """
# LOC:5 sc sw # point

sw 10
sc 1,0,0
point 0,0

"""
			a: """
sw 10
sc 1,0,0
point 0,0
point 100,0
point 200,0
"""

		Y: 
			b: """
# LOC:5 sc sw # point

sw 10
sc 0,1,0
point 0,0

"""
			a: """
sw 10
sc 0,1,0
point 0,0
point 0,100
point 0,200
"""

		CornerPoints: 
			b: """
# LOC:9 sc sw # point

sw 10
sc 1,0,0
point 0,0

"""
			a: """
sw 10
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
# LOC:11 sc sw # point

"""
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

		CornerPoints3: 
			b: """
# LOC:17 sc sw # point

"""
			a: """
sw 10
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
# LOC:17 sc sw # point

"""
			a: """
sw 10
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

		Diagonal1: 
			b: """
# LOC:12 sc sw # point

"""
			a: """
bg 0,1,0
sw 20
sc 0,0,0
point 0,0

sc 0.25,0.25,0
point 50,50

sc 0.5,0.5,0
point 100,100

sc 0.75,0.75,0
point 150,150

sc 1,1,0
point 200,200
"""

		Diagonal2: 
			b: """
# LOC:11 sc sw # point

"""
			a: """
sw 20
sc 1,0,0
point 200,0
sc 0.75,0.25,0
point 150,50
sc 0.5,0.5,0
point 100,100
sc 0.25,0.75,0
point 50,150
sc 0,1,0
point 0,200
"""

#####################################
	"L2: circle fc text" : 
#####################################

		Dices : 
			b : """
# LOC:26 sc # point

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
# LOC:12 bg circle fc sc #

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

		WhiteCircle: 
			b:"""
# LOC:2 circle fc #

"""
			a:"""
fc 1
circle 60,80,30
"""

		WhiteEmptyCircle: 
			b:"""
# LOC:4 circle fc sc sw #

"""
			a:"""
sc 1
fc()
sw 2
circle 70,90,40
"""

		TwoDiscsA: 
			b:"""
# LOC:4 circle fc #

"""
			a:"""
fc 1,0,0 
circle 80,100,40
fc 0,1,0
circle 100,120,50
"""

		TwoDiscsB:
			b:"""
# LOC:4 circle fc #

"""
			a:"""
fc 1,0,0
circle 80,100,40
fc 0,1,0, 0.5
circle 120,100,50
"""

		TextA: 
			b:"""
# LOC:3 fc # textSize text

"""
			a:"""
fc 1,1,0
textSize 32
text 'Coffeescript',100,100
"""

		TextB: 
			b:"""
# LOC:4 fc # text textAlign textSize

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

		GreenEllipse: 
			b:"""
# LOC:2 fc # ellipse

"""
			a:"""
fc 0,1,0
ellipse 120,60, 60,40
"""

		GreenRect: 
			b:"""
# LOC:2 fc # rect

"""
			a:"""
fc 0,1,0
rect 60,80, 40,50
"""

		RedRect:
			b:"""
# LOC:2 fc # rect

"""
			a:"""
fc 1,0,0
rect 80,70, 40,100
"""

		Cross: 
			b:"""
# LOC:4 fc # rect

"""
			a:"""
fc 1,0,0
sc()
rect 85,70, 70,10
rect 115,40, 10,100
"""

		SquareHole: 
			b : """
# LOC:11 fc sc sw # rect

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

		HorizontalSquares: 
			b:"""
# LOC:3 range # rect for in lerp 

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

		VerticalSquares: 
			b:"# LOC:3 range # rect for in lerp\n"
			a:"""
for i in range 10
	y = 5+20*i
	rect 5,y, 10,10
"""

		DiagonalSquares: 
			b:"# LOC:4 range # rect for in lerp\n"
			a:"""
for i in range 10
	x = 5+20*i
	y = 5+20*i
	rect x,y, 10,10
"""

		DoubleForLoop: 
			b:"# LOC:5 range # rect for in lerp\n"
			a:"""
for i in range 10
	for j in range 10
		x = 5+20*i
		y = 5+20*j
		rect x,y, 10,10
"""

		GrowingSquares: 
			b:"# LOC:7 range # rect rectMode for in lerp\n"
			a:"""
rectMode CENTER
for i in range 10
	x = 10+20*i
	y = 10
	w = 2*i
	h = 2*i
	rect x,y, w,h
"""

		GrowingRedSquares: 
			b:"# LOC:8 fc range # for in lerp rect rectMode\n"
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

		GrowingCircles: 
			b:"# LOC:6 range fc circle # for in lerp\n"
			a:"""
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	r = i
	circle x,y,r
"""

		ShrinkingCircles: 
			b:"# LOC:4 range fc circle # for in lerp\n"
			a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	r = 10 * i
	circle 100,100, r
"""

		RedCone: 
			b:"""
# LOC:6 range fc circle # for in lerp
"""
			a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	x = 10*i
	y = 10*i
	r = 10*i
	circle x,y,r
"""

		PentaLerp: 
			b:"""
# LOC:11 bg sc fc range circle # for in lerp
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
			b: "# LOC:2 sc # line\n"
			a: """
sc 1,0,1
line 10,70, 190,70
"""

		VerticalLine: 
			b: "# LOC:3 sc sw # line\n"
			a: """
sc 1,1,0
sw 10
line 110,30, 110,170
"""

		Line: 
			b: "# LOC:2 sc # line\n"
			a: """
sc 1,1,0
line 20,0, 200,20
"""

		Grid: 
			b:"# LOC:5 sc sw range # for in line \n"
			a:"""
sc 1,1,0
sw 2
for i in range 10,200,10
	line 10,i,190,i
	line i,190,i,10
"""

		Skislope:
			b: "# LOC:4 bg sc range # for in lerp line"
			a: """
bg 0
sc 1,0,0
for i in range 21
	line i*10,0,200,i*10
"""

		Sunshine:
			b: "# LOC:5 bg sc range # for in lerp line\n"
			a: """
bg 0
sc 1,1,0
for i in range 10
	line i*20,0,200-i*20,200
	line 0,20+i*20,200,180-i*20
"""
		
		Lines:  
			b:"# LOC:5 bg range # for in lerp line (Noel Watson)\n"
			a:"""
bg 0
for i in range 37
	line 10,10,190,10+i*5
	line 10,100,190,10+i*5
	line 10,190,190,10+i*5
"""

		ChessRow: 
			b:"# LOC:5 bg fc range # % for in lerp rect\n"
			a:"""
bg 0.5
for i in range 8
	fc i%2
	x = 20+20*i 
	rect x,20, 20,20
"""
		
		ChessBoard: 
			b:"# LOC:7 bg fc range # for in lerp rect\n"
			a:"""
bg 0.5
for i in range 8
	for j in range 8
		fc (i+j)%2
		x = 20+20*i
		y = 20+20*j
		rect x,y, 20,20
"""
		
		ChessCross : 
			b: "# LOC:8 fc range # for in lerp rect if then (David Larsson)\n"
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
			b:"# LOC:2 fc # triangle\n" 
			a:"""
fc 1
triangle 20,40, 160,100, 100,140
"""

		Quad: 
			b:"# LOC:2 fc # quad\n"
			a:"""
fc 1,1,0
quad 150,100, 180,20, 40,20, 100,140
"""

		PacMan: 
			b:"# LOC:2 fc # arc radians PIE\n"
			a:"""
fc 1,1,0
arc 100,100, 80,80, radians(-135),radians(135), PIE
"""

		"Two Arcs":
			b:"""
# LOC:7 fc sc sw # arc radians strokeCap
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

		TextC: 
			b:"# LOC:6 fc rd # text textAlign textSize translate\n"
			a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 90
text 'Coffeescript',0,0
"""

		TextD: 
			b:"# LOC:6 fc rd # text textAlign textSize translate\n"
			a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 180
text 'Coffeescript',0,0
"""
		
		RotatedEllipse: 
			b:"# LOC:5 rd # ellipse translate\n"
			a:"""
fc 1,0,0
sc()
translate 100,100
rd 45
ellipse 0,0, 80,40
"""

		RotatedRectA: 
			b:"# LOC:4 fc # rect\n"
			a:"""
fc 1,0,0
rect 60,100, 40,40
fc 0,1,0
rect 140,100, 40,40
"""

		RotatedRectB: 
			b:"# LOC:12 fc rd # rect translate push pop\n"
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

		RotatedRectC: 
			b:"# LOC:13 fc rd # rect translate push pop\n"
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

		Cards: 
			b:"# LOC:10 fc sc circle range rd # rect rectMode for in lerp translate\n"
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
# LOC:17 bg fc sc range rd # rect rectMode for in lerp translate push pop
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
# LOC:20 bg sw fc sc range # for in if then else == % / [] "" TWO_PI
#        text textAlign arc strokeCap translate rotate rd push pop

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

		ManyDices: 
			b : """
# LOC:20 -> fc # for in if then point [] % -> ==

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
		

		Girlang :
			b:"""
# LOC: 16 sc bg sw range # for in line class constructor new @

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

		Braid:
			b : """
# LOC: 19 sc bg sw range # for in line class constructor new @

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

#####################################
	"L9: interactivity, basic" : 
#####################################

		Counter :
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

		Moire: 
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

		Square : 
			b: """
# LOC:21 bg sw fc rd # rect rectMode translate + class extends constructor new @ super ->

class Square extends Application
	reset        : -> super
	draw         : -> super
	horisontellt : (d) -> 
	vertikalt    : (d) ->
	storlek      : (d) -> 
	tjocklek     : (d) -> 
	rotera       : (d) ->

square = new Square "b"
"""
			a: """
class Square extends Application
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

		BoardGame :
			b:"""
# LOC:21 bg fc sc circle range # for in ->

class Board extends Application
	reset : -> super
	draw  : -> super
	r     : (d) ->
	d     : (d) ->
	n     : (d) ->

board = new Board "b" 
"""
			a:"""

class Board extends Application
	reset : ->
		super
		@_x = 100
		@_y = 100
		@_d = 18
		@_r = 7
		@_n = 5
	draw : ->	
		bg 1
		fc 0
		sc()
		@one @_d,@_r,@_x-@_n*@_d, @_y-@_d,2*@_n+1,3
		@one @_d,@_r,@_x-@_d, @_y-@_n*@_d,3,2*@_n+1
	one : (d,r,x0,y0,m,n) ->
		for i in range m
			for j in range n
				circle x0+d*i,y0+d*j,r
	r : (d) -> @_r += d
	d : (d) -> @_d += d
	n : (d) -> @_n += d

board = new Board "a" 
"""
			c:
				board : "reset()|r -1|r +1|d -1|d +1|n -1|n +1"

		ColorCube:
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

		"OlympicRing Prep":
			b:"""
# LOC:21 sc fc sw # arc strokeCap class extends constructor new @ super ->

class Ring extends Application
	reset  : -> super
	draw   : -> super
	start  : (d) ->
	stopp  : (d) -> 
	radius : (d) ->
	width  : (d) ->

ring = new Ring "b"
"""
			a:"""
class Ring extends Application
	reset : ->
		super
		@_start = 3
		@_stopp = 6
		@_w = 5
		@_radius = 50
	start : (d) -> @_start+=d
	stopp : (d) -> @_stopp+=d
	radius : (d) -> @_radius+=d
	width : (d) -> @_w+=d
	draw : ->
		hour = PI/6
		strokeCap SQUARE
		fc()
		sw @_w
		sc 1,1,0
		arc 100,100,2*@_radius,2*@_radius,(@_start-3)*hour,(@_stopp-3)*hour

ring = new Ring "a"
"""
			c: 
				ring : "reset()|start -1|start +1|stopp -1|stopp +1|radius -1|radius +1|width -1|width +1"

		SevenSegment :
			b : """
# LOC:26 bg sc fc # rect rectMode if then & [] class extends constructor new @ super ->

class Digit extends Application
	reset : -> super
	draw  : -> super
	up    : -> 
	down  : -> 

digit = new Digit "b"
			"""
			a:"""
class Digit extends Application
	reset : ->
		super
		@d=0
		@x=100
		@y=100
		@w=80
		@h=18
		@pattern = [63,6,91,79,102,109,125,7,127,111]
	draw : ->
		bg 0.5
		sc()
		fc 1,0,0
		rectMode CENTER
		p = @pattern[@d]
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
	up   : -> @d = constrain @d + 1, 0, 9
	down : -> @d = constrain @d - 1, 0, 9

digit = new Digit "a"
"""
			c: 
				digit : "reset()|up()|down()"
			e: 
				"7 segment" : "https://www.google.se/search?q=7+segment&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjg_5n55OrSAhWpZpoKHQP8DxoQ_AUIBigB&biw=1310&bih=945"

		Korg: 
			b:"""
# LOC:27 -> bg fc sc sw # rect for if else class extends constructor new @ super ->

class Korg extends Application
	reset   : -> super
	draw    : -> super
	more    : ->
	less    : ->
	thinner : ->
	thicker : ->

korg = new Korg "b"
"""
			a: """
class Korg extends Application
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



		Connect4 :
			b:"""
# LOC:31 % bg fc sc sw circle range # text textAlign textSize for in
#        push pop class extends constructor new @ super -> 

class Connect4 extends Application
	reset : -> super
	draw  : -> super
	move  : (nr) ->
	undo  : ->

connect4 = new Connect4 "b"
			"""
			a:"""
class Connect4 extends Application
	reset : ->
		super
		@list = ([] for i in range 7)
		@moves = []
	draw : ->
		size = 27
		bg 0
		textAlign CENTER,CENTER
		textSize size/2
		fc()
		sc 0.1,0.3,1
		sw 0.2 * size
		for i in range 7
			for j in range 6
				circle 100-size*3+size*i, 180-size*j, size/2
		for column,i in @list
			for nr,j in column
				fc 1,nr%2,0
				sw 1
				circle 100-size*3+size*i, 180-size*j, size*0.4
				fc 0
				sc()
				text nr, 100-size*3+size*i, 180-size*j
		sc()
		fc 1,(@moves.length+1)%2,0
		circle 100,15,10
	move : (nr) ->
		@moves.push nr
		@list[nr].push @moves.length 
	undo : -> if @moves.length > 0 then @list[@moves.pop()].pop()

connect4 = new Connect4 "a"
"""
			c:
				connect4 : "reset()|move 0|move 1|move 2|move 3|move 4|move 5|move 6|undo()"

		EngineeringNotation :
			b:"""		
# LOC:28 fc sc bg # Math.floor Math.log10 constrain + - * / < ** text split
#        textAlign textSize class extends constructor new @ super ->

class Engineering extends Application
	reset : -> super
	draw  : -> super 
	more  : -> 
	less  : -> 
engineering = new Engineering "b"   		
"""
			a:"""
class Engineering extends Application
	reset : -> 
		super
		@numbers = "-273.15 1.6021766208e-19 3.1415926535 9.80665 101325 299792458 1073741824 6.022140857e23"
		@digits = 3
		@prefixes = "yzafpnµm kMGTPEZY"
	format : (x) -> 
		if x<0 then return "-" + @format(-x)
		exponent = 3 * Math.floor Math.log10(x)/3
		x = x / 10 ** exponent
		if x < 10 then factor = 10 ** (@digits-1) 
		else if x < 100 then factor = 10 ** (@digits-2)
		else factor = 10 ** (@digits-3)
		Math.round(x * factor) / factor + @prefixes[8+exponent/3]
	draw  : -> 
		bg 0
		textAlign RIGHT,TOP
		textSize 20
		textFont "monospace"
		fc 1,0,0
		sc()
		textAlign RIGHT,TOP
		for nr,i in @numbers.split " "
			x = parseFloat nr
			if i<8 then text @format(1/x), 100-5,i*20
			text @format(x), 200-5,i*20
	more  : -> @digits = constrain @digits+1, 1,6
	less  : -> @digits = constrain @digits-1, 1,6

engineering = new Engineering "a"   		
"""
			c:
				engineering : "reset()|more()|less()"

		Laboratorium :
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

#####################################
	"LA: interactivity, advanced" :
#####################################

		Klocka: 
			b: """
# LOC:44 fc sc circle range rd # point rect rectMode for in if then else 
#        translate push pop class extends constructor new @ super ->

class Klocka extends Application
	reset  : -> super
	draw   : -> super
	hour   : (h) ->
	minute : (m) ->
	second : (s) ->

klocka = new Klocka "b"
			"""
			a: """
class Klocka extends Application
	reset : -> 
		super
		@h=10
		@m=9
		@s=30
	draw : ->
		bg 0.5
		rectMode CENTER
		translate 100,100
		@urtavla()
		@visare (@h+@m/60.0)*30, 7,60,1,0,0
		@visare (@m+@s/60.0)*6,5,80,0,1,0
		@visare @s*6,2,80,1,1,0
	hour   : (h) -> @adjust h,0,0
	minute : (m) -> @adjust 0,m,0
	second : (s) -> @adjust 0,0,s

	adjust : (h,m,s) ->
		@h+=h
		@m+=m
		@s+=s
		t = 3600 * @h + 60 * @m + @s
		@s = t %% 60
		t = (t - @s) / 60
		@m = t %% 60
		t = (t - @m) / 60
		@h = t %% 24

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
		sw 2
		circle 0,0,90
		fc 1
		sc()
		for i in range 60
			circle 85,0, if i%5==0 then 3 else 2
			rd 6

klocka = new Klocka "a"
"""
			c: 
				klocka : "reset()|hour -1|hour +1|minute -1|minute +1|second -1|second +1"


		BouncingBalls :
			b : """
# LOC: 43 fc sw sc circle # + ++ - -- %% == push if then for in 
#         splice length _.create class constructor super extends new @

class Ball 
	constructor : ->
	update      : (grav) ->
	render      : (sel) ->

class BouncingBalls extends Application

	constructor : (@name) ->
		super @name
		if @balls then @balls = (_.create Ball.prototype, ball for ball in @balls)

	reset   : -> super
	draw    : -> super
	update  : -> 
	add     : -> 
	delete  : ->
	selNext : -> 
	selPrev : -> 
	grow    : ->    
	shrink  : ->  
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

class BouncingBalls extends Application

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
# LOC: 49 sc bg sw range # for in if then + line class constructor extends new @

class Cartesius
	constructor : (x,y,c) ->
	go          : (dx,dy) ->
	down        : (d) ->
	left        : (d) ->

class Braider extends Application
	braid   : (type) -> 
	draw    : -> super
	forward : ->
	back    : ->

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

class Braider extends Application

	braid : (@type) -> 
		@n = 0
		@forward()
	draw : ->
		if @type==1
			sw 5
			a = new Cartesius 200,20, 1 # röd
			for i in range @n
				a.go -20,20
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
				braider : "braid 1|braid 2|braid 3|braid 4|forward()|back()"

			e:
				braid : "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"



		RecursiveCircle: 
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

		Nim:
			b:"""		
# LOC:62 bg fc sc circle # * + - ^ if then else _.isEqual return <  
#        constrain text textAlign textSize class extends constructor new @ super ->

class Nim extends Application
	reset : -> 
		super
		@seed = 0
	draw  : -> super
	newGame : -> 
		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]
		@board = [a,a+b,a+b+c]
	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++
	mousePressed : (mx,my) ->
nim = new Nim "b"  
"""
			a:"""
class Nim extends Application
	reset : -> 
		super
		@seed = 0
		@radius = 30
		@buttons = [[35,80],[100,80],[165,80], [35,150,'ok'],[100,150,'x'],[165,150,'hint']]
		@newGame()
		@init()

	init : ->
		@active = -1
		@player = 0
		@original = @board[..]

	move : (index) ->
		if @active in [index,-1]
			@active = index
			@board[@active] = constrain @board[@active]-1, 0, 99

	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++

	newGame : ->
		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]
		@board = [a,a+b,a+b+c]
		@init()

	ok : -> 
		if @active == -1 then return
		@player = 1 - @player
		@active = -1 
		@original = @board[..]

	cancel : ->
		@board = @original
		@active = -1 

	draw : ->
		textAlign CENTER,CENTER
		textSize 32
		bg 0
		for [x,y,txt],i in @buttons
			fc 0
			sc 1
			sw 2
			if i<=2 and @active==-1 or @active==i then circle x,y,@radius
			if i in [3,4] and @active!=-1 then circle x,y,@radius
			if i==5 and @active==-1 then circle x,y,@radius
			fc 1
			sc()
			if i<=2 then text @board[i],x,y 
			if i>=3 then text txt,x,y
		fc 1,@player,0
		circle 20 + @player * 160,20,10

	hint : ->
		if @active != -1 then return
		[a,b,c] = @board
		board = if (b^c) < a then [b^c,b,c] else if (a^c) < b then [a,a^c,c] else if (a^b) < c then [a,b,a^b] else [a,b,c]
		if not _.isEqual(board,@board)
			@board = board
			@player = 1 - @player

	mousePressed : (mx,my) ->
		index = -1
		for button,i in @buttons
			if dist(button[0],button[1],mx,my) < @radius then index = i
		if index <= 2 then @move index
		if index == 3 then @ok()
		if index == 4 then @cancel()
		if index == 5 then @hint()

nim = new Nim "a"   
		
"""
			c:
				nim : "reset()|newGame()"
			e:
				Nim : "https://en.wikipedia.org/wiki/Nim"
				xor : "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"
				Nimrod : "https://en.wikipedia.org/wiki/Nimrod_(computing)"

		ChessGame :
			b:"""
# LOC:64 bg fc sc sw range # point rect rectMode class constructor new @
#        if then else text textSize textAlign for in push split length indexOf

class Chess extends Application
	reset : -> super
	draw  : -> super
	move  : (d) ->

chess = new Chess "b"
"""
			a:"""
class Chess extends Application

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
# LOC:35 sc sw rd # point triangle translate cos sin radians 
#        push pop class extends constructor new @ super ->

class Shot
	constructor : (@x,@y,@dir) ->
	render      : ->	
	move        : ->

class Ship extends Application
	constructor : (@name) ->
		super @name
		if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)
	reset   : -> super
	draw    : -> super
	left    : -> 
	right   : -> 
	forward : -> 
	shoot   : ->		

ship = new Ship "b"	
"""
			a: """
class Shot
	constructor : (@x,@y,@dir) ->
	render : ->	point @x,@y 
	move : ->
		@x += int 5 * cos radians @dir
		@y += int 5 * sin radians @dir

class Ship extends Application 

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

	left    : -> @dir -= 5
	right   : -> @dir += 5
	forward : -> 
		@x += 5 * cos radians @dir
		@y += 5 * sin radians @dir

	shoot : ->
		@shots.push new Shot int(@x), int(@y), @dir

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
				ship: "reset()|left()|right()|forward()|shoot()"



		PickingBerries :
			b:"""
# LOC:46 bg sc fc sw # [] * + line text textSize textAlign constrain dist 
#        splice break for in class extends constructor new @ super ->

class PickingBerries extends Application
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
class PickingBerries extends Application

	reset : ->
		super
		@x = 100
		@y = 100
		@speed = 2 # 0..3
		@speeds = [1,5,20,50]
		@clicks = 0
		@xs = [100,189,124,196,13,187,12,153,32,131]
		@ys = [107,175,138,188,37,78,168,31,20,188]
		@moves = ""
		@dxdy = [[1,0],[0,1],[-1,0],[0,-1]]

	draw : ->
		bg 0
		rectMode CENTER
		sc 1
		sw 1
		rect @x,@y,2*@speeds[@speed],2*@speeds[@speed]
		for [dx,dy] in @dxdy
			for i in range 4
				point @x+dx*@speeds[i], @y+dy*@speeds[i]
		
		fc 1,1,0
		sc()
		textSize 20
		textAlign CENTER,CENTER
		text @clicks,100,180

		sc 1,0,0
		sw 2
		for [x,y] in _.zip @xs,@ys
			line x-3,y-3,x+3,y+3
			line x+3,y-3,x-3,y+3

	move : (i) ->
		[dx,dy] = @dxdy[i] 		
		@x += dx * @speeds[@speed]
		@y += dy * @speeds[@speed]
		@clicks++
		@moves += 'abcd'[i] 

	setSpeed : (index) ->
		@speed = index
		@moves += index

	right   : -> @move 0
	down    : -> @move 1
	left    : -> @move 2
	up      : -> @move 3
	
	snailSpeed : -> @setSpeed 0
	slowSpeed  : -> @setSpeed 1
	highSpeed  : -> @setSpeed 2
	warpSpeed  : -> @setSpeed 3

	step : (d) -> 
		@clicks++
		constrain @zoom+d,0,3 
	pick : ->
		for [x,y],i in _.zip @xs,@ys
			if dist(x,y,@x,@y) <= 2
				@xs.splice i,1
				@ys.splice i,1
				break
		@clicks++

berries = new PickingBerries "a"
			"""
			c:
				berries : "reset()|left()|right()|up()|down()|snailSpeed()|slowSpeed()|highSpeed()|warpSpeed()|pick()"

		Stopwatch:
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


#####################################
	"LB: miscellaneous" :
#####################################

		Alphanumeric:
			b:"""
# LOC:29 bg sc fc range circle # for in & + - * ^ ** %% [] length splice dist
#        push if then else class extends constructor new @ super ->

class AlphaNumeric extends Application
	reset : -> super
	draw  : -> super
	add   : -> 
	del   : ->
	left  : -> 
	right : ->
	mousePressed : (mx,my) ->

alpha = new AlphaNumeric "b"
"""
			a:"""
class AlphaNumeric extends Application
	reset : -> 
		super
		@pattern = [[4,12,4,4,4,4,14], [14,17,1,2,4,8,31], [14,17,17,31,17,17,17],[30,17,17,30,17,17,30]]
		@index = 0
		@radius = 8
		@distance = 20
	draw : ->
		bg 0
		sc()
		for index,j in @pattern[@index]
			y =  40+@distance*j
			for i in range 5
				if index & 1<<i then fc 0,1,0 else fc 0,0.3,0
				x = 140-@distance*i
				circle x,y,@radius
	add   : -> 
		@pattern.push [0,0,0,0,0,0,0]
		@index = @pattern.length - 1
	del   : -> @pattern.splice @index, 1
	left  : -> @index = (@index - 1) %% @pattern.length
	right : -> @index = (@index + 1) %% @pattern.length

	mousePressed : (mx,my) ->
		for index,j in @pattern[@index]
			y =  40+@distance*j
			for i in range 5
				x = 140-@distance*i
				if dist(x,y,mx,my) < @radius
					@pattern[@index][j] ^= 1<<i

alpha = new AlphaNumeric "a"
"""
			c:
				alpha: "reset()|add()|del()|left()|right()"
			e:
				binärt : "http://www.matteboken.se/lektioner/matte-1/tal/talsystem"
				hexadecimalt : "http://www.matteguiden.se/matte-1/grunder/binara-och-hexadecimala-tal"
				'5x7 matris' : "https://www.google.se/search?q=5x7+matrix&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjWjYen5OrSAhXhJ5oKHf8BBmgQ_AUIBigB&biw=1310&bih=945&dpr=1.1"

		GoldenStar:
			b: """
# LOC:23 bg fc range # for in triangle translate rotate cos sin class extends constructor new @ super ->

class GoldenStar extends Application
	reset : -> super
	draw  : -> super
	n     : (d) -> 
	outer : (d) ->
	inner : (d) ->

star = new GoldenStar "b"
"""
			a: """
class GoldenStar extends Application
	reset : ->
		super
		@_x = 100
		@_y = 100
		@_n = 4
		@_outer = 100
		@_inner = 25
	n : (d) -> @_n = constrain @_n+d,3,12
	outer : (d) -> @_outer = constrain @_outer+d, 0, 100
	inner : (d) -> @_inner = constrain @_inner+d, 0, 100
	draw : ->
		bg 0
		translate @_x,@_y
		v = TWO_PI/@_n
		rotate -PI/2
		x1 = @_inner * cos v/2
		y1 = @_inner * sin v/2
		for i in range @_n
			fc 1,1,0
			triangle 0,0, @_outer,0, x1,y1
			fc 1,0.7,0
			triangle 0,0, @_outer,0, x1,-y1
			rotate v

star = new GoldenStar "a"
"""
			c:
				star : "reset()|n -1|n +1|outer -1|outer +1|inner -1|inner +1"
		
		Polygon:
			b:"""
# LOC:23 bg sc range # line for in cos sin radians class extends constructor new @ super ->

class Turtle
	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->
	fd : (d) ->
	rt : (a) ->

class Polygon extends Application
	reset      : -> super
	draw       : -> super
	antalSidor : (d) ->
	antalSteg  : (d) -> 

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

class Polygon extends Application
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

		Kalkylator:
			b:"""
# LOC:46 bg sc fc range @readText # + - * / of {} in [] shift unshift 
#        text textSize textAlign length for Math.sqrt Math.PI splice 
#        parseFloat "" split class extends constructor new @ super ->
# TIPS! Börja med de fyra räknesätten. 
#       @words ska kunna utökas med ":". T ex ": sq dup *"
#       Definiera t ex invers, distans och parallella motstånd

class Kalkylator extends Application
	reset : -> super
	draw  : -> super
	chs   : -> # ( n -- n ) 
	swap  : -> # ( a b -- b a )
	drop  : -> # ( n -- ) 
	dup   : -> # ( n -- n n )
	sqrt  : -> # ( n -- n )
	clr   : -> # ( a b -- )
	pi    : -> # ( -- n)
	enter : -> # inmatning från textrutan under kommandolistan.

kalkylator = new Kalkylator "b"
"""
			a:"""
class Kalkylator extends Application
	reset : ->
		super
		@stack = [0,1,2,3]
		@words = {"sq":["dup","*"]}
	draw : ->
		bg 0
		sc()
		textSize 32
		textAlign RIGHT, BOTTOM
		fc 1,0,0
		for value,i in _.first @stack,5
			s = "" + value
			text s[0..9],190, 200 - i*40

	shift : -> @stack.shift()
	over : -> @stack.splice(1,1)[0]
	unshift : (item) -> @stack.unshift item 
	chs : -> @unshift -@shift()
	swap : -> [@stack[0],@stack[1]] = [@stack[1],@stack[0]]
	drop : -> @shift()
	dup : -> @unshift @stack[0]
	sqrt : -> @unshift Math.sqrt @shift()
	clr : -> @stack = []
	pi : -> @unshift Math.PI

	execute : (arr) ->
		for cmd in arr
			if cmd=="" then continue
			if cmd=='+' then @unshift @shift() + @shift()
			else if cmd=='*' then @unshift @shift() * @shift()
			else if cmd=='/' then @unshift @over() / @shift()
			else if cmd=='-' then @unshift @over() - @shift()
			else if cmd=='chs' then @chs()
			else if cmd=='swap' then @swap()
			else if cmd=='drop' then @drop()
			else if cmd=='dup' then @dup()
			else if cmd=='sqrt' then @sqrt()
			else if cmd=='clr' then @clr()
			else if cmd=='pi' then @pi()
			else if cmd of @words then @execute @words[cmd]
			else @stack.unshift eval cmd

	enter : ->
		commands = @readText()
		if commands=="" then return
		arr = commands.split ' '
		if arr[0]==':' then @words[arr[1]] = arr[2..]
		else @execute arr

kalkylator = new Kalkylator "a"
"""
			c:
				kalkylator : "reset()|chs()|swap()|drop()|dup()|sqrt()|clr()|pi()|enter()"
			e:
				parseInt : "https://www.w3schools.com/jsref/jsref_parseint.asp"
				stack : "https://sv.wikipedia.org/wiki/Stack_(datastruktur)"
				split : "https://coffeescript-cookbook.github.io/chapters/strings/splitting-a-string"
				"Omvänd Polsk Notation" : "https://sv.wikipedia.org/wiki/Omv%C3%A4nd_polsk_notation"
				RPN : "https://en.wikipedia.org/wiki/Reverse_Polish_notation"
				"HP-35" : "https://neil.fraser.name/software/hp-35"
				"Forth Haiku" : "http://forthsalon.appspot.com/word-list"


		Nian :
			b:"""
# LOC:35 bg fc sc # [] push "" split indexOf reduce + * ** / % > & text textSize textAlign  
#				 for in of {} _.countBy and if then class constructor new @ extends super 
# Bilda ord med fyra till nio bokstäver. Den mittersta bokstaven måste ingå. Prova med "aaefkrrtu"

class Nian extends Application
	reset : -> super
	draw  : -> super
	enter : ->

nian = new Nian "b"
"""
			a:"""
class Nian extends Application
	reset : ->
		super
		@found = ""
	draw : -> 
		n = 15
		bg 0
		textAlign LEFT,TOP
		textSize 12
		fc 1,1,0
		sc()
		for word,i in @found.split " "
			x = int i / n
			y = i % n
			text word,5+200/4*x,200*y/n
	bits : (word) -> word.split("").reduce ((acc,ch) -> acc|(2 ** "abcdefghijklmnopqrstuvwxyzåäö".indexOf ch)), 0
	ok : (f1,f2) ->
		for ch, f of f2
			if f > f1[ch] then return false
		true
	enter : ->
		words = ordlista.split " "
		patterns = (@bits word for word in words)
		@letters = @readText()
		mandatory = @letters[4]
		@found = []
		p = @bits @letters
		letters1 = @letters.split ""
		freq1 = _.countBy letters1
		for pattern,i in patterns
			if (p & pattern) == pattern
				letters2 = words[i].split ""
				freq2 = _.countBy letters2
				if @ok(freq1,freq2) and mandatory in letters2 then @found.push words[i]
		@found = @found.join " "

nian = new Nian "a"
"""
			c:
				nian : "reset()|enter()"

			e:
				Nian : "http://svenska-apps.se/iphone-ipad/underhallning/svd-nian-babqpg.html"
				'_.countBy' : "http://underscorejs.org/#countBy"
				reduce : "https://coffeescript-cookbook.github.io/chapters/arrays/reducing-arrays"


		Korsord :
			b: """
# LOC:29 bg fc sc @readText # / % + * != and text textAlign textSize if then for in 
#        "" split join _.filter class constructor new @ extends super [] length
# Mata in t ex b..l och få ut bill samt boll.

class Korsord extends Application
	reset : -> super
	draw  : -> super
	enter : -> 
korsord = new Korsord "b"
"""
			a:"""
class Korsord extends Application
	reset : -> 
		print "reset"
		super
		@found = ""
		@pattern = ''
	draw : -> 
		n = 15
		bg 0
		textAlign LEFT,TOP
		textSize 12
		fc 1,1,0
		sc()
		for word,i in @found.split " "
			x = int i / n
			y = i % n
			text word,5+200/4*x,200*y/n
	match : (word,pattern) ->
		for letter,i in pattern
			if letter != '.' and letter != word[i] then	return false
		true
	enter : -> 
		words = ordlista.split " "
		@pattern = @readText()
		@found = [] 
		for w in words
			if w.length == @pattern.length and @match w,@pattern then @found.push w
		#@found = _.filter words, (w) -> w.length == @pattern.length and @match w,@pattern
		@found = @found.join " "

korsord = new Korsord "a"
"""
			c:
				korsord : "reset()|enter()"

			e:
				'_.some' : "http://underscorejs.org/#some"
				'_.filter' : "http://underscorejs.org/#filter"
				'_.countBy' : "http://underscorejs.org/#countBy"

		RushHour :
			b:"""
# LOC:71 bg sc fc range # / % + * - == >= ++ -- "" [] {} push class extends constructor new @ super ->
#        rect text textAlign for in if then else toLowerCase indexOf _.create prototype length @readText

# De 36 rutorna numreras:
#   0 1 2 3 4 5
#   6 7 8 9 a b
#   c d e f g h
#   i j k l m n
#   o p q r s t
#   u v w x y z
#
# Placering av fordon:
#   horisontellt: A=2 B=3
#   vertikalt:    C=2 D=3
# 
# Lösningar:
# 	Bilarna namnges i följden XABCDEFGHIJKLMNOPQR
# 	liten bokstav: vänster/uppåt
# 	stor bokstav:  höger/nedåt

class Car
	constructor : (ch,wh,@c) ->
	render      : ->
	move        : (d) ->

class RushHour extends Application
	constructor : (@name) ->
		super @name
		if @cars then @cars = (_.create(Car.prototype, car) for car in @cars)	
	reset      : -> super
	draw       : -> super
	enter_cars : -> # Ad0sBwCoD569
	enter_move : -> # bbbEEEAfdccGGXXXXX
	begin      : ->
	backward   : (n=1) ->
	forward    : (n=1) ->
	end        : ->

rushHour = new RushHour "b"

"""
			a:"""
class Car
	constructor : (ch,wh,@c) ->
		index = "0123456789abcdefghijklmnopqrstuvwxyz".indexOf ch
		@i = index % 6
		@j = int index / 6
		[@w,@h] = wh

	render : -> 
		fcc (@c+1) % 8
		rect 40+20*@i+2, 40+20*@j+2, 20*@w-4, 20*@h-4
		fc 0
		tcc (@c+1) % 8
		name = "XABCDEFGHIJKLMNOP"[@c]
		small = name.toLowerCase()
		text small, 50+20*@i,        50+20*@j
		text name,  50+20*(@i+@w-1), 50+20*(@j+@h-1)

	move : (d) -> # -1 eller +1
		if @w == 1 then @j += d
		if @h == 1 then @i += d

class RushHour extends Application

	constructor : (@name) ->
		super @name
		if @cars then @cars = (_.create(Car.prototype, car) for car in @cars)

	reset : ->
		super
		@enter_cars1 "Ad0sBwCoD569"
		@enter_move1 "bbbEEEAfdccGGXXXXX"
		@begin()

	draw : ->
		textAlign CENTER,CENTER
		bg 0
		sc()
		fc 0.5
		rect 40,40,120,120
		rect 160,80,40,20
		fc 1
		sc()
		for i in range 6
			text "012345"[i],30,50+20*i
			text "012345"[i],50+20*i,170
		for car in @cars 
			car.render()

	enter_cars : -> @enter_cars1 @readText() 
	enter_cars1 : (s) ->
		@cars = []
		@moves = ""
		@index = 0
		for ch in s
			if ch in "ABCD" then wh = {A:[2,1], B:[3,1], C:[1,2], D:[1,3]}[ch]
			else @cars.push new Car ch,wh,@cars.length

	enter_move : -> @enter_move1 @readText() 
	enter_move1 : (s) ->
		@moves = @moves[...@index]
		@moves += s 
		@forward s.length
		
	begin : -> @backward @index 
	backward : (n=1) ->
		for i in range n
			if @index == 0 then return
			@index--
			@bothward "XABCDEFGHIJKLMNO","xabcdefghijklmno"
	forward : (n=1) ->
		for i in range n
			if @index >= @moves.length then return
			@bothward "xabcdefghijklmno","XABCDEFGHIJKLMNO"
			@index++
	end : -> @forward @moves.length - @index

	bothward : (a,b) ->
		i = a.indexOf @moves[@index]
		j = b.indexOf @moves[@index]
		if i >= 0 then @cars[i].move -1
		if j >= 0 then @cars[j].move +1

rushHour = new RushHour "a"
"""
			c:
				rushHour : "reset()|enter_cars()|enter_move()|begin()|backward()|forward()|end()" # |hint()|undo()
			e:
				RushHour : "https://en.wikipedia.org/wiki/Rush_Hour_(board_game)"

		"Nand2Tetris ALU" :
			b: """
# LOC:63 sc fc sw range # text textAlign textSize class extends constructor new @ super ->
#        point quad dist for in if then else << - -- + ++ * != & ^ ~ split
# Se länken Nand2Tetris, sidan 36, för mer information!

class ALU extends Application
	reset : -> super
	draw  : -> super
	mousePressed : (mx,my) ->	
alu = new ALU "b"
"""
			a:"""
class ALU extends Application
	reset : -> 
		super
		@x = 3
		@y = 5
		@flags = 0
		@buttons = [[5,1],[7,1],[9,1],[11,1],[13,1],[15,1],[3,3],[5,3],[15,3],[17,3]]

	draw1 : (value,x0,y0) ->
		sc()
		fc 1,1,0
		text value, x0,y0
		for i in range 16
			if (value & 1<<(15-i)) != 0 then fc 1 else fc 0.75
			if (value & 1<<(15-i)) != 0 then r=2.5 else r=1
			circle x0-40+3+5*i,y0+20,r

	draw : -> 
		textAlign CENTER,CENTER
		fc 1,1,0
		quad 0,80, 200,80, 140,120, 60,120
		[z,zr,ng] = @calc()
		@draw1 @x,40,50
		@draw1 @y,160,50
		@draw1  z,100,130
		flags = "zx nx zy ny f no".split " "
		sc()
		textSize 16
		for i in range 6
			[x,y] = @buttons[i]
			fc 1,0,0
			circle 10*x,10*y,10
			if @flags & 1<<i then fc 1 else fc 0.5
			text flags[i],10*x,10*y
		for ch,i in "-+-+"
			[x,y] = @buttons[6+i]
			fc 1,0,0
			circle 10*x,10*y,10
			fc 1
			text ch, 10*x,10*y
		if zr==1 then fc 1 else fc 0.5
		text "zr",90,170
		if ng==1 then fc 1 else fc 0.5
		text "ng",110,170

	mousePressed : (mx,my) ->
		index = -1
		for button,i in @buttons
			if dist(10*button[0],10*button[1],mx,my) < 10 then index = i
		if 0 <= index <= 5 then @flags ^= 1<<index
		if index == 6 then @x--
		if index == 7 then @x++
		if index == 8 then @y--
		if index == 9 then @y++

	calc : ->
		x=@x
		if @flags & 1 then x=0
		if @flags & 2 then x=~x 
		y=@y
		if @flags & 4 then y=0
		if @flags & 8 then y=~y 
		if @flags & 16 then out = x+y else out = x&y
		if @flags & 32 then out = ~out
		if out==0 then zr=1 else zr=0
		if out<0 then ng=1 else ng=0
		[out,zr,ng]

alu = new ALU "a"
"""
			c:
				alu : "reset()"
			e:
				Nand2Tetris : "http://www.nand2tetris.org/chapters/chapter%2002.pdf"

		RandomDice :
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

		ColorPair :
			b: """
# LOC:41 fc circle # [] .. push dist length splice _.isEqual colorMode HSB
#        for in class extends constructor new @ super ->

class ColorPair extends Application
	reset : -> 
		super
		@seed = 0
	draw : -> super
	mousePressed : (mx,my) ->
	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++
colorpair = new ColorPair "b"
"""
			a:"""
class ColorPair extends Application
	reset : -> 
		super
		@seed = 0
		@level = 0
		@changeLevel 1
		@radius = 40

	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++

	draw : -> 
		bg 1
		sw 2
		sc 1,1,1,0.5
		colorMode HSB
		for [x,y,c] in @circles
			fill color c,100,100,0.5
			circle x,y,@radius
		
	mousePressed : (mx,my) ->
		hitlist = []
		for [x,y,c],i in @circles
			if dist(x,y,mx,my) < @radius then hitlist.push i 
		if hitlist.length == 1
			i = hitlist[0]
			circle = @circles[i]
			if @memory == -1
				@memory = circle[2]
				@circles.splice i,1
			else if _.isEqual(@memory, circle[2]) 
				@memory = -1
				@circles.splice i,1
				if @circles.length == 0 then @changeLevel 1
			else
				@changeLevel -1
		else
			@changeLevel -1

	changeLevel : (d) ->
		@memory = -1
		@level = constrain @level+d, 1, 20
		@circles = []
		for i in range @level
			c = int i * 360 / @level
			@circles.push [@randint(200), @randint(200), c]
			@circles.push [@randint(200), @randint(200), c]

colorpair = new ColorPair "a"
"""
			c:
				colorpair : "reset()"
			e: 
				ColorPair : "https://christernilsson.github.io/ColorPair"

		RubikSquare:
			b:"""		
# LOC:99 bg fc sc circle # [] push length int .. + - * / % %% == < & << if then else rectMode rect push pop not
#         _.isEqual text textAlign textSize rectMode while and constrain class extends constructor new @ super ->
# OBS: Level 6 tar cirka 20 sekunder att beräkna.

class RubikSquare extends Application
	reset : -> 
	draw : ->
	mousePressed : (mx,my) ->
rubiksquare = new RubikSquare "b"   

"""
			a:"""
class RubikSquare extends Application
	reset : -> 
		super
		@seed = 0
		@size = 30
		@level = 1
		@buttons = [[4,3,3,3],[10,3,3,3],[16,3,3,3], [4,9,3,3],[10,9,3,3],[16,9,3,3], [4,15,3,3],[10,15,3,3],[16,15,3,3], [4,19,3,1],[10,19,3,1],[16,19,3,1]]
		@history = []
		@memory = -1
		@createGame()

	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++

	newGame : ->
		if @level >= @history.length and _.isEqual @board,[0,1,2,0,1,2,0,1,2] then d=1 else d=-1
		@level = constrain @level+d,1,6
		@history = []
		@createGame()

	createGame : ->
		target = [0,1,2,0,1,2,0,1,2]
		q1 = [target]
		visited = {}
		key = target.join ''
		visited[key] = 0
		for level in range @level
			q2 = []
			for board in q1
				for m in range 6
					for d in range 2
						bd = @move m,d,board
						key = bd.join ''
						if key not in _.keys visited
							q2.push bd
							visited[key] = level+1
			q1 = q2
		@board = q1[@randint(q1.length)] 

	move : (m,d,board) ->
		[i,j,k] = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]][m]
		bd = board[..]
		[a,b,c] = [bd[i],bd[j],bd[k]]
		if d==0 then [a,b,c] = [b,c,a] else [a,b,c] = [c,a,b]
		[bd[i],bd[j],bd[k]] = [a,b,c]
		bd

	draw : ->
		bg 0
		textAlign CENTER,CENTER
		textSize 20
		rectMode CENTER,CENTER
		for c,i in @board
			sc 1
			if c==0 then fc 1,0,0
			if c==1 then fc 0,1,0
			if c==2 then fc 0,0,1
			[x,y,w,h] = @buttons[i]
			rect 10*x,10*y,20*w,20*h
		if @memory >= 0 
			[x,y,w,h] = @buttons[@memory]
			fc 0
			sc()
			circle 10*x,10*y,10
		[x,y,w,h] = @buttons[10]
		fc 1,1,0
		sc()
		text @level-@history.length,10*x,10*y
		if @history.length > 0
			[x,y,w,h] = @buttons[9]
			text "undo",10*x,10*y
			[x,y,w,h] = @buttons[11]
			text "new",10*x,10*y

	undo : -> 
		if @history.length == 0 then return
		@board = @history.pop()
		@memory = -1
		@draw()

	mousePressed : (mx,my) ->
		index = -1
		for [x,y,w,h],i in @buttons
			if x-w <= mx/10 <= x+w and y-h <= my/10 <= y+h then index = i
		if 0 <= index < 9
			if @memory == -1 
				@memory = index 
			else if @memory == index 
				@memory = -1
			else
				hash = 
					"01":[0,1], "02":[0,0], "10":[0,0], "12":[0,1], "20":[0,1], "21":[0,0]
					"34":[1,1], "35":[1,0], "43":[1,0], "45":[1,1], "53":[1,1], "54":[1,0]
					"67":[2,1], "68":[2,0], "76":[2,0], "78":[2,1], "86":[2,1], "87":[2,0]
					"03":[3,1], "06":[3,0], "30":[3,0], "36":[3,1], "60":[3,1], "63":[3,0]
					"14":[4,1], "17":[4,0], "41":[4,0], "47":[4,1], "71":[4,1], "74":[4,0]
					"25":[5,1], "28":[5,0], "52":[5,0], "58":[5,1], "82":[5,1], "85":[5,0]
				pair = hash["" + @memory + index] 
				if pair
					[m,d] = pair
					@history.push @board[..]
					@board = @move m,d,@board
					@memory = -1
		if index==9 then @undo()
		if index==11 then @newGame()

rubiksquare = new RubikSquare "a"   
		
"""
			c:
				rubiksquare : "reset()"

		Hex:
			b:"""
class Hex extends Application
	reset : -> super
	mousePressed : (mx,my) ->
	draw : ->
hex = new Hex "b"
"""

			a:"""
class Hex extends Application
	reset : ->
		super
		@a = 7
		@b = 5
		@c = 3
		@history = []
		@board = []
		for i in range 11*11
			@board.push 0

	mousePressed : (mx,my) ->
		print mx,my
		index = -1
		translate 100,100
		rd 18
		for i in range -5,6
			for j in range -5,6
				x = i*(2*@a+1) + @a*j
				y = j*(2*@b+@c-1)
				push()
				translate x,y
				if dist(x,y,mx,my) < 7 then index = 11*j+i
				pop()
		print index
		if index >= 0
			@history.push index
			n = @history.length
			if n%2==0 then n=-n 
			@board[index] = n 

	draw : ->
		bg 0.5
		sc 0,1,0
		fc 0,1,0
		translate 100,100
		textAlign CENTER,CENTER
		textSize 9
		rd 18
		for i in range -5,6
			for j in range -5,6
				index = 11*j+i
				x = i*(2*@a+1) + @a*j
				y = j*(2*@b+@c-1)
				push()
				translate x,y
				bc = @b+@c
				quad 0,-bc, 0,bc, -@a,@c, -@a,-@c
				quad 0,-bc, 0,bc,  @a,@c,  @a,-@c
				fc 0
				n = @board[index]
				if n!=0
					if n>0 then fc 1 else fc 0
					circle 0,0,7
					sc()
					fc 1,1,0
					text abs(n),0,0
				pop()
hex = new Hex "a"
"""
			c:
				hex : "reset()|newGame()"




		Asserts:
			b:"""
# Här kan du se några klargörande exempel.
# Om de två parametrarna till assert är olika, skrivs de ut till console.
# Du kan prova egna asserts här. Kontrollera med F12.

# + * ** Prioritet
assert 2 + 3 * 4  , 14   
assert 4 * 2 ** 3 , 32 

# % Resten vid heltalsdivision
assert  2 % 2 ,  0
assert  1 % 2 ,  1
assert  0 % 2 ,  0
assert -1 % 2 , -1    
assert -2 % 2 , -0      

# %% Resten vid heltalsdivision. Klarar även negativa tal.
assert  2 %% 2 , 0
assert  1 %% 2 , 1
assert  0 %% 2 , 0   
assert -1 %% 2 , 1  
assert -2 %% 2 , 0 
 
# []
assert 7 in [7,8]                     , true
assert (i for i in [7,8])             , [7,8]  
assert ([item,i] for item,i in [7,8]) , [[7,0],[8,1]]   
assert (x*x for x in [3,4,5])         , [9,16,25]   

# {}
assert 'b' of {a:7,b:8}                       , true      
assert (key for key of {a:7,b:8})             , ['a','b']   
assert ([key,item] for key,item of {a:7,b:8}) , [['a',7],['b',8]]    

# & | ^ ~ Bit operationer
assert [0&0, 0&1, 1&0, 1&1] , [0,0,0,1] 
assert [0|0, 0|1, 1|0, 1|1] , [0,1,1,1] 
assert [0^0, 0^1, 1^0, 1^1] , [0,1,1,0] 
assert [~0, ~1, ~2, ~3]     , [-1,-2,-3,-4] 

# lerp
assert  8 , lerp 10,12,-1
assert 10 , lerp 10,12,0
assert 11 , lerp 10,12,0.5
assert 12 , lerp 10,12,1
assert 14 , lerp 10,12,2

# range
assert [0,1,2,3,4,5,6,7,8,9]  , range 10
assert [0,1,2,3,4]            , range 5
assert [1,2,3,4,5,6,7,8,9,10] , range 1,11
assert [0,2,4,6,8]            , range 0,10,2
assert [10,8,6,4,2]           , range 10,0,-2
assert [9,8,7,6,5,4,3,2,1,0]  , range 10-1,-1,-1

# [..]
assert [0..4]  , [0,1,2,3,4]
assert [0...5] , [0,1,2,3,4]
assert [5,6,7,8,9][1..2] , [6,7]
assert [5,6,7,8,9][..2]  , [5,6,7]
assert [5,6,7,8,9][1..]  , [6,7,8,9]
assert [5,6,7,8,9][..]   , [5,6,7,8,9]
assert [5,6,7,8,9][0..2]   , [5,6,7]
assert [5,6,7,8,9][1...-2] , [6,7]
assert [5,6,7,8,9][-2..]   , [8,9]

"""
			a:""
			e:
				assert : "https://en.wikipedia.org/wiki/Assertion_(software_development)"
