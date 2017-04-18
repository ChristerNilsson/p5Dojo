ID220 = # Korsord :
	b: """
# LOC:29 bg fc sc @readText # / % + * != and text textAlign textSize if then for in
#        "" split join _.filter class constructor new @ extends super [] length
# Mata in t ex b..l och få ut bill samt boll.

class Korsord extends Application
	reset : -> super
	draw  : -> super
	enter : ->
app = new Korsord
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

app = new Korsord "a"
"""
	c:
		app : "reset()|enter()"

	e:
		'_.some' : "http://underscorejs.org/#some"
		'_.filter' : "http://underscorejs.org/#filter"
		'_.countBy' : "http://underscorejs.org/#countBy"

ID221 = # EngineeringNotation :
	b:"""
# LOC:28 fc sc bg # int Math.log10 constrain + - * / < ** text split
#        textAlign textSize class extends constructor new @ super ->

class Engineering extends Application
	reset : -> super
	draw  : -> super
	more  : ->
	less  : ->
app = new Engineering
"""
	a:"""
class Engineering extends Application
	reset : ->
		super
		@PREFIXES = "yzafpnµm kMGTPEZY"
		@numbers = "-273.15 1.6021766208e-19 3.1415926535 9.80665 101325 299792458 1073741824 6.022140857e23"
		@digits = 3
	format : (x) ->
		if x<0 then return "-" + @format(-x)
		exponent = 3 * int Math.log10(x)/3
		x = x / 10 ** exponent
		if x < 10 then factor = 10 ** (@digits-1)
		else if x < 100 then factor = 10 ** (@digits-2)
		else factor = 10 ** (@digits-3)
		Math.round(x * factor) / factor + @PREFIXES[8+exponent/3]
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

app = new Engineering "a"
"""
	c:
		app : "reset()|more()|less()"
	e:
		EngineeringNotation : "https://en.wikipedia.org/wiki/Engineering_notation"


ID222 = # Connect4 :
	b:"""
# LOC:33 % bg fc sc sw circle range # text textAlign textSize for in
#        push pop class extends constructor new @ super ->

class Connect4 extends Application
	reset : -> super
	draw  : -> super
	undo  : ->
	mousePressed : (mx,my) ->
app = new Connect4
			"""
	a:"""
class Connect4 extends Application
	reset : ->
		super
		@SIZE = 27
		@list = ([] for i in range 7)
		@moves = []
	draw : ->
		bg 0
		textAlign CENTER,CENTER
		textSize @SIZE/2
		fc()
		sc 0.1,0.3,1
		sw 0.2 * @SIZE
		for i in range 7
			for j in range 6
				circle 100-@SIZE*3+@SIZE*i, 180-@SIZE*j, @SIZE/2
		for column,i in @list
			for nr,j in column
				fc 1,nr%2,0
				sw 1
				circle 100-@SIZE*3+@SIZE*i, 180-@SIZE*j, @SIZE*0.4
				fc 0
				sc()
				text nr, 100-@SIZE*3+@SIZE*i, 180-@SIZE*j
		sc()
		fc 1,(@moves.length+1)%2,0
		circle 100,15,10
	mousePressed : (mx,my) ->
		nr = int (mx-(200-7*@SIZE)/2)/@SIZE
		if 0 <= nr <= 6
			@moves.push nr
			@list[nr].push @moves.length
	undo : -> if @moves.length > 0 then @list[@moves.pop()].pop()

app = new Connect4 "a"
"""
	c:
		app : "reset()|undo()"
	e:
		Wikipedia : "https://en.wikipedia.org/wiki/Connect_Four"

ID223 = # SpaceShip :
	b:"""
# LOC:35 sc sw rd # point triangle translate cos sin radians
#        push pop class extends constructor new @ super ->

class Shot
	constructor : (@x,@y,@dir,@_type='Shot') ->
	render      : ->
	move        : ->

class Ship extends Application
	constructor : (@_name,@_type='Ship') ->
		super @_name, {'Shot':Shot, 'Ship':Ship}
		#if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)
	reset   : -> super
	draw    : ->
	left    : ->
	right   : ->
	forward : ->
	shoot   : ->

app = new Ship
"""
	a: """
#classes = {}

class Shot
	constructor : (@x,@y,@dir,@_type='Shot') ->
	render : ->	point @x,@y
	move : ->
		@x += int 5 * cos radians @dir
		@y += int 5 * sin radians @dir

class Ship extends Application

	constructor : (@_name,@_type='Ship') ->
		super @_name, {'Shot':Shot, 'Ship':Ship}
		#if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)

	reset : ->
		print 1
		super
		print 2
		@S = 10
		@x = 100
		@y = 100
		@dir = 0
		@shots = []
		print 'reset',@

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
		triangle 2*@S,0, -@S,@S, -@S,-@S
		sw 5
		point 0,0
		pop()
		for shot in @shots
			shot.move()
			shot.render()

#classes["Shot"] = Shot.prototype
#classes["Ship"] = Ship.prototype
#print 'classes',classes

app = new Ship "a"
"""
	c:
		app: "reset()|left()|right()|forward()|shoot()"

ID224 = # Nian :
	b:"""
# LOC:35 bg fc sc # [] push "" split indexOf reduce + * ** / % > & text textSize textAlign
#				 for in of {} _.countBy and if then class constructor new @ extends super
# Bilda ord med fyra till nio bokstäver. Den mittersta bokstaven måste ingå. Prova med "aaefkrrtu"

class Nian extends Application
	reset : -> super
	draw  : -> super
	enter : ->

app = new Nian
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

app = new Nian "a"
"""
	c:
		app : "reset()|enter()"

	e:
		Nian : "http://svenska-apps.se/iphone-ipad/underhallning/svd-nian-babqpg.html"
		'_.countBy' : "http://underscorejs.org/#countBy"
		reduce : "https://coffeescript-cookbook.github.io/chapters/arrays/reducing-arrays"

ID225 = # Klocka:
	b: """
# LOC:49 fc sc circle range rd # point rect rectMode for in if then else
#        translate push pop class extends constructor new @ super ->
#        Date getHours getMinutes getSeconds

class Klocka extends Application
	reset  : -> super
	draw   : -> super
	hour   : (h) ->
	minute : (m) ->
	second : (s) ->
	now 	 : ->
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
	now    : ->
		d = new Date()
		@h = d.getHours()
		@m = d.getMinutes()
		@s = d.getSeconds()
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
		app : "reset()|hour -1|hour +1|minute -1|minute +1|second -1|second +1|now()"

ID226 = # BouncingBalls :
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

ID227 = # ColorPair :
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
		@radius = 0
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
		@radius = 50
		for i in range @level
			@radius *= 0.95
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
