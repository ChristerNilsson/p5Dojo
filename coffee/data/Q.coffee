ID_quad =
	v: '2018-04-27'
	k: 'quad'
	l: 1
	h: 0
	b: """
# Rita en fyrhörning

# Draw a quadrangle

#    x1,y1,x2,y2, x3,y3,x4,y4
quad 20,20,20,80,100,80,80,40
"""
	a: """
# Rita en fyrhörning

# Draw a quadrangle

#    x1,y1,x2,y2, x3,y3,x4,y4
quad 20,20,20,80,100,80,80,40
"""

ID_quads =
	v:'2018-04-26'
	k:'fc quad sw sc'
	l:6
	h:1
	b:"""
# quad x1,y1, x2,y2, x3,y3, x4,y4
"""
	a:"""
bg 0.5
sw 2
sc 0
fc 1,1,0,0.5
quad 150,100, 180,40, 40,20, 100,140
fc 1,0,0,0.5
quad 160,150, 190,90, 50,70, 110,190
"""

ID_Quiz =
	v:'2017-05-13'
	k:'bg sw fc text operators class for range []'
	l:35
	b: """
class Quiz extends Application
	reset : ->
		super
		@seed = 0
		@questions = []
		for i in range 5
			@questions.push @makeQuestion @randint 2
		@state = 0
	makeQuestion : (typ) ->
		if typ == 0
			a = @randint 20
			b = @randint 20
			["Vad är "+ a + "+" + b + "?", (a + b).toString()]
		else if typ == 1
			qs = []
			qs.push "Sverige Stockholm"
			qs.push "Tyskland Berlin"
			qs.push "Finland Helsingfors"
			[a,b] = qs[@randint 3].split ' '
			[("Vad heter huvudstaden i "+ a + "?"), b]
	draw : ->
		textAlign CENTER,CENTER
		textSize 12
		fc 1,1,0
		sc()
		text @state,100,50
		if @state == @questions.length
			text "Grattis!",100,100
		else
			text @questions[@state][0],100,100
	enter : (answer) ->
		answer = @readText()
		print answer,@questions[@state][1]
		if answer == @questions[@state][1] then @state++
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

app = new Quiz
"""
	a: """
class Quiz extends Application
	reset : ->
		super
		@seed = 0
		@questions = []
		for i in range 5
			@questions.push @makeQuestion @randint 2
		@state = 0
	makeQuestion : (typ) ->
		if typ == 0
			a = @randint 20
			b = @randint 20
			["Vad är "+ a + "+" + b + "?", (a + b).toString()]
		else if typ == 1
			qs = []
			qs.push "Sverige Stockholm"
			qs.push "Tyskland Berlin"
			qs.push "Finland Helsingfors"
			[a,b] = qs[@randint 3].split ' '
			[("Vad heter huvudstaden i "+ a + "?"), b]
	draw : ->
		textAlign CENTER,CENTER
		textSize 12
		fc 1,1,0
		sc()
		text @state,100,50
		if @state == @questions.length
			text "Grattis!",100,100
		else
			text @questions[@state][0],100,100
	enter : (answer) ->
		answer = @readText()
		print answer,@questions[@state][1]
		if answer == @questions[@state][1] then @state++
	randint : (n) -> int n * fraction 10000 * Math.sin @seed++

app = new Quiz "a"
"""
	c:
		app : "reset()|enter()"
