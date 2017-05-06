ID_Tetris =
	v:'2017-05-05'
	b:"""
# LOC:113 bg fc range # [] {} length Array fill splice for in rect if then else
#         unshift while _.contains not class extends constructor new @ super ->

class Tetris extends Application
	reset : -> super
	draw  : ->
	mousePressed : (mx,my) ->
app = new Tetris
"""
	a:"""
class Tetris extends Application
	reset : ->
		super
		@buttons = [[140,105,'-90'],[180,105,'+90'],[160,130,'dn'],[140,155,'lt'],[180,155,'rt'],[160,180,'sp'],[160,50,0]]
		@seed = 0
		@arena = (new Array(12).fill(0) for i in range 20)
		@x=0
		@y=0
		@matrix = null
		@score = 0
		@playerReset()
	draw : ->
		bg 0
		fc 0.5
		rect 0,0,120,200
		sc 0
		@drawMatrix @arena, 0,0
		@drawMatrix @matrix, @x,@y
		@arenaSweep()
		textSize 20
		textAlign CENTER,CENTER
		@buttons[6][2] = @score
		for [x,y,txt],index in @buttons
			fc 0.5
			if index < 6 then circle x,y,15
			fc 1,1,0
			text txt,x,y
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	mousePressed : (mx,my) ->
		for [x,y,txt],index in @buttons
			if dist(mx,my,x,y) < 15
				if index==0 then @playerRotate -1 # -90
				if index==1 then @playerRotate 1  # +90
				if index==2 then @playerDown()    # DOWN
				if index==3 then @playerMove -1   # LEFT
				if index==4 then @playerMove 1    # RIGHT
				if index==5 then @playerDrop()    # SPACE
	arenaSweep : ->
		for i in range @arena.length
			y = 19-i
			rad = @arena[y]
			if not _.contains rad, 0
				row = @arena.splice(y, 1)[0].fill 0
				@arena.unshift row
				@score++
	playerRotate : (dir) ->
		xpos = @x
		offset = 1
		@rotera @matrix, dir
		while @collide()
			@x += offset
			offset = -(offset + (offset > 0 ? 1 : -1))
			if offset > @matrix[0].length
				@rotera @matrix, -dir
				@x = xpos
				return
	playerReset : ->
		pieces = 'TJLOSZI'
		@matrix = @createPiece pieces[@randint pieces.length]
		@y = 0
		@x = (@arena[0].length / 2 | 0) - (@matrix[0].length / 2 | 0)
		if @collide()
			row.fill(0) for row in @arena
			@score = 0
	playerDown : ->
		@y++
		if @collide()
			@y--
			@merge()
			@playerReset()
			@arenaSweep()
	playerDrop : ->
		while not @collide()
			@y++
		@y--
		@merge()
		@playerReset()
		@arenaSweep()
	playerMove : (offset) ->
		@x += offset
		if @collide() then @x -= offset
	merge : ->
		for row,y in @matrix
			for value,x in row
				if value != 0 then @arena[y + @y][x + @x] = value
	rotera : (matrix, dir) ->
		for y in range matrix.length
			for x in range y
				[matrix[x][y], matrix[y][x]] = [matrix[y][x],matrix[x][y]]
		if dir > 0
			row.reverse() for row in matrix
		else
			matrix.reverse()
	collide : ->
		m = @matrix
		for y in range m.length
			for x in range m[y].length
				if (m[y][x] != 0 and (@arena[y + @y] and @arena[y + @y][x + @x]) != 0) then return true
		false
	createPiece : (type) ->
		if type == 'I' then [[0, 1, 0, 0],	[0, 1, 0, 0],	[0, 1, 0, 0],	[0, 1, 0, 0],]
		else if type == 'L' then [[0, 2, 0],[0, 2, 0],[0, 2, 2],]
		else if type == 'J' then [[0, 3, 0],[0, 3, 0],[3, 3, 0],]
		else if type == 'O' then [[4, 4],[4, 4],]
		else if type == 'Z' then [[5, 5, 0],[0, 5, 5],[0, 0, 0]]
		else if type == 'S' then [[0, 6, 6],[6, 6, 0],[0, 0, 0]]
		else if type == 'T' then [[0, 7, 0],[7, 7, 7],[0, 0, 0]]
	drawMatrix : (matrix, xoff,yoff) ->
		for row,y in matrix
			for value,x in row
				if value != 0
					fcc value
					rect 10*(x + xoff), 10*(y + yoff), 10,10

app = new Tetris "a"
"""
	c:
		app: "reset()"
	e:
		"Wikipedia" : "https://en.wikipedia.org/wiki/Tetris"
		"Meth Meth Method" : "https://www.youtube.com/watch?v=H2aW5V46khA"

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
