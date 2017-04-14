ID260 = # Nim:
	b:"""		
# LOC:62 bg fc sc circle # * + - ^ if then else _.isEqual return <  
#        constrain text textAlign textSize class extends constructor new @ super ->

class Nim extends Application
	reset : -> 
		super
		@seed = 0
	draw  : -> super
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
	reset : -> super
	draw  : -> super
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
		@memory = null			
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
			if @memory == null
				@memory = [i,j]
			else
				if not _.isEqual @memory,[i,j] then @move @memory,[i,j]
				@memory = null
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
	reset : -> super
	draw  : -> super
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
	constructor : (@name) ->
		super @name
		if @cars then @cars = (_.create(Car.prototype, car) for car in @cars)	
	reset      : -> super
	draw       : -> super
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

	constructor : (@name) ->
		super @name
		if @cars then @cars = (_.create(Car.prototype, car) for car in @cars)

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

ID264 = # RubikSquare:
	b:"""		
# LOC:85 bg fc sc circle # [] push length int .. + - * / % %% == < & << if then else rectMode rect push pop not "" split join
#        parseInt _.isEqual text textAlign textSize rectMode while and constrain class extends constructor new @ super ->
# OBS: Du bör använda variabeln rubikSquareData.

class RubikSquare extends Application
	reset : -> 
	draw : ->
	mousePressed : (mx,my) ->
app = new RubikSquare   
"""
	a:"""
class RubikSquare extends Application
	reset : -> 
		super
		@BUTTONS = [[4,3,3,3],[10,3,3,3],[16,3,3,3], [4,9,3,3],[10,9,3,3],[16,9,3,3], [4,15,3,3],[10,15,3,3],[16,15,3,3], [4,19,3,1],[10,19,3,1],[16,19,3,1]]
		@seed = 0
		@level = 1
		@history = []
		@memory = -1
		@createGame()

	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

	newGame : ->
		if @level >= @history.length and _.isEqual @board,[0,1,2,0,1,2,0,1,2] then d=1 else d=-1
		@level = constrain @level+d,1,6
		@history = []
		@createGame()

	createGame : ->
		bigstring = rubikSquareData[@level]
		arr = bigstring.split ' '
		s = arr[@randint(arr.length)]
		@board = (parseInt(ch) for ch in s)

	move : (m,d,board) ->
		[i,j,k] = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]][m]
		bd = board[..]
		[a,b,c] = [bd[i],bd[j],bd[k]]
		if d==0 then [a,b,c] = [b,c,a] else [a,b,c] = [c,a,b]
		[bd[i],bd[j],bd[k]] = [a,b,c]
		bd

	draw : ->
		bg 0
		textAlign CENTER,CENTER
		textSize 20
		rectMode CENTER,CENTER
		for c,i in @board
			sc 1
			if c==0 then fc 1,0,0
			if c==1 then fc 0,1,0
			if c==2 then fc 0,0,1
			[x,y,w,h] = @BUTTONS[i]
			rect 10*x,10*y,20*w,20*h
		if @memory >= 0 
			[x,y,w,h] = @BUTTONS[@memory]
			fc 0
			sc()
			circle 10*x,10*y,10
		[x,y,w,h] = @BUTTONS[10]
		fc 1,1,0
		sc()
		text @level-@history.length,10*x,10*y
		if @history.length > 0
			[x,y,w,h] = @BUTTONS[9]
			text "undo",10*x,10*y
			[x,y,w,h] = @BUTTONS[11]
			text "new",10*x,10*y

	undo : -> 
		if @history.length == 0 then return
		@board = @history.pop()
		@memory = -1

	mousePressed : (mx,my) ->
		index = -1
		for [x,y,w,h],i in @BUTTONS
			if x-w <= mx/10 <= x+w and y-h <= my/10 <= y+h then index = i
		if 0 <= index < 9
			if @memory == -1 
				@memory = index 
			else if @memory == index 
				@memory = -1
			else
				hash = 
					"01":[0,1], "02":[0,0], "10":[0,0], "12":[0,1], "20":[0,1], "21":[0,0]
					"34":[1,1], "35":[1,0], "43":[1,0], "45":[1,1], "53":[1,1], "54":[1,0]
					"67":[2,1], "68":[2,0], "76":[2,0], "78":[2,1], "86":[2,1], "87":[2,0]
					"03":[3,1], "06":[3,0], "30":[3,0], "36":[3,1], "60":[3,1], "63":[3,0]
					"14":[4,1], "17":[4,0], "41":[4,0], "47":[4,1], "71":[4,1], "74":[4,0]
					"25":[5,1], "28":[5,0], "52":[5,0], "58":[5,1], "82":[5,1], "85":[5,0]
				pair = hash["" + @memory + index] 
				if pair
					[m,d] = pair
					@history.push @board[..]
					@board = @move m,d,@board
					@memory = -1
		if index==9 then @undo()
		if index==11 then @newGame()

app = new RubikSquare "a"   
		
"""
	c:
		app : "reset()"

ID265 = # Shortcut
	b:"""		
# LOC:65 bg fc sc range # %% * / + [] text textAlign textSize for in if then else return
#        {} and < != == push pop length constrain class extends constructor new @ super ->

class Shortcut extends Application
	reset : -> super
	draw : -> super
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
	reset : -> super
	draw : -> super
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