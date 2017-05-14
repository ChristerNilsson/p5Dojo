// Generated by CoffeeScript 1.11.1
var ID_Tetris, ID_TextA, ID_TextB, ID_TextC, ID_TextD, ID_TowerOfHanoi, ID_Triangle, ID_TwoArcs, ID_TwoDiceHistogram, ID_TwoDiscsA, ID_TwoDiscsB;

ID_Tetris = {
  v: '2017-05-07',
  k: 'bg fc range [] {} for rect if while _.contains operators class',
  l: 113,
  b: "class Tetris extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Tetris",
  a: "class Tetris extends Application\n	reset : ->\n		super\n		@buttons = [[140,105,'-90'],[180,105,'+90'],[160,130,'dn'],[140,155,'lt'],[180,155,'rt'],[160,180,'sp'],[160,50,0]]\n		@seed = 0\n		@arena = (new Array(12).fill(0) for i in range 20)\n		@x=0\n		@y=0\n		@matrix = null\n		@score = 0\n		@playerReset()\n	draw : ->\n		bg 0\n		fc 0.5\n		rect 0,0,120,200\n		sc 0\n		@drawMatrix @arena, 0,0\n		@drawMatrix @matrix, @x,@y\n		@arenaSweep()\n		textSize 20\n		textAlign CENTER,CENTER\n		@buttons[6][2] = @score\n		for [x,y,txt],index in @buttons\n			fc 0.5\n			if index < 6 then circle x,y,15\n			fc 1,1,0\n			text txt,x,y\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\n		for [x,y,txt],index in @buttons\n			if dist(mx,my,x,y) < 15\n				if index==0 then @playerRotate -1 # -90\n				if index==1 then @playerRotate 1  # +90\n				if index==2 then @playerDown()    # DOWN\n				if index==3 then @playerMove -1   # LEFT\n				if index==4 then @playerMove 1    # RIGHT\n				if index==5 then @playerDrop()    # SPACE\n	arenaSweep : ->\n		for i in range @arena.length\n			y = 19-i\n			rad = @arena[y]\n			if not _.contains rad, 0\n				row = @arena.splice(y, 1)[0].fill 0\n				@arena.unshift row\n				@score++\n	playerRotate : (dir) ->\n		xpos = @x\n		offset = 1\n		@rotera @matrix, dir\n		while @collide()\n			@x += offset\n			offset = -(offset + (offset > 0 ? 1 : -1))\n			if offset > @matrix[0].length\n				@rotera @matrix, -dir\n				@x = xpos\n				return\n	playerReset : ->\n		pieces = 'TJLOSZI'\n		@matrix = @createPiece pieces[@randint pieces.length]\n		@y = 0\n		@x = (@arena[0].length / 2 | 0) - (@matrix[0].length / 2 | 0)\n		if @collide()\n			row.fill(0) for row in @arena\n			@score = 0\n	playerDown : ->\n		@y++\n		if @collide()\n			@y--\n			@merge()\n			@playerReset()\n			@arenaSweep()\n	playerDrop : ->\n		while not @collide()\n			@y++\n		@y--\n		@merge()\n		@playerReset()\n		@arenaSweep()\n	playerMove : (offset) ->\n		@x += offset\n		if @collide() then @x -= offset\n	merge : ->\n		for row,y in @matrix\n			for value,x in row\n				if value != 0 then @arena[y + @y][x + @x] = value\n	rotera : (matrix, dir) ->\n		for y in range matrix.length\n			for x in range y\n				[matrix[x][y], matrix[y][x]] = [matrix[y][x],matrix[x][y]]\n		if dir > 0\n			row.reverse() for row in matrix\n		else\n			matrix.reverse()\n	collide : ->\n		m = @matrix\n		for y in range m.length\n			for x in range m[y].length\n				if (m[y][x] != 0 and (@arena[y + @y] and @arena[y + @y][x + @x]) != 0) then return true\n		false\n	createPiece : (type) ->\n		if type == 'I' then [[0, 1, 0, 0],	[0, 1, 0, 0],	[0, 1, 0, 0],	[0, 1, 0, 0],]\n		else if type == 'L' then [[0, 2, 0],[0, 2, 0],[0, 2, 2],]\n		else if type == 'J' then [[0, 3, 0],[0, 3, 0],[3, 3, 0],]\n		else if type == 'O' then [[4, 4],[4, 4],]\n		else if type == 'Z' then [[5, 5, 0],[0, 5, 5],[0, 0, 0]]\n		else if type == 'S' then [[0, 6, 6],[6, 6, 0],[0, 0, 0]]\n		else if type == 'T' then [[0, 7, 0],[7, 7, 7],[0, 0, 0]]\n	drawMatrix : (matrix, xoff,yoff) ->\n		for row,y in matrix\n			for value,x in row\n				if value != 0\n					fcc value\n					rect 10*(x + xoff), 10*(y + yoff), 10,10\n\napp = new Tetris \"a\"",
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
  k: 'fc text',
  l: 4,
  b: "",
  a: "fc 1,1,0\nsc()\ntextSize 32\ntext 'Coffeescript',0,100"
};

ID_TextB = {
  v: '2017-04-29',
  k: 'bg fc sc sw text',
  l: 5,
  b: "",
  a: "fc 1,1,0\nsc()\ntextSize 32\ntextAlign CENTER,CENTER\ntext 'Coffeescript',100,100"
};

ID_TextC = {
  v: '2017-04-29',
  k: 'fc rd text translate',
  l: 6,
  b: "",
  a: "fc 1,1,0\ntextSize 32\ntextAlign CENTER,CENTER\ntranslate 100,100\nrd 90\ntext 'Coffeescript',0,0"
};

ID_TextD = {
  v: '2017-04-29',
  k: 'fc rd text translate',
  l: 6,
  b: "",
  a: "fc 1,1,0\ntextSize 32\ntextAlign CENTER,CENTER\ntranslate 100,100\nrd 180\ntext 'Coffeescript',0,0"
};

ID_TowerOfHanoi = {
  v: '2017-05-13',
  k: 'bg fc sc range operators [] text for if return constrain class line',
  l: 40,
  b: "class TowerOfHanoi extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new TowerOfHanoi",
  a: "class TowerOfHanoi extends Application\n	reset : ->\n		super\n		@level = 0\n		@H = 10\n		@buttons = [33,100,167]\n		@disk = null\n		@newGame()\n	draw : ->\n		bg 0.75\n		textSize 32\n		textAlign CENTER,CENTER\n		sc()\n		text @counter,100,180\n		for pile,i in @board\n			x = @buttons[i]\n			sc 0.5\n			sw 3\n			line x,55,x,140\n			sc 0\n			line 0,140,200,140\n			sw @H\n			for disk,j in pile\n				y = 134 - j*@H\n				scc disk\n				line x-3*(disk+1),y, x+3*(disk+1),y\n	newGame : ->\n		@counter=0\n		@level = constrain @level+1,1,8\n		@board = [range(@level).reverse(), [], []]\n	mousePressed : (mx,my) ->\n		if @disk==null and @board[0].length==0 and @board[1].length==0\n			@newGame()\n		else\n			for x,index in @buttons\n				if x-33 <= mx <= x+33\n					if @disk == null\n						@disk = @board[index].pop()\n					else\n						pile = @board[index]\n						if pile.length == 0 or _.last(pile) > @disk\n							@counter++\n							pile.push @disk\n							@disk = null\n\napp = new TowerOfHanoi \"a\"\n",
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
  v: '2017-04-29',
  k: 'fc sc sw arc radians strokeCap',
  l: 7,
  b: "",
  a: "fc()\nsc 1,0,0\nsw 20\narc 100,70, 100,100, radians(-90),radians(90)\nsc 1,1,0\nstrokeCap SQUARE\narc 100,120, 100,100, radians(90),radians(-90)"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcVC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsU0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsZ0VBREY7RUFFQSxDQUFBLEVBQUUsR0FGRjtFQUdBLENBQUEsRUFBRSxtSEFIRjtFQVdBLENBQUEsRUFBRSxxbkdBWEY7RUFnSUEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUw7R0FqSUQ7RUFrSUEsQ0FBQSxFQUNDO0lBQUEsV0FBQSxFQUFjLHNDQUFkO0lBQ0Esa0JBQUEsRUFBcUIsNkNBRHJCO0dBbklEOzs7QUFzSUQsUUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsU0FERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLEVBSEY7RUFJQSxDQUFBLEVBQUUsd0RBSkY7OztBQVdELFFBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLGtCQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUUsRUFIRjtFQUlBLENBQUEsRUFBRSxtRkFKRjs7O0FBWUQsUUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsc0JBREY7RUFFQSxDQUFBLEVBQUUsQ0FGRjtFQUdBLENBQUEsRUFBRSxFQUhGO0VBSUEsQ0FBQSxFQUFFLG1HQUpGOzs7QUFhRCxRQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxzQkFERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLEVBSEY7RUFJQSxDQUFBLEVBQUUsb0dBSkY7OztBQWFELGVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLHFFQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsOEhBSEY7RUFXQSxDQUFBLEVBQUUsaytCQVhGO0VBNERBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSxTQUFOO0dBN0REO0VBOERBLENBQUEsRUFDQztJQUFBLFNBQUEsRUFBWSw4Q0FBWjtHQS9ERDs7O0FBaUVELFdBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLGFBREY7RUFFQSxDQUFBLEVBQUUsQ0FGRjtFQUdBLENBQUEsRUFBRSxFQUhGO0VBSUEsQ0FBQSxFQUFFLHdDQUpGOzs7QUFTRCxVQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxnQ0FERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLEVBSEY7RUFJQSxDQUFBLEVBQUUsa0pBSkY7OztBQWNELG1CQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx5REFERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLDBEQUhGO0VBTUEsQ0FBQSxFQUFFLDBhQU5GO0VBOEJBLENBQUEsRUFDQztJQUFBLFNBQUEsRUFBWSw4Q0FBWjtHQS9CRDs7O0FBaUNELFlBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLFdBREY7RUFFQSxDQUFBLEVBQUUsQ0FGRjtFQUdBLENBQUEsRUFBRSxFQUhGO0VBSUEsQ0FBQSxFQUFFLHlEQUpGOzs7QUFXRCxZQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxXQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUUsRUFIRjtFQUlBLENBQUEsRUFBRSw4REFKRiIsInNvdXJjZXNDb250ZW50IjpbIklEX1RldHJpcyA9XG5cdHY6JzIwMTctMDUtMDcnXG5cdGs6J2JnIGZjIHJhbmdlIFtdIHt9IGZvciByZWN0IGlmIHdoaWxlIF8uY29udGFpbnMgb3BlcmF0b3JzIGNsYXNzJ1xuXHRsOjExM1xuXHRiOlwiXCJcIlxuY2xhc3MgVGV0cmlzIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgIDogLT5cblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuYXBwID0gbmV3IFRldHJpc1xuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBUZXRyaXMgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAYnV0dG9ucyA9IFtbMTQwLDEwNSwnLTkwJ10sWzE4MCwxMDUsJys5MCddLFsxNjAsMTMwLCdkbiddLFsxNDAsMTU1LCdsdCddLFsxODAsMTU1LCdydCddLFsxNjAsMTgwLCdzcCddLFsxNjAsNTAsMF1dXG5cdFx0QHNlZWQgPSAwXG5cdFx0QGFyZW5hID0gKG5ldyBBcnJheSgxMikuZmlsbCgwKSBmb3IgaSBpbiByYW5nZSAyMClcblx0XHRAeD0wXG5cdFx0QHk9MFxuXHRcdEBtYXRyaXggPSBudWxsXG5cdFx0QHNjb3JlID0gMFxuXHRcdEBwbGF5ZXJSZXNldCgpXG5cdGRyYXcgOiAtPlxuXHRcdGJnIDBcblx0XHRmYyAwLjVcblx0XHRyZWN0IDAsMCwxMjAsMjAwXG5cdFx0c2MgMFxuXHRcdEBkcmF3TWF0cml4IEBhcmVuYSwgMCwwXG5cdFx0QGRyYXdNYXRyaXggQG1hdHJpeCwgQHgsQHlcblx0XHRAYXJlbmFTd2VlcCgpXG5cdFx0dGV4dFNpemUgMjBcblx0XHR0ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxuXHRcdEBidXR0b25zWzZdWzJdID0gQHNjb3JlXG5cdFx0Zm9yIFt4LHksdHh0XSxpbmRleCBpbiBAYnV0dG9uc1xuXHRcdFx0ZmMgMC41XG5cdFx0XHRpZiBpbmRleCA8IDYgdGhlbiBjaXJjbGUgeCx5LDE1XG5cdFx0XHRmYyAxLDEsMFxuXHRcdFx0dGV4dCB0eHQseCx5XG5cdHJhbmRpbnQgOiAobikgLT4gaW50IG4gKiBmcmFjdGlvbiAxMDAwMCAqIE1hdGguc2luIEBzZWVkKytcblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuXHRcdGZvciBbeCx5LHR4dF0saW5kZXggaW4gQGJ1dHRvbnNcblx0XHRcdGlmIGRpc3QobXgsbXkseCx5KSA8IDE1XG5cdFx0XHRcdGlmIGluZGV4PT0wIHRoZW4gQHBsYXllclJvdGF0ZSAtMSAjIC05MFxuXHRcdFx0XHRpZiBpbmRleD09MSB0aGVuIEBwbGF5ZXJSb3RhdGUgMSAgIyArOTBcblx0XHRcdFx0aWYgaW5kZXg9PTIgdGhlbiBAcGxheWVyRG93bigpICAgICMgRE9XTlxuXHRcdFx0XHRpZiBpbmRleD09MyB0aGVuIEBwbGF5ZXJNb3ZlIC0xICAgIyBMRUZUXG5cdFx0XHRcdGlmIGluZGV4PT00IHRoZW4gQHBsYXllck1vdmUgMSAgICAjIFJJR0hUXG5cdFx0XHRcdGlmIGluZGV4PT01IHRoZW4gQHBsYXllckRyb3AoKSAgICAjIFNQQUNFXG5cdGFyZW5hU3dlZXAgOiAtPlxuXHRcdGZvciBpIGluIHJhbmdlIEBhcmVuYS5sZW5ndGhcblx0XHRcdHkgPSAxOS1pXG5cdFx0XHRyYWQgPSBAYXJlbmFbeV1cblx0XHRcdGlmIG5vdCBfLmNvbnRhaW5zIHJhZCwgMFxuXHRcdFx0XHRyb3cgPSBAYXJlbmEuc3BsaWNlKHksIDEpWzBdLmZpbGwgMFxuXHRcdFx0XHRAYXJlbmEudW5zaGlmdCByb3dcblx0XHRcdFx0QHNjb3JlKytcblx0cGxheWVyUm90YXRlIDogKGRpcikgLT5cblx0XHR4cG9zID0gQHhcblx0XHRvZmZzZXQgPSAxXG5cdFx0QHJvdGVyYSBAbWF0cml4LCBkaXJcblx0XHR3aGlsZSBAY29sbGlkZSgpXG5cdFx0XHRAeCArPSBvZmZzZXRcblx0XHRcdG9mZnNldCA9IC0ob2Zmc2V0ICsgKG9mZnNldCA+IDAgPyAxIDogLTEpKVxuXHRcdFx0aWYgb2Zmc2V0ID4gQG1hdHJpeFswXS5sZW5ndGhcblx0XHRcdFx0QHJvdGVyYSBAbWF0cml4LCAtZGlyXG5cdFx0XHRcdEB4ID0geHBvc1xuXHRcdFx0XHRyZXR1cm5cblx0cGxheWVyUmVzZXQgOiAtPlxuXHRcdHBpZWNlcyA9ICdUSkxPU1pJJ1xuXHRcdEBtYXRyaXggPSBAY3JlYXRlUGllY2UgcGllY2VzW0ByYW5kaW50IHBpZWNlcy5sZW5ndGhdXG5cdFx0QHkgPSAwXG5cdFx0QHggPSAoQGFyZW5hWzBdLmxlbmd0aCAvIDIgfCAwKSAtIChAbWF0cml4WzBdLmxlbmd0aCAvIDIgfCAwKVxuXHRcdGlmIEBjb2xsaWRlKClcblx0XHRcdHJvdy5maWxsKDApIGZvciByb3cgaW4gQGFyZW5hXG5cdFx0XHRAc2NvcmUgPSAwXG5cdHBsYXllckRvd24gOiAtPlxuXHRcdEB5Kytcblx0XHRpZiBAY29sbGlkZSgpXG5cdFx0XHRAeS0tXG5cdFx0XHRAbWVyZ2UoKVxuXHRcdFx0QHBsYXllclJlc2V0KClcblx0XHRcdEBhcmVuYVN3ZWVwKClcblx0cGxheWVyRHJvcCA6IC0+XG5cdFx0d2hpbGUgbm90IEBjb2xsaWRlKClcblx0XHRcdEB5Kytcblx0XHRAeS0tXG5cdFx0QG1lcmdlKClcblx0XHRAcGxheWVyUmVzZXQoKVxuXHRcdEBhcmVuYVN3ZWVwKClcblx0cGxheWVyTW92ZSA6IChvZmZzZXQpIC0+XG5cdFx0QHggKz0gb2Zmc2V0XG5cdFx0aWYgQGNvbGxpZGUoKSB0aGVuIEB4IC09IG9mZnNldFxuXHRtZXJnZSA6IC0+XG5cdFx0Zm9yIHJvdyx5IGluIEBtYXRyaXhcblx0XHRcdGZvciB2YWx1ZSx4IGluIHJvd1xuXHRcdFx0XHRpZiB2YWx1ZSAhPSAwIHRoZW4gQGFyZW5hW3kgKyBAeV1beCArIEB4XSA9IHZhbHVlXG5cdHJvdGVyYSA6IChtYXRyaXgsIGRpcikgLT5cblx0XHRmb3IgeSBpbiByYW5nZSBtYXRyaXgubGVuZ3RoXG5cdFx0XHRmb3IgeCBpbiByYW5nZSB5XG5cdFx0XHRcdFttYXRyaXhbeF1beV0sIG1hdHJpeFt5XVt4XV0gPSBbbWF0cml4W3ldW3hdLG1hdHJpeFt4XVt5XV1cblx0XHRpZiBkaXIgPiAwXG5cdFx0XHRyb3cucmV2ZXJzZSgpIGZvciByb3cgaW4gbWF0cml4XG5cdFx0ZWxzZVxuXHRcdFx0bWF0cml4LnJldmVyc2UoKVxuXHRjb2xsaWRlIDogLT5cblx0XHRtID0gQG1hdHJpeFxuXHRcdGZvciB5IGluIHJhbmdlIG0ubGVuZ3RoXG5cdFx0XHRmb3IgeCBpbiByYW5nZSBtW3ldLmxlbmd0aFxuXHRcdFx0XHRpZiAobVt5XVt4XSAhPSAwIGFuZCAoQGFyZW5hW3kgKyBAeV0gYW5kIEBhcmVuYVt5ICsgQHldW3ggKyBAeF0pICE9IDApIHRoZW4gcmV0dXJuIHRydWVcblx0XHRmYWxzZVxuXHRjcmVhdGVQaWVjZSA6ICh0eXBlKSAtPlxuXHRcdGlmIHR5cGUgPT0gJ0knIHRoZW4gW1swLCAxLCAwLCAwXSxcdFswLCAxLCAwLCAwXSxcdFswLCAxLCAwLCAwXSxcdFswLCAxLCAwLCAwXSxdXG5cdFx0ZWxzZSBpZiB0eXBlID09ICdMJyB0aGVuIFtbMCwgMiwgMF0sWzAsIDIsIDBdLFswLCAyLCAyXSxdXG5cdFx0ZWxzZSBpZiB0eXBlID09ICdKJyB0aGVuIFtbMCwgMywgMF0sWzAsIDMsIDBdLFszLCAzLCAwXSxdXG5cdFx0ZWxzZSBpZiB0eXBlID09ICdPJyB0aGVuIFtbNCwgNF0sWzQsIDRdLF1cblx0XHRlbHNlIGlmIHR5cGUgPT0gJ1onIHRoZW4gW1s1LCA1LCAwXSxbMCwgNSwgNV0sWzAsIDAsIDBdXVxuXHRcdGVsc2UgaWYgdHlwZSA9PSAnUycgdGhlbiBbWzAsIDYsIDZdLFs2LCA2LCAwXSxbMCwgMCwgMF1dXG5cdFx0ZWxzZSBpZiB0eXBlID09ICdUJyB0aGVuIFtbMCwgNywgMF0sWzcsIDcsIDddLFswLCAwLCAwXV1cblx0ZHJhd01hdHJpeCA6IChtYXRyaXgsIHhvZmYseW9mZikgLT5cblx0XHRmb3Igcm93LHkgaW4gbWF0cml4XG5cdFx0XHRmb3IgdmFsdWUseCBpbiByb3dcblx0XHRcdFx0aWYgdmFsdWUgIT0gMFxuXHRcdFx0XHRcdGZjYyB2YWx1ZVxuXHRcdFx0XHRcdHJlY3QgMTAqKHggKyB4b2ZmKSwgMTAqKHkgKyB5b2ZmKSwgMTAsMTBcblxuYXBwID0gbmV3IFRldHJpcyBcImFcIlxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwOiBcInJlc2V0KClcIlxuXHRlOlxuXHRcdFwiV2lraXBlZGlhXCIgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RldHJpc1wiXG5cdFx0XCJNZXRoIE1ldGggTWV0aG9kXCIgOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9SDJhVzVWNDZraEFcIlxuXG5JRF9UZXh0QSA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2ZjIHRleHQnXG5cdGw6NFxuXHRiOlwiXCJcblx0YTpcIlwiXCJcbmZjIDEsMSwwXG5zYygpXG50ZXh0U2l6ZSAzMlxudGV4dCAnQ29mZmVlc2NyaXB0JywwLDEwMFxuXCJcIlwiXG5cbklEX1RleHRCID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgZmMgc2Mgc3cgdGV4dCdcblx0bDo1XG5cdGI6XCJcIlxuXHRhOlwiXCJcIlxuZmMgMSwxLDBcbnNjKClcbnRleHRTaXplIDMyXG50ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxudGV4dCAnQ29mZmVlc2NyaXB0JywxMDAsMTAwXG5cIlwiXCJcblxuSURfVGV4dEMgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidmYyByZCB0ZXh0IHRyYW5zbGF0ZSdcblx0bDo2XG5cdGI6XCJcIlxuXHRhOlwiXCJcIlxuZmMgMSwxLDBcbnRleHRTaXplIDMyXG50ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxudHJhbnNsYXRlIDEwMCwxMDBcbnJkIDkwXG50ZXh0ICdDb2ZmZWVzY3JpcHQnLDAsMFxuXCJcIlwiXG5cbklEX1RleHREID1cblx0djonMjAxNy0wNC0yOSdcblx0azonZmMgcmQgdGV4dCB0cmFuc2xhdGUnXG5cdGw6NlxuXHRiOlwiXCJcblx0YTpcIlwiXCJcbmZjIDEsMSwwXG50ZXh0U2l6ZSAzMlxudGV4dEFsaWduIENFTlRFUixDRU5URVJcbnRyYW5zbGF0ZSAxMDAsMTAwXG5yZCAxODBcbnRleHQgJ0NvZmZlZXNjcmlwdCcsMCwwXG5cIlwiXCJcblxuSURfVG93ZXJPZkhhbm9pID1cblx0djonMjAxNy0wNS0xMydcblx0azonYmcgZmMgc2MgcmFuZ2Ugb3BlcmF0b3JzIFtdIHRleHQgZm9yIGlmIHJldHVybiBjb25zdHJhaW4gY2xhc3MgbGluZSdcblx0bDo0MFxuXHRiOlwiXCJcIlxuY2xhc3MgVG93ZXJPZkhhbm9pIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5hcHAgPSBuZXcgVG93ZXJPZkhhbm9pXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIFRvd2VyT2ZIYW5vaSBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBsZXZlbCA9IDBcblx0XHRASCA9IDEwXG5cdFx0QGJ1dHRvbnMgPSBbMzMsMTAwLDE2N11cblx0XHRAZGlzayA9IG51bGxcblx0XHRAbmV3R2FtZSgpXG5cdGRyYXcgOiAtPlxuXHRcdGJnIDAuNzVcblx0XHR0ZXh0U2l6ZSAzMlxuXHRcdHRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXG5cdFx0c2MoKVxuXHRcdHRleHQgQGNvdW50ZXIsMTAwLDE4MFxuXHRcdGZvciBwaWxlLGkgaW4gQGJvYXJkXG5cdFx0XHR4ID0gQGJ1dHRvbnNbaV1cblx0XHRcdHNjIDAuNVxuXHRcdFx0c3cgM1xuXHRcdFx0bGluZSB4LDU1LHgsMTQwXG5cdFx0XHRzYyAwXG5cdFx0XHRsaW5lIDAsMTQwLDIwMCwxNDBcblx0XHRcdHN3IEBIXG5cdFx0XHRmb3IgZGlzayxqIGluIHBpbGVcblx0XHRcdFx0eSA9IDEzNCAtIGoqQEhcblx0XHRcdFx0c2NjIGRpc2tcblx0XHRcdFx0bGluZSB4LTMqKGRpc2srMSkseSwgeCszKihkaXNrKzEpLHlcblx0bmV3R2FtZSA6IC0+XG5cdFx0QGNvdW50ZXI9MFxuXHRcdEBsZXZlbCA9IGNvbnN0cmFpbiBAbGV2ZWwrMSwxLDhcblx0XHRAYm9hcmQgPSBbcmFuZ2UoQGxldmVsKS5yZXZlcnNlKCksIFtdLCBbXV1cblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuXHRcdGlmIEBkaXNrPT1udWxsIGFuZCBAYm9hcmRbMF0ubGVuZ3RoPT0wIGFuZCBAYm9hcmRbMV0ubGVuZ3RoPT0wXG5cdFx0XHRAbmV3R2FtZSgpXG5cdFx0ZWxzZVxuXHRcdFx0Zm9yIHgsaW5kZXggaW4gQGJ1dHRvbnNcblx0XHRcdFx0aWYgeC0zMyA8PSBteCA8PSB4KzMzXG5cdFx0XHRcdFx0aWYgQGRpc2sgPT0gbnVsbFxuXHRcdFx0XHRcdFx0QGRpc2sgPSBAYm9hcmRbaW5kZXhdLnBvcCgpXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cGlsZSA9IEBib2FyZFtpbmRleF1cblx0XHRcdFx0XHRcdGlmIHBpbGUubGVuZ3RoID09IDAgb3IgXy5sYXN0KHBpbGUpID4gQGRpc2tcblx0XHRcdFx0XHRcdFx0QGNvdW50ZXIrK1xuXHRcdFx0XHRcdFx0XHRwaWxlLnB1c2ggQGRpc2tcblx0XHRcdFx0XHRcdFx0QGRpc2sgPSBudWxsXG5cbmFwcCA9IG5ldyBUb3dlck9mSGFub2kgXCJhXCJcblxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpXCJcblx0ZTpcblx0XHRXaWtpcGVkaWEgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Rvd2VyX29mX0hhbm9pXCJcblxuSURfVHJpYW5nbGUgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidmYyB0cmlhbmdsZSdcblx0bDoyXG5cdGI6XCJcIlxuXHRhOlwiXCJcIlxuZmMgMVxudHJpYW5nbGUgMjAsNDAsIDE2MCwxMDAsIDEwMCwxNDBcblwiXCJcIlxuXG5JRF9Ud29BcmNzID1cblx0djonMjAxNy0wNC0yOSdcblx0azonZmMgc2Mgc3cgYXJjIHJhZGlhbnMgc3Ryb2tlQ2FwJ1xuXHRsOjdcblx0YjpcIlwiXG5cdGE6XCJcIlwiXG5mYygpXG5zYyAxLDAsMFxuc3cgMjBcbmFyYyAxMDAsNzAsIDEwMCwxMDAsIHJhZGlhbnMoLTkwKSxyYWRpYW5zKDkwKVxuc2MgMSwxLDBcbnN0cm9rZUNhcCBTUVVBUkVcbmFyYyAxMDAsMTIwLCAxMDAsMTAwLCByYWRpYW5zKDkwKSxyYWRpYW5zKC05MClcblwiXCJcIlxuXG5JRF9Ud29EaWNlSGlzdG9ncmFtID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgZmMgc2MgcmFuZ2UgaW50IHJhbmRvbSB0ZXh0IGlmIGZvciBvcGVyYXRvcnMgcmVjdCBbXSdcblx0bDoyMlxuXHRiOlwiXCJcIlxuIyBPQlM6IFDDpSBncnVuZCBhdiByYW5kb20gYmxpciBiaXRtYXBwYXJuYSBpbnRlIGxpa2FkYW5hXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNvdW50cyA9IEFycmF5KDExKS5maWxsIDBcbmRpY2UgPSAtPiBpbnQgNiAqIHJhbmRvbSgpXG50ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxuZm9yIGkgaW4gcmFuZ2UgMTAwMFxuXHRjb3VudHNbZGljZSgpICsgZGljZSgpXSsrXG5oID0gaW50IDIwMC8xMVxuYmcgMFxuZm9yIGNvdW50LGkgaW4gY291bnRzXG5cdHkgPSBoKmlcblx0ZmMgMSwxLDAsMC41XG5cdHNjIDEsMSwwXG5cdHJlY3QgMCx5LGNvdW50LGgtM1xuXHRmYyAxLDEsMFxuXHRzYygpXG5cdHRleHRBbGlnbiBMRUZULENFTlRFUlxuXHR0ZXh0IGkrMiwgNSx5K2gvMlxuXHRpZiBjb3VudCA8IDEwMFxuXHRcdHRleHRBbGlnbiBMRUZULENFTlRFUlxuXHRcdHRleHQgY291bnQsIGNvdW50KzUseStoLzJcblx0ZWxzZVxuXHRcdHRleHRBbGlnbiBSSUdIVCxDRU5URVJcblx0XHR0ZXh0IGNvdW50LCBjb3VudC01LHkraC8yXG5cIlwiXCJcblx0ZTpcblx0XHRBbmltZXJpbmcgOiBcImh0dHBzOi8vd3d3Lm9wZW5wcm9jZXNzaW5nLm9yZy9za2V0Y2gvMTI0MjM2XCJcblxuSURfVHdvRGlzY3NBID1cblx0djonMjAxNy0wNC0yOSdcblx0azonY2lyY2xlIGZjJ1xuXHRsOjRcblx0YjpcIlwiXG5cdGE6XCJcIlwiXG5mYyAxLDAsMFxuY2lyY2xlIDgwLDEwMCw0MFxuZmMgMCwxLDBcbmNpcmNsZSAxMDAsMTIwLDUwXG5cIlwiXCJcblxuSURfVHdvRGlzY3NCID1cblx0djonMjAxNy0wNC0yOSdcblx0azonY2lyY2xlIGZjJ1xuXHRsOjRcblx0YjpcIlwiXG5cdGE6XCJcIlwiXG5mYyAxLDAsMFxuY2lyY2xlIDgwLDEwMCw0MFxuZmMgMCwxLDAsIDAuNVxuY2lyY2xlIDEyMCwxMDAsNTBcblwiXCJcIlxuXG4iXX0=
//# sourceURL=C:\github\p5Dojo\coffee\data\T.coffee