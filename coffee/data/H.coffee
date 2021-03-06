ID_Hex =
	v:'2017-04-29'
	k:'bg fc sc range operators dist for [] quad circle if text class'
	l:47
	h:2
	b:"""
class Hex extends Application
	reset : ->
		super
	draw : ->
	newGame : ->
	undo : ->
	mousePressed : (mx,my) ->
app = new Hex
"""

	a:"""
class Hex extends Application
	reset : ->
		super
		@A = 6
		@B = 5
		@C = 3
		@newGame()

	mousePressed : (mx,my) ->
		index = -1
		for i in range -5,6
			for j in range -5,6
				x = 100 + i*(2*@A+1) + @A*j
				y = 100 + j*(2*@B+@C-1)
				if dist(x,y,mx,my) < 7 then index = 11*(j+5)+i+5
		if index >= 0 and @board[index] == 0
			@history.push index
			n = @history.length
			if n % 2 == 0 then n = -n
			@board[index] = n

	newGame : ->
		@history = []
		@board = Array(11*11).fill 0

	undo : ->
		if @history.length > 0
			index = @history.pop()
			@board[index] = 0

	draw : ->
		bg 0.5
		textAlign CENTER,CENTER
		textSize 9
		for i in range -5,6
			for j in range -5,6
				index = 11*(j+5)+i+5
				x = 100+i*(2*@A+1) + @A*j
				y = 100+j*(2*@B+@C-1)
				bc = @B+@C
				sc 0,1,0
				fc 0,1,0
				quad x,y-bc, x,y+bc, x-@A,y+@C, x-@A,y-@C
				quad x,y-bc, x,y+bc, x+@A,y+@C, x+@A,y-@C
				n = @board[index]
				if n != 0
					if n>0 then fc(1) else fc(0)
					circle x,y,6
					sc()
					if n>0 then fc(0) else fc(1)
					text abs(n),x,y

app = new Hex "a"
"""
	c:
		app : "reset()|newGame()|undo()"
	e:
		Play : "http://www.lutanho.net/play/hex.html"
		Wikipedia : "https://en.wikipedia.org/wiki/Hex_(board_game)"


