// Generated by CoffeeScript 1.11.1
var ID_Hex, ID_HorizontalLine, ID_HorizontalSquares;

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

ID_HorizontalLine = {
  v: '2017-04-29',
  b: "# LOC:2 sc # line\n",
  a: "sc 1,0,1\nline 10,70, 190,70"
};

ID_HorizontalSquares = {
  v: '2017-04-29',
  b: "# LOC:3 range # rect for in lerp\n\nrect  5,5,10,10\nrect 25,5,10,10\nfor i in range 5\n	x = lerp 5,25,i\n	rect",
  a: "for i in range 10\n	x = 5+20*i\n	rect x,5, 10,10"
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcSC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsTUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsdVRBREY7RUFlQSxDQUFBLEVBQUUsNGxDQWZGO0VBc0VBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSwwQkFBTjtHQXZFRDtFQXdFQSxDQUFBLEVBQ0M7SUFBQSxJQUFBLEVBQU8sc0NBQVA7SUFDQSxTQUFBLEVBQVksZ0RBRFo7R0F6RUQ7OztBQTRFRCxpQkFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUcscUJBREg7RUFFQSxDQUFBLEVBQUcsOEJBRkg7OztBQU9ELG9CQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxpSEFERjtFQVVBLENBQUEsRUFBRSxrREFWRiIsInNvdXJjZXNDb250ZW50IjpbIklEX0hleCA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGI6XCJcIlwiXG4jIExPQzo0NyBiZyBmYyBzYyByYW5nZSAjICsgKiAtICUgPCA9PSAhPSBkaXN0IGZvciBpbiBbXSBwdXNoIHBvcCBsZW5ndGggcXVhZCBjaXJjbGVcbiMgICAgICAgIGlmIHRoZW4gZWxzZSB0ZXh0IHRleHRBbGlnbiB0ZXh0U2l6ZSBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIG5ldyBAIHN1cGVyIC0+XG5cbmNsYXNzIEhleCBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRkcmF3IDogLT5cblx0bmV3R2FtZSA6IC0+XG5cdHVuZG8gOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5hcHAgPSBuZXcgSGV4XG5cIlwiXCJcblxuXHRhOlwiXCJcIlxuY2xhc3MgSGV4IGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QEEgPSA2XG5cdFx0QEIgPSA1XG5cdFx0QEMgPSAzXG5cdFx0QG5ld0dhbWUoKVxuXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0XHRpbmRleCA9IC0xXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgLTUsNlxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgLTUsNlxuXHRcdFx0XHR4ID0gMTAwICsgaSooMipAQSsxKSArIEBBKmpcblx0XHRcdFx0eSA9IDEwMCArIGoqKDIqQEIrQEMtMSlcblx0XHRcdFx0aWYgZGlzdCh4LHksbXgsbXkpIDwgNyB0aGVuIGluZGV4ID0gMTEqKGorNSkraSs1XG5cdFx0aWYgaW5kZXggPj0gMCBhbmQgQGJvYXJkW2luZGV4XSA9PSAwXG5cdFx0XHRAaGlzdG9yeS5wdXNoIGluZGV4XG5cdFx0XHRuID0gQGhpc3RvcnkubGVuZ3RoXG5cdFx0XHRpZiBuICUgMiA9PSAwIHRoZW4gbiA9IC1uXG5cdFx0XHRAYm9hcmRbaW5kZXhdID0gblxuXG5cdG5ld0dhbWUgOiAtPlxuXHRcdEBoaXN0b3J5ID0gW11cblx0XHRAYm9hcmQgPSBBcnJheSgxMSoxMSkuZmlsbCAwXG5cblx0dW5kbyA6IC0+XG5cdFx0aWYgQGhpc3RvcnkubGVuZ3RoID4gMFxuXHRcdFx0aW5kZXggPSBAaGlzdG9yeS5wb3AoKVxuXHRcdFx0QGJvYXJkW2luZGV4XSA9IDBcblxuXHRkcmF3IDogLT5cblx0XHRiZyAwLjVcblx0XHR0ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxuXHRcdHRleHRTaXplIDlcblx0XHRmb3IgaSBpbiByYW5nZSAtNSw2XG5cdFx0XHRmb3IgaiBpbiByYW5nZSAtNSw2XG5cdFx0XHRcdGluZGV4ID0gMTEqKGorNSkraSs1XG5cdFx0XHRcdHggPSAxMDAraSooMipAQSsxKSArIEBBKmpcblx0XHRcdFx0eSA9IDEwMCtqKigyKkBCK0BDLTEpXG5cdFx0XHRcdGJjID0gQEIrQENcblx0XHRcdFx0c2MgMCwxLDBcblx0XHRcdFx0ZmMgMCwxLDBcblx0XHRcdFx0cXVhZCB4LHktYmMsIHgseStiYywgeC1AQSx5K0BDLCB4LUBBLHktQENcblx0XHRcdFx0cXVhZCB4LHktYmMsIHgseStiYywgeCtAQSx5K0BDLCB4K0BBLHktQENcblx0XHRcdFx0biA9IEBib2FyZFtpbmRleF1cblx0XHRcdFx0aWYgbiAhPSAwXG5cdFx0XHRcdFx0aWYgbj4wIHRoZW4gZmMoMSkgZWxzZSBmYygwKVxuXHRcdFx0XHRcdGNpcmNsZSB4LHksNlxuXHRcdFx0XHRcdHNjKClcblx0XHRcdFx0XHRpZiBuPjAgdGhlbiBmYygwKSBlbHNlIGZjKDEpXG5cdFx0XHRcdFx0dGV4dCBhYnMobikseCx5XG5cbmFwcCA9IG5ldyBIZXggXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxuZXdHYW1lKCl8dW5kbygpXCJcblx0ZTpcblx0XHRQbGF5IDogXCJodHRwOi8vd3d3Lmx1dGFuaG8ubmV0L3BsYXkvaGV4Lmh0bWxcIlxuXHRcdFdpa2lwZWRpYSA6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGV4Xyhib2FyZF9nYW1lKVwiXG5cbklEX0hvcml6b250YWxMaW5lID1cblx0djonMjAxNy0wNC0yOSdcblx0YjogXCIjIExPQzoyIHNjICMgbGluZVxcblwiXG5cdGE6IFwiXCJcIlxuc2MgMSwwLDFcbmxpbmUgMTAsNzAsIDE5MCw3MFxuXCJcIlwiXG5cbklEX0hvcml6b250YWxTcXVhcmVzID1cblx0djonMjAxNy0wNC0yOSdcblx0YjpcIlwiXCJcbiMgTE9DOjMgcmFuZ2UgIyByZWN0IGZvciBpbiBsZXJwXG5cbnJlY3QgIDUsNSwxMCwxMFxucmVjdCAyNSw1LDEwLDEwXG5mb3IgaSBpbiByYW5nZSA1XG5cdHggPSBsZXJwIDUsMjUsaVxuXHRyZWN0XG5cIlwiXCJcblx0YTpcIlwiXCJcbmZvciBpIGluIHJhbmdlIDEwXG5cdHggPSA1KzIwKmlcblx0cmVjdCB4LDUsIDEwLDEwXG5cIlwiXCJcblxuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\H.coffee