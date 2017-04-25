ID260 = # Nim:
	b:"""
# LOC:62 bg fc sc circle # * + - ^ if then else _.isEqual return <
#        constrain text textAlign textSize class extends constructor new @ super ->

class Nim extends Application
	reset : ->
		super
		@seed = 0
	draw  : ->
	newGame : ->
		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]
		@board = [a,a+b,a+b+c]
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	mousePressed : (mx,my) ->
app = new Nim
"""
	a:"""
class Nim extends Application
	reset : ->
		super
		@RADIUS = 30
		@BUTTONS = [[35,80],[100,80],[165,80], [35,150,'ok'],[100,150,'x'],[165,150,'hint']]
		@seed = 0
		@newGame()
		@init()

	init : ->
		@active = -1
		@player = 0
		@original = @board[..]

	move : (index) ->
		if @active in [index,-1]
			@active = index
			@board[@active] = constrain @board[@active]-1, 0, 99

	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

	newGame : ->
		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]
		@board = [a,a+b,a+b+c]
		@init()

	ok : ->
		if @active == -1 then return
		@player = 1 - @player
		@active = -1
		@original = @board[..]

	cancel : ->
		@board = @original
		@active = -1

	draw : ->
		textAlign CENTER,CENTER
		textSize 32
		bg 0
		for [x,y,txt],i in @BUTTONS
			fc 0
			sc 1
			sw 2
			if i<=2 and @active==-1 or @active==i then circle x,y,@RADIUS
			if i in [3,4] and @active!=-1 then circle x,y,@RADIUS
			if i==5 and @active==-1 then circle x,y,@RADIUS
			fc 1
			sc()
			if i<=2 then text @board[i],x,y
			if i>=3 then text txt,x,y
		fc 1,@player,0
		circle 20 + @player * 160,20,10

	hint : ->
		if @active != -1 then return
		[a,b,c] = @board
		board = if (b^c) < a then [b^c,b,c] else if (a^c) < b then [a,a^c,c] else if (a^b) < c then [a,b,a^b] else [a,b,c]
		if not _.isEqual(board,@board)
			@board = board
			@player = 1 - @player

	mousePressed : (mx,my) ->
		index = -1
		for button,i in @BUTTONS
			if dist(button[0],button[1],mx,my) < @RADIUS then index = i
		if index <= 2 then @move index
		if index == 3 then @ok()
		if index == 4 then @cancel()
		if index == 5 then @hint()

app = new Nim "a"

"""
	c:
		app : "reset()|newGame()"
	e:
		Nim : "https://en.wikipedia.org/wiki/Nim"
		xor : "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"
		Nimrod : "https://en.wikipedia.org/wiki/Nimrod_(computing)"

ID261 = # ChessGame :
	b:"""
# LOC:53 bg fc sc sw range circle # rectMode class constructor super extends new @
#        rect if then else text textSize textAlign for in split length indexOf
#        "" toUpperCase _.isEqual % + - * / <= == [] push pop length and not substr
# OBS!   Rockad, en passant samt bondeförvandling hanteras ej.
#        Flytta pjäserna med musen. Klick utanför brädet innebär undo.

class Chess extends Application
	reset : ->
		super
	draw  : ->
	mousePressed : (mx,my) ->
app = new Chess
"""
	a:"""
class Chess extends Application
	reset : ->
		super
		@SIZE = 22
		@X = 100
		@Y = 100
		@board = ['RNBQKBNR','PPPPPPPP','........','........','........','........','pppppppp','rnbqkbnr']
		@history = []
		@memory = 0
	draw : ->
		bg 0.5
		textSize 0.9 * @SIZE
		textAlign CENTER,CENTER
		rectMode CENTER
		sc()
		for i in range 8
			for j in range 8
				if (i+j)%2 == 0 then fc 0.6 else fc 0.8
				x = @X-3.5*@SIZE+@SIZE*i
				y = @Y-3.5*@SIZE+@SIZE*(7-j)
				if _.isEqual @memory,[i,j] then fc 0,1,0
				rect x,y, @SIZE, @SIZE
				piece = @board[j][i]
				if piece in "RNBQKP" then fc 0.95 else fc 0
				if piece != '.'
					if piece in "pP" then circle x,y,5 else text piece.toUpperCase(),x,y
	setCharAt : (i,j,chr) ->
    @board[j] = @board[j].substr(0,i) + chr + @board[j].substr(i+1)
	move : (a,b) ->
		[i1,j1] = a
		[i2,j2] = b
		taken = @board[j2][i2]
		@setCharAt i2,j2, @board[j1][i1]
		@setCharAt i1,j1,' '
		@history.push [a,b,taken]
	undo : () ->
		if @history.length == 0 then return
		[a,b,taken] = @history.pop()
		[i1,j1] = a
		[i2,j2] = b
		@setCharAt i1,j1, @board[j2][i2]
		@setCharAt i2,j2, taken
	mousePressed : (mx,my) ->
		i = int (mx-20)/20
		j = 7 - int (my-20)/20
		if 0 <= i <= 7 and 0 <= j <= 7
			if @memory == 0
				@memory = [i,j]
			else
				if not _.isEqual @memory,[i,j] then @move @memory,[i,j]
				@memory = 0
		else
			@undo()

app = new Chess "a"

"""
	c:
		app : "reset()"

ID262 = # "Nand2Tetris ALU" :
	b: """
# LOC:63 sc fc sw range # text textAlign textSize class extends constructor new @ super ->
#        point quad dist for in if then else << - -- + ++ * != & ^ ~ split
# Se länken Nand2Tetris, sidan 36, för mer information!

class ALU extends Application
	reset : ->
		super
	draw  : ->
	mousePressed : (mx,my) ->
app = new ALU
"""
	a:"""
class ALU extends Application
	reset : ->
		super
		@x = 3
		@y = 5
		@flags = 0
		@BUTTONS = [[5,1],[7,1],[9,1],[11,1],[13,1],[15,1],[3,3],[5,3],[15,3],[17,3]]

	draw1 : (value,x0,y0) ->
		sc()
		fc 1,1,0
		text value, x0,y0
		for i in range 16
			if (value & 1<<(15-i)) != 0 then fc 1 else fc 0.75
			if (value & 1<<(15-i)) != 0 then r=2.5 else r=1
			circle x0-40+3+5*i,y0+20,r

	draw : ->
		textAlign CENTER,CENTER
		fc 1,1,0
		quad 0,80, 200,80, 140,120, 60,120
		[z,zr,ng] = @calc()
		@draw1 @x,40,50
		@draw1 @y,160,50
		@draw1  z,100,130
		flags = "zx nx zy ny f no".split " "
		sc()
		textSize 16
		for i in range 6
			[x,y] = @BUTTONS[i]
			fc 1,0,0
			circle 10*x,10*y,10
			if @flags & 1<<i then fc 1 else fc 0.5
			text flags[i],10*x,10*y
		for ch,i in "-+-+"
			[x,y] = @BUTTONS[6+i]
			fc 1,0,0
			circle 10*x,10*y,10
			fc 1
			text ch, 10*x,10*y
		if zr==1 then fc 1 else fc 0.5
		text "zr",90,170
		if ng==1 then fc 1 else fc 0.5
		text "ng",110,170

	mousePressed : (mx,my) ->
		index = -1
		for button,i in @BUTTONS
			if dist(10*button[0],10*button[1],mx,my) < 10 then index = i
		if 0 <= index <= 5 then @flags ^= 1<<index
		if index == 6 then @x--
		if index == 7 then @x++
		if index == 8 then @y--
		if index == 9 then @y++

	calc : ->
		x=@x
		if @flags & 1 then x=0
		if @flags & 2 then x=~x
		y=@y
		if @flags & 4 then y=0
		if @flags & 8 then y=~y
		if @flags & 16 then out = x+y else out = x&y
		if @flags & 32 then out = ~out
		if out==0 then zr=1 else zr=0
		if out<0 then ng=1 else ng=0
		[out,zr,ng]

app = new ALU "a"
"""
	c:
		app : "reset()"
	e:
		Nand2Tetris : "http://www.nand2tetris.org/chapters/chapter%2002.pdf"

ID263 = # RushHour :
	b:"""
# LOC:71 bg sc fc range # / % + * - == >= ++ -- "" [] {} push class extends constructor new @ super ->
#        rect text textAlign for in if then else toLowerCase indexOf _.create prototype length @readText

# De 36 rutorna numreras:
#   0 1 2 3 4 5
#   6 7 8 9 a b
#   c d e f g h
#   i j k l m n
#   o p q r s t
#   u v w x y z
#
# Placering av fordon:
#   horisontellt: A=2 B=3
#   vertikalt:    C=2 D=3
#
# Lösningar:
# 	Bilarna namnges i följden XABCDEFGHIJKLMNOPQR
# 	liten bokstav: vänster/uppåt
# 	stor bokstav:  höger/nedåt

class Car
	constructor : (ch,wh,@c) ->
	render      : ->
	move        : (d) ->

class RushHour extends Application
	classes    : -> [Car]
	reset      : ->
		super
	draw       : ->
	enter_cars : -> # Ad0sBwCoD569
	enter_move : -> # bbbEEEAfdccGGXXXXX
	begin      : ->
	backward   : (n=1) ->
	forward    : (n=1) ->
	end        : ->
app = new RushHour

"""
	a:"""
class Car
	constructor : (ch,wh,@c) ->
		index = "0123456789abcdefghijklmnopqrstuvwxyz".indexOf ch
		@i = index % 6
		@j = int index / 6
		[@w,@h] = wh

	render : ->
		fcc (@c+1) % 8
		rect 40+20*@i+2, 40+20*@j+2, 20*@w-4, 20*@h-4
		fc 0
		tcc (@c+1) % 8
		name = "XABCDEFGHIJKLMNOP"[@c]
		small = name.toLowerCase()
		text small, 50+20*@i,        50+20*@j
		text name,  50+20*(@i+@w-1), 50+20*(@j+@h-1)

	move : (d) -> # -1 eller +1
		if @w == 1 then @j += d
		if @h == 1 then @i += d

class RushHour extends Application
	classes : -> [Car]
	reset : ->
		super
		@enter_cars1 "Ad0sBwCoD569"
		@enter_move1 "bbbEEEAfdccGGXXXXX"
		@begin()

	draw : ->
		textAlign CENTER,CENTER
		bg 0
		sc()
		fc 0.5
		rect 40,40,120,120
		rect 160,80,40,20
		fc 1
		sc()
		for i in range 6
			text "012345"[i],30,50+20*i
			text "012345"[i],50+20*i,170
		for car in @cars
			car.render()

	enter_cars : -> @enter_cars1 @readText()
	enter_cars1 : (s) ->
		@cars = []
		@moves = ""
		@index = 0
		for ch in s
			if ch in "ABCD" then wh = {A:[2,1], B:[3,1], C:[1,2], D:[1,3]}[ch]
			else @cars.push new Car ch,wh,@cars.length

	enter_move : -> @enter_move1 @readText()
	enter_move1 : (s) ->
		@moves = @moves[...@index]
		@moves += s
		@forward s.length

	begin : -> @backward @index
	backward : (n=1) ->
		for i in range n
			if @index == 0 then return
			@index--
			@bothward "XABCDEFGHIJKLMNO","xabcdefghijklmno"
	forward : (n=1) ->
		for i in range n
			if @index >= @moves.length then return
			@bothward "xabcdefghijklmno","XABCDEFGHIJKLMNO"
			@index++
	end : -> @forward @moves.length - @index

	bothward : (a,b) ->
		i = a.indexOf @moves[@index]
		j = b.indexOf @moves[@index]
		if i >= 0 then @cars[i].move -1
		if j >= 0 then @cars[j].move +1

app = new RushHour "a"
"""
	c:
		app : "reset()|enter_cars()|enter_move()|begin()|backward()|forward()|end()" # |hint()|undo()
	e:
		RushHour : "https://en.wikipedia.org/wiki/Rush_Hour_(board_game)"



ID264 = # BlackBox2D :
	b:"""
# LOC:33 bg sc fc range # line [] length * / // % ** & | ^ ~ << >> + - > < == != <= >= int and or
#        for in if then else text textSize textAlign class extends constructor new @ super ->

class BlackBox2D extends Application
	reset : ->
		super
		@N = 10
		@SIZE = 20
		@index = 0
	up   : -> @index = (@index+1) %% 36
	down : -> @index = (@index-1) %% 36
	draw : ->
app = new BlackBox2D
"""
	a:"""
class BlackBox2D extends Application
	reset : () ->
		super
		@N = 10
		@SIZE = 20
		@index = 0
	up   : -> @index = (@index+1) %% 36
	down : -> @index = (@index-1) %% 36
	paint : (r,g,b,x,y,txt) ->
		fc r,g,b
		if txt? then text txt,x,y else circle x,y,5
	draw : ->
		sc()
		textSize 14
		textAlign CENTER,CENTER
		for i in range @N
			for j in range @N
				x = @SIZE/2 + @SIZE*i
				y = @SIZE/2 + @SIZE*j + 1
				res = @calc i,j
				if res == true       then @paint 0,1,0,x,y
				else if res == false then @paint 1,0,0,x,y
				else if res == 'NaN' then @paint 1,1,0,x,y,'?'
				else if res >= 100   then @paint 0,1,0,x,y,'..'
				else if res <= -100  then @paint 1,0,0,x,y,'..'
				else if res < 0      then @paint 1,0,0,x,y,-res
				else if res > 0      then @paint 0,1,0,x,y,res
				else                      @paint 1,1,0,x,y,res
	fix : (i,j) -> if j == 0 then ['NaN','NaN'] else [i//j, i%j]
	calc : (i,j) ->
		n = @N
		[a,b] = @fix i,j
		[i, i+j, i-j, i-5, j-6, j*n+i, i*n+j, (n-1-i)*n+n-1-j, (n-1-j)*n+n-1-i, (i-4)*(j-4), i*j, i*i+j*j, i**j, a, b, i%2, (i+j)%2, j&i, i|j, i^j, ~i, i<<j, j>>i, j&(2**i), i==j, i-j==1, i+j==9, i!=j, i>5, i<j, i<=j, i==3 and j==6, i==3 or j==6, (2<i<7) and (1<j<7), 4 <= dist(4.5,4.5,i,j) < 5, (i+j)%2==1][@index]

app = new BlackBox2D "a"
"""
	c:
		app : "reset()|up()|down()"
	e:
		Operatorer : "https://www.w3schools.com/jsref/jsref_operators.asp"
		BlackBox : "https://en.wikipedia.org/wiki/Black_box"

ID265 = # Shortcut
	b:"""
# LOC:65 bg fc sc range # %% * / + [] text textAlign textSize for in if then else return
#        {} and < != == push pop length constrain class extends constructor new @ super ->

class Shortcut extends Application
	reset : ->
		super
	draw : ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	mousePressed : (mx,my) ->
app = new Shortcut
"""
	a:"""
class Shortcut extends Application
	reset : ->
		super
		@W = 33
		@H = 25
		@seed = 0
		@level = 1
		@buttons = [[50,50,0],[150,50,0],[33,125,'/2'],[100,125,'+2'],[167,125,'*2'], [33,175,'undo'],[100,175,1],[167,175,'new']]
		@createGame()
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	draw : ->
		@buttons[0][2] = @a
		@buttons[1][2] = @b
		@buttons[6][2] = @level - @history.length
		bg 0.5
		textAlign CENTER,CENTER
		textSize 30
		sc()
		for [x,y,txt],i in @buttons
			if i in [0,1,6] then fc 0 else fc 1,1,0
			text txt,x,y
	newGame : ->
		if @level >= @history.length and @a == @b then d=1 else d=-1
		@level = constrain @level+d,1,16
		@createGame()
	createGame : ->
		@history = []
		@a = 1 + @randint 20
		q1 = [@a]
		q2 = []
		visited = {}
		visited[@a] = true
		expand = (n) ->
			if visited[n] then return
			visited[n] = true
			q2.push n
		for level in range @level
			for nr in q1
				expand nr+2
				expand nr*2
				expand nr/2 if nr%2==0
			q1 = q2
			q2 = []
		@b = @selectTarget q1 #[@randint(q1.length)]
	selectTarget : (lst) -> # within 1..1000, if possible
		bs = (x for x in lst when 1 <= x <= 1000)
		return bs[@randint(bs.length)] if bs.length > 0
		_.min lst
	undo : ->
		if @history.length == 0 then return
		@a = @history.pop()
	mousePressed : (mx,my) ->
		index = -1
		for [x,y,txt],i in @buttons
			if x-@W < mx < x+@W and  y-@H < my < y+@H
				index = i
		a = -1
		if index == 2 and @a % 2 == 0 then a = @a / 2
		if index == 3 then a = @a + 2
		if index == 4 then a = @a * 2
		if index == 5 then @undo()
		if index == 7 then @newGame()
		if a != -1
			@history.push @a
			@a = a

app = new Shortcut "a"

"""
	c:
		app : "reset()"

ID266 = # Complex
	b:"""
# LOC:80 bg fc sc range # * / + %% [] line circle text textAlign textSize for in if then else return int
#        {} dist _.isEqual and < != == push pop length constrain class extends constructor new @ super ->

class Complex extends Application
	reset : ->
		super
	draw : ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	mousePressed : (mx,my) ->
app = new Complex
"""
	a:"""
class Complex extends Application
	reset : ->
		super
		@RADIUS = 25
		@buttons = [[30,130,'m'],[70,170,'*i'],[130,170,'*2'],[170,130,'+1'],[30,30,'undo'], [170,30,'new']]
		@seed = 0
		@level = 1
		@createGame()
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	gr : ->
		sc 1,1,1,0.5
		for i in range 21
			line 0, 10 * i, 200, 10 * i
			line 10 * i, 0, 10 * i, 200
		sc 1,1,1
		line 100,0, 100,200
		line 0,100, 200,100
	draw : ->
		@buttons[4][2] = @level - @history.length
		bg 0
		@gr()
		textAlign CENTER,CENTER
		textSize 25
		sc()
		fc 1,0,0
		circle 100+10*@b[0], 100-10*@b[1], 5
		fc 0,1,0
		circle 100+10*@a[0], 100-10*@a[1], 4
		for [x,y,txt],i in @buttons
			fc 1,1,0,0.4
			circle x,y,@RADIUS
			fc 1,1,0
			text txt,x,y
	newGame : ->
		if @level >= @history.length and _.isEqual(@a,@b) then d=1 else d=-1
		@level = constrain @level+d,1,16
		@createGame()
	createGame : ->
		@history = []
		@a = [-10 + @randint(20), -10 + @randint(20)]
		q1 = [@a]
		q2 = []
		visited = {}
		visited[@a] = true
		expand = (n) ->
			if visited[n] then return
			if n[0]*n[0] + n[1]*n[1] > 1000 then return
			visited[n] = true
			q2.push n
		for level in range @level
			for [x,y] in q1
				expand [y,x]
				expand [-y,x]
				expand [2*x,2*y]
				expand [x+1,y]
			q1 = q2
			q2 = []
		@b = @selectTarget q1
	selectTarget : (lst) -> # within 21x21 window, if possible
		bs = ([x,y] for [x,y] in lst when -10 <= x <= 10 and -10 <= y <= 10)
		return bs[@randint(bs.length)] if bs.length > 0
		_.min lst, ([x,y]) -> dist 0,0,x,y
	undo : ->
		if @history.length == 0 then return
		@a = @history.pop()
	mousePressed : (mx,my) ->
		index = -1
		for [x,y,txt],i in @buttons
			if dist(mx,my,x,y) < @RADIUS then index = i
		[x,y] = @a
		a = []
		if index == 0 then a = [y,x]
		if index == 1 then a = [-y,x]
		if index == 2 then a = [2*x,2*y]
		if index == 3 then a = [x+1,y]
		if index == 4 then @undo()
		if index == 5 then @newGame()
		if a.length != 0
			@history.push @a
			@a = a

app = new Complex "a"

"""
	c:
		app : "reset()"
	e:
		"Komplexa tal" : "http://www.matteboken.se/lektioner/matte-4/komplexa-tal/rakna-med-komplexa-tal"

ID267 = # RubikCube
	b:"""
# LOC:121 bg fc sc range # [] push pop concat length if then else constrain for in int quad
#         text textSize textAlign dist + - * / class extends constructor new @ super ->

class RubikCube extends Application
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
	toggleNumbers : ->
app = new RubikCube
"""
	a:"""
class RubikCube extends Application
	newGame : ->
		@level = @level + if @level==@history.length then 1 else -1
		@level = constrain @level,0,100
		@history = []
		@board = []
		@memory = -1
		@board.push i for i in range 54
		for i in range @level
			@op @randint(6), 2*@randint(2)-1
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	undo : ->
		if @history.length==0 then return
		@memory = -1
		[k,d] = @history.pop()
		@op k,-d
	turn : (a,b) -> # a,b in 0..54
		if int(a/9) != int(b/9) then return
		d = (a%9 - b%9)/2
		if d in [-3,3] then d = -d/3
		if d not in [-1,1] then return
		k = int a/9
		@op k,d
		@history.push [k,d]
	op : (k,d) -> # 0..5, [-1,1]
		tiles = [
			[0,1,42,41,40,   2,3,9,16,15,    4,5,20,19,18,   6,7,31,30,29]
			[9,10,40,39,38,  11,12,49,48,47, 13,14,22,21,20, 15,16,4,3,2]
			[18,19,6,5,4,    20,21,15,14,13, 22,23,47,46,45, 24,25,33,32,31]
			[27,28,36,43,42, 29,30,0,7,6,    31,32,18,25,24, 33,34,45,52,51]
			[36,37,51,50,49, 38,39,11,10,9,  40,41,2,1,0,    42,43,29,28,27]
			[45,46,24,23,22, 47,48,13,12,11, 49,50,38,37,36, 51,52,27,34,33]]
		arr = tiles[k]
		carr = (@board[i] for i in arr)
		limit = if d==1 then 5 else 15
		carr = carr[limit..20].concat carr[0..limit]
		@board[arr[i]] = carr[i] for i in range 20
	reset : ->
		super
		@board = []
		@memory = -1
		@level = -1
		@history = []
		@buttons = [[40,140,@level], [160,140,"new"]]
		@showNumbers = false
		@seed = 0
		@newGame()
	colorize : (index,board) ->
		k = int board[index] / 9
		[r,g,b] = [[1,1,1],[0,0,1],[1,0,0],[0,1,0],[0.97, 0.57, 0],[1,1,0]][k]
		fc r,g,b
	textColorize : (index,board) -> fc [0,1,1,0,0,0][int board[index] / 9]
	rita : (x,y,index,tilt,self) ->
		a = 16
		b = 9
		self.colorize index,self.board
		sc 0
		if tilt == 0 then quad x-a,y, x,y-b, x+a,y, x,y+b
		if tilt == 1 then quad x+a/2,y-b/2, x-a/2,y-3*b/2, x-a/2,y+b/2, x+a/2,y+3*b/2
		if tilt == 2 then quad x-a/2,y-b/2, x+a/2,y-3*b/2, x+a/2,y+b/2, x-a/2,y+3*b/2
		self.textColorize index,self.board
		sc()
		if self.showNumbers then text self.board[index],x,y
		if self.memory? and index == self.memory then circle x,y,4
		false
	sense : (x,y,index,tilt,self) -> dist(x,y,mouseX,mouseY) < 9
	draw : ->
		bg 0
		textSize 12
		textAlign CENTER,CENTER
		@traverse @rita
		fc 1,1,0
		textSize 20
		@buttons[0][2] = @level - @history.length
		text txt,x,y for [x,y,txt] in @buttons
	traverse : (f) ->
		a = 16
		b = 9
		y0 = 60
		for index in range 54
			side = int index / 9
			if side==0 # vit
				i = [-1,-1,-1,0,1,1,1,0,0][index % 9]
				j = [0,1,2,2,2,1,0,0,1][index % 9]
				if f 100+a*(i+j-1),y0+b*(i-j+1), index, 0, @ then return index
			if side==1 # blå
				i = [-1,-1,-1,0,1,1,1,0,0][index % 9]
				j = [0,1,2,2,2,1,0,0,1][index % 9]
				if f 100+a*(i+4.5),y0+b*(2*j+i-3.5), index, 1, @ then return index
			if side==2 # röd
				i = [-1,0,1,1,1,0,-1,-1,0][index % 9]
				j = [0,0,0,1,2,2,2,1,1][index % 9]
				if f 100+a*(i+1.5),y0+b*(2*j-i+2.5), index, 2, @ then return index
			if side==3 # grön
				i = [-1,-1,-1,0,1,1,1,0,0][index % 9]
				j = [2,1,0,0,0,1,2,2,1][index % 9]
				if f 100+a*(i-1.5),y0+b*(2*j+i+2.5), index, 1, @ then return index
			if side==4 # orange
				i = [-1, 0, 1, 1, 1, 0,-1,-1, 0][index % 9]
				j = [ 2, 2, 2, 1, 0, 0, 0, 1, 1][index % 9]
				if f 100+a*(i-4.5),y0+b*(2*j-i-3.5), index, 2, @ then return index
			if side==5 # gul
				i = [ 1, 1, 1, 0,-1,-1,-1, 0, 0][index % 9]
				j = [ 0, 1, 2, 2, 2, 1, 0, 0, 1][index % 9]
				if f 100+a*(i+j-1),y0+b*(i-j+13), index, 0, @ then return index
		-1
	mousePressed : (mx,my) ->
		for [x,y,txt],i in @buttons
			if dist(mx,my,x,y) < 10
				if i==0 then return @undo()
				if i==1 then return @newGame()
		if @memory == -1
			@memory = @traverse @sense
			if @memory != -1
				if @memory%9==8 then @memory = -1
		else
			index = @traverse @sense
			if index != -1 and index%9 != 8 then @turn @memory,index
			@memory = -1
	toggleNumbers : ->
		@showNumbers = not @showNumbers

app = new RubikCube "a"
"""
	c:
		app : "reset()|toggleNumbers()"
	e:
		"RubikCube" : "https://sv.wikipedia.org/wiki/Rubiks_kub"

ID268 = # ForthHaiku
	b:"""
# LOC:45 fc range # if then else [] push pop _.last length split
#        rect for in parseFloat class extends constructor new @ super ->
# Hantera dessa kommandon: x y < > = + - * sq and floor %

class ForthHaiku extends Application
	reset : ->
		super
	resolution : (@n,@size) ->
	nextExample : ->
	prevExample : ->
app = new ForthHaiku
"""
	a:"""
class ForthHaiku extends Application
	draw : ->
		digit = (bool) -> if bool then 1 else 0
		n = @n
		size = @size
		stack = []
		dict = {}
		dict['x'] = -> stack.push x / n
		dict['y'] = -> stack.push y / n
		dict['<'] = -> stack.push(digit stack.pop() > stack.pop())
		dict['>'] = -> stack.push(digit(stack.pop() < stack.pop()))
		dict['+'] =  -> stack.push stack.pop() + stack.pop()
		dict['-'] =  -> stack.push -stack.pop() + stack.pop()
		dict['*'] =  -> stack.push stack.pop() * stack.pop()
		dict['sq'] =  ->
			temp = stack.pop()
			stack.push temp * temp
		dict['%'] =  ->
			a = stack.pop()
			b = stack.pop()
			stack.push b % a
		dict['floor'] = -> stack.push floor stack.pop()
		dict['and'] = -> #  pga kortslutning
			a = stack.pop() != 0
			b = stack.pop() != 0
			stack.push digit a and b
		examples = ['1','1 1','0 1','0.5 0.5 0.5','1 1 1','x','x y','x y >','x 0.5 >','x 0.5 - sq y 0.5 - sq + 0.25 <','x 8 * floor y 8 * floor + 2 %','x 0.5 < y 0.5 <','x 0.5 < y 0.5 < and']
		arr = examples[@example % examples.length].split ' '
		sc()
		for x in range n
		  for y in range n
		    stack = []
		    for cmd in arr
		      if dict[cmd] then dict[cmd]()
		      else stack.push parseFloat cmd
		    stack.push 0 for i in range 3-stack.length
		    fc stack[0], stack[1], stack[2]
		    rect size * x, size * y, size, size
	reset : ->
		super
		@resolution 10,10
		@example = 0
	resolution : (@n,@size) ->
	nextExample : -> @example++
	prevExample : -> @example--

app = new ForthHaiku "a"
"""
	c:
		app : "reset()|resolution 10,10|resolution 20,5|resolution 50,2|resolution 100,1|resolution 200,1|nextExample()|prevExample()"
	e:
		"ForthHaiku" : "http://forthsalon.appspot.com"
