// Generated by CoffeeScript 2.4.1
var ID_BeeHaiku3D, ID_BlackBox2D, ID_Blank, ID_BoardGame, ID_BouncingBalls, ID_Braid, ID_Braider, ID_bg, ID_bg_1, ID_bg_2, ID_bg_3, ID_bg_4;

ID_bg = {
  v: '2018-04-26',
  k: 'bg',
  l: 12,
  h: 0,
  b: "# Välj bakgrundsfärg\n\n# Set background color\n\n# bg r,g,b\n\nbg 0,0,0 # black \nbg 1,0,0 # red\nbg 0,1,0 # green\nbg 0,0,1 # blue\nbg 1,1,1 # white \nbg 0.5, 0.5, 0.5 # gray \n\nbg 0,1,1 # cyan\nbg 1,0,1 # magenta\nbg 1,1,0 # yellow\n\nbg 0   # black \nbg 0.5 # gray\nbg 1   # white",
  a: "bg 1"
};

ID_bg_1 = {
  v: '2018-04-25',
  k: 'bg',
  l: 1,
  h: 1,
  b: "# Första bilden ska du efterlikna.\n# Andra bilden skapas av din kod.\n# Tredje bilden visar skillnaden mellan de två andra. Ska bli svart när du är klar.\n\n# Tryck på PgDn för att komma till sista raden.\n# Skriv in följande kommando: bg 1\n# Kontrollera att de två första bilderna nu är lika, och att den tredje är helt svart.\n\n# Stäng denna övning genom att klicka på knapparna \" - Background1\" och \" + Background2\".",
  a: "bg 1"
};

ID_bg_2 = {
  v: '2018-01-25',
  k: 'bg',
  l: 1,
  h: 1,
  b: "# Listan med gul text på svart bakgrund innehåller kommandon som du behöver.\n# Klicka på dem för att läsa om dem.",
  a: "bg 0.5"
};

ID_bg_3 = {
  v: '2017-04-29',
  k: 'bg',
  l: 1,
  h: 1,
  b: "",
  a: "bg 1,0,0"
};

ID_bg_4 = {
  v: '2017-04-29',
  k: 'bg',
  l: 1,
  h: 1,
  b: "",
  a: "bg 1,1,0"
};

ID_BeeHaiku3D = {
  v: '2017-05-29',
  k: 'bg sc fc range for if quad line operators class []',
  l: 81,
  b: "# . rita/rita ej\n# 123456789 förflyttning\n# i pos i-axel\n# I neg i-axel\n# j pos j-axel\n# J neg J-axel\n# k pos k-axel\n# K neg k-axel\n# Exempel: .9j9I9J9\n\nclass BeeHaiku3D extends Application\n	reset : (n,dx,dy)->\n		super\n	draw : ->\n	enter : ->\n	mousePressed : ->\napp = new BeeHaiku3D",
  a: "class BeeHaiku3D extends Application\n	reset : (n,dx,dy)->\n		super\n		@SHADE = [0.5,0.75,1]\n		@N = n\n		@DX = dx\n		@DY = dy\n		@showGrid = true\n		@clear()\n	clear : -> @blocks = Array(@N*@N*@N).fill 0\n	add : (i,j,k) -> @blocks[@N*@N*k+@N*j+i] = 1\n	draw : ->\n		bg 0.5\n		if @showGrid then @grid()\n		sc()\n		@drawBlock index for index in range @N*@N*@N\n	drawBlock : (index) ->\n		f = (i,j,k) => [100+(@N-i)*2*@DY-2*(@N-j)*@DY, 200-(@N-j)*@DY-(@N-i)*@DY - k*2*@DY]\n		q = (a,b,c,d) -> quad a[0],a[1], b[0],b[1], c[0],c[1], d[0],d[1]\n		ix=index\n		i = ix % @N; ix //= @N\n		j = ix % @N; ix //= @N\n		k = ix\n		block = @blocks[index]\n		if not block? or block==0 then return\n		[r,g,b] = [i/(@N-1),j/(@N-1),k/(@N-1)] # borde vara i,j,k\n		p0 = f i,  j,  k # egentligen osynlig\n		p1 = f i+1,j,  k\n		p2 = f i,  j+1,k\n		p3 = f i+1,j+1,k\n		p4 = f i  ,j,  k+1\n		p5 = f i+1,j,  k+1\n		p6 = f i  ,j+1,k+1\n		p7 = f i+1,j+1,k+1\n		[si,sj,sk] = @SHADE\n		fc r*sj,g*sj,b*sj\n		q p2,p6,p7,p3 # left\n		fc r*si,g*si,b*si\n		q p1,p3,p7,p5 # right\n		fc r*sk,g*sk,b*sk\n		q p4,p5,p7,p6 # roof\n	grid : ->\n		sc 0.75\n		[h2,h3,h4] = [200-2*@N*@DY, 200-@N*@DY, 200]\n		[w2,w3,w4] = [100-@N*@DX,   100,        100+@N*@DX]\n		for i in range @N+1\n			line w3+@DX*i, h4-@DY*i, w2+@DX*i, h3-@DY*i\n			line w2+@DX*i, h3+@DY*i, w3+@DX*i, h2+@DY*i\n	mousePressed : ->\n		@showGrid = not @showGrid\n		@enter()\n	enter : ->\n		@trace = ''\n		move = (di,dj,dk,steps) =>\n			for n in range steps\n				if pen then @add i,j,k\n				i += di\n				j += dj\n				k += dk\n			@trace += steps + ' [' + i + ' ' + j + ' ' + k + '] '\n		i = 0\n		j = 0\n		k = 0\n		dir = 'i'\n		pen = false\n		s = @readText().trim()\n		for c in s\n			if c in 'iIjJkK'\n				dir=c\n				@trace += c\n			else if c=='.' then	pen = not pen\n			else if c==' '\n			else\n				steps = parseInt c\n				if dir=='i' then move 1,0,0,steps\n				else if dir=='I' then move -1,0,0,steps\n				else if dir=='j' then move 0,1,0,steps\n				else if dir=='J' then move 0,-1,0,steps\n				else if dir=='k' then move 0,0,1,steps\n				else if dir=='K' then move 0,0,-1,steps\napp = new BeeHaiku3D \"a\"\n",
  c: {
    app: "reset 2,50,25|reset 10,10,5|reset 17,6,3|enter()"
  },
  e: {
    ForthHaiku: "http://forthsalon.appspot.com/haiku-editor",
    Exempel: 'ForthHaiku3D.html',
    "Beck & Jung": 'https://www.google.se/search?q=beck+jung&tbm=isch&imgil=fTDB34quIvQVtM%253A%253BujSokE1Q4La-QM%253Bhttp%25253A%25252F%25252Fonline.auktionsverket.se%25252F1111%25252F109534-beck-jung-computer-ink-plot&source=iu&pf=m&fir=fTDB34quIvQVtM%253A%252CujSokE1Q4La-QM%252C_&usg=__eBA4v2Ol5RdVComTBJqPkozH59s%3D&biw=1920&bih=1108&dpr=1&ved=0ahUKEwiH0qmqzInUAhVmDZoKHTcYD7wQyjcIQw&ei=hQsmWcf7EOaa6AS3sLzgCw#imgrc=fTDB34quIvQVtM:'
  }
};

ID_BlackBox2D = {
  v: '2017-04-29',
  k: 'bg sc fc range line [] operators int for if text class',
  l: 33,
  b: "class BlackBox2D extends Application\n	reset : ->\n		super\n		@N = 10\n		@SIZE = 20\n		@index = 0\n	up   : -> @index = (@index+1) %% 36\n	down : -> @index = (@index-1) %% 36\n	draw : ->\napp = new BlackBox2D",
  a: "class BlackBox2D extends Application\n	reset : () ->\n		super\n		@N = 10\n		@SIZE = 20\n		@index = 0\n	up   : -> @index = (@index+1) %% 36\n	down : -> @index = (@index-1) %% 36\n	paint : (r,g,b,x,y,txt) ->\n		fc r,g,b\n		if txt? then text txt,x,y else circle x,y,5\n	draw : ->\n		sc()\n		textSize 14\n		textAlign CENTER,CENTER\n		for i in range @N\n			for j in range @N\n				x = @SIZE/2 + @SIZE*i\n				y = @SIZE/2 + @SIZE*j + 1\n				res = @calc i,j\n				if res == true       then @paint 0,1,0,x,y\n				else if res == false then @paint 1,0,0,x,y\n				else if res == 'NaN' then @paint 1,1,0,x,y,'?'\n				else if res >= 100   then @paint 0,1,0,x,y,'..'\n				else if res <= -100  then @paint 1,0,0,x,y,'..'\n				else if res < 0      then @paint 1,0,0,x,y,-res\n				else if res > 0      then @paint 0,1,0,x,y,res\n				else                      @paint 1,1,0,x,y,res\n	fix : (i,j) -> if j == 0 then ['NaN','NaN'] else [i//j, i%j]\n	calc : (i,j) ->\n		n = @N\n		[a,b] = @fix i,j\n		[i, i+j, i-j, i-5, j-6, j*n+i, i*n+j, (n-1-i)*n+n-1-j, (n-1-j)*n+n-1-i, (i-4)*(j-4), i*j, i*i+j*j, i**j, a, b, i%2, (i+j)%2, j&i, i|j, i^j, ~i, i<<j, j>>i, j&(2**i), i==j, i-j==1, i+j==9, i!=j, i>5, i<j, i<=j, i==3 and j==6, i==3 or j==6, (2<i<7) and (1<j<7), 4 <= dist(4.5,4.5,i,j) < 5, (i+j)%2==1][@index]\n\napp = new BlackBox2D \"a\"",
  c: {
    app: "reset()|up()|down()"
  },
  e: {
    Operatorer: "https://www.w3schools.com/jsref/jsref_operators.asp",
    BlackBox: "https://en.wikipedia.org/wiki/Black_box"
  }
};

ID_Blank = {
  v: '2017-05-12',
  k: '',
  l: 0,
  h: 1,
  b: "# Här kan du laborera med egna idéer!",
  a: "a=null"
};

ID_BoardGame = {
  v: '2017-04-29',
  k: 'bg fc sc circle range for ->',
  l: 21,
  b: "class Board extends Application\n	reset : ->\n		super\n	draw  : ->\n	r     : (d) ->\n	d     : (d) ->\n	n     : (d) ->\napp = new Board",
  a: "\nclass Board extends Application\n	reset : ->\n		super\n		@_X = 100\n		@_Y = 100\n		@_d = 18\n		@_r = 7\n		@_n = 5\n	draw : ->\n		bg 1\n		fc 0\n		sc()\n		@one @_d,@_r,@_X-@_n*@_d, @_Y-@_d,2*@_n+1,3\n		@one @_d,@_r,@_X-@_d, @_Y-@_n*@_d,3,2*@_n+1\n	one : (d,r,x0,y0,m,n) ->\n		for i in range m\n			for j in range n\n				circle x0+d*i,y0+d*j,r\n	r : (d) -> @_r += d\n	d : (d) -> @_d += d\n	n : (d) -> @_n += d\n\napp = new Board \"a\"",
  c: {
    app: "reset()|r -1|r +1|d -1|d +1|n -1|n +1"
  }
};

ID_BouncingBalls = {
  v: '2017-04-29',
  k: 'fc sw sc circle operators [] if for class',
  l: 43,
  h: 1,
  b: "class Ball\n	constructor : ->\n	update      : (grav) ->\n	render      : (sel) ->\n\nclass BouncingBalls extends Application\n	classes : -> [Ball]\n	reset   : ->\n		super\n	draw    : ->\n	update  : ->\n	add     : ->\n	delete  : ->\n	selNext : ->\n	selPrev : ->\n	grow    : ->\n	shrink  : ->\n	nextCol : ->\n	prevCol : ->\n	gravity : ->\napp = new BouncingBalls",
  a: "class Ball\n	constructor : ->\n		@x = 100\n		@y = 100\n		@r = 10\n		@c = 1\n		@dx = 3\n		@dy = 4\n	update : (grav) ->\n		@x += @dx\n		@y += @dy\n		if not (@r < @x < 200-@r) then @dx = - @dx\n		if not (@r < @y < 200-@r) then @dy = - @dy\n		if grav and @y < 200-@r then @dy += 1\n	render : (sel) ->\n		fill cc @c\n		sw 2\n		if sel then stroke cct @c else sc()\n		circle @x,@y,@r\n\nclass BouncingBalls extends Application\n	classes : -> [Ball]\n	reset : ->\n		super\n		@balls = []\n		@sel = -1\n		@grav = false\n	draw : ->\n		for ball,i in @balls\n			ball.render i==@sel, @grav\n	update : ->\n		for ball in @balls\n			ball.update(@grav)\n\n	add : ->\n		@balls.push new Ball\n		@sel = @balls.length - 1\n\n	delete :->\n		@balls.splice @sel, 1\n		if @sel >= @balls.length then @sel = @balls.length - 1\n	selNext : -> @sel = (@sel + 1) %% @balls.length\n	selPrev : -> @sel = (@sel - 1) %% @balls.length\n	grow : ->    @balls[@sel].r++\n	shrink : ->  @balls[@sel].r--\n	nextCol : -> @balls[@sel].c = (@balls[@sel].c+1) %% 32\n	prevCol : -> @balls[@sel].c = (@balls[@sel].c-1) %% 32\n	gravity : -> @grav = not @grav\n\napp = new BouncingBalls \"a\"",
  c: {
    app: "reset()|update()|add()|delete()|selNext()|selPrev()|grow()|shrink()|nextCol()|prevCol()|gravity()"
  }
};

ID_Braid = {
  v: '2017-04-29',
  k: 'sc bg sw range for line class',
  l: 19,
  h: 2,
  b: "class Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n\nbraid = (n,dx,dy,width) ->\n\nbraid 5,18,18,6",
  a: "class Cartesius\n	constructor : (@r,@g,@b, @x,@y) ->\n	go : (dx,dy) ->\n		sc @r,@g,@b\n		line @x,@y,@x+dx,@y+dy\n		[@x,@y] = [@x+dx,@y+dy]\n\nbraid = (n,dx,dy,width) ->\n\n	a = new Cartesius 1,0,0, 100-dx/2,dy/3\n	b = new Cartesius 1,1,0, 100+dx/2,2*dy/3\n	c = new Cartesius 0,1,0, 100-dx/2,dy\n\n	bg 0\n	sw width\n\n	for i in range n\n		a.go dx,dy\n		b.go -dx,dy\n		c.go dx,dy\n\n		a.go -dx,dy\n		b.go dx,dy\n		c.go -dx,dy\n\nbraid 5,18,18,6",
  e: {
    braid: "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg",
    Wikipedia: "https://en.wikipedia.org/wiki/Braid"
  }
};

ID_Braider = {
  v: '2017-04-29',
  k: 'sc bg sw range for if operators line class',
  l: 49,
  h: 2,
  b: "class Cartesius\n	constructor : (x,y,c) ->\n	go          : (dx,dy) ->\n	down        : (d) ->\n	left        : (d) ->\n\nclass Braider extends Application\n	braid   : (type) ->\n	draw    : ->\n	forward : ->\n	back    : ->\napp = new Braider",
  a: "class Cartesius\n	constructor : (@x,@y,@c) ->\n	go : (dx,dy) ->\n		stroke cc @c\n		line @x,@y,@x+dx,@y+dy\n		[@x,@y] = [@x+dx,@y+dy]\n	down : (d) -> @go 0,d\n	left : (d) -> @go -d,0\n\nclass Braider extends Application\n\n	braid : (@type) ->\n		@n = 0\n		@forward()\n	draw : ->\n		if @type==1\n			sw 5\n			a = new Cartesius 200,20, 1 # röd\n			for i in range @n\n				a.go -20,20\n		if @type==2\n			sw 5\n			a = new Cartesius 200,20, 1 # röd\n			b = new Cartesius 190,10, 2 # grön\n			for i in range @n\n				if i%4 == 0 then b.down 20\n				if i%4 == 1 then a.left 20\n				if i%4 == 2 then a.down 20\n				if i%4 == 3 then b.left 20\n		if @type==3\n			sw 5\n			a = new Cartesius 200,30, 1\n			b = new Cartesius 190,10, 2\n			c = new Cartesius 180,20, 3\n			for i in range @n\n				if i%6 == 0 then b.down 30\n				if i%6 == 1 then a.left 30\n				if i%6 == 2 then c.down 30\n				if i%6 == 3 then b.left 30\n				if i%6 == 4 then a.down 30\n				if i%6 == 5 then c.left 30\n		if @type==4\n			sw 10\n			a = new Cartesius 150,40, 1 # röd\n			b = new Cartesius 170,20, 2 # grön\n			c = new Cartesius 160,30, 3 # gul\n			d = new Cartesius 190,50, 4 # blå\n			for i in range @n\n				if i%12 == 0 then b.down 50\n				if i%12 == 1 then c.left 30; c.down 30\n				if i%12 == 2 then d.left 50\n				if i%12 == 3 then a.down 50\n				if i%12 == 4 then b.left 50\n				if i%12 == 5 then c.down 50\n				if i%12 == 6 then d.left 30; d.down 30\n				if i%12 == 7 then a.left 50\n				if i%12 == 8 then b.left 30; b.down 30\n				if i%12 == 9 then d.down 50\n				if i%12 == 10 then c.left 50\n				if i%12 == 11 then a.left 30; a.down 30\n\n	forward : -> @n++\n	back : -> @n--\n\napp = new Braider \"a\"",
  c: {
    app: "braid 1|braid 2|braid 3|braid 4|forward()|back()"
  },
  e: {
    braid: "https://cdn.tutsplus.com/vector/uploads/legacy/tuts/000-2011/398-hair-braid/6.jpg"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQi5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcQi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsYUFBQSxFQUFBLGFBQUEsRUFBQSxRQUFBLEVBQUEsWUFBQSxFQUFBLGdCQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUE7O0FBQUEsS0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFHLFlBQUg7RUFDQSxDQUFBLEVBQUcsSUFESDtFQUVBLENBQUEsRUFBRyxFQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxDQUFBLEVBQUcsK1JBSkg7RUEwQkEsQ0FBQSxFQUFHO0FBMUJIOztBQThCRCxPQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUcsWUFBSDtFQUNBLENBQUEsRUFBRyxJQURIO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLENBQUEsRUFBRyw0YUFKSDtFQWVBLENBQUEsRUFBRztBQWZIOztBQWlCRCxPQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUcsWUFBSDtFQUNBLENBQUEsRUFBRyxJQURIO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLENBQUEsRUFBRyxvSEFKSDtFQVFBLENBQUEsRUFBRztBQVJIOztBQVVELE9BQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLElBREY7RUFFQSxDQUFBLEVBQUUsQ0FGRjtFQUdBLENBQUEsRUFBRSxDQUhGO0VBSUEsQ0FBQSxFQUFHLEVBSkg7RUFLQSxDQUFBLEVBQUc7QUFMSDs7QUFPRCxPQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxJQURGO0VBRUEsQ0FBQSxFQUFFLENBRkY7RUFHQSxDQUFBLEVBQUUsQ0FIRjtFQUlBLENBQUEsRUFBRyxFQUpIO0VBS0EsQ0FBQSxFQUFHO0FBTEg7O0FBT0QsYUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsb0RBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRSwyU0FIRjtFQXNCQSxDQUFBLEVBQUUsa2xFQXRCRjtFQTBHQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU07RUFBTixDQTNHRDtFQTRHQSxDQUFBLEVBQ0M7SUFBQSxVQUFBLEVBQWEsNENBQWI7SUFDQSxPQUFBLEVBQVUsbUJBRFY7SUFFQSxhQUFBLEVBQWdCO0VBRmhCO0FBN0dEOztBQWlIRCxhQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx3REFERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLGlOQUhGO0VBZUEsQ0FBQSxFQUFFLGl5Q0FmRjtFQW9EQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU07RUFBTixDQXJERDtFQXNEQSxDQUFBLEVBQ0M7SUFBQSxVQUFBLEVBQWEscURBQWI7SUFDQSxRQUFBLEVBQVc7RUFEWDtBQXZERDs7QUEwREQsUUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsRUFERjtFQUVBLENBQUEsRUFBRSxDQUZGO0VBR0EsQ0FBQSxFQUFFLENBSEY7RUFJQSxDQUFBLEVBQUcsdUNBSkg7RUFPQSxDQUFBLEVBQUc7QUFQSDs7QUFTRCxZQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSw4QkFERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLHdJQUhGO0VBYUEsQ0FBQSxFQUFFLGtiQWJGO0VBdUNBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTTtFQUFOO0FBeENEOztBQTBDRCxnQkFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsMkNBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRSxDQUhGO0VBSUEsQ0FBQSxFQUFJLHlXQUpKO0VBNEJBLENBQUEsRUFBRSx1bkNBNUJGO0VBZ0ZBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTTtFQUFOO0FBakZEOztBQW1GRCxRQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSwrQkFERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLENBSEY7RUFJQSxDQUFBLEVBQUkseUhBSko7RUFjQSxDQUFBLEVBQUUsNGJBZEY7RUEwQ0EsQ0FBQSxFQUNDO0lBQUEsS0FBQSxFQUFRLG1GQUFSO0lBQ0EsU0FBQSxFQUFZO0VBRFo7QUEzQ0Q7O0FBOENELFVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDRDQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsQ0FIRjtFQUlBLENBQUEsRUFBRyxnUEFKSDtFQW1CQSxDQUFBLEVBQUUseW9EQW5CRjtFQXNGQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU07RUFBTixDQXZGRDtFQXlGQSxDQUFBLEVBQ0M7SUFBQSxLQUFBLEVBQVE7RUFBUjtBQTFGRCIsInNvdXJjZXNDb250ZW50IjpbIklEX2JnID1cblx0djogJzIwMTgtMDQtMjYnXG5cdGs6ICdiZydcblx0bDogMTJcblx0aDogMFxuXHRiOiBcIlwiXCJcbiMgVsOkbGogYmFrZ3J1bmRzZsOkcmdcblxuIyBTZXQgYmFja2dyb3VuZCBjb2xvclxuXG4jIGJnIHIsZyxiXG5cbmJnIDAsMCwwICMgYmxhY2sgXG5iZyAxLDAsMCAjIHJlZFxuYmcgMCwxLDAgIyBncmVlblxuYmcgMCwwLDEgIyBibHVlXG5iZyAxLDEsMSAjIHdoaXRlIFxuYmcgMC41LCAwLjUsIDAuNSAjIGdyYXkgXG5cbmJnIDAsMSwxICMgY3lhblxuYmcgMSwwLDEgIyBtYWdlbnRhXG5iZyAxLDEsMCAjIHllbGxvd1xuXG5iZyAwICAgIyBibGFjayBcbmJnIDAuNSAjIGdyYXlcbmJnIDEgICAjIHdoaXRlXG5cIlwiXCJcblx0YTogXCJcIlwiXG5iZyAxXG5cIlwiXCJcblxuSURfYmdfMSA9XG5cdHY6ICcyMDE4LTA0LTI1J1xuXHRrOiAnYmcnXG5cdGw6IDFcblx0aDogMVxuXHRiOiBcIlwiXCJcbiMgRsO2cnN0YSBiaWxkZW4gc2thIGR1IGVmdGVybGlrbmEuXG4jIEFuZHJhIGJpbGRlbiBza2FwYXMgYXYgZGluIGtvZC5cbiMgVHJlZGplIGJpbGRlbiB2aXNhciBza2lsbG5hZGVuIG1lbGxhbiBkZSB0dsOlIGFuZHJhLiBTa2EgYmxpIHN2YXJ0IG7DpHIgZHUgw6RyIGtsYXIuXG5cbiMgVHJ5Y2sgcMOlIFBnRG4gZsO2ciBhdHQga29tbWEgdGlsbCBzaXN0YSByYWRlbi5cbiMgU2tyaXYgaW4gZsO2bGphbmRlIGtvbW1hbmRvOiBiZyAxXG4jIEtvbnRyb2xsZXJhIGF0dCBkZSB0dsOlIGbDtnJzdGEgYmlsZGVybmEgbnUgw6RyIGxpa2EsIG9jaCBhdHQgZGVuIHRyZWRqZSDDpHIgaGVsdCBzdmFydC5cblxuIyBTdMOkbmcgZGVubmEgw7Z2bmluZyBnZW5vbSBhdHQga2xpY2thIHDDpSBrbmFwcGFybmEgXCIgLSBCYWNrZ3JvdW5kMVwiIG9jaCBcIiArIEJhY2tncm91bmQyXCIuXG5cIlwiXCJcblx0YTogXCJiZyAxXCJcblxuSURfYmdfMiA9XG5cdHY6ICcyMDE4LTAxLTI1J1xuXHRrOiAnYmcnXG5cdGw6IDFcblx0aDogMVxuXHRiOiBcIlwiXCJcbiMgTGlzdGFuIG1lZCBndWwgdGV4dCBww6Ugc3ZhcnQgYmFrZ3J1bmQgaW5uZWjDpWxsZXIga29tbWFuZG9uIHNvbSBkdSBiZWjDtnZlci5cbiMgS2xpY2thIHDDpSBkZW0gZsO2ciBhdHQgbMOkc2Egb20gZGVtLlxuXHRcIlwiXCJcblx0YTogXCJiZyAwLjVcIlxuXG5JRF9iZ18zID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcnXG5cdGw6MVxuXHRoOjFcblx0YjogXCJcIlxuXHRhOiBcImJnIDEsMCwwXCJcblxuSURfYmdfNCA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2JnJ1xuXHRsOjFcblx0aDoxXG5cdGI6IFwiXCJcblx0YTogXCJiZyAxLDEsMFwiXG5cbklEX0JlZUhhaWt1M0QgPVxuXHR2OicyMDE3LTA1LTI5J1xuXHRrOidiZyBzYyBmYyByYW5nZSBmb3IgaWYgcXVhZCBsaW5lIG9wZXJhdG9ycyBjbGFzcyBbXSdcblx0bDo4MVxuXHRiOlwiXCJcIlxuIyAuIHJpdGEvcml0YSBlalxuIyAxMjM0NTY3ODkgZsO2cmZseXR0bmluZ1xuIyBpIHBvcyBpLWF4ZWxcbiMgSSBuZWcgaS1heGVsXG4jIGogcG9zIGotYXhlbFxuIyBKIG5lZyBKLWF4ZWxcbiMgayBwb3Mgay1heGVsXG4jIEsgbmVnIGstYXhlbFxuIyBFeGVtcGVsOiAuOWo5STlKOVxuXG5jbGFzcyBCZWVIYWlrdTNEIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAobixkeCxkeSktPlxuXHRcdHN1cGVyXG5cdGRyYXcgOiAtPlxuXHRlbnRlciA6IC0+XG5cdG1vdXNlUHJlc3NlZCA6IC0+XG5hcHAgPSBuZXcgQmVlSGFpa3UzRFxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBCZWVIYWlrdTNEIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAobixkeCxkeSktPlxuXHRcdHN1cGVyXG5cdFx0QFNIQURFID0gWzAuNSwwLjc1LDFdXG5cdFx0QE4gPSBuXG5cdFx0QERYID0gZHhcblx0XHRARFkgPSBkeVxuXHRcdEBzaG93R3JpZCA9IHRydWVcblx0XHRAY2xlYXIoKVxuXHRjbGVhciA6IC0+IEBibG9ja3MgPSBBcnJheShATipATipATikuZmlsbCAwXG5cdGFkZCA6IChpLGosaykgLT4gQGJsb2Nrc1tATipATiprK0BOKmoraV0gPSAxXG5cdGRyYXcgOiAtPlxuXHRcdGJnIDAuNVxuXHRcdGlmIEBzaG93R3JpZCB0aGVuIEBncmlkKClcblx0XHRzYygpXG5cdFx0QGRyYXdCbG9jayBpbmRleCBmb3IgaW5kZXggaW4gcmFuZ2UgQE4qQE4qQE5cblx0ZHJhd0Jsb2NrIDogKGluZGV4KSAtPlxuXHRcdGYgPSAoaSxqLGspID0+IFsxMDArKEBOLWkpKjIqQERZLTIqKEBOLWopKkBEWSwgMjAwLShATi1qKSpARFktKEBOLWkpKkBEWSAtIGsqMipARFldXG5cdFx0cSA9IChhLGIsYyxkKSAtPiBxdWFkIGFbMF0sYVsxXSwgYlswXSxiWzFdLCBjWzBdLGNbMV0sIGRbMF0sZFsxXVxuXHRcdGl4PWluZGV4XG5cdFx0aSA9IGl4ICUgQE47IGl4IC8vPSBATlxuXHRcdGogPSBpeCAlIEBOOyBpeCAvLz0gQE5cblx0XHRrID0gaXhcblx0XHRibG9jayA9IEBibG9ja3NbaW5kZXhdXG5cdFx0aWYgbm90IGJsb2NrPyBvciBibG9jaz09MCB0aGVuIHJldHVyblxuXHRcdFtyLGcsYl0gPSBbaS8oQE4tMSksai8oQE4tMSksay8oQE4tMSldICMgYm9yZGUgdmFyYSBpLGosa1xuXHRcdHAwID0gZiBpLCAgaiwgIGsgIyBlZ2VudGxpZ2VuIG9zeW5saWdcblx0XHRwMSA9IGYgaSsxLGosICBrXG5cdFx0cDIgPSBmIGksICBqKzEsa1xuXHRcdHAzID0gZiBpKzEsaisxLGtcblx0XHRwNCA9IGYgaSAgLGosICBrKzFcblx0XHRwNSA9IGYgaSsxLGosICBrKzFcblx0XHRwNiA9IGYgaSAgLGorMSxrKzFcblx0XHRwNyA9IGYgaSsxLGorMSxrKzFcblx0XHRbc2ksc2osc2tdID0gQFNIQURFXG5cdFx0ZmMgcipzaixnKnNqLGIqc2pcblx0XHRxIHAyLHA2LHA3LHAzICMgbGVmdFxuXHRcdGZjIHIqc2ksZypzaSxiKnNpXG5cdFx0cSBwMSxwMyxwNyxwNSAjIHJpZ2h0XG5cdFx0ZmMgcipzayxnKnNrLGIqc2tcblx0XHRxIHA0LHA1LHA3LHA2ICMgcm9vZlxuXHRncmlkIDogLT5cblx0XHRzYyAwLjc1XG5cdFx0W2gyLGgzLGg0XSA9IFsyMDAtMipATipARFksIDIwMC1ATipARFksIDIwMF1cblx0XHRbdzIsdzMsdzRdID0gWzEwMC1ATipARFgsICAgMTAwLCAgICAgICAgMTAwK0BOKkBEWF1cblx0XHRmb3IgaSBpbiByYW5nZSBATisxXG5cdFx0XHRsaW5lIHczK0BEWCppLCBoNC1ARFkqaSwgdzIrQERYKmksIGgzLUBEWSppXG5cdFx0XHRsaW5lIHcyK0BEWCppLCBoMytARFkqaSwgdzMrQERYKmksIGgyK0BEWSppXG5cdG1vdXNlUHJlc3NlZCA6IC0+XG5cdFx0QHNob3dHcmlkID0gbm90IEBzaG93R3JpZFxuXHRcdEBlbnRlcigpXG5cdGVudGVyIDogLT5cblx0XHRAdHJhY2UgPSAnJ1xuXHRcdG1vdmUgPSAoZGksZGosZGssc3RlcHMpID0+XG5cdFx0XHRmb3IgbiBpbiByYW5nZSBzdGVwc1xuXHRcdFx0XHRpZiBwZW4gdGhlbiBAYWRkIGksaixrXG5cdFx0XHRcdGkgKz0gZGlcblx0XHRcdFx0aiArPSBkalxuXHRcdFx0XHRrICs9IGRrXG5cdFx0XHRAdHJhY2UgKz0gc3RlcHMgKyAnIFsnICsgaSArICcgJyArIGogKyAnICcgKyBrICsgJ10gJ1xuXHRcdGkgPSAwXG5cdFx0aiA9IDBcblx0XHRrID0gMFxuXHRcdGRpciA9ICdpJ1xuXHRcdHBlbiA9IGZhbHNlXG5cdFx0cyA9IEByZWFkVGV4dCgpLnRyaW0oKVxuXHRcdGZvciBjIGluIHNcblx0XHRcdGlmIGMgaW4gJ2lJakprSydcblx0XHRcdFx0ZGlyPWNcblx0XHRcdFx0QHRyYWNlICs9IGNcblx0XHRcdGVsc2UgaWYgYz09Jy4nIHRoZW5cdHBlbiA9IG5vdCBwZW5cblx0XHRcdGVsc2UgaWYgYz09JyAnXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHN0ZXBzID0gcGFyc2VJbnQgY1xuXHRcdFx0XHRpZiBkaXI9PSdpJyB0aGVuIG1vdmUgMSwwLDAsc3RlcHNcblx0XHRcdFx0ZWxzZSBpZiBkaXI9PSdJJyB0aGVuIG1vdmUgLTEsMCwwLHN0ZXBzXG5cdFx0XHRcdGVsc2UgaWYgZGlyPT0naicgdGhlbiBtb3ZlIDAsMSwwLHN0ZXBzXG5cdFx0XHRcdGVsc2UgaWYgZGlyPT0nSicgdGhlbiBtb3ZlIDAsLTEsMCxzdGVwc1xuXHRcdFx0XHRlbHNlIGlmIGRpcj09J2snIHRoZW4gbW92ZSAwLDAsMSxzdGVwc1xuXHRcdFx0XHRlbHNlIGlmIGRpcj09J0snIHRoZW4gbW92ZSAwLDAsLTEsc3RlcHNcbmFwcCA9IG5ldyBCZWVIYWlrdTNEIFwiYVwiXG5cblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQgMiw1MCwyNXxyZXNldCAxMCwxMCw1fHJlc2V0IDE3LDYsM3xlbnRlcigpXCJcblx0ZTpcblx0XHRGb3J0aEhhaWt1IDogXCJodHRwOi8vZm9ydGhzYWxvbi5hcHBzcG90LmNvbS9oYWlrdS1lZGl0b3JcIlxuXHRcdEV4ZW1wZWwgOiAnRm9ydGhIYWlrdTNELmh0bWwnXG5cdFx0XCJCZWNrICYgSnVuZ1wiIDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zZS9zZWFyY2g/cT1iZWNrK2p1bmcmdGJtPWlzY2gmaW1naWw9ZlREQjM0cXVJdlFWdE0lMjUzQSUyNTNCdWpTb2tFMVE0TGEtUU0lMjUzQmh0dHAlMjUyNTNBJTI1MjUyRiUyNTI1MkZvbmxpbmUuYXVrdGlvbnN2ZXJrZXQuc2UlMjUyNTJGMTExMSUyNTI1MkYxMDk1MzQtYmVjay1qdW5nLWNvbXB1dGVyLWluay1wbG90JnNvdXJjZT1pdSZwZj1tJmZpcj1mVERCMzRxdUl2UVZ0TSUyNTNBJTI1MkN1alNva0UxUTRMYS1RTSUyNTJDXyZ1c2c9X19lQkE0djJPbDVSZFZDb21UQkpxUGtvekg1OXMlM0QmYml3PTE5MjAmYmloPTExMDgmZHByPTEmdmVkPTBhaFVLRXdpSDBxbXF6SW5VQWhWbURab0tIVGNZRDd3UXlqY0lRdyZlaT1oUXNtV2NmN0VPYWE2QVMzc0x6Z0N3I2ltZ3JjPWZUREIzNHF1SXZRVnRNOidcblxuSURfQmxhY2tCb3gyRCA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2JnIHNjIGZjIHJhbmdlIGxpbmUgW10gb3BlcmF0b3JzIGludCBmb3IgaWYgdGV4dCBjbGFzcydcblx0bDozM1xuXHRiOlwiXCJcIlxuY2xhc3MgQmxhY2tCb3gyRCBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBOID0gMTBcblx0XHRAU0laRSA9IDIwXG5cdFx0QGluZGV4ID0gMFxuXHR1cCAgIDogLT4gQGluZGV4ID0gKEBpbmRleCsxKSAlJSAzNlxuXHRkb3duIDogLT4gQGluZGV4ID0gKEBpbmRleC0xKSAlJSAzNlxuXHRkcmF3IDogLT5cbmFwcCA9IG5ldyBCbGFja0JveDJEXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIEJsYWNrQm94MkQgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6ICgpIC0+XG5cdFx0c3VwZXJcblx0XHRATiA9IDEwXG5cdFx0QFNJWkUgPSAyMFxuXHRcdEBpbmRleCA9IDBcblx0dXAgICA6IC0+IEBpbmRleCA9IChAaW5kZXgrMSkgJSUgMzZcblx0ZG93biA6IC0+IEBpbmRleCA9IChAaW5kZXgtMSkgJSUgMzZcblx0cGFpbnQgOiAocixnLGIseCx5LHR4dCkgLT5cblx0XHRmYyByLGcsYlxuXHRcdGlmIHR4dD8gdGhlbiB0ZXh0IHR4dCx4LHkgZWxzZSBjaXJjbGUgeCx5LDVcblx0ZHJhdyA6IC0+XG5cdFx0c2MoKVxuXHRcdHRleHRTaXplIDE0XG5cdFx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcblx0XHRmb3IgaSBpbiByYW5nZSBATlxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgQE5cblx0XHRcdFx0eCA9IEBTSVpFLzIgKyBAU0laRSppXG5cdFx0XHRcdHkgPSBAU0laRS8yICsgQFNJWkUqaiArIDFcblx0XHRcdFx0cmVzID0gQGNhbGMgaSxqXG5cdFx0XHRcdGlmIHJlcyA9PSB0cnVlICAgICAgIHRoZW4gQHBhaW50IDAsMSwwLHgseVxuXHRcdFx0XHRlbHNlIGlmIHJlcyA9PSBmYWxzZSB0aGVuIEBwYWludCAxLDAsMCx4LHlcblx0XHRcdFx0ZWxzZSBpZiByZXMgPT0gJ05hTicgdGhlbiBAcGFpbnQgMSwxLDAseCx5LCc/J1xuXHRcdFx0XHRlbHNlIGlmIHJlcyA+PSAxMDAgICB0aGVuIEBwYWludCAwLDEsMCx4LHksJy4uJ1xuXHRcdFx0XHRlbHNlIGlmIHJlcyA8PSAtMTAwICB0aGVuIEBwYWludCAxLDAsMCx4LHksJy4uJ1xuXHRcdFx0XHRlbHNlIGlmIHJlcyA8IDAgICAgICB0aGVuIEBwYWludCAxLDAsMCx4LHksLXJlc1xuXHRcdFx0XHRlbHNlIGlmIHJlcyA+IDAgICAgICB0aGVuIEBwYWludCAwLDEsMCx4LHkscmVzXG5cdFx0XHRcdGVsc2UgICAgICAgICAgICAgICAgICAgICAgQHBhaW50IDEsMSwwLHgseSxyZXNcblx0Zml4IDogKGksaikgLT4gaWYgaiA9PSAwIHRoZW4gWydOYU4nLCdOYU4nXSBlbHNlIFtpLy9qLCBpJWpdXG5cdGNhbGMgOiAoaSxqKSAtPlxuXHRcdG4gPSBATlxuXHRcdFthLGJdID0gQGZpeCBpLGpcblx0XHRbaSwgaStqLCBpLWosIGktNSwgai02LCBqKm4raSwgaSpuK2osIChuLTEtaSkqbituLTEtaiwgKG4tMS1qKSpuK24tMS1pLCAoaS00KSooai00KSwgaSpqLCBpKmkraipqLCBpKipqLCBhLCBiLCBpJTIsIChpK2opJTIsIGomaSwgaXxqLCBpXmosIH5pLCBpPDxqLCBqPj5pLCBqJigyKippKSwgaT09aiwgaS1qPT0xLCBpK2o9PTksIGkhPWosIGk+NSwgaTxqLCBpPD1qLCBpPT0zIGFuZCBqPT02LCBpPT0zIG9yIGo9PTYsICgyPGk8NykgYW5kICgxPGo8NyksIDQgPD0gZGlzdCg0LjUsNC41LGksaikgPCA1LCAoaStqKSUyPT0xXVtAaW5kZXhdXG5cbmFwcCA9IG5ldyBCbGFja0JveDJEIFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8dXAoKXxkb3duKClcIlxuXHRlOlxuXHRcdE9wZXJhdG9yZXIgOiBcImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vanNyZWYvanNyZWZfb3BlcmF0b3JzLmFzcFwiXG5cdFx0QmxhY2tCb3ggOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JsYWNrX2JveFwiXG5cbklEX0JsYW5rID1cblx0djonMjAxNy0wNS0xMidcblx0azonJ1xuXHRsOjBcblx0aDoxXG5cdGI6IFwiXCJcIlxuIyBIw6RyIGthbiBkdSBsYWJvcmVyYSBtZWQgZWduYSBpZMOpZXIhXG5cIlwiXCJcblx0YTogXCJhPW51bGxcIlxuXG5JRF9Cb2FyZEdhbWUgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidiZyBmYyBzYyBjaXJjbGUgcmFuZ2UgZm9yIC0+J1xuXHRsOjIxXG5cdGI6XCJcIlwiXG5jbGFzcyBCb2FyZCBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRkcmF3ICA6IC0+XG5cdHIgICAgIDogKGQpIC0+XG5cdGQgICAgIDogKGQpIC0+XG5cdG4gICAgIDogKGQpIC0+XG5hcHAgPSBuZXcgQm9hcmRcblwiXCJcIlxuXHRhOlwiXCJcIlxuXG5jbGFzcyBCb2FyZCBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBfWCA9IDEwMFxuXHRcdEBfWSA9IDEwMFxuXHRcdEBfZCA9IDE4XG5cdFx0QF9yID0gN1xuXHRcdEBfbiA9IDVcblx0ZHJhdyA6IC0+XG5cdFx0YmcgMVxuXHRcdGZjIDBcblx0XHRzYygpXG5cdFx0QG9uZSBAX2QsQF9yLEBfWC1AX24qQF9kLCBAX1ktQF9kLDIqQF9uKzEsM1xuXHRcdEBvbmUgQF9kLEBfcixAX1gtQF9kLCBAX1ktQF9uKkBfZCwzLDIqQF9uKzFcblx0b25lIDogKGQscix4MCx5MCxtLG4pIC0+XG5cdFx0Zm9yIGkgaW4gcmFuZ2UgbVxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgblxuXHRcdFx0XHRjaXJjbGUgeDArZCppLHkwK2QqaixyXG5cdHIgOiAoZCkgLT4gQF9yICs9IGRcblx0ZCA6IChkKSAtPiBAX2QgKz0gZFxuXHRuIDogKGQpIC0+IEBfbiArPSBkXG5cbmFwcCA9IG5ldyBCb2FyZCBcImFcIlxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpfHIgLTF8ciArMXxkIC0xfGQgKzF8biAtMXxuICsxXCJcblxuSURfQm91bmNpbmdCYWxscyA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2ZjIHN3IHNjIGNpcmNsZSBvcGVyYXRvcnMgW10gaWYgZm9yIGNsYXNzJ1xuXHRsOjQzXG5cdGg6MVxuXHRiIDogXCJcIlwiXG5jbGFzcyBCYWxsXG5cdGNvbnN0cnVjdG9yIDogLT5cblx0dXBkYXRlICAgICAgOiAoZ3JhdikgLT5cblx0cmVuZGVyICAgICAgOiAoc2VsKSAtPlxuXG5jbGFzcyBCb3VuY2luZ0JhbGxzIGV4dGVuZHMgQXBwbGljYXRpb25cblx0Y2xhc3NlcyA6IC0+IFtCYWxsXVxuXHRyZXNldCAgIDogLT5cblx0XHRzdXBlclxuXHRkcmF3ICAgIDogLT5cblx0dXBkYXRlICA6IC0+XG5cdGFkZCAgICAgOiAtPlxuXHRkZWxldGUgIDogLT5cblx0c2VsTmV4dCA6IC0+XG5cdHNlbFByZXYgOiAtPlxuXHRncm93ICAgIDogLT5cblx0c2hyaW5rICA6IC0+XG5cdG5leHRDb2wgOiAtPlxuXHRwcmV2Q29sIDogLT5cblx0Z3Jhdml0eSA6IC0+XG5hcHAgPSBuZXcgQm91bmNpbmdCYWxsc1xuXCJcIlwiXG5cblx0YTpcIlwiXCJcbmNsYXNzIEJhbGxcblx0Y29uc3RydWN0b3IgOiAtPlxuXHRcdEB4ID0gMTAwXG5cdFx0QHkgPSAxMDBcblx0XHRAciA9IDEwXG5cdFx0QGMgPSAxXG5cdFx0QGR4ID0gM1xuXHRcdEBkeSA9IDRcblx0dXBkYXRlIDogKGdyYXYpIC0+XG5cdFx0QHggKz0gQGR4XG5cdFx0QHkgKz0gQGR5XG5cdFx0aWYgbm90IChAciA8IEB4IDwgMjAwLUByKSB0aGVuIEBkeCA9IC0gQGR4XG5cdFx0aWYgbm90IChAciA8IEB5IDwgMjAwLUByKSB0aGVuIEBkeSA9IC0gQGR5XG5cdFx0aWYgZ3JhdiBhbmQgQHkgPCAyMDAtQHIgdGhlbiBAZHkgKz0gMVxuXHRyZW5kZXIgOiAoc2VsKSAtPlxuXHRcdGZpbGwgY2MgQGNcblx0XHRzdyAyXG5cdFx0aWYgc2VsIHRoZW4gc3Ryb2tlIGNjdCBAYyBlbHNlIHNjKClcblx0XHRjaXJjbGUgQHgsQHksQHJcblxuY2xhc3MgQm91bmNpbmdCYWxscyBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdGNsYXNzZXMgOiAtPiBbQmFsbF1cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QGJhbGxzID0gW11cblx0XHRAc2VsID0gLTFcblx0XHRAZ3JhdiA9IGZhbHNlXG5cdGRyYXcgOiAtPlxuXHRcdGZvciBiYWxsLGkgaW4gQGJhbGxzXG5cdFx0XHRiYWxsLnJlbmRlciBpPT1Ac2VsLCBAZ3JhdlxuXHR1cGRhdGUgOiAtPlxuXHRcdGZvciBiYWxsIGluIEBiYWxsc1xuXHRcdFx0YmFsbC51cGRhdGUoQGdyYXYpXG5cblx0YWRkIDogLT5cblx0XHRAYmFsbHMucHVzaCBuZXcgQmFsbFxuXHRcdEBzZWwgPSBAYmFsbHMubGVuZ3RoIC0gMVxuXG5cdGRlbGV0ZSA6LT5cblx0XHRAYmFsbHMuc3BsaWNlIEBzZWwsIDFcblx0XHRpZiBAc2VsID49IEBiYWxscy5sZW5ndGggdGhlbiBAc2VsID0gQGJhbGxzLmxlbmd0aCAtIDFcblx0c2VsTmV4dCA6IC0+IEBzZWwgPSAoQHNlbCArIDEpICUlIEBiYWxscy5sZW5ndGhcblx0c2VsUHJldiA6IC0+IEBzZWwgPSAoQHNlbCAtIDEpICUlIEBiYWxscy5sZW5ndGhcblx0Z3JvdyA6IC0+ICAgIEBiYWxsc1tAc2VsXS5yKytcblx0c2hyaW5rIDogLT4gIEBiYWxsc1tAc2VsXS5yLS1cblx0bmV4dENvbCA6IC0+IEBiYWxsc1tAc2VsXS5jID0gKEBiYWxsc1tAc2VsXS5jKzEpICUlIDMyXG5cdHByZXZDb2wgOiAtPiBAYmFsbHNbQHNlbF0uYyA9IChAYmFsbHNbQHNlbF0uYy0xKSAlJSAzMlxuXHRncmF2aXR5IDogLT4gQGdyYXYgPSBub3QgQGdyYXZcblxuYXBwID0gbmV3IEJvdW5jaW5nQmFsbHMgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXx1cGRhdGUoKXxhZGQoKXxkZWxldGUoKXxzZWxOZXh0KCl8c2VsUHJldigpfGdyb3coKXxzaHJpbmsoKXxuZXh0Q29sKCl8cHJldkNvbCgpfGdyYXZpdHkoKVwiXG5cbklEX0JyYWlkID1cblx0djonMjAxNy0wNC0yOSdcblx0azonc2MgYmcgc3cgcmFuZ2UgZm9yIGxpbmUgY2xhc3MnXG5cdGw6MTlcblx0aDoyXG5cdGIgOiBcIlwiXCJcbmNsYXNzIENhcnRlc2l1c1xuXHRjb25zdHJ1Y3RvciA6IChAcixAZyxAYiwgQHgsQHkpIC0+XG5cdGdvIDogKGR4LGR5KSAtPlxuXG5icmFpZCA9IChuLGR4LGR5LHdpZHRoKSAtPlxuXG5icmFpZCA1LDE4LDE4LDZcblwiXCJcIlxuXG5cdGE6XCJcIlwiXG5jbGFzcyBDYXJ0ZXNpdXNcblx0Y29uc3RydWN0b3IgOiAoQHIsQGcsQGIsIEB4LEB5KSAtPlxuXHRnbyA6IChkeCxkeSkgLT5cblx0XHRzYyBAcixAZyxAYlxuXHRcdGxpbmUgQHgsQHksQHgrZHgsQHkrZHlcblx0XHRbQHgsQHldID0gW0B4K2R4LEB5K2R5XVxuXG5icmFpZCA9IChuLGR4LGR5LHdpZHRoKSAtPlxuXG5cdGEgPSBuZXcgQ2FydGVzaXVzIDEsMCwwLCAxMDAtZHgvMixkeS8zXG5cdGIgPSBuZXcgQ2FydGVzaXVzIDEsMSwwLCAxMDArZHgvMiwyKmR5LzNcblx0YyA9IG5ldyBDYXJ0ZXNpdXMgMCwxLDAsIDEwMC1keC8yLGR5XG5cblx0YmcgMFxuXHRzdyB3aWR0aFxuXG5cdGZvciBpIGluIHJhbmdlIG5cblx0XHRhLmdvIGR4LGR5XG5cdFx0Yi5nbyAtZHgsZHlcblx0XHRjLmdvIGR4LGR5XG5cblx0XHRhLmdvIC1keCxkeVxuXHRcdGIuZ28gZHgsZHlcblx0XHRjLmdvIC1keCxkeVxuXG5icmFpZCA1LDE4LDE4LDZcblwiXCJcIlxuXHRlOlxuXHRcdGJyYWlkIDogXCJodHRwczovL2Nkbi50dXRzcGx1cy5jb20vdmVjdG9yL3VwbG9hZHMvbGVnYWN5L3R1dHMvMDAwLTIwMTEvMzk4LWhhaXItYnJhaWQvNi5qcGdcIlxuXHRcdFdpa2lwZWRpYSA6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJhaWRcIlxuXG5JRF9CcmFpZGVyID1cblx0djonMjAxNy0wNC0yOSdcblx0azonc2MgYmcgc3cgcmFuZ2UgZm9yIGlmIG9wZXJhdG9ycyBsaW5lIGNsYXNzJ1xuXHRsOjQ5XG5cdGg6MlxuXHRiOiBcIlwiXCJcbmNsYXNzIENhcnRlc2l1c1xuXHRjb25zdHJ1Y3RvciA6ICh4LHksYykgLT5cblx0Z28gICAgICAgICAgOiAoZHgsZHkpIC0+XG5cdGRvd24gICAgICAgIDogKGQpIC0+XG5cdGxlZnQgICAgICAgIDogKGQpIC0+XG5cbmNsYXNzIEJyYWlkZXIgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRicmFpZCAgIDogKHR5cGUpIC0+XG5cdGRyYXcgICAgOiAtPlxuXHRmb3J3YXJkIDogLT5cblx0YmFjayAgICA6IC0+XG5hcHAgPSBuZXcgQnJhaWRlclxuXCJcIlwiXG5cblx0YTpcIlwiXCJcbmNsYXNzIENhcnRlc2l1c1xuXHRjb25zdHJ1Y3RvciA6IChAeCxAeSxAYykgLT5cblx0Z28gOiAoZHgsZHkpIC0+XG5cdFx0c3Ryb2tlIGNjIEBjXG5cdFx0bGluZSBAeCxAeSxAeCtkeCxAeStkeVxuXHRcdFtAeCxAeV0gPSBbQHgrZHgsQHkrZHldXG5cdGRvd24gOiAoZCkgLT4gQGdvIDAsZFxuXHRsZWZ0IDogKGQpIC0+IEBnbyAtZCwwXG5cbmNsYXNzIEJyYWlkZXIgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXG5cdGJyYWlkIDogKEB0eXBlKSAtPlxuXHRcdEBuID0gMFxuXHRcdEBmb3J3YXJkKClcblx0ZHJhdyA6IC0+XG5cdFx0aWYgQHR5cGU9PTFcblx0XHRcdHN3IDVcblx0XHRcdGEgPSBuZXcgQ2FydGVzaXVzIDIwMCwyMCwgMSAjIHLDtmRcblx0XHRcdGZvciBpIGluIHJhbmdlIEBuXG5cdFx0XHRcdGEuZ28gLTIwLDIwXG5cdFx0aWYgQHR5cGU9PTJcblx0XHRcdHN3IDVcblx0XHRcdGEgPSBuZXcgQ2FydGVzaXVzIDIwMCwyMCwgMSAjIHLDtmRcblx0XHRcdGIgPSBuZXcgQ2FydGVzaXVzIDE5MCwxMCwgMiAjIGdyw7ZuXG5cdFx0XHRmb3IgaSBpbiByYW5nZSBAblxuXHRcdFx0XHRpZiBpJTQgPT0gMCB0aGVuIGIuZG93biAyMFxuXHRcdFx0XHRpZiBpJTQgPT0gMSB0aGVuIGEubGVmdCAyMFxuXHRcdFx0XHRpZiBpJTQgPT0gMiB0aGVuIGEuZG93biAyMFxuXHRcdFx0XHRpZiBpJTQgPT0gMyB0aGVuIGIubGVmdCAyMFxuXHRcdGlmIEB0eXBlPT0zXG5cdFx0XHRzdyA1XG5cdFx0XHRhID0gbmV3IENhcnRlc2l1cyAyMDAsMzAsIDFcblx0XHRcdGIgPSBuZXcgQ2FydGVzaXVzIDE5MCwxMCwgMlxuXHRcdFx0YyA9IG5ldyBDYXJ0ZXNpdXMgMTgwLDIwLCAzXG5cdFx0XHRmb3IgaSBpbiByYW5nZSBAblxuXHRcdFx0XHRpZiBpJTYgPT0gMCB0aGVuIGIuZG93biAzMFxuXHRcdFx0XHRpZiBpJTYgPT0gMSB0aGVuIGEubGVmdCAzMFxuXHRcdFx0XHRpZiBpJTYgPT0gMiB0aGVuIGMuZG93biAzMFxuXHRcdFx0XHRpZiBpJTYgPT0gMyB0aGVuIGIubGVmdCAzMFxuXHRcdFx0XHRpZiBpJTYgPT0gNCB0aGVuIGEuZG93biAzMFxuXHRcdFx0XHRpZiBpJTYgPT0gNSB0aGVuIGMubGVmdCAzMFxuXHRcdGlmIEB0eXBlPT00XG5cdFx0XHRzdyAxMFxuXHRcdFx0YSA9IG5ldyBDYXJ0ZXNpdXMgMTUwLDQwLCAxICMgcsO2ZFxuXHRcdFx0YiA9IG5ldyBDYXJ0ZXNpdXMgMTcwLDIwLCAyICMgZ3LDtm5cblx0XHRcdGMgPSBuZXcgQ2FydGVzaXVzIDE2MCwzMCwgMyAjIGd1bFxuXHRcdFx0ZCA9IG5ldyBDYXJ0ZXNpdXMgMTkwLDUwLCA0ICMgYmzDpVxuXHRcdFx0Zm9yIGkgaW4gcmFuZ2UgQG5cblx0XHRcdFx0aWYgaSUxMiA9PSAwIHRoZW4gYi5kb3duIDUwXG5cdFx0XHRcdGlmIGklMTIgPT0gMSB0aGVuIGMubGVmdCAzMDsgYy5kb3duIDMwXG5cdFx0XHRcdGlmIGklMTIgPT0gMiB0aGVuIGQubGVmdCA1MFxuXHRcdFx0XHRpZiBpJTEyID09IDMgdGhlbiBhLmRvd24gNTBcblx0XHRcdFx0aWYgaSUxMiA9PSA0IHRoZW4gYi5sZWZ0IDUwXG5cdFx0XHRcdGlmIGklMTIgPT0gNSB0aGVuIGMuZG93biA1MFxuXHRcdFx0XHRpZiBpJTEyID09IDYgdGhlbiBkLmxlZnQgMzA7IGQuZG93biAzMFxuXHRcdFx0XHRpZiBpJTEyID09IDcgdGhlbiBhLmxlZnQgNTBcblx0XHRcdFx0aWYgaSUxMiA9PSA4IHRoZW4gYi5sZWZ0IDMwOyBiLmRvd24gMzBcblx0XHRcdFx0aWYgaSUxMiA9PSA5IHRoZW4gZC5kb3duIDUwXG5cdFx0XHRcdGlmIGklMTIgPT0gMTAgdGhlbiBjLmxlZnQgNTBcblx0XHRcdFx0aWYgaSUxMiA9PSAxMSB0aGVuIGEubGVmdCAzMDsgYS5kb3duIDMwXG5cblx0Zm9yd2FyZCA6IC0+IEBuKytcblx0YmFjayA6IC0+IEBuLS1cblxuYXBwID0gbmV3IEJyYWlkZXIgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwiYnJhaWQgMXxicmFpZCAyfGJyYWlkIDN8YnJhaWQgNHxmb3J3YXJkKCl8YmFjaygpXCJcblxuXHRlOlxuXHRcdGJyYWlkIDogXCJodHRwczovL2Nkbi50dXRzcGx1cy5jb20vdmVjdG9yL3VwbG9hZHMvbGVnYWN5L3R1dHMvMDAwLTIwMTEvMzk4LWhhaXItYnJhaWQvNi5qcGdcIlxuXG4iXX0=
//# sourceURL=c:\github\p5Dojo\coffee\data\B.coffee