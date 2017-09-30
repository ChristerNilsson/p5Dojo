// Generated by CoffeeScript 1.11.1
var ID_P5, ID_PacMan, ID_Paint, ID_PentaLerp, ID_PickingBerries, ID_Polygon;

ID_P5 = {
  v: '2017-05-20',
  k: '-> text fc sc',
  l: 5,
  b: "skriv = (txt,x,y,r,g,b,size) ->\n	# Skriv din kod här!\n\n# Ändra ingenting nedanför denna rad!\n\nskriv \"p5\",      100,100,1,0,0,180\nskriv \"Lauren\",  155, 43,0,0,0, 18\nskriv \"McCarthy\",155,180,1,1,1, 18\nskriv \"Coding\",   50, 20,1,1,0, 24\nskriv \"Train\",    50, 48,0,1,0, 30",
  a: "skriv = (txt,x,y,r,g,b,size) ->\n	textAlign CENTER,CENTER\n	textSize size\n	fc r,g,b\n	sc()\n	text txt,x,y\n\nskriv \"p5\",      100,100,1,0,0,180\nskriv \"Lauren\",  155, 43,0,0,0, 18\nskriv \"McCarthy\",155,180,1,1,1, 18\nskriv \"Coding\",   50, 20,1,1,0, 24\nskriv \"Train\",    50, 48,0,1,0, 30"
};

ID_PacMan = {
  v: '2017-04-29',
  k: 'fc arc angleMode',
  l: 2,
  b: "",
  a: "fc 1,1,0\nangleMode DEGREES\narc 100,100, 180,180, -135,135",
  e: {
    Play: "https://www.google.se/#q=pacman&clb=clb",
    Wikipedia: "https://en.wikipedia.org/wiki/Pac-Man"
  }
};

ID_Paint = {
  v: '2017-05-15',
  k: 'bg sc range rect circle for class []',
  l: 36,
  b: "# colors from cc and cct\nclass Paint extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\n	undo : ->\napp = new Paint",
  a: "class Paint extends Application\n	reset : ->\n		super\n		@picture = (Array(20).fill(0) for i in range 18)\n		@selected = 3\n		@history = []\n		@state = 0\n	draw : ->\n		sc()\n		for i in range 32\n			index = i+@state*32\n			fill cc index\n			x = i % 16 * 10\n			y = 10 * int i/16\n			rect x,y,10,10\n			if index == @selected\n				fill cct @selected\n				circle x+5,y+5,3\n		for i in range 20\n			for j in range 18\n				fill cc @picture[j][i]\n				rect 10*i,20+10*j,10,10\n	mousePressed : (mx,my) ->\n		i = int mx/10\n		j = int my/10\n		if j<=1\n			if i <= 15 then @selected = 32*@state + 16*j + i\n			else return @state = 1-@state\n		else\n			j -= 2\n			@history.push [j,i,@picture[j][i]]\n			@picture[j][i] = @selected\n	undo : ->\n		if @history.length==0 then return\n		[a,b,c] = @history.pop()\n		@picture[a][b] = c\n\napp = new Paint \"a\"",
  c: {
    app: "reset()|undo()"
  }
};

ID_PentaLerp = {
  v: '2017-09-11',
  k: 'bg sc fc range circle for lerp',
  l: 11,
  b: "",
  a: "bg 0.5\nsc()\nfor i in range 11\n	for j in range 11\n		r = 0.1*i\n		g = 0.1*j\n		fc r,g,0\n		x = 20*i\n		y = 20*j\n		radius = lerp 0,1,(i+j)/2\n		circle x,y,radius"
};

ID_PickingBerries = {
  v: '2017-04-29',
  k: 'bg sc fc sw [] operators line text constrain dist break for class',
  l: 46,
  b: "class PickingBerries extends Application\n	reset      : ->\n		super\n	draw       : ->\n	left       : ->\n	right      : ->\n	up         : ->\n	down       : ->\n	snailSpeed : ->\n	slowSpeed  : ->\n	highSpeed  : ->\n	warpSpeed  : ->\n	pick       : ->\napp = new PickingBerries",
  a: "class PickingBerries extends Application\n\n	reset : ->\n		super\n		@SPEEDS = [1,5,20,50]\n		@x = 100\n		@y = 100\n		@speed = 2 # 0..3\n		@clicks = 0\n		@xs = [100,189,124,196,13,187,12,153,32,131]\n		@ys = [107,175,138,188,37,78,168,31,20,188]\n		@moves = \"\"\n		@dxdy = [[1,0],[0,1],[-1,0],[0,-1]]\n\n	draw : ->\n		bg 0\n		rectMode CENTER\n		sc 1\n		sw 1\n		rect @x,@y,2*@SPEEDS[@speed],2*@SPEEDS[@speed]\n		for [dx,dy] in @dxdy\n			for i in range 4\n				point @x+dx*@SPEEDS[i], @y+dy*@SPEEDS[i]\n\n		fc 1,1,0\n		sc()\n		textSize 20\n		textAlign CENTER,CENTER\n		text @clicks,100,180\n\n		sc 1,0,0\n		sw 2\n		for [x,y] in _.zip @xs,@ys\n			line x-3,y-3,x+3,y+3\n			line x+3,y-3,x-3,y+3\n\n	move : (i) ->\n		[dx,dy] = @dxdy[i]\n		@x += dx * @SPEEDS[@speed]\n		@y += dy * @SPEEDS[@speed]\n		@clicks++\n		@moves += 'abcd'[i]\n\n	setSpeed : (index) ->\n		@speed = index\n		@moves += index\n\n	right   : -> @move 0\n	down    : -> @move 1\n	left    : -> @move 2\n	up      : -> @move 3\n\n	snailSpeed : -> @setSpeed 0\n	slowSpeed  : -> @setSpeed 1\n	highSpeed  : -> @setSpeed 2\n	warpSpeed  : -> @setSpeed 3\n\n	step : (d) ->\n		@clicks++\n		constrain @zoom+d,0,3\n	pick : ->\n		for [x,y],i in _.zip @xs,@ys\n			if dist(x,y,@x,@y) <= 2\n				@xs.splice i,1\n				@ys.splice i,1\n				break\n		@clicks++\n\napp = new PickingBerries \"a\"",
  c: {
    app: "reset()|left()|right()|up()|down()|snailSpeed()|slowSpeed()|highSpeed()|warpSpeed()|pick()"
  }
};

ID_Polygon = {
  v: '2017-09-30',
  k: 'bg sc range line for cos sin angleMode class',
  l: 23,
  b: "class Turtle\n	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->\n	fd : (d) ->\n	rt : (a) ->\n\nclass Polygon extends Application\n	reset      : ->\n		super\n	draw       : ->\n	antalSidor : (d) ->\n	antalSteg  : (d) ->\napp = new Polygon",
  a: "class Turtle\n	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->\n	fd : (d) ->\n		dx = d*cos @dir\n		dy = d*sin @dir\n		sc @r,@g,@b\n		line @x,@y,@x+dx,@y+dy\n		@x += dx\n		@y += dy\n	rt : (a) ->\n		@dir +=a\n\nclass Polygon extends Application\n	reset : ->\n		super\n		@n = 6\n		@steg = 60\n\n	draw : ->\n		t = new Turtle()\n		bg 0\n		angleMode DEGREES\n		for i in range @n\n			t.fd @steg\n			t.rt 360/@n\n\n	antalSidor : (d) -> @n += d\n	antalSteg : (d) -> @steg += d\n\napp = new Polygon \"a\"",
  c: {
    app: "reset()|antalSidor -1|antalSidor +1|antalSteg -1|antalSteg +1|"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcUC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsS0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsZUFERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLGlTQUhGO0VBZUEsQ0FBQSxFQUFFLDRTQWZGOzs7QUE4QkQsU0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsa0JBREY7RUFFQSxDQUFBLEVBQUUsQ0FGRjtFQUdBLENBQUEsRUFBRSxFQUhGO0VBSUEsQ0FBQSxFQUFFLDZEQUpGO0VBU0EsQ0FBQSxFQUNDO0lBQUEsSUFBQSxFQUFPLHlDQUFQO0lBQ0EsU0FBQSxFQUFZLHVDQURaO0dBVkQ7OztBQWFELFFBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLHNDQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsc0pBSEY7RUFhQSxDQUFBLEVBQUUsNDBCQWJGO0VBcURBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSxnQkFBTjtHQXRERDs7O0FBd0RELFlBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLGdDQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsRUFIRjtFQUlBLENBQUEsRUFBRSxxS0FKRjs7O0FBa0JELGlCQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxtRUFERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLG1SQUhGO0VBbUJBLENBQUEsRUFBRSxtekNBbkJGO0VBMEZBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSw0RkFBTjtHQTNGRDs7O0FBNkZELFVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDhDQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsb1BBSEY7RUFpQkEsQ0FBQSxFQUFFLHVmQWpCRjtFQWlEQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0sZ0VBQU47R0FsREQiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9QNSA9XG5cdHY6JzIwMTctMDUtMjAnXG5cdGs6Jy0+IHRleHQgZmMgc2MnXG5cdGw6NVxuXHRiOlwiXCJcIlxuc2tyaXYgPSAodHh0LHgseSxyLGcsYixzaXplKSAtPlxuXHQjIFNrcml2IGRpbiBrb2QgaMOkciFcblxuIyDDhG5kcmEgaW5nZW50aW5nIG5lZGFuZsO2ciBkZW5uYSByYWQhXG5cbnNrcml2IFwicDVcIiwgICAgICAxMDAsMTAwLDEsMCwwLDE4MFxuc2tyaXYgXCJMYXVyZW5cIiwgIDE1NSwgNDMsMCwwLDAsIDE4XG5za3JpdiBcIk1jQ2FydGh5XCIsMTU1LDE4MCwxLDEsMSwgMThcbnNrcml2IFwiQ29kaW5nXCIsICAgNTAsIDIwLDEsMSwwLCAyNFxuc2tyaXYgXCJUcmFpblwiLCAgICA1MCwgNDgsMCwxLDAsIDMwXG5cIlwiXCJcblx0YTpcIlwiXCJcbnNrcml2ID0gKHR4dCx4LHkscixnLGIsc2l6ZSkgLT5cblx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcblx0dGV4dFNpemUgc2l6ZVxuXHRmYyByLGcsYlxuXHRzYygpXG5cdHRleHQgdHh0LHgseVxuXG5za3JpdiBcInA1XCIsICAgICAgMTAwLDEwMCwxLDAsMCwxODBcbnNrcml2IFwiTGF1cmVuXCIsICAxNTUsIDQzLDAsMCwwLCAxOFxuc2tyaXYgXCJNY0NhcnRoeVwiLDE1NSwxODAsMSwxLDEsIDE4XG5za3JpdiBcIkNvZGluZ1wiLCAgIDUwLCAyMCwxLDEsMCwgMjRcbnNrcml2IFwiVHJhaW5cIiwgICAgNTAsIDQ4LDAsMSwwLCAzMFxuXCJcIlwiXG5cbklEX1BhY01hbiA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2ZjIGFyYyBhbmdsZU1vZGUnXG5cdGw6MlxuXHRiOlwiXCJcblx0YTpcIlwiXCJcbmZjIDEsMSwwXG5hbmdsZU1vZGUgREVHUkVFU1xuYXJjIDEwMCwxMDAsIDE4MCwxODAsIC0xMzUsMTM1XG5cIlwiXCJcblx0ZSA6XG5cdFx0UGxheSA6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNlLyNxPXBhY21hbiZjbGI9Y2xiXCJcblx0XHRXaWtpcGVkaWEgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BhYy1NYW5cIlxuXG5JRF9QYWludCA9XG5cdHY6JzIwMTctMDUtMTUnXG5cdGs6J2JnIHNjIHJhbmdlIHJlY3QgY2lyY2xlIGZvciBjbGFzcyBbXSdcblx0bDozNlxuXHRiOlwiXCJcIlxuIyBjb2xvcnMgZnJvbSBjYyBhbmQgY2N0XG5jbGFzcyBQYWludCBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRkcmF3IDogLT5cblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuXHR1bmRvIDogLT5cbmFwcCA9IG5ldyBQYWludFxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBQYWludCBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBwaWN0dXJlID0gKEFycmF5KDIwKS5maWxsKDApIGZvciBpIGluIHJhbmdlIDE4KVxuXHRcdEBzZWxlY3RlZCA9IDNcblx0XHRAaGlzdG9yeSA9IFtdXG5cdFx0QHN0YXRlID0gMFxuXHRkcmF3IDogLT5cblx0XHRzYygpXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgMzJcblx0XHRcdGluZGV4ID0gaStAc3RhdGUqMzJcblx0XHRcdGZpbGwgY2MgaW5kZXhcblx0XHRcdHggPSBpICUgMTYgKiAxMFxuXHRcdFx0eSA9IDEwICogaW50IGkvMTZcblx0XHRcdHJlY3QgeCx5LDEwLDEwXG5cdFx0XHRpZiBpbmRleCA9PSBAc2VsZWN0ZWRcblx0XHRcdFx0ZmlsbCBjY3QgQHNlbGVjdGVkXG5cdFx0XHRcdGNpcmNsZSB4KzUseSs1LDNcblx0XHRmb3IgaSBpbiByYW5nZSAyMFxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgMThcblx0XHRcdFx0ZmlsbCBjYyBAcGljdHVyZVtqXVtpXVxuXHRcdFx0XHRyZWN0IDEwKmksMjArMTAqaiwxMCwxMFxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5cdFx0aSA9IGludCBteC8xMFxuXHRcdGogPSBpbnQgbXkvMTBcblx0XHRpZiBqPD0xXG5cdFx0XHRpZiBpIDw9IDE1IHRoZW4gQHNlbGVjdGVkID0gMzIqQHN0YXRlICsgMTYqaiArIGlcblx0XHRcdGVsc2UgcmV0dXJuIEBzdGF0ZSA9IDEtQHN0YXRlXG5cdFx0ZWxzZVxuXHRcdFx0aiAtPSAyXG5cdFx0XHRAaGlzdG9yeS5wdXNoIFtqLGksQHBpY3R1cmVbal1baV1dXG5cdFx0XHRAcGljdHVyZVtqXVtpXSA9IEBzZWxlY3RlZFxuXHR1bmRvIDogLT5cblx0XHRpZiBAaGlzdG9yeS5sZW5ndGg9PTAgdGhlbiByZXR1cm5cblx0XHRbYSxiLGNdID0gQGhpc3RvcnkucG9wKClcblx0XHRAcGljdHVyZVthXVtiXSA9IGNcblxuYXBwID0gbmV3IFBhaW50IFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8dW5kbygpXCJcblxuSURfUGVudGFMZXJwID1cblx0djonMjAxNy0wOS0xMSdcblx0azonYmcgc2MgZmMgcmFuZ2UgY2lyY2xlIGZvciBsZXJwJ1xuXHRsOjExXG5cdGI6XCJcIlxuXHRhOlwiXCJcIlxuYmcgMC41XG5zYygpXG5mb3IgaSBpbiByYW5nZSAxMVxuXHRmb3IgaiBpbiByYW5nZSAxMVxuXHRcdHIgPSAwLjEqaVxuXHRcdGcgPSAwLjEqalxuXHRcdGZjIHIsZywwXG5cdFx0eCA9IDIwKmlcblx0XHR5ID0gMjAqalxuXHRcdHJhZGl1cyA9IGxlcnAgMCwxLChpK2opLzJcblx0XHRjaXJjbGUgeCx5LHJhZGl1c1xuXCJcIlwiXG5cbklEX1BpY2tpbmdCZXJyaWVzID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgc2MgZmMgc3cgW10gb3BlcmF0b3JzIGxpbmUgdGV4dCBjb25zdHJhaW4gZGlzdCBicmVhayBmb3IgY2xhc3MnXG5cdGw6NDZcblx0YjpcIlwiXCJcbmNsYXNzIFBpY2tpbmdCZXJyaWVzIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgICAgICA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgICAgICA6IC0+XG5cdGxlZnQgICAgICAgOiAtPlxuXHRyaWdodCAgICAgIDogLT5cblx0dXAgICAgICAgICA6IC0+XG5cdGRvd24gICAgICAgOiAtPlxuXHRzbmFpbFNwZWVkIDogLT5cblx0c2xvd1NwZWVkICA6IC0+XG5cdGhpZ2hTcGVlZCAgOiAtPlxuXHR3YXJwU3BlZWQgIDogLT5cblx0cGljayAgICAgICA6IC0+XG5hcHAgPSBuZXcgUGlja2luZ0JlcnJpZXNcblwiXCJcIlxuXHRhOlwiXCJcIlxuY2xhc3MgUGlja2luZ0JlcnJpZXMgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBTUEVFRFMgPSBbMSw1LDIwLDUwXVxuXHRcdEB4ID0gMTAwXG5cdFx0QHkgPSAxMDBcblx0XHRAc3BlZWQgPSAyICMgMC4uM1xuXHRcdEBjbGlja3MgPSAwXG5cdFx0QHhzID0gWzEwMCwxODksMTI0LDE5NiwxMywxODcsMTIsMTUzLDMyLDEzMV1cblx0XHRAeXMgPSBbMTA3LDE3NSwxMzgsMTg4LDM3LDc4LDE2OCwzMSwyMCwxODhdXG5cdFx0QG1vdmVzID0gXCJcIlxuXHRcdEBkeGR5ID0gW1sxLDBdLFswLDFdLFstMSwwXSxbMCwtMV1dXG5cblx0ZHJhdyA6IC0+XG5cdFx0YmcgMFxuXHRcdHJlY3RNb2RlIENFTlRFUlxuXHRcdHNjIDFcblx0XHRzdyAxXG5cdFx0cmVjdCBAeCxAeSwyKkBTUEVFRFNbQHNwZWVkXSwyKkBTUEVFRFNbQHNwZWVkXVxuXHRcdGZvciBbZHgsZHldIGluIEBkeGR5XG5cdFx0XHRmb3IgaSBpbiByYW5nZSA0XG5cdFx0XHRcdHBvaW50IEB4K2R4KkBTUEVFRFNbaV0sIEB5K2R5KkBTUEVFRFNbaV1cblxuXHRcdGZjIDEsMSwwXG5cdFx0c2MoKVxuXHRcdHRleHRTaXplIDIwXG5cdFx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcblx0XHR0ZXh0IEBjbGlja3MsMTAwLDE4MFxuXG5cdFx0c2MgMSwwLDBcblx0XHRzdyAyXG5cdFx0Zm9yIFt4LHldIGluIF8uemlwIEB4cyxAeXNcblx0XHRcdGxpbmUgeC0zLHktMyx4KzMseSszXG5cdFx0XHRsaW5lIHgrMyx5LTMseC0zLHkrM1xuXG5cdG1vdmUgOiAoaSkgLT5cblx0XHRbZHgsZHldID0gQGR4ZHlbaV1cblx0XHRAeCArPSBkeCAqIEBTUEVFRFNbQHNwZWVkXVxuXHRcdEB5ICs9IGR5ICogQFNQRUVEU1tAc3BlZWRdXG5cdFx0QGNsaWNrcysrXG5cdFx0QG1vdmVzICs9ICdhYmNkJ1tpXVxuXG5cdHNldFNwZWVkIDogKGluZGV4KSAtPlxuXHRcdEBzcGVlZCA9IGluZGV4XG5cdFx0QG1vdmVzICs9IGluZGV4XG5cblx0cmlnaHQgICA6IC0+IEBtb3ZlIDBcblx0ZG93biAgICA6IC0+IEBtb3ZlIDFcblx0bGVmdCAgICA6IC0+IEBtb3ZlIDJcblx0dXAgICAgICA6IC0+IEBtb3ZlIDNcblxuXHRzbmFpbFNwZWVkIDogLT4gQHNldFNwZWVkIDBcblx0c2xvd1NwZWVkICA6IC0+IEBzZXRTcGVlZCAxXG5cdGhpZ2hTcGVlZCAgOiAtPiBAc2V0U3BlZWQgMlxuXHR3YXJwU3BlZWQgIDogLT4gQHNldFNwZWVkIDNcblxuXHRzdGVwIDogKGQpIC0+XG5cdFx0QGNsaWNrcysrXG5cdFx0Y29uc3RyYWluIEB6b29tK2QsMCwzXG5cdHBpY2sgOiAtPlxuXHRcdGZvciBbeCx5XSxpIGluIF8uemlwIEB4cyxAeXNcblx0XHRcdGlmIGRpc3QoeCx5LEB4LEB5KSA8PSAyXG5cdFx0XHRcdEB4cy5zcGxpY2UgaSwxXG5cdFx0XHRcdEB5cy5zcGxpY2UgaSwxXG5cdFx0XHRcdGJyZWFrXG5cdFx0QGNsaWNrcysrXG5cbmFwcCA9IG5ldyBQaWNraW5nQmVycmllcyBcImFcIlxuXHRcdFx0XCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpfGxlZnQoKXxyaWdodCgpfHVwKCl8ZG93bigpfHNuYWlsU3BlZWQoKXxzbG93U3BlZWQoKXxoaWdoU3BlZWQoKXx3YXJwU3BlZWQoKXxwaWNrKClcIlxuXG5JRF9Qb2x5Z29uID1cblx0djonMjAxNy0wOS0zMCdcblx0azonYmcgc2MgcmFuZ2UgbGluZSBmb3IgY29zIHNpbiBhbmdsZU1vZGUgY2xhc3MnXG5cdGw6MjNcblx0YjpcIlwiXCJcbmNsYXNzIFR1cnRsZVxuXHRjb25zdHJ1Y3RvciA6IChAcj0xLEBnPTAsQGI9MCwgQHg9MTAwLEB5PTEwLEBkaXI9MCkgLT5cblx0ZmQgOiAoZCkgLT5cblx0cnQgOiAoYSkgLT5cblxuY2xhc3MgUG9seWdvbiBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0ICAgICAgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgICAgICAgOiAtPlxuXHRhbnRhbFNpZG9yIDogKGQpIC0+XG5cdGFudGFsU3RlZyAgOiAoZCkgLT5cbmFwcCA9IG5ldyBQb2x5Z29uXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIFR1cnRsZVxuXHRjb25zdHJ1Y3RvciA6IChAcj0xLEBnPTAsQGI9MCwgQHg9MTAwLEB5PTEwLEBkaXI9MCkgLT5cblx0ZmQgOiAoZCkgLT5cblx0XHRkeCA9IGQqY29zIEBkaXJcblx0XHRkeSA9IGQqc2luIEBkaXJcblx0XHRzYyBAcixAZyxAYlxuXHRcdGxpbmUgQHgsQHksQHgrZHgsQHkrZHlcblx0XHRAeCArPSBkeFxuXHRcdEB5ICs9IGR5XG5cdHJ0IDogKGEpIC0+XG5cdFx0QGRpciArPWFcblxuY2xhc3MgUG9seWdvbiBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBuID0gNlxuXHRcdEBzdGVnID0gNjBcblxuXHRkcmF3IDogLT5cblx0XHR0ID0gbmV3IFR1cnRsZSgpXG5cdFx0YmcgMFxuXHRcdGFuZ2xlTW9kZSBERUdSRUVTXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgQG5cblx0XHRcdHQuZmQgQHN0ZWdcblx0XHRcdHQucnQgMzYwL0BuXG5cblx0YW50YWxTaWRvciA6IChkKSAtPiBAbiArPSBkXG5cdGFudGFsU3RlZyA6IChkKSAtPiBAc3RlZyArPSBkXG5cbmFwcCA9IG5ldyBQb2x5Z29uIFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8YW50YWxTaWRvciAtMXxhbnRhbFNpZG9yICsxfGFudGFsU3RlZyAtMXxhbnRhbFN0ZWcgKzF8XCJcblxuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\P.coffee