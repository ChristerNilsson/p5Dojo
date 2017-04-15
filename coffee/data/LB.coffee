ID220 = # Connect4 :
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
		Wikipedia : "https://en.wikipedia.org/wiki/Connect_Four"

ID221 = # SpaceShip :
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

app = new Ship	
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
		@S = 10
		@x = 100
		@y = 100
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
		triangle 2*@S,0, -@S,@S, -@S,-@S
		sw 5
		point 0,0
		pop()
		for shot in @shots
			shot.move()
			shot.render()

app = new Ship "a"	
"""
	c:
		app: "reset()|left()|right()|forward()|shoot()"

ID222 = # Nian :
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

