ID040 = # Dices : 
	b : """
# LOC:26 sc # point

"""
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
		
ID041 = # Five: 
	b: """
# LOC:12 bg circle fc sc #

""" 
	a: """
bg 0.5
sc()
fc 1
circle 100,100,20
fc 1,0,0
circle 40,40,20
fc 1,1,0
circle 40,160,20
fc 0,1,0
circle 160,160,20
fc 0,0,1
circle 160,40,20
""" 

ID042 = # WhiteCircle: 
	b:"""
# LOC:2 circle fc #

"""
	a:"""
fc 1
circle 60,80,30
"""

ID043 = # WhiteEmptyCircle: 
	b:"""
# LOC:4 circle fc sc sw #

"""
	a:"""
sc 1
fc()
sw 2
circle 70,90,40
"""

ID044 = # TwoDiscsA: 
	b:"""
# LOC:4 circle fc #

"""
	a:"""
fc 1,0,0 
circle 80,100,40
fc 0,1,0
circle 100,120,50
"""

ID045 = # TwoDiscsB:
	b:"""
# LOC:4 circle fc #

"""
	a:"""
fc 1,0,0
circle 80,100,40
fc 0,1,0, 0.5
circle 120,100,50
"""

ID046 = # TextA: 
	b:"""
# LOC:3 fc # textSize text

"""
	a:"""
fc 1,1,0
textSize 32
text 'Coffeescript',100,100
"""

ID047 = # TextB: 
	b:"""
# LOC:4 fc # text textAlign textSize

"""
	a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
text 'Coffeescript',100,100
"""
