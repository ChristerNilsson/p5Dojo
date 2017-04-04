#####################################
	ch11 = # "LB: miscellaneous" :
#####################################

		RandomDice :
			b: """
# LOC:19 bg fc sc circle # % %% / * + << & [] Math.floor Math.sin   
#        for in class extends constructor new @ super ->

class RandomDice extends Application
	reset : -> 
		super
		@seed = 0
	draw : -> super
	mousePressed : (mx,my) ->
	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++
randomdice = new RandomDice "b"
"""
			a:"""
class RandomDice extends Application
	reset : -> 
		super
		@seed = 0
		@radius = 20
		@bits = [0,1,24,25,90,91,126]
		@xy = [22,11,12,13,31,32,33]
		@throw()
	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++
	throw : -> @value = 1 + @randint 6
	mousePressed : (mx,my) -> @throw()
	draw : -> 
		bg 1
		sc 1
		for xy,i in @xy
			x = int xy/10
			y = xy % 10
			if @bits[@value] & 1<<i then circle 50*x,50*y,@radius 			

randomdice = new RandomDice "a"
"""
			c:
				randomdice : "reset()"

		GoldenStar:
			b: """
# LOC:23 bg fc range # for in triangle translate rotate cos sin class extends constructor new @ super ->

class GoldenStar extends Application
	reset : -> super
	draw  : -> super
	n     : (d) -> 
	outer : (d) ->
	inner : (d) ->

star = new GoldenStar "b"
"""
			a: """
class GoldenStar extends Application
	reset : ->
		super
		@_x = 100
		@_y = 100
		@_n = 4
		@_outer = 100
		@_inner = 25
	n : (d) -> @_n = constrain @_n+d,3,12
	outer : (d) -> @_outer = constrain @_outer+d, 0, 100
	inner : (d) -> @_inner = constrain @_inner+d, 0, 100
	draw : ->
		bg 0
		translate @_x,@_y
		v = TWO_PI/@_n
		rotate -PI/2
		x1 = @_inner * cos v/2
		y1 = @_inner * sin v/2
		for i in range @_n
			fc 1,1,0
			triangle 0,0, @_outer,0, x1,y1
			fc 1,0.7,0
			triangle 0,0, @_outer,0, x1,-y1
			rotate v

star = new GoldenStar "a"
"""
			c:
				star : "reset()|n -1|n +1|outer -1|outer +1|inner -1|inner +1"
		
		Polygon:
			b:"""
# LOC:23 bg sc range # line for in cos sin radians class extends constructor new @ super ->

class Turtle
	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->
	fd : (d) ->
	rt : (a) ->

class Polygon extends Application
	reset      : -> super
	draw       : -> super
	antalSidor : (d) ->
	antalSteg  : (d) -> 

polygon = new Polygon "b"
"""
			a:"""
class Turtle
	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->
	fd : (d) ->
		dx = d*cos radians @dir
		dy = d*sin radians @dir
		sc @r,@g,@b
		line @x,@y,@x+dx,@y+dy
		@x += dx
		@y += dy
	rt : (a) ->
		@dir +=a

class Polygon extends Application
	reset : ->
		super
		@n = 6
		@steg = 60

	draw : ->
		t = new Turtle()
		bg 0
		for i in range @n
			t.fd @steg
			t.rt 360/@n

	antalSidor : (d) -> @n += d
	antalSteg : (d) -> @steg += d

polygon = new Polygon "a"
"""
			c:
				polygon : "reset()|antalSidor -1|antalSidor +1|antalSteg -1|antalSteg +1|"




		Alphanumeric:
			b:"""
# LOC:29 bg sc fc range circle # for in & + - * ^ ** %% [] length splice dist
#        push if then else class extends constructor new @ super ->

class AlphaNumeric extends Application
	reset : -> super
	draw  : -> super
	add   : -> 
	del   : ->
	left  : -> 
	right : ->
	mousePressed : (mx,my) ->

alpha = new AlphaNumeric "b"
"""
			a:"""
class AlphaNumeric extends Application
	reset : -> 
		super
		@pattern = [[4,12,4,4,4,4,14], [14,17,1,2,4,8,31], [14,17,17,31,17,17,17],[30,17,17,30,17,17,30]]
		@index = 0
		@radius = 8
		@distance = 20
	draw : ->
		bg 0
		sc()
		for index,j in @pattern[@index]
			y =  40+@distance*j
			for i in range 5
				if index & 1<<i then fc 0,1,0 else fc 0,0.3,0
				x = 140-@distance*i
				circle x,y,@radius
	add   : -> 
		@pattern.push [0,0,0,0,0,0,0]
		@index = @pattern.length - 1
	del   : -> @pattern.splice @index, 1
	left  : -> @index = (@index - 1) %% @pattern.length
	right : -> @index = (@index + 1) %% @pattern.length

	mousePressed : (mx,my) ->
		for index,j in @pattern[@index]
			y =  40+@distance*j
			for i in range 5
				x = 140-@distance*i
				if dist(x,y,mx,my) < @radius
					@pattern[@index][j] ^= 1<<i

alpha = new AlphaNumeric "a"
"""
			c:
				alpha: "reset()|add()|del()|left()|right()"
			e:
				binärt : "http://www.matteboken.se/lektioner/matte-1/tal/talsystem"
				hexadecimalt : "http://www.matteguiden.se/matte-1/grunder/binara-och-hexadecimala-tal"
				'5x7 matris' : "https://www.google.se/search?q=5x7+matrix&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjWjYen5OrSAhXhJ5oKHf8BBmgQ_AUIBigB&biw=1310&bih=945&dpr=1.1"

		Korsord :
			b: """
# LOC:29 bg fc sc @readText # / % + * != and text textAlign textSize if then for in 
#        "" split join _.filter class constructor new @ extends super [] length
# Mata in t ex b..l och få ut bill samt boll.

class Korsord extends Application
	reset : -> super
	draw  : -> super
	enter : -> 
korsord = new Korsord "b"
"""
			a:"""
class Korsord extends Application
	reset : -> 
		print "reset"
		super
		@found = ""
		@pattern = ''
	draw : -> 
		n = 15
		bg 0
		textAlign LEFT,TOP
		textSize 12
		fc 1,1,0
		sc()
		for word,i in @found.split " "
			x = int i / n
			y = i % n
			text word,5+200/4*x,200*y/n
	match : (word,pattern) ->
		for letter,i in pattern
			if letter != '.' and letter != word[i] then	return false
		true
	enter : -> 
		words = ordlista.split " "
		@pattern = @readText()
		@found = [] 
		for w in words
			if w.length == @pattern.length and @match w,@pattern then @found.push w
		#@found = _.filter words, (w) -> w.length == @pattern.length and @match w,@pattern
		@found = @found.join " "

korsord = new Korsord "a"
"""
			c:
				korsord : "reset()|enter()"

			e:
				'_.some' : "http://underscorejs.org/#some"
				'_.filter' : "http://underscorejs.org/#filter"
				'_.countBy' : "http://underscorejs.org/#countBy"

		Nian :
			b:"""
# LOC:35 bg fc sc # [] push "" split indexOf reduce + * ** / % > & text textSize textAlign  
#				 for in of {} _.countBy and if then class constructor new @ extends super 
# Bilda ord med fyra till nio bokstäver. Den mittersta bokstaven måste ingå. Prova med "aaefkrrtu"

class Nian extends Application
	reset : -> super
	draw  : -> super
	enter : ->

nian = new Nian "b"
"""
			a:"""
class Nian extends Application
	reset : ->
		super
		@found = ""
	draw : -> 
		n = 15
		bg 0
		textAlign LEFT,TOP
		textSize 12
		fc 1,1,0
		sc()
		for word,i in @found.split " "
			x = int i / n
			y = i % n
			text word,5+200/4*x,200*y/n
	bits : (word) -> word.split("").reduce ((acc,ch) -> acc|(2 ** "abcdefghijklmnopqrstuvwxyzåäö".indexOf ch)), 0
	ok : (f1,f2) ->
		for ch, f of f2
			if f > f1[ch] then return false
		true
	enter : ->
		words = ordlista.split " "
		patterns = (@bits word for word in words)
		@letters = @readText()
		mandatory = @letters[4]
		@found = []
		p = @bits @letters
		letters1 = @letters.split ""
		freq1 = _.countBy letters1
		for pattern,i in patterns
			if (p & pattern) == pattern
				letters2 = words[i].split ""
				freq2 = _.countBy letters2
				if @ok(freq1,freq2) and mandatory in letters2 then @found.push words[i]
		@found = @found.join " "

nian = new Nian "a"
"""
			c:
				nian : "reset()|enter()"

			e:
				Nian : "http://svenska-apps.se/iphone-ipad/underhallning/svd-nian-babqpg.html"
				'_.countBy' : "http://underscorejs.org/#countBy"
				reduce : "https://coffeescript-cookbook.github.io/chapters/arrays/reducing-arrays"



		ColorPair :
			b: """
# LOC:41 fc circle # [] .. push dist length splice _.isEqual colorMode HSB
#        for in class extends constructor new @ super ->

class ColorPair extends Application
	reset : -> 
		super
		@seed = 0
	draw : -> super
	mousePressed : (mx,my) ->
	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++
colorpair = new ColorPair "b"
"""
			a:"""
class ColorPair extends Application
	reset : -> 
		super
		@seed = 0
		@level = 0
		@changeLevel 1
		@radius = 40

	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++

	draw : -> 
		bg 1
		sw 2
		sc 1,1,1,0.5
		colorMode HSB
		for [x,y,c] in @circles
			fill color c,100,100,0.5
			circle x,y,@radius
		
	mousePressed : (mx,my) ->
		hitlist = []
		for [x,y,c],i in @circles
			if dist(x,y,mx,my) < @radius then hitlist.push i 
		if hitlist.length == 1
			i = hitlist[0]
			circle = @circles[i]
			if @memory == -1
				@memory = circle[2]
				@circles.splice i,1
			else if _.isEqual(@memory, circle[2]) 
				@memory = -1
				@circles.splice i,1
				if @circles.length == 0 then @changeLevel 1
			else
				@changeLevel -1
		else
			@changeLevel -1

	changeLevel : (d) ->
		@memory = -1
		@level = constrain @level+d, 1, 20
		@circles = []
		for i in range @level
			c = int i * 360 / @level
			@circles.push [@randint(200), @randint(200), c]
			@circles.push [@randint(200), @randint(200), c]

colorpair = new ColorPair "a"
"""
			c:
				colorpair : "reset()"
			e: 
				ColorPair : "https://christernilsson.github.io/ColorPair"
		Kalkylator:
			b:"""
# LOC:46 bg sc fc range @readText # + - * / of {} in [] shift unshift 
#        text textSize textAlign length for Math.sqrt Math.PI splice 
#        parseFloat "" split class extends constructor new @ super ->
# TIPS! Börja med de fyra räknesätten. 
#       @words ska kunna utökas med ":". T ex ": sq dup *"
#       Definiera t ex invers, distans och parallella motstånd

class Kalkylator extends Application
	reset : -> super
	draw  : -> super
	chs   : -> # ( n -- n ) 
	swap  : -> # ( a b -- b a )
	drop  : -> # ( n -- ) 
	dup   : -> # ( n -- n n )
	sqrt  : -> # ( n -- n )
	clr   : -> # ( a b -- )
	pi    : -> # ( -- n)
	enter : -> # inmatning från textrutan under kommandolistan.

kalkylator = new Kalkylator "b"
"""
			a:"""
class Kalkylator extends Application
	reset : ->
		super
		@stack = [0,1,2,3]
		@words = {"sq":["dup","*"]}
	draw : ->
		bg 0
		sc()
		textSize 32
		textAlign RIGHT, BOTTOM
		fc 1,0,0
		for value,i in _.first @stack,5
			s = "" + value
			text s[0..9],190, 200 - i*40

	shift : -> @stack.shift()
	over : -> @stack.splice(1,1)[0]
	unshift : (item) -> @stack.unshift item 
	chs : -> @unshift -@shift()
	swap : -> [@stack[0],@stack[1]] = [@stack[1],@stack[0]]
	drop : -> @shift()
	dup : -> @unshift @stack[0]
	sqrt : -> @unshift Math.sqrt @shift()
	clr : -> @stack = []
	pi : -> @unshift Math.PI

	execute : (arr) ->
		for cmd in arr
			if cmd=="" then continue
			if cmd=='+' then @unshift @shift() + @shift()
			else if cmd=='*' then @unshift @shift() * @shift()
			else if cmd=='/' then @unshift @over() / @shift()
			else if cmd=='-' then @unshift @over() - @shift()
			else if cmd=='chs' then @chs()
			else if cmd=='swap' then @swap()
			else if cmd=='drop' then @drop()
			else if cmd=='dup' then @dup()
			else if cmd=='sqrt' then @sqrt()
			else if cmd=='clr' then @clr()
			else if cmd=='pi' then @pi()
			else if cmd of @words then @execute @words[cmd]
			else @stack.unshift eval cmd

	enter : ->
		commands = @readText()
		if commands=="" then return
		arr = commands.split ' '
		if arr[0]==':' then @words[arr[1]] = arr[2..]
		else @execute arr

kalkylator = new Kalkylator "a"
"""
			c:
				kalkylator : "reset()|chs()|swap()|drop()|dup()|sqrt()|clr()|pi()|enter()"
			e:
				parseInt : "https://www.w3schools.com/jsref/jsref_parseint.asp"
				stack : "https://sv.wikipedia.org/wiki/Stack_(datastruktur)"
				split : "https://coffeescript-cookbook.github.io/chapters/strings/splitting-a-string"
				"Omvänd Polsk Notation" : "https://sv.wikipedia.org/wiki/Omv%C3%A4nd_polsk_notation"
				RPN : "https://en.wikipedia.org/wiki/Reverse_Polish_notation"
				"HP-35" : "https://neil.fraser.name/software/hp-35"
				"Forth Haiku" : "http://forthsalon.appspot.com/word-list"

		Hex:
			b:"""
# LOC:49 bg fc sc range # + * - % < == != dist for in [] push pop length quad circle
#        if then else text textAlign textSize class extends constructor new @ super ->

class Hex extends Application
	reset : -> super
	draw : ->
	newGame : ->
	undo : ->
	mousePressed : (mx,my) ->
hex = new Hex "b"
"""

			a:"""
class Hex extends Application
	reset : ->
		super
		@a = 6
		@b = 5
		@c = 3
		@newGame()

	mousePressed : (mx,my) ->
		index = -1
		for i in range -5,6
			for j in range -5,6
				x = 100 + i*(2*@a+1) + @a*j
				y = 100 + j*(2*@b+@c-1)
				if dist(x,y,mx,my) < 7 then index = 11*(j+5)+i+5
		if index >= 0 and @board[index] == 0
			@history.push index
			n = @history.length
			if n % 2 == 0 then n = -n 
			@board[index] = n 

	newGame : ->
		@history = []
		@board = []
		for i in range 11*11
			@board.push 0

	undo : ->
		if @history.length > 0
			index = @history.pop()
			@board[index] = 0

	draw : ->
		bg 0.5
		textAlign CENTER,CENTER
		textSize 9
		for i in range -5,6
			for j in range -5,6
				index = 11*(j+5)+i+5
				x = 100+i*(2*@a+1) + @a*j
				y = 100+j*(2*@b+@c-1)
				bc = @b+@c
				sc 0,1,0
				fc 0,1,0
				quad x,y-bc, x,y+bc, x-@a,y+@c, x-@a,y-@c
				quad x,y-bc, x,y+bc, x+@a,y+@c, x+@a,y-@c
				n = @board[index]
				if n != 0
					if n>0 then fc(1) else fc(0)
					circle x,y,6
					sc()
					if n>0 then fc(0) else fc(1)
					text abs(n),x,y

hex = new Hex "a"
"""
			c:
				hex : "reset()|newGame()|undo()"
			e: 
				Hex : "https://en.wikipedia.org/wiki/Hex_(board_game)"

		"Nand2Tetris ALU" :
			b: """
# LOC:63 sc fc sw range # text textAlign textSize class extends constructor new @ super ->
#        point quad dist for in if then else << - -- + ++ * != & ^ ~ split
# Se länken Nand2Tetris, sidan 36, för mer information!

class ALU extends Application
	reset : -> super
	draw  : -> super
	mousePressed : (mx,my) ->	
alu = new ALU "b"
"""
			a:"""
class ALU extends Application
	reset : -> 
		super
		@x = 3
		@y = 5
		@flags = 0
		@buttons = [[5,1],[7,1],[9,1],[11,1],[13,1],[15,1],[3,3],[5,3],[15,3],[17,3]]

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
			[x,y] = @buttons[i]
			fc 1,0,0
			circle 10*x,10*y,10
			if @flags & 1<<i then fc 1 else fc 0.5
			text flags[i],10*x,10*y
		for ch,i in "-+-+"
			[x,y] = @buttons[6+i]
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
		for button,i in @buttons
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

alu = new ALU "a"
"""
			c:
				alu : "reset()"
			e:
				Nand2Tetris : "http://www.nand2tetris.org/chapters/chapter%2002.pdf"

		RushHour :
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

rushHour = new RushHour "b"

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

rushHour = new RushHour "a"
"""
			c:
				rushHour : "reset()|enter_cars()|enter_move()|begin()|backward()|forward()|end()" # |hint()|undo()
			e:
				RushHour : "https://en.wikipedia.org/wiki/Rush_Hour_(board_game)"

		RubikSquare:
			b:"""		
# LOC:85 bg fc sc circle # [] push length int .. + - * / % %% == < & << if then else rectMode rect push pop not "" split join
#         parseInt _.isEqual text textAlign textSize rectMode while and constrain class extends constructor new @ super ->
# OBS: Du bör använda variabeln rubikSquareData.

class RubikSquare extends Application
	reset : -> 
	draw : ->
	mousePressed : (mx,my) ->
rubiksquare = new RubikSquare "b"   
"""
			a:"""
class RubikSquare extends Application
	reset : -> 
		super
		@seed = 0
		@size = 30
		@level = 1
		@buttons = [[4,3,3,3],[10,3,3,3],[16,3,3,3], [4,9,3,3],[10,9,3,3],[16,9,3,3], [4,15,3,3],[10,15,3,3],[16,15,3,3], [4,19,3,1],[10,19,3,1],[16,19,3,1]]
		@history = []
		@memory = -1
		@createGame()

	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++

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
			[x,y,w,h] = @buttons[i]
			rect 10*x,10*y,20*w,20*h
		if @memory >= 0 
			[x,y,w,h] = @buttons[@memory]
			fc 0
			sc()
			circle 10*x,10*y,10
		[x,y,w,h] = @buttons[10]
		fc 1,1,0
		sc()
		text @level-@history.length,10*x,10*y
		if @history.length > 0
			[x,y,w,h] = @buttons[9]
			text "undo",10*x,10*y
			[x,y,w,h] = @buttons[11]
			text "new",10*x,10*y

	undo : -> 
		if @history.length == 0 then return
		@board = @history.pop()
		@memory = -1
		#@draw()

	mousePressed : (mx,my) ->
		index = -1
		for [x,y,w,h],i in @buttons
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

rubiksquare = new RubikSquare "a"   
		
"""
			c:
				rubiksquare : "reset()"


		Asserts:
			b:"""
# Här kan du se några klargörande exempel.
# Om de två parametrarna till assert är olika, skrivs de ut till console.
# Du kan prova egna asserts här. Kontrollera med F12.

# + * ** Prioritet
assert 2 + 3 * 4  , 14   
assert 4 * 2 ** 3 , 32 

# % Resten vid heltalsdivision
assert  2 % 2 ,  0
assert  1 % 2 ,  1
assert  0 % 2 ,  0
assert -1 % 2 , -1    
assert -2 % 2 , -0      

# %% Resten vid heltalsdivision. Klarar även negativa tal.
assert  2 %% 2 , 0
assert  1 %% 2 , 1
assert  0 %% 2 , 0   
assert -1 %% 2 , 1  
assert -2 %% 2 , 0 
 
# []
assert 7 in [7,8]                     , true
assert (i for i in [7,8])             , [7,8]  
assert ([item,i] for item,i in [7,8]) , [[7,0],[8,1]]   
assert (x*x for x in [3,4,5])         , [9,16,25]   

# {}
assert 'b' of {a:7,b:8}                       , true      
assert (key for key of {a:7,b:8})             , ['a','b']   
assert ([key,item] for key,item of {a:7,b:8}) , [['a',7],['b',8]]    

# & | ^ ~ Bit operationer
assert [0&0, 0&1, 1&0, 1&1] , [0,0,0,1] 
assert [0|0, 0|1, 1|0, 1|1] , [0,1,1,1] 
assert [0^0, 0^1, 1^0, 1^1] , [0,1,1,0] 
assert [~0, ~1, ~2, ~3]     , [-1,-2,-3,-4] 

# lerp
assert  8 , lerp 10,12,-1
assert 10 , lerp 10,12,0
assert 11 , lerp 10,12,0.5
assert 12 , lerp 10,12,1
assert 14 , lerp 10,12,2

# range
assert [0,1,2,3,4,5,6,7,8,9]  , range 10
assert [0,1,2,3,4]            , range 5
assert [1,2,3,4,5,6,7,8,9,10] , range 1,11
assert [0,2,4,6,8]            , range 0,10,2
assert [10,8,6,4,2]           , range 10,0,-2
assert [9,8,7,6,5,4,3,2,1,0]  , range 10-1,-1,-1

# [..]
assert [0..4]  , [0,1,2,3,4]
assert [0...5] , [0,1,2,3,4]
assert [5,6,7,8,9][1..2] , [6,7]
assert [5,6,7,8,9][..2]  , [5,6,7]
assert [5,6,7,8,9][1..]  , [6,7,8,9]
assert [5,6,7,8,9][..]   , [5,6,7,8,9]
assert [5,6,7,8,9][0..2]   , [5,6,7]
assert [5,6,7,8,9][1...-2] , [6,7]
assert [5,6,7,8,9][-2..]   , [8,9]

"""
			a:""
			e:
				assert : "https://en.wikipedia.org/wiki/Assertion_(software_development)"
