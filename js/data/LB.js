// Generated by CoffeeScript 1.11.1
var ID220, ID221, ID222, ID223, ID224;

ID220 = {
  b: "# LOC:33 % bg fc sc sw circle range # text textAlign textSize for in\n#        push pop class extends constructor new @ super -> \n\nclass Connect4 extends Application\n	reset : -> super\n	draw  : -> super\n	undo  : ->\n	mousePressed : (mx,my) ->\napp = new Connect4",
  a: "class Connect4 extends Application\n	reset : ->\n		super\n		@SIZE = 27\n		@list = ([] for i in range 7)\n		@moves = []\n	draw : ->\n		bg 0\n		textAlign CENTER,CENTER\n		textSize @SIZE/2\n		fc()\n		sc 0.1,0.3,1\n		sw 0.2 * @SIZE\n		for i in range 7\n			for j in range 6\n				circle 100-@SIZE*3+@SIZE*i, 180-@SIZE*j, @SIZE/2\n		for column,i in @list\n			for nr,j in column\n				fc 1,nr%2,0\n				sw 1\n				circle 100-@SIZE*3+@SIZE*i, 180-@SIZE*j, @SIZE*0.4\n				fc 0\n				sc()\n				text nr, 100-@SIZE*3+@SIZE*i, 180-@SIZE*j\n		sc()\n		fc 1,(@moves.length+1)%2,0\n		circle 100,15,10\n	mousePressed : (mx,my) ->\n		nr = int (mx-(200-7*@SIZE)/2)/@SIZE\n		if 0 <= nr <= 6\n			@moves.push nr\n			@list[nr].push @moves.length \n	undo : -> if @moves.length > 0 then @list[@moves.pop()].pop()\n\napp = new Connect4 \"a\"",
  c: {
    app: "reset()|undo()"
  }
};

ID221 = {
  b: "# LOC:35 sc sw rd # point triangle translate cos sin radians \n#        push pop class extends constructor new @ super ->\n\nclass Shot\n	constructor : (@x,@y,@dir) ->\n	render      : ->	\n	move        : ->\n\nclass Ship extends Application\n	constructor : (@name) ->\n		super @name\n		if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)\n	reset   : -> super\n	draw    : -> super\n	left    : -> \n	right   : -> \n	forward : -> \n	shoot   : ->		\n\napp = new Ship	",
  a: "class Shot\n	constructor : (@x,@y,@dir) ->\n	render : ->	point @x,@y \n	move : ->\n		@x += int 5 * cos radians @dir\n		@y += int 5 * sin radians @dir\n\nclass Ship extends Application \n\n	constructor : (@name) ->\n		super @name\n		if @shots then @shots = (_.create Shot.prototype, shot for shot in @shots)\n\n	reset : ->\n		super\n		@S = 10\n		@x = 100\n		@y = 100\n		@dir = 0\n		@shots = []\n\n	left    : -> @dir -= 5\n	right   : -> @dir += 5\n	forward : -> \n		@x += 5 * cos radians @dir\n		@y += 5 * sin radians @dir\n\n	shoot : ->\n		@shots.push new Shot int(@x), int(@y), @dir\n\n	draw : ->\n		push()\n		translate @x,@y\n		rd @dir\n		sc 1,1,0\n		sw 2\n		triangle 2*@S,0, -@S,@S, -@S,-@S\n		sw 5\n		point 0,0\n		pop()\n		for shot in @shots\n			shot.move()\n			shot.render()\n\napp = new Ship \"a\"	",
  c: {
    app: "reset()|left()|right()|forward()|shoot()"
  }
};

ID222 = {
  b: "# LOC:35 bg fc sc # [] push \"\" split indexOf reduce + * ** / % > & text textSize textAlign  \n#				 for in of {} _.countBy and if then class constructor new @ extends super \n# Bilda ord med fyra till nio bokstäver. Den mittersta bokstaven måste ingå. Prova med \"aaefkrrtu\"\n\nclass Nian extends Application\n	reset : -> super\n	draw  : -> super\n	enter : ->\n\napp = new Nian",
  a: "class Nian extends Application\n	reset : ->\n		super\n		@found = \"\"\n	draw : -> \n		n = 15\n		bg 0\n		textAlign LEFT,TOP\n		textSize 12\n		fc 1,1,0\n		sc()\n		for word,i in @found.split \" \"\n			x = int i / n\n			y = i % n\n			text word,5+200/4*x,200*y/n\n	bits : (word) -> word.split(\"\").reduce ((acc,ch) -> acc|(2 ** \"abcdefghijklmnopqrstuvwxyzåäö\".indexOf ch)), 0\n	ok : (f1,f2) ->\n		for ch, f of f2\n			if f > f1[ch] then return false\n		true\n	enter : ->\n		words = ordlista.split \" \"\n		patterns = (@bits word for word in words)\n		@letters = @readText()\n		mandatory = @letters[4]\n		@found = []\n		p = @bits @letters\n		letters1 = @letters.split \"\"\n		freq1 = _.countBy letters1\n		for pattern,i in patterns\n			if (p & pattern) == pattern\n				letters2 = words[i].split \"\"\n				freq2 = _.countBy letters2\n				if @ok(freq1,freq2) and mandatory in letters2 then @found.push words[i]\n		@found = @found.join \" \"\n\napp = new Nian \"a\"",
  c: {
    app: "reset()|enter()"
  },
  e: {
    Nian: "http://svenska-apps.se/iphone-ipad/underhallning/svd-nian-babqpg.html",
    '_.countBy': "http://underscorejs.org/#countBy",
    reduce: "https://coffeescript-cookbook.github.io/chapters/arrays/reducing-arrays"
  }
};

ID223 = {
  b: "# LOC:0\n# Här kan du se några klargörande exempel.\n# Om de två parametrarna till assert är olika, skrivs de ut till console.\n# Du kan prova egna asserts här. Kontrollera med F12.\n\n# + * ** Prioritet\nassert 2 + 3 * 4  , 14   \nassert 4 * 2 ** 3 , 32 \n\n# % Resten vid heltalsdivision\nassert  2 % 2 ,  0\nassert  1 % 2 ,  1\nassert  0 % 2 ,  0\nassert -1 % 2 , -1    \nassert -2 % 2 , -0      \n\n# %% Resten vid heltalsdivision. Klarar även negativa tal.\nassert  2 %% 2 , 0\nassert  1 %% 2 , 1\nassert  0 %% 2 , 0   \nassert -1 %% 2 , 1  \nassert -2 %% 2 , 0 \n \n# []\nassert 7 in [7,8]                     , true\nassert (i for i in [7,8])             , [7,8]  \nassert ([item,i] for item,i in [7,8]) , [[7,0],[8,1]]   \nassert (x*x for x in [3,4,5])         , [9,16,25]   \n\n# {}\nassert 'b' of {a:7,b:8}                       , true      \nassert (key for key of {a:7,b:8})             , ['a','b']   \nassert ([key,item] for key,item of {a:7,b:8}) , [['a',7],['b',8]]    \n\n# & | ^ ~ Bit operationer\nassert [0&0, 0&1, 1&0, 1&1] , [0,0,0,1] \nassert [0|0, 0|1, 1|0, 1|1] , [0,1,1,1] \nassert [0^0, 0^1, 1^0, 1^1] , [0,1,1,0] \nassert [~0, ~1, ~2, ~3]     , [-1,-2,-3,-4] \n\n# lerp\nassert  8 , lerp 10,12,-1\nassert 10 , lerp 10,12,0\nassert 11 , lerp 10,12,0.5\nassert 12 , lerp 10,12,1\nassert 14 , lerp 10,12,2\n\n# range\nassert [0,1,2,3,4,5,6,7,8,9]  , range 10\nassert [0,1,2,3,4]            , range 5\nassert [1,2,3,4,5,6,7,8,9,10] , range 1,11\nassert [0,2,4,6,8]            , range 0,10,2\nassert [10,8,6,4,2]           , range 10,0,-2\nassert [9,8,7,6,5,4,3,2,1,0]  , range 10-1,-1,-1\n\n# [..]\nassert [0..4]  , [0,1,2,3,4]\nassert [0...5] , [0,1,2,3,4]\nassert [5,6,7,8,9][1..2] , [6,7]\nassert [5,6,7,8,9][..2]  , [5,6,7]\nassert [5,6,7,8,9][1..]  , [6,7,8,9]\nassert [5,6,7,8,9][..]   , [5,6,7,8,9]\nassert [5,6,7,8,9][0..2]   , [5,6,7]\nassert [5,6,7,8,9][1...-2] , [6,7]\nassert [5,6,7,8,9][-2..]   , [8,9]\n",
  a: "",
  e: {
    assert: "https://en.wikipedia.org/wiki/Assertion_(software_development)"
  }
};

ID224 = {
  b: "# LOC:47 bg fc sc # {} * / + ++ == if then else indexOf parseInt substring \n#        for of text textAlign class constructor new @ extends super \n\nclass LinesOfCode extends Application\n	reset : -> super\n	draw : -> super\napp = new LinesOfCode",
  a: "class LinesOfCode extends Application\n	reset : ->\n		super\n		@chapter = -1\n		@stat = {}\n		@h = 14\n		for chapter,item1 of data\n			@stat[chapter] = {}\n			for exercise,item2 of item1\n				b = item2.b\n				p1 = b.indexOf 'LOC:'\n				p2 = b.indexOf ' ',p1\n				loc = parseInt b.substring p1+4,p2 \n				@stat[chapter][exercise] = loc\n	draw : ->\n		fc 1,1,0\n		sc()\n		if @chapter == -1 then @drawAll() else @drawChapter()\n	drawAll : ->\n		bg 0\n		i = 0\n		for chapter,item1 of @stat\n			sum = 0\n			for exercise,item2 of item1\n				sum += item2\n			i++\n			textAlign LEFT\n			text chapter,5,i*@h\n			textAlign RIGHT\n			text sum,195,i*@h\n	drawChapter : ->\n		bg 0.5\n		i=0\n		for chapter,item1 of @stat\n			i++\n			if i == @chapter\n				j = 0\n				for exercise,item2 of item1\n					j++\n					textAlign LEFT\n					text exercise,5,j*@h\n					textAlign RIGHT\n					text item2,195,j*@h\n	mousePressed : (mx,my) ->\n		if @chapter == -1 \n			@chapter = 1 + int my / @h\n		else\n			@chapter = -1\n\napp = new LinesOfCode 'a'",
  c: {
    app: "reset()"
  },
  e: {
    LinesOfCode: "https://en.wikipedia.org/wiki/Source_lines_of_code"
  }
};