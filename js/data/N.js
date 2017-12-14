'use strict';

// Generated by CoffeeScript 2.0.3
var ID_Nand2TetrisALU, ID_Nian, ID_Nim;

ID_Nand2TetrisALU = {
  v: '2017-04-29',
  k: 'sc fc sw range text class point quad dist for if operators',
  l: 63,
  b: "# Se länken Nand2Tetris, sidan 36, för mer information!\n\nclass ALU extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new ALU",
  a: "class ALU extends Application\n	reset : ->\n		super\n		@x = 3\n		@y = 5\n		@flags = 0\n		@BUTTONS = [[5,1],[7,1],[9,1],[11,1],[13,1],[15,1],[3,3],[5,3],[15,3],[17,3]]\n\n	draw1 : (value,x0,y0) ->\n		sc()\n		fc 1,1,0\n		text value, x0,y0\n		for i in range 16\n			if (value & 1<<(15-i)) != 0 then fc 1 else fc 0.75\n			if (value & 1<<(15-i)) != 0 then r=2.5 else r=1\n			circle x0-40+3+5*i,y0+20,r\n\n	draw : ->\n		textAlign CENTER,CENTER\n		fc 1,1,0\n		quad 0,80, 200,80, 140,120, 60,120\n		[z,zr,ng] = @calc()\n		@draw1 @x,40,50\n		@draw1 @y,160,50\n		@draw1  z,100,130\n		flags = \"zx nx zy ny f no\".split \" \"\n		sc()\n		textSize 16\n		for i in range 6\n			[x,y] = @BUTTONS[i]\n			fc 1,0,0\n			circle 10*x,10*y,10\n			if @flags & 1<<i then fc 1 else fc 0.5\n			text flags[i],10*x,10*y\n		for ch,i in \"-+-+\"\n			[x,y] = @BUTTONS[6+i]\n			fc 1,0,0\n			circle 10*x,10*y,10\n			fc 1\n			text ch, 10*x,10*y\n		if zr==1 then fc 1 else fc 0.5\n		text \"zr\",90,170\n		if ng==1 then fc 1 else fc 0.5\n		text \"ng\",110,170\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for button,i in @BUTTONS\n			if dist(10*button[0],10*button[1],mx,my) < 10 then index = i\n		if 0 <= index <= 5 then @flags ^= 1<<index\n		if index == 6 then @x--\n		if index == 7 then @x++\n		if index == 8 then @y--\n		if index == 9 then @y++\n\n	calc : ->\n		x=@x\n		if @flags & 1 then x=0\n		if @flags & 2 then x=~x\n		y=@y\n		if @flags & 4 then y=0\n		if @flags & 8 then y=~y\n		if @flags & 16 then out = x+y else out = x&y\n		if @flags & 32 then out = ~out\n		if out==0 then zr=1 else zr=0\n		if out<0 then ng=1 else ng=0\n		[out,zr,ng]\n\napp = new ALU \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Nand2Tetris: "http://www.nand2tetris.org/chapters/chapter%2002.pdf"
  }
};

ID_Nian = {
  v: '2017-04-29',
  k: 'bg fc sc [] "" reduce operators text for {} _.countBy if class',
  l: 35,
  b: "# Bilda ord med fyra till nio bokstäver. Använd variabeln ordlista.\n# Den mittersta bokstaven måste ingå. Prova med \"aaefkrrtu\"\n\nclass Nian extends Application\n	reset : ->\n		super\n	draw  : ->\n	enter : ->\n\napp = new Nian",
  a: "class Nian extends Application\n	reset : ->\n		super\n		@found = \"\"\n	draw : ->\n		n = 15\n		bg 0\n		textAlign LEFT,TOP\n		textSize 12\n		fc 1,1,0\n		sc()\n		for word,i in @found.split \" \"\n			x = int i / n\n			y = i % n\n			text word,5+200/4*x,200*y/n\n	bits : (word) -> word.split(\"\").reduce ((acc,ch) -> acc|(2 ** \"abcdefghijklmnopqrstuvwxyzåäö\".indexOf ch)), 0\n	ok : (f1,f2) ->\n		for ch, f of f2\n			if f > f1[ch] then return false\n		true\n	enter : ->\n		words = ordlista.split \" \"\n		patterns = (@bits word for word in words)\n		@letters = @readText()\n		mandatory = @letters[4]\n		@found = []\n		p = @bits @letters\n		letters1 = @letters.split \"\"\n		freq1 = _.countBy letters1\n		for pattern,i in patterns\n			if (p & pattern) == pattern\n				letters2 = words[i].split \"\"\n				freq2 = _.countBy letters2\n				if @ok(freq1,freq2) and mandatory in letters2 then @found.push words[i]\n		@found = @found.join \" \"\n\napp = new Nian \"a\"",
  c: {
    app: "reset()|enter()"
  },
  e: {
    Nian: "http://svenska-apps.se/iphone-ipad/underhallning/svd-nian-babqpg.html",
    '_.countBy': "http://underscorejs.org/#countBy",
    reduce: "https://coffeescript-cookbook.github.io/chapters/arrays/reducing-arrays"
  }
};

ID_Nim = {
  v: '2017-04-29',
  k: 'bg fc sc circle operators if _.isEqual return constrain text class',
  l: 62,
  b: "class Nim extends Application\n	reset : ->\n		super\n		@seed = 0\n	draw  : ->\n	newGame : ->\n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Nim",
  a: "class Nim extends Application\n	reset : ->\n		super\n		@RADIUS = 30\n		@BUTTONS = [[35,80],[100,80],[165,80], [35,150,'ok'],[100,150,'x'],[165,150,'hint']]\n		@seed = 0\n		@newGame()\n		@init()\n\n	init : ->\n		@active = -1\n		@player = 0\n		@original = @board[..]\n\n	move : (index) ->\n		if @active in [index,-1]\n			@active = index\n			@board[@active] = constrain @board[@active]-1, 0, 99\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n		@init()\n\n	ok : ->\n		if @active == -1 then return\n		@player = 1 - @player\n		@active = -1\n		@original = @board[..]\n\n	cancel : ->\n		@board = @original\n		@active = -1\n\n	draw : ->\n		textAlign CENTER,CENTER\n		textSize 32\n		bg 0\n		for [x,y,txt],i in @BUTTONS\n			fc 0\n			sc 1\n			sw 2\n			if i<=2 and @active==-1 or @active==i then circle x,y,@RADIUS\n			if i in [3,4] and @active!=-1 then circle x,y,@RADIUS\n			if i==5 and @active==-1 then circle x,y,@RADIUS\n			fc 1\n			sc()\n			if i<=2 then text @board[i],x,y\n			if i>=3 then text txt,x,y\n		fc 1,@player,0\n		circle 20 + @player * 160,20,10\n\n	hint : ->\n		if @active != -1 then return\n		[a,b,c] = @board\n		board = if (b^c) < a then [b^c,b,c] else if (a^c) < b then [a,a^c,c] else if (a^b) < c then [a,b,a^b] else [a,b,c]\n		if not _.isEqual(board,@board)\n			@board = board\n			@player = 1 - @player\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for button,i in @BUTTONS\n			if dist(button[0],button[1],mx,my) < @RADIUS then index = i\n		if index <= 2 then @move index\n		if index == 3 then @ok()\n		if index == 4 then @cancel()\n		if index == 5 then @hint()\n\napp = new Nim \"a\"\n",
  c: {
    app: "reset()|newGame()"
  },
  e: {
    Nim: "https://en.wikipedia.org/wiki/Nim",
    xor: "https://en.wikipedia.org/wiki/Bitwise_operation#XOR",
    Nimrod: "https://en.wikipedia.org/wiki/Nimrod_(computing)"
  }
};
//# sourceMappingURL=N.js.map
