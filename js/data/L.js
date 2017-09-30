// Generated by CoffeeScript 1.11.1
var ID_Laboratorium, ID_Lerp, ID_Line, ID_Lines;

ID_Laboratorium = {
  v: '2017-04-29',
  k: '',
  l: 0,
  b: "# Här kan du laborera med egna idéer!\n\nclass Laboratorium extends Application\n	reset : ->\n		super\n		@x = 100\n		@y = 100\n		@command = \"Ge ett kommando!\"\n	draw  : ->\n		textAlign CENTER,CENTER\n		textSize 24\n		fc 1,1,0\n		sc()\n		text @command,@x,@y\n	mousePressed : (mx,my) ->\n	left  : -> @x -= 10\n	right : -> @x += 10\n	up    : -> @y -= 10\n	down  : -> @y += 10\n	a     : -> @command = \"a\"\n	b     : -> @command = \"b\"\n	c     : -> @command = \"c\"\n	d     : -> @command = \"d\"\n	e     : -> @command = int random 1,7\n	f     : -> @command = int millis()\napp = new Laboratorium",
  a: "class Laboratorium extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\n	left : ->\n	right : ->\n	up : ->\n	down : ->\n	a : ->\n	b : ->\n	c : ->\n	d : ->\n	e : ->\n	f : ->\n\napp = new Laboratorium \"a\"",
  c: {
    app: "reset()|left()|right()|up()|down()|a()|b()|c()|d()|e()|f()"
  }
};

ID_Lerp = {
  v: '2017-05-18',
  k: '-> bg fc sc if text lerp operators',
  l: 1,
  b: "lerp = (a,b,i) -> 0\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 10, lerp 10,20,0\ntest 20, lerp 10,20,1\ntest 30, lerp 10,20,2\ntest 0,  lerp 10,20,-1\ntest 15, lerp 10,20,0.5\ntest 11, lerp 1,2,10\ntest 21, lerp 1,3,10\ntest -1, lerp 1,0,2\ntest 2,  lerp 10,9,8\ntest 0.4,lerp 0.1,0.2,3",
  e: {
    Matteboken: "https://www.matteboken.se/lektioner/matte-1/funktioner/linjara-funktioner"
  },
  a: "lerp = (a,b,i) -> a+(b-a)*i\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 10, lerp 10,20,0\ntest 20, lerp 10,20,1\ntest 30, lerp 10,20,2\ntest 0,  lerp 10,20,-1\ntest 15, lerp 10,20,0.5\ntest 11, lerp 1,2,10\ntest 21, lerp 1,3,10\ntest -1, lerp 1,0,2\ntest 2,  lerp 10,9,8\ntest 0.4,lerp 0.1,0.2,3"
};

ID_Line = {
  v: '2017-04-29',
  k: 'sc line',
  l: 2,
  b: "",
  a: "sc 1,1,0\nline 20,0, 200,20"
};

ID_Lines = {
  v: '2017-04-29',
  k: 'bg range for lerp line',
  l: 5,
  b: "# (Noel Watson)\n",
  a: "bg 0\nfor i in range 37\n	line 10,10, 190,10+i*5\n	line 10,100, 190,10+i*5\n	line 10,190, 190,10+i*5"
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcTC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsZUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsRUFERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLG9sQkFIRjtFQStCQSxDQUFBLEVBQUUsMk9BL0JGO0VBa0RBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSw0REFBTjtHQW5ERDs7O0FBcURELE9BQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG9DQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUksaWJBSEo7RUE2QkEsQ0FBQSxFQUNDO0lBQUEsVUFBQSxFQUFhLDJFQUFiO0dBOUJEO0VBZ0NBLENBQUEsRUFBSSx5YkFoQ0o7OztBQTJERCxPQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxTQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLENBQUEsRUFBRyw2QkFKSDs7O0FBU0QsUUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsd0JBREY7RUFFQSxDQUFBLEVBQUUsQ0FGRjtFQUdBLENBQUEsRUFBRSxtQkFIRjtFQUlBLENBQUEsRUFBRSxzR0FKRiIsInNvdXJjZXNDb250ZW50IjpbIklEX0xhYm9yYXRvcml1bSA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6Jydcblx0bDowXG5cdGI6XCJcIlwiXG4jIEjDpHIga2FuIGR1IGxhYm9yZXJhIG1lZCBlZ25hIGlkw6llciFcblxuY2xhc3MgTGFib3JhdG9yaXVtIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QHggPSAxMDBcblx0XHRAeSA9IDEwMFxuXHRcdEBjb21tYW5kID0gXCJHZSBldHQga29tbWFuZG8hXCJcblx0ZHJhdyAgOiAtPlxuXHRcdHRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXG5cdFx0dGV4dFNpemUgMjRcblx0XHRmYyAxLDEsMFxuXHRcdHNjKClcblx0XHR0ZXh0IEBjb21tYW5kLEB4LEB5XG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0bGVmdCAgOiAtPiBAeCAtPSAxMFxuXHRyaWdodCA6IC0+IEB4ICs9IDEwXG5cdHVwICAgIDogLT4gQHkgLT0gMTBcblx0ZG93biAgOiAtPiBAeSArPSAxMFxuXHRhICAgICA6IC0+IEBjb21tYW5kID0gXCJhXCJcblx0YiAgICAgOiAtPiBAY29tbWFuZCA9IFwiYlwiXG5cdGMgICAgIDogLT4gQGNvbW1hbmQgPSBcImNcIlxuXHRkICAgICA6IC0+IEBjb21tYW5kID0gXCJkXCJcblx0ZSAgICAgOiAtPiBAY29tbWFuZCA9IGludCByYW5kb20gMSw3XG5cdGYgICAgIDogLT4gQGNvbW1hbmQgPSBpbnQgbWlsbGlzKClcbmFwcCA9IG5ldyBMYWJvcmF0b3JpdW1cblwiXCJcIlxuXHRhOlwiXCJcIlxuY2xhc3MgTGFib3JhdG9yaXVtIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5cdGxlZnQgOiAtPlxuXHRyaWdodCA6IC0+XG5cdHVwIDogLT5cblx0ZG93biA6IC0+XG5cdGEgOiAtPlxuXHRiIDogLT5cblx0YyA6IC0+XG5cdGQgOiAtPlxuXHRlIDogLT5cblx0ZiA6IC0+XG5cbmFwcCA9IG5ldyBMYWJvcmF0b3JpdW0gXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxsZWZ0KCl8cmlnaHQoKXx1cCgpfGRvd24oKXxhKCl8YigpfGMoKXxkKCl8ZSgpfGYoKVwiXG5cbklEX0xlcnAgPVxuXHR2OicyMDE3LTA1LTE4J1xuXHRrOictPiBiZyBmYyBzYyBpZiB0ZXh0IGxlcnAgb3BlcmF0b3JzJ1xuXHRsOjFcblx0YiA6IFwiXCJcIlxubGVycCA9IChhLGIsaSkgLT4gMFxuXG4jIMOEbmRyYSBpbmdlbnRpbmcgbmVkYW5mw7ZyIGRlbm5hIHJhZCFcbmJnIDBcbnkgPSAxOVxudGVzdCA9IChhLGIpIC0+XG5cdHNjKClcblx0dGV4dFNpemUgMjBcblx0ZmMgMCwxLDBcblx0dGV4dCBhLCAwLHlcblx0aWYgYT09YiB0aGVuIGZjIDAsMSwwIGVsc2UgZmMgMSwwLDBcblx0dGV4dCBiLCAxMDAseVxuXHR5Kz0yMFxuXG50ZXN0IDEwLCBsZXJwIDEwLDIwLDBcbnRlc3QgMjAsIGxlcnAgMTAsMjAsMVxudGVzdCAzMCwgbGVycCAxMCwyMCwyXG50ZXN0IDAsICBsZXJwIDEwLDIwLC0xXG50ZXN0IDE1LCBsZXJwIDEwLDIwLDAuNVxudGVzdCAxMSwgbGVycCAxLDIsMTBcbnRlc3QgMjEsIGxlcnAgMSwzLDEwXG50ZXN0IC0xLCBsZXJwIDEsMCwyXG50ZXN0IDIsICBsZXJwIDEwLDksOFxudGVzdCAwLjQsbGVycCAwLjEsMC4yLDNcblwiXCJcIlxuXHRlOlxuXHRcdE1hdHRlYm9rZW4gOiBcImh0dHBzOi8vd3d3Lm1hdHRlYm9rZW4uc2UvbGVrdGlvbmVyL21hdHRlLTEvZnVua3Rpb25lci9saW5qYXJhLWZ1bmt0aW9uZXJcIlxuXG5cdGEgOiBcIlwiXCJcbmxlcnAgPSAoYSxiLGkpIC0+IGErKGItYSkqaVxuXG4jIMOEbmRyYSBpbmdlbnRpbmcgbmVkYW5mw7ZyIGRlbm5hIHJhZCFcbmJnIDBcbnkgPSAxOVxudGVzdCA9IChhLGIpIC0+XG5cdHNjKClcblx0dGV4dFNpemUgMjBcblx0ZmMgMCwxLDBcblx0dGV4dCBhLCAwLHlcblx0aWYgYT09YiB0aGVuIGZjIDAsMSwwIGVsc2UgZmMgMSwwLDBcblx0dGV4dCBiLCAxMDAseVxuXHR5Kz0yMFxuXG50ZXN0IDEwLCBsZXJwIDEwLDIwLDBcbnRlc3QgMjAsIGxlcnAgMTAsMjAsMVxudGVzdCAzMCwgbGVycCAxMCwyMCwyXG50ZXN0IDAsICBsZXJwIDEwLDIwLC0xXG50ZXN0IDE1LCBsZXJwIDEwLDIwLDAuNVxudGVzdCAxMSwgbGVycCAxLDIsMTBcbnRlc3QgMjEsIGxlcnAgMSwzLDEwXG50ZXN0IC0xLCBsZXJwIDEsMCwyXG50ZXN0IDIsICBsZXJwIDEwLDksOFxudGVzdCAwLjQsbGVycCAwLjEsMC4yLDNcblwiXCJcIlxuXG5JRF9MaW5lID1cblx0djonMjAxNy0wNC0yOSdcblx0azonc2MgbGluZSdcblx0bDoyXG5cdGI6IFwiXCJcblx0YTogXCJcIlwiXG5zYyAxLDEsMFxubGluZSAyMCwwLCAyMDAsMjBcblwiXCJcIlxuXG5JRF9MaW5lcyA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2JnIHJhbmdlIGZvciBsZXJwIGxpbmUnXG5cdGw6NVxuXHRiOlwiIyAoTm9lbCBXYXRzb24pXFxuXCJcblx0YTpcIlwiXCJcbmJnIDBcbmZvciBpIGluIHJhbmdlIDM3XG5cdGxpbmUgMTAsMTAsIDE5MCwxMCtpKjVcblx0bGluZSAxMCwxMDAsIDE5MCwxMCtpKjVcblx0bGluZSAxMCwxOTAsIDE5MCwxMCtpKjVcblwiXCJcIlxuXG4iXX0=
//# sourceURL=C:\github\p5Dojo\coffee\data\L.coffee