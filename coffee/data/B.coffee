ID_Background1 =
	v:'2017-05-10'
	k:'bg'
	b: """
# LOC:1
# Första bilden ska du efterlikna.
# Andra bilden skapas av din kod.
# Tredje bilden visar skillnaden mellan de två andra. Ska bli svart när du är klar.

# Tryck på PgDn för att komma till sista raden.
# Skriv in följande kommando: bg 1
# Kontrollera att de två första bilderna nu är lika, och att den tredje är helt svart.

# Klicka därefter på Background1 följt av Background2 för att komma till nästa övning.

"""
	a: "bg 1"

ID_Background2 =
	v:'2017-04-29'
	k:'bg'
	b: "# LOC:1\n"
	a: "bg 0.5"

ID_Background3 =
	v:'2017-04-29'
	k:'bg'
	b: "# LOC:1\n"
	a: "bg 1,0,0"

ID_Background4 =
	v:'2017-04-29'
	k:'bg'
	b: "# LOC:1n"
	a: "bg 1,1,0"

ID_BlackBox2D =
	v:'2017-04-29'
	k:'bg sc fc range line [] operators int for if text class'
	b:"""
# LOC:33

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

ID_BoardGame =
	v:'2017-04-29'
	k:'bg fc sc circle range for ->'
	b:"""
# LOC:21

class Board extends Application
	reset : ->
		super
	draw  : ->
	r     : (d) ->
	d     : (d) ->
	n     : (d) ->
app = new Board
"""
	a:"""

class Board extends Application
	reset : ->
		super
		@_X = 100
		@_Y = 100
		@_d = 18
		@_r = 7
		@_n = 5
	draw : ->
		bg 1
		fc 0
		sc()
		@one @_d,@_r,@_X-@_n*@_d, @_Y-@_d,2*@_n+1,3
		@one @_d,@_r,@_X-@_d, @_Y-@_n*@_d,3,2*@_n+1
	one : (d,r,x0,y0,m,n) ->
		for i in range m
			for j in range n
				circle x0+d*i,y0+d*j,r
	r : (d) -> @_r += d
	d : (d) -> @_d += d
	n : (d) -> @_n += d

app = new Board "a"
"""
	c:
		app : "reset()|r -1|r +1|d -1|d +1|n -1|n +1"

ID_BouncingBalls =
	v:'2017-04-29'
	k:'fc sw sc circle operators [] if for class'
	b : """
# LOC:43

class Ball
	constructor : ->
	update      : (grav) ->
	render      : (sel) ->

class BouncingBalls extends Application
	classes : -> [Ball]
	reset   : ->
		super
	draw    : ->
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
	classes : -> [Ball]
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

ID_Braid =
	v:'2017-04-29'
	k:'sc bg sw range for line class'
	b : """
# LOC:19

class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->

braid = (n,dx,dy,width) ->

braid 5,18,18,6
"""

	a:"""
class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->
		sc @r,@g,@b
		line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]

braid = (n,dx,dy,width) ->

	a = new Cartesius 1,0,0, 100-dx/2,dy/3
	b = new Cartesius 1,1,0, 100+dx/2,2*dy/3
	c = new Cartesius 0,1,0, 100-dx/2,dy

	bg 0
	sw width

	for i in range n
		a.go dx,dy
		b.go -dx,dy
		c.go dx,dy

		a.go -dx,dy
		b.go dx,dy
		c.go -dx,dy

braid 5,18,18,6
"""
	e:
		braid : "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"
		Wikipedia : "https://en.wikipedia.org/wiki/Braid"

ID_Braider =
	v:'2017-04-29'
	k:'sc bg sw range for if operators line class'
	b: """
# LOC:49

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

