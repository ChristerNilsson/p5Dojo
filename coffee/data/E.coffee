ID_ellipse =
	v: '2018-04-26'
	k: 'ellipse ellipseMode'
	l: 7
	h: 0
	b: """
# Rita en ellips

# Draw an ellipse

# ellipseMode CENTER
#         x, y, w, h
ellipse 100,50,40,20    

ellipseMode CORNER
#       x1,y1, w, h
ellipse 80,80,40,20     

ellipseMode CORNERS
#       x1, y1, x2, y2
ellipse 80,120,120,140  

ellipseMode RADIUS
#         x,  y,w/2,h/2 
ellipse 100,170, 20, 10
"""
	a: """
# Rita en ellips

# Draw an ellipse

# ellipseMode CENTER
#         x, y, w, h
ellipse 100,50,40,20    

ellipseMode CORNER
#       x1,y1, w, h
ellipse 80,80,40,20     

ellipseMode CORNERS
#       x1, y1, x2, y2
ellipse 80,120,120,140  

ellipseMode RADIUS
#         x,  y,w/2,h/2 
ellipse 100,170, 20, 10
"""

ID_ellipses =
	v:'2018-04-26'
	k:'fc ellipse'
	l:2
	h:1
	b:""
	a:"""
fc 1,0,0,0.5
ellipse 80,100,120,180
ellipse 90,100,120,120
fc 0,0,0,0.5
ellipse 120,100,80,120
ellipse 140,100,80,60
"""

ID_EngineeringNotation =
	v:'2017-04-29'
	k:'fc sc bg int log10 constrain operators text class'
	l:28
	b:"""
class Engineering extends Application
	reset : ->
		super
	draw  : ->
	more  : ->
	less  : ->
app = new Engineering
"""
	a:"""
class Engineering extends Application
	reset : ->
		super
		@PREFIXES = "yzafpnµm kMGTPEZY"
		@numbers = "-273.15 1.6021766208e-19 3.1415926535 9.80665 101325 299792458 1073741824 6.022140857e23"
		@digits = 3
	format : (x) ->
		if x<0 then return "-" + @format(-x)
		exponent = 3 * int Math.log10(x)/3
		x = x / 10 ** exponent
		if x < 10 then factor = 10 ** (@digits-1)
		else if x < 100 then factor = 10 ** (@digits-2)
		else factor = 10 ** (@digits-3)
		Math.round(x * factor) / factor + @PREFIXES[8+exponent/3]
	draw  : ->
		bg 0
		textAlign RIGHT,TOP
		textSize 20
		textFont "monospace"
		fc 1,0,0
		sc()
		textAlign RIGHT,TOP
		for nr,i in @numbers.split " "
			x = parseFloat nr
			if i<8 then text @format(1/x), 100-5,i*20
			text @format(x), 200-5,i*20
	more  : -> @digits = constrain @digits+1, 1,6
	less  : -> @digits = constrain @digits-1, 1,6

app = new Engineering "a"
"""
	c:
		app : "reset()|more()|less()"
	e:
		EngineeringNotation : "https://en.wikipedia.org/wiki/Engineering_notation"

