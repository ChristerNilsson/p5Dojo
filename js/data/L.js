// Generated by CoffeeScript 2.4.1
var ID_Laboratorium, ID_Lerp, ID_LinearRegression, ID_lerp, ID_line, ID_lines;

ID_Laboratorium = {
  v: '2017-04-29',
  k: '',
  l: 0,
  h: 1,
  b: "# Här kan du laborera med egna idéer!\n\nclass Laboratorium extends Application\n	reset : ->\n		super\n		@x = 100\n		@y = 100\n		@command = \"Ge ett kommando!\"\n	draw  : ->\n		textAlign CENTER,CENTER\n		textSize 24\n		fc 1,1,0\n		sc()\n		text @command,@x,@y\n	mousePressed : (mx,my) ->\n	left  : -> @x -= 10\n	right : -> @x += 10\n	up    : -> @y -= 10\n	down  : -> @y += 10\n	a     : -> @command = \"a\"\n	b     : -> @command = \"b\"\n	c     : -> @command = \"c\"\n	d     : -> @command = \"d\"\n	e     : -> @command = int random 1,7\n	f     : -> @command = int millis()\napp = new Laboratorium",
  a: "class Laboratorium extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\n	left : ->\n	right : ->\n	up : ->\n	down : ->\n	a : ->\n	b : ->\n	c : ->\n	d : ->\n	e : ->\n	f : ->\n\napp = new Laboratorium \"a\"",
  c: {
    app: "reset()|left()|right()|up()|down()|a()|b()|c()|d()|e()|f()"
  }
};

ID_lerp = {
  v: '2018-04-26',
  k: 'lerp sw point for range',
  l: 15,
  h: 0,
  b: "# lerp a,b,i\n\nsw 10\npoint 10,90 # Från vänster till höger\npoint 30,90\n#     x     lerp \n\nfor i in range 10\n	x = lerp 10,30,i # 10,30,50,70...\n	y = 90\n	point x,y\n	\nsw 5\nsc 1,0,0\npoint 110,190 # Nerifrån och upp\npoint 110,170\n#         y   lerp \n\nfor i in range 10\n	x = 110\n	y = lerp 190,170,i # 190,170,150,130...\n	point x,y",
  a: "# lerp a,b,i\n\nsw 10\npoint 10,90 # Från vänster till höger\npoint 30,90\n#     x     lerp \n\nfor i in range 10\n	x = lerp 10,30,i # 10,30,50,70...\n	y = 90\n	point x,y\n	\nsw 5\nsc 1,0,0\npoint 110,190 # Nerifrån och upp\npoint 110,170\n#         y   lerp \n\nfor i in range 10\n	x = 110\n	y = lerp 190,170,i # 190,170,150,130...\n	point x,y"
};

ID_Lerp = {
  v: '2017-05-18',
  k: '-> bg fc sc if text lerp operators',
  l: 1,
  h: 2,
  b: "lerp = (a,b,i) -> 0\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 10, lerp 10,20,0\ntest 20, lerp 10,20,1\ntest 30, lerp 10,20,2\ntest 0,  lerp 10,20,-1\ntest 15, lerp 10,20,0.5\ntest 11, lerp 1,2,10\ntest 21, lerp 1,3,10\ntest -1, lerp 1,0,2\ntest 2,  lerp 10,9,8\ntest 0.4,lerp 0.1,0.2,3",
  e: {
    Matteboken: "https://www.matteboken.se/lektioner/matte-1/funktioner/linjara-funktioner"
  },
  a: "lerp = (a,b,i) -> a+(b-a)*i\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 10, lerp 10,20,0\ntest 20, lerp 10,20,1\ntest 30, lerp 10,20,2\ntest 0,  lerp 10,20,-1\ntest 15, lerp 10,20,0.5\ntest 11, lerp 1,2,10\ntest 21, lerp 1,3,10\ntest -1, lerp 1,0,2\ntest 2,  lerp 10,9,8\ntest 0.4,lerp 0.1,0.2,3"
};

ID_line = {
  v: '2018-04-27',
  k: 'line',
  l: 6,
  h: 0,
  b: "# Rita en linje mellan två punkter\n\n# Draw a line between two points\n\n# line x1,y1,x2,y2\n\nsw 2\nline 60,20,140,20 \n\nsw 4\nline 60,40,140,120 \n\nsw 6\nline 60,100,60,180 ",
  a: "sw 2\nline 60,20,140,20 \n\nsw 4\nline 60,40,140,120 \n\nsw 6\nline 60,100,60,180 "
};

ID_lines = {
  v: '2018-04-27',
  k: 'sc line sw',
  l: 5,
  h: 1,
  b: "# line x1,y1,x2,y2",
  a: "sw 10\nsc 1,1,0,0.5\nline 20,20,180,20\nline 40,20,180,40\nline 60,20,180,60"
};

// ID_line_2 =
// 	v:'2017-04-29'
// 	k:'sc sw line'
// 	l:3
// 	h:1
// 	b: ""
// 	a: """
// sc 1,1,0
// sw 10
// line 110,30, 110,170
// """

// ID_line_3 =
// 	v:'2017-04-29'
// 	k:'sc line'
// 	l:2
// 	h:1
// 	b: ""
// 	a: """
// sc 1,1,0
// line 20,0, 200,20
// """
ID_LinearRegression = {
  v: '2017-11-02',
  k: 'class line [] for in',
  l: 34,
  h: 3,
  b: "class LinearRegression extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\n	pop : ->\napp = new LinearRegression",
  a: "class LinearRegression extends Application\n	reset : ->\n		super\n		@points = [] # [[20,100],[40,80],[60,140],[80,180],[100,140],[120,180],[140,200]]\n		@k=0\n		@m=0\n		@n=0\n		@r=0\n\n	draw : ->\n		sw 3\n		@n = @points.length\n		for [x,y] in @points\n			point x,y\n		if @n<2 then return \n		@linReg()\n		x1 = 0\n		x2 = 200\n		y1 = @k*x1+@m\n		y2 = @k*x2+@m\n		sw 1\n		line x1,y1,x2,y2\n\n	mousePressed : (mx,my) -> @points.push [mx,my]\n	pop : -> @points.pop() if @points.length > 0 \n\n	linReg : ->\n		@sxy=@sx=@sy=@sxx=@syy=0\n		for [x,y] in @points\n			@sxy += x*y\n			@sx  += x\n			@sy  += y\n			@sxx += x*x\n			@syy += y*y\n		@k = (@n*@sxy - @sx*@sy) / (@n*@sxx - @sx*@sx)\n		@m = @sy/@n - @k*@sx/@n\n		@r = (@n * @sxy - @sx * @sy) / Math.sqrt((@n*@sxx - @sx**2) * (@n*@syy - @sy**2))\n\napp = new LinearRegression \"a\"",
  c: {
    app: "reset()|pop()"
  },
  e: {
    k_and_m: "images/k_and_m.JPG",
    r: "images/r.PNG",
    "LinearRegression": "https://www.youtube.com/watch?v=9ytvxgxq0OQ"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcTC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsZUFBQSxFQUFBLE9BQUEsRUFBQSxtQkFBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUE7O0FBQUEsZUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsRUFERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLENBSEY7RUFJQSxDQUFBLEVBQUUsb2xCQUpGO0VBZ0NBLENBQUEsRUFBRSwyT0FoQ0Y7RUFtREEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNO0VBQU47QUFwREQ7O0FBc0RELE9BQUEsR0FDQztFQUFBLENBQUEsRUFBRyxZQUFIO0VBQ0EsQ0FBQSxFQUFHLHlCQURIO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLENBQUEsRUFBRywwVkFKSDtFQTRCQSxDQUFBLEVBQUc7QUE1Qkg7O0FBcURELE9BQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG9DQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUUsQ0FIRjtFQUlBLENBQUEsRUFBSSxpYkFKSjtFQThCQSxDQUFBLEVBQ0M7SUFBQSxVQUFBLEVBQWE7RUFBYixDQS9CRDtFQWlDQSxDQUFBLEVBQUk7QUFqQ0o7O0FBNERELE9BQUEsR0FDQztFQUFBLENBQUEsRUFBRyxZQUFIO0VBQ0EsQ0FBQSxFQUFHLE1BREg7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsQ0FBQSxFQUFHLG9MQUpIO0VBb0JBLENBQUEsRUFBRztBQXBCSDs7QUErQkQsUUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsWUFERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLENBSEY7RUFJQSxDQUFBLEVBQUcsb0JBSkg7RUFPQSxDQUFBLEVBQUc7QUFQSCxFQTNNRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaVBBLG1CQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxzQkFERjtFQUVBLENBQUEsRUFBRyxFQUZIO0VBR0EsQ0FBQSxFQUFFLENBSEY7RUFJQSxDQUFBLEVBQUcsaUpBSkg7RUFhQSxDQUFBLEVBQUcsNHpCQWJIO0VBc0RBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTTtFQUFOLENBdkREO0VBd0RBLENBQUEsRUFDQztJQUFBLE9BQUEsRUFBVSxvQkFBVjtJQUNBLENBQUEsRUFBSSxjQURKO0lBRUEsa0JBQUEsRUFBcUI7RUFGckI7QUF6REQiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9MYWJvcmF0b3JpdW0gPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOicnXG5cdGw6MFxuXHRoOjFcblx0YjpcIlwiXCJcbiMgSMOkciBrYW4gZHUgbGFib3JlcmEgbWVkIGVnbmEgaWTDqWVyIVxuXG5jbGFzcyBMYWJvcmF0b3JpdW0gZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAeCA9IDEwMFxuXHRcdEB5ID0gMTAwXG5cdFx0QGNvbW1hbmQgPSBcIkdlIGV0dCBrb21tYW5kbyFcIlxuXHRkcmF3ICA6IC0+XG5cdFx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcblx0XHR0ZXh0U2l6ZSAyNFxuXHRcdGZjIDEsMSwwXG5cdFx0c2MoKVxuXHRcdHRleHQgQGNvbW1hbmQsQHgsQHlcblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuXHRsZWZ0ICA6IC0+IEB4IC09IDEwXG5cdHJpZ2h0IDogLT4gQHggKz0gMTBcblx0dXAgICAgOiAtPiBAeSAtPSAxMFxuXHRkb3duICA6IC0+IEB5ICs9IDEwXG5cdGEgICAgIDogLT4gQGNvbW1hbmQgPSBcImFcIlxuXHRiICAgICA6IC0+IEBjb21tYW5kID0gXCJiXCJcblx0YyAgICAgOiAtPiBAY29tbWFuZCA9IFwiY1wiXG5cdGQgICAgIDogLT4gQGNvbW1hbmQgPSBcImRcIlxuXHRlICAgICA6IC0+IEBjb21tYW5kID0gaW50IHJhbmRvbSAxLDdcblx0ZiAgICAgOiAtPiBAY29tbWFuZCA9IGludCBtaWxsaXMoKVxuYXBwID0gbmV3IExhYm9yYXRvcml1bVxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBMYWJvcmF0b3JpdW0gZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyA6IC0+XG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0bGVmdCA6IC0+XG5cdHJpZ2h0IDogLT5cblx0dXAgOiAtPlxuXHRkb3duIDogLT5cblx0YSA6IC0+XG5cdGIgOiAtPlxuXHRjIDogLT5cblx0ZCA6IC0+XG5cdGUgOiAtPlxuXHRmIDogLT5cblxuYXBwID0gbmV3IExhYm9yYXRvcml1bSBcImFcIlxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpfGxlZnQoKXxyaWdodCgpfHVwKCl8ZG93bigpfGEoKXxiKCl8YygpfGQoKXxlKCl8ZigpXCJcblxuSURfbGVycCA9XG5cdHY6ICcyMDE4LTA0LTI2J1xuXHRrOiAnbGVycCBzdyBwb2ludCBmb3IgcmFuZ2UnXG5cdGw6IDE1XG5cdGg6IDBcblx0YjogXCJcIlwiXG4jIGxlcnAgYSxiLGlcblxuc3cgMTBcbnBvaW50IDEwLDkwICMgRnLDpW4gdsOkbnN0ZXIgdGlsbCBow7ZnZXJcbnBvaW50IDMwLDkwXG4jICAgICB4ICAgICBsZXJwIFxuXG5mb3IgaSBpbiByYW5nZSAxMFxuXHR4ID0gbGVycCAxMCwzMCxpICMgMTAsMzAsNTAsNzAuLi5cblx0eSA9IDkwXG5cdHBvaW50IHgseVxuXHRcbnN3IDVcbnNjIDEsMCwwXG5wb2ludCAxMTAsMTkwICMgTmVyaWZyw6VuIG9jaCB1cHBcbnBvaW50IDExMCwxNzBcbiMgICAgICAgICB5ICAgbGVycCBcblxuZm9yIGkgaW4gcmFuZ2UgMTBcblx0eCA9IDExMFxuXHR5ID0gbGVycCAxOTAsMTcwLGkgIyAxOTAsMTcwLDE1MCwxMzAuLi5cblx0cG9pbnQgeCx5XG5cIlwiXCJcblx0YTogXCJcIlwiXG4jIGxlcnAgYSxiLGlcblxuc3cgMTBcbnBvaW50IDEwLDkwICMgRnLDpW4gdsOkbnN0ZXIgdGlsbCBow7ZnZXJcbnBvaW50IDMwLDkwXG4jICAgICB4ICAgICBsZXJwIFxuXG5mb3IgaSBpbiByYW5nZSAxMFxuXHR4ID0gbGVycCAxMCwzMCxpICMgMTAsMzAsNTAsNzAuLi5cblx0eSA9IDkwXG5cdHBvaW50IHgseVxuXHRcbnN3IDVcbnNjIDEsMCwwXG5wb2ludCAxMTAsMTkwICMgTmVyaWZyw6VuIG9jaCB1cHBcbnBvaW50IDExMCwxNzBcbiMgICAgICAgICB5ICAgbGVycCBcblxuZm9yIGkgaW4gcmFuZ2UgMTBcblx0eCA9IDExMFxuXHR5ID0gbGVycCAxOTAsMTcwLGkgIyAxOTAsMTcwLDE1MCwxMzAuLi5cblx0cG9pbnQgeCx5XG5cIlwiXCJcblxuSURfTGVycCA9XG5cdHY6JzIwMTctMDUtMTgnXG5cdGs6Jy0+IGJnIGZjIHNjIGlmIHRleHQgbGVycCBvcGVyYXRvcnMnXG5cdGw6MVxuXHRoOjJcblx0YiA6IFwiXCJcIlxubGVycCA9IChhLGIsaSkgLT4gMFxuXG4jIMOEbmRyYSBpbmdlbnRpbmcgbmVkYW5mw7ZyIGRlbm5hIHJhZCFcbmJnIDBcbnkgPSAxOVxudGVzdCA9IChhLGIpIC0+XG5cdHNjKClcblx0dGV4dFNpemUgMjBcblx0ZmMgMCwxLDBcblx0dGV4dCBhLCAwLHlcblx0aWYgYT09YiB0aGVuIGZjIDAsMSwwIGVsc2UgZmMgMSwwLDBcblx0dGV4dCBiLCAxMDAseVxuXHR5Kz0yMFxuXG50ZXN0IDEwLCBsZXJwIDEwLDIwLDBcbnRlc3QgMjAsIGxlcnAgMTAsMjAsMVxudGVzdCAzMCwgbGVycCAxMCwyMCwyXG50ZXN0IDAsICBsZXJwIDEwLDIwLC0xXG50ZXN0IDE1LCBsZXJwIDEwLDIwLDAuNVxudGVzdCAxMSwgbGVycCAxLDIsMTBcbnRlc3QgMjEsIGxlcnAgMSwzLDEwXG50ZXN0IC0xLCBsZXJwIDEsMCwyXG50ZXN0IDIsICBsZXJwIDEwLDksOFxudGVzdCAwLjQsbGVycCAwLjEsMC4yLDNcblwiXCJcIlxuXHRlOlxuXHRcdE1hdHRlYm9rZW4gOiBcImh0dHBzOi8vd3d3Lm1hdHRlYm9rZW4uc2UvbGVrdGlvbmVyL21hdHRlLTEvZnVua3Rpb25lci9saW5qYXJhLWZ1bmt0aW9uZXJcIlxuXG5cdGEgOiBcIlwiXCJcbmxlcnAgPSAoYSxiLGkpIC0+IGErKGItYSkqaVxuXG4jIMOEbmRyYSBpbmdlbnRpbmcgbmVkYW5mw7ZyIGRlbm5hIHJhZCFcbmJnIDBcbnkgPSAxOVxudGVzdCA9IChhLGIpIC0+XG5cdHNjKClcblx0dGV4dFNpemUgMjBcblx0ZmMgMCwxLDBcblx0dGV4dCBhLCAwLHlcblx0aWYgYT09YiB0aGVuIGZjIDAsMSwwIGVsc2UgZmMgMSwwLDBcblx0dGV4dCBiLCAxMDAseVxuXHR5Kz0yMFxuXG50ZXN0IDEwLCBsZXJwIDEwLDIwLDBcbnRlc3QgMjAsIGxlcnAgMTAsMjAsMVxudGVzdCAzMCwgbGVycCAxMCwyMCwyXG50ZXN0IDAsICBsZXJwIDEwLDIwLC0xXG50ZXN0IDE1LCBsZXJwIDEwLDIwLDAuNVxudGVzdCAxMSwgbGVycCAxLDIsMTBcbnRlc3QgMjEsIGxlcnAgMSwzLDEwXG50ZXN0IC0xLCBsZXJwIDEsMCwyXG50ZXN0IDIsICBsZXJwIDEwLDksOFxudGVzdCAwLjQsbGVycCAwLjEsMC4yLDNcblwiXCJcIlxuXG5JRF9saW5lID1cblx0djogJzIwMTgtMDQtMjcnXG5cdGs6ICdsaW5lJ1xuXHRsOiA2XG5cdGg6IDBcblx0YjogXCJcIlwiXG4jIFJpdGEgZW4gbGluamUgbWVsbGFuIHR2w6UgcHVua3RlclxuXG4jIERyYXcgYSBsaW5lIGJldHdlZW4gdHdvIHBvaW50c1xuXG4jIGxpbmUgeDEseTEseDIseTJcblxuc3cgMlxubGluZSA2MCwyMCwxNDAsMjAgXG5cbnN3IDRcbmxpbmUgNjAsNDAsMTQwLDEyMCBcblxuc3cgNlxubGluZSA2MCwxMDAsNjAsMTgwIFxuXCJcIlwiXG5cdGE6IFwiXCJcIlxuc3cgMlxubGluZSA2MCwyMCwxNDAsMjAgXG5cbnN3IDRcbmxpbmUgNjAsNDAsMTQwLDEyMCBcblxuc3cgNlxubGluZSA2MCwxMDAsNjAsMTgwIFxuXCJcIlwiXG5cbklEX2xpbmVzID1cblx0djonMjAxOC0wNC0yNydcblx0azonc2MgbGluZSBzdydcblx0bDo1XG5cdGg6MVxuXHRiOiBcIlwiXCJcbiMgbGluZSB4MSx5MSx4Mix5MlxuXCJcIlwiXG5cdGE6IFwiXCJcIlxuc3cgMTBcbnNjIDEsMSwwLDAuNVxubGluZSAyMCwyMCwxODAsMjBcbmxpbmUgNDAsMjAsMTgwLDQwXG5saW5lIDYwLDIwLDE4MCw2MFxuXCJcIlwiXG5cbiMgSURfbGluZV8yID1cbiMgXHR2OicyMDE3LTA0LTI5J1xuIyBcdGs6J3NjIHN3IGxpbmUnXG4jIFx0bDozXG4jIFx0aDoxXG4jIFx0YjogXCJcIlxuIyBcdGE6IFwiXCJcIlxuIyBzYyAxLDEsMFxuIyBzdyAxMFxuIyBsaW5lIDExMCwzMCwgMTEwLDE3MFxuIyBcIlwiXCJcblxuIyBJRF9saW5lXzMgPVxuIyBcdHY6JzIwMTctMDQtMjknXG4jIFx0azonc2MgbGluZSdcbiMgXHRsOjJcbiMgXHRoOjFcbiMgXHRiOiBcIlwiXG4jIFx0YTogXCJcIlwiXG4jIHNjIDEsMSwwXG4jIGxpbmUgMjAsMCwgMjAwLDIwXG4jIFwiXCJcIlxuXG5JRF9MaW5lYXJSZWdyZXNzaW9uID1cblx0djonMjAxNy0xMS0wMidcblx0azonY2xhc3MgbGluZSBbXSBmb3IgaW4nXG5cdGw6IDM0XG5cdGg6M1xuXHRiOiBcIlwiXCJcbmNsYXNzIExpbmVhclJlZ3Jlc3Npb24gZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyA6IC0+XG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0cG9wIDogLT5cbmFwcCA9IG5ldyBMaW5lYXJSZWdyZXNzaW9uXG5cdFwiXCJcIlxuXHRhOiBcIlwiXCJcbmNsYXNzIExpbmVhclJlZ3Jlc3Npb24gZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAcG9pbnRzID0gW10gIyBbWzIwLDEwMF0sWzQwLDgwXSxbNjAsMTQwXSxbODAsMTgwXSxbMTAwLDE0MF0sWzEyMCwxODBdLFsxNDAsMjAwXV1cblx0XHRAaz0wXG5cdFx0QG09MFxuXHRcdEBuPTBcblx0XHRAcj0wXG5cblx0ZHJhdyA6IC0+XG5cdFx0c3cgM1xuXHRcdEBuID0gQHBvaW50cy5sZW5ndGhcblx0XHRmb3IgW3gseV0gaW4gQHBvaW50c1xuXHRcdFx0cG9pbnQgeCx5XG5cdFx0aWYgQG48MiB0aGVuIHJldHVybiBcblx0XHRAbGluUmVnKClcblx0XHR4MSA9IDBcblx0XHR4MiA9IDIwMFxuXHRcdHkxID0gQGsqeDErQG1cblx0XHR5MiA9IEBrKngyK0BtXG5cdFx0c3cgMVxuXHRcdGxpbmUgeDEseTEseDIseTJcblxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+IEBwb2ludHMucHVzaCBbbXgsbXldXG5cdHBvcCA6IC0+IEBwb2ludHMucG9wKCkgaWYgQHBvaW50cy5sZW5ndGggPiAwIFxuXG5cdGxpblJlZyA6IC0+XG5cdFx0QHN4eT1Ac3g9QHN5PUBzeHg9QHN5eT0wXG5cdFx0Zm9yIFt4LHldIGluIEBwb2ludHNcblx0XHRcdEBzeHkgKz0geCp5XG5cdFx0XHRAc3ggICs9IHhcblx0XHRcdEBzeSAgKz0geVxuXHRcdFx0QHN4eCArPSB4Knhcblx0XHRcdEBzeXkgKz0geSp5XG5cdFx0QGsgPSAoQG4qQHN4eSAtIEBzeCpAc3kpIC8gKEBuKkBzeHggLSBAc3gqQHN4KVxuXHRcdEBtID0gQHN5L0BuIC0gQGsqQHN4L0BuXG5cdFx0QHIgPSAoQG4gKiBAc3h5IC0gQHN4ICogQHN5KSAvIE1hdGguc3FydCgoQG4qQHN4eCAtIEBzeCoqMikgKiAoQG4qQHN5eSAtIEBzeSoqMikpXG5cbmFwcCA9IG5ldyBMaW5lYXJSZWdyZXNzaW9uIFwiYVwiXG5cIlwiXCJcdFxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxwb3AoKVwiXG5cdGU6XG5cdFx0a19hbmRfbSA6IFwiaW1hZ2VzL2tfYW5kX20uSlBHXCJcblx0XHRyIDogXCJpbWFnZXMvci5QTkdcIlxuXHRcdFwiTGluZWFyUmVncmVzc2lvblwiIDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTl5dHZ4Z3hxME9RXCJcblxuIl19
//# sourceURL=c:\github\p5Dojo\coffee\data\L.coffee