#####################################
	ch10 = # "LA: interactivity, advanced" :
#####################################

		Klocka: 
			b: """
# LOC:44 fc sc circle range rd # point rect rectMode for in if then else 
#        translate push pop class extends constructor new @ super ->

class Klocka extends Application
	reset  : -> super
	draw   : -> super
	hour   : (h) ->
	minute : (m) ->
	second : (s) ->

klocka = new Klocka "b"
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

klocka = new Klocka "a"
"""
			c: 
				klocka : "reset()|hour -1|hour +1|minute -1|minute +1|second -1|second +1"


		BouncingBalls :
			b : """
# LOC: 43 fc sw sc circle # + ++ - -- %% == push if then for in 
#         splice length _.create class constructor super extends new @

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

bouncingBalls = new BouncingBalls "b"
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

bouncingBalls = new BouncingBalls "a"
"""
			c:
				bouncingBalls : "reset()|update()|add()|delete()|selNext()|selPrev()|grow()|shrink()|nextCol()|prevCol()|gravity()"


		
		Braider:
			b : """
# LOC: 49 sc bg sw range # for in if then + line class constructor extends new @

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

braider = new Braider "b"
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

braider = new Braider "a"
"""
			c:
				braider : "braid 1|braid 2|braid 3|braid 4|forward()|back()"

			e:
				braid : "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"



		RecursiveCircle: 
			b: """
# LOC:10 -> sc circle # if return < class extends constructor new @ super ->

class RecursiveCircle extends Application
	reset   : -> super
	draw    : -> super
	circles : (x,y,r,level) ->
	more    : -> 
	less    : -> 

rc = new RecursiveCircle "b"
"""
			a: """

class RecursiveCircle extends Application
	reset : -> 
		super
		@n = 0
	draw : -> @circles 100,100,100,@n		
	circles : (x,y,r,level) ->
		circle x,y,r
		if level <= 0 then return
		@circles x-r/2, y, r/2, level-1
		@circles x+r/2, y, r/2, level-1
	more : -> @n = constrain @n+1,0,10
	less : -> @n = constrain @n-1,0,10

rc = new RecursiveCircle "a"
"""
			c:
				rc : "reset()|more()|less()"
				
		EngineeringNotation :
			b:"""		
# LOC:28 fc sc bg # Math.floor Math.log10 constrain + - * / < ** text split
#        textAlign textSize class extends constructor new @ super ->

class Engineering extends Application
	reset : -> super
	draw  : -> super 
	more  : -> 
	less  : -> 
engineering = new Engineering "b"   		
"""
			a:"""
class Engineering extends Application
	reset : -> 
		super
		@numbers = "-273.15 1.6021766208e-19 3.1415926535 9.80665 101325 299792458 1073741824 6.022140857e23"
		@digits = 3
		@prefixes = "yzafpnµm kMGTPEZY"
	format : (x) -> 
		if x<0 then return "-" + @format(-x)
		exponent = 3 * Math.floor Math.log10(x)/3
		x = x / 10 ** exponent
		if x < 10 then factor = 10 ** (@digits-1) 
		else if x < 100 then factor = 10 ** (@digits-2)
		else factor = 10 ** (@digits-3)
		Math.round(x * factor) / factor + @prefixes[8+exponent/3]
	draw  : -> 
		bg 0
		textAlign RIGHT,TOP
		textSize 20
		textFont "monospace"
		fc 1,0,0
		sc()
		textAlign RIGHT,TOP
		for nr,i in @numbers.split " "
			x = parseFloat nr
			if i<8 then text @format(1/x), 100-5,i*20
			text @format(x), 200-5,i*20
	more  : -> @digits = constrain @digits+1, 1,6
	less  : -> @digits = constrain @digits-1, 1,6

engineering = new Engineering "a"   		
"""
			c:
				engineering : "reset()|more()|less()"
			e:
				EngineeringNotation : "https://en.wikipedia.org/wiki/Engineering_notation"

		Nim:
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
	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++
	mousePressed : (mx,my) ->
nim = new Nim "b"  
"""
			a:"""
class Nim extends Application
	reset : -> 
		super
		@seed = 0
		@radius = 30
		@buttons = [[35,80],[100,80],[165,80], [35,150,'ok'],[100,150,'x'],[165,150,'hint']]
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

	fraction : (x) -> x %% 1
	randint : (n) -> Math.floor n * @fraction 10000 * Math.sin @seed++

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
		for [x,y,txt],i in @buttons
			fc 0
			sc 1
			sw 2
			if i<=2 and @active==-1 or @active==i then circle x,y,@radius
			if i in [3,4] and @active!=-1 then circle x,y,@radius
			if i==5 and @active==-1 then circle x,y,@radius
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
		for button,i in @buttons
			if dist(button[0],button[1],mx,my) < @radius then index = i
		if index <= 2 then @move index
		if index == 3 then @ok()
		if index == 4 then @cancel()
		if index == 5 then @hint()

nim = new Nim "a"   
		
"""
			c:
				nim : "reset()|newGame()"
			e:
				Nim : "https://en.wikipedia.org/wiki/Nim"
				xor : "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"
				Nimrod : "https://en.wikipedia.org/wiki/Nimrod_(computing)"

		ChessGame :
			b:"""
# LOC:64 bg fc sc sw range # point rect rectMode class constructor new @
#        if then else text textSize textAlign for in push split length indexOf

class Chess extends Application
	reset : -> super
	draw  : -> super
	move  : (d) ->

chess = new Chess "b"
"""
			a:"""
class Chess extends Application

	reset : ->
		super
		@moves = "e2e4 e7e5 g1f3 b8c6 f1c4".split " "
		@size = 22
		@x = 100
		@y = 100
		@n = 0

	putPieces : (pieces) ->
		res = []
		for i in range 64
			res.push "" 
		arr = pieces.split " "
		for piece in arr
			if piece.length == 2
				chr = "o"
				sq = piece
			else
				chr = piece[0]
				sq = piece[1..]
			[col,row] = @getIndex sq
			res[8*col+row] = chr	
		res

	getIndex : (sq) ->
		col = "abcdefgh".indexOf sq[0]
		row = "12345678".indexOf sq[1]
		[col,row]
		
	render : (pieces,c) ->
		fc c
		sc c
		for row in range 8
			for col in range 8
				piece = pieces[8*col+row]
				x = @x - 3.5 * @size + col * @size
				y = @y - 3.5 * @size + (7-row) * @size
				if piece == "o"
					sw @size/2
					point x,y
				else if piece in "KQRBN"
					sw 1-c
					text piece,x, 1+y		
				
	draw : ->
		bg 0.5
		textSize 0.9 * @size
		textAlign CENTER,CENTER
		rectMode CENTER
		sc()
		for i in range 8
			for j in range 8
				if (i+j)%2 == 1 then fc 0.4 else fc 0.6
				rect @x-3.5*@size+@size*i, @y-3.5*@size+@size*j, @size, @size

		white = @putPieces "Ra1 Nb1 Bc1 Qd1 Ke1 Bf1 Ng1 Rh1 a2 b2 c2 d2 e2 f2 g2 h2"
		black = @putPieces "Ra8 Nb8 Bc8 Qd8 Ke8 Bf8 Ng8 Rh8 a7 b7 c7 d7 e7 f7 g7 h7"

		for i in range @n
			@movePiece @moves[i], if i%2==0 then white else black		

		@render white,1
		@render black,0

	movePiece : (m,player) ->
		[col1,row1] = @getIndex m[0..1]
		[col2,row2] = @getIndex m[2..3]
		player[col2*8+row2] = player[col1*8+row1]
		player[col1*8+row1] = ""

	move : (d) -> 
		@n += d
		@n = constrain @n,0,@moves.length

chess = new Chess "a"

"""
			c:
				chess : "reset()|move -1|move 1"

		SpaceShip :
			b:"""
# LOC:35 sc sw rd # point triangle translate cos sin radians 
#        push pop class extends constructor new @ super ->

class Shot
	constructor : (@x,@y,@dir) ->
	render      : ->	
	move        : ->

class Ship extends Application
	constructor : (@name) ->
		super @name
		if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)
	reset   : -> super
	draw    : -> super
	left    : -> 
	right   : -> 
	forward : -> 
	shoot   : ->		

ship = new Ship "b"	
"""
			a: """
class Shot
	constructor : (@x,@y,@dir) ->
	render : ->	point @x,@y 
	move : ->
		@x += int 5 * cos radians @dir
		@y += int 5 * sin radians @dir

class Ship extends Application 

	constructor : (@name) ->
		super @name
		if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)

	reset : ->
		super
		@x = 100
		@y = 100
		@s = 10
		@dir = 0
		@shots = []

	left    : -> @dir -= 5
	right   : -> @dir += 5
	forward : -> 
		@x += 5 * cos radians @dir
		@y += 5 * sin radians @dir

	shoot : ->
		@shots.push new Shot int(@x), int(@y), @dir

	draw : ->
		push()
		translate @x,@y
		rd @dir
		sc 1,1,0
		sw 2
		triangle 2*@s,0, -@s,@s, -@s,-@s
		sw 5
		point 0,0
		pop()
		for shot in @shots
			shot.move()
			shot.render()

ship = new Ship "a"	
"""
			c:
				ship: "reset()|left()|right()|forward()|shoot()"



		PickingBerries :
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

berries = new PickingBerries "b"
"""
			a:"""
class PickingBerries extends Application

	reset : ->
		super
		@x = 100
		@y = 100
		@speed = 2 # 0..3
		@speeds = [1,5,20,50]
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
		rect @x,@y,2*@speeds[@speed],2*@speeds[@speed]
		for [dx,dy] in @dxdy
			for i in range 4
				point @x+dx*@speeds[i], @y+dy*@speeds[i]
		
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
		@x += dx * @speeds[@speed]
		@y += dy * @speeds[@speed]
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

berries = new PickingBerries "a"
			"""
			c:
				berries : "reset()|left()|right()|up()|down()|snailSpeed()|slowSpeed()|highSpeed()|warpSpeed()|pick()"

