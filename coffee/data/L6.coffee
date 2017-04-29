ID120 = # Sunshine:
	v:'2017-04-29'
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

ID121 = # Lines:
	v:'2017-04-29'
	b:"# LOC:5 bg range # for in lerp line (Noel Watson)\n"
	a:"""
bg 0
for i in range 37
	line 10,10, 190,10+i*5
	line 10,100, 190,10+i*5
	line 10,190, 190,10+i*5
"""

ID122 = # ChessRow:
	v:'2017-04-29'
	b:"# LOC:5 bg fc range # % for in lerp rect\n"
	a:"""
bg 0.5
for i in range 8
	fc i%2
	x = 20+20*i
	rect x,20, 20,20
"""

ID123 = # ChessBoard:
	v:'2017-04-29'
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

ID124 = # GalaxiesColliding :
	v:'2017-04-29'
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

ID125 = # ColorCross
	v:'2017-04-29'
	b:"# LOC:11 bg sc sw range # for in point\n"
	a:"""
bg 0.5
for k in range 6
	x = [75,25,75,125,75,75][k]
	y = [50,50,100,50,0,150][k]
	for i in range 50
		r = [i/50,0,i/50,1,i/50,i/50][k]
		for j in range 50
			g = [j/50,j/50,1,j/50,0,(50-j)/50][k]
			b = [0,(50-i)/50,j/50,i/50,(50-j)/50,1][k]
			sc r,g,b
			point x+i,y+j
"""
