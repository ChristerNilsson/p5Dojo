ID_Alphanumeric =
	v:'2017-04-29'
	b:"""
# LOC:29 bg sc fc range circle # for in & + - * ^ ** %% [] length splice dist
#        push if then else class extends constructor new @ super ->

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

