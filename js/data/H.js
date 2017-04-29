// Generated by CoffeeScript 1.11.1
var ID_Hex;

ID_Hex = {
  v: '2017-04-29',
  b: "# LOC:47 bg fc sc range # + * - % < == != dist for in [] push pop length quad circle\n#        if then else text textAlign textSize class extends constructor new @ super ->\n\nclass Hex extends Application\n	reset : ->\n		super\n	draw : ->\n	newGame : ->\n	undo : ->\n	mousePressed : (mx,my) ->\napp = new Hex",
  a: "class Hex extends Application\n	reset : ->\n		super\n		@A = 6\n		@B = 5\n		@C = 3\n		@newGame()\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for i in range -5,6\n			for j in range -5,6\n				x = 100 + i*(2*@A+1) + @A*j\n				y = 100 + j*(2*@B+@C-1)\n				if dist(x,y,mx,my) < 7 then index = 11*(j+5)+i+5\n		if index >= 0 and @board[index] == 0\n			@history.push index\n			n = @history.length\n			if n % 2 == 0 then n = -n\n			@board[index] = n\n\n	newGame : ->\n		@history = []\n		@board = Array(11*11).fill 0\n\n	undo : ->\n		if @history.length > 0\n			index = @history.pop()\n			@board[index] = 0\n\n	draw : ->\n		bg 0.5\n		textAlign CENTER,CENTER\n		textSize 9\n		for i in range -5,6\n			for j in range -5,6\n				index = 11*(j+5)+i+5\n				x = 100+i*(2*@A+1) + @A*j\n				y = 100+j*(2*@B+@C-1)\n				bc = @B+@C\n				sc 0,1,0\n				fc 0,1,0\n				quad x,y-bc, x,y+bc, x-@A,y+@C, x-@A,y-@C\n				quad x,y-bc, x,y+bc, x+@A,y+@C, x+@A,y-@C\n				n = @board[index]\n				if n != 0\n					if n>0 then fc(1) else fc(0)\n					circle x,y,6\n					sc()\n					if n>0 then fc(0) else fc(1)\n					text abs(n),x,y\n\napp = new Hex \"a\"",
  c: {
    app: "reset()|newGame()|undo()"
  },
  e: {
    Play: "http://www.lutanho.net/play/hex.html",
    Wikipedia: "https://en.wikipedia.org/wiki/Hex_(board_game)"
  }
};
