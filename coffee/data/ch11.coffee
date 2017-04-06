ID220 = # Connect4 :
	b:"""
# LOC:33 % bg fc sc sw circle range # text textAlign textSize for in
#        push pop class extends constructor new @ super -> 

class Connect4 extends Application
	reset : -> super
	draw  : -> super
	undo  : ->
	mousePressed : (mx,my) ->
connect4 = new Connect4
			"""
	a:"""
class Connect4 extends Application
	reset : ->
		super
		@list = ([] for i in range 7)
		@moves = []
		@size = 27
	draw : ->
		bg 0
		textAlign CENTER,CENTER
		textSize size/2
		fc()
		sc 0.1,0.3,1
		sw 0.2 * @size
		for i in range 7
			for j in range 6
				circle 100-@size*3+@size*i, 180-@size*j, @size/2
		for column,i in @list
			for nr,j in column
				fc 1,nr%2,0
				sw 1
				circle 100-@size*3+@size*i, 180-@size*j, @size*0.4
				fc 0
				sc()
				text nr, 100-@size*3+@size*i, 180-@size*j
		sc()
		fc 1,(@moves.length+1)%2,0
		circle 100,15,10
	mousePressed : (mx,my) ->
		nr = int (mx-(200-7*@size)/2)/@size
		if 0 <= nr <= 6
			@moves.push nr
			@list[nr].push @moves.length 
	undo : -> if @moves.length > 0 then @list[@moves.pop()].pop()

connect4 = new Connect4 "a"
"""
	c:
		connect4 : "reset()|undo()"

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

ship = new Ship	
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

ID222 = # Nian :
	b:"""
# LOC:35 bg fc sc # [] push "" split indexOf reduce + * ** / % > & text textSize textAlign  
#				 for in of {} _.countBy and if then class constructor new @ extends super 
# Bilda ord med fyra till nio bokstäver. Den mittersta bokstaven måste ingå. Prova med "aaefkrrtu"

class Nian extends Application
	reset : -> super
	draw  : -> super
	enter : ->

nian = new Nian
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

ID223 = # Asserts:
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
