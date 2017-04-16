ID060 = # GreenEllipse: 
	b:"# LOC:2 fc # ellipse\n"
	a:"""
fc 0,1,0
ellipse 120,60, 60,40
"""

ID061 = # GreenRect: 
	b:"# LOC:2 fc # rect\n"
	a:"""
fc 0,1,0
rect 60,80, 40,50
"""

ID062 = # RedRect:
	b:"# LOC:2 fc # rect\n"
	a:"""
fc 1,0,0
rect 80,70, 40,100
"""

ID063 = # Cross: 
	b:"# LOC:4 fc # rect\n"
	a:"""
fc 1,0,0
sc()
rect 85,70, 70,10
rect 115,40, 10,100
"""

ID064 = # SquareHole: 
	b : "# LOC:11 fc sc sw # rect\n"
	a : """
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

ID065 = # Triangle: 
	b:"# LOC:2 fc # triangle\n" 
	a:"""
fc 1
triangle 20,40, 160,100, 100,140
"""

ID066 = # Quad: 
	b:"# LOC:2 fc # quad\n"
	a:"""
fc 1,1,0
quad 150,100, 180,20, 40,20, 100,140
"""

ID067 = # TwoArcs:
	b:"# LOC:7 fc sc sw # arc radians strokeCap\n"
	a:"""
fc()
sc 1,0,0
sw 20
arc 100,70, 100,100, radians(-90),radians(90)
sc 1,1,0
strokeCap SQUARE
arc 100,120, 100,100, radians(90),radians(-90)
"""

ID068 = # PacMan: 
	b:"# LOC:2 fc # arc radians\n"
	a:"""
fc 1,1,0
arc 100,100, 180,180, radians(-135),radians(135)
"""
	e :
		Play : "https://www.google.se/#q=pacman&clb=clb"
		Wikipedia : "https://en.wikipedia.org/wiki/Pac-Man"

