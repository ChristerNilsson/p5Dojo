ID_ImagiCharm =
	v:'2019-06-04'
	k:'bg fill color rect for {} []'
	l:25
	h:1
	b:"""
matrix = [
	'y.m.....' # 0
	'.ymmm...' # 1 
	'.mcmmm..' # 2 
	'mmmmmmm.' # 3 
	'mmmmmmmm' # 4 
	'.m..mmmm' # 5 
	'....mmmm' # 6
	'....mmmm' # 7
] #01234567

fill 255,0,0
rect 40,60,80,100,5

"""
	a:"""
matrix = [
	'y.m.....'
	'.ymmm...'
	'.mcmmm..'
	'mmmmmmm.' 
	'mmmmmmmm' 
	'.m..mmmm'
	'....mmmm'
	'....mmmm'
]

colors =
	'.': color 0
	y: color 255,255,0
	c: color 0,255,255
	m: color 255,0,255

bg 0
for i in range 8
	for j in range 8
		letter = matrix[j][i]
		fill colors[letter]
		x = 20+20*i
		y = 20+20*j
		w = 18
		h = 18
		rect x,y,w,h
"""


ID_IndianSun =
	v:'2018-04-26'
	k:'range line sin cos angleMode for if constrain operators class'
	l:10
	h:3
	b:"""
class IndianSun extends Application
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
app = new IndianSun
"""
	a:"""
class IndianSun extends Application
	reset : ->
		super
		@n = 5
	draw : ->
		angleMode DEGREES
		points = ([100+100*cos(i * 360/@n), 100+100*sin(i * 360/@n)] for i in range @n)
		for [x1,y1] in points
			for [x2,y2] in points
				line x1,y1,x2,y2
	mousePressed : (mx,my) -> @n = constrain @n + (if my < 100 then 1 else -1), 3, 20

app = new IndianSun "a"
"""
	c:
		app : "reset()"
	e:
		Kojo : "http://www.kogics.net/codesketch?id=28"

