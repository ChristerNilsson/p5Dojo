'use strict';

// Generated by CoffeeScript 2.0.3
var ID_Alphanumeric, ID_Angle, ID_Arc, ID_Average;

ID_Alphanumeric = {
  v: '2017-04-29',
  k: 'bg sc fc range circle for operators [] splice dist if class',
  l: 29,
  h: 3,
  b: "class AlphaNumeric extends Application\n	reset : ->\n		super\n	draw  : ->\n	add   : ->\n	del   : ->\n	left  : ->\n	right : ->\n	mousePressed : (mx,my) ->\napp = new AlphaNumeric",
  a: "class AlphaNumeric extends Application\n	reset : ->\n		super\n		@RADIUS = 8\n		@DISTANCE = 20\n		@pattern = [[4,12,4,4,4,4,14], [14,17,1,2,4,8,31], [14,17,17,31,17,17,17],[30,17,17,30,17,17,30]]\n		@index = 0\n	draw : ->\n		bg 0\n		sc()\n		for index,j in @pattern[@index]\n			y =  40+@DISTANCE*j\n			for i in range 5\n				if index & 1<<i then fc 0,1,0 else fc 0,0.3,0\n				x = 140-@DISTANCE*i\n				circle x,y,@RADIUS\n	add   : ->\n		@pattern.push [0,0,0,0,0,0,0]\n		@index = @pattern.length - 1\n	del   : -> @pattern.splice @index, 1\n	left  : -> @index = (@index - 1) %% @pattern.length\n	right : -> @index = (@index + 1) %% @pattern.length\n\n	mousePressed : (mx,my) ->\n		for index,j in @pattern[@index]\n			y =  40+@DISTANCE*j\n			for i in range 5\n				x = 140-@DISTANCE*i\n				if dist(x,y,mx,my) < @RADIUS\n					@pattern[@index][j] ^= 1<<i\n\napp = new AlphaNumeric \"a\"",
  c: {
    app: "reset()|add()|del()|left()|right()"
  },
  e: {
    binärt: "http://www.matteboken.se/lektioner/matte-1/tal/talsystem",
    hexadecimalt: "http://www.matteguiden.se/matte-1/grunder/binara-och-hexadecimala-tal",
    '5x7 matris': "https://www.google.se/search?q=5x7+matrix&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjWjYen5OrSAhXhJ5oKHf8BBmgQ_AUIBigB&biw=1310&bih=945&dpr=1.1"
  }
};

ID_Angle = {
  v: '2017-09-29',
  k: 'bg sc fc sw circle class dist if operators text sin cos atan2 angleMode arc _.min line for range abs',
  l: 54,
  h: 3,
  b: "# Försök klicka på rätt vinkel.\n# Gul sektor indikerar felmarginalen.\n# 0 grader går mot höger (vit linje)\n# 90 grader går neråt\n# 180 grader går till vänster\n# 270 grader går uppåt\n# Gult tal är vinkeln som klickas på\n# Rött tal indikerar antal fel\n# Grönt tal indikerar Level\n\nclass Angle extends Application\n	reset : ->\n		super\n		@seed = 0\n	draw : ->\n	mousePressed : (mx,my) ->\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\napp = new Angle",
  a: "\nclass Angle extends Application\n	reset : ->\n		super\n		@seed = 0\n		@level = 2\n		@errors = 0\n		@R1 = 50\n		@R2 = 100\n		@newGame 0\n	newGame : (d) ->\n		if d==-1 then @errors++\n		@level = constrain @level+d, 1, 100\n		@angle = int 360/@level * @randint @level # hela grader\n		@marginal = 180/@level # grader\n	draw : ->\n		bg 0.5\n		sw 50\n		strokeCap SQUARE\n		angleMode DEGREES\n		start = 135 - @marginal\n		stopp = 135 + @marginal\n		fc()\n		sc 1,1,0\n		arc 100,100, 150,150, start,stopp\n		sw 1\n		for i in range 12\n			if i==0 then sc 1 else sc 0\n			v = i * 30\n			x1 = 100 + @R1 * cos v\n			y1 = 100 + @R1 * sin v\n			x2 = 100 + @R2 * cos v\n			y2 = 100 + @R2 * sin v\n			line x1,y1,x2,y2\n		sc 1,1,0\n		circle 100,100,@R1\n		circle 100,100,@R2\n		sc()\n		fc 1\n		textSize 16\n		textAlign CENTER,CENTER\n		fc 1,1,0\n		text @angle,100,100\n		fc 1,0,0\n		text @errors,100,75\n		fc 0,1,0\n		text @level,100,125\n	mousePressed : (mx,my) ->\n		d = dist 100,100,mx,my\n		angleMode DEGREES\n		if @R1 <= d <= @R2\n			v = atan2 my-100,mx-100\n			@seed += mx % 10\n			res = @angleDist(v,@angle) <= @marginal\n			@newGame if res then 1 else -1\n	angleDist : (u,v) -> _.min [abs(u-v), abs(360+u-v)]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\napp = new Angle \"a\"",
  c: {
    app: "reset()"
  }
};

ID_Arc = {
  v: '2018-04-23',
  k: '-> fc sc arc strokeCap sw angleMode',
  l: 14,
  h: 0,
  b: "angleMode DEGREES\n\nsc()\nfc 0,0,1\narc 120,120,100,100,0,90\n\nsc 1,1,0\nsw 10\nstrokeCap ROUND\narc 80,120,100,100,90,180\n\nstrokeCap SQUARE\nfc 0,1,0\narc 80,80,100,100,180,270\n\nfc()\nsw 5\narc 120,80,100,100,270,0",
  a: "angleMode DEGREES\n\nsc()\nfc 0,0,1\narc 120,120,100,100,0,90\n\nsc 1,1,0\nsw 10\nstrokeCap ROUND\narc 80,120,100,100,90,180\n\nstrokeCap SQUARE\nfc 0,1,0\narc 80,80,100,100,180,270\n\nfc()\nsw 5\narc 120,80,100,100,270,0"
};

ID_Average = {
  v: '2017-09-16',
  k: '-> bg fc sc if text operators',
  l: 5,
  h: 2,
  b: "average = (a,b) -> 0\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 5,  average 0,10\ntest 20, average 10,30\ntest 10, average -10,30",
  a: "average = (a,b) -> (a+b)/2\n\n# Ändra ingenting nedanför denna rad!\nbg 0\ny = 19\ntest = (a,b) ->\n	sc()\n	textSize 20\n	fc 0,1,0\n	text a, 0,y\n	if a==b then fc 0,1,0 else fc 1,0,0\n	text b, 100,y\n	y+=20\n\ntest 5,  average 0,10\ntest 20, average 10,30\ntest 10, average -10,30",
  e: {
    Matteboken: 'https://www.matteboken.se/lektioner/skolar-5/statistik/medelvarde'
  }
};
//# sourceMappingURL=A.js.map
