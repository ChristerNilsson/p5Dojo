#####################################	
	ch05 = # "L5: line for lerp" :
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
