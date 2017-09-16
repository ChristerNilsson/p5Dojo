// Generated by CoffeeScript 1.11.1
var ID_Magnifier, ID_ManyDices, ID_MidPoints, ID_MineSweeper, ID_Moire, ID_MultiTimer, ID_MyAverage, ID_MyLerp, ID_MyMap;

ID_Magnifier = {
  v: '2017-09-16',
  k: 'for range if while [] operators text rect circle class',
  l: 69,
  b: "class Magnifier extends Application\n	reset : ->\n		super\n	draw  : ->\n	up    : ->\n	down  : ->\napp = new Magnifier",
  a: "class Magnifier extends Application\n	reset : ->\n		super\n		@n=2\n	draw  : ->\n		bg 0\n		n = @n\n		if n==2\n			fc 1\n			rect 0,0,200,200\n		if n>=3\n			w = int n/3\n			for i in range 200/n\n				sc 1,0,0\n				fc 1,0,0\n				rect 0*w+n*i,0,w,200\n				sc 0,1,0\n				fc 0,1,0\n				rect 1*w+n*i,0,w,200\n				sc 0,0,1\n				fc 0,0,1\n				rect 2*w+n*i,0,w,200\n	up    : -> @n++\n	down  : -> @n--\napp = new Magnifier \"a\"",
  c: {
    app: "reset()|up()|down()"
  }
};

ID_ManyDices = {
  v: '2017-05-20',
  k: '-> range for if point [] operators',
  l: 9,
  b: "",
  a: "sw 2\ndice = (x,y,d) ->\n	for bits,i in [21,56,32,62,62,32,56]\n		dx = 4 * [0,-1,-1,-1,1,1,1][i]\n		dy = 4 * [0,-1,0,1,-1,0,1][i]\n		if d&bits then point 10+x+dx,10+y+dy\nfor i in range 10\n	for j in range 10\n		dice 20*i, 20*j, 1 << (i+j) % 6"
};

ID_MidPoints = {
  v: '2017-04-29',
  k: 'sc sw point',
  l: 11,
  b: "",
  a: "sw 10\nsc 1,0,0\npoint 100,100\nsc 0,1,0\npoint 100,0\nsc 1,1,0\npoint 0,100\nsc 0\npoint 200,100\nsc 1\npoint 100,200",
  e: {
    Matteboken: "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"
  }
};

ID_MineSweeper = {
  v: '2017-05-19',
  k: 'for range if while [] operators text rect circle class',
  l: 69,
  b: "class MineSweeper extends Application\n	reset : (w,totalBombs) ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\napp = new MineSweeper",
  a: "\nclass MineSweeper extends Application\n	reset : (w,totalBombs) ->\n		super\n		@seed = 0\n		@w = w\n		@n = int 200 / @w\n		@newGame totalBombs\n	newGame : (totalBombs) ->\n		@state = 0\n		@revealed = []\n		@bombs = (@randint @n*@n for i in range totalBombs)\n	neighborCount : (i0,j0) ->\n		total = 0\n		for di in [-1,0,1]\n			for dj in [-1,0,1]\n				[i,j] = [i0 + di,j0 + dj]\n				if -1 < i < @n and -1 < j < @n\n					if @n*j+i in @bombs then total++\n		total\n	draw : ->\n		textAlign CENTER,CENTER\n		textSize @w\n		rectMode CENTER\n		for i in range @n\n			for j in range @n\n				index = @n * j + i\n				[x,y] = [@w*i+@w/2, @w*j+@w/2]\n				sc 0\n				fc 0.5\n				rect x, y, @w, @w\n				if @state==1 or index in @revealed\n					fc 0\n					if index in @bombs then circle x, y, @w * 0.25\n					else\n						fc 0.75\n						rect x, y, @w, @w\n						nc = @neighborCount i,j\n						sc()\n						fill cc nc\n						if nc > 0 then text nc, x+1, y+1\n	mousePressed : (mx,my) ->\n		if @state==1 then @newGame @bombs.length\n		else\n			i = int mx/@w\n			j = int my/@w\n			index = @n*j+i\n			if index in @bombs then	@state = 1 else	@reveal i,j\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	reveal : (i,j) ->\n		@revealed.push @n*j+i\n		if @neighborCount(i,j) == 0 then @floodFill i,j\n	floodFill : (i0,j0) ->\n		for di in [-1,0,1]\n			for dj in [-1,0,1]\n				i = i0 + di\n				j = j0 + dj\n				if -1 < i < @n and -1 < j < @n\n					index = @n*j+i\n					if not (index in @bombs or index in @revealed) then @reveal i,j\n\napp = new MineSweeper \"a\"",
  c: {
    app: "reset 20,10|reset 20,20|reset 20,30|reset 10,40"
  },
  e: {
    CodingTrain: "https://www.youtube.com/watch?v=LFU5ZlrR21E",
    Wikipedia: "https://en.wikipedia.org/wiki/Minesweeper_(video_game)"
  }
};

ID_Moire = {
  v: '2017-04-29',
  k: 'bg range operators for line map class',
  l: 11,
  b: "class Moire extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Moire",
  a: "class Moire extends Application\n	reset : ->\n		super\n		[@x,@y] = [100,100]\n	draw : ->\n		bg 0\n		for i in range 40\n			for j in range 4\n				[x,y] = [0,i*5,200,200-i*5,0][j..j+1]\n				line @x,@y,x,y\n	mousePressed : (mx,my) -> [@x,@y] = [mx,my]\n\napp = new Moire \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Moir%C3%A9_pattern"
  }
};

ID_MultiTimer = {
  v: '2017-04-29',
  k: 'bg sc fc for [] operators text nf if int round millis class',
  l: 30,
  b: "# OBS! Tiderna kan skilja med flera millisekunder. Sorry!\n\nclass MultiTimer extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new MultiTimer",
  a: "class MultiTimer extends Application\n	reset : ->\n		super\n		@start = int millis()\n		@buttons = [[0,0,\"A\",0],[100,0,\"B\",0],[0,50,\"C\",0],[100,50,\"D\",0],[0,100,\"E\",0],[100,100,\"F\",0],[0,150,\"G\",0],[100,150,\"H\",0]]\n		@active = -1\n	draw : ->\n		bg 0\n		textFont \"monospace\"\n		textSize 24\n		sc()\n		for [x,y,txt,time],i in @buttons\n			if @active==i then fc 1,0,0 else fc 1,1,0\n			textAlign LEFT,TOP\n			text txt, x+10,y\n			textAlign RIGHT,TOP\n			secs = round time/1000\n			text nf(int(secs / 60),2) + ':' + nf(secs % 60,2), x+100,y\n	mousePressed : (mx,my) ->\n		for [x,y,txt,time],i in @buttons\n			if x <= mx <= x+100 and y <= my <= y+50 then active = i\n		if active == @active\n			@buttons[@active][3] += int millis() - @start\n			@active = -1\n		else if @active == -1\n			@active = active\n		else # byte\n			@buttons[@active][3] += int millis() - @start\n			@active = active\n		@start = int millis()\n\napp = new MultiTimer \"a\"",
  c: {
    app: "reset()"
  }
};

ID_MyAverage = {
  v: '2017-09-16',
  k: '-> bg fc sc if text operators',
  l: 5,
  b: "average = (a,b) -> 0\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 5,  average 0,10\ntest 20, average 10,30\ntest 10, average -10,30",
  a: "average = (a,b) -> (a+b)/2\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 5,  average 0,10\ntest 20, average 10,30\ntest 10, average -10,30"
};

ID_MyLerp = {
  v: '2017-05-18',
  k: '-> bg fc sc if text lerp operators',
  l: 1,
  b: "lerp = (a,b,i) -> 0\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 10, lerp 10,20,0\ntest 20, lerp 10,20,1\ntest 30, lerp 10,20,2\ntest 0,  lerp 10,20,-1\ntest 15, lerp 10,20,0.5\ntest 11, lerp 1,2,10\ntest 21, lerp 1,3,10\ntest -1, lerp 1,0,2\ntest 2,  lerp 10,9,8\ntest 0.4,lerp 0.1,0.2,3",
  a: "lerp = (a,b,i) -> a+(b-a)*i\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 10, lerp 10,20,0\ntest 20, lerp 10,20,1\ntest 30, lerp 10,20,2\ntest 0,  lerp 10,20,-1\ntest 15, lerp 10,20,0.5\ntest 11, lerp 1,2,10\ntest 21, lerp 1,3,10\ntest -1, lerp 1,0,2\ntest 2,  lerp 10,9,8\ntest 0.4,lerp 0.1,0.2,3"
};

ID_MyMap = {
  v: '2017-05-18',
  k: '-> bg fc sc if text map operators',
  l: 1,
  b: "map = (x,x0,x1,y0,y1) -> 0\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 50,  map 10,10,20,50,150\ntest 100, map 15,10,20,50,150\ntest 150, map 20,10,20,50,150\ntest 250, map 30,10,20,50,150\ntest -50, map 0,10,20,50,150\ntest 5,   map 10,10,20,5,15\ntest 10,  map 15,10,20,5,15\ntest 15,  map 20,10,20,5,15\ntest 25,  map 30,10,20,5,15\ntest -5,  map 0,10,20,5,15\n",
  a: "map = (x,x0,x1,y0,y1) -> y0 + (x-x0)*(y1-y0)/(x1-x0)\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 50,  map 10,10,20,50,150\ntest 100, map 15,10,20,50,150\ntest 150, map 20,10,20,50,150\ntest 250, map 30,10,20,50,150\ntest -50, map 0,10,20,50,150\ntest 5,   map 10,10,20,5,15\ntest 10,  map 15,10,20,5,15\ntest 15,  map 20,10,20,5,15\ntest 25,  map 30,10,20,5,15\ntest -5,  map 0,10,20,5,15"
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcTS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsWUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsd0RBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRSx1SEFIRjtFQVlBLENBQUEsRUFBRSxnYUFaRjtFQXVDQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0scUJBQU47R0F4Q0Q7OztBQTJDRCxZQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxvQ0FERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFJLEVBSEo7RUFJQSxDQUFBLEVBQUkscVBBSko7OztBQWdCRCxZQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxhQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLENBQUEsRUFBRyx3SEFKSDtFQWlCQSxDQUFBLEVBQ0M7SUFBQSxVQUFBLEVBQWEsdUVBQWI7R0FsQkQ7OztBQW9CRCxjQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx3REFERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLHlNQUhGO0VBWUEsQ0FBQSxFQUFHLDZnREFaSDtFQTRFQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0saURBQU47R0E3RUQ7RUE4RUEsQ0FBQSxFQUNDO0lBQUEsV0FBQSxFQUFjLDZDQUFkO0lBQ0EsU0FBQSxFQUFZLHdEQURaO0dBL0VEOzs7QUFrRkQsUUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsdUNBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRSxpSEFIRjtFQVdBLENBQUEsRUFBRyxrUkFYSDtFQTBCQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0sU0FBTjtHQTNCRDtFQTRCQSxDQUFBLEVBQ0M7SUFBQSxTQUFBLEVBQVksa0RBQVo7R0E3QkQ7OztBQStCRCxhQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSw2REFERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLHdMQUhGO0VBYUEsQ0FBQSxFQUFFLDg3QkFiRjtFQStDQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBTDtHQWhERDs7O0FBa0RELFlBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLCtCQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUksb1JBSEo7RUF1QkEsQ0FBQSxFQUFJLDBSQXZCSjs7O0FBMkNELFNBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG9DQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUksaWJBSEo7RUE4QkEsQ0FBQSxFQUFJLHliQTlCSjs7O0FBeURELFFBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG1DQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUksOGZBSEo7RUErQkEsQ0FBQSxFQUFJLHNoQkEvQkoiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9NYWduaWZpZXIgPVxuXHR2OicyMDE3LTA5LTE2J1xuXHRrOidmb3IgcmFuZ2UgaWYgd2hpbGUgW10gb3BlcmF0b3JzIHRleHQgcmVjdCBjaXJjbGUgY2xhc3MnXG5cdGw6Njlcblx0YjpcIlwiXCJcbmNsYXNzIE1hZ25pZmllciBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRkcmF3ICA6IC0+XG5cdHVwICAgIDogLT5cblx0ZG93biAgOiAtPlxuYXBwID0gbmV3IE1hZ25pZmllclxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBNYWduaWZpZXIgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAbj0yXG5cdGRyYXcgIDogLT5cblx0XHRiZyAwXG5cdFx0biA9IEBuXG5cdFx0aWYgbj09MlxuXHRcdFx0ZmMgMVxuXHRcdFx0cmVjdCAwLDAsMjAwLDIwMFxuXHRcdGlmIG4+PTNcblx0XHRcdHcgPSBpbnQgbi8zXG5cdFx0XHRmb3IgaSBpbiByYW5nZSAyMDAvblxuXHRcdFx0XHRzYyAxLDAsMFxuXHRcdFx0XHRmYyAxLDAsMFxuXHRcdFx0XHRyZWN0IDAqdytuKmksMCx3LDIwMFxuXHRcdFx0XHRzYyAwLDEsMFxuXHRcdFx0XHRmYyAwLDEsMFxuXHRcdFx0XHRyZWN0IDEqdytuKmksMCx3LDIwMFxuXHRcdFx0XHRzYyAwLDAsMVxuXHRcdFx0XHRmYyAwLDAsMVxuXHRcdFx0XHRyZWN0IDIqdytuKmksMCx3LDIwMFxuXHR1cCAgICA6IC0+IEBuKytcblx0ZG93biAgOiAtPiBAbi0tXG5hcHAgPSBuZXcgTWFnbmlmaWVyIFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8dXAoKXxkb3duKClcIlxuXG5cbklEX01hbnlEaWNlcyA9XG5cdHY6JzIwMTctMDUtMjAnXG5cdGs6Jy0+IHJhbmdlIGZvciBpZiBwb2ludCBbXSBvcGVyYXRvcnMnXG5cdGw6OVxuXHRiIDogXCJcIlxuXHRhIDogXCJcIlwiXG5zdyAyXG5kaWNlID0gKHgseSxkKSAtPlxuXHRmb3IgYml0cyxpIGluIFsyMSw1NiwzMiw2Miw2MiwzMiw1Nl1cblx0XHRkeCA9IDQgKiBbMCwtMSwtMSwtMSwxLDEsMV1baV1cblx0XHRkeSA9IDQgKiBbMCwtMSwwLDEsLTEsMCwxXVtpXVxuXHRcdGlmIGQmYml0cyB0aGVuIHBvaW50IDEwK3grZHgsMTAreStkeVxuZm9yIGkgaW4gcmFuZ2UgMTBcblx0Zm9yIGogaW4gcmFuZ2UgMTBcblx0XHRkaWNlIDIwKmksIDIwKmosIDEgPDwgKGkraikgJSA2XG5cIlwiXCJcblxuSURfTWlkUG9pbnRzID1cblx0djonMjAxNy0wNC0yOSdcblx0azonc2Mgc3cgcG9pbnQnXG5cdGw6MTFcblx0YjogXCJcIlxuXHRhOiBcIlwiXCJcbnN3IDEwXG5zYyAxLDAsMFxucG9pbnQgMTAwLDEwMFxuc2MgMCwxLDBcbnBvaW50IDEwMCwwXG5zYyAxLDEsMFxucG9pbnQgMCwxMDBcbnNjIDBcbnBvaW50IDIwMCwxMDBcbnNjIDFcbnBvaW50IDEwMCwyMDBcblwiXCJcIlxuXHRlIDpcblx0XHRNYXR0ZWJva2VuIDogXCJodHRwOi8vd3d3Lm1hdHRlYm9rZW4uc2UvbGVrdGlvbmVyL21hdHRlLTEvZnVua3Rpb25lci9rb29yZGluYXRzeXN0ZW1cIlxuXG5JRF9NaW5lU3dlZXBlciA9XG5cdHY6JzIwMTctMDUtMTknXG5cdGs6J2ZvciByYW5nZSBpZiB3aGlsZSBbXSBvcGVyYXRvcnMgdGV4dCByZWN0IGNpcmNsZSBjbGFzcydcblx0bDo2OVxuXHRiOlwiXCJcIlxuY2xhc3MgTWluZVN3ZWVwZXIgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6ICh3LHRvdGFsQm9tYnMpIC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5cdHJhbmRpbnQgOiAobikgLT4gaW50IG4gKiBmcmFjdGlvbiAxMDAwMCAqIE1hdGguc2luIEBzZWVkKytcbmFwcCA9IG5ldyBNaW5lU3dlZXBlclxuXCJcIlwiXG5cdGE6IFwiXCJcIlxuXG5jbGFzcyBNaW5lU3dlZXBlciBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogKHcsdG90YWxCb21icykgLT5cblx0XHRzdXBlclxuXHRcdEBzZWVkID0gMFxuXHRcdEB3ID0gd1xuXHRcdEBuID0gaW50IDIwMCAvIEB3XG5cdFx0QG5ld0dhbWUgdG90YWxCb21ic1xuXHRuZXdHYW1lIDogKHRvdGFsQm9tYnMpIC0+XG5cdFx0QHN0YXRlID0gMFxuXHRcdEByZXZlYWxlZCA9IFtdXG5cdFx0QGJvbWJzID0gKEByYW5kaW50IEBuKkBuIGZvciBpIGluIHJhbmdlIHRvdGFsQm9tYnMpXG5cdG5laWdoYm9yQ291bnQgOiAoaTAsajApIC0+XG5cdFx0dG90YWwgPSAwXG5cdFx0Zm9yIGRpIGluIFstMSwwLDFdXG5cdFx0XHRmb3IgZGogaW4gWy0xLDAsMV1cblx0XHRcdFx0W2ksal0gPSBbaTAgKyBkaSxqMCArIGRqXVxuXHRcdFx0XHRpZiAtMSA8IGkgPCBAbiBhbmQgLTEgPCBqIDwgQG5cblx0XHRcdFx0XHRpZiBAbipqK2kgaW4gQGJvbWJzIHRoZW4gdG90YWwrK1xuXHRcdHRvdGFsXG5cdGRyYXcgOiAtPlxuXHRcdHRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXG5cdFx0dGV4dFNpemUgQHdcblx0XHRyZWN0TW9kZSBDRU5URVJcblx0XHRmb3IgaSBpbiByYW5nZSBAblxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgQG5cblx0XHRcdFx0aW5kZXggPSBAbiAqIGogKyBpXG5cdFx0XHRcdFt4LHldID0gW0B3KmkrQHcvMiwgQHcqaitAdy8yXVxuXHRcdFx0XHRzYyAwXG5cdFx0XHRcdGZjIDAuNVxuXHRcdFx0XHRyZWN0IHgsIHksIEB3LCBAd1xuXHRcdFx0XHRpZiBAc3RhdGU9PTEgb3IgaW5kZXggaW4gQHJldmVhbGVkXG5cdFx0XHRcdFx0ZmMgMFxuXHRcdFx0XHRcdGlmIGluZGV4IGluIEBib21icyB0aGVuIGNpcmNsZSB4LCB5LCBAdyAqIDAuMjVcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRmYyAwLjc1XG5cdFx0XHRcdFx0XHRyZWN0IHgsIHksIEB3LCBAd1xuXHRcdFx0XHRcdFx0bmMgPSBAbmVpZ2hib3JDb3VudCBpLGpcblx0XHRcdFx0XHRcdHNjKClcblx0XHRcdFx0XHRcdGZpbGwgY2MgbmNcblx0XHRcdFx0XHRcdGlmIG5jID4gMCB0aGVuIHRleHQgbmMsIHgrMSwgeSsxXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0XHRpZiBAc3RhdGU9PTEgdGhlbiBAbmV3R2FtZSBAYm9tYnMubGVuZ3RoXG5cdFx0ZWxzZVxuXHRcdFx0aSA9IGludCBteC9Ad1xuXHRcdFx0aiA9IGludCBteS9Ad1xuXHRcdFx0aW5kZXggPSBAbipqK2lcblx0XHRcdGlmIGluZGV4IGluIEBib21icyB0aGVuXHRAc3RhdGUgPSAxIGVsc2VcdEByZXZlYWwgaSxqXG5cdHJhbmRpbnQgOiAobikgLT4gaW50IG4gKiBmcmFjdGlvbiAxMDAwMCAqIE1hdGguc2luIEBzZWVkKytcblx0cmV2ZWFsIDogKGksaikgLT5cblx0XHRAcmV2ZWFsZWQucHVzaCBAbipqK2lcblx0XHRpZiBAbmVpZ2hib3JDb3VudChpLGopID09IDAgdGhlbiBAZmxvb2RGaWxsIGksalxuXHRmbG9vZEZpbGwgOiAoaTAsajApIC0+XG5cdFx0Zm9yIGRpIGluIFstMSwwLDFdXG5cdFx0XHRmb3IgZGogaW4gWy0xLDAsMV1cblx0XHRcdFx0aSA9IGkwICsgZGlcblx0XHRcdFx0aiA9IGowICsgZGpcblx0XHRcdFx0aWYgLTEgPCBpIDwgQG4gYW5kIC0xIDwgaiA8IEBuXG5cdFx0XHRcdFx0aW5kZXggPSBAbipqK2lcblx0XHRcdFx0XHRpZiBub3QgKGluZGV4IGluIEBib21icyBvciBpbmRleCBpbiBAcmV2ZWFsZWQpIHRoZW4gQHJldmVhbCBpLGpcblxuYXBwID0gbmV3IE1pbmVTd2VlcGVyIFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0IDIwLDEwfHJlc2V0IDIwLDIwfHJlc2V0IDIwLDMwfHJlc2V0IDEwLDQwXCJcblx0ZTpcblx0XHRDb2RpbmdUcmFpbiA6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1MRlU1WmxyUjIxRVwiXG5cdFx0V2lraXBlZGlhIDogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NaW5lc3dlZXBlcl8odmlkZW9fZ2FtZSlcIlxuXG5JRF9Nb2lyZSA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2JnIHJhbmdlIG9wZXJhdG9ycyBmb3IgbGluZSBtYXAgY2xhc3MnXG5cdGw6MTFcblx0YjpcIlwiXCJcbmNsYXNzIE1vaXJlIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgIDogLT5cblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuYXBwID0gbmV3IE1vaXJlXG5cdFx0XHRcIlwiXCJcblx0YTogXCJcIlwiXG5jbGFzcyBNb2lyZSBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdFtAeCxAeV0gPSBbMTAwLDEwMF1cblx0ZHJhdyA6IC0+XG5cdFx0YmcgMFxuXHRcdGZvciBpIGluIHJhbmdlIDQwXG5cdFx0XHRmb3IgaiBpbiByYW5nZSA0XG5cdFx0XHRcdFt4LHldID0gWzAsaSo1LDIwMCwyMDAtaSo1LDBdW2ouLmorMV1cblx0XHRcdFx0bGluZSBAeCxAeSx4LHlcblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPiBbQHgsQHldID0gW214LG15XVxuXG5hcHAgPSBuZXcgTW9pcmUgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKVwiXG5cdGU6XG5cdFx0V2lraXBlZGlhIDogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Nb2lyJUMzJUE5X3BhdHRlcm5cIlxuXG5JRF9NdWx0aVRpbWVyID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgc2MgZmMgZm9yIFtdIG9wZXJhdG9ycyB0ZXh0IG5mIGlmIGludCByb3VuZCBtaWxsaXMgY2xhc3MnXG5cdGw6MzBcblx0YjpcIlwiXCJcbiMgT0JTISBUaWRlcm5hIGthbiBza2lsamEgbWVkIGZsZXJhIG1pbGxpc2VrdW5kZXIuIFNvcnJ5IVxuXG5jbGFzcyBNdWx0aVRpbWVyIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgIDogLT5cblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuYXBwID0gbmV3IE11bHRpVGltZXJcblwiXCJcIlxuXHRhOlwiXCJcIlxuY2xhc3MgTXVsdGlUaW1lciBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBzdGFydCA9IGludCBtaWxsaXMoKVxuXHRcdEBidXR0b25zID0gW1swLDAsXCJBXCIsMF0sWzEwMCwwLFwiQlwiLDBdLFswLDUwLFwiQ1wiLDBdLFsxMDAsNTAsXCJEXCIsMF0sWzAsMTAwLFwiRVwiLDBdLFsxMDAsMTAwLFwiRlwiLDBdLFswLDE1MCxcIkdcIiwwXSxbMTAwLDE1MCxcIkhcIiwwXV1cblx0XHRAYWN0aXZlID0gLTFcblx0ZHJhdyA6IC0+XG5cdFx0YmcgMFxuXHRcdHRleHRGb250IFwibW9ub3NwYWNlXCJcblx0XHR0ZXh0U2l6ZSAyNFxuXHRcdHNjKClcblx0XHRmb3IgW3gseSx0eHQsdGltZV0saSBpbiBAYnV0dG9uc1xuXHRcdFx0aWYgQGFjdGl2ZT09aSB0aGVuIGZjIDEsMCwwIGVsc2UgZmMgMSwxLDBcblx0XHRcdHRleHRBbGlnbiBMRUZULFRPUFxuXHRcdFx0dGV4dCB0eHQsIHgrMTAseVxuXHRcdFx0dGV4dEFsaWduIFJJR0hULFRPUFxuXHRcdFx0c2VjcyA9IHJvdW5kIHRpbWUvMTAwMFxuXHRcdFx0dGV4dCBuZihpbnQoc2VjcyAvIDYwKSwyKSArICc6JyArIG5mKHNlY3MgJSA2MCwyKSwgeCsxMDAseVxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5cdFx0Zm9yIFt4LHksdHh0LHRpbWVdLGkgaW4gQGJ1dHRvbnNcblx0XHRcdGlmIHggPD0gbXggPD0geCsxMDAgYW5kIHkgPD0gbXkgPD0geSs1MCB0aGVuIGFjdGl2ZSA9IGlcblx0XHRpZiBhY3RpdmUgPT0gQGFjdGl2ZVxuXHRcdFx0QGJ1dHRvbnNbQGFjdGl2ZV1bM10gKz0gaW50IG1pbGxpcygpIC0gQHN0YXJ0XG5cdFx0XHRAYWN0aXZlID0gLTFcblx0XHRlbHNlIGlmIEBhY3RpdmUgPT0gLTFcblx0XHRcdEBhY3RpdmUgPSBhY3RpdmVcblx0XHRlbHNlICMgYnl0ZVxuXHRcdFx0QGJ1dHRvbnNbQGFjdGl2ZV1bM10gKz0gaW50IG1pbGxpcygpIC0gQHN0YXJ0XG5cdFx0XHRAYWN0aXZlID0gYWN0aXZlXG5cdFx0QHN0YXJ0ID0gaW50IG1pbGxpcygpXG5cbmFwcCA9IG5ldyBNdWx0aVRpbWVyIFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHA6IFwicmVzZXQoKVwiXG5cbklEX015QXZlcmFnZSA9XG5cdHY6JzIwMTctMDktMTYnXG5cdGs6Jy0+IGJnIGZjIHNjIGlmIHRleHQgb3BlcmF0b3JzJ1xuXHRsOjVcblx0YiA6IFwiXCJcIlxuYXZlcmFnZSA9IChhLGIpIC0+IDBcblxuIyDDhG5kcmEgaW5nZW50aW5nIG5lZGFuZsO2ciBkZW5uYSByYWQhXG5iZyAwXG55ID0gMTlcbnRlc3QgPSAoYSxiKSAtPlxuXHRzYygpXG5cdHRleHRTaXplIDIwXG5cdGZjIDAsMSwwXG5cdHRleHQgYSwgMCx5XG5cdGlmIGE9PWIgdGhlbiBmYyAwLDEsMCBlbHNlIGZjIDEsMCwwXG5cdHRleHQgYiwgMTAwLHlcblx0eSs9MjBcblxudGVzdCA1LCAgYXZlcmFnZSAwLDEwXG50ZXN0IDIwLCBhdmVyYWdlIDEwLDMwXG50ZXN0IDEwLCBhdmVyYWdlIC0xMCwzMFxuXCJcIlwiXG5cblx0YSA6IFwiXCJcIlxuYXZlcmFnZSA9IChhLGIpIC0+IChhK2IpLzJcblxuIyDDhG5kcmEgaW5nZW50aW5nIG5lZGFuZsO2ciBkZW5uYSByYWQhXG5iZyAwXG55ID0gMTlcbnRlc3QgPSAoYSxiKSAtPlxuXHRzYygpXG5cdHRleHRTaXplIDIwXG5cdGZjIDAsMSwwXG5cdHRleHQgYSwgMCx5XG5cdGlmIGE9PWIgdGhlbiBmYyAwLDEsMCBlbHNlIGZjIDEsMCwwXG5cdHRleHQgYiwgMTAwLHlcblx0eSs9MjBcblxudGVzdCA1LCAgYXZlcmFnZSAwLDEwXG50ZXN0IDIwLCBhdmVyYWdlIDEwLDMwXG50ZXN0IDEwLCBhdmVyYWdlIC0xMCwzMFxuXCJcIlwiXG5cbklEX015TGVycCA9XG5cdHY6JzIwMTctMDUtMTgnXG5cdGs6Jy0+IGJnIGZjIHNjIGlmIHRleHQgbGVycCBvcGVyYXRvcnMnXG5cdGw6MVxuXHRiIDogXCJcIlwiXG5sZXJwID0gKGEsYixpKSAtPiAwXG5cbiMgw4RuZHJhIGluZ2VudGluZyBuZWRhbmbDtnIgZGVubmEgcmFkIVxuYmcgMFxueSA9IDE5XG50ZXN0ID0gKGEsYikgLT5cblx0c2MoKVxuXHR0ZXh0U2l6ZSAyMFxuXHRmYyAwLDEsMFxuXHR0ZXh0IGEsIDAseVxuXHRpZiBhPT1iIHRoZW4gZmMgMCwxLDAgZWxzZSBmYyAxLDAsMFxuXHR0ZXh0IGIsIDEwMCx5XG5cdHkrPTIwXG5cbnRlc3QgMTAsIGxlcnAgMTAsMjAsMFxudGVzdCAyMCwgbGVycCAxMCwyMCwxXG50ZXN0IDMwLCBsZXJwIDEwLDIwLDJcbnRlc3QgMCwgIGxlcnAgMTAsMjAsLTFcbnRlc3QgMTUsIGxlcnAgMTAsMjAsMC41XG50ZXN0IDExLCBsZXJwIDEsMiwxMFxudGVzdCAyMSwgbGVycCAxLDMsMTBcbnRlc3QgLTEsIGxlcnAgMSwwLDJcbnRlc3QgMiwgIGxlcnAgMTAsOSw4XG50ZXN0IDAuNCxsZXJwIDAuMSwwLjIsM1xuXCJcIlwiXG5cblx0YSA6IFwiXCJcIlxubGVycCA9IChhLGIsaSkgLT4gYSsoYi1hKSppXG5cbiMgw4RuZHJhIGluZ2VudGluZyBuZWRhbmbDtnIgZGVubmEgcmFkIVxuYmcgMFxueSA9IDE5XG50ZXN0ID0gKGEsYikgLT5cblx0c2MoKVxuXHR0ZXh0U2l6ZSAyMFxuXHRmYyAwLDEsMFxuXHR0ZXh0IGEsIDAseVxuXHRpZiBhPT1iIHRoZW4gZmMgMCwxLDAgZWxzZSBmYyAxLDAsMFxuXHR0ZXh0IGIsIDEwMCx5XG5cdHkrPTIwXG5cbnRlc3QgMTAsIGxlcnAgMTAsMjAsMFxudGVzdCAyMCwgbGVycCAxMCwyMCwxXG50ZXN0IDMwLCBsZXJwIDEwLDIwLDJcbnRlc3QgMCwgIGxlcnAgMTAsMjAsLTFcbnRlc3QgMTUsIGxlcnAgMTAsMjAsMC41XG50ZXN0IDExLCBsZXJwIDEsMiwxMFxudGVzdCAyMSwgbGVycCAxLDMsMTBcbnRlc3QgLTEsIGxlcnAgMSwwLDJcbnRlc3QgMiwgIGxlcnAgMTAsOSw4XG50ZXN0IDAuNCxsZXJwIDAuMSwwLjIsM1xuXCJcIlwiXG5cbklEX015TWFwID1cblx0djonMjAxNy0wNS0xOCdcblx0azonLT4gYmcgZmMgc2MgaWYgdGV4dCBtYXAgb3BlcmF0b3JzJ1xuXHRsOjFcblx0YiA6IFwiXCJcIlxubWFwID0gKHgseDAseDEseTAseTEpIC0+IDBcblxuIyDDhG5kcmEgaW5nZW50aW5nIG5lZGFuZsO2ciBkZW5uYSByYWQhXG5iZyAwXG55ID0gMTlcbnRlc3QgPSAoYSxiKSAtPlxuXHRzYygpXG5cdHRleHRTaXplIDIwXG5cdGZjIDAsMSwwXG5cdHRleHQgYSwgMCx5XG5cdGlmIGE9PWIgdGhlbiBmYyAwLDEsMCBlbHNlIGZjIDEsMCwwXG5cdHRleHQgYiwgMTAwLHlcblx0eSs9MjBcblxudGVzdCA1MCwgIG1hcCAxMCwxMCwyMCw1MCwxNTBcbnRlc3QgMTAwLCBtYXAgMTUsMTAsMjAsNTAsMTUwXG50ZXN0IDE1MCwgbWFwIDIwLDEwLDIwLDUwLDE1MFxudGVzdCAyNTAsIG1hcCAzMCwxMCwyMCw1MCwxNTBcbnRlc3QgLTUwLCBtYXAgMCwxMCwyMCw1MCwxNTBcbnRlc3QgNSwgICBtYXAgMTAsMTAsMjAsNSwxNVxudGVzdCAxMCwgIG1hcCAxNSwxMCwyMCw1LDE1XG50ZXN0IDE1LCAgbWFwIDIwLDEwLDIwLDUsMTVcbnRlc3QgMjUsICBtYXAgMzAsMTAsMjAsNSwxNVxudGVzdCAtNSwgIG1hcCAwLDEwLDIwLDUsMTVcblxuXCJcIlwiXG5cblx0YSA6IFwiXCJcIlxubWFwID0gKHgseDAseDEseTAseTEpIC0+IHkwICsgKHgteDApKih5MS15MCkvKHgxLXgwKVxuXG4jIMOEbmRyYSBpbmdlbnRpbmcgbmVkYW5mw7ZyIGRlbm5hIHJhZCFcbmJnIDBcbnkgPSAxOVxudGVzdCA9IChhLGIpIC0+XG5cdHNjKClcblx0dGV4dFNpemUgMjBcblx0ZmMgMCwxLDBcblx0dGV4dCBhLCAwLHlcblx0aWYgYT09YiB0aGVuIGZjIDAsMSwwIGVsc2UgZmMgMSwwLDBcblx0dGV4dCBiLCAxMDAseVxuXHR5Kz0yMFxuXG50ZXN0IDUwLCAgbWFwIDEwLDEwLDIwLDUwLDE1MFxudGVzdCAxMDAsIG1hcCAxNSwxMCwyMCw1MCwxNTBcbnRlc3QgMTUwLCBtYXAgMjAsMTAsMjAsNTAsMTUwXG50ZXN0IDI1MCwgbWFwIDMwLDEwLDIwLDUwLDE1MFxudGVzdCAtNTAsIG1hcCAwLDEwLDIwLDUwLDE1MFxudGVzdCA1LCAgIG1hcCAxMCwxMCwyMCw1LDE1XG50ZXN0IDEwLCAgbWFwIDE1LDEwLDIwLDUsMTVcbnRlc3QgMTUsICBtYXAgMjAsMTAsMjAsNSwxNVxudGVzdCAyNSwgIG1hcCAzMCwxMCwyMCw1LDE1XG50ZXN0IC01LCAgbWFwIDAsMTAsMjAsNSwxNVxuXCJcIlwiXG4iXX0=
//# sourceURL=C:\github\p5Dojo\coffee\data\M.coffee