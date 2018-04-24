'use strict';

// Generated by CoffeeScript 2.0.3
var ID_Scale, ID_SevenSegment, ID_Shortcut, ID_Shortcut2, ID_ShrinkingCircles, ID_SingaporeMult, ID_SingaporeMultComplex, ID_SingaporeMultPolynom, ID_Skislope, ID_Snake, ID_Snake4, ID_SnowWhiteAndThe7Lerps, ID_Sokoban, ID_SpaceShip, ID_Square, ID_SquareHole, ID_Stopwatch, ID_Sunshine, ID_SuperCircle, ID_SuperCircle2;

ID_Scale = {
  v: '2018-04-25',
  k: 'rotate translate scale fc rect',
  l: 7,
  h: 0,
  b: "# scale x,y\n\ntranslate 40,40\nfc()\nrect 0,0,40,20\ntranslate 60,60\nscale 2,2\nfc 1,1,1,0.5\nrect 0,0,40,20",
  a: ""
};

ID_SevenSegment = {
  v: '2017-04-29',
  k: 'bg sc fc rect rectMode if operators [] class',
  l: 31,
  h: 1,
  b: "class Digit extends Application\n	reset : ->\n		super\n	draw  : ->\n	up    : ->\n	down  : ->\napp = new Digit",
  a: "class Digit extends Application\n	reset : ->\n		super\n		@PATTERN = [63,6,91,79,102,109,125,7,127,111]\n		@X=100\n		@Y=100\n		@W=80\n		@H=18\n		@d=0\n	draw : ->\n		bg 0.5\n		sc()\n		fc 1,0,0\n		rectMode CENTER\n		p = @PATTERN[@d]\n		w0 = @W-20\n		if p & 1 then fc 1,0,0 else fc 0.3,0,0\n		rect @X,@Y-@W,w0,@H\n		if p & 2 then fc 1,0,0 else fc 0.3,0,0\n		rect @X+@W/2,@Y-@W/2,@H,w0\n		if p & 4 then fc 1,0,0 else fc 0.3,0,0\n		rect @X+@W/2,@Y+@W/2,@H,w0\n		if p & 8 then fc 1,0,0 else fc 0.3,0,0\n		rect @X,@Y+@W,w0,@H\n		if p & 16 then fc 1,0,0 else fc 0.3,0,0\n		rect @X-@W/2,@Y+@W/2,@H,w0\n		if p & 32 then fc 1,0,0 else fc 0.3,0,0\n		rect @X-@W/2,@Y-@W/2,@H,w0\n		if p & 64 then fc 1,0,0 else fc 0.3,0,0\n		rect @X,@Y,w0,@H\n	mousePressed : (mx,my) -> @d = constrain @d + (if my<100 then 1 else -1), 0, 9\n\napp = new Digit \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    "7 segment": "https://www.google.se/search?q=7+segment&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjg_5n55OrSAhWpZpoKHQP8DxoQ_AUIBigB&biw=1310&bih=945"
  }
};

ID_Shortcut = {
  v: '2017-04-29',
  k: 'bg fc sc range operators [] text for if return {} constrain class',
  l: 65,
  h: 1,
  b: "class Shortcut extends Application\n	reset : ->\n		super\n	draw : ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Shortcut",
  a: "class Shortcut extends Application\n	reset : ->\n		super\n		@W = 33\n		@H = 25\n		@seed = 0\n		@level = 1\n		@buttons = [[50,50,0],[150,50,0],[33,125,'/2'],[100,125,'+2'],[167,125,'*2'], [33,175,'undo'],[100,175,1],[167,175,'new']]\n		@createGame()\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	draw : ->\n		@buttons[0][2] = @a\n		@buttons[1][2] = @b\n		@buttons[6][2] = @level - @history.length\n		bg 0.5\n		textAlign CENTER,CENTER\n		textSize 30\n		sc()\n		for [x,y,txt],i in @buttons\n			if i in [0,1,6] then fc 0 else fc 1,1,0\n			text txt,x,y\n	newGame : ->\n		if @level >= @history.length and @a == @b then d=1 else d=-1\n		@level = constrain @level+d,1,16\n		@createGame()\n	createGame : ->\n		@history = []\n		@a = 1 + @randint 20\n		q1 = [@a]\n		q2 = []\n		visited = {}\n		visited[@a] = true\n		expand = (n) ->\n			if visited[n] then return\n			visited[n] = true\n			q2.push n\n		for level in range @level\n			for nr in q1\n				expand nr+2\n				expand nr*2\n				expand nr/2 if nr%2==0\n			q1 = q2\n			q2 = []\n		@b = @selectTarget q1 #[@randint(q1.length)]\n	selectTarget : (lst) -> # within 1..1000, if possible\n		bs = (x for x in lst when 1 <= x <= 1000)\n		return bs[@randint(bs.length)] if bs.length > 0\n		_.min lst\n	undo : ->\n		if @history.length == 0 then return\n		@a = @history.pop()\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y,txt],i in @buttons\n			if x-@W < mx < x+@W and  y-@H < my < y+@H\n				index = i\n		a = -1\n		if index == 2 and @a % 2 == 0 then a = @a / 2\n		if index == 3 then a = @a + 2\n		if index == 4 then a = @a * 2\n		if index == 5 then @undo()\n		if index == 7 then @newGame()\n		if a != -1\n			@history.push @a\n			@a = a\n\napp = new Shortcut \"a\"\n",
  c: {
    app: "reset()"
  }
};

ID_Shortcut2 = {
  v: '2017-05-04',
  k: 'bg fc sc range operators [] for if return _.min text dist int {} constrain class',
  l: 126,
  h: 1,
  b: "class Shortcut2 extends Application\n	reset : ->\n		super\n	draw : ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Shortcut2\n",
  a: "operNames = '+ - * / % %% ** // & | ^ ~ << >>'.split ' '\noperMin =   [1,1,2,2,2,2, 2, 2, 1,1,1,0,1, 1]\nopers = [\n	(a,b) -> a+b\n	(a,b) -> a-b\n	(a,b) -> a*b\n	(a,b) -> if a%b==0 then a/b else null\n	(a,b) -> a%b\n	(a,b) -> a%%b\n	(a,b) -> a**b\n	(a,b) -> a//b\n	(a,b) -> a&b\n	(a,b) -> a|b\n	(a,b) -> a^b\n	(a,b) -> ~a\n	(a,b) -> a<<b\n	(a,b) -> a>>b\n]\n\nclass Shortcut2 extends Application\n	reset : ->\n		super\n		@seed = 0\n		@level = 1\n		@page = 1\n		@state = 0\n		@b0 = []\n		@b0 = @b0.concat [[40,40,'+2'],[40,100,'*2'],[40,160,'/2']]\n		@b0 = @b0.concat [[140,40,'+'],[180,80,'n'],[140,120,'-'],[100,80,'p']]\n		@b0 = @b0.concat [[175,175,'ok']]\n		@keys = [0,2,2,2,3,2]\n		@b1 = [[50,50,0],[150,50,0],[33,125,''],[100,125,''],[167,125,''], [33,175,'setup'],[100,175,1],[167,175,'new']]\n		@createGame()\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	operate : (a,op,b) -> opers[op](a,b)\n	name : (a,b) -> if operNames[@keys[a]]=='~' then '~' else operNames[@keys[a]] + @keys[b]\n	draw0 : ->\n		textAlign CENTER,CENTER\n		textSize 28\n		textFont 'monospace'\n		bg 0.5\n		sc()\n		sw 2\n		for i in range 3\n			@b0[i][2] = @name 2*i,2*i+1\n		for [x,y,txt],index in @b0\n			fc 0\n			sc 1\n			circle x,y,25\n			sc()\n			if @state==index then fc 1,0,0 else fc 1\n			text txt,x,y\n	draw1 : ->\n		textAlign CENTER,CENTER\n		textSize 20\n		textFont 'monospace'\n		@b1[0][2] = @a\n		@b1[1][2] = @b\n		@b1[2][2] = @name 0,1\n		@b1[3][2] = @name 2,3\n		@b1[4][2] = @name 4,5\n		@b1[6][2] = @level - @history.length\n		bg 0.5\n		sc()\n		for [x,y,txt],i in @b1\n			if i in [0,1] then fc 0 else fc 1,1,0\n			if i in [5,6,7] then textSize 24 else textSize 30\n			text txt,x,y\n	draw : -> if @page==0 then @draw0() else @draw1()\n	newGame : ->\n		if @level >= @history.length and @a == @b then d=1 else d=-1\n		@level = constrain @level+d,1,16\n		@createGame()\n	createGame : ->\n		@history = []\n		@a = 1 + @randint 20\n		q1 = [@a]\n		q2 = []\n		visited = {}\n		visited[@a] = true\n		expand = (n) ->\n			if n==null then return\n			if visited[n] then return\n			visited[n] = true\n			q2.push n\n		for level in range @level\n			for nr in q1\n				expand opers[@keys[0]] nr,@keys[1]\n				expand opers[@keys[2]] nr,@keys[3]\n				expand opers[@keys[4]] nr,@keys[5]\n			q1 = q2\n			q2 = []\n		@b = @selectTarget q1\n	selectTarget : (lst) ->\n		bs = (x for x in lst when -1000 <= x <= 1000)\n		return bs[@randint(bs.length)] if bs.length > 0\n		_.min lst\n	undo : ->\n		if @history.length == 0 then return\n		@a = @history.pop()\n	mousePressed0 : (mx,my) ->\n		for [x,y,txt],index in @b0\n			if dist(mx,my,x,y) < 25\n				if index < 3 then @state = index\n				if txt=='ok'\n					@page = 1\n					@level = 0\n					@newGame()\n				else if index == 3 then @keys[@state*2+1]++\n				else if index == 4 then @keys[@state*2]++\n				else if index == 5 then @keys[@state*2+1]--\n				else if index == 6 then @keys[@state*2]--\n				@keys[@state*2]   = constrain @keys[@state*2], 0, 13\n				@keys[@state*2+1] = constrain @keys[@state*2+1], operMin[@keys[@state*2]], 9\n				return\n	mousePressed1 : (mx,my) ->\n		index = -1\n		for [x,y,txt],i in @b1\n			if dist(mx,my,x,y) < 20 then index = i\n		a = null\n		if index == 2 then a = @operate @a,@keys[0],@keys[1]\n		if index == 3 then a = @operate @a,@keys[2],@keys[3]\n		if index == 4 then a = @operate @a,@keys[4],@keys[5]\n		if index == 5\n			@page=0\n			@state=0\n		if index == 6 then @undo()\n		if index == 7 then @newGame()\n		if a != null\n			@history.push @a\n			@a = a\n	mousePressed : (mx,my) -> if @page==0 then @mousePressed0 mx,my else @mousePressed1 mx,my\n\napp = new Shortcut2 \"a\"\n",
  c: {
    app: "reset()"
  }
};

ID_ShrinkingCircles = {
  v: '2017-10-31',
  k: 'range fc circle for lerp',
  l: 5,
  h: 2,
  b: "",
  a: "for i in range 10,0,-1\n	fc i/10.0,0,0\n	r = 10 * i\n	circle 100,100, r"
};

ID_SingaporeMult = {
  v: '2017-10-23',
  k: 'bg fc sc rect for class readText parseFloat [] split text',
  l: 40,
  b: "class SingaporeMult extends Application\n	reset : ->\n		super\n	first : -> \n	second : ->\n	more : ->\n	less : ->\n	bigger : ->\n	smaller : ->\n	draw : ->\napp = new SingaporeMult",
  a: "class SingaporeMult extends Application\n	reset : ->\n		super\n		@str1 = '40 6'\n		@str2 = '90 7'\n		@fontSize = 16\n		@decimals = 0	\n\n	first   : -> @str1 = @readText()\n	second  : -> @str2 = @readText()\n	more    : -> @decimals++\n	less    : -> @decimals--\n	bigger  : -> @fontSize++\n	smaller : -> @fontSize--\n\n	nf : (a,b,c) ->\n		a = a * 10 ** c\n		a = round a\n		a = a * 10 ** -c\n		nf a,b,c\n\n	sum : (lst) -> lst.reduce (res, item) -> res+item\n\n	calc : () ->\n		@lst1 = (parseFloat item for item in @str1.split ' ')\n		@lst2 = (parseFloat item for item in @str2.split ' ')\n		@lst1.push @sum @lst1 \n		@lst2.push @sum @lst2\n		@w = 200 / (@lst1.length+1)\n		@h = 25\n\n	draw : ->\n		bg 0.5\n		textAlign RIGHT,TOP\n		textSize @fontSize\n\n		@calc()\n		rect @w+2, @h-5, @w*(@lst1.length-1), @h*(@lst2.length-1)\n\n		fc 1\n		sc()\n		for b,j in @lst2\n			text b, @w, @h+@h*j\n		for a,i in @lst1 \n			text a, @w*(i+2), 0\n			for b,j in @lst2\n				text @nf(a*b,1, @decimals), @w*(i+2),@h*(j+1)\n\napp = new SingaporeMult \"a\"",
  c: {
    app: "reset()|first()|second()|more()|less()|bigger()|smaller()"
  },
  e: {
    '46x97': "https://youtu.be/3EIBMzDdCd0?t=4m45s"
  }
};

ID_SingaporeMultComplex = {
  v: '2017-10-22',
  k: 'bg fc sc rect for class readText parseFloat [] split text',
  l: 53,
  h: 2,
  b: "# 3 1 innebär det komplexa talet 3+i\nclass SingaporeMultComplex extends Application\n	reset : ->\n		super\n	first : -> \n	second : ->\n	bigger : ->\n	smaller : ->\n	draw : ->\napp = new SingaporeMultComplex",
  a: "class SingaporeMultComplex extends Application\n	reset : ->\n		super\n		@str1 = '3 1'\n		@str2 = '1 2'\n		@fontSize = 18\n		# assert [[3,0],[0,1],[3,1]], @add [3,1]\n		# assert [10,10], @mul [3,1],[4,2]\n		# assert ['3', '2i'], @display [3,2]\n		# assert ['3', 'i'], @display [3,1]\n		# assert ['2i'], @display [0,2]\n\n	first   : -> @str1 = @readText()\n	second  : -> @str2 = @readText()\n	bigger  : -> @fontSize++\n	smaller : -> @fontSize--\n\n	calc : () ->\n		@lst1 = (parseFloat item for item in @str1.split ' ')\n		@lst2 = (parseFloat item for item in @str2.split ' ')\n		@lst1 = @add @lst1\n		@lst2 = @add @lst2\n		@w = 200 / (@lst1.length+1)\n		@h = 25\n\n	add : (lst) ->\n		[x,y] = lst\n		[[x,0],[0,y],[x,y]]\n\n	mul : (a,b) ->\n		[x1,y1] = a\n		[x2,y2] = b\n		[x1*x2 - y1*y2, x1*y2 + x2*y1]\n\n	display : (a) -> # a is a polynom\n		res = []\n		for f,i in a\n			if f == 0\n				# nothing\n			else if f==1\n				if i==0 then res.push '1'\n				if i==1 then res.push 'i'\n				if i>=2 then res.push 'i'+i	\n			else \n				if i==0 then res.push f\n				if i==1 then res.push f + 'i'\n				if i>=2 then res.push f + 'i' + i	\n		res \n\n	draw : ->\n		bg 0.5\n		textAlign LEFT,TOP\n		textSize @fontSize\n\n		@calc()\n		rect @w-2, @h-5, @w*(@lst1.length-1), @h*(@lst2.length-1)\n\n		fc 1\n		sc()\n		for b,j in @lst2\n			text @display(b).join(' '), 0*@w, @h+@h*j\n		for a,i in @lst1 \n			text @display(a).join(' '), @w*(i+1), 0\n\n		for b,j in @lst2\n			for a,i in @lst1\n				if j<@lst2.length-1 or (j==@lst2.length-1 and i==@lst1.length-1) \n					text @display(@mul(a,b)).join(' '), @w*(i+1), @h*(j+1)\n\napp = new SingaporeMultComplex \"a\"",
  c: {
    app: "reset()|first()|second()|bigger()|smaller()"
  },
  e: {
    complex: "https://www.youtube.com/watch?v=xtKEvZr3zJQ"
  }
};

ID_SingaporeMultPolynom = {
  v: '2017-10-23',
  k: 'bg fc sc rect for class readText parseFloat [] split text',
  l: 86,
  b: "# Endast faktorer >= 0 hanteras\n# 1 3 innebär polynomet 1 + 3x\nclass SingaporeMultPolynom extends Application\n	reset : ->\n		super\n	first : -> \n	second : ->\n	bigger : ->\n	smaller : ->\n	draw : ->\napp = new SingaporeMultPolynom",
  a: "class SingaporeMultPolynom extends Application\n	reset : ->\n		super\n		@str1 = '3 1'\n		@str2 = '4 2 1'\n		@fontSize = 14\n		# assert [[0,1],[3],[3,1]], @add [3,1]\n		# assert [12,10,2], @mul [3,1],[4,2]\n		# assert ['x2', '2x', '3'], @display [3,2,1]\n		# assert ['x2', '3'], @display [3,0,1]\n		# assert ['2x'], @display [0,2]\n		# assert ['2x2'], @display [0,0,2]\n\n	first   : -> @str1 = @readText()\n	second  : -> @str2 = @readText()\n	bigger  : -> @fontSize++\n	smaller : -> @fontSize--\n\n	calc : () ->\n		@lst1 = (parseFloat item for item in @str1.split ' ')\n		@lst2 = (parseFloat item for item in @str2.split ' ')\n		@lst1 = @add @lst1\n		@lst2 = @add @lst2\n		@w = 200 / (@lst1.length+1)\n		@h = 25\n\n	add : (lst) ->\n		n=lst.length\n		res = []\n		res.push lst\n		for f,i in lst\n			tmp = []\n			for j in range i\n				tmp.push 0\n			tmp.push f\n			res.push tmp\n		res.slice().reverse()\n\n	mul : (a,b) ->\n		res = new Array(a.length+b.length-1).fill 0\n		for f1,i in a\n			for f2,j in b\n				res[i+j] += f1 * f2\n		res\n\n	display : (a) -> # a is a polynom\n		n = a.length\n		res = []\n		for f,i in a\n			if f == 0\n				# nothing\n			else if f==1\n				if i==0 then res.push '1'\n				if i==1 then res.push 'x'\n				if i>=2 then res.push 'x'+i	\n			else \n				if i==0 then res.push f.toString()\n				if i==1 then res.push f.toString() + 'x'\n				if i>=2 then res.push f.toString() + 'x' + i.toString()	\n		res.slice().reverse()\n\n	draw : ->\n		bg 0.5\n		textAlign LEFT,TOP\n		textSize @fontSize\n\n		@calc()\n		rect @w-2, @h-5, @w*(@lst1.length-1), @h*(@lst2.length-1)\n\n		fc 1\n		sc()\n		for b,j in @lst2\n			text @display(b).join('+'), 0*@w, @h+@h*j\n		for a,i in @lst1 \n			text @display(a).join('+'), @w*(i+1), 0\n\n		for b,j in @lst2\n			for a,i in @lst1\n				if j<@lst2.length-1 or (j==@lst2.length-1 and i==@lst1.length-1) \n					if j==@lst2.length-1 and i==@lst1.length-1\n						textAlign RIGHT,TOP\n						text @display(@mul(a,b)).join('+'), @w*(i+2), @h*(j+1)\n					else\n						textAlign LEFT,TOP\n						text @display(@mul(a,b)).join('+'), @w*(i+1), @h*(j+1)\n\napp = new SingaporeMultPolynom \"a\"",
  c: {
    app: "reset()|first()|second()|bigger()|smaller()"
  },
  e: {
    polynom: "https://www.youtube.com/watch?v=fGy9UMSm-_M"
  }
};

ID_Skislope = {
  v: '2018-04-23',
  k: 'bg sc range for lerp line',
  l: 5,
  h: 0,
  b: "sc 1,0,0\nline  0,0,200, 0\nline 10,0,200,10\n#    x1       y2  lerpa?  \n\nbg 0\nfor i in range 21\n	x1 = lerp 0,10,i\n	y1 = 0\n	x2 = 200\n	y2 = lerp 0,10,i\n	line x1,y1,x2,y2",
  a: "bg 0\nsc 1,0,0\nfor i in range 21\n	line i*10,0, 200,i*10"
};

ID_Snake = {
  v: '2017-04-29',
  k: 'bg fc [] rect operators dist for if class',
  l: 47,
  h: 2,
  b: "class Snake extends Application\n	reset : ->\n		super\n	setSize : (s) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new Snake",
  a: "class Snake extends Application\n	reset : ->\n		super\n		@BUTTONS = [[33,167],[167,167]]\n		@DIRS = [[1,0],[0,-1],[-1,0],[0,1]]\n		@setSize 20\n	setSize : (s) ->\n		@SIZE = s\n		@N = 200/@SIZE\n		@seed = 0\n		@segments = [[5,5]]\n		@dir = 0\n		@total = 2\n		@cherry = [3,3]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	update : ->\n		[di,dj] = @DIRS[@dir]\n		[i,j] = @segments[0]\n		i = (i+di) %% @N\n		j = (j+dj) %% @N\n		@segments.unshift [i,j]\n		if @total < @segments.length then @segments.pop()\n		if i==@cherry[0] and j==@cherry[1]\n			@total++\n			@cherry = [@randint(@N),@randint(@N)]\n	draw : ->\n		bg 1,0,0\n		[i,j] = @segments[0]\n		for [si,sj],k in @segments\n			if k>0 and i==si and j==sj then return\n		bg 1\n		[ci,cj] = @cherry\n		fc 1,0,0\n		rect @SIZE*ci,@SIZE*cj,@SIZE,@SIZE\n		for [i,j],k in @segments\n			if k==0 then fc 0 else fc 0.5\n			rect @SIZE*i,@SIZE*j,@SIZE,@SIZE\n		fc 0.9,0.9,0.9,0.3\n		for [x,y] in @BUTTONS\n			circle x,y,33\n	mousePressed : (mx,my) ->\n		index = -1\n		for [x,y],i in @BUTTONS\n			if dist(x,y,mx,my) < 33 then index = i\n		if index == 0 then @dir = (@dir+1) %% 4\n		if index == 1 then @dir = (@dir-1) %% 4\n		@update()\n\napp = new Snake \"a\"",
  c: {
    app: "reset()|setSize 20|setSize 10|setSize 5|setSize 2"
  },
  e: {
    Snake: "https://en.wikipedia.org/wiki/Snake_(video_game)"
  }
};

ID_Snake4 = {
  v: '2017-04-29',
  k: 'bg fc [] rect operators dist for if class',
  l: 43,
  h: 1,
  b: "class Snake4 extends Application\n	reset : ->\n		super\n	setSize : (s) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new Snake4",
  a: "class Snake4 extends Application\n	reset : ->\n		super\n		@BUTTONS = [[167,100], [100,33], [33,100], [100,167]]\n		@DIRS = [[1,0],[0,-1],[-1,0],[0,1]]\n		@setSize 20\n	setSize : (s) ->\n		@SIZE = s\n		@N = 200/@SIZE\n		@seed = 0\n		@segments = [[5,5]]\n		@dir = 0\n		@total = 2\n		@cherry = [3,3]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	update : ->\n		[di,dj] = @DIRS[@dir]\n		[i,j] = @segments[0]\n		i = i+di\n		j = j+dj\n		@segments.unshift [i,j]\n		if @total < @segments.length then @segments.pop()\n		if i==@cherry[0] and j==@cherry[1]\n			@total++\n			@cherry = [@randint(@N),@randint(@N)]\n	draw : ->\n		bg 1,0,0\n		[i,j] = @segments[0]\n		if i in [-1,@N] or j in [-1,@N] then return\n		bg 1\n		[ci,cj] = @cherry\n		fc 1,0,0\n		rect @SIZE*ci,@SIZE*cj,@SIZE,@SIZE\n		for [i,j],k in @segments\n			if k==0 then fc 0 else fc 0.5\n			rect @SIZE*i,@SIZE*j,@SIZE,@SIZE\n		fc 0.9,0.9,0.9,0.3\n		for [x,y] in @BUTTONS\n			circle x,y,33\n	mousePressed : (mx,my) ->\n		for [x,y],i in @BUTTONS\n			if dist(x,y,mx,my) < 33 and abs(i-@dir)!=2 then @dir = i\n		@update()\n\napp = new Snake4 \"a\"",
  c: {
    app: "reset()|setSize 20|setSize 10|setSize 5|setSize 2"
  },
  e: {
    Play: "http://patorjk.com/games/snake",
    Source: "https://github.com/patorjk/JavaScript-Snake/blob/master/js/snake.js",
    Wikipedia: "https://en.wikipedia.org/wiki/Snake_(video_game)"
  }
};

ID_SnowWhiteAndThe7Lerps = {
  v: '2017-09-30',
  k: 'bg fc sc range angleMode rotate rect rectMode for lerp translate push pop',
  l: 17,
  h: 2,
  b: "",
  a: "bg 1\nrectMode CENTER\nangleMode DEGREES\nsc()\nfor i in range 10\n	for j in range 10\n		push()\n		x = lerp 10,30,i\n		y = lerp 10,30,j\n		translate x,y\n		rotate lerp 0,10,i-j\n		r = lerp 0.1,0.2,i\n		g = lerp 0.1,0.2,j\n		fc r,g,0\n		w = lerp 5,6,i\n		h = lerp 5,6,j\n		rect 0,0, w,h\n		pop()"
};

ID_Sokoban = {
  v: '2017-04-29',
  k: 'bg sc fc sw range operators [] text for if rect circle dist class',
  l: 94,
  b: "class Sokoban extends Application\n	reset : ->\n		super\n	newGame : ->\n	draw : ->\n	mousePressed : (mx,my) ->\n	undo : ->\napp = new Sokoban",
  a: "OK = 1\nGREEN = 2\nBOX = 4\nclass Sokoban extends Application\n	reset : ->\n		super\n		@level = -1\n		@newGame()\n		@buttons = []\n		@buttons.push [100,145],[120,165],[100,185],[80,165]\n	newGame : ->\n		@moves = 0\n		@boards = []\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwweoeEwwwwwwwwwwwwwwmwwewwwwwwwwwwwwEeewweeeeewwwwwwwwewewweewwewwwwwwwweeoeeeewwewwwwwwwweeeeeeeeeewwwwwwwwwwweewewwwwwwwwwwwwweeewewwwwwwwwwwwwweeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeewwwwwwwwwwwwwewewewwwwwwwwwwwEeeeeoeoEeeeewwwwwewweewwwwwwwwwwwwEeoemewwwwwwwwwwwwewewwewwwwwwwwwwwweeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeewwwwwwwwwwwwwwwewewwwwwwwwwwwweeeeeeewwwwwwwwwwweeeeeeEwwwwwwwwwwweeeeEwewwwwwwwwwwwweeoewewwwwwwwwwwwwoweewewwwwwwwwwwwwmwOeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwweeeewwwwwwwwwweeEeEwwewwwwwwwwwweeeeewwewwwwwwwwweoeweEwwewwwwwwwwwmoeeeoeeeeeewwwwwweewweeewwwwwwwwwwwwwwwwewwwwwwwwwwwwwwwwwewwwwwwwwwwwwwwwwwOwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeeeewwwwwwwwwwwewwewweeewwwwwwwwweEeeeeeeoewwwwwwweewweoeewemwwwwwwweEeoewwewwwwwwwwwweewwewwEwwwwwwwwwwwwwwewwewwwwwwwwwwwwwweoEewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweewwwwwwwwwwwwwwwweeEeeEwwwwwwwwwwwwwEeeeeoEwwwwwwwwwwwewwoewwwwwwwwwwwwwewwmowwwwwwwwwwwwwewweewwwwwwwwwweeeeOeowwwwwwwwwwweeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweewwwwwwwwwwwwwwwweomEwwwwwwwwwweeeeeEoEwwwwwwwwwwwweoewoEwwwwwwwwwwwweweweowwwwwwwwwwwweweweewwwwwwwwwwwweweeEwwwwwwwwwwwwweeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwmwwwweewwwwwwwwwwwowwwwoewwwwwwwwweeEEeeeeewwwwwwwwweweewowwOwwwwwwwwweEeeeoEeEwwwwwwwwwwewwowwwwwwwwwwwwwweeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeewwwwwwwwwwwwweeeeeeoMwwwwwwwwwwewewwewwwwwwwwwwwwEeeeweweoeEwwwwwwweewowoeewwOewwwwwweEeeeewewwewwwwwwwewwwwwwewwewwwwwwwewwwwwweOeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwEwwwwwwwwwwwwwwweeoeewwwwwwwwwwwwwewoeewwwwwwwwwwwwweEEOEwwwwwwwwwwwwwewwmewwwwwwwwwwwwweoeoewwwwwwwwwwwwwweweewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'\n		@level = (@level + 1) % @boards.length\n		s = @boards[@level]\n		@board = []\n		for j in range 12\n			@board.push []\n			for i in range 18\n				k = 18 * j + i\n				if s[k] == 'm' then @man = [i,j]\n				if s[k] == 'w' then digit = 0\n				if s[k] in ['e','m'] then digit = OK\n				if s[k] == 'E' then digit = OK+GREEN\n				if s[k] == 'o' then digit = OK+BOX\n				if s[k] == 'O' then digit = OK+BOX+GREEN\n				@board[j].push digit\n	draw : ->\n		bg 0\n		sc 0\n		sw 1\n		rectMode CENTER\n		for j in range 12\n			for i in range 18\n				size = 10\n				digit = @board[j][i]\n				fc 0.75\n				if digit == 0 then fc 1,0,0\n				if (digit & GREEN) == GREEN then fc 0,1,0\n				rect 15+10*i,15+10*j,size,size\n				if (digit & BOX) == BOX\n					fc 1,1,0\n					size = 6\n					rect 15+10*i,15+10*j,size,size\n				if _.isEqual @man, [i,j]\n					fc 0,0,1\n					circle 15+10*i+0.5,15+10*j+0.5,3\n		for [x,y] in @buttons\n			fc 1,1,1,0.5\n			circle x,y,12\n		textSize 30\n		textAlign CENTER,CENTER\n		fc 1\n		text @level,30,165\n		text @moves,170,165\n	move : (i,j) ->\n		if dist(i,j,@man[0],@man[1]) != 1 then return\n		digit = @board[j][i]\n		ni = i+i-@man[0]\n		nj = j+j-@man[1]\n		if (digit & BOX) == BOX\n		  if @board[nj][ni] in [1,3]\n				@board[nj][ni] |= BOX\n				@board[j][i] &= OK+GREEN\n				@moves++\n				if @final() then return @newGame()\n				@man = [i,j]\n		else if (digit & OK) == OK then	@man = [i,j]\n	final : ->\n		for j in range 12\n			for i in range 18\n				if @board[j][i] in [3,5] then return false\n		true\n	mousePressed : (mx,my) ->\n		for [x,y],i in @buttons\n			if dist(mx,my,x,y) <= 12\n				[di,dj] = [[0,-1],[1,0],[0,1],[-1,0]][i]\n				@move @man[0]+di,@man[1]+dj\n	undo : ->\n		@level--\n		@newGame()\n\napp = new Sokoban \"a\"",
  c: {
    app: "reset()|undo()"
  },
  e: {
    Sokoban: "http://www.linusakesson.net/games/autosokoban/?v=1&seed=355842047&level=1",
    Wikipedia: "https://en.wikipedia.org/wiki/Sokoban"
  }
};

ID_SpaceShip = {
  v: '2017-09-30',
  k: 'sc sw angleMode rotate point triangle translate cos sin push pop class',
  h: 3,
  l: 35,
  b: "class Shot\n	constructor : (@x,@y,@dir) ->\n	render      : ->\n	move        : ->\n\nclass Ship extends Application\n	classes : -> [Shot]\n	reset   : ->\n		super\n	draw    : ->\n	left    : ->\n	right   : ->\n	forward : ->\n	shoot   : ->\n\napp = new Ship",
  a: "\nclass Shot\n	constructor : (@x,@y,@dir) ->\n	render : ->	point @x,@y\n	move : ->\n		@x += int 5 * cos @dir\n		@y += int 5 * sin @dir\n\nclass Ship extends Application\n	classes : -> [Shot]\n	reset : ->\n		super\n		@S = 10\n		@x = 100\n		@y = 100\n		@dir = 0\n		@shots = []\n\n	left    : -> @dir -= 5\n	right   : -> @dir += 5\n	forward : ->\n		angleMode DEGREES\n		@x += 5 * cos @dir\n		@y += 5 * sin @dir\n\n	shoot : ->\n		@shots.push new Shot int(@x), int(@y), @dir\n\n	draw : ->\n		push()\n		translate @x,@y\n		angleMode DEGREES\n		rotate @dir\n		sc 1,1,0\n		sw 2\n		triangle 2*@S,0, -@S,@S, -@S,-@S\n		sw 5\n		point 0,0\n		pop()\n		for shot in @shots\n			shot.move()\n			shot.render()\n\napp = new Ship \"a\"",
  c: {
    app: "reset()|left()|right()|forward()|shoot()"
  }
};

ID_Square = {
  v: '2017-09-30',
  k: 'bg sw fc angleMode rotate rect rectMode translate operators class',
  l: 22,
  h: 1,
  b: "class Square extends Application\n	reset        : ->\n		super\n	draw         : ->\n	horisontellt : (d) ->\n	vertikalt    : (d) ->\n	storlek      : (d) ->\n	tjocklek     : (d) ->\n	rotera       : (d) ->\napp = new Square",
  a: "class Square extends Application\n	reset : ->\n		super\n		@x = 100\n		@y = 100\n		@size = 100\n		@w = 1\n		@dir = 0\n	draw : ->\n		bg 0\n		rectMode CENTER\n		angleMode DEGREES\n		sw @w\n		fc 0.5\n		translate @x,@y\n		rotate @dir\n		rect 0,0,@size,@size\n\n	horisontellt : (d) -> @x += d\n	vertikalt : (d) -> @y += d\n	storlek : (d) -> @size += d\n	tjocklek : (d) -> @w += d\n	rotera : (d) -> @dir += d\n\napp = new Square \"a\"",
  c: {
    app: "reset()|horisontellt -1|horisontellt +1|vertikalt -1|vertikalt +1|storlek -1|storlek +1|tjocklek -1|tjocklek +1|rotera -1|rotera +1"
  }
};

ID_SquareHole = {
  v: '2017-04-29',
  k: 'fc sc sw rect',
  l: 11,
  h: 2,
  b: "",
  a: "fc 0,1,1\nsc()\nrect 60,60, 80,20\nrect 60,120, 80,20\nrect 60,60, 20,80\nrect 120,60, 20,80\nfc()\nsc 1,0,0\nsw 3\nrect 60,60, 80,80\nrect 80,80, 40,40"
};

ID_Stopwatch = {
  v: '2017-04-29',
  k: 'bg sc fc for [] text int millis nf class',
  l: 20,
  h: 1,
  b: "# OBS! Tiderna kan skilja med flera millisekunder. Sorry!\n\nclass Stopwatch extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Stopwatch",
  a: "class Stopwatch extends Application\n	reset : ->\n		super\n		@start = int millis()\n		@times = []\n		@count = 0\n	draw : ->\n		bg 0\n		textFont \"monospace\"\n		textSize 32\n		textAlign RIGHT,BOTTOM\n		fc 1,0,0\n		sc()\n		for time,i in @times\n			text @count-i, 50, 202-40*i\n			text nf(time/1000,1,3),195, 202-40*i\n	mousePressed : (mx,my) ->\n		@count++\n		@times.unshift int millis()-@start\n		if @times.length > 5 then @times.pop()\n\napp = new Stopwatch \"a\"",
  c: {
    app: "reset()"
  }
};

ID_Sunshine = {
  v: '2018-04-24',
  k: 'bg sc range for lerp line',
  l: 9,
  h: 0,
  b: "# Prova att kommentera ut enstaka rader.\n# Försök att räkna ut effekten i förväg.\n\nsc 1,1,0\n\nline  0,0,200,200\nline 20,0,180,200\n#    x1    x2       lerpa?\n\nline 0,200,200, 0\nline 0,180,200,20\n#       y1     y2   lerpa? \n\nfor i in range 10\n	\n	x1 = lerp 0,20,i\n	y1 = 0\n	x2 = lerp 200,180,i\n	y2 = 200\n	line x1,y1,x2,y2\n\n	x1 = 0\n	y1 = lerp 200,180,i\n	x2 = 200\n	y2 = lerp 0,20,i\n	line x1,y1,x2,y2",
  a: "bg 0\nsc 1,1,0\nfor i in range 10\n	x1 = lerp 0,20,i\n	x2 = lerp 200,180,i\n	line x1,0, x2,200\n	y1 = lerp 20,40,i\n	y2 = lerp 180,160,i\n	line 0,y1, 200,y2"
};

ID_SuperCircle = {
  v: '2017-04-29',
  k: 'bg range operators for line',
  l: 7,
  h: 3,
  b: "",
  a: "bg 0\nfor i in range 21\n	ni = 5 * i\n	line ni,     200,   0, 100+ni\n	line ni,       0,   0, 100-ni\n	line 100+ni, 200, 200, 200-ni\n	line 100+ni,   0, 200, ni",
  e: {
    PietHein: "https://sv.wikipedia.org/wiki/Piet_Hein",
    SuperEllips: "https://sv.wikipedia.org/wiki/Superellips",
    SergelsTorg: "https://www.google.se/search?q=sergels+torg&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjGpt-jmanTAhWSKCwKHSsMDcQQ_AUICCgB&biw=925&bih=919#tbm=isch&q=superellips+sergels+torg&imgrc=rK6GQHPFiDHQGM:"
  }
};

ID_SuperCircle2 = {
  v: '2018-04-24',
  k: 'bg range for line translate rotate',
  l: 12,
  h: 3,
  b: "# Use rotate and translate.",
  a: "skislope = ->\n	for i in range 21\n		x1 = lerp -100,-95,i\n		y1 = -100\n		x2 = -100\n		y2 = lerp 0,-5,i\n		line x1,y1,x2,y2\n		\nbg 0\ntranslate 100,100\n\nfor i in range 4\n	skislope()\n	rotate HALF_PI"
};
//# sourceMappingURL=S.js.map
