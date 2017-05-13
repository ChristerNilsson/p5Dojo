ID_Alphanumeric =
	v:'2017-04-29'
	k:'bg sc fc range circle for operators [] splice dist if class'
	b:"""
# LOC:29

class AlphaNumeric extends Application
	reset : ->
		super
	draw  : ->
	add   : ->
	del   : ->
	left  : ->
	right : ->
	mousePressed : (mx,my) ->
app = new AlphaNumeric
"""
	a:"""
class AlphaNumeric extends Application
	reset : ->
		super
		@RADIUS = 8
		@DISTANCE = 20
		@pattern = [[4,12,4,4,4,4,14], [14,17,1,2,4,8,31], [14,17,17,31,17,17,17],[30,17,17,30,17,17,30]]
		@index = 0
	draw : ->
		bg 0
		sc()
		for index,j in @pattern[@index]
			y =  40+@DISTANCE*j
			for i in range 5
				if index & 1<<i then fc 0,1,0 else fc 0,0.3,0
				x = 140-@DISTANCE*i
				circle x,y,@RADIUS
	add   : ->
		@pattern.push [0,0,0,0,0,0,0]
		@index = @pattern.length - 1
	del   : -> @pattern.splice @index, 1
	left  : -> @index = (@index - 1) %% @pattern.length
	right : -> @index = (@index + 1) %% @pattern.length

	mousePressed : (mx,my) ->
		for index,j in @pattern[@index]
			y =  40+@DISTANCE*j
			for i in range 5
				x = 140-@DISTANCE*i
				if dist(x,y,mx,my) < @RADIUS
					@pattern[@index][j] ^= 1<<i

app = new AlphaNumeric "a"
"""
	c:
		app: "reset()|add()|del()|left()|right()"
	e:
		binärt : "http://www.matteboken.se/lektioner/matte-1/tal/talsystem"
		hexadecimalt : "http://www.matteguiden.se/matte-1/grunder/binara-och-hexadecimala-tal"
		'5x7 matris' : "https://www.google.se/search?q=5x7+matrix&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjWjYen5OrSAhXhJ5oKHf8BBmgQ_AUIBigB&biw=1310&bih=945&dpr=1.1"

ID_Angle =
	v:'2017-05-12'
	k:'bg sc fc sw circle class dist if operators text sin cos atan2 radians arc _.min line for range abs'
	b:"""
# LOC:54
# Vit linje markerar 0 grader.

class Angle extends Application
	reset : ->
		super
		@seed = 0
	draw : ->
	mousePressed : (mx,my) ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
app = new Angle
"""
	a:"""

class Angle extends Application
	reset : ->
		super
		@seed = 0
		@level = 2
		@errors = 0
		@R1 = 50
		@R2 = 100
		@newGame 0
	newGame : (d) ->
		if d==-1 then @errors++
		@level = constrain @level+d, 1, 100
		@angle = int 360/@level * @randint @level # hela grader
		@marginal = 180/@level # grader
	draw : ->
		bg 0.5
		sw 50
		strokeCap SQUARE
		start = radians 135-@marginal
		stopp = radians 135+@marginal
		fc()
		sc 1,1,0
		arc 100,100,150,150,start,stopp
		sw 1
		for i in range 12
			if i==0 then sc 1 else sc 0
			v = i * 30 * PI/180
			x1 = 100+@R1*cos v
			y1 = 100+@R1*sin v
			x2 = 100+@R2*cos v
			y2 = 100+@R2*sin v
			line x1,y1,x2,y2
		sc 1,1,0
		circle 100,100,@R1
		circle 100,100,@R2
		sc()
		fc 1
		textSize 16
		textAlign CENTER,CENTER
		fc 1,1,0
		text @angle,100,100
		fc 1,0,0
		text @errors,100,75
		fc 0,1,0
		text @level,100,125
	mousePressed : (mx,my) ->
		d = dist 100,100,mx,my
		if @R1 <= d <= @R2
			v = -180/PI * atan2 my-100,mx-100
			@seed += mx % 10
			res = @angleDist(v,@angle) <= @marginal
			@newGame if res then 1 else -1
	angleDist : (u,v) -> _.min [abs(u-v), abs(360+u-v)]
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

app = new Angle "a"
"""
	c:
		app : "reset()"
