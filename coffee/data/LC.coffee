ID240 = # Klocka: 
	b: """
# LOC:44 fc sc circle range rd # point rect rectMode for in if then else 
#        translate push pop class extends constructor new @ super ->

class Klocka extends Application
	reset  : -> super
	draw   : -> super
	hour   : (h) ->
	minute : (m) ->
	second : (s) ->

app = new Klocka
			"""
	a: """
class Klocka extends Application
	reset : -> 
		super
		@h=10
		@m=9
		@s=30
	draw : ->
		bg 0.5
		rectMode CENTER
		translate 100,100
		@urtavla()
		@visare (@h+@m/60.0)*30, 7,60,1,0,0
		@visare (@m+@s/60.0)*6,5,80,0,1,0
		@visare @s*6,2,80,1,1,0
	hour   : (h) -> @adjust h,0,0
	minute : (m) -> @adjust 0,m,0
	second : (s) -> @adjust 0,0,s

	adjust : (h,m,s) ->
		@h+=h
		@m+=m
		@s+=s
		t = 3600 * @h + 60 * @m + @s
		@s = t %% 60
		t = (t - @s) / 60
		@m = t %% 60
		t = (t - @m) / 60
		@h = t %% 24

	visare : (v,w,l,r,g,b) ->
		push()
		rd v-90
		translate l/2,0
		fc r,g,b
		rect 0,0,l,w
		pop()
	urtavla : ->
		fc 0
		sc 1
		sw 2
		circle 0,0,90
		fc 1
		sc()
		for i in range 60
			circle 85,0, if i%5==0 then 3 else 2
			rd 6

app = new Klocka "a"
"""
	c: 
		app : "reset()|hour -1|hour +1|minute -1|minute +1|second -1|second +1"

ID241 = # BouncingBalls :
	b : """
# LOC:43 fc sw sc circle # + ++ - -- %% == push if then for in 
#        splice length _.create class constructor super extends new @

class Ball 
	constructor : ->
	update      : (grav) ->
	render      : (sel) ->

class BouncingBalls extends Application

	constructor : (@name) ->
		super @name
		if @balls then @balls = (_.create Ball.prototype, ball for ball in @balls)

	reset   : -> super
	draw    : -> super
	update  : -> 
	add     : -> 
	delete  : ->
	selNext : -> 
	selPrev : -> 
	grow    : ->    
	shrink  : ->  
	nextCol : -> 
	prevCol : -> 
	gravity : ->

app = new BouncingBalls
"""

	a:"""
class Ball 
	constructor : ->
		@x = 100
		@y = 100
		@r = 10
		@c = 1
		@dx = 3
		@dy = 4
	update : (grav) ->
		@x += @dx
		@y += @dy
		if not (@r < @x < 200-@r) then @dx = - @dx
		if not (@r < @y < 200-@r) then @dy = - @dy
		if grav and @y < 200-@r then @dy += 1 
	render : (sel) ->
		fcc @c
		sw 2
		if sel then scc 7 else sc()
		circle @x,@y,@r

class BouncingBalls extends Application

	constructor : (@name) ->
		super @name
		if @balls then @balls = (_.create Ball.prototype, ball for ball in @balls)

	reset : ->
		super
		@balls = []
		@sel = -1
		@grav = false
	draw : ->
		for ball,i in @balls
			ball.render i==@sel, @grav
	update : -> 
		for ball in @balls
			ball.update(@grav)

	add : -> 
		@balls.push new Ball
		@sel = @balls.length - 1

	delete :->
		@balls.splice @sel, 1
		if @sel >= @balls.length then @sel = @balls.length - 1  
	selNext : -> @sel = (@sel + 1) %% @balls.length
	selPrev : -> @sel = (@sel - 1) %% @balls.length
	grow : ->    @balls[@sel].r++
	shrink : ->  @balls[@sel].r--
	nextCol : -> @balls[@sel].c = (@balls[@sel].c+1) %% 8
	prevCol : -> @balls[@sel].c = (@balls[@sel].c-1) %% 8
	gravity : -> @grav = not @grav 

app = new BouncingBalls "a"
"""
	c:
		app : "reset()|update()|add()|delete()|selNext()|selPrev()|grow()|shrink()|nextCol()|prevCol()|gravity()"
		
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
	draw    : -> super
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

ID243 = # ColorPair :
	b: """
# LOC:41 fc circle # [] .. push dist length splice _.isEqual colorMode HSB
#        _.max _.pairs _.sortBy for in class extends constructor new @ super ->

class ColorPair extends Application
	reset : -> 
		super
		@seed = 0
	draw : -> super
	mousePressed : (mx,my) ->
	enterName : ->
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
app = new ColorPair
"""
	a:"""
class ColorPair extends Application
	reset : -> 
		super
		@RADIUS = 40
		@seed = 0
		@level = 0
		@changeLevel 1
		@name = ""
		@highScore = {}

	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

	draw : -> 
		bg 1
		sw 2
		sc 1,1,1,0.5
		colorMode HSB
		for [x,y,c] in @circles
			fill color c,100,100,0.5
			circle x,y,@RADIUS
		
	mousePressed : (mx,my) ->
		hitlist = []
		for [x,y,c],i in @circles
			if dist(x,y,mx,my) < @RADIUS then hitlist.push i 
		if hitlist.length == 1
			i = hitlist[0]
			circle = @circles[i]
			if @memory == -1
				@memory = circle[2]
				@circles.splice i,1
			else if _.isEqual(@memory, circle[2]) 
				@memory = -1
				@circles.splice i,1
				if @circles.length == 0
					@updateHighScore() if @name != ""
					@changeLevel 1
			else
				@changeLevel -1
		else
			@changeLevel -1

	updateHighScore : ->
		@highScore[@name] = _.max [@level, @highScore[@name]] 
		@topList = _.pairs @highScore
		@topList = _.sortBy @topList, ([name,level]) -> -level

	changeLevel : (d) ->
		@memory = -1
		@level = constrain @level+d, 1, 20
		@circles = []
		for i in range @level
			c = int i * 360 / @level
			@circles.push [@randint(200), @randint(200), c]
			@circles.push [@randint(200), @randint(200), c]

	enterName : -> @name = @readText()

app = new ColorPair "a"
"""
	c:
		app : "reset()|enterName()"
	e: 
		ColorPair : "https://christernilsson.github.io/ColorPair"

ID244 = # Kalkylator:
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
# LOC:49 bg fc sc range # + * - % < == != dist for in [] push pop length quad circle
#        if then else text textAlign textSize class extends constructor new @ super ->

class Hex extends Application
	reset : -> super
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
		Hex : "https://en.wikipedia.org/wiki/Hex_(board_game)"

ID246 = # PickingBerries :
	b:"""
# LOC:46 bg sc fc sw # [] * + line text textSize textAlign constrain dist 
#        splice break for in class extends constructor new @ super ->

class PickingBerries extends Application
	reset      : -> super
	draw       : -> super
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
# LOC:41 bg fc # [] rect %% + ++ * == < and push dist length for in 
#        if then else class extends constructor new @ super ->

class Snake extends Application
	reset : -> super
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	draw : -> super
	mousePressed : (mx,my) ->
app = new Snake
"""
	a:"""
class Snake extends Application
	reset : -> 
		super
		@BUTTONS = [[33,167],[167,167]]
		@DIRS = [[1,0],[0,-1],[-1,0],[0,1]]
		@SIZE = 20
		@seed = 0
		@segments = [[5,5]]
		@dir = 0
		@total = 2
		@cherry = [3,3]
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	draw : -> 
		[di,dj] = @DIRS[@dir]
		[i,j] = @segments[0]
		i = (i+di) %% 10
		j = (j+dj) %% 10
		bg 1,0,0
		for [si,sj] in @segments 
			if i==si and j==sj then return
		bg 1			
		@segments.unshift [i,j]
		if @total < @segments.length then @segments.pop()
		if i==@cherry[0] and j==@cherry[1]
			@total++
			@cherry = [@randint(10),@randint(10)]
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
			
app = new Snake "a"
"""
	c:
		app : "reset()"
	e: 
		Snake : "https://en.wikipedia.org/wiki/Snake_(video_game)"

ID248 = # Snake4 :
	b: """
# LOC:37 bg fc # [] rect %% + ++ * == < and or push dist length for in 
#        if then else class extends constructor new @ super ->

class Snake4 extends Application
	reset : -> super
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	draw : -> super
	mousePressed : (mx,my) ->
app = new Snake4
"""
	a:"""
class Snake4 extends Application
	reset : -> 
		super
		@BUTTONS = [[167,100], [100,33], [33,100], [100,167]]
		@DIRS = [[1,0],[0,-1],[-1,0],[0,1]]
		@SIZE = 20
		@seed = 0
		@segments = [[5,5]]
		@dir = 0
		@total = 2
		@cherry = [3,3]
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++
	draw : -> 
		[di,dj] = @DIRS[@dir]
		[i,j] = @segments[0]
		i = i+di
		j = j+dj
		bg 1,0,0
		if i in [-1,10] or j in [-1,10] then return
		bg 1			
		@segments.unshift [i,j]
		if @total < @segments.length then @segments.pop()
		if i==@cherry[0] and j==@cherry[1]
			@total++
			@cherry = [@randint(10),@randint(10)]
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
			
app = new Snake4 "a"
"""
	c:
		app : "reset()"
	e: 
		Play : "http://patorjk.com/games/snake"
		Source : "https://github.com/patorjk/JavaScript-Snake/blob/master/js/snake.js"
