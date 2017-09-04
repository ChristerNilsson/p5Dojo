// Generated by CoffeeScript 1.11.1
var ID_Tetramino, ID_Tetris, ID_TextA, ID_TextB, ID_TextC, ID_TowerOfHanoi, ID_Triangle, ID_TwoArcs, ID_TwoDiceHistogram, ID_TwoDiscsA, ID_TwoDiscsB;

ID_Tetramino = {
  v: '2017-06-07',
  k: 'bg fill cc range [] for rect if operators class',
  l: 32,
  b: "class Piece\n	constructor : (@color,@patterns) ->\nclass Tetramino extends Application\n	reset : ->\n		super\n	classes : -> [Piece]\n	draw  : ->\n	right : ->\n	left : ->\n	prev : ->\n	next : ->\napp = new Tetramino",
  a: "class Piece\n	constructor : (@color,@patterns) -> @current = 0\n	right : -> @current = (@current+1) %% @patterns.length\n	left  : -> @current = (@current-1) %% @patterns.length\n	draw  : ->\n		pattern = @patterns[@current]\n		fill cc @color\n		for i in range 16\n			if pattern >> i & 1\n				x = i % 4\n				y = i // 4\n				rect 20*x,20*y,20,20\nf = (a,b,c,d) -> 2**a + 2**b + 2**c + 2**d\nclass Tetramino extends Application\n	reset : ->\n		super\n		@pieces = []\n		@pieces.push new Piece 0,[f(1,5,9,13),f(4,5,6,7)]\n		@pieces.push new Piece 1,[f(5,6,9,10)]\n		@pieces.push new Piece 2,[f(1,5,6,9),f(4,5,6,9),f(1,4,5,9),f(1,4,5,6)]\n		@pieces.push new Piece 3,[f(2,5,6,9),f(4,5,9,10)]\n		@pieces.push new Piece 4,[f(1,5,6,10),f(5,6,8,9)]\n		@pieces.push new Piece 5,[f(1,5,9,10),f(4,5,6,8),f(0,1,5,9),f(4,5,6,2)]\n		@pieces.push new Piece 6,[f(1,5,9,8),f(0,4,5,6),f(1,2,5,9),f(4,5,6,10)]\n		@current = 0\n	classes : -> [Piece]\n	draw  : -> @pieces[@current].draw()\n	right : -> @pieces[@current].right()\n	left : -> @pieces[@current].left()\n	prev : -> @current = (@current-1) %% @pieces.length\n	next : -> @current = (@current+1) %% @pieces.length\napp = new Tetramino 'a'",
  c: {
    app: "reset()|right()|left()|prev()|next()"
  },
  e: {
    "Wikipedia": "https://en.wikipedia.org/wiki/Tetris",
    "Meth Meth Method": "https://www.youtube.com/watch?v=H2aW5V46khA"
  }
};

ID_Tetris = {
  v: '2017-05-07',
  k: 'bg fc range [] {} for rect if while _.contains operators class',
  l: 109,
  b: "class Tetris extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Tetris",
  a: "class Tetris extends Application\n	reset : ->\n		super\n		@buttons = [[140,105,'-90'],[180,105,'+90'],[160,130,'dn'],[140,155,'lt'],[180,155,'rt'],[160,180,'sp'],[160,50,0]]\n		@seed = 0\n		@arena = (new Array(12).fill(0) for i in range 20)\n		@x=0\n		@y=0\n		@matrix = null\n		@score = 0\n		@playerReset()\n	draw : ->\n		bg 0\n		fc 0.5\n		rect 0,0,120,200\n		sc 0\n		@drawMatrix @arena, 0,0\n		@drawMatrix @matrix, @x,@y\n		@arenaSweep()\n		textSize 20\n		textAlign CENTER,CENTER\n		@buttons[6][2] = @score\n		for [x,y,txt],index in @buttons\n			fc 0.5\n			if index < 6 then circle x,y,15\n			fc 1,1,0\n			text txt,x,y\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\n		for [x,y,txt],index in @buttons\n			if dist(mx,my,x,y) < 15\n				if index==0 then @playerRotate -1 # -90\n				if index==1 then @playerRotate 1  # +90\n				if index==2 then @playerDown()    # DOWN\n				if index==3 then @playerMove -1   # LEFT\n				if index==4 then @playerMove 1    # RIGHT\n				if index==5 then @playerDrop()    # SPACE\n	arenaSweep : ->\n		for i in range @arena.length\n			y = 19-i\n			rad = @arena[y]\n			if not _.contains rad, 0\n				row = @arena.splice(y, 1)[0].fill 0\n				@arena.unshift row\n				@score++\n	playerRotate : (dir) ->\n		xpos = @x\n		offset = 1\n		@rotera @matrix, dir\n		while @collide()\n			@x += offset\n			offset = -(offset + (offset > 0 ? 1 : -1))\n			if offset > @matrix[0].length\n				@rotera @matrix, -dir\n				@x = xpos\n				return\n	playerReset : ->\n		pieces = 'TJLOSZI'\n		@matrix = @createPiece pieces[@randint pieces.length]\n		@y = 0\n		@x = (@arena[0].length / 2 | 0) - (@matrix[0].length / 2 | 0)\n		if @collide()\n			row.fill(0) for row in @arena\n			@score = 0\n	playerDown : ->\n		@y++\n		if @collide()\n			@y--\n			@merge()\n			@playerReset()\n			@arenaSweep()\n	playerDrop : ->\n		while not @collide()\n			@playerDown()\n	playerMove : (offset) ->\n		@x += offset\n		if @collide() then @x -= offset\n	merge : ->\n		for row,y in @matrix\n			for value,x in row\n				if value != 0 then @arena[y + @y][x + @x] = value\n	rotera : (matrix, dir) ->\n		for y in range matrix.length\n			for x in range y\n				[matrix[x][y], matrix[y][x]] = [matrix[y][x],matrix[x][y]]\n		if dir > 0\n			row.reverse() for row in matrix\n		else\n			matrix.reverse()\n	collide : ->\n		m = @matrix\n		for y in range m.length\n			for x in range m[y].length\n				if (m[y][x] != 0 and (@arena[y + @y] and @arena[y + @y][x + @x]) != 0) then return true\n		false\n	createPiece : (type) ->\n		if type == 'I' then [[0, 1, 0, 0],	[0, 1, 0, 0],	[0, 1, 0, 0],	[0, 1, 0, 0],]\n		else if type == 'L' then [[0, 2, 0],[0, 2, 0],[0, 2, 2],]\n		else if type == 'J' then [[0, 3, 0],[0, 3, 0],[3, 3, 0],]\n		else if type == 'O' then [[4, 4],[4, 4],]\n		else if type == 'Z' then [[5, 5, 0],[0, 5, 5],[0, 0, 0]]\n		else if type == 'S' then [[0, 6, 6],[6, 6, 0],[0, 0, 0]]\n		else if type == 'T' then [[0, 7, 0],[7, 7, 7],[0, 0, 0]]\n	drawMatrix : (matrix, xoff,yoff) ->\n		for row,y in matrix\n			for value,x in row\n				if value != 0\n					fill cc value\n					rect 10*(x + xoff), 10*(y + yoff), 10,10\n\napp = new Tetris \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    "Wikipedia": "https://en.wikipedia.org/wiki/Tetris",
    "Meth Meth Method": "https://www.youtube.com/watch?v=H2aW5V46khA"
  }
};

ID_TextA = {
  v: '2017-04-29',
  k: 'fc sc text textSize',
  l: 4,
  b: "",
  a: "fc 1,1,0\nsc()\ntextSize 32\ntext 'Coffeescript',0,100"
};

ID_TextB = {
  v: '2017-04-29',
  k: 'fc sc text textSize textAlign',
  l: 5,
  b: "",
  a: "fc 1,1,0\nsc()\ntextSize 32\ntextAlign CENTER,CENTER\ntext 'Coffeescript',100,100"
};

ID_TextC = {
  v: '2017-04-29',
  k: 'sc fc rd text translate textSize textAlign',
  l: 10,
  b: "",
  a: "sc()\nfc 1,1,0\ntextSize 64\ntextAlign CENTER,CENTER\ntranslate 100,100\nrd 90\ntext 'Coffee',0,0\nfc 1,0,0\nrd 90\ntext 'script',0,0"
};

ID_TowerOfHanoi = {
  v: '2017-05-13',
  k: 'bg fc sc range operators [] text for if return constrain class line',
  l: 40,
  b: "class TowerOfHanoi extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new TowerOfHanoi",
  a: "class TowerOfHanoi extends Application\n	reset : ->\n		super\n		@level = 0\n		@H = 10\n		@buttons = [33,100,167]\n		@disk = null\n		@newGame()\n	draw : ->\n		bg 0.75\n		textSize 32\n		textAlign CENTER,CENTER\n		sc()\n		text @counter,100,180\n		for pile,i in @board\n			x = @buttons[i]\n			sc 0.5\n			sw 3\n			line x,55,x,140\n			sc 0\n			line 0,140,200,140\n			sw @H\n			for disk,j in pile\n				y = 134 - j*@H\n				stroke cc disk\n				line x-3*(disk+1),y, x+3*(disk+1),y\n	newGame : ->\n		@counter=0\n		@level = constrain @level+1,1,8\n		@board = [range(@level).reverse(), [], []]\n	mousePressed : (mx,my) ->\n		if @disk==null and @board[0].length==0 and @board[1].length==0\n			@newGame()\n		else\n			for x,index in @buttons\n				if x-33 <= mx <= x+33\n					if @disk == null\n						@disk = @board[index].pop()\n					else\n						pile = @board[index]\n						if pile.length == 0 or _.last(pile) > @disk\n							@counter++\n							pile.push @disk\n							@disk = null\n\napp = new TowerOfHanoi \"a\"\n",
  c: {
    app: "reset()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Tower_of_Hanoi"
  }
};

ID_Triangle = {
  v: '2017-04-29',
  k: 'fc triangle',
  l: 2,
  b: "",
  a: "fc 1\ntriangle 20,40, 160,100, 100,140"
};

ID_TwoArcs = {
  v: '2017-05-27',
  k: 'fc sc sw arc radians strokeCap',
  l: 11,
  b: "",
  a: "fc()\nsc 1,0,0\nsw 20\nstart = radians -90\nstopp = radians 0\narc 100,70, 100,100, start,stopp\nsc 1,1,0\nstrokeCap SQUARE\nstart = radians 0\nstopp = radians -90\narc 100,120, 100,100, start,stopp"
};

ID_TwoDiceHistogram = {
  v: '2017-04-29',
  k: 'bg fc sc range int random text if for operators rect []',
  l: 22,
  b: "# OBS: På grund av random blir bitmapparna inte likadana",
  a: "counts = Array(11).fill 0\ndice = -> int 6 * random()\ntextAlign CENTER,CENTER\nfor i in range 1000\n	counts[dice() + dice()]++\nh = int 200/11\nbg 0\nfor count,i in counts\n	y = h*i\n	fc 1,1,0,0.5\n	sc 1,1,0\n	rect 0,y,count,h-3\n	fc 1,1,0\n	sc()\n	textAlign LEFT,CENTER\n	text i+2, 5,y+h/2\n	if count < 100\n		textAlign LEFT,CENTER\n		text count, count+5,y+h/2\n	else\n		textAlign RIGHT,CENTER\n		text count, count-5,y+h/2",
  e: {
    Animering: "https://www.openprocessing.org/sketch/124236"
  }
};

ID_TwoDiscsA = {
  v: '2017-04-29',
  k: 'circle fc',
  l: 4,
  b: "",
  a: "fc 1,0,0\ncircle 80,100,40\nfc 0,1,0\ncircle 100,120,50"
};

ID_TwoDiscsB = {
  v: '2017-04-29',
  k: 'circle fc',
  l: 4,
  b: "",
  a: "fc 1,0,0\ncircle 80,100,40\nfc 0,1,0, 0.5\ncircle 120,100,50"
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcVC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsWUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsaURBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRSx3TkFIRjtFQWlCQSxDQUFBLEVBQUUsc3BDQWpCRjtFQW1EQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQUssc0NBQUw7R0FwREQ7RUFxREEsQ0FBQSxFQUNDO0lBQUEsV0FBQSxFQUFjLHNDQUFkO0lBQ0Esa0JBQUEsRUFBcUIsNkNBRHJCO0dBdEREOzs7QUF5REQsU0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsZ0VBREY7RUFFQSxDQUFBLEVBQUUsR0FGRjtFQUdBLENBQUEsRUFBRSxtSEFIRjtFQVdBLENBQUEsRUFBRSwya0dBWEY7RUE0SEEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUw7R0E3SEQ7RUE4SEEsQ0FBQSxFQUNDO0lBQUEsV0FBQSxFQUFjLHNDQUFkO0lBQ0Esa0JBQUEsRUFBcUIsNkNBRHJCO0dBL0hEOzs7QUFrSUQsUUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUscUJBREY7RUFFQSxDQUFBLEVBQUUsQ0FGRjtFQUdBLENBQUEsRUFBRSxFQUhGO0VBSUEsQ0FBQSxFQUFFLHdEQUpGOzs7QUFXRCxRQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSwrQkFERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLEVBSEY7RUFJQSxDQUFBLEVBQUUsbUZBSkY7OztBQVlELFFBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDRDQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsRUFIRjtFQUlBLENBQUEsRUFBRSx1SUFKRjs7O0FBaUJELGVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLHFFQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsOEhBSEY7RUFXQSxDQUFBLEVBQUUsdytCQVhGO0VBNERBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSxTQUFOO0dBN0REO0VBOERBLENBQUEsRUFDQztJQUFBLFNBQUEsRUFBWSw4Q0FBWjtHQS9ERDs7O0FBaUVELFdBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLGFBREY7RUFFQSxDQUFBLEVBQUUsQ0FGRjtFQUdBLENBQUEsRUFBRSxFQUhGO0VBSUEsQ0FBQSxFQUFFLHdDQUpGOzs7QUFTRCxVQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxnQ0FERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLEVBSEY7RUFJQSxDQUFBLEVBQUUsd01BSkY7OztBQWtCRCxtQkFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUseURBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRSwwREFIRjtFQU1BLENBQUEsRUFBRSwwYUFORjtFQThCQSxDQUFBLEVBQ0M7SUFBQSxTQUFBLEVBQVksOENBQVo7R0EvQkQ7OztBQWlDRCxZQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxXQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUUsRUFIRjtFQUlBLENBQUEsRUFBRSx5REFKRjs7O0FBV0QsWUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsV0FERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLEVBSEY7RUFJQSxDQUFBLEVBQUUsOERBSkYiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9UZXRyYW1pbm8gPVxyXG5cdHY6JzIwMTctMDYtMDcnXHJcblx0azonYmcgZmlsbCBjYyByYW5nZSBbXSBmb3IgcmVjdCBpZiBvcGVyYXRvcnMgY2xhc3MnXHJcblx0bDozMlxyXG5cdGI6XCJcIlwiXHJcbmNsYXNzIFBpZWNlXHJcblx0Y29uc3RydWN0b3IgOiAoQGNvbG9yLEBwYXR0ZXJucykgLT5cclxuY2xhc3MgVGV0cmFtaW5vIGV4dGVuZHMgQXBwbGljYXRpb25cclxuXHRyZXNldCA6IC0+XHJcblx0XHRzdXBlclxyXG5cdGNsYXNzZXMgOiAtPiBbUGllY2VdXHJcblx0ZHJhdyAgOiAtPlxyXG5cdHJpZ2h0IDogLT5cclxuXHRsZWZ0IDogLT5cclxuXHRwcmV2IDogLT5cclxuXHRuZXh0IDogLT5cclxuYXBwID0gbmV3IFRldHJhbWlub1xyXG5cIlwiXCJcclxuXHRhOlwiXCJcIlxyXG5jbGFzcyBQaWVjZVxyXG5cdGNvbnN0cnVjdG9yIDogKEBjb2xvcixAcGF0dGVybnMpIC0+IEBjdXJyZW50ID0gMFxyXG5cdHJpZ2h0IDogLT4gQGN1cnJlbnQgPSAoQGN1cnJlbnQrMSkgJSUgQHBhdHRlcm5zLmxlbmd0aFxyXG5cdGxlZnQgIDogLT4gQGN1cnJlbnQgPSAoQGN1cnJlbnQtMSkgJSUgQHBhdHRlcm5zLmxlbmd0aFxyXG5cdGRyYXcgIDogLT5cclxuXHRcdHBhdHRlcm4gPSBAcGF0dGVybnNbQGN1cnJlbnRdXHJcblx0XHRmaWxsIGNjIEBjb2xvclxyXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgMTZcclxuXHRcdFx0aWYgcGF0dGVybiA+PiBpICYgMVxyXG5cdFx0XHRcdHggPSBpICUgNFxyXG5cdFx0XHRcdHkgPSBpIC8vIDRcclxuXHRcdFx0XHRyZWN0IDIwKngsMjAqeSwyMCwyMFxyXG5mID0gKGEsYixjLGQpIC0+IDIqKmEgKyAyKipiICsgMioqYyArIDIqKmRcclxuY2xhc3MgVGV0cmFtaW5vIGV4dGVuZHMgQXBwbGljYXRpb25cclxuXHRyZXNldCA6IC0+XHJcblx0XHRzdXBlclxyXG5cdFx0QHBpZWNlcyA9IFtdXHJcblx0XHRAcGllY2VzLnB1c2ggbmV3IFBpZWNlIDAsW2YoMSw1LDksMTMpLGYoNCw1LDYsNyldXHJcblx0XHRAcGllY2VzLnB1c2ggbmV3IFBpZWNlIDEsW2YoNSw2LDksMTApXVxyXG5cdFx0QHBpZWNlcy5wdXNoIG5ldyBQaWVjZSAyLFtmKDEsNSw2LDkpLGYoNCw1LDYsOSksZigxLDQsNSw5KSxmKDEsNCw1LDYpXVxyXG5cdFx0QHBpZWNlcy5wdXNoIG5ldyBQaWVjZSAzLFtmKDIsNSw2LDkpLGYoNCw1LDksMTApXVxyXG5cdFx0QHBpZWNlcy5wdXNoIG5ldyBQaWVjZSA0LFtmKDEsNSw2LDEwKSxmKDUsNiw4LDkpXVxyXG5cdFx0QHBpZWNlcy5wdXNoIG5ldyBQaWVjZSA1LFtmKDEsNSw5LDEwKSxmKDQsNSw2LDgpLGYoMCwxLDUsOSksZig0LDUsNiwyKV1cclxuXHRcdEBwaWVjZXMucHVzaCBuZXcgUGllY2UgNixbZigxLDUsOSw4KSxmKDAsNCw1LDYpLGYoMSwyLDUsOSksZig0LDUsNiwxMCldXHJcblx0XHRAY3VycmVudCA9IDBcclxuXHRjbGFzc2VzIDogLT4gW1BpZWNlXVxyXG5cdGRyYXcgIDogLT4gQHBpZWNlc1tAY3VycmVudF0uZHJhdygpXHJcblx0cmlnaHQgOiAtPiBAcGllY2VzW0BjdXJyZW50XS5yaWdodCgpXHJcblx0bGVmdCA6IC0+IEBwaWVjZXNbQGN1cnJlbnRdLmxlZnQoKVxyXG5cdHByZXYgOiAtPiBAY3VycmVudCA9IChAY3VycmVudC0xKSAlJSBAcGllY2VzLmxlbmd0aFxyXG5cdG5leHQgOiAtPiBAY3VycmVudCA9IChAY3VycmVudCsxKSAlJSBAcGllY2VzLmxlbmd0aFxyXG5hcHAgPSBuZXcgVGV0cmFtaW5vICdhJ1xyXG5cIlwiXCJcclxuXHRjOlxyXG5cdFx0YXBwOiBcInJlc2V0KCl8cmlnaHQoKXxsZWZ0KCl8cHJldigpfG5leHQoKVwiXHJcblx0ZTpcclxuXHRcdFwiV2lraXBlZGlhXCIgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RldHJpc1wiXHJcblx0XHRcIk1ldGggTWV0aCBNZXRob2RcIiA6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1IMmFXNVY0NmtoQVwiXHJcblxyXG5JRF9UZXRyaXMgPVxyXG5cdHY6JzIwMTctMDUtMDcnXHJcblx0azonYmcgZmMgcmFuZ2UgW10ge30gZm9yIHJlY3QgaWYgd2hpbGUgXy5jb250YWlucyBvcGVyYXRvcnMgY2xhc3MnXHJcblx0bDoxMDlcclxuXHRiOlwiXCJcIlxyXG5jbGFzcyBUZXRyaXMgZXh0ZW5kcyBBcHBsaWNhdGlvblxyXG5cdHJlc2V0IDogLT5cclxuXHRcdHN1cGVyXHJcblx0ZHJhdyAgOiAtPlxyXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cclxuYXBwID0gbmV3IFRldHJpc1xyXG5cIlwiXCJcclxuXHRhOlwiXCJcIlxyXG5jbGFzcyBUZXRyaXMgZXh0ZW5kcyBBcHBsaWNhdGlvblxyXG5cdHJlc2V0IDogLT5cclxuXHRcdHN1cGVyXHJcblx0XHRAYnV0dG9ucyA9IFtbMTQwLDEwNSwnLTkwJ10sWzE4MCwxMDUsJys5MCddLFsxNjAsMTMwLCdkbiddLFsxNDAsMTU1LCdsdCddLFsxODAsMTU1LCdydCddLFsxNjAsMTgwLCdzcCddLFsxNjAsNTAsMF1dXHJcblx0XHRAc2VlZCA9IDBcclxuXHRcdEBhcmVuYSA9IChuZXcgQXJyYXkoMTIpLmZpbGwoMCkgZm9yIGkgaW4gcmFuZ2UgMjApXHJcblx0XHRAeD0wXHJcblx0XHRAeT0wXHJcblx0XHRAbWF0cml4ID0gbnVsbFxyXG5cdFx0QHNjb3JlID0gMFxyXG5cdFx0QHBsYXllclJlc2V0KClcclxuXHRkcmF3IDogLT5cclxuXHRcdGJnIDBcclxuXHRcdGZjIDAuNVxyXG5cdFx0cmVjdCAwLDAsMTIwLDIwMFxyXG5cdFx0c2MgMFxyXG5cdFx0QGRyYXdNYXRyaXggQGFyZW5hLCAwLDBcclxuXHRcdEBkcmF3TWF0cml4IEBtYXRyaXgsIEB4LEB5XHJcblx0XHRAYXJlbmFTd2VlcCgpXHJcblx0XHR0ZXh0U2l6ZSAyMFxyXG5cdFx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcclxuXHRcdEBidXR0b25zWzZdWzJdID0gQHNjb3JlXHJcblx0XHRmb3IgW3gseSx0eHRdLGluZGV4IGluIEBidXR0b25zXHJcblx0XHRcdGZjIDAuNVxyXG5cdFx0XHRpZiBpbmRleCA8IDYgdGhlbiBjaXJjbGUgeCx5LDE1XHJcblx0XHRcdGZjIDEsMSwwXHJcblx0XHRcdHRleHQgdHh0LHgseVxyXG5cdHJhbmRpbnQgOiAobikgLT4gaW50IG4gKiBmcmFjdGlvbiAxMDAwMCAqIE1hdGguc2luIEBzZWVkKytcclxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XHJcblx0XHRmb3IgW3gseSx0eHRdLGluZGV4IGluIEBidXR0b25zXHJcblx0XHRcdGlmIGRpc3QobXgsbXkseCx5KSA8IDE1XHJcblx0XHRcdFx0aWYgaW5kZXg9PTAgdGhlbiBAcGxheWVyUm90YXRlIC0xICMgLTkwXHJcblx0XHRcdFx0aWYgaW5kZXg9PTEgdGhlbiBAcGxheWVyUm90YXRlIDEgICMgKzkwXHJcblx0XHRcdFx0aWYgaW5kZXg9PTIgdGhlbiBAcGxheWVyRG93bigpICAgICMgRE9XTlxyXG5cdFx0XHRcdGlmIGluZGV4PT0zIHRoZW4gQHBsYXllck1vdmUgLTEgICAjIExFRlRcclxuXHRcdFx0XHRpZiBpbmRleD09NCB0aGVuIEBwbGF5ZXJNb3ZlIDEgICAgIyBSSUdIVFxyXG5cdFx0XHRcdGlmIGluZGV4PT01IHRoZW4gQHBsYXllckRyb3AoKSAgICAjIFNQQUNFXHJcblx0YXJlbmFTd2VlcCA6IC0+XHJcblx0XHRmb3IgaSBpbiByYW5nZSBAYXJlbmEubGVuZ3RoXHJcblx0XHRcdHkgPSAxOS1pXHJcblx0XHRcdHJhZCA9IEBhcmVuYVt5XVxyXG5cdFx0XHRpZiBub3QgXy5jb250YWlucyByYWQsIDBcclxuXHRcdFx0XHRyb3cgPSBAYXJlbmEuc3BsaWNlKHksIDEpWzBdLmZpbGwgMFxyXG5cdFx0XHRcdEBhcmVuYS51bnNoaWZ0IHJvd1xyXG5cdFx0XHRcdEBzY29yZSsrXHJcblx0cGxheWVyUm90YXRlIDogKGRpcikgLT5cclxuXHRcdHhwb3MgPSBAeFxyXG5cdFx0b2Zmc2V0ID0gMVxyXG5cdFx0QHJvdGVyYSBAbWF0cml4LCBkaXJcclxuXHRcdHdoaWxlIEBjb2xsaWRlKClcclxuXHRcdFx0QHggKz0gb2Zmc2V0XHJcblx0XHRcdG9mZnNldCA9IC0ob2Zmc2V0ICsgKG9mZnNldCA+IDAgPyAxIDogLTEpKVxyXG5cdFx0XHRpZiBvZmZzZXQgPiBAbWF0cml4WzBdLmxlbmd0aFxyXG5cdFx0XHRcdEByb3RlcmEgQG1hdHJpeCwgLWRpclxyXG5cdFx0XHRcdEB4ID0geHBvc1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdHBsYXllclJlc2V0IDogLT5cclxuXHRcdHBpZWNlcyA9ICdUSkxPU1pJJ1xyXG5cdFx0QG1hdHJpeCA9IEBjcmVhdGVQaWVjZSBwaWVjZXNbQHJhbmRpbnQgcGllY2VzLmxlbmd0aF1cclxuXHRcdEB5ID0gMFxyXG5cdFx0QHggPSAoQGFyZW5hWzBdLmxlbmd0aCAvIDIgfCAwKSAtIChAbWF0cml4WzBdLmxlbmd0aCAvIDIgfCAwKVxyXG5cdFx0aWYgQGNvbGxpZGUoKVxyXG5cdFx0XHRyb3cuZmlsbCgwKSBmb3Igcm93IGluIEBhcmVuYVxyXG5cdFx0XHRAc2NvcmUgPSAwXHJcblx0cGxheWVyRG93biA6IC0+XHJcblx0XHRAeSsrXHJcblx0XHRpZiBAY29sbGlkZSgpXHJcblx0XHRcdEB5LS1cclxuXHRcdFx0QG1lcmdlKClcclxuXHRcdFx0QHBsYXllclJlc2V0KClcclxuXHRcdFx0QGFyZW5hU3dlZXAoKVxyXG5cdHBsYXllckRyb3AgOiAtPlxyXG5cdFx0d2hpbGUgbm90IEBjb2xsaWRlKClcclxuXHRcdFx0QHBsYXllckRvd24oKVxyXG5cdHBsYXllck1vdmUgOiAob2Zmc2V0KSAtPlxyXG5cdFx0QHggKz0gb2Zmc2V0XHJcblx0XHRpZiBAY29sbGlkZSgpIHRoZW4gQHggLT0gb2Zmc2V0XHJcblx0bWVyZ2UgOiAtPlxyXG5cdFx0Zm9yIHJvdyx5IGluIEBtYXRyaXhcclxuXHRcdFx0Zm9yIHZhbHVlLHggaW4gcm93XHJcblx0XHRcdFx0aWYgdmFsdWUgIT0gMCB0aGVuIEBhcmVuYVt5ICsgQHldW3ggKyBAeF0gPSB2YWx1ZVxyXG5cdHJvdGVyYSA6IChtYXRyaXgsIGRpcikgLT5cclxuXHRcdGZvciB5IGluIHJhbmdlIG1hdHJpeC5sZW5ndGhcclxuXHRcdFx0Zm9yIHggaW4gcmFuZ2UgeVxyXG5cdFx0XHRcdFttYXRyaXhbeF1beV0sIG1hdHJpeFt5XVt4XV0gPSBbbWF0cml4W3ldW3hdLG1hdHJpeFt4XVt5XV1cclxuXHRcdGlmIGRpciA+IDBcclxuXHRcdFx0cm93LnJldmVyc2UoKSBmb3Igcm93IGluIG1hdHJpeFxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRtYXRyaXgucmV2ZXJzZSgpXHJcblx0Y29sbGlkZSA6IC0+XHJcblx0XHRtID0gQG1hdHJpeFxyXG5cdFx0Zm9yIHkgaW4gcmFuZ2UgbS5sZW5ndGhcclxuXHRcdFx0Zm9yIHggaW4gcmFuZ2UgbVt5XS5sZW5ndGhcclxuXHRcdFx0XHRpZiAobVt5XVt4XSAhPSAwIGFuZCAoQGFyZW5hW3kgKyBAeV0gYW5kIEBhcmVuYVt5ICsgQHldW3ggKyBAeF0pICE9IDApIHRoZW4gcmV0dXJuIHRydWVcclxuXHRcdGZhbHNlXHJcblx0Y3JlYXRlUGllY2UgOiAodHlwZSkgLT5cclxuXHRcdGlmIHR5cGUgPT0gJ0knIHRoZW4gW1swLCAxLCAwLCAwXSxcdFswLCAxLCAwLCAwXSxcdFswLCAxLCAwLCAwXSxcdFswLCAxLCAwLCAwXSxdXHJcblx0XHRlbHNlIGlmIHR5cGUgPT0gJ0wnIHRoZW4gW1swLCAyLCAwXSxbMCwgMiwgMF0sWzAsIDIsIDJdLF1cclxuXHRcdGVsc2UgaWYgdHlwZSA9PSAnSicgdGhlbiBbWzAsIDMsIDBdLFswLCAzLCAwXSxbMywgMywgMF0sXVxyXG5cdFx0ZWxzZSBpZiB0eXBlID09ICdPJyB0aGVuIFtbNCwgNF0sWzQsIDRdLF1cclxuXHRcdGVsc2UgaWYgdHlwZSA9PSAnWicgdGhlbiBbWzUsIDUsIDBdLFswLCA1LCA1XSxbMCwgMCwgMF1dXHJcblx0XHRlbHNlIGlmIHR5cGUgPT0gJ1MnIHRoZW4gW1swLCA2LCA2XSxbNiwgNiwgMF0sWzAsIDAsIDBdXVxyXG5cdFx0ZWxzZSBpZiB0eXBlID09ICdUJyB0aGVuIFtbMCwgNywgMF0sWzcsIDcsIDddLFswLCAwLCAwXV1cclxuXHRkcmF3TWF0cml4IDogKG1hdHJpeCwgeG9mZix5b2ZmKSAtPlxyXG5cdFx0Zm9yIHJvdyx5IGluIG1hdHJpeFxyXG5cdFx0XHRmb3IgdmFsdWUseCBpbiByb3dcclxuXHRcdFx0XHRpZiB2YWx1ZSAhPSAwXHJcblx0XHRcdFx0XHRmaWxsIGNjIHZhbHVlXHJcblx0XHRcdFx0XHRyZWN0IDEwKih4ICsgeG9mZiksIDEwKih5ICsgeW9mZiksIDEwLDEwXHJcblxyXG5hcHAgPSBuZXcgVGV0cmlzIFwiYVwiXHJcblwiXCJcIlxyXG5cdGM6XHJcblx0XHRhcHA6IFwicmVzZXQoKVwiXHJcblx0ZTpcclxuXHRcdFwiV2lraXBlZGlhXCIgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RldHJpc1wiXHJcblx0XHRcIk1ldGggTWV0aCBNZXRob2RcIiA6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1IMmFXNVY0NmtoQVwiXHJcblxyXG5JRF9UZXh0QSA9XHJcblx0djonMjAxNy0wNC0yOSdcclxuXHRrOidmYyBzYyB0ZXh0IHRleHRTaXplJ1xyXG5cdGw6NFxyXG5cdGI6XCJcIlxyXG5cdGE6XCJcIlwiXHJcbmZjIDEsMSwwXHJcbnNjKClcclxudGV4dFNpemUgMzJcclxudGV4dCAnQ29mZmVlc2NyaXB0JywwLDEwMFxyXG5cIlwiXCJcclxuXHJcbklEX1RleHRCID1cclxuXHR2OicyMDE3LTA0LTI5J1xyXG5cdGs6J2ZjIHNjIHRleHQgdGV4dFNpemUgdGV4dEFsaWduJ1xyXG5cdGw6NVxyXG5cdGI6XCJcIlxyXG5cdGE6XCJcIlwiXHJcbmZjIDEsMSwwXHJcbnNjKClcclxudGV4dFNpemUgMzJcclxudGV4dEFsaWduIENFTlRFUixDRU5URVJcclxudGV4dCAnQ29mZmVlc2NyaXB0JywxMDAsMTAwXHJcblwiXCJcIlxyXG5cclxuSURfVGV4dEMgPVxyXG5cdHY6JzIwMTctMDQtMjknXHJcblx0azonc2MgZmMgcmQgdGV4dCB0cmFuc2xhdGUgdGV4dFNpemUgdGV4dEFsaWduJ1xyXG5cdGw6MTBcclxuXHRiOlwiXCJcclxuXHRhOlwiXCJcIlxyXG5zYygpXHJcbmZjIDEsMSwwXHJcbnRleHRTaXplIDY0XHJcbnRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXHJcbnRyYW5zbGF0ZSAxMDAsMTAwXHJcbnJkIDkwXHJcbnRleHQgJ0NvZmZlZScsMCwwXHJcbmZjIDEsMCwwXHJcbnJkIDkwXHJcbnRleHQgJ3NjcmlwdCcsMCwwXHJcblwiXCJcIlxyXG5cclxuSURfVG93ZXJPZkhhbm9pID1cclxuXHR2OicyMDE3LTA1LTEzJ1xyXG5cdGs6J2JnIGZjIHNjIHJhbmdlIG9wZXJhdG9ycyBbXSB0ZXh0IGZvciBpZiByZXR1cm4gY29uc3RyYWluIGNsYXNzIGxpbmUnXHJcblx0bDo0MFxyXG5cdGI6XCJcIlwiXHJcbmNsYXNzIFRvd2VyT2ZIYW5vaSBleHRlbmRzIEFwcGxpY2F0aW9uXHJcblx0cmVzZXQgOiAtPlxyXG5cdFx0c3VwZXJcclxuXHRkcmF3IDogLT5cclxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XHJcbmFwcCA9IG5ldyBUb3dlck9mSGFub2lcclxuXCJcIlwiXHJcblx0YTpcIlwiXCJcclxuY2xhc3MgVG93ZXJPZkhhbm9pIGV4dGVuZHMgQXBwbGljYXRpb25cclxuXHRyZXNldCA6IC0+XHJcblx0XHRzdXBlclxyXG5cdFx0QGxldmVsID0gMFxyXG5cdFx0QEggPSAxMFxyXG5cdFx0QGJ1dHRvbnMgPSBbMzMsMTAwLDE2N11cclxuXHRcdEBkaXNrID0gbnVsbFxyXG5cdFx0QG5ld0dhbWUoKVxyXG5cdGRyYXcgOiAtPlxyXG5cdFx0YmcgMC43NVxyXG5cdFx0dGV4dFNpemUgMzJcclxuXHRcdHRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXHJcblx0XHRzYygpXHJcblx0XHR0ZXh0IEBjb3VudGVyLDEwMCwxODBcclxuXHRcdGZvciBwaWxlLGkgaW4gQGJvYXJkXHJcblx0XHRcdHggPSBAYnV0dG9uc1tpXVxyXG5cdFx0XHRzYyAwLjVcclxuXHRcdFx0c3cgM1xyXG5cdFx0XHRsaW5lIHgsNTUseCwxNDBcclxuXHRcdFx0c2MgMFxyXG5cdFx0XHRsaW5lIDAsMTQwLDIwMCwxNDBcclxuXHRcdFx0c3cgQEhcclxuXHRcdFx0Zm9yIGRpc2ssaiBpbiBwaWxlXHJcblx0XHRcdFx0eSA9IDEzNCAtIGoqQEhcclxuXHRcdFx0XHRzdHJva2UgY2MgZGlza1xyXG5cdFx0XHRcdGxpbmUgeC0zKihkaXNrKzEpLHksIHgrMyooZGlzaysxKSx5XHJcblx0bmV3R2FtZSA6IC0+XHJcblx0XHRAY291bnRlcj0wXHJcblx0XHRAbGV2ZWwgPSBjb25zdHJhaW4gQGxldmVsKzEsMSw4XHJcblx0XHRAYm9hcmQgPSBbcmFuZ2UoQGxldmVsKS5yZXZlcnNlKCksIFtdLCBbXV1cclxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XHJcblx0XHRpZiBAZGlzaz09bnVsbCBhbmQgQGJvYXJkWzBdLmxlbmd0aD09MCBhbmQgQGJvYXJkWzFdLmxlbmd0aD09MFxyXG5cdFx0XHRAbmV3R2FtZSgpXHJcblx0XHRlbHNlXHJcblx0XHRcdGZvciB4LGluZGV4IGluIEBidXR0b25zXHJcblx0XHRcdFx0aWYgeC0zMyA8PSBteCA8PSB4KzMzXHJcblx0XHRcdFx0XHRpZiBAZGlzayA9PSBudWxsXHJcblx0XHRcdFx0XHRcdEBkaXNrID0gQGJvYXJkW2luZGV4XS5wb3AoKVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRwaWxlID0gQGJvYXJkW2luZGV4XVxyXG5cdFx0XHRcdFx0XHRpZiBwaWxlLmxlbmd0aCA9PSAwIG9yIF8ubGFzdChwaWxlKSA+IEBkaXNrXHJcblx0XHRcdFx0XHRcdFx0QGNvdW50ZXIrK1xyXG5cdFx0XHRcdFx0XHRcdHBpbGUucHVzaCBAZGlza1xyXG5cdFx0XHRcdFx0XHRcdEBkaXNrID0gbnVsbFxyXG5cclxuYXBwID0gbmV3IFRvd2VyT2ZIYW5vaSBcImFcIlxyXG5cclxuXCJcIlwiXHJcblx0YzpcclxuXHRcdGFwcCA6IFwicmVzZXQoKVwiXHJcblx0ZTpcclxuXHRcdFdpa2lwZWRpYSA6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVG93ZXJfb2ZfSGFub2lcIlxyXG5cclxuSURfVHJpYW5nbGUgPVxyXG5cdHY6JzIwMTctMDQtMjknXHJcblx0azonZmMgdHJpYW5nbGUnXHJcblx0bDoyXHJcblx0YjpcIlwiXHJcblx0YTpcIlwiXCJcclxuZmMgMVxyXG50cmlhbmdsZSAyMCw0MCwgMTYwLDEwMCwgMTAwLDE0MFxyXG5cIlwiXCJcclxuXHJcbklEX1R3b0FyY3MgPVxyXG5cdHY6JzIwMTctMDUtMjcnXHJcblx0azonZmMgc2Mgc3cgYXJjIHJhZGlhbnMgc3Ryb2tlQ2FwJ1xyXG5cdGw6MTFcclxuXHRiOlwiXCJcclxuXHRhOlwiXCJcIlxyXG5mYygpXHJcbnNjIDEsMCwwXHJcbnN3IDIwXHJcbnN0YXJ0ID0gcmFkaWFucyAtOTBcclxuc3RvcHAgPSByYWRpYW5zIDBcclxuYXJjIDEwMCw3MCwgMTAwLDEwMCwgc3RhcnQsc3RvcHBcclxuc2MgMSwxLDBcclxuc3Ryb2tlQ2FwIFNRVUFSRVxyXG5zdGFydCA9IHJhZGlhbnMgMFxyXG5zdG9wcCA9IHJhZGlhbnMgLTkwXHJcbmFyYyAxMDAsMTIwLCAxMDAsMTAwLCBzdGFydCxzdG9wcFxyXG5cIlwiXCJcclxuXHJcbklEX1R3b0RpY2VIaXN0b2dyYW0gPVxyXG5cdHY6JzIwMTctMDQtMjknXHJcblx0azonYmcgZmMgc2MgcmFuZ2UgaW50IHJhbmRvbSB0ZXh0IGlmIGZvciBvcGVyYXRvcnMgcmVjdCBbXSdcclxuXHRsOjIyXHJcblx0YjpcIlwiXCJcclxuIyBPQlM6IFDDpSBncnVuZCBhdiByYW5kb20gYmxpciBiaXRtYXBwYXJuYSBpbnRlIGxpa2FkYW5hXHJcblwiXCJcIlxyXG5cdGE6XCJcIlwiXHJcbmNvdW50cyA9IEFycmF5KDExKS5maWxsIDBcclxuZGljZSA9IC0+IGludCA2ICogcmFuZG9tKClcclxudGV4dEFsaWduIENFTlRFUixDRU5URVJcclxuZm9yIGkgaW4gcmFuZ2UgMTAwMFxyXG5cdGNvdW50c1tkaWNlKCkgKyBkaWNlKCldKytcclxuaCA9IGludCAyMDAvMTFcclxuYmcgMFxyXG5mb3IgY291bnQsaSBpbiBjb3VudHNcclxuXHR5ID0gaCppXHJcblx0ZmMgMSwxLDAsMC41XHJcblx0c2MgMSwxLDBcclxuXHRyZWN0IDAseSxjb3VudCxoLTNcclxuXHRmYyAxLDEsMFxyXG5cdHNjKClcclxuXHR0ZXh0QWxpZ24gTEVGVCxDRU5URVJcclxuXHR0ZXh0IGkrMiwgNSx5K2gvMlxyXG5cdGlmIGNvdW50IDwgMTAwXHJcblx0XHR0ZXh0QWxpZ24gTEVGVCxDRU5URVJcclxuXHRcdHRleHQgY291bnQsIGNvdW50KzUseStoLzJcclxuXHRlbHNlXHJcblx0XHR0ZXh0QWxpZ24gUklHSFQsQ0VOVEVSXHJcblx0XHR0ZXh0IGNvdW50LCBjb3VudC01LHkraC8yXHJcblwiXCJcIlxyXG5cdGU6XHJcblx0XHRBbmltZXJpbmcgOiBcImh0dHBzOi8vd3d3Lm9wZW5wcm9jZXNzaW5nLm9yZy9za2V0Y2gvMTI0MjM2XCJcclxuXHJcbklEX1R3b0Rpc2NzQSA9XHJcblx0djonMjAxNy0wNC0yOSdcclxuXHRrOidjaXJjbGUgZmMnXHJcblx0bDo0XHJcblx0YjpcIlwiXHJcblx0YTpcIlwiXCJcclxuZmMgMSwwLDBcclxuY2lyY2xlIDgwLDEwMCw0MFxyXG5mYyAwLDEsMFxyXG5jaXJjbGUgMTAwLDEyMCw1MFxyXG5cIlwiXCJcclxuXHJcbklEX1R3b0Rpc2NzQiA9XHJcblx0djonMjAxNy0wNC0yOSdcclxuXHRrOidjaXJjbGUgZmMnXHJcblx0bDo0XHJcblx0YjpcIlwiXHJcblx0YTpcIlwiXCJcclxuZmMgMSwwLDBcclxuY2lyY2xlIDgwLDEwMCw0MFxyXG5mYyAwLDEsMCwgMC41XHJcbmNpcmNsZSAxMjAsMTAwLDUwXHJcblwiXCJcIlxyXG5cclxuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\T.coffee