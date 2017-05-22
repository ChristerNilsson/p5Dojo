ID_Five =
	v:'2017-04-29'
	k:'bg circle fc sc'
	l:12
	b: ""
	a: """
bg 0.5
sc()
fc 1
circle 100,100,20
fc 1,0,0
circle 40,40,20
fc 1,1,0
circle 40,160,20
fc 0,1,0
circle 160,160,20
fc 0,0,1
circle 160,40,20
"""

ID_ForthHaiku =
	v:'2017-04-29'
	k:'fc range if [] _.last rect for parseFloat class'
	l:45
	b:"""
# Lös först exemplen mha länken nedan!

class ForthHaiku extends Application
	reset : ->
		super
	resolution : (@n,@size) ->
	nextExample : ->
	prevExample : ->
app = new ForthHaiku
"""
	a:"""
class ForthHaiku extends Application
	draw : ->
		bg 0.5
		digit = (bool) -> if bool then 1 else 0
		stack = []
		dict = {}
		dict['x'] = => stack.push x / @n
		dict['y'] = => stack.push y / @n
		dict['<'] = -> stack.push(digit stack.pop() > stack.pop())
		dict['>'] = -> stack.push(digit(stack.pop() < stack.pop()))
		dict['+'] = -> stack.push stack.pop() + stack.pop()
		dict['-'] = -> stack.push -stack.pop() + stack.pop()
		dict['*'] = -> stack.push stack.pop() * stack.pop()
		dict['sq'] = ->
			temp = stack.pop()
			stack.push temp * temp
		dict['%'] = ->
			a = stack.pop()
			b = stack.pop()
			stack.push b % a
		dict['floor'] = -> stack.push floor stack.pop()
		dict['and'] = -> #  pga kortslutning
			a = stack.pop() != 0
			b = stack.pop() != 0
			stack.push digit a and b
		arr = @example.split ' '
		sc()
		for x in range @n
		  for y in range @n
		    stack = []
		    for cmd in arr
		      if dict[cmd] then dict[cmd]()
		      else stack.push parseFloat cmd
		    stack.push 0 for i in range 3-stack.length
		    fc stack[0], stack[1], stack[2]
		    rect @size * x, @size * y, @size, @size
	reset : ->
		super
		@resolution()
		@select 0
	resolution : (@n=10,@size=20) ->
	nextExample : -> @select @index+1
	prevExample : -> @select @index-1
	select : (n) ->
		examples = '1|1 1|0 1|0.25 0.25 0.25|1 1 1|x|x y|x y >|x 0.5 >|x 0.5 - sq y 0.5 - sq + 0.25 <|x 8 * floor y 8 * floor + 2 %|x 0.5 < y 0.5 <|x 0.5 < y 0.5 < and'
		examples = examples.split '|'
		@index = constrain n,0,examples.length-1
		@example = examples[@index]

app = new ForthHaiku "a"
"""
	c:
		app : "reset()|resolution 10,20|resolution 20,10|resolution 50,4|resolution 100,2|resolution 200,1|nextExample()|prevExample()"
	e:
		"ForthHaiku" : "http://forthsalon.appspot.com"

ID_ForthHaiku3D =
	v:'2017-05-22'
	k:'bg sc fc range for if quad line operators class []'
	l:83
	b:"""
# Kommandon: i j k < > == <= >= != + - * / % and or not dup
# false == 0, true == 1
# i 5 == j 5 == k 5 == or or
# i 5 != j 5 != k 5 != and and
# 2 i <= i 7 <= and 2 j <= j 7 <= and 2 k <= k 7 <= and + + 1 <=
# i 4.5 - dup * j 4.5 - dup * k 4.5 - dup * + + 23 <

class ForthHaiku3D extends Application
	reset : ->
		super
	draw : ->
	enter : ->
	mousePressed : ->
app = new ForthHaiku3D
"""
	a:"""
class ForthHaiku3D extends Application
	reset : ->
		super
		@shade = [0.5,0.75,1]
		@n=10
		@dx=10
		@dy=5
		@showGrid = true
		@clear()
	clear : -> @blocks = Array(1000).fill 0
	add : (i,j,k) -> @blocks[@n*@n*i+@n*j+k] = 1
	draw : ->
		bg 0.5
		if @showGrid then @grid()
		sc()
		@drawBlock index for index in range @n*@n*@n
	drawBlock : (index) ->
		f = (i,j,k) => [100+(10-i)*@dx-2*(10-j)*@dy, 200-(10-j)*@dy-(10-i)*@dx/2 - k*@dy*2]
		q = (a,b,c,d) -> quad a[0],a[1], b[0],b[1], c[0],c[1], d[0],d[1]
		ix=index
		k = ix % @n; ix //= @n
		j = ix % @n; ix //= @n
		i = ix
		block = @blocks[index]
		if not block? or block==0 then return
		[r,g,b] = [j/9,i/9,k/9] # borde vara i,j,k
		p0 = f i,  j,  k # egentligen osynlig
		p1 = f i+1,j,  k
		p2 = f i,  j+1,k
		p3 = f i+1,j+1,k
		p4 = f i  ,j,  k+1
		p5 = f i+1,j,  k+1
		p6 = f i  ,j+1,k+1
		p7 = f i+1,j+1,k+1
		[si,sj,sk] = @shade
		fc r*sk,g*sk,b*sk
		q p4,p5,p7,p6 # roof
		fc r*sj,g*sj,b*sj
		q p2,p6,p7,p3 # left
		fc r*si,g*si,b*si
		q p1,p3,p7,p5 # right
	grid : ->
		sc 0.75
		[w2,w3,w4] = [2*200/4,3*200/4,4*200/4]
		for i in range @n+1
			line w2+@dx*i, w4-@dy*i,    @dx*i, w3-@dy*i
			line w2-@dx*i, w4-@dy*i, w4-@dx*i, w3-@dy*i
	mousePressed : ->
		@showGrid = not @showGrid
		@enter()
	enter : ->
		@clear()
		s = @readText()
		if s=='' then s='i 5 == j 5 == k 5 == or or'
		arr = s.split ' '
		for i in range 10
			for j in range 10
				for k in range 10
					stack = []
					for cmd in arr
						if cmd == 'i' then stack.push i
						else if cmd == 'j' then stack.push j
						else if cmd == 'k' then stack.push k
						else if cmd == '<' then (stack.push if stack.pop() > stack.pop() then 1 else 0)
						else if cmd == '>' then (stack.push if stack.pop() < stack.pop() then 1 else 0)
						else if cmd == '==' then (stack.push if stack.pop() == stack.pop() then 1 else 0)
						else if cmd == '<=' then (stack.push if stack.pop() >= stack.pop() then 1 else 0)
						else if cmd == '>=' then (stack.push if stack.pop() <= stack.pop() then 1 else 0)
						else if cmd == '!=' then (stack.push if stack.pop() != stack.pop() then 1 else 0)
						else if cmd == '+' then stack.push stack.pop() + stack.pop()
						else if cmd == '-' then stack.push stack.pop() - stack.pop()
						else if cmd == '*' then stack.push stack.pop() * stack.pop()
						else if cmd == '/' then stack.push stack.pop() / stack.pop()
						else if cmd == '%' then stack.push stack.pop() % stack.pop()
						else if cmd == 'and' then stack.push stack.pop() * stack.pop()
						else if cmd == 'or'
							sum = stack.pop() + stack.pop()
							stack.push if sum >= 1 then 1 else 0
						else if cmd == 'not' then stack.push 1 - stack.pop()
						else if cmd == 'dup' then stack.push _.last stack
						else stack.push parseFloat cmd
					if stack.pop() == 1 then @add i,j,k
app = new ForthHaiku3D "a"

"""
	c:
		app : "reset()|enter()"
	e:
		ForthHaiku : "http://forthsalon.appspot.com/haiku-editor"
