'use strict';

// Generated by CoffeeScript 2.0.3
var ID_Asserts, ID_LinesOfCode, ID_nyheter;

ID_nyheter = {
  v: '2018-04-23',
  k: '',
  l: 0,
  h: 0,
  b: "# NYHETER 2018 APR 23\n#   FlagSweden\n#   FlagKorea\n# 	Arc\n#   GalaxiesOne\n#   ColorSide\n#   Function\n# NYHETER 2017 NOV 03\n#   LinearRegression\n# NYHETER 2017 OKT 23\n#   SingaporeMult\n#   SingaporeMultComplex\n#   SingaporeMultPolynom\n# NYHETER 2017 OKT 19\n#   2048\n# NYHETER 2017 OKT 10\n#   ChessOne\n#   ChessMany\n# NYHETER 2017 SEP 29\n#   GUI\n# NYHETER 2017 JUN 11\n#   Tetramino\n# NYHETER 2017 JUN 04\n#   BeeHaiku3D\n# NYHETER 2017 MAJ 27\n#   ForthHaiku3D\n# NYHETER 2017 MAJ 20\n#   MineSweeper\n#   Paint\n# NYHETER 2017 MAJ 13\n#   TowerOfHanoi\n#   GuessANumberHex\n#   Coordinator\n#   Tetris\n#   Blank\n#   Angle\n# NYHETER 2017 MAJ 06\n#   Reversi\n#   Shortcut2\n# NYHETER 2017 APR 29\n#   RubikCube\n#   ForthHaiku\n#   Sokoban\n# NYHETER 2017 APR 22\n#   BlackBox2D\n#   GameOfLife\n#   Moire\n#   SuperCircle\n#   CoffeescriptClock\n# NYHETER 2017 APR 15\n#   LinesOfCode\n#   ColorPair\n#   Snake Snake4\n# NYHETER 2017 APR 08\n#   OneDiceHistogram TwoDiceHistogram\n#   ClickDetector IndianSun MultiTimer\n#   Hex\n#   Shortcut Complex\n# NYHETER 2017 APR 01\n#   RandomDice\n#   Nand2TetrisALU\n#   RubikSquare\n# NYHETER 2017 MAR 26\n#   Stopwatch\n#   Korsord\n#   EngineeringNotation\n#   Nian\n#   Kalkylator\n# NYHETER 2017 MAR 19\n#   PickingBerries\n# NYHETER 2017 MAR 12\n#   Roulette\n# NYHETER 2017 MAR 05\n#   TwoArcs\n#   Girlang Braid OlympicRings\n#   GoldenStar Alphanumeric BoardGame SevenSegment\n#   Connect4 SpaceShip\n#   RushHour ChessGame",
  a: ""
};

ID_Asserts = {
  v: '2017-04-29',
  k: '',
  l: 0,
  h: 0,
  b: "# Här kan du se några klargörande exempel.\n# Om de två parametrarna till assert är olika, skrivs de ut till console.\n# Du kan prova egna asserts här. Kontrollera med F12.\n\n# + - * / // **  Operatorer\nassert -10,  2 - 3 * 4\nassert 2.75, 2 + 3 / 4\nassert 32,   4 * 2 ** 3\nassert 14,   2 + 3 * 4\nassert 20,   (2+3) * 4\nassert 1.75, 7 / 4\nassert 1,    7 // 4\nassert 2,    8 // 4\n\n# % Resten vid heltalsdivision\nassert  0,  2 % 2\nassert  1,  1 % 2\nassert  0,  0 % 2\nassert -1, -1 % 2\nassert -0, -2 % 2\n\n# %% Resten vid heltalsdivision. Klarar även negativa tal.\nassert 0,  2 %% 2\nassert 1,  1 %% 2\nassert 0,  0 %% 2\nassert 1, -1 %% 2\nassert 0, -2 %% 2\n\n# Jämförelser\nassert true,  1+2 < 4\nassert true,  1+2 > 2\nassert true,  1+2 == 3\nassert false, 1+2 == 4\nassert true,  1+2 != 4\nassert true,  1+2 >= 3\nassert true,  1+2 <= 4\nassert true,  1 < 2 and 2 < 3\nassert true,  1 < 2 < 3\n\n# and or not  Logiska villkor\nassert false, false and false\nassert false, false and true\nassert false, true and false\nassert true,  true and true\n\nassert false, false or false\nassert true,  false or true\nassert true,  true or false\nassert true,  true or true\n\nassert true,  not false\nassert false, not true\n\n# if then else\nassert 4, if 3 > 4 then 3 else 4\nassert 3, if 3 < 4 then 3 else 4\n\n# '' \"\" strängar\nassert 'Coffeescript',            'Coffee' + 'script'\nassert 6,                         'Coffee'.length\nassert 2,                         'Coffee'.indexOf 'f'\nassert -1,                        'Coffee'.indexOf 'x'\nassert 3,                         'Coffee'.lastIndexOf 'f'\nassert 'script',                  'Coffeescript'.slice 6,12\nassert 'script',                  'Coffeescript'.slice 6\nassert 'COFFEESCRIPT',            'Coffeescript'.toUpperCase()\nassert 'coffeescript',            'Coffeescript'.toLowerCase()\nassert 's',                       'Coffeescript'[6]\nassert 'script',                  'Coffeescript'[6..12]\nassert 'pt',                      'Coffeescript'[-2..]\nassert 'esc',                     'Coffeescript'[5..-5]\nassert ['abra','ka','dabra'],     'abra ka dabra'.split ' '\nassert ['C','o','f','f','e','e'], 'Coffee'.split ''\nassert ['C','o','f','f','e','e'], 'Coffee'.split ''\nassert 'Coffee',                  ' Coffee  '.trim()\nassert 12,                        parseInt '12'\nassert '12',                      12.toString()\nassert 3.14,                      parseFloat '3.14'\nassert '3.141592653589793',       Math.PI.toString()\nassert 'coffee',                  \"coffee\"\nassert true,                      'coffeescript'.includes 'coffee'\nassert false,                     'coffeescript'.includes 'tea'\n\n# []\nassert true, 7 in [7,8]\nassert [7,8],         (i for i in [7,8])\nassert [[7,0],[8,1]], ([item,i] for item,i in [7,8])\nassert [9,16,25],     (x*x for x in [3,4,5])\nassert \"1x2x3\",       [1,2,3].join('x')\nassert [3,2,1] ,      [1,2,3].reverse()\nassert [1,2,3],       [2,1,3].sort()\nassert 3,             [2,1,5].length\n\n# {}\nassert true,              'b' of {a:7,b:8}\nassert ['a','b'],         (key for key of {a:7,b:8})\nassert [['a',7],['b',8]], ([key,item] for key,item of {a:7,b:8})\n\n# & | ^ ~ << >> Bit operationer\nassert [0,0,0,1], [0&0, 0&1, 1&0, 1&1]       # and\nassert [0,1,1,1], [0|0, 0|1, 1|0, 1|1]       # or\nassert [0,1,1,0], [0^0, 0^1, 1^0, 1^1]       # xor\nassert [-1,-2,-3],[~0, ~1, ~2]               # not\nassert [1,2,4,8], [1<<0, 1<<1, 1<<2, 1<<3]   # shift left\nassert [8,4,2,1], [8>>0, 8>>1, 8>>2, 8>>3]   # shift right\n\n# lerp\nassert  8, lerp 10,12,-1\nassert 10, lerp 10,12,0\nassert 11, lerp 10,12,0.5\nassert 12, lerp 10,12,1\nassert 14, lerp 10,12,2\n\n# range\nassert [0,1,2,3,4,5,6,7,8,9]  , range 10\nassert [0,1,2,3,4]            , range 5\nassert [1,2,3,4,5,6,7,8,9,10] , range 1,11\nassert [0,2,4,6,8]            , range 0,10,2\nassert [10,8,6,4,2]           , range 10,0,-2\nassert [9,8,7,6,5,4,3,2,1,0]  , range 10-1,-1,-1\n\n# [..] [...]  range operator\nassert [0,1,2,3,4], [0..4]\nassert [0,1,2,3,4], [0...5]\nassert [6,7],       [5,6,7,8,9][1..2]\nassert [5,6,7],     [5,6,7,8,9][..2]\nassert [6,7,8,9],   [5,6,7,8,9][1..]\nassert [5,6,7,8,9], [5,6,7,8,9][..]\nassert [5,6,7],     [5,6,7,8,9][0..2]\nassert [6,7],       [5,6,7,8,9][1...-2]\nassert [8,9],       [5,6,7,8,9][-2..]\n\n# _.  underscore\nassert 1,                 _.min [2,1,3]\nassert 3,                 _.max [2,1,3]\nassert 2,                 _.first [2,1,3]\nassert 3,                 _.last [2,1,3]\nassert [1,3],             _.rest [2,1,3]\nassert [['a',1],['b',2]], _.pairs {a:1, b:2}\n\nassert true,              \"abc\" == \"abc\"\nassert false,             [1,2] == [1,2]\nassert true,              _.isEqual [1,2], [1,2]\nassert false,              {a:1, b:2} == {a:1, b:2}\nassert true,              _.isEqual {a:1, b:2}, {a:1, b:2}\nassert [1,2],             [1,2]\n\nassert [1,2,3],           _.sortBy [2,1,3]\nassert ['abc','ba','d'],  _.sortBy ['ba','abc','d']\nassert ['d','ba','abc'],  _.sortBy ['ba','abc','d'], 'length'\nassert ['abc','ba','d'],  _.sortBy ['ba','abc','d'], (s) -> -s.length\n\nassert {odd: 3, even: 2}, _.countBy [1,2,3,4,5], (num) -> if num % 2 == 0 then 'even' else 'odd'\nassert [[\"m\",3], [\"l\",4], [\"c\",5]],  _.zip ['m','l','c'], [3,4,5]\nassert [['m','l','c'], [3,4,5]],  _.unzip [[\"m\",3], [\"l\",4], [\"c\",5]]\n\nassert [2, 4, 6],         _.filter [1,2,3,4,5,6], (num) -> num % 2 == 0\nassert [1, 3, 5],         _.reject [1,2,3,4,5,6], (num) -> num % 2 == 0\n\nassert false,             _.some [1>2, 1==2, 1>=2, 1!=1]\nassert true,              _.some [1>2, 1==2, 1>=2, 1!=2]\nassert false,             _.every [2,4,5], (num) -> num % 2 == 0\nassert true,              _.every [2,4,6], (num) -> num % 2 == 0\n\nassert [\"a\", \"b\", \"c\"],   _.keys   {a:1, b:2, c:3}\nassert [1,2,3],           _.values {a:1, b:2, c:3}\n",
  a: "",
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Assertion_(software_development)",
    p5Assert: 'https://christernilsson.github.io/p5Assert'
  }
};

ID_LinesOfCode = {
  v: '2017-05-13',
  k: 'bg fc sc [] {} operators if parseInt _.max rect for text class',
  l: 60,
  h: 3,
  b: "class LinesOfCode extends Application\n	reset : -> super\n	draw : ->\napp = new LinesOfCode",
  a: "class LinesOfCode extends Application\n	reset : ->\n		super\n		@chapter = -1\n		@stat = {}\n		@h = 13\n		@total = 0\n		for chapter,item1 of data\n			if chapter not in ['Information','Exhibition']\n				@stat[chapter] = {}\n				for exercise,item2 of item1\n					loc = item2.l\n					@total += loc\n					@stat[chapter][exercise] = loc\n	draw : ->\n		fc 1,1,0\n		sc()\n		if @chapter == -1 then @drawAll() else @drawChapter()\n	drawAll : ->\n		bg 0\n		i = 0\n		rects = []\n		for chapter,item1 of @stat\n			sum = 0\n			for exercise,item2 of item1\n				sum += item2\n			i++\n			textAlign LEFT\n			text chapter,5,i*@h\n			textAlign RIGHT\n			text sum,195,i*@h\n			rects.push sum\n		@max = _.max rects\n		@drawRects rects, @max\n	drawChapter : ->\n		bg 0.5\n		i=0\n		rects = []\n		for chapter,item1 of @stat\n			i++\n			if i == @chapter\n				j = 0\n				for exercise,item2 of item1\n					j++\n					textAlign LEFT\n					text exercise,5,j*@h\n					textAlign RIGHT\n					text item2,195,j*@h\n					rects.push item2\n		@drawRects rects, @max\n	drawRects : (rects,m) ->\n		fc 1,1,0,0.5\n		sc 1,1,0\n		for r,i in rects\n			rect 0,3+@h*i, 200*r/m,@h-2\n	mousePressed : (mx,my) ->\n		if @chapter == -1\n			@chapter = 1 + int my / @h\n		else\n			@chapter = -1\n\napp = new LinesOfCode 'a'",
  c: {
    app: "reset()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Source_lines_of_code"
  }
};
//# sourceMappingURL=ZL.js.map
