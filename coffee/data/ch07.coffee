#####################################
#	ch07 = # "L7: translate rotate push pop" : 
#####################################

		ID140 = # TextC: 
			b:"# LOC:6 fc rd # text textAlign textSize translate\n"
			a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 90
text 'Coffeescript',0,0
"""

		ID141 = # TextD: 
			b:"# LOC:6 fc rd # text textAlign textSize translate\n"
			a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 180
text 'Coffeescript',0,0
"""
		
		ID142 = # RotatedEllipse: 
			b:"# LOC:5 rd # ellipse translate\n"
			a:"""
fc 1,0,0
sc()
translate 100,100
rd 45
ellipse 0,0, 80,40
"""

		ID143 = # RotatedRectA: 
			b:"# LOC:4 fc # rect\n"
			a:"""
fc 1,0,0
rect 60,100, 40,40
fc 0,1,0
rect 140,100, 40,40
"""

		ID144 = # RotatedRectB: 
			b:"# LOC:12 fc rd # rect translate push pop\n"
			a:"""
push()
fc 1,0,0
translate 60,100
rd 45
rect 0,0, 40,40
pop()
push()
fc 0,1,0
translate 140,100
rd 45
rect 0,0, 40,40
pop()
"""

		ID145 = # RotatedRectC: 
			b:"# LOC:13 fc rd # rect translate push pop\n"
			a:"""
rectMode CENTER
push()
fc 1,0,0
translate 80,120
rd 45
rect 0,0, 40,40
pop()
push()
fc 0,1,0
translate 160,120
rd 45
rect 0,0, 40,40
pop()
"""

		ID146 = # Cards: 
			b:"# LOC:10 fc sc circle range rd # rect rectMode for in lerp translate\n"
			a:"""
rectMode CENTER
sc 1
translate 100,100
for i in range 18,-1,-1
  r = 1.0*i/18
  fc r,0,0
  w = 70+5*i
  h = 70+5*i
  rect 0,0, w,h
  rd 5
""" 

		ID147 = # "Snow White and the 7 lerps": 
			b:"""
# LOC:17 bg fc sc range rd # rect rectMode for in lerp translate push pop
"""
			a:"""
bg 1
rectMode CENTER
sc()
for i in range 10
  for j in range 10
    push()
		x = lerp 10,30,i
		y = lerp 10,30,j
    translate x,y
    rd lerp 0,10,i-j
    r = lerp 0.1,0.2,i
    g = lerp 0.1,0.2,j
    fc r,g,0
		w = lerp 5,6,i
		h = lerp 5,6,j
    rect 0,0, w,h
    pop()
""" 

		ID148 = # Roulette:
			b:"""
# LOC:20 bg sw fc sc range # for in if then else == % / [] "" TWO_PI
#        text textAlign arc strokeCap translate rotate rd push pop

numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]
"""
			a:"""
numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]
bg 0.5
translate 100,100
rd -90
d = PI/numbers.length
sw 20
strokeCap SQUARE
textAlign CENTER,CENTER
for i in range numbers.length
	push()
	fc()
	if i==0 then sc 0,1,0 else sc i%2,0,0
	arc 0,0,180,180,-d,d
	translate 90,0
	rd 90
	sc()
	fc 1
	text numbers[i],0,0
	pop()
	rotate TWO_PI / numbers.length
"""
