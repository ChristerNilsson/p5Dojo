ID_2048 =
	v:'2017-10-19'
	k:'fc sc range [] for rect if operators class text'
	l:103
	h:2
	b:"""
class Button 
	constructor : (@number,@i,@j) ->
	draw : ->

class C2048 extends Application
	reset : ->
		super
		@seed=0
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	classes : -> [Button]
	draw  : ->
	right : ->
	left : ->
	up : ->
	down : ->
app = new C2048
"""
	a:"""

class Button 
	constructor : (@number,@i,@j) ->
		@x = @i * 50
		@y = @j * 50
	draw : ->
		fc 1
		sc 0
		rect @x,@y, 50,50
		fc 0
		textSize [0,40,40,30,20,15][str(@number).length]
		if @number != 0 then text @number, 25+@x, 25+@y

class C2048 extends Application
	reset : ->
		super
		@N = 4
		@state = ''
		@buttons = []
		@seed = 0

		for i in range @N
			for j in range @N
				button = new Button 0,i,j
				@buttons.push button 

		@new_piece()
		@new_piece()

	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

	new_piece : ->
		moves = range @N*@N
		cands = (i for i in moves when @buttons[i].number==0)
		i = cands[@randint cands.length]
		@buttons[i].number = [2,4][@randint 2]

	shift : (numbers, index,delta) ->
		lst = (numbers[index+i*delta] for i in range @N) 
		lst = (item for item in lst when item != 0)
		for i in range lst.length
			if lst[i]==lst[i+1] and lst[i] != 0
				lst[i] *= 2
				lst[i+1] = 0

		while lst.length < @N
			lst.push 0

		for i in range @N
			numbers[index+i*delta] = lst[i]

		numbers

	move : (start,a,b) ->
		numbers = (button.number for button in @buttons) 
		last = numbers.slice()
		for i in range @N
			numbers = @shift numbers, start+i*a,b
		for button,i in @buttons
			button.number = numbers[i]
		if not _.isEqual numbers,last then @new_piece()
		numbers

	up    : -> @move 0,4,1
	down  : -> @move 3,4,-1
	left  : -> @move 0,1,4
	right : -> @move 12,1,-4
	check_lose : (b) ->
		numbers = (button.number for button in @buttons when button.number==0)
		if numbers.length==0 then @state = 'LOSE'

	classes : -> [Button]

	draw : ->
		textAlign CENTER,CENTER
		for button in @buttons
			button.draw()
		@check_lose()
		if @state != ''
			fc 1,0,0,0.5
			textSize 64
			text @state,100,100

app = new C2048 'a'
"""

	c:
		app: "reset()|right()|left()|up()|down()"
	e:
		"2048" : "https://en.wikipedia.org/wiki/2048_(video_game)"

ID_Tetramino =
	v:'2017-06-07'
	k:'bg fill cc range [] for rect if operators class'
	l:32
	b:"""
class Piece
	constructor : (@color,@patterns) ->
class Tetramino extends Application
	reset : ->
		super
	classes : -> [Piece]
	draw  : ->
	right : ->
	left : ->
	prev : ->
	next : ->
app = new Tetramino
"""
	a:"""
class Piece
	constructor : (@color,@patterns) -> @current = 0
	right : -> @current = (@current+1) %% @patterns.length
	left  : -> @current = (@current-1) %% @patterns.length
	draw  : ->
		pattern = @patterns[@current]
		fill cc @color
		for i in range 16
			if pattern >> i & 1
				x = i % 4
				y = i // 4
				rect 20*x,20*y,20,20
f = (a,b,c,d) -> 2**a + 2**b + 2**c + 2**d
class Tetramino extends Application
	reset : ->
		super
		@pieces = []
		@pieces.push new Piece 0,[f(1,5,9,13),f(4,5,6,7)]
		@pieces.push new Piece 1,[f(5,6,9,10)]
		@pieces.push new Piece 2,[f(1,5,6,9),f(4,5,6,9),f(1,4,5,9),f(1,4,5,6)]
		@pieces.push new Piece 3,[f(2,5,6,9),f(4,5,9,10)]
		@pieces.push new Piece 4,[f(1,5,6,10),f(5,6,8,9)]
		@pieces.push new Piece 5,[f(1,5,9,10),f(4,5,6,8),f(0,1,5,9),f(4,5,6,2)]
		@pieces.push new Piece 6,[f(1,5,9,8),f(0,4,5,6),f(1,2,5,9),f(4,5,6,10)]
		@current = 0
	classes : -> [Piece]
	draw  : -> @pieces[@current].draw()
	right : -> @pieces[@current].right()
	left : -> @pieces[@current].left()
	prev : -> @current = (@current-1) %% @pieces.length
	next : -> @current = (@current+1) %% @pieces.length
app = new Tetramino 'a'
"""
	c:
		app: "reset()|right()|left()|prev()|next()"
	e:
		"Wikipedia" : "https://en.wikipedia.org/wiki/Tetris"
		"Meth Meth Method" : "https://www.youtube.com/watch?v=H2aW5V46khA"

ID_Tetris =
	v:'2017-05-07'
	k:'bg fc range [] {} for rect if while _.contains operators class'
	l:109
	h:2
	b:"""
class Tetris extends Application
	reset : ->
		super
	draw  : ->
	mousePressed : (mx,my) ->
app = new Tetris
"""
	a:"""
class Tetris extends Application
	reset : ->
		super
		@buttons = [[140,105,'-90'],[180,105,'+90'],[160,130,'dn'],[140,155,'lt'],[180,155,'rt'],[160,180,''],[160,50,0]]
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
			if index < 5 then circle x,y,15
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
				#if index==5 then @playerDrop()    # SPACE
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
	playerDrop : -> # hänger sig här!
		while not @collide()
			@playerDown()
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
					fill cc value
					rect 10*(x + xoff), 10*(y + yoff), 10,10

app = new Tetris "a"
"""
	c:
		app: "reset()"
	e:
		"Wikipedia" : "https://en.wikipedia.org/wiki/Tetris"
		"Meth Meth Method" : "https://www.youtube.com/watch?v=H2aW5V46khA"

ID_text =
	v:'2018-04-26'
	k:'text textSize textAlign sw sc'
	l:13
	h:0
	b:"""
# Ritar en text
# Draws a text

# textSize pixles  # höjd
# textAlign horizontal,vertical
# text string,x,y  # ritar ut string

text "Aj",60,40

sw 3
textSize 40
text "Bg",140,40

textAlign CENTER
text "Cq",60,100

textAlign CENTER,CENTER
fc 0,1,0
text "Dp",140,100

sc 1,0,0
text "Ew",60,160

sc()
text "Fr",140,160
"""	
	a:"""
# Ritar en text
# Draws a text

# textSize pixles  # höjd
# textAlign horizontal,vertical
# text string,x,y  # ritar ut string

text "Aj",60,40

sw 3
textSize 40
text "Bg",140,40

textAlign CENTER
text "Cq",60,100

textAlign CENTER,CENTER
fc 0,1,0
text "Dp",140,100

sc 1,0,0
text "Ew",60,160

sc()
text "Fr",140,160
"""

ID_Texts =
	v:'2018-04-26'
	k:'bg for range text textSize textAlign'
	l:10
	h:1
	b:"""
"""	
	a:"""
# textSize pixlar  # höjd
# textAlign horizontal,vertical
# text string,x,y  # ritar ut string

bg 1
textSize 20
for i in range 10
	letter = "ABCDEFGHIJ"[i]
	textAlign LEFT
	text letter,40,20+i*20
	textAlign CENTER
	text letter,100,20+i*20	
	textAlign RIGHT
	text letter,160,20+i*20
"""

# ID_TextB =
# 	v:'2017-04-29'
# 	k:'fc sc text textSize textAlign'
# 	l:5
# 	h:1
# 	b:""
# 	a:"""
# fc 1,1,0
# sc()
# textSize 32
# textAlign CENTER,CENTER
# text 'Coffeescript',100,100
# """

ID_TextCoffee =
	v:'2017-09-30'
	k:'sc fc angleMode rotate text translate textSize textAlign'
	l:10
	h:2
	b:""
	a:"""
sc()
fc 1,1,0
textSize 64
textAlign CENTER,CENTER
translate 100,100
angleMode DEGREES
rotate 90
text 'Coffee',0,0
fc 1,0,0
rotate 90
text 'script',0,0
"""

ID_TextRotate =
	v:'2018-04-25'
	k:'angleMode rotate text translate textSize'
	l:7
	h:0
	b:"""
angleMode DEGREES
textSize 100
fc 1,1,0,0.5
translate 100,100
for i in range 6
	text "f",0,0
	rotate 60
"""
	a:""

ID_TextRotateAlign =
	v:'2018-04-24'
	k:'angleMode rotate text translate textSize textAlign'
	l:8
	h:0
	b:"""
angleMode DEGREES
textAlign CENTER,CENTER
textSize 200
fc 1,0,0,0.5
translate 100,100
for i in range 4
	text "A",0,0
	rotate 90
"""
	a:""


ID_Totalisator =
	v:'2018-12-16'
	k:'bg [] text for if return class'
	l:20
	h:3
	b:"""
class Totalisator extends Application
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
app = new Totalisator
"""
	a:"""
class Totalisator extends Application

	reset : ->
		super
		@bets = (0 for i in range 10)
		@total = 0

	draw : ->
		textAlign CENTER,CENTER
		textSize 20
		sc()
		bg 0.5
		for name,i in 'Adam Bertil Cesar David Erik Filip Gustav Helge Ivar Johan'.split ' '
			text name,50,10+i*20
			if @bets[i]>0 then text @bets[i],100,10+i*20
			p = @pretty @total,@bets[i]
			text p,150,10+i*20

	gcd : (x, y) -> if y == 0 then x else @gcd y, x % y

	pretty : (a,b) ->
		if b == 0 then return ''
		g = @gcd a,b
		a //= g
		b //= g
		if b == 1 then a else a + '/' + b

	mousePressed : (mx,my) ->
		i = my//20
		@bets[i]++
		@total++

app = new Totalisator "a"

"""
	c:
		app : "reset()"
	e:
		Wikipedia : "https://en.wikipedia.org/wiki/Totalisator"


ID_TowerOfHanoi =
	v:'2017-05-13'
	k:'bg fc sc range operators [] text for if return constrain class line'
	l:40
	b:"""
class TowerOfHanoi extends Application
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
app = new TowerOfHanoi
"""
	a:"""
class TowerOfHanoi extends Application
	reset : ->
		super
		@level = 0
		@H = 10
		@buttons = [33,100,167]
		@disk = null
		@newGame()
	draw : ->
		bg 0.75
		textSize 32
		textAlign CENTER,CENTER
		sc()
		text @counter,100,180
		for pile,i in @board
			x = @buttons[i]
			sc 0.5
			sw 3
			line x,55,x,140
			sc 0
			line 0,140,200,140
			sw @H
			for disk,j in pile
				y = 134 - j*@H
				stroke cc disk
				line x-3*(disk+1),y, x+3*(disk+1),y
	newGame : ->
		@counter=0
		@level = constrain @level+1,1,8
		@board = [range(@level).reverse(), [], []]
	mousePressed : (mx,my) ->
		if @disk==null and @board[0].length==0 and @board[1].length==0
			@newGame()
		else
			for x,index in @buttons
				if x-33 <= mx <= x+33
					if @disk == null
						@disk = @board[index].pop()
					else
						pile = @board[index]
						if pile.length == 0 or _.last(pile) > @disk
							@counter++
							pile.push @disk
							@disk = null

app = new TowerOfHanoi "a"

"""
	c:
		app : "reset()"
	e:
		Wikipedia : "https://en.wikipedia.org/wiki/Tower_of_Hanoi"

ID_Translate =
	v:'2018-04-26'
	k:'translate fc rect'
	l:5
	h:0
	b:"""
# translate x,y

fc()
rect 0,0,20,20
translate 100,100
fc 1
rect 0,0,20,20
"""
	a:"""
# translate x,y

fc()
rect 0,0,20,20
translate 100,100
fc 1
rect 0,0,20,20
"""

ID_triangle =
	v: '2018-04-27'
	k: 'triangle'
	l: 1
	h: 0
	b: """
# Rita en triangel

# Draw a triangle

#        x1,y1,x2,y2, x3,y3
triangle 20,20,20,80,100,80
"""
	a: """
# Rita en triangel

# Draw a triangle

#        x1,y1,x2,y2, x3,y3
triangle 20,20,20,80,100,80
"""

ID_triangles =
	v:'2018-04-26'
	k:'fc triangle'
	l:4
	h:1
	b:"""
# triangle x1,y1, x2,y2, x3,y3
"""
	a:"""
fc 1,1,0,0.5
triangle 20,40, 160,100, 100,140
fc 0,1,0,0.5
triangle 100,20, 160,80, 60,140
"""

ID_TwoDiceHistogram =
	v:'2017-04-29'
	k:'bg fc sc range int random text if for operators rect []'
	l:22
	b:"""
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

