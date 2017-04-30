ID_TextA =
	v:'2017-04-29'
	b:"# LOC:3 fc # textSize text\n"
	a:"""
fc 1,1,0
textSize 32
text 'Coffeescript',100,100
"""

ID_TextB =
	v:'2017-04-29'
	b:"# LOC:7 bg fc sc sw # text textAlign textSize\n"
	a:"""
bg 1
fc 1,1,0
sc 0
sw 5
textSize 100
textAlign CENTER,CENTER
text 'Coffeescript',100,100
"""

ID_TextC =
	v:'2017-04-29'
	b:"# LOC:6 fc rd # text textAlign textSize translate\n"
	a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 90
text 'Coffeescript',0,0
"""

ID_TextD =
	v:'2017-04-29'
	b:"# LOC:6 fc rd # text textAlign textSize translate\n"
	a:"""
fc 1,1,0
textSize 32
textAlign CENTER,CENTER
translate 100,100
rd 180
text 'Coffeescript',0,0
"""

ID_Triangle =
	v:'2017-04-29'
	b:"# LOC:2 fc # triangle\n"
	a:"""
fc 1
triangle 20,40, 160,100, 100,140
"""

ID_TwoArcs =
	v:'2017-04-29'
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

ID_TwoDiceHistogram =
	v:'2017-04-29'
	b:"""
# LOC:22 bg fc sc range # Array fill length int random text textAlign if else for in ++ * / + - < rect []
# OBS: På grund av random blir bitmapparna inte likadana
"""
	a:"""
counts = Array(11).fill 0
dice = -> int 6 * random()
textAlign CENTER,CENTER
for i in range 1000
	counts[dice() + dice()]++
h = int 200/11
bg 0
for count,i in counts
	y = h*i
	fc 1,1,0,0.5
	sc 1,1,0
	rect 0,y,count,h-3
	fc 1,1,0
	sc()
	textAlign LEFT,CENTER
	text i+2, 5,y+h/2
	if count < 100
		textAlign LEFT,CENTER
		text count, count+5,y+h/2
	else
		textAlign RIGHT,CENTER
		text count, count-5,y+h/2
"""
	e:
		Animering : "https://www.openprocessing.org/sketch/124236"

ID_TwoDiscsA =
	v:'2017-04-29'
	b:"# LOC:4 circle fc\n"
	a:"""
fc 1,0,0
circle 80,100,40
fc 0,1,0
circle 100,120,50
"""

ID_TwoDiscsB =
	v:'2017-04-29'
	b:"# LOC:4 circle fc\n"
	a:"""
fc 1,0,0
circle 80,100,40
fc 0,1,0, 0.5
circle 120,100,50
"""

