ID_Diagonal1 =
	v:'2017-04-29'
	k:'sc sw point'
	l:12
	b: ""
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

ID_Diagonal2 =
	v:'2017-04-29'
	k:'sc sw point'
	l:11
	b: ""
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

ID_DiagonalSquares =
	v:'2017-04-29'
	k:'range rect for lerp'
	l:4
	b:""
	a:"""
for i in range 10
	x = 5+20*i
	y = 5+20*i
	rect x,y, 10,10
"""

ID_DoubleForLoop =
	v:'2017-04-29'
	k:'range rect for lerp'
	l:5
	b:""
	a:"""
for i in range 10
	for j in range 10
		x = 5+20*i
		y = 5+20*j
		rect x,y, 10,10
"""

ID_Dices =
	v:'2017-04-29'
	k:'sc point'
	l:26
	b : ""
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

