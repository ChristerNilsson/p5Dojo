ID100 = # HorizontalLine: 
	b: "# LOC:2 sc # line\n"
	a: """
sc 1,0,1
line 10,70, 190,70
"""

ID101 = # VerticalLine: 
	b: "# LOC:3 sc sw # line\n"
	a: """
sc 1,1,0
sw 10
line 110,30, 110,170
"""

ID102 = # Line: 
	b: "# LOC:2 sc # line\n"
	a: """
sc 1,1,0
line 20,0, 200,20
"""

ID103 = # Grid: 
	b:"# LOC:5 sc sw range # for in line \n"
	a:"""
sc 1,1,0
sw 2
for i in range 10,200,10
	line 10,i,190,i
	line i,190, i,10
"""

ID104 = # Skislope:
	b: "# LOC:4 bg sc range # for in lerp line"
	a: """
bg 0
sc 1,0,0
for i in range 21
	line i*10,0, 200,i*10
"""

ID105 = # Sunshine:
	b: "# LOC:9 bg sc range # for in lerp line\n"
	a: """
bg 0
sc 1,1,0
for i in range 10
	x1 = lerp 0,20,i
	x2 = lerp 200,180,i
	line x1,0, x2,200
	y1 = lerp 20,40,i
	y2 = lerp 180,160,i
	line 0,y1, 200,y2
"""
		
ID106 = # Lines:  
	b:"# LOC:5 bg range # for in lerp line (Noel Watson)\n"
	a:"""
bg 0
for i in range 37
	line 10,10, 190,10+i*5
	line 10,100, 190,10+i*5
	line 10,190, 190,10+i*5
"""

ID107 = # ChessRow: 
	b:"# LOC:5 bg fc range # % for in lerp rect\n"
	a:"""
bg 0.5
for i in range 8
	fc i%2
	x = 20+20*i 
	rect x,20, 20,20
"""
		
ID108 = # ChessBoard: 
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
		
ID109 = # GalaxiesColliding : 
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
