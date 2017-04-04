ID120 = # Triangle: 
	b:"# LOC:2 fc # triangle\n" 
	a:"""
fc 1
triangle 20,40, 160,100, 100,140
"""

ID121 = # Quad: 
	b:"# LOC:2 fc # quad\n"
	a:"""
fc 1,1,0
quad 150,100, 180,20, 40,20, 100,140
"""

ID122 = # PacMan: 
	b:"# LOC:2 fc # arc radians PIE\n"
	a:"""
fc 1,1,0
arc 100,100, 80,80, radians(-135),radians(135), PIE
"""

ID123 = # TwoArcs:
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

ID124 = # DiceHistogram
	b:"""
# LOC:9 range # floor random text textAlign for in ++ * - rect []
	"""
	a:"""
counts = [0,0,0,0,0,0,0,0,0,0,0,0,0]
dice = () -> 1 + floor 6 *random() 
textAlign CENTER,CENTER
for i in range 1000
	counts[dice()+dice()]++
for i in range 2,13
	x = 16*i-20
	rect x,0,16,counts[i]         
	text i,x+8,10                	
	"""
	e:
		Kojo : "https://www.youtube.com/watch?v=X6YSgNkcgAs"
		