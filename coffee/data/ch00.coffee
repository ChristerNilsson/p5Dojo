#####################################
ch00 = # Nyheter :
#####################################

	Nyheter :
		b:"""
# NYHETER 2017 APR 08
#   LB: Hex
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
# Vill du också visa upp ditt alster? 
#   Skicka i så fall koden till p5dojo@googlegroups.com 
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
