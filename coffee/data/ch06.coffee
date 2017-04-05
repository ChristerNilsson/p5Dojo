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
	b:"# LOC:2 fc # arc radians\n"
	a:"""
fc 1,1,0
arc 100,100, 80,80, radians(-135),radians(135)
"""

ID123 = # TwoArcs:
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

ID124 = # OneDiceHistogram
	b:"# LOC:10 range # Array fill length floor random text textAlign for in ++ * / + - rect []\n"
	a:"""
counts = Array(6).fill 0
dice = -> floor 6 * random() 
textAlign CENTER,CENTER
for i in range 1000
	counts[dice()]++
w = 30
for count,i in counts
	x = w*i + (200-w*counts.length)/2
	rect x,0,w,count         
	text i+1,x+w/2,10                	
"""

ID125 = # TwoDiceHistogram
	b:"# LOC:10 range # Array fill length floor random text textAlign for in ++ * / + - rect []\n"
	a:"""
counts = Array(11).fill 0
dice = -> floor 6 * random() 
textAlign CENTER,CENTER
for i in range 1000
	counts[dice() + dice()]++
w = 16
for count,i in counts
	x = w*i + (200-w*counts.length)/2
	rect x,0,w,count         
	text i+2,x+w/2,10                	
"""
	e:
		Kojo : "https://www.youtube.com/watch?v=X6YSgNkcgAs"
