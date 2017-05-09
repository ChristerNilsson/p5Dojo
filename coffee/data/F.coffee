ID_Five =
	v:'2017-04-29'
	k:'bg circle fc sc'
	b: "# LOC:12\n"
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
	b:"""
# LOC:45
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

