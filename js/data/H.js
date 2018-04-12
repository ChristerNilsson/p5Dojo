'use strict';

// Generated by CoffeeScript 2.0.3
var ID_Hex, ID_HorizontalLine, ID_HorizontalSquares;

ID_Hex = {
  v: '2017-04-29',
  k: 'bg fc sc range operators dist for [] quad circle if text class',
  l: 47,
  b: "class Hex extends Application\n	reset : ->\n		super\n	draw : ->\n	newGame : ->\n	undo : ->\n	mousePressed : (mx,my) ->\napp = new Hex",
  a: "class Hex extends Application\n	reset : ->\n		super\n		@A = 6\n		@B = 5\n		@C = 3\n		@newGame()\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for i in range -5,6\n			for j in range -5,6\n				x = 100 + i*(2*@A+1) + @A*j\n				y = 100 + j*(2*@B+@C-1)\n				if dist(x,y,mx,my) < 7 then index = 11*(j+5)+i+5\n		if index >= 0 and @board[index] == 0\n			@history.push index\n			n = @history.length\n			if n % 2 == 0 then n = -n\n			@board[index] = n\n\n	newGame : ->\n		@history = []\n		@board = Array(11*11).fill 0\n\n	undo : ->\n		if @history.length > 0\n			index = @history.pop()\n			@board[index] = 0\n\n	draw : ->\n		bg 0.5\n		textAlign CENTER,CENTER\n		textSize 9\n		for i in range -5,6\n			for j in range -5,6\n				index = 11*(j+5)+i+5\n				x = 100+i*(2*@A+1) + @A*j\n				y = 100+j*(2*@B+@C-1)\n				bc = @B+@C\n				sc 0,1,0\n				fc 0,1,0\n				quad x,y-bc, x,y+bc, x-@A,y+@C, x-@A,y-@C\n				quad x,y-bc, x,y+bc, x+@A,y+@C, x+@A,y-@C\n				n = @board[index]\n				if n != 0\n					if n>0 then fc(1) else fc(0)\n					circle x,y,6\n					sc()\n					if n>0 then fc(0) else fc(1)\n					text abs(n),x,y\n\napp = new Hex \"a\"",
  c: {
    app: "reset()|newGame()|undo()"
  },
  e: {
    Play: "http://www.lutanho.net/play/hex.html",
    Wikipedia: "https://en.wikipedia.org/wiki/Hex_(board_game)"
  }
};

ID_HorizontalLine = {
  v: '2018-04-12',
  k: 'sc line',
  l: 2,
  b: "# EXEMPEL\n\nsc 1,0,1\nx1 = 10\ny1 = 70\nx2 = 190\ny2 = 70\nline x1,y2,x2,y2",
  a: "sc 1,0,1\nline 10,70, 190,70"
};

ID_HorizontalSquares = {
  v: '2018-04-12',
  k: 'range rect for lerp',
  l: 3,
  b: "# EXEMPEL\n# Börja med att rita de två första kvadraterna mha rect\n# Därefter kan du börja med for-loopen\n# De parametrar som är OLIKA är lämpliga att lerpas\n\nrect  5,5,10,10\nrect 25,5,10,10\n#     Y N  N  N    lerpa?\n\nfor i in range 10\n	x = lerp 5,25,i # eller x = 5 + 20 * i\n	y = 5\n	w = 10\n	h = 10\n	rect x,y,w,h",
  a: "for i in range 10\n	x = 5+20*i\n	rect x,5, 10,10"
};
//# sourceMappingURL=H.js.map
