// Generated by CoffeeScript 1.11.1
var ID_Background1, ID_Background2, ID_Background3, ID_Background4, ID_BlackBox2D, ID_BoardGame, ID_BouncingBalls, ID_Braid, ID_Braider;

ID_Background1 = {
  v: '2017-04-29',
  b: "# LOC:1\n# Första bilden ska du efterlikna.\n# Andra bilden skapas av din kod.\n# Tredje bilden visar skillnaden mellan de två andra. Ska bli svart när du är klar.\n\n# Tryck på PgDn för att komma till sista raden.\n# Skriv in följande kommando: bg 1\n# Kontrollera att de två första bilderna nu är lika, och att den tredje är helt svart.\n\n# Klicka på Background2 för att komma till nästa övning.\n# Klicka på p5Dojo nere till vänster för mera information.\n# Klicka på p5 för att se fler kommandon.\n",
  a: "bg 1"
};

ID_Background2 = {
  v: '2017-04-29',
  b: "# LOC:1 bg\n",
  a: "bg 0.5"
};

ID_Background3 = {
  v: '2017-04-29',
  b: "# LOC:1 bg\n",
  a: "bg 1,0,0"
};

ID_Background4 = {
  v: '2017-04-29',
  b: "# LOC:1 bg\n",
  a: "bg 1,1,0"
};

ID_BlackBox2D = {
  v: '2017-04-29',
  b: "# LOC:33 bg sc fc range # line [] length * / // % ** & | ^ ~ << >> + - > < == != <= >= int and or\n#        for in if then else text textSize textAlign class extends constructor new @ super ->\n\nclass BlackBox2D extends Application\n	reset : ->\n		super\n		@N = 10\n		@SIZE = 20\n		@index = 0\n	up   : -> @index = (@index+1) %% 36\n	down : -> @index = (@index-1) %% 36\n	draw : ->\napp = new BlackBox2D",
  a: "class BlackBox2D extends Application\n	reset : () ->\n		super\n		@N = 10\n		@SIZE = 20\n		@index = 0\n	up   : -> @index = (@index+1) %% 36\n	down : -> @index = (@index-1) %% 36\n	paint : (r,g,b,x,y,txt) ->\n		fc r,g,b\n		if txt? then text txt,x,y else circle x,y,5\n	draw : ->\n		sc()\n		textSize 14\n		textAlign CENTER,CENTER\n		for i in range @N\n			for j in range @N\n				x = @SIZE/2 + @SIZE*i\n				y = @SIZE/2 + @SIZE*j + 1\n				res = @calc i,j\n				if res == true       then @paint 0,1,0,x,y\n				else if res == false then @paint 1,0,0,x,y\n				else if res == 'NaN' then @paint 1,1,0,x,y,'?'\n				else if res >= 100   then @paint 0,1,0,x,y,'..'\n				else if res <= -100  then @paint 1,0,0,x,y,'..'\n				else if res < 0      then @paint 1,0,0,x,y,-res\n				else if res > 0      then @paint 0,1,0,x,y,res\n				else                      @paint 1,1,0,x,y,res\n	fix : (i,j) -> if j == 0 then ['NaN','NaN'] else [i//j, i%j]\n	calc : (i,j) ->\n		n = @N\n		[a,b] = @fix i,j\n		[i, i+j, i-j, i-5, j-6, j*n+i, i*n+j, (n-1-i)*n+n-1-j, (n-1-j)*n+n-1-i, (i-4)*(j-4), i*j, i*i+j*j, i**j, a, b, i%2, (i+j)%2, j&i, i|j, i^j, ~i, i<<j, j>>i, j&(2**i), i==j, i-j==1, i+j==9, i!=j, i>5, i<j, i<=j, i==3 and j==6, i==3 or j==6, (2<i<7) and (1<j<7), 4 <= dist(4.5,4.5,i,j) < 5, (i+j)%2==1][@index]\n\napp = new BlackBox2D \"a\"",
  c: {
    app: "reset()|up()|down()"
  },
  e: {
    Operatorer: "https://www.w3schools.com/jsref/jsref_operators.asp",
    BlackBox: "https://en.wikipedia.org/wiki/Black_box"
  }
};

ID_BoardGame = {
  v: '2017-04-29',
  b: "# LOC:21 bg fc sc circle range # for in ->\n\nclass Board extends Application\n	reset : ->\n		super\n	draw  : ->\n	r     : (d) ->\n	d     : (d) ->\n	n     : (d) ->\napp = new Board",
  a: "\nclass Board extends Application\n	reset : ->\n		super\n		@_X = 100\n		@_Y = 100\n		@_d = 18\n		@_r = 7\n		@_n = 5\n	draw : ->\n		bg 1\n		fc 0\n		sc()\n		@one @_d,@_r,@_X-@_n*@_d, @_Y-@_d,2*@_n+1,3\n		@one @_d,@_r,@_X-@_d, @_Y-@_n*@_d,3,2*@_n+1\n	one : (d,r,x0,y0,m,n) ->\n		for i in range m\n			for j in range n\n				circle x0+d*i,y0+d*j,r\n	r : (d) -> @_r += d\n	d : (d) -> @_d += d\n	n : (d) -> @_n += d\n\napp = new Board \"a\"",
  c: {
    app: "reset()|r -1|r +1|d -1|d +1|n -1|n +1"
  }
};

ID_BouncingBalls = {
  v: '2017-04-29',
  b: "# LOC:43 fc sw sc circle # + ++ - -- %% == push if then for in\n#        splice length _.create class constructor super extends new @\n\nclass Ball\n	constructor : ->\n	update      : (grav) ->\n	render      : (sel) ->\n\nclass BouncingBalls extends Application\n	classes : -> [Ball]\n	reset   : ->\n		super\n	draw    : ->\n	update  : ->\n	add     : ->\n	delete  : ->\n	selNext : ->\n	selPrev : ->\n	grow    : ->\n	shrink  : ->\n	nextCol : ->\n	prevCol : ->\n	gravity : ->\napp = new BouncingBalls",
  a: "class Ball\n	constructor : ->\n		@x = 100\n		@y = 100\n		@r = 10\n		@c = 1\n		@dx = 3\n		@dy = 4\n	update : (grav) ->\n		@x += @dx\n		@y += @dy\n		if not (@r < @x < 200-@r) then @dx = - @dx\n		if not (@r < @y < 200-@r) then @dy = - @dy\n		if grav and @y < 200-@r then @dy += 1\n	render : (sel) ->\n		fcc @c\n		sw 2\n		if sel then scc 7 else sc()\n		circle @x,@y,@r\n\nclass BouncingBalls extends Application\n	classes : -> [Ball]\n	reset : ->\n		super\n		@balls = []\n		@sel = -1\n		@grav = false\n	draw : ->\n		for ball,i in @balls\n			ball.render i==@sel, @grav\n	update : ->\n		for ball in @balls\n			ball.update(@grav)\n\n	add : ->\n		@balls.push new Ball\n		@sel = @balls.length - 1\n\n	delete :->\n		@balls.splice @sel, 1\n		if @sel >= @balls.length then @sel = @balls.length - 1\n	selNext : -> @sel = (@sel + 1) %% @balls.length\n	selPrev : -> @sel = (@sel - 1) %% @balls.length\n	grow : ->    @balls[@sel].r++\n	shrink : ->  @balls[@sel].r--\n	nextCol : -> @balls[@sel].c = (@balls[@sel].c+1) %% 8\n	prevCol : -> @balls[@sel].c = (@balls[@sel].c-1) %% 8\n	gravity : -> @grav = not @grav\n\napp = new BouncingBalls \"a\"",
  c: {
    app: "reset()|update()|add()|delete()|selNext()|selPrev()|grow()|shrink()|nextCol()|prevCol()|gravity()"
  }
};

ID_Braid = {
  v: '2017-04-29',
  b: "# LOC:19 sc bg sw range # for in line class constructor new @\n\nclass Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n\nbraid = (n,dx,dy,width) ->\n\nbraid 5,18,18,6",
  a: "class Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n		sc @r,@g,@b\n		line @x,@y,@x+dx,@y+dy\n		[@x,@y] = [@x+dx,@y+dy]\n\nbraid = (n,dx,dy,width) ->\n\n	a = new Cartesius 1,0,0, 100-dx/2,dy/3\n	b = new Cartesius 1,1,0, 100+dx/2,2*dy/3\n	c = new Cartesius 0,1,0, 100-dx/2,dy\n\n	bg 0\n	sw width\n\n	for i in range n\n		a.go dx,dy\n		b.go -dx,dy\n		c.go dx,dy\n\n		a.go -dx,dy\n		b.go dx,dy\n		c.go -dx,dy\n\nbraid 5,18,18,6",
  e: {
    braid: "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg",
    Wikipedia: "https://en.wikipedia.org/wiki/Braid"
  }
};

ID_Braider = {
  v: '2017-04-29',
  b: "# LOC:49 sc bg sw range # for in if then + line class constructor extends new @\n\nclass Cartesius\n	constructor : (x,y,c) ->\n	go          : (dx,dy) ->\n	down        : (d) ->\n	left        : (d) ->\n\nclass Braider extends Application\n	braid   : (type) ->\n	draw    : ->\n	forward : ->\n	back    : ->\napp = new Braider",
  a: "class Cartesius\n	constructor : (@x,@y,@c) ->\n	go : (dx,dy) ->\n		scc @c\n		line @x,@y,@x+dx,@y+dy\n		[@x,@y] = [@x+dx,@y+dy]\n	down : (d) -> @go 0,d\n	left : (d) -> @go -d,0\n\nclass Braider extends Application\n\n	braid : (@type) ->\n		@n = 0\n		@forward()\n	draw : ->\n		if @type==1\n			sw 5\n			a = new Cartesius 200,20, 1 # röd\n			for i in range @n\n				a.go -20,20\n		if @type==2\n			sw 5\n			a = new Cartesius 200,20, 1 # röd\n			b = new Cartesius 190,10, 2 # grön\n			for i in range @n\n				if i%4 == 0 then b.down 20\n				if i%4 == 1 then a.left 20\n				if i%4 == 2 then a.down 20\n				if i%4 == 3 then b.left 20\n		if @type==3\n			sw 5\n			a = new Cartesius 200,30, 1\n			b = new Cartesius 190,10, 2\n			c = new Cartesius 180,20, 3\n			for i in range @n\n				if i%6 == 0 then b.down 30\n				if i%6 == 1 then a.left 30\n				if i%6 == 2 then c.down 30\n				if i%6 == 3 then b.left 30\n				if i%6 == 4 then a.down 30\n				if i%6 == 5 then c.left 30\n		if @type==4\n			sw 10\n			a = new Cartesius 150,40, 1 # röd\n			b = new Cartesius 170,20, 2 # grön\n			c = new Cartesius 160,30, 3 # gul\n			d = new Cartesius 190,50, 4 # blå\n			for i in range @n\n				if i%12 == 0 then b.down 50\n				if i%12 == 1 then c.left 30; c.down 30\n				if i%12 == 2 then d.left 50\n				if i%12 == 3 then a.down 50\n				if i%12 == 4 then b.left 50\n				if i%12 == 5 then c.down 50\n				if i%12 == 6 then d.left 30; d.down 30\n				if i%12 == 7 then a.left 50\n				if i%12 == 8 then b.left 30; b.down 30\n				if i%12 == 9 then d.down 50\n				if i%12 == 10 then c.left 50\n				if i%12 == 11 then a.left 30; a.down 30\n\n	forward : -> @n++\n	back : -> @n--\n\napp = new Braider \"a\"",
  c: {
    app: "braid 1|braid 2|braid 3|braid 4|forward()|back()"
  },
  e: {
    braid: "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQi5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcQi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsY0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUcseWZBREg7RUFnQkEsQ0FBQSxFQUFHLE1BaEJIOzs7QUFrQkQsY0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUcsY0FESDtFQUVBLENBQUEsRUFBRyxRQUZIOzs7QUFJRCxjQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRyxjQURIO0VBRUEsQ0FBQSxFQUFHLFVBRkg7OztBQUlELGNBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFHLGNBREg7RUFFQSxDQUFBLEVBQUcsVUFGSDs7O0FBSUQsYUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUscVpBREY7RUFnQkEsQ0FBQSxFQUFFLGl5Q0FoQkY7RUFxREEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLHFCQUFOO0dBdEREO0VBdURBLENBQUEsRUFDQztJQUFBLFVBQUEsRUFBYSxxREFBYjtJQUNBLFFBQUEsRUFBVyx5Q0FEWDtHQXhERDs7O0FBMkRELFlBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLHNMQURGO0VBYUEsQ0FBQSxFQUFFLGtiQWJGO0VBdUNBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSx1Q0FBTjtHQXhDRDs7O0FBMENELGdCQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBSSxrZkFESjtFQTRCQSxDQUFBLEVBQUUseW1DQTVCRjtFQWdGQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0sbUdBQU47R0FqRkQ7OztBQW1GRCxRQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBSSwwTEFESjtFQWFBLENBQUEsRUFBRSw0YkFiRjtFQXlDQSxDQUFBLEVBQ0M7SUFBQSxLQUFBLEVBQVEsbUZBQVI7SUFDQSxTQUFBLEVBQVkscUNBRFo7R0ExQ0Q7OztBQTZDRCxVQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBSSxtVUFESjtFQWtCQSxDQUFBLEVBQUUsbW9EQWxCRjtFQXFGQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0sa0RBQU47R0F0RkQ7RUF3RkEsQ0FBQSxFQUNDO0lBQUEsS0FBQSxFQUFRLG1GQUFSO0dBekZEIiwic291cmNlc0NvbnRlbnQiOlsiSURfQmFja2dyb3VuZDEgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOiBcIlwiXCJcbiMgTE9DOjFcbiMgRsO2cnN0YSBiaWxkZW4gc2thIGR1IGVmdGVybGlrbmEuXG4jIEFuZHJhIGJpbGRlbiBza2FwYXMgYXYgZGluIGtvZC5cbiMgVHJlZGplIGJpbGRlbiB2aXNhciBza2lsbG5hZGVuIG1lbGxhbiBkZSB0dsOlIGFuZHJhLiBTa2EgYmxpIHN2YXJ0IG7DpHIgZHUgw6RyIGtsYXIuXG5cbiMgVHJ5Y2sgcMOlIFBnRG4gZsO2ciBhdHQga29tbWEgdGlsbCBzaXN0YSByYWRlbi5cbiMgU2tyaXYgaW4gZsO2bGphbmRlIGtvbW1hbmRvOiBiZyAxXG4jIEtvbnRyb2xsZXJhIGF0dCBkZSB0dsOlIGbDtnJzdGEgYmlsZGVybmEgbnUgw6RyIGxpa2EsIG9jaCBhdHQgZGVuIHRyZWRqZSDDpHIgaGVsdCBzdmFydC5cblxuIyBLbGlja2EgcMOlIEJhY2tncm91bmQyIGbDtnIgYXR0IGtvbW1hIHRpbGwgbsOkc3RhIMO2dm5pbmcuXG4jIEtsaWNrYSBww6UgcDVEb2pvIG5lcmUgdGlsbCB2w6Ruc3RlciBmw7ZyIG1lcmEgaW5mb3JtYXRpb24uXG4jIEtsaWNrYSBww6UgcDUgZsO2ciBhdHQgc2UgZmxlciBrb21tYW5kb24uXG5cblwiXCJcIlxuXHRhOiBcImJnIDFcIlxuXG5JRF9CYWNrZ3JvdW5kMiA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGI6IFwiIyBMT0M6MSBiZ1xcblwiXG5cdGE6IFwiYmcgMC41XCJcblxuSURfQmFja2dyb3VuZDMgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOiBcIiMgTE9DOjEgYmdcXG5cIlxuXHRhOiBcImJnIDEsMCwwXCJcblxuSURfQmFja2dyb3VuZDQgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOiBcIiMgTE9DOjEgYmdcXG5cIlxuXHRhOiBcImJnIDEsMSwwXCJcblxuSURfQmxhY2tCb3gyRCA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGI6XCJcIlwiXG4jIExPQzozMyBiZyBzYyBmYyByYW5nZSAjIGxpbmUgW10gbGVuZ3RoICogLyAvLyAlICoqICYgfCBeIH4gPDwgPj4gKyAtID4gPCA9PSAhPSA8PSA+PSBpbnQgYW5kIG9yXG4jICAgICAgICBmb3IgaW4gaWYgdGhlbiBlbHNlIHRleHQgdGV4dFNpemUgdGV4dEFsaWduIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3IgbmV3IEAgc3VwZXIgLT5cblxuY2xhc3MgQmxhY2tCb3gyRCBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBOID0gMTBcblx0XHRAU0laRSA9IDIwXG5cdFx0QGluZGV4ID0gMFxuXHR1cCAgIDogLT4gQGluZGV4ID0gKEBpbmRleCsxKSAlJSAzNlxuXHRkb3duIDogLT4gQGluZGV4ID0gKEBpbmRleC0xKSAlJSAzNlxuXHRkcmF3IDogLT5cbmFwcCA9IG5ldyBCbGFja0JveDJEXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIEJsYWNrQm94MkQgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6ICgpIC0+XG5cdFx0c3VwZXJcblx0XHRATiA9IDEwXG5cdFx0QFNJWkUgPSAyMFxuXHRcdEBpbmRleCA9IDBcblx0dXAgICA6IC0+IEBpbmRleCA9IChAaW5kZXgrMSkgJSUgMzZcblx0ZG93biA6IC0+IEBpbmRleCA9IChAaW5kZXgtMSkgJSUgMzZcblx0cGFpbnQgOiAocixnLGIseCx5LHR4dCkgLT5cblx0XHRmYyByLGcsYlxuXHRcdGlmIHR4dD8gdGhlbiB0ZXh0IHR4dCx4LHkgZWxzZSBjaXJjbGUgeCx5LDVcblx0ZHJhdyA6IC0+XG5cdFx0c2MoKVxuXHRcdHRleHRTaXplIDE0XG5cdFx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcblx0XHRmb3IgaSBpbiByYW5nZSBATlxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgQE5cblx0XHRcdFx0eCA9IEBTSVpFLzIgKyBAU0laRSppXG5cdFx0XHRcdHkgPSBAU0laRS8yICsgQFNJWkUqaiArIDFcblx0XHRcdFx0cmVzID0gQGNhbGMgaSxqXG5cdFx0XHRcdGlmIHJlcyA9PSB0cnVlICAgICAgIHRoZW4gQHBhaW50IDAsMSwwLHgseVxuXHRcdFx0XHRlbHNlIGlmIHJlcyA9PSBmYWxzZSB0aGVuIEBwYWludCAxLDAsMCx4LHlcblx0XHRcdFx0ZWxzZSBpZiByZXMgPT0gJ05hTicgdGhlbiBAcGFpbnQgMSwxLDAseCx5LCc/J1xuXHRcdFx0XHRlbHNlIGlmIHJlcyA+PSAxMDAgICB0aGVuIEBwYWludCAwLDEsMCx4LHksJy4uJ1xuXHRcdFx0XHRlbHNlIGlmIHJlcyA8PSAtMTAwICB0aGVuIEBwYWludCAxLDAsMCx4LHksJy4uJ1xuXHRcdFx0XHRlbHNlIGlmIHJlcyA8IDAgICAgICB0aGVuIEBwYWludCAxLDAsMCx4LHksLXJlc1xuXHRcdFx0XHRlbHNlIGlmIHJlcyA+IDAgICAgICB0aGVuIEBwYWludCAwLDEsMCx4LHkscmVzXG5cdFx0XHRcdGVsc2UgICAgICAgICAgICAgICAgICAgICAgQHBhaW50IDEsMSwwLHgseSxyZXNcblx0Zml4IDogKGksaikgLT4gaWYgaiA9PSAwIHRoZW4gWydOYU4nLCdOYU4nXSBlbHNlIFtpLy9qLCBpJWpdXG5cdGNhbGMgOiAoaSxqKSAtPlxuXHRcdG4gPSBATlxuXHRcdFthLGJdID0gQGZpeCBpLGpcblx0XHRbaSwgaStqLCBpLWosIGktNSwgai02LCBqKm4raSwgaSpuK2osIChuLTEtaSkqbituLTEtaiwgKG4tMS1qKSpuK24tMS1pLCAoaS00KSooai00KSwgaSpqLCBpKmkraipqLCBpKipqLCBhLCBiLCBpJTIsIChpK2opJTIsIGomaSwgaXxqLCBpXmosIH5pLCBpPDxqLCBqPj5pLCBqJigyKippKSwgaT09aiwgaS1qPT0xLCBpK2o9PTksIGkhPWosIGk+NSwgaTxqLCBpPD1qLCBpPT0zIGFuZCBqPT02LCBpPT0zIG9yIGo9PTYsICgyPGk8NykgYW5kICgxPGo8NyksIDQgPD0gZGlzdCg0LjUsNC41LGksaikgPCA1LCAoaStqKSUyPT0xXVtAaW5kZXhdXG5cbmFwcCA9IG5ldyBCbGFja0JveDJEIFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8dXAoKXxkb3duKClcIlxuXHRlOlxuXHRcdE9wZXJhdG9yZXIgOiBcImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vanNyZWYvanNyZWZfb3BlcmF0b3JzLmFzcFwiXG5cdFx0QmxhY2tCb3ggOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JsYWNrX2JveFwiXG5cbklEX0JvYXJkR2FtZSA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGI6XCJcIlwiXG4jIExPQzoyMSBiZyBmYyBzYyBjaXJjbGUgcmFuZ2UgIyBmb3IgaW4gLT5cblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgOiAtPlxuXHRyICAgICA6IChkKSAtPlxuXHRkICAgICA6IChkKSAtPlxuXHRuICAgICA6IChkKSAtPlxuYXBwID0gbmV3IEJvYXJkXG5cIlwiXCJcblx0YTpcIlwiXCJcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAX1ggPSAxMDBcblx0XHRAX1kgPSAxMDBcblx0XHRAX2QgPSAxOFxuXHRcdEBfciA9IDdcblx0XHRAX24gPSA1XG5cdGRyYXcgOiAtPlxuXHRcdGJnIDFcblx0XHRmYyAwXG5cdFx0c2MoKVxuXHRcdEBvbmUgQF9kLEBfcixAX1gtQF9uKkBfZCwgQF9ZLUBfZCwyKkBfbisxLDNcblx0XHRAb25lIEBfZCxAX3IsQF9YLUBfZCwgQF9ZLUBfbipAX2QsMywyKkBfbisxXG5cdG9uZSA6IChkLHIseDAseTAsbSxuKSAtPlxuXHRcdGZvciBpIGluIHJhbmdlIG1cblx0XHRcdGZvciBqIGluIHJhbmdlIG5cblx0XHRcdFx0Y2lyY2xlIHgwK2QqaSx5MCtkKmosclxuXHRyIDogKGQpIC0+IEBfciArPSBkXG5cdGQgOiAoZCkgLT4gQF9kICs9IGRcblx0biA6IChkKSAtPiBAX24gKz0gZFxuXG5hcHAgPSBuZXcgQm9hcmQgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxyIC0xfHIgKzF8ZCAtMXxkICsxfG4gLTF8biArMVwiXG5cbklEX0JvdW5jaW5nQmFsbHMgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiIDogXCJcIlwiXG4jIExPQzo0MyBmYyBzdyBzYyBjaXJjbGUgIyArICsrIC0gLS0gJSUgPT0gcHVzaCBpZiB0aGVuIGZvciBpblxuIyAgICAgICAgc3BsaWNlIGxlbmd0aCBfLmNyZWF0ZSBjbGFzcyBjb25zdHJ1Y3RvciBzdXBlciBleHRlbmRzIG5ldyBAXG5cbmNsYXNzIEJhbGxcblx0Y29uc3RydWN0b3IgOiAtPlxuXHR1cGRhdGUgICAgICA6IChncmF2KSAtPlxuXHRyZW5kZXIgICAgICA6IChzZWwpIC0+XG5cbmNsYXNzIEJvdW5jaW5nQmFsbHMgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRjbGFzc2VzIDogLT4gW0JhbGxdXG5cdHJlc2V0ICAgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgICAgOiAtPlxuXHR1cGRhdGUgIDogLT5cblx0YWRkICAgICA6IC0+XG5cdGRlbGV0ZSAgOiAtPlxuXHRzZWxOZXh0IDogLT5cblx0c2VsUHJldiA6IC0+XG5cdGdyb3cgICAgOiAtPlxuXHRzaHJpbmsgIDogLT5cblx0bmV4dENvbCA6IC0+XG5cdHByZXZDb2wgOiAtPlxuXHRncmF2aXR5IDogLT5cbmFwcCA9IG5ldyBCb3VuY2luZ0JhbGxzXG5cIlwiXCJcblxuXHRhOlwiXCJcIlxuY2xhc3MgQmFsbFxuXHRjb25zdHJ1Y3RvciA6IC0+XG5cdFx0QHggPSAxMDBcblx0XHRAeSA9IDEwMFxuXHRcdEByID0gMTBcblx0XHRAYyA9IDFcblx0XHRAZHggPSAzXG5cdFx0QGR5ID0gNFxuXHR1cGRhdGUgOiAoZ3JhdikgLT5cblx0XHRAeCArPSBAZHhcblx0XHRAeSArPSBAZHlcblx0XHRpZiBub3QgKEByIDwgQHggPCAyMDAtQHIpIHRoZW4gQGR4ID0gLSBAZHhcblx0XHRpZiBub3QgKEByIDwgQHkgPCAyMDAtQHIpIHRoZW4gQGR5ID0gLSBAZHlcblx0XHRpZiBncmF2IGFuZCBAeSA8IDIwMC1AciB0aGVuIEBkeSArPSAxXG5cdHJlbmRlciA6IChzZWwpIC0+XG5cdFx0ZmNjIEBjXG5cdFx0c3cgMlxuXHRcdGlmIHNlbCB0aGVuIHNjYyA3IGVsc2Ugc2MoKVxuXHRcdGNpcmNsZSBAeCxAeSxAclxuXG5jbGFzcyBCb3VuY2luZ0JhbGxzIGV4dGVuZHMgQXBwbGljYXRpb25cblx0Y2xhc3NlcyA6IC0+IFtCYWxsXVxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAYmFsbHMgPSBbXVxuXHRcdEBzZWwgPSAtMVxuXHRcdEBncmF2ID0gZmFsc2Vcblx0ZHJhdyA6IC0+XG5cdFx0Zm9yIGJhbGwsaSBpbiBAYmFsbHNcblx0XHRcdGJhbGwucmVuZGVyIGk9PUBzZWwsIEBncmF2XG5cdHVwZGF0ZSA6IC0+XG5cdFx0Zm9yIGJhbGwgaW4gQGJhbGxzXG5cdFx0XHRiYWxsLnVwZGF0ZShAZ3JhdilcblxuXHRhZGQgOiAtPlxuXHRcdEBiYWxscy5wdXNoIG5ldyBCYWxsXG5cdFx0QHNlbCA9IEBiYWxscy5sZW5ndGggLSAxXG5cblx0ZGVsZXRlIDotPlxuXHRcdEBiYWxscy5zcGxpY2UgQHNlbCwgMVxuXHRcdGlmIEBzZWwgPj0gQGJhbGxzLmxlbmd0aCB0aGVuIEBzZWwgPSBAYmFsbHMubGVuZ3RoIC0gMVxuXHRzZWxOZXh0IDogLT4gQHNlbCA9IChAc2VsICsgMSkgJSUgQGJhbGxzLmxlbmd0aFxuXHRzZWxQcmV2IDogLT4gQHNlbCA9IChAc2VsIC0gMSkgJSUgQGJhbGxzLmxlbmd0aFxuXHRncm93IDogLT4gICAgQGJhbGxzW0BzZWxdLnIrK1xuXHRzaHJpbmsgOiAtPiAgQGJhbGxzW0BzZWxdLnItLVxuXHRuZXh0Q29sIDogLT4gQGJhbGxzW0BzZWxdLmMgPSAoQGJhbGxzW0BzZWxdLmMrMSkgJSUgOFxuXHRwcmV2Q29sIDogLT4gQGJhbGxzW0BzZWxdLmMgPSAoQGJhbGxzW0BzZWxdLmMtMSkgJSUgOFxuXHRncmF2aXR5IDogLT4gQGdyYXYgPSBub3QgQGdyYXZcblxuYXBwID0gbmV3IEJvdW5jaW5nQmFsbHMgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXx1cGRhdGUoKXxhZGQoKXxkZWxldGUoKXxzZWxOZXh0KCl8c2VsUHJldigpfGdyb3coKXxzaHJpbmsoKXxuZXh0Q29sKCl8cHJldkNvbCgpfGdyYXZpdHkoKVwiXG5cbklEX0JyYWlkID1cblx0djonMjAxNy0wNC0yOSdcblx0YiA6IFwiXCJcIlxuIyBMT0M6MTkgc2MgYmcgc3cgcmFuZ2UgIyBmb3IgaW4gbGluZSBjbGFzcyBjb25zdHJ1Y3RvciBuZXcgQFxuXG5jbGFzcyBDYXJ0ZXNpdXNcblx0Y29uc3RydWN0b3IgOiAoQHIsQGcsQGIsIEB4LEB5KSAtPlxuXHRnbyA6IChkeCxkeSkgLT5cblxuYnJhaWQgPSAobixkeCxkeSx3aWR0aCkgLT5cblxuYnJhaWQgNSwxOCwxOCw2XG5cIlwiXCJcblxuXHRhOlwiXCJcIlxuY2xhc3MgQ2FydGVzaXVzXG5cdGNvbnN0cnVjdG9yIDogKEByLEBnLEBiLCBAeCxAeSkgLT5cblx0Z28gOiAoZHgsZHkpIC0+XG5cdFx0c2MgQHIsQGcsQGJcblx0XHRsaW5lIEB4LEB5LEB4K2R4LEB5K2R5XG5cdFx0W0B4LEB5XSA9IFtAeCtkeCxAeStkeV1cblxuYnJhaWQgPSAobixkeCxkeSx3aWR0aCkgLT5cblxuXHRhID0gbmV3IENhcnRlc2l1cyAxLDAsMCwgMTAwLWR4LzIsZHkvM1xuXHRiID0gbmV3IENhcnRlc2l1cyAxLDEsMCwgMTAwK2R4LzIsMipkeS8zXG5cdGMgPSBuZXcgQ2FydGVzaXVzIDAsMSwwLCAxMDAtZHgvMixkeVxuXG5cdGJnIDBcblx0c3cgd2lkdGhcblxuXHRmb3IgaSBpbiByYW5nZSBuXG5cdFx0YS5nbyBkeCxkeVxuXHRcdGIuZ28gLWR4LGR5XG5cdFx0Yy5nbyBkeCxkeVxuXG5cdFx0YS5nbyAtZHgsZHlcblx0XHRiLmdvIGR4LGR5XG5cdFx0Yy5nbyAtZHgsZHlcblxuYnJhaWQgNSwxOCwxOCw2XG5cIlwiXCJcblx0ZTpcblx0XHRicmFpZCA6IFwiaHR0cHM6Ly9jZG4udHV0c3BsdXMuY29tL3ZlY3Rvci91cGxvYWRzL2xlZ2FjeS90dXRzLzAwMC0yMDExLzM5OC1oYWlyLWJyYWlkLzYuanBnXCJcblx0XHRXaWtpcGVkaWEgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JyYWlkXCJcblxuSURfQnJhaWRlciA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGIgOiBcIlwiXCJcbiMgTE9DOjQ5IHNjIGJnIHN3IHJhbmdlICMgZm9yIGluIGlmIHRoZW4gKyBsaW5lIGNsYXNzIGNvbnN0cnVjdG9yIGV4dGVuZHMgbmV3IEBcblxuY2xhc3MgQ2FydGVzaXVzXG5cdGNvbnN0cnVjdG9yIDogKHgseSxjKSAtPlxuXHRnbyAgICAgICAgICA6IChkeCxkeSkgLT5cblx0ZG93biAgICAgICAgOiAoZCkgLT5cblx0bGVmdCAgICAgICAgOiAoZCkgLT5cblxuY2xhc3MgQnJhaWRlciBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdGJyYWlkICAgOiAodHlwZSkgLT5cblx0ZHJhdyAgICA6IC0+XG5cdGZvcndhcmQgOiAtPlxuXHRiYWNrICAgIDogLT5cbmFwcCA9IG5ldyBCcmFpZGVyXG5cIlwiXCJcblxuXHRhOlwiXCJcIlxuY2xhc3MgQ2FydGVzaXVzXG5cdGNvbnN0cnVjdG9yIDogKEB4LEB5LEBjKSAtPlxuXHRnbyA6IChkeCxkeSkgLT5cblx0XHRzY2MgQGNcblx0XHRsaW5lIEB4LEB5LEB4K2R4LEB5K2R5XG5cdFx0W0B4LEB5XSA9IFtAeCtkeCxAeStkeV1cblx0ZG93biA6IChkKSAtPiBAZ28gMCxkXG5cdGxlZnQgOiAoZCkgLT4gQGdvIC1kLDBcblxuY2xhc3MgQnJhaWRlciBleHRlbmRzIEFwcGxpY2F0aW9uXG5cblx0YnJhaWQgOiAoQHR5cGUpIC0+XG5cdFx0QG4gPSAwXG5cdFx0QGZvcndhcmQoKVxuXHRkcmF3IDogLT5cblx0XHRpZiBAdHlwZT09MVxuXHRcdFx0c3cgNVxuXHRcdFx0YSA9IG5ldyBDYXJ0ZXNpdXMgMjAwLDIwLCAxICMgcsO2ZFxuXHRcdFx0Zm9yIGkgaW4gcmFuZ2UgQG5cblx0XHRcdFx0YS5nbyAtMjAsMjBcblx0XHRpZiBAdHlwZT09MlxuXHRcdFx0c3cgNVxuXHRcdFx0YSA9IG5ldyBDYXJ0ZXNpdXMgMjAwLDIwLCAxICMgcsO2ZFxuXHRcdFx0YiA9IG5ldyBDYXJ0ZXNpdXMgMTkwLDEwLCAyICMgZ3LDtm5cblx0XHRcdGZvciBpIGluIHJhbmdlIEBuXG5cdFx0XHRcdGlmIGklNCA9PSAwIHRoZW4gYi5kb3duIDIwXG5cdFx0XHRcdGlmIGklNCA9PSAxIHRoZW4gYS5sZWZ0IDIwXG5cdFx0XHRcdGlmIGklNCA9PSAyIHRoZW4gYS5kb3duIDIwXG5cdFx0XHRcdGlmIGklNCA9PSAzIHRoZW4gYi5sZWZ0IDIwXG5cdFx0aWYgQHR5cGU9PTNcblx0XHRcdHN3IDVcblx0XHRcdGEgPSBuZXcgQ2FydGVzaXVzIDIwMCwzMCwgMVxuXHRcdFx0YiA9IG5ldyBDYXJ0ZXNpdXMgMTkwLDEwLCAyXG5cdFx0XHRjID0gbmV3IENhcnRlc2l1cyAxODAsMjAsIDNcblx0XHRcdGZvciBpIGluIHJhbmdlIEBuXG5cdFx0XHRcdGlmIGklNiA9PSAwIHRoZW4gYi5kb3duIDMwXG5cdFx0XHRcdGlmIGklNiA9PSAxIHRoZW4gYS5sZWZ0IDMwXG5cdFx0XHRcdGlmIGklNiA9PSAyIHRoZW4gYy5kb3duIDMwXG5cdFx0XHRcdGlmIGklNiA9PSAzIHRoZW4gYi5sZWZ0IDMwXG5cdFx0XHRcdGlmIGklNiA9PSA0IHRoZW4gYS5kb3duIDMwXG5cdFx0XHRcdGlmIGklNiA9PSA1IHRoZW4gYy5sZWZ0IDMwXG5cdFx0aWYgQHR5cGU9PTRcblx0XHRcdHN3IDEwXG5cdFx0XHRhID0gbmV3IENhcnRlc2l1cyAxNTAsNDAsIDEgIyByw7ZkXG5cdFx0XHRiID0gbmV3IENhcnRlc2l1cyAxNzAsMjAsIDIgIyBncsO2blxuXHRcdFx0YyA9IG5ldyBDYXJ0ZXNpdXMgMTYwLDMwLCAzICMgZ3VsXG5cdFx0XHRkID0gbmV3IENhcnRlc2l1cyAxOTAsNTAsIDQgIyBibMOlXG5cdFx0XHRmb3IgaSBpbiByYW5nZSBAblxuXHRcdFx0XHRpZiBpJTEyID09IDAgdGhlbiBiLmRvd24gNTBcblx0XHRcdFx0aWYgaSUxMiA9PSAxIHRoZW4gYy5sZWZ0IDMwOyBjLmRvd24gMzBcblx0XHRcdFx0aWYgaSUxMiA9PSAyIHRoZW4gZC5sZWZ0IDUwXG5cdFx0XHRcdGlmIGklMTIgPT0gMyB0aGVuIGEuZG93biA1MFxuXHRcdFx0XHRpZiBpJTEyID09IDQgdGhlbiBiLmxlZnQgNTBcblx0XHRcdFx0aWYgaSUxMiA9PSA1IHRoZW4gYy5kb3duIDUwXG5cdFx0XHRcdGlmIGklMTIgPT0gNiB0aGVuIGQubGVmdCAzMDsgZC5kb3duIDMwXG5cdFx0XHRcdGlmIGklMTIgPT0gNyB0aGVuIGEubGVmdCA1MFxuXHRcdFx0XHRpZiBpJTEyID09IDggdGhlbiBiLmxlZnQgMzA7IGIuZG93biAzMFxuXHRcdFx0XHRpZiBpJTEyID09IDkgdGhlbiBkLmRvd24gNTBcblx0XHRcdFx0aWYgaSUxMiA9PSAxMCB0aGVuIGMubGVmdCA1MFxuXHRcdFx0XHRpZiBpJTEyID09IDExIHRoZW4gYS5sZWZ0IDMwOyBhLmRvd24gMzBcblxuXHRmb3J3YXJkIDogLT4gQG4rK1xuXHRiYWNrIDogLT4gQG4tLVxuXG5hcHAgPSBuZXcgQnJhaWRlciBcImFcIlxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJicmFpZCAxfGJyYWlkIDJ8YnJhaWQgM3xicmFpZCA0fGZvcndhcmQoKXxiYWNrKClcIlxuXG5cdGU6XG5cdFx0YnJhaWQgOiBcImh0dHBzOi8vY2RuLnR1dHNwbHVzLmNvbS92ZWN0b3IvdXBsb2Fkcy9sZWdhY3kvdHV0cy8wMDAtMjAxMS8zOTgtaGFpci1icmFpZC82LmpwZ1wiXG5cbiJdfQ==
//# sourceURL=C:\github\p5Dojo\coffee\data\B.coffee