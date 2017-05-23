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
	v:'2017-05-23'
	k:'bg sc fc range for if quad line operators class []'
	l:89
	b:"""
# Kommandon: i j k t < > == <= >= != + - * / % and or not dup
# false == 0, true == 1
# Exempel: 1
# Exempel: k t 10 % ==
# Exempel: k t 10 % == i 9 == j 9 == and and
# Exempel: i 4.5 - dup * j 4.5 - dup * k 4.5 - dup * + + t 2 * 55 % <

class ForthHaiku3D extends Application
	reset : ->
		super
	draw : ->
	enter : ->
	tick : ->
	mousePressed : ->
app = new ForthHaiku3D
"""
	a:"""
class ForthHaiku3D extends Application
	reset : ->
		super
		@SHADE = [0.5,0.75,1]
		@N=10
		@DX=10
		@DY=5
		@showGrid = true
		@clear()
		@t = 0
	clear : -> @blocks = Array(1000).fill 0
	add : (i,j,k) -> @blocks[@N*@N*i+@N*j+k] = 1
	draw : ->
		bg 0.5
		if @showGrid then @grid()
		sc()
		@drawBlock index for index in range @N*@N*@N
	drawBlock : (index) ->
		f = (i,j,k) => [100+(10-i)*@DX-2*(10-j)*@DY, 200-(10-j)*@DY-(10-i)*@DX/2 - k*@DY*2]
		q = (a,b,c,d) -> quad a[0],a[1], b[0],b[1], c[0],c[1], d[0],d[1]
		ix=index
		k = ix % @N; ix //= @N
		j = ix % @N; ix //= @N
		i = ix
		block = @blocks[index]
		if not block? or block==0 then return
		[r,g,b] = [i/9,j/9,k/9] # borde vara i,j,k
		p0 = f i,  j,  k # egentligen osynlig
		p1 = f i+1,j,  k
		p2 = f i,  j+1,k
		p3 = f i+1,j+1,k
		p4 = f i  ,j,  k+1
		p5 = f i+1,j,  k+1
		p6 = f i  ,j+1,k+1
		p7 = f i+1,j+1,k+1
		[si,sj,sk] = @SHADE
		fc r*sj,g*sj,b*sj
		q p2,p6,p7,p3 # left
		fc r*si,g*si,b*si
		q p1,p3,p7,p5 # right
		fc r*sk,g*sk,b*sk
		q p4,p5,p7,p6 # roof
	grid : ->
		sc 0.75
		[w2,w3,w4] = [2*200/4,3*200/4,4*200/4]
		for i in range @N+1
			line w2+@DX*i, w4-@DY*i,    @DX*i, w3-@DY*i
			line w2-@DX*i, w4-@DY*i, w4-@DX*i, w3-@DY*i
	mousePressed : ->
		@showGrid = not @showGrid
		@enter()
	tick : ->
		@t = @t + 1
		@enter()
	enter : ->
		digit = (bool) -> if bool then 1 else 0
		@clear()
		s = @readText().trim()
		if s=='' then s='k t 10 % =='
		arr = s.split ' '
		for i in range @N
			for j in range @N
				for k in range @N
					stack = []
					for cmd in arr
						if cmd == 'dup' then stack.push _.last stack
						else if cmd == 'i'  then stack.push i
						else if cmd == 'j'  then stack.push j
						else if cmd == 'k'  then stack.push k
						else if cmd == 't'  then stack.push @t
						else if cmd == '<'  then stack.push digit stack.pop() > stack.pop()
						else if cmd == '>'  then stack.push digit stack.pop() < stack.pop()
						else if cmd == '==' then stack.push digit stack.pop() == stack.pop()
						else if cmd == '<=' then stack.push digit stack.pop() >= stack.pop()
						else if cmd == '>=' then stack.push digit stack.pop() <= stack.pop()
						else if cmd == '!=' then stack.push digit stack.pop() != stack.pop()
						else if cmd == '+'  then stack.push stack.pop() + stack.pop()
						else if cmd == '-'  then stack.push -stack.pop() + stack.pop()
						else if cmd == '*'  then stack.push stack.pop() * stack.pop()
						else if cmd == '/'  then stack.push 1 / (stack.pop() / stack.pop())
						else if cmd == '%'
							a = stack.pop()
							stack.push stack.pop() % a
						else if cmd == 'and' then stack.push stack.pop() * stack.pop()
						else if cmd == 'or'  then stack.push digit stack.pop() + stack.pop() >= 1
						else if cmd == 'not' then stack.push 1 - stack.pop()
						else stack.push parseFloat cmd
					if stack.pop() != 0 then @add i,j,k
app = new ForthHaiku3D "a"

"""
	c:
		app : "reset()|enter()|tick()"
	e:
		ForthHaiku : "http://forthsalon.appspot.com/haiku-editor"
		Exempel1 : 'http://www.artificial.dk/articles/images/digipio0504/Beck_jung_fargkub1_lille.jpg'
		Exempel2 : 'https://s-media-cache-ak0.pinimg.com/236x/c8/42/ba/c842baf257e9e23e938f7d6706eb4b7b.jpg'
		Exempel3 : 'http://www.ultima15.com/resources/images/beckjung1.jpg'
		Exempel4 : 'http://online.auktionsverket.se/1111/109534-beck-jung-computer-ink-plot/380109534.jpg'
		Exempel5 : 'http://img.tradera.net/images/994/154314994_1.jpg'