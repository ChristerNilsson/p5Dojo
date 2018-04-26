ID_fc =
	v: '2018-04-27'
	k: 'fc circle sw sc'
	l: 11
	h: 0
	b: """
# Välj fyllningsfärg

# Set fill color

# fc r,g,b

circle 100,20,10 

fc 1,0,0 
circle 100,50,10

fc()
circle 100,80,10

sw 10
circle 100,110,20

sc 0
circle 100,140,20

fc 1,1,0
circle 100,170,20
"""
	a: """
circle 100,20,10 

fc 1,0,0 
circle 100,50,10

fc()
circle 100,80,10

sw 10
circle 100,110,20

sc 0
circle 100,140,20

fc 1,1,0
circle 100,170,20
"""

ID_FlagKorea =
	v:'2018-04-23'
	k:'bg sc fc rect sw arc circle push pop translate scale rotate'
	l:44
	h:3
	b:""
	a:"""
angleMode DEGREES
rectMode CENTER
vinkel = atan2 2, 3

ram = ->
	fc 1
	sw 1/60
	sc 0
	rect 0,0,3,2

yinyang = ->
	sc()

	fc 1,0,0
	arc 0,0,1,1,180,0

	fc 0,0,1
	arc 0,0,1,1,0,180

	fc 1,0,0
	circle -1/4,0,1/4

	fc 0,0,1
	circle 1/4,0,1/4

streck = (pattern,offset,black,white) ->
	push()
	translate offset,0
	for p in pattern
		translate black/2,0
		fc 0
		sc 1
		rect 0,0,1/12,1/2
		if p == 0 
			fc 1
			sc 1
			rect 0,0,1/12,1/24
		translate black/2,0
		translate white,0

	pop()

bg 0.5
translate 100,100
scale 60

ram()

rotate vinkel

yinyang()

streck [1,1,1],-1/2-1/4,-1/12,-1/24 
streck [0,0,0],1/2+1/4,1/12,1/24 

rotate -2 * vinkel

streck [1,0,1],-1/2-1/4,-1/12,-1/24 
streck [0,1,0],1/2+1/4,1/12,1/24 
"""
	e:
		"Wikipedia" : "https://en.wikipedia.org/wiki/Flag_of_South_Korea#/media/File:Flag_of_South_Korea_(construction_sheet).svg"

ID_FlagUnitedKingdom =
	v:'2018-04-24'
	k:'bg sc fc rect rectMode rotate translate scale'
	l:38
	h:3
	b:""
	a:"""

diagonal = ->
	rectMode CORNER
	fc 1
	rect 0,-3,40,6
	fc 1,0,0
	rect 0,-2,40,2
diagonal2 = (vinkel) ->
	rotate vinkel
	diagonal() 
	rotate 180
	diagonal() 
	rotate -vinkel
arm = (r,g,b,w,h) ->
	rectMode CENTER
	fc r,g,b
	rect 0,0,w,h
angleMode DEGREES
vinkel = atan2 30, 60
push()
translate 100,100
scale 3
sc()
bg 0,0,1
diagonal2 vinkel
diagonal2 -vinkel
for i in range 2 # white
	arm 1,1,1,10,70
	rotate 90
for i in range 2 # red
	arm 1,0,0,6,70
	rotate 90
pop()
fc 0.5
sc()
rect 0,0,10,200
rect 190,0,11,200
rect 0,0,201,55
rect 0,145,201,56
"""
	e:
		"Wikipedia" : "https://en.wikipedia.org/wiki/Union_Jack#/media/File:United_Kingdom_Flag_Specifications.svg"

ID_for =
	v: '2018-04-27'
	k: 'for range sw point sc'
	l: 11
	h: 0
	b: """
# for loop

# for i in range n

# Prova att halvera alla tal, ett i taget!
# Försök förutse effekterna!

# Try to half all numbers, one at a time!
# Try to anticipate the effects!

sw 10
for i in range 10
	x = 10 + 20 * i
	y = 90
	point x,y 
	
sw 5
sc 1,0,0
for i in range 10
	x = 110
	y = 10 + 20 *i
	point x,y
"""
	a: """
# for loop

# for i in range n

# Prova att halvera alla tal, ett i taget!
# Försök förutse effekterna!

# Try to half all numbers, one at a time!
# Try to anticipate the effects!

sw 10
for i in range 10
	x = 10 + 20 * i
	y = 90
	point x,y 
	
sw 5
sc 1,0,0
for i in range 10
	x = 110
	y = 10 + 20 *i
	point x,y
"""

ID_for_1 =
	v:'2018-04-23'
	k:'range rect for lerp'
	l:3
	h:1
	b:"""
# Börja med att rita de två första kvadraterna mha rect
# Därefter kan du börja med for-loopen
# De parametrar som är OLIKA är lämpliga att lerpas

rect  5,5,10,10
rect 25,5,10,10
#     x         lerpa?

for i in range 10
	x = lerp 5,25,i # eller x = 5 + 20 * i
	y = 5
	w = 10
	h = 10
	rect x,y,w,h
"""
	a:"""
for i in range 10
	x = 5+20*i
	rect x,5, 10,10
"""

ID_for_2 =
	v:'2018-04-23'
	k:'range rect for lerp'
	l:3
	h:1
	b:"""
# Kopiera föregående exempel så här:
# 1 Gå till HorizontalSquares
# 2 Markera allt med ctrl-A
# 3 Kopiera med ctrl-C
# 4 Gå till VerticalSquares
# 5 Klistra in med ctrl-V
"""
	a:"""
for i in range 10
	y = 5+20*i
	rect 5,y, 10,10
"""

ID_for_3 =
	v:'2017-04-29'
	k:'range rect for lerp'
	l:4
	h:1
	b:""
	a:"""
for i in range 10
	x = 5+20*i
	y = 5+20*i
	rect x,y, 10,10
"""

ID_for_4 =
	v:'2018-04-12'
	k:'range rect rectMode for lerp'
	l:7
	h:2
	b:"""
rectMode CENTER
"""
	a:"""
rectMode CENTER
for i in range 10
	x = 10+20*i
	y = 10
	w = 2*i
	h = 2*i
	rect x,y, w,h
"""

ID_for_5 =
	v:'2017-04-29'
	k:'fc range for lerp rect rectMode'
	l:8
	h:2	
	b:""
	a:"""
rectMode CENTER
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	w = 2*i
	h = 2*i
	rect x,y,w,h
"""

ID_for_6 =
	v:'2017-04-29'
	k:'range fc circle for lerp'
	l:6
	h:2
	b:"""
"""
	a:"""
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	r = i
	circle x,y,r
"""

ID_for_7 =
	v:'2017-10-31'
	k:'range fc circle for lerp'
	l:5
	h:2
	b:""
	a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	r = 10 * i
	circle 100,100, r
"""

ID_for_8 =
	v:'2017-04-29'
	k:'range fc circle for lerp'
	l:6
	h:2
	b:""
	a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	x = 10*i
	y = 10*i
	r = 10*i
	circle x,y,r
"""

ID_for_9 =
	v:'2018-04-24'
	k:'bg sc range for lerp line'
	l:9
	h:2
	b: """
sc 1,1,0

line  0,0,200,200
line 20,0,180,200
#    x1    x2       lerpa?

line 0,200,200, 0
line 0,180,200,20
#       y1     y2   lerpa? 

for i in range 10
	
	x1 = lerp 0,20,i
	y1 = 0
	x2 = lerp 200,180,i
	y2 = 200
	line x1,y1,x2,y2

	x1 = 0
	y1 = lerp 200,180,i
	x2 = 200
	y2 = lerp 0,20,i
	line x1,y1,x2,y2
"""
	a: """
bg 0
sc 1,1,0
for i in range 10
	x1 = lerp 0,20,i
	x2 = lerp 200,180,i
	line x1,0, x2,200
	y1 = lerp 20,40,i
	y2 = lerp 180,160,i
	line 0,y1, 200,y2
"""

ID_for_10 =
	v:'2017-04-29'
	k:'bg range for lerp line'
	l:5
	h:2
	b:"# (Noel Watson)\n"
	a:"""
bg 0
for i in range 37
	line 10,10, 190,10+i*5
	line 10,100, 190,10+i*5
	line 10,190, 190,10+i*5
"""

ID_for_11 =
	v:'2017-04-29'
	k:'sc sw range for line'
	l:5
	h:2
	b:""
	a:"""
sc 1,1,0
sw 2
for i in range 10,200,10
	line 10,i,190,i
	line i,190, i,10
"""

ID_for_for =
	v:'2018-04-27'
	k:'range rect for lerp'
	l:7
	h:0
	b:"""
# dubbel for loop

# double for loop

rect  5, 5,10,10
rect 25,25,10,10
#     x  y       lerp

for i in range 9
	for j in range 5
		x = lerp 5,25,i
		y = lerp 5,25,j
		w = 10
		h = 10
		rect x,y,w,h
"""
	a:"""
# dubbel for loop

# double for loop

rect  5, 5,10,10
rect 25,25,10,10
#     x  y       lerp

for i in range 9
	for j in range 5
		x = lerp 5,25,i
		y = lerp 5,25,j
		w = 10
		h = 10
		rect x,y,w,h
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
	v:'2017-05-30'
	k:'bg sc fc range for if quad line operators class []'
	l:138
	b:"""
# Stack-1 : < > == <= >= != + - * / // % %% and or xor & | ^ bit
# Stack   : abs not swp rot ~ biti bitj bitk
# Stack+1 : i j k t dup bitij bitik bitjk
# Stack+2 : bitijk

# false      <=> 0
#  true      <=> 1
# i b bit    <=> b >> i & 1
# b biti     <=> b >> i & 1
# b bitij    <=> i b bit j b bit
# b bitijk   <=> i b bit j b bit k b bit
# Exempel: t 10 % k ==

class ForthHaiku3D extends Application
	reset : (n,dx,dy)->
		super
	draw : ->
	enter : ->
	tick : ->
	mousePressed : ->
app = new ForthHaiku3D
"""
	a:"""
class ForthHaiku3D extends Application
	reset : (n,dx,dy)->
		super
		@SHADE = [0.5,0.75,1]
		@N = n
		@DX = dx
		@DY = dy
		@showGrid = true
		@clear()
		@t = 0
	clear : -> @blocks = Array(@N*@N*@N).fill 0
	add : (i,j,k) -> @blocks[@N*@N*k+@N*j+i] = 1
	draw : ->
		bg 0.5
		if @showGrid then @grid()
		sc()
		@drawBlock index for index in range @N*@N*@N
	drawBlock : (index) ->
		f = (i,j,k) => [100+(@N-i)*2*@DY-2*(@N-j)*@DY, 200-(@N-j)*@DY-(@N-i)*@DY - k*2*@DY]
		q = (a,b,c,d) -> quad a[0],a[1], b[0],b[1], c[0],c[1], d[0],d[1]
		ix=index
		i = ix % @N; ix //= @N
		j = ix % @N; ix //= @N
		k = ix
		block = @blocks[index]
		if not block? or block==0 then return
		[r,g,b] = [i/(@N-1),j/(@N-1),k/(@N-1)] # borde vara i,j,k
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
		[h2,h3,h4] = [200-2*@N*@DY, 200-@N*@DY, 200]
		[w2,w3,w4] = [100-@N*@DX,   100,        100+@N*@DX]
		for i in range @N+1
			line w3+@DX*i, h4-@DY*i, w2+@DX*i, h3-@DY*i
			line w2+@DX*i, h3+@DY*i, w3+@DX*i, h2+@DY*i
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
		if s=='' then s='k t ' + @N + ' % =='
		arr = s.split ' '
		@words = arr.length
		@trace = ''
		@count = 0
		for i in range @N
			for j in range @N
				for k in range @N
					stack = []
					for cmd in arr
						if cmd == 'dup' then stack.push _.last stack
						else if cmd == 'swp'
							n = stack.length - 1
							[stack[n-1],stack[n]] = [stack[n],stack[n-1]]
						else if cmd == 'rot' then stack.push stack.shift()
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
						else if cmd == '/'
							a = stack.pop()
							stack.push stack.pop() / a
						else if cmd == '//'
							a = stack.pop()
							stack.push stack.pop() // a
						else if cmd == '%'
							a = stack.pop()
							stack.push stack.pop() % a
						else if cmd == '%%'
							a = stack.pop()
							stack.push stack.pop() %% a
						else if cmd == 'bit' then stack.push stack.pop() >> stack.pop() & 1
						else if cmd == 'biti' then stack.push stack.pop() >> i & 1
						else if cmd == 'bitj' then stack.push stack.pop() >> j & 1
						else if cmd == 'bitk' then stack.push stack.pop() >> k & 1
						else if cmd == 'bitij'
							bits = stack.pop()
							stack = stack.concat [bits >> i & 1, bits >> j & 1]
						else if cmd == 'bitik'
							bits = stack.pop()
							stack = stack.concat [bits >> i & 1, bits >> k & 1]
						else if cmd == 'bitjk'
							bits = stack.pop()
							stack = stack.concat [bits >> j & 1, bits >> k & 1]
						else if cmd == 'bitijk'
							bits = stack.pop()
							stack = stack.concat [bits >> i & 1, bits >> j & 1, bits >> k & 1]
						else if cmd == '&' then stack.push stack.pop() & stack.pop()
						else if cmd == '|' then stack.push stack.pop() | stack.pop()
						else if cmd == '^' then stack.push stack.pop() ^ stack.pop()
						else if cmd == '~' then stack.push ~stack.pop()
						else if cmd == 'and'
							[a,b] = [stack.pop(),stack.pop()]
							stack.push digit a!=0 and b!=0
						else if cmd == 'or'
							[a,b] = [stack.pop(),stack.pop()]
							stack.push digit a!=0 or b!=0
						else if cmd == 'xor'
							a = digit stack.pop() != 0
							b = digit stack.pop() != 0
							stack.push digit a+b == 1
						else if cmd == 'not' then stack.push digit stack.pop() == 0
						else if cmd == 'abs' then stack.push abs stack.pop()
						else stack.push parseFloat cmd
						if i==@N-1 and j==@N-1 and k==@N-1 then @trace += cmd + ' [' + stack.join(',') + '] '
					if stack.pop() != 0
						@count++
						@add i,j,k
		@trace = @trace.trim()
app = new ForthHaiku3D "a"

"""
	c:
		app : "reset 2,50,25|reset 10,10,5|reset 17,6,3|enter()|tick()"
	e:
		ForthHaiku : "http://forthsalon.appspot.com/haiku-editor"
		Exempel : 'ForthHaiku3D.html'
		"Beck & Jung" : 'https://www.google.se/search?q=beck+jung&tbm=isch&imgil=fTDB34quIvQVtM%253A%253BujSokE1Q4La-QM%253Bhttp%25253A%25252F%25252Fonline.auktionsverket.se%25252F1111%25252F109534-beck-jung-computer-ink-plot&source=iu&pf=m&fir=fTDB34quIvQVtM%253A%252CujSokE1Q4La-QM%252C_&usg=__eBA4v2Ol5RdVComTBJqPkozH59s%3D&biw=1920&bih=1108&dpr=1&ved=0ahUKEwiH0qmqzInUAhVmDZoKHTcYD7wQyjcIQw&ei=hQsmWcf7EOaa6AS3sLzgCw#imgrc=fTDB34quIvQVtM:'

ID_Function =
	v:'2018-04-24'
	k:'-> text fc sc textSize textAlign'
	l:17
	h:0
	b:"""
# Följande tre rader upprepas fem gånger:
#
#   textSize size
#   fc r,g,b
#   text txt,x,y
#
# Dessa kan man lämpligen göra en funktion av.
# Funktioner används för att:
#   Göra koden mera lättläst
#   Spara rader
#   Underlätta återanvändning
#   Skapa struktur i programmet

textAlign CENTER,CENTER
sc()

textSize 180
fc 1,0,0
text 'p5',100,100

textSize 18
fc 0,0,0
text 'Lauren',155,43

textSize 18
fc 1,1,1
text 'McCarthy',155,180

textSize 24
fc 1,1,0
text 'Coding',50,20

textSize 30
fc 0,1,0
text 'Train',50,48
"""
	a:"""
textAlign CENTER,CENTER
sc()

textSize 180
fc 1,0,0
text 'p5',100,100

textSize 18
fc 0
text 'Lauren',155,43

textSize 18
fc 1
text 'McCarthy',155,180

textSize 24
fc 1,1,0
text 'Coding',50,20

textSize 30
fc 0,1,0
text 'Train',50,48
"""
	e:
		Wikipedia : "https://sv.wikipedia.org/wiki/Funktion_(programmering)"
