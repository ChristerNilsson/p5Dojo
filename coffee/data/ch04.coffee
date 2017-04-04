#####################################
	ch04= # "L4: for lerp rect" : 
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
