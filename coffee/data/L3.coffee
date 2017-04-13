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
