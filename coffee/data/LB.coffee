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

ID223 = # Asserts:
	b:"""
# LOC:0
# Här kan du se några klargörande exempel.
# Om de två parametrarna till assert är olika, skrivs de ut till console.
# Du kan prova egna asserts här. Kontrollera med F12.

# + - * / // **  Operatorer
assert -10,  2 - 3 * 4
assert 2.75, 2 + 3 / 4
assert 32,   4 * 2 ** 3
assert 14,   2 + 3 * 4 
assert 20,   (2+3) * 4  
assert 32,   4 * 2 ** 3
assert 1.75, 7 / 4
assert 1,    7 // 4
assert 2,    8 // 4

# % Resten vid heltalsdivision
assert  0,  2 % 2
assert  1,  1 % 2
assert  0,  0 % 2
assert -1, -1 % 2   
assert -0, -2 % 2     

# %% Resten vid heltalsdivision. Klarar även negativa tal.
assert 0,  2 %% 2
assert 1,  1 %% 2
assert 0,  0 %% 2 
assert 1, -1 %% 2
assert 0, -2 %% 2

# Jämförelser
assert true,  1+2 < 4
assert true,  1+2 > 2
assert true,  1+2 == 3
assert false, 1+2 == 4
assert true,  1+2 != 4
assert true,  1+2 >= 3
assert true,  1+2 <= 4 
assert true,  1 < 2 and 2 < 3
assert true,  1 < 2 < 3

# and or not  Logiska villkor
assert false, false and false
assert false, false and true
assert false, true and false
assert true,  true and true
 
assert false, false or false
assert true,  false or true
assert true,  true or false
assert true,  true or true

assert true,  not false
assert false, not true

# if then else  
assert 4, if 3 > 4 then 3 else 4
assert 3, if 3 < 4 then 3 else 4

# '' "" strängar
assert 'Coffeescript',            'Coffee' + 'script'
assert 6,                         'Coffee'.length
assert 2,                         'Coffee'.indexOf 'f'
assert -1,                        'Coffee'.indexOf 'x'
assert 3,                         'Coffee'.lastIndexOf 'f'
assert 'script',                  'Coffeescript'.slice 6,12
assert 'script',                  'Coffeescript'.slice 6
assert 'COFFEESCRIPT',            'Coffeescript'.toUpperCase()
assert 'coffeescript',            'Coffeescript'.toLowerCase()
assert 's',                       'Coffeescript'[6]
assert 'script',                  'Coffeescript'[6..12]
assert 'pt',                      'Coffeescript'[-2..]
assert 'esc',                     'Coffeescript'[5..-5]
assert ['abra','ka','dabra'],     'abra ka dabra'.split ' '
assert ['C','o','f','f','e','e'], 'Coffee'.split ''
assert ['C','o','f','f','e','e'], 'Coffee'.split ''
assert 'Coffee',                  ' Coffee  '.trim()
assert 12,                        parseInt '12'
assert '12',                      12.toString()
assert 3.14,                      parseFloat '3.14'
assert '3.141592653589793',       Math.PI.toString()
assert 'coffee',                  "coffee"
assert true,                      'coffeescript'.includes 'coffee'
assert false,                     'coffeescript'.includes 'tea'

# []
assert true, 7 in [7,8]                     
assert [7,8],         (i for i in [7,8])               
assert [[7,0],[8,1]], ([item,i] for item,i in [7,8])   
assert [9,16,25],     (x*x for x in [3,4,5])           
assert "1x2x3",       [1,2,3].join('x')              
assert [3,2,1] ,      [1,2,3].reverse()                        
assert [1,2,3],       [2,1,3].sort()                          
assert 3,             [2,1,5].length                        

# {}
assert true,              'b' of {a:7,b:8}                           
assert ['a','b'],         (key for key of {a:7,b:8})                
assert [['a',7],['b',8]], ([key,item] for key,item of {a:7,b:8})     

# & | ^ ~ << >> Bit operationer
assert [0,0,0,1], [0&0, 0&1, 1&0, 1&1]       # and 
assert [0,1,1,1], [0|0, 0|1, 1|0, 1|1]       # or
assert [0,1,1,0], [0^0, 0^1, 1^0, 1^1]       # xor
assert [-1,-2,-3],[~0, ~1, ~2]               # not
assert [1,2,4,8], [1<<0, 1<<1, 1<<2, 1<<3]   # shift left
assert [8,4,2,1], [8>>0, 8>>1, 8>>2, 8>>3]   # shift right

# lerp
assert  8, lerp 10,12,-1
assert 10, lerp 10,12,0
assert 11, lerp 10,12,0.5
assert 12, lerp 10,12,1
assert 14, lerp 10,12,2

# range
assert [0,1,2,3,4,5,6,7,8,9]  , range 10
assert [0,1,2,3,4]            , range 5
assert [1,2,3,4,5,6,7,8,9,10] , range 1,11
assert [0,2,4,6,8]            , range 0,10,2
assert [10,8,6,4,2]           , range 10,0,-2
assert [9,8,7,6,5,4,3,2,1,0]  , range 10-1,-1,-1

# [..] [...]  range operator
assert [0,1,2,3,4], [0..4]  
assert [0,1,2,3,4], [0...5] 
assert [6,7],       [5,6,7,8,9][1..2] 
assert [5,6,7],     [5,6,7,8,9][..2]  
assert [6,7,8,9],   [5,6,7,8,9][1..]  
assert [5,6,7,8,9], [5,6,7,8,9][..]   
assert [5,6,7],     [5,6,7,8,9][0..2]   
assert [6,7],       [5,6,7,8,9][1...-2] 
assert [8,9],       [5,6,7,8,9][-2..]

# _.  underscore
assert 1,                 _.min [2,1,3]
assert 3,                 _.max [2,1,3]
assert 2,                 _.first [2,1,3]
assert 3,                 _.last [2,1,3]
assert [1,3],             _.rest [2,1,3]
assert [['a',1],['b',2]], _.pairs {a:1, b:2}

assert true,              "abc" == "abc"
assert false,             [1,2] == [1,2]
assert true,              _.isEqual [1,2], [1,2]
assert false,              {a:1, b:2} == {a:1, b:2}
assert true,              _.isEqual {a:1, b:2}, {a:1, b:2}
assert [1,2],             [1,2]

assert [1,2,3],           _.sortBy [2,1,3] 
assert ['abc','ba','d'],  _.sortBy ['ba','abc','d'] 
assert ['d','ba','abc'],  _.sortBy ['ba','abc','d'], 'length'
assert ['abc','ba','d'],  _.sortBy ['ba','abc','d'], (s) -> -s.length

assert {odd: 3, even: 2}, _.countBy [1,2,3,4,5], (num) -> if num % 2 == 0 then 'even' else 'odd'
assert [["m",3], ["l",4], ["c",5]],  _.zip ['m','l','c'], [3,4,5]
assert [['m','l','c'], [3,4,5]],  _.unzip [["m",3], ["l",4], ["c",5]]

assert [2, 4, 6],         _.filter [1,2,3,4,5,6], (num) -> num % 2 == 0
assert [1, 3, 5],         _.reject [1,2,3,4,5,6], (num) -> num % 2 == 0

assert false,             _.some [1>2, 1==2, 1>=2, 1!=1]
assert true,              _.some [1>2, 1==2, 1>=2, 1!=2]
assert false,             _.every [2,4,5], (num) -> num % 2 == 0
assert true,              _.every [2,4,6], (num) -> num % 2 == 0

assert ["a", "b", "c"],   _.keys   {a:1, b:2, c:3}
assert [1,2,3],           _.values {a:1, b:2, c:3} 

"""
	a:""
	e:
		assert : "https://en.wikipedia.org/wiki/Assertion_(software_development)"
		p5Assert : 'https://christernilsson.github.io/p5Assert'

ID224 = # LinesOfCode
	b:"""
# LOC:62 bg fc sc # {} * / + ++ == if then else indexOf parseInt substring 
#        _.max rect for of text textAlign class constructor new @ extends super 

class LinesOfCode extends Application
	reset : -> super
	draw : -> super
app = new LinesOfCode
"""
	a:"""
class LinesOfCode extends Application
	reset : ->
		super
		@chapter = -1
		@stat = {}
		@h = 14
		@total = 0
		for chapter,item1 of data
			@stat[chapter] = {}
			for exercise,item2 of item1
				b = item2.b
				p1 = b.indexOf 'LOC:'
				p2 = b.indexOf ' ',p1
				loc = parseInt b.substring p1+4,p2
				@total += loc 
				@stat[chapter][exercise] = loc
	draw : ->
		fc 1,1,0
		sc()
		if @chapter == -1 then @drawAll() else @drawChapter()
	drawAll : ->
		bg 0
		i = 0
		rects = []
		for chapter,item1 of @stat
			sum = 0
			for exercise,item2 of item1
				sum += item2
			i++
			textAlign LEFT
			text chapter,5,i*@h
			textAlign RIGHT
			text sum,195,i*@h
			rects.push sum
		@max = _.max rects
		@drawRects rects, @max 
	drawChapter : ->
		bg 0.5
		i=0
		rects = []
		for chapter,item1 of @stat
			i++
			if i == @chapter
				j = 0
				for exercise,item2 of item1
					j++
					textAlign LEFT
					text exercise,5,j*@h
					textAlign RIGHT
					text item2,195,j*@h
					rects.push item2
		@drawRects rects, @max
	drawRects : (rects,m) ->
		fc 1,1,0,0.5
		sc 1,1,0
		for r,i in rects
			rect 0,3+@h*i, 200*r/m,@h-2
	mousePressed : (mx,my) ->
		if @chapter == -1 
			@chapter = 1 + int my / @h
		else
			@chapter = -1

app = new LinesOfCode 'a'
"""
	c:
		app : "reset()"
	e: 
		LinesOfCode : "https://en.wikipedia.org/wiki/Source_lines_of_code"

