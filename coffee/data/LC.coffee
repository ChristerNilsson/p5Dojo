
ID242 = # Braider:
	b : """
# LOC:49 sc bg sw range # for in if then + line class constructor extends new @

class Cartesius
	constructor : (x,y,c) ->
	go          : (dx,dy) ->
	down        : (d) ->
	left        : (d) ->

class Braider extends Application
	braid   : (type) ->
	draw    : ->
	forward : ->
	back    : ->
app = new Braider
"""

	a:"""
class Cartesius
	constructor : (@x,@y,@c) ->
	go : (dx,dy) ->
		scc @c
		line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]
	down : (d) -> @go 0,d
	left : (d) -> @go -d,0

class Braider extends Application

	braid : (@type) ->
		@n = 0
		@forward()
	draw : ->
		if @type==1
			sw 5
			a = new Cartesius 200,20, 1 # röd
			for i in range @n
				a.go -20,20
		if @type==2
			sw 5
			a = new Cartesius 200,20, 1 # röd
			b = new Cartesius 190,10, 2 # grön
			for i in range @n
				if i%4 == 0 then b.down 20
				if i%4 == 1 then a.left 20
				if i%4 == 2 then a.down 20
				if i%4 == 3 then b.left 20
		if @type==3
			sw 5
			a = new Cartesius 200,30, 1
			b = new Cartesius 190,10, 2
			c = new Cartesius 180,20, 3
			for i in range @n
				if i%6 == 0 then b.down 30
				if i%6 == 1 then a.left 30
				if i%6 == 2 then c.down 30
				if i%6 == 3 then b.left 30
				if i%6 == 4 then a.down 30
				if i%6 == 5 then c.left 30
		if @type==4
			sw 10
			a = new Cartesius 150,40, 1 # röd
			b = new Cartesius 170,20, 2 # grön
			c = new Cartesius 160,30, 3 # gul
			d = new Cartesius 190,50, 4 # blå
			for i in range @n
				if i%12 == 0 then b.down 50
				if i%12 == 1 then c.left 30; c.down 30
				if i%12 == 2 then d.left 50
				if i%12 == 3 then a.down 50
				if i%12 == 4 then b.left 50
				if i%12 == 5 then c.down 50
				if i%12 == 6 then d.left 30; d.down 30
				if i%12 == 7 then a.left 50
				if i%12 == 8 then b.left 30; b.down 30
				if i%12 == 9 then d.down 50
				if i%12 == 10 then c.left 50
				if i%12 == 11 then a.left 30; a.down 30

	forward : -> @n++
	back : -> @n--

app = new Braider "a"
"""
	c:
		app : "braid 1|braid 2|braid 3|braid 4|forward()|back()"

	e:
		braid : "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"


ID244 = # Kalkylator:
	b:"""
# LOC:46 bg sc fc range @readText # + - * / of {} in [] shift unshift
#        text textSize textAlign length for Math.sqrt Math.PI splice
#        parseFloat "" split class extends constructor new @ super ->
# TIPS! Börja med de fyra räknesätten.
#       @words ska kunna utökas med ":". T ex ": sq dup *"
#       Definiera t ex invers, distans och parallella motstånd

class Kalkylator extends Application
	reset : ->
		super
	draw  : ->
	chs   : -> # ( n -- n )
	swap  : -> # ( a b -- b a )
	drop  : -> # ( n -- )
	dup   : -> # ( n -- n n )
	sqrt  : -> # ( n -- n )
	clr   : -> # ( a b -- )
	pi    : -> # ( -- n)
	enter : -> # inmatning från textrutan under kommandolistan.
app = new Kalkylator
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

app = new Kalkylator "a"
"""
	c:
		app : "reset()|chs()|swap()|drop()|dup()|sqrt()|clr()|pi()|enter()"
	e:
		parseInt : "https://www.w3schools.com/jsref/jsref_parseint.asp"
		stack : "https://sv.wikipedia.org/wiki/Stack_(datastruktur)"
		split : "https://coffeescript-cookbook.github.io/chapters/strings/splitting-a-string"
		"Omvänd Polsk Notation" : "https://sv.wikipedia.org/wiki/Omv%C3%A4nd_polsk_notation"
		RPN : "https://en.wikipedia.org/wiki/Reverse_Polish_notation"
		"HP-35" : "https://neil.fraser.name/software/hp-35"
		"Forth Haiku" : "http://forthsalon.appspot.com/word-list"

ID245 = # Hex:
	b:"""
# LOC:47 bg fc sc range # + * - % < == != dist for in [] push pop length quad circle
#        if then else text textAlign textSize class extends constructor new @ super ->

class Hex extends Application
	reset : ->
		super
	draw : ->
	newGame : ->
	undo : ->
	mousePressed : (mx,my) ->
app = new Hex
"""

	a:"""
class Hex extends Application
	reset : ->
		super
		@A = 6
		@B = 5
		@C = 3
		@newGame()

	mousePressed : (mx,my) ->
		index = -1
		for i in range -5,6
			for j in range -5,6
				x = 100 + i*(2*@A+1) + @A*j
				y = 100 + j*(2*@B+@C-1)
				if dist(x,y,mx,my) < 7 then index = 11*(j+5)+i+5
		if index >= 0 and @board[index] == 0
			@history.push index
			n = @history.length
			if n % 2 == 0 then n = -n
			@board[index] = n

	newGame : ->
		@history = []
		@board = Array(11*11).fill 0

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
				x = 100+i*(2*@A+1) + @A*j
				y = 100+j*(2*@B+@C-1)
				bc = @B+@C
				sc 0,1,0
				fc 0,1,0
				quad x,y-bc, x,y+bc, x-@A,y+@C, x-@A,y-@C
				quad x,y-bc, x,y+bc, x+@A,y+@C, x+@A,y-@C
				n = @board[index]
				if n != 0
					if n>0 then fc(1) else fc(0)
					circle x,y,6
					sc()
					if n>0 then fc(0) else fc(1)
					text abs(n),x,y

app = new Hex "a"
"""
	c:
		app : "reset()|newGame()|undo()"
	e:
		Play : "http://www.lutanho.net/play/hex.html"
		Wikipedia : "https://en.wikipedia.org/wiki/Hex_(board_game)"

ID246 = # PickingBerries :
	b:"""
# LOC:46 bg sc fc sw # [] * + line text textSize textAlign constrain dist
#        splice break for in class extends constructor new @ super ->

class PickingBerries extends Application
	reset      : ->
		super
	draw       : ->
	left       : ->
	right      : ->
	up         : ->
	down       : ->
	snailSpeed : ->
	slowSpeed  : ->
	highSpeed  : ->
	warpSpeed  : ->
	pick       : ->
app = new PickingBerries
"""
	a:"""
class PickingBerries extends Application

	reset : ->
		super
		@SPEEDS = [1,5,20,50]
		@x = 100
		@y = 100
		@speed = 2 # 0..3
		@clicks = 0
		@xs = [100,189,124,196,13,187,12,153,32,131]
		@ys = [107,175,138,188,37,78,168,31,20,188]
		@moves = ""
		@dxdy = [[1,0],[0,1],[-1,0],[0,-1]]

	draw : ->
		bg 0
		rectMode CENTER
		sc 1
		sw 1
		rect @x,@y,2*@SPEEDS[@speed],2*@SPEEDS[@speed]
		for [dx,dy] in @dxdy
			for i in range 4
				point @x+dx*@SPEEDS[i], @y+dy*@SPEEDS[i]

		fc 1,1,0
		sc()
		textSize 20
		textAlign CENTER,CENTER
		text @clicks,100,180

		sc 1,0,0
		sw 2
		for [x,y] in _.zip @xs,@ys
			line x-3,y-3,x+3,y+3
			line x+3,y-3,x-3,y+3

	move : (i) ->
		[dx,dy] = @dxdy[i]
		@x += dx * @SPEEDS[@speed]
		@y += dy * @SPEEDS[@speed]
		@clicks++
		@moves += 'abcd'[i]

	setSpeed : (index) ->
		@speed = index
		@moves += index

	right   : -> @move 0
	down    : -> @move 1
	left    : -> @move 2
	up      : -> @move 3

	snailSpeed : -> @setSpeed 0
	slowSpeed  : -> @setSpeed 1
	highSpeed  : -> @setSpeed 2
	warpSpeed  : -> @setSpeed 3

	step : (d) ->
		@clicks++
		constrain @zoom+d,0,3
	pick : ->
		for [x,y],i in _.zip @xs,@ys
			if dist(x,y,@x,@y) <= 2
				@xs.splice i,1
				@ys.splice i,1
				break
		@clicks++

app = new PickingBerries "a"
			"""
	c:
		app : "reset()|left()|right()|up()|down()|snailSpeed()|slowSpeed()|highSpeed()|warpSpeed()|pick()"

ID247 = # Snake :
	b: """
# LOC:47 bg fc # [] rect %% + ++ * == < and push dist length for in
#        if then else class extends constructor new @ super ->

class Snake extends Application
	reset : ->
		super
	setSize : (s) ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	draw : ->
	mousePressed : (mx,my) ->
app = new Snake
"""
	a:"""
class Snake extends Application
	reset : ->
		super
		@BUTTONS = [[33,167],[167,167]]
		@DIRS = [[1,0],[0,-1],[-1,0],[0,1]]
		@setSize 20
	setSize : (s) ->
		@SIZE = s
		@N = 200/@SIZE
		@seed = 0
		@segments = [[5,5]]
		@dir = 0
		@total = 2
		@cherry = [3,3]
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	update : ->
		[di,dj] = @DIRS[@dir]
		[i,j] = @segments[0]
		i = (i+di) %% @N
		j = (j+dj) %% @N
		@segments.unshift [i,j]
		if @total < @segments.length then @segments.pop()
		if i==@cherry[0] and j==@cherry[1]
			@total++
			@cherry = [@randint(@N),@randint(@N)]
	draw : ->
		bg 1,0,0
		[i,j] = @segments[0]
		for [si,sj],k in @segments
			if k>0 and i==si and j==sj then return
		bg 1
		[ci,cj] = @cherry
		fc 1,0,0
		rect @SIZE*ci,@SIZE*cj,@SIZE,@SIZE
		for [i,j],k in @segments
			if k==0 then fc 0 else fc 0.5
			rect @SIZE*i,@SIZE*j,@SIZE,@SIZE
		fc 0.9,0.9,0.9,0.3
		for [x,y] in @BUTTONS
			circle x,y,33
	mousePressed : (mx,my) ->
		index = -1
		for [x,y],i in @BUTTONS
			if dist(x,y,mx,my) < 33 then index = i
		if index == 0 then @dir = (@dir+1) %% 4
		if index == 1 then @dir = (@dir-1) %% 4
		@update()

app = new Snake "a"
"""
	c:
		app : "reset()|setSize 20|setSize 10|setSize 5|setSize 2"
	e:
		Snake : "https://en.wikipedia.org/wiki/Snake_(video_game)"

ID248 = # Snake4 :
	b: """
# LOC:43 bg fc # [] rect %% + ++ * == < and or push dist length for in
#        if then else class extends constructor new @ super ->

class Snake4 extends Application
	reset : ->
		super
	setSize : (s) ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	draw : ->
	mousePressed : (mx,my) ->
app = new Snake4
"""
	a:"""
class Snake4 extends Application
	reset : ->
		super
		@BUTTONS = [[167,100], [100,33], [33,100], [100,167]]
		@DIRS = [[1,0],[0,-1],[-1,0],[0,1]]
		@setSize 20
	setSize : (s) ->
		@SIZE = s
		@N = 200/@SIZE
		@seed = 0
		@segments = [[5,5]]
		@dir = 0
		@total = 2
		@cherry = [3,3]
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	update : ->
		[di,dj] = @DIRS[@dir]
		[i,j] = @segments[0]
		i = i+di
		j = j+dj
		@segments.unshift [i,j]
		if @total < @segments.length then @segments.pop()
		if i==@cherry[0] and j==@cherry[1]
			@total++
			@cherry = [@randint(@N),@randint(@N)]
	draw : ->
		bg 1,0,0
		[i,j] = @segments[0]
		if i in [-1,@N] or j in [-1,@N] then return
		bg 1
		[ci,cj] = @cherry
		fc 1,0,0
		rect @SIZE*ci,@SIZE*cj,@SIZE,@SIZE
		for [i,j],k in @segments
			if k==0 then fc 0 else fc 0.5
			rect @SIZE*i,@SIZE*j,@SIZE,@SIZE
		fc 0.9,0.9,0.9,0.3
		for [x,y] in @BUTTONS
			circle x,y,33
	mousePressed : (mx,my) ->
		for [x,y],i in @BUTTONS
			if dist(x,y,mx,my) < 33 and abs(i-@dir)!=2 then @dir = i
		@update()

app = new Snake4 "a"
"""
	c:
		app : "reset()|setSize 20|setSize 10|setSize 5|setSize 2"
	e:
		Play : "http://patorjk.com/games/snake"
		Source : "https://github.com/patorjk/JavaScript-Snake/blob/master/js/snake.js"
		Wikipedia : "https://en.wikipedia.org/wiki/Snake_(video_game)"

ID249 = # RubikSquare:
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
