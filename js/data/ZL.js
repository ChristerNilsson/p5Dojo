// Generated by CoffeeScript 1.11.1
var ID_Asserts, ID_LinesOfCode, ID_nyheter;

ID_nyheter = {
  v: '2017-05-13',
  k: '',
  b: "# LOC:0\n# NYHETER 2017 MAJ 13\n#   GuessANumberHex\n#   Coordinator\n#   Tetris\n#   Blank\n#   Angle\n# NYHETER 2017 MAJ 06\n#   Reversi\n#   Shortcut2\n# NYHETER 2017 APR 29\n#   RubikCube\n#   ForthHaiku\n#   Sokoban\n# NYHETER 2017 APR 22\n#   BlackBox2D\n#   GameOfLife\n#   Moire\n#   SuperCircle\n#   CoffeescriptClock\n# NYHETER 2017 APR 15\n#   LinesOfCode\n#   ColorPair\n#   Snake Snake4\n# NYHETER 2017 APR 08\n#   OneDiceHistogram TwoDiceHistogram\n#   ClickDetector IndianSun MultiTimer\n#   Hex\n#   Shortcut Complex\n# NYHETER 2017 APR 01\n#   RandomDice\n#   Nand2TetrisALU\n#   RubikSquare\n# NYHETER 2017 MAR 26\n#   Stopwatch\n#   Korsord\n#   EngineeringNotation\n#   Nian\n#   Kalkylator\n# NYHETER 2017 MAR 19\n#   PickingBerries\n# NYHETER 2017 MAR 12\n#   Roulette\n# NYHETER 2017 MAR 05\n#   TwoArcs\n#   Girlang Braid OlympicRings\n#   GoldenStar Alphanumeric BoardGame SevenSegment\n#   Connect4 SpaceShip\n#   RushHour ChessGame",
  a: ""
};

ID_Asserts = {
  v: '2017-04-29',
  k: '',
  b: "# LOC:0\n# Här kan du se några klargörande exempel.\n# Om de två parametrarna till assert är olika, skrivs de ut till console.\n# Du kan prova egna asserts här. Kontrollera med F12.\n\n# + - * / // **  Operatorer\nassert -10,  2 - 3 * 4\nassert 2.75, 2 + 3 / 4\nassert 32,   4 * 2 ** 3\nassert 14,   2 + 3 * 4\nassert 20,   (2+3) * 4\nassert 1.75, 7 / 4\nassert 1,    7 // 4\nassert 2,    8 // 4\n\n# % Resten vid heltalsdivision\nassert  0,  2 % 2\nassert  1,  1 % 2\nassert  0,  0 % 2\nassert -1, -1 % 2\nassert -0, -2 % 2\n\n# %% Resten vid heltalsdivision. Klarar även negativa tal.\nassert 0,  2 %% 2\nassert 1,  1 %% 2\nassert 0,  0 %% 2\nassert 1, -1 %% 2\nassert 0, -2 %% 2\n\n# Jämförelser\nassert true,  1+2 < 4\nassert true,  1+2 > 2\nassert true,  1+2 == 3\nassert false, 1+2 == 4\nassert true,  1+2 != 4\nassert true,  1+2 >= 3\nassert true,  1+2 <= 4\nassert true,  1 < 2 and 2 < 3\nassert true,  1 < 2 < 3\n\n# and or not  Logiska villkor\nassert false, false and false\nassert false, false and true\nassert false, true and false\nassert true,  true and true\n\nassert false, false or false\nassert true,  false or true\nassert true,  true or false\nassert true,  true or true\n\nassert true,  not false\nassert false, not true\n\n# if then else\nassert 4, if 3 > 4 then 3 else 4\nassert 3, if 3 < 4 then 3 else 4\n\n# '' \"\" strängar\nassert 'Coffeescript',            'Coffee' + 'script'\nassert 6,                         'Coffee'.length\nassert 2,                         'Coffee'.indexOf 'f'\nassert -1,                        'Coffee'.indexOf 'x'\nassert 3,                         'Coffee'.lastIndexOf 'f'\nassert 'script',                  'Coffeescript'.slice 6,12\nassert 'script',                  'Coffeescript'.slice 6\nassert 'COFFEESCRIPT',            'Coffeescript'.toUpperCase()\nassert 'coffeescript',            'Coffeescript'.toLowerCase()\nassert 's',                       'Coffeescript'[6]\nassert 'script',                  'Coffeescript'[6..12]\nassert 'pt',                      'Coffeescript'[-2..]\nassert 'esc',                     'Coffeescript'[5..-5]\nassert ['abra','ka','dabra'],     'abra ka dabra'.split ' '\nassert ['C','o','f','f','e','e'], 'Coffee'.split ''\nassert ['C','o','f','f','e','e'], 'Coffee'.split ''\nassert 'Coffee',                  ' Coffee  '.trim()\nassert 12,                        parseInt '12'\nassert '12',                      12.toString()\nassert 3.14,                      parseFloat '3.14'\nassert '3.141592653589793',       Math.PI.toString()\nassert 'coffee',                  \"coffee\"\nassert true,                      'coffeescript'.includes 'coffee'\nassert false,                     'coffeescript'.includes 'tea'\n\n# []\nassert true, 7 in [7,8]\nassert [7,8],         (i for i in [7,8])\nassert [[7,0],[8,1]], ([item,i] for item,i in [7,8])\nassert [9,16,25],     (x*x for x in [3,4,5])\nassert \"1x2x3\",       [1,2,3].join('x')\nassert [3,2,1] ,      [1,2,3].reverse()\nassert [1,2,3],       [2,1,3].sort()\nassert 3,             [2,1,5].length\n\n# {}\nassert true,              'b' of {a:7,b:8}\nassert ['a','b'],         (key for key of {a:7,b:8})\nassert [['a',7],['b',8]], ([key,item] for key,item of {a:7,b:8})\n\n# & | ^ ~ << >> Bit operationer\nassert [0,0,0,1], [0&0, 0&1, 1&0, 1&1]       # and\nassert [0,1,1,1], [0|0, 0|1, 1|0, 1|1]       # or\nassert [0,1,1,0], [0^0, 0^1, 1^0, 1^1]       # xor\nassert [-1,-2,-3],[~0, ~1, ~2]               # not\nassert [1,2,4,8], [1<<0, 1<<1, 1<<2, 1<<3]   # shift left\nassert [8,4,2,1], [8>>0, 8>>1, 8>>2, 8>>3]   # shift right\n\n# lerp\nassert  8, lerp 10,12,-1\nassert 10, lerp 10,12,0\nassert 11, lerp 10,12,0.5\nassert 12, lerp 10,12,1\nassert 14, lerp 10,12,2\n\n# range\nassert [0,1,2,3,4,5,6,7,8,9]  , range 10\nassert [0,1,2,3,4]            , range 5\nassert [1,2,3,4,5,6,7,8,9,10] , range 1,11\nassert [0,2,4,6,8]            , range 0,10,2\nassert [10,8,6,4,2]           , range 10,0,-2\nassert [9,8,7,6,5,4,3,2,1,0]  , range 10-1,-1,-1\n\n# [..] [...]  range operator\nassert [0,1,2,3,4], [0..4]\nassert [0,1,2,3,4], [0...5]\nassert [6,7],       [5,6,7,8,9][1..2]\nassert [5,6,7],     [5,6,7,8,9][..2]\nassert [6,7,8,9],   [5,6,7,8,9][1..]\nassert [5,6,7,8,9], [5,6,7,8,9][..]\nassert [5,6,7],     [5,6,7,8,9][0..2]\nassert [6,7],       [5,6,7,8,9][1...-2]\nassert [8,9],       [5,6,7,8,9][-2..]\n\n# _.  underscore\nassert 1,                 _.min [2,1,3]\nassert 3,                 _.max [2,1,3]\nassert 2,                 _.first [2,1,3]\nassert 3,                 _.last [2,1,3]\nassert [1,3],             _.rest [2,1,3]\nassert [['a',1],['b',2]], _.pairs {a:1, b:2}\n\nassert true,              \"abc\" == \"abc\"\nassert false,             [1,2] == [1,2]\nassert true,              _.isEqual [1,2], [1,2]\nassert false,              {a:1, b:2} == {a:1, b:2}\nassert true,              _.isEqual {a:1, b:2}, {a:1, b:2}\nassert [1,2],             [1,2]\n\nassert [1,2,3],           _.sortBy [2,1,3]\nassert ['abc','ba','d'],  _.sortBy ['ba','abc','d']\nassert ['d','ba','abc'],  _.sortBy ['ba','abc','d'], 'length'\nassert ['abc','ba','d'],  _.sortBy ['ba','abc','d'], (s) -> -s.length\n\nassert {odd: 3, even: 2}, _.countBy [1,2,3,4,5], (num) -> if num % 2 == 0 then 'even' else 'odd'\nassert [[\"m\",3], [\"l\",4], [\"c\",5]],  _.zip ['m','l','c'], [3,4,5]\nassert [['m','l','c'], [3,4,5]],  _.unzip [[\"m\",3], [\"l\",4], [\"c\",5]]\n\nassert [2, 4, 6],         _.filter [1,2,3,4,5,6], (num) -> num % 2 == 0\nassert [1, 3, 5],         _.reject [1,2,3,4,5,6], (num) -> num % 2 == 0\n\nassert false,             _.some [1>2, 1==2, 1>=2, 1!=1]\nassert true,              _.some [1>2, 1==2, 1>=2, 1!=2]\nassert false,             _.every [2,4,5], (num) -> num % 2 == 0\nassert true,              _.every [2,4,6], (num) -> num % 2 == 0\n\nassert [\"a\", \"b\", \"c\"],   _.keys   {a:1, b:2, c:3}\nassert [1,2,3],           _.values {a:1, b:2, c:3}\n",
  a: "",
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Assertion_(software_development)",
    p5Assert: 'https://christernilsson.github.io/p5Assert'
  }
};

ID_LinesOfCode = {
  v: '2017-05-12',
  k: 'bg fc sc [] {} operators if parseInt _.max rect for text class',
  b: "# LOC:62\n\nclass LinesOfCode extends Application\n	reset : -> super\n	draw : ->\napp = new LinesOfCode",
  a: "class LinesOfCode extends Application\n	reset : ->\n		super\n		@chapter = -1\n		@stat = {}\n		@h = 13\n		@total = 0\n		for chapter,item1 of data\n			if chapter not in ['Information','Exhibition']\n				@stat[chapter] = {}\n				for exercise,item2 of item1\n					b = item2.b\n					p1 = b.indexOf 'LOC:'\n					#p2 = b.indexOf ' ',p1\n					loc = parseInt b.substring p1+4 #,p2\n					@total += loc\n					@stat[chapter][exercise] = loc\n	draw : ->\n		fc 1,1,0\n		sc()\n		if @chapter == -1 then @drawAll() else @drawChapter()\n	drawAll : ->\n		bg 0\n		i = 0\n		rects = []\n		for chapter,item1 of @stat\n			sum = 0\n			for exercise,item2 of item1\n				sum += item2\n			i++\n			textAlign LEFT\n			text chapter,5,i*@h\n			textAlign RIGHT\n			text sum,195,i*@h\n			rects.push sum\n		@max = _.max rects\n		@drawRects rects, @max\n	drawChapter : ->\n		bg 0.5\n		i=0\n		rects = []\n		for chapter,item1 of @stat\n			i++\n			if i == @chapter\n				j = 0\n				for exercise,item2 of item1\n					j++\n					textAlign LEFT\n					text exercise,5,j*@h\n					textAlign RIGHT\n					text item2,195,j*@h\n					rects.push item2\n		@drawRects rects, @max\n	drawRects : (rects,m) ->\n		fc 1,1,0,0.5\n		sc 1,1,0\n		for r,i in rects\n			rect 0,3+@h*i, 200*r/m,@h-2\n	mousePressed : (mx,my) ->\n		if @chapter == -1\n			@chapter = 1 + int my / @h\n		else\n			@chapter = -1\n\napp = new LinesOfCode 'a'",
  c: {
    app: "reset()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Source_lines_of_code"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWkwuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uIiwic291cmNlcyI6WyJjb2ZmZWVcXGRhdGFcXFpMLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBQSxVQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxFQURGO0VBRUEsQ0FBQSxFQUFFLGc4QkFGRjtFQXFEQSxDQUFBLEVBQUUsRUFyREY7OztBQXdERCxVQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxFQURGO0VBRUEsQ0FBQSxFQUFFLG94TEFGRjtFQTRLQSxDQUFBLEVBQUUsRUE1S0Y7RUE2S0EsQ0FBQSxFQUNDO0lBQUEsU0FBQSxFQUFZLGdFQUFaO0lBQ0EsUUFBQSxFQUFXLDRDQURYO0dBOUtEOzs7QUFpTEQsY0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsZ0VBREY7RUFFQSxDQUFBLEVBQUUseUdBRkY7RUFVQSxDQUFBLEVBQUUsdTFDQVZGO0VBNkVBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSxTQUFOO0dBOUVEO0VBK0VBLENBQUEsRUFDQztJQUFBLFNBQUEsRUFBWSxvREFBWjtHQWhGRCIsInNvdXJjZXNDb250ZW50IjpbIklEX255aGV0ZXIgPVxuXHR2OicyMDE3LTA1LTEzJ1xuXHRrOicnXG5cdGI6XCJcIlwiXG4jIExPQzowXG4jIE5ZSEVURVIgMjAxNyBNQUogMTNcbiMgICBHdWVzc0FOdW1iZXJIZXhcbiMgICBDb29yZGluYXRvclxuIyAgIFRldHJpc1xuIyAgIEJsYW5rXG4jICAgQW5nbGVcbiMgTllIRVRFUiAyMDE3IE1BSiAwNlxuIyAgIFJldmVyc2lcbiMgICBTaG9ydGN1dDJcbiMgTllIRVRFUiAyMDE3IEFQUiAyOVxuIyAgIFJ1YmlrQ3ViZVxuIyAgIEZvcnRoSGFpa3VcbiMgICBTb2tvYmFuXG4jIE5ZSEVURVIgMjAxNyBBUFIgMjJcbiMgICBCbGFja0JveDJEXG4jICAgR2FtZU9mTGlmZVxuIyAgIE1vaXJlXG4jICAgU3VwZXJDaXJjbGVcbiMgICBDb2ZmZWVzY3JpcHRDbG9ja1xuIyBOWUhFVEVSIDIwMTcgQVBSIDE1XG4jICAgTGluZXNPZkNvZGVcbiMgICBDb2xvclBhaXJcbiMgICBTbmFrZSBTbmFrZTRcbiMgTllIRVRFUiAyMDE3IEFQUiAwOFxuIyAgIE9uZURpY2VIaXN0b2dyYW0gVHdvRGljZUhpc3RvZ3JhbVxuIyAgIENsaWNrRGV0ZWN0b3IgSW5kaWFuU3VuIE11bHRpVGltZXJcbiMgICBIZXhcbiMgICBTaG9ydGN1dCBDb21wbGV4XG4jIE5ZSEVURVIgMjAxNyBBUFIgMDFcbiMgICBSYW5kb21EaWNlXG4jICAgTmFuZDJUZXRyaXNBTFVcbiMgICBSdWJpa1NxdWFyZVxuIyBOWUhFVEVSIDIwMTcgTUFSIDI2XG4jICAgU3RvcHdhdGNoXG4jICAgS29yc29yZFxuIyAgIEVuZ2luZWVyaW5nTm90YXRpb25cbiMgICBOaWFuXG4jICAgS2Fsa3lsYXRvclxuIyBOWUhFVEVSIDIwMTcgTUFSIDE5XG4jICAgUGlja2luZ0JlcnJpZXNcbiMgTllIRVRFUiAyMDE3IE1BUiAxMlxuIyAgIFJvdWxldHRlXG4jIE5ZSEVURVIgMjAxNyBNQVIgMDVcbiMgICBUd29BcmNzXG4jICAgR2lybGFuZyBCcmFpZCBPbHltcGljUmluZ3NcbiMgICBHb2xkZW5TdGFyIEFscGhhbnVtZXJpYyBCb2FyZEdhbWUgU2V2ZW5TZWdtZW50XG4jICAgQ29ubmVjdDQgU3BhY2VTaGlwXG4jICAgUnVzaEhvdXIgQ2hlc3NHYW1lXG5cIlwiXCJcblx0YTpcIlwiXCJcblwiXCJcIlxuXG5JRF9Bc3NlcnRzID1cblx0djonMjAxNy0wNC0yOSdcblx0azonJ1xuXHRiOlwiXCJcIlxuIyBMT0M6MFxuIyBIw6RyIGthbiBkdSBzZSBuw6VncmEga2xhcmfDtnJhbmRlIGV4ZW1wZWwuXG4jIE9tIGRlIHR2w6UgcGFyYW1ldHJhcm5hIHRpbGwgYXNzZXJ0IMOkciBvbGlrYSwgc2tyaXZzIGRlIHV0IHRpbGwgY29uc29sZS5cbiMgRHUga2FuIHByb3ZhIGVnbmEgYXNzZXJ0cyBow6RyLiBLb250cm9sbGVyYSBtZWQgRjEyLlxuXG4jICsgLSAqIC8gLy8gKiogIE9wZXJhdG9yZXJcbmFzc2VydCAtMTAsICAyIC0gMyAqIDRcbmFzc2VydCAyLjc1LCAyICsgMyAvIDRcbmFzc2VydCAzMiwgICA0ICogMiAqKiAzXG5hc3NlcnQgMTQsICAgMiArIDMgKiA0XG5hc3NlcnQgMjAsICAgKDIrMykgKiA0XG5hc3NlcnQgMS43NSwgNyAvIDRcbmFzc2VydCAxLCAgICA3IC8vIDRcbmFzc2VydCAyLCAgICA4IC8vIDRcblxuIyAlIFJlc3RlbiB2aWQgaGVsdGFsc2RpdmlzaW9uXG5hc3NlcnQgIDAsICAyICUgMlxuYXNzZXJ0ICAxLCAgMSAlIDJcbmFzc2VydCAgMCwgIDAgJSAyXG5hc3NlcnQgLTEsIC0xICUgMlxuYXNzZXJ0IC0wLCAtMiAlIDJcblxuIyAlJSBSZXN0ZW4gdmlkIGhlbHRhbHNkaXZpc2lvbi4gS2xhcmFyIMOkdmVuIG5lZ2F0aXZhIHRhbC5cbmFzc2VydCAwLCAgMiAlJSAyXG5hc3NlcnQgMSwgIDEgJSUgMlxuYXNzZXJ0IDAsICAwICUlIDJcbmFzc2VydCAxLCAtMSAlJSAyXG5hc3NlcnQgMCwgLTIgJSUgMlxuXG4jIErDpG1mw7ZyZWxzZXJcbmFzc2VydCB0cnVlLCAgMSsyIDwgNFxuYXNzZXJ0IHRydWUsICAxKzIgPiAyXG5hc3NlcnQgdHJ1ZSwgIDErMiA9PSAzXG5hc3NlcnQgZmFsc2UsIDErMiA9PSA0XG5hc3NlcnQgdHJ1ZSwgIDErMiAhPSA0XG5hc3NlcnQgdHJ1ZSwgIDErMiA+PSAzXG5hc3NlcnQgdHJ1ZSwgIDErMiA8PSA0XG5hc3NlcnQgdHJ1ZSwgIDEgPCAyIGFuZCAyIDwgM1xuYXNzZXJ0IHRydWUsICAxIDwgMiA8IDNcblxuIyBhbmQgb3Igbm90ICBMb2dpc2thIHZpbGxrb3JcbmFzc2VydCBmYWxzZSwgZmFsc2UgYW5kIGZhbHNlXG5hc3NlcnQgZmFsc2UsIGZhbHNlIGFuZCB0cnVlXG5hc3NlcnQgZmFsc2UsIHRydWUgYW5kIGZhbHNlXG5hc3NlcnQgdHJ1ZSwgIHRydWUgYW5kIHRydWVcblxuYXNzZXJ0IGZhbHNlLCBmYWxzZSBvciBmYWxzZVxuYXNzZXJ0IHRydWUsICBmYWxzZSBvciB0cnVlXG5hc3NlcnQgdHJ1ZSwgIHRydWUgb3IgZmFsc2VcbmFzc2VydCB0cnVlLCAgdHJ1ZSBvciB0cnVlXG5cbmFzc2VydCB0cnVlLCAgbm90IGZhbHNlXG5hc3NlcnQgZmFsc2UsIG5vdCB0cnVlXG5cbiMgaWYgdGhlbiBlbHNlXG5hc3NlcnQgNCwgaWYgMyA+IDQgdGhlbiAzIGVsc2UgNFxuYXNzZXJ0IDMsIGlmIDMgPCA0IHRoZW4gMyBlbHNlIDRcblxuIyAnJyBcIlwiIHN0csOkbmdhclxuYXNzZXJ0ICdDb2ZmZWVzY3JpcHQnLCAgICAgICAgICAgICdDb2ZmZWUnICsgJ3NjcmlwdCdcbmFzc2VydCA2LCAgICAgICAgICAgICAgICAgICAgICAgICAnQ29mZmVlJy5sZW5ndGhcbmFzc2VydCAyLCAgICAgICAgICAgICAgICAgICAgICAgICAnQ29mZmVlJy5pbmRleE9mICdmJ1xuYXNzZXJ0IC0xLCAgICAgICAgICAgICAgICAgICAgICAgICdDb2ZmZWUnLmluZGV4T2YgJ3gnXG5hc3NlcnQgMywgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvZmZlZScubGFzdEluZGV4T2YgJ2YnXG5hc3NlcnQgJ3NjcmlwdCcsICAgICAgICAgICAgICAgICAgJ0NvZmZlZXNjcmlwdCcuc2xpY2UgNiwxMlxuYXNzZXJ0ICdzY3JpcHQnLCAgICAgICAgICAgICAgICAgICdDb2ZmZWVzY3JpcHQnLnNsaWNlIDZcbmFzc2VydCAnQ09GRkVFU0NSSVBUJywgICAgICAgICAgICAnQ29mZmVlc2NyaXB0Jy50b1VwcGVyQ2FzZSgpXG5hc3NlcnQgJ2NvZmZlZXNjcmlwdCcsICAgICAgICAgICAgJ0NvZmZlZXNjcmlwdCcudG9Mb3dlckNhc2UoKVxuYXNzZXJ0ICdzJywgICAgICAgICAgICAgICAgICAgICAgICdDb2ZmZWVzY3JpcHQnWzZdXG5hc3NlcnQgJ3NjcmlwdCcsICAgICAgICAgICAgICAgICAgJ0NvZmZlZXNjcmlwdCdbNi4uMTJdXG5hc3NlcnQgJ3B0JywgICAgICAgICAgICAgICAgICAgICAgJ0NvZmZlZXNjcmlwdCdbLTIuLl1cbmFzc2VydCAnZXNjJywgICAgICAgICAgICAgICAgICAgICAnQ29mZmVlc2NyaXB0J1s1Li4tNV1cbmFzc2VydCBbJ2FicmEnLCdrYScsJ2RhYnJhJ10sICAgICAnYWJyYSBrYSBkYWJyYScuc3BsaXQgJyAnXG5hc3NlcnQgWydDJywnbycsJ2YnLCdmJywnZScsJ2UnXSwgJ0NvZmZlZScuc3BsaXQgJydcbmFzc2VydCBbJ0MnLCdvJywnZicsJ2YnLCdlJywnZSddLCAnQ29mZmVlJy5zcGxpdCAnJ1xuYXNzZXJ0ICdDb2ZmZWUnLCAgICAgICAgICAgICAgICAgICcgQ29mZmVlICAnLnRyaW0oKVxuYXNzZXJ0IDEyLCAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50ICcxMidcbmFzc2VydCAnMTInLCAgICAgICAgICAgICAgICAgICAgICAxMi50b1N0cmluZygpXG5hc3NlcnQgMy4xNCwgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCAnMy4xNCdcbmFzc2VydCAnMy4xNDE1OTI2NTM1ODk3OTMnLCAgICAgICBNYXRoLlBJLnRvU3RyaW5nKClcbmFzc2VydCAnY29mZmVlJywgICAgICAgICAgICAgICAgICBcImNvZmZlZVwiXG5hc3NlcnQgdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgJ2NvZmZlZXNjcmlwdCcuaW5jbHVkZXMgJ2NvZmZlZSdcbmFzc2VydCBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAnY29mZmVlc2NyaXB0Jy5pbmNsdWRlcyAndGVhJ1xuXG4jIFtdXG5hc3NlcnQgdHJ1ZSwgNyBpbiBbNyw4XVxuYXNzZXJ0IFs3LDhdLCAgICAgICAgIChpIGZvciBpIGluIFs3LDhdKVxuYXNzZXJ0IFtbNywwXSxbOCwxXV0sIChbaXRlbSxpXSBmb3IgaXRlbSxpIGluIFs3LDhdKVxuYXNzZXJ0IFs5LDE2LDI1XSwgICAgICh4KnggZm9yIHggaW4gWzMsNCw1XSlcbmFzc2VydCBcIjF4MngzXCIsICAgICAgIFsxLDIsM10uam9pbigneCcpXG5hc3NlcnQgWzMsMiwxXSAsICAgICAgWzEsMiwzXS5yZXZlcnNlKClcbmFzc2VydCBbMSwyLDNdLCAgICAgICBbMiwxLDNdLnNvcnQoKVxuYXNzZXJ0IDMsICAgICAgICAgICAgIFsyLDEsNV0ubGVuZ3RoXG5cbiMge31cbmFzc2VydCB0cnVlLCAgICAgICAgICAgICAgJ2InIG9mIHthOjcsYjo4fVxuYXNzZXJ0IFsnYScsJ2InXSwgICAgICAgICAoa2V5IGZvciBrZXkgb2Yge2E6NyxiOjh9KVxuYXNzZXJ0IFtbJ2EnLDddLFsnYicsOF1dLCAoW2tleSxpdGVtXSBmb3Iga2V5LGl0ZW0gb2Yge2E6NyxiOjh9KVxuXG4jICYgfCBeIH4gPDwgPj4gQml0IG9wZXJhdGlvbmVyXG5hc3NlcnQgWzAsMCwwLDFdLCBbMCYwLCAwJjEsIDEmMCwgMSYxXSAgICAgICAjIGFuZFxuYXNzZXJ0IFswLDEsMSwxXSwgWzB8MCwgMHwxLCAxfDAsIDF8MV0gICAgICAgIyBvclxuYXNzZXJ0IFswLDEsMSwwXSwgWzBeMCwgMF4xLCAxXjAsIDFeMV0gICAgICAgIyB4b3JcbmFzc2VydCBbLTEsLTIsLTNdLFt+MCwgfjEsIH4yXSAgICAgICAgICAgICAgICMgbm90XG5hc3NlcnQgWzEsMiw0LDhdLCBbMTw8MCwgMTw8MSwgMTw8MiwgMTw8M10gICAjIHNoaWZ0IGxlZnRcbmFzc2VydCBbOCw0LDIsMV0sIFs4Pj4wLCA4Pj4xLCA4Pj4yLCA4Pj4zXSAgICMgc2hpZnQgcmlnaHRcblxuIyBsZXJwXG5hc3NlcnQgIDgsIGxlcnAgMTAsMTIsLTFcbmFzc2VydCAxMCwgbGVycCAxMCwxMiwwXG5hc3NlcnQgMTEsIGxlcnAgMTAsMTIsMC41XG5hc3NlcnQgMTIsIGxlcnAgMTAsMTIsMVxuYXNzZXJ0IDE0LCBsZXJwIDEwLDEyLDJcblxuIyByYW5nZVxuYXNzZXJ0IFswLDEsMiwzLDQsNSw2LDcsOCw5XSAgLCByYW5nZSAxMFxuYXNzZXJ0IFswLDEsMiwzLDRdICAgICAgICAgICAgLCByYW5nZSA1XG5hc3NlcnQgWzEsMiwzLDQsNSw2LDcsOCw5LDEwXSAsIHJhbmdlIDEsMTFcbmFzc2VydCBbMCwyLDQsNiw4XSAgICAgICAgICAgICwgcmFuZ2UgMCwxMCwyXG5hc3NlcnQgWzEwLDgsNiw0LDJdICAgICAgICAgICAsIHJhbmdlIDEwLDAsLTJcbmFzc2VydCBbOSw4LDcsNiw1LDQsMywyLDEsMF0gICwgcmFuZ2UgMTAtMSwtMSwtMVxuXG4jIFsuLl0gWy4uLl0gIHJhbmdlIG9wZXJhdG9yXG5hc3NlcnQgWzAsMSwyLDMsNF0sIFswLi40XVxuYXNzZXJ0IFswLDEsMiwzLDRdLCBbMC4uLjVdXG5hc3NlcnQgWzYsN10sICAgICAgIFs1LDYsNyw4LDldWzEuLjJdXG5hc3NlcnQgWzUsNiw3XSwgICAgIFs1LDYsNyw4LDldWy4uMl1cbmFzc2VydCBbNiw3LDgsOV0sICAgWzUsNiw3LDgsOV1bMS4uXVxuYXNzZXJ0IFs1LDYsNyw4LDldLCBbNSw2LDcsOCw5XVsuLl1cbmFzc2VydCBbNSw2LDddLCAgICAgWzUsNiw3LDgsOV1bMC4uMl1cbmFzc2VydCBbNiw3XSwgICAgICAgWzUsNiw3LDgsOV1bMS4uLi0yXVxuYXNzZXJ0IFs4LDldLCAgICAgICBbNSw2LDcsOCw5XVstMi4uXVxuXG4jIF8uICB1bmRlcnNjb3JlXG5hc3NlcnQgMSwgICAgICAgICAgICAgICAgIF8ubWluIFsyLDEsM11cbmFzc2VydCAzLCAgICAgICAgICAgICAgICAgXy5tYXggWzIsMSwzXVxuYXNzZXJ0IDIsICAgICAgICAgICAgICAgICBfLmZpcnN0IFsyLDEsM11cbmFzc2VydCAzLCAgICAgICAgICAgICAgICAgXy5sYXN0IFsyLDEsM11cbmFzc2VydCBbMSwzXSwgICAgICAgICAgICAgXy5yZXN0IFsyLDEsM11cbmFzc2VydCBbWydhJywxXSxbJ2InLDJdXSwgXy5wYWlycyB7YToxLCBiOjJ9XG5cbmFzc2VydCB0cnVlLCAgICAgICAgICAgICAgXCJhYmNcIiA9PSBcImFiY1wiXG5hc3NlcnQgZmFsc2UsICAgICAgICAgICAgIFsxLDJdID09IFsxLDJdXG5hc3NlcnQgdHJ1ZSwgICAgICAgICAgICAgIF8uaXNFcXVhbCBbMSwyXSwgWzEsMl1cbmFzc2VydCBmYWxzZSwgICAgICAgICAgICAgIHthOjEsIGI6Mn0gPT0ge2E6MSwgYjoyfVxuYXNzZXJ0IHRydWUsICAgICAgICAgICAgICBfLmlzRXF1YWwge2E6MSwgYjoyfSwge2E6MSwgYjoyfVxuYXNzZXJ0IFsxLDJdLCAgICAgICAgICAgICBbMSwyXVxuXG5hc3NlcnQgWzEsMiwzXSwgICAgICAgICAgIF8uc29ydEJ5IFsyLDEsM11cbmFzc2VydCBbJ2FiYycsJ2JhJywnZCddLCAgXy5zb3J0QnkgWydiYScsJ2FiYycsJ2QnXVxuYXNzZXJ0IFsnZCcsJ2JhJywnYWJjJ10sICBfLnNvcnRCeSBbJ2JhJywnYWJjJywnZCddLCAnbGVuZ3RoJ1xuYXNzZXJ0IFsnYWJjJywnYmEnLCdkJ10sICBfLnNvcnRCeSBbJ2JhJywnYWJjJywnZCddLCAocykgLT4gLXMubGVuZ3RoXG5cbmFzc2VydCB7b2RkOiAzLCBldmVuOiAyfSwgXy5jb3VudEJ5IFsxLDIsMyw0LDVdLCAobnVtKSAtPiBpZiBudW0gJSAyID09IDAgdGhlbiAnZXZlbicgZWxzZSAnb2RkJ1xuYXNzZXJ0IFtbXCJtXCIsM10sIFtcImxcIiw0XSwgW1wiY1wiLDVdXSwgIF8uemlwIFsnbScsJ2wnLCdjJ10sIFszLDQsNV1cbmFzc2VydCBbWydtJywnbCcsJ2MnXSwgWzMsNCw1XV0sICBfLnVuemlwIFtbXCJtXCIsM10sIFtcImxcIiw0XSwgW1wiY1wiLDVdXVxuXG5hc3NlcnQgWzIsIDQsIDZdLCAgICAgICAgIF8uZmlsdGVyIFsxLDIsMyw0LDUsNl0sIChudW0pIC0+IG51bSAlIDIgPT0gMFxuYXNzZXJ0IFsxLCAzLCA1XSwgICAgICAgICBfLnJlamVjdCBbMSwyLDMsNCw1LDZdLCAobnVtKSAtPiBudW0gJSAyID09IDBcblxuYXNzZXJ0IGZhbHNlLCAgICAgICAgICAgICBfLnNvbWUgWzE+MiwgMT09MiwgMT49MiwgMSE9MV1cbmFzc2VydCB0cnVlLCAgICAgICAgICAgICAgXy5zb21lIFsxPjIsIDE9PTIsIDE+PTIsIDEhPTJdXG5hc3NlcnQgZmFsc2UsICAgICAgICAgICAgIF8uZXZlcnkgWzIsNCw1XSwgKG51bSkgLT4gbnVtICUgMiA9PSAwXG5hc3NlcnQgdHJ1ZSwgICAgICAgICAgICAgIF8uZXZlcnkgWzIsNCw2XSwgKG51bSkgLT4gbnVtICUgMiA9PSAwXG5cbmFzc2VydCBbXCJhXCIsIFwiYlwiLCBcImNcIl0sICAgXy5rZXlzICAge2E6MSwgYjoyLCBjOjN9XG5hc3NlcnQgWzEsMiwzXSwgICAgICAgICAgIF8udmFsdWVzIHthOjEsIGI6MiwgYzozfVxuXG5cIlwiXCJcblx0YTpcIlwiXG5cdGU6XG5cdFx0V2lraXBlZGlhIDogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Bc3NlcnRpb25fKHNvZnR3YXJlX2RldmVsb3BtZW50KVwiXG5cdFx0cDVBc3NlcnQgOiAnaHR0cHM6Ly9jaHJpc3Rlcm5pbHNzb24uZ2l0aHViLmlvL3A1QXNzZXJ0J1xuXG5JRF9MaW5lc09mQ29kZSA9XG5cdHY6JzIwMTctMDUtMTInXG5cdGs6J2JnIGZjIHNjIFtdIHt9IG9wZXJhdG9ycyBpZiBwYXJzZUludCBfLm1heCByZWN0IGZvciB0ZXh0IGNsYXNzJ1xuXHRiOlwiXCJcIlxuIyBMT0M6NjJcblxuY2xhc3MgTGluZXNPZkNvZGUgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+IHN1cGVyXG5cdGRyYXcgOiAtPlxuYXBwID0gbmV3IExpbmVzT2ZDb2RlXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIExpbmVzT2ZDb2RlIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QGNoYXB0ZXIgPSAtMVxuXHRcdEBzdGF0ID0ge31cblx0XHRAaCA9IDEzXG5cdFx0QHRvdGFsID0gMFxuXHRcdGZvciBjaGFwdGVyLGl0ZW0xIG9mIGRhdGFcblx0XHRcdGlmIGNoYXB0ZXIgbm90IGluIFsnSW5mb3JtYXRpb24nLCdFeGhpYml0aW9uJ11cblx0XHRcdFx0QHN0YXRbY2hhcHRlcl0gPSB7fVxuXHRcdFx0XHRmb3IgZXhlcmNpc2UsaXRlbTIgb2YgaXRlbTFcblx0XHRcdFx0XHRiID0gaXRlbTIuYlxuXHRcdFx0XHRcdHAxID0gYi5pbmRleE9mICdMT0M6J1xuXHRcdFx0XHRcdCNwMiA9IGIuaW5kZXhPZiAnICcscDFcblx0XHRcdFx0XHRsb2MgPSBwYXJzZUludCBiLnN1YnN0cmluZyBwMSs0ICMscDJcblx0XHRcdFx0XHRAdG90YWwgKz0gbG9jXG5cdFx0XHRcdFx0QHN0YXRbY2hhcHRlcl1bZXhlcmNpc2VdID0gbG9jXG5cdGRyYXcgOiAtPlxuXHRcdGZjIDEsMSwwXG5cdFx0c2MoKVxuXHRcdGlmIEBjaGFwdGVyID09IC0xIHRoZW4gQGRyYXdBbGwoKSBlbHNlIEBkcmF3Q2hhcHRlcigpXG5cdGRyYXdBbGwgOiAtPlxuXHRcdGJnIDBcblx0XHRpID0gMFxuXHRcdHJlY3RzID0gW11cblx0XHRmb3IgY2hhcHRlcixpdGVtMSBvZiBAc3RhdFxuXHRcdFx0c3VtID0gMFxuXHRcdFx0Zm9yIGV4ZXJjaXNlLGl0ZW0yIG9mIGl0ZW0xXG5cdFx0XHRcdHN1bSArPSBpdGVtMlxuXHRcdFx0aSsrXG5cdFx0XHR0ZXh0QWxpZ24gTEVGVFxuXHRcdFx0dGV4dCBjaGFwdGVyLDUsaSpAaFxuXHRcdFx0dGV4dEFsaWduIFJJR0hUXG5cdFx0XHR0ZXh0IHN1bSwxOTUsaSpAaFxuXHRcdFx0cmVjdHMucHVzaCBzdW1cblx0XHRAbWF4ID0gXy5tYXggcmVjdHNcblx0XHRAZHJhd1JlY3RzIHJlY3RzLCBAbWF4XG5cdGRyYXdDaGFwdGVyIDogLT5cblx0XHRiZyAwLjVcblx0XHRpPTBcblx0XHRyZWN0cyA9IFtdXG5cdFx0Zm9yIGNoYXB0ZXIsaXRlbTEgb2YgQHN0YXRcblx0XHRcdGkrK1xuXHRcdFx0aWYgaSA9PSBAY2hhcHRlclxuXHRcdFx0XHRqID0gMFxuXHRcdFx0XHRmb3IgZXhlcmNpc2UsaXRlbTIgb2YgaXRlbTFcblx0XHRcdFx0XHRqKytcblx0XHRcdFx0XHR0ZXh0QWxpZ24gTEVGVFxuXHRcdFx0XHRcdHRleHQgZXhlcmNpc2UsNSxqKkBoXG5cdFx0XHRcdFx0dGV4dEFsaWduIFJJR0hUXG5cdFx0XHRcdFx0dGV4dCBpdGVtMiwxOTUsaipAaFxuXHRcdFx0XHRcdHJlY3RzLnB1c2ggaXRlbTJcblx0XHRAZHJhd1JlY3RzIHJlY3RzLCBAbWF4XG5cdGRyYXdSZWN0cyA6IChyZWN0cyxtKSAtPlxuXHRcdGZjIDEsMSwwLDAuNVxuXHRcdHNjIDEsMSwwXG5cdFx0Zm9yIHIsaSBpbiByZWN0c1xuXHRcdFx0cmVjdCAwLDMrQGgqaSwgMjAwKnIvbSxAaC0yXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0XHRpZiBAY2hhcHRlciA9PSAtMVxuXHRcdFx0QGNoYXB0ZXIgPSAxICsgaW50IG15IC8gQGhcblx0XHRlbHNlXG5cdFx0XHRAY2hhcHRlciA9IC0xXG5cbmFwcCA9IG5ldyBMaW5lc09mQ29kZSAnYSdcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKVwiXG5cdGU6XG5cdFx0V2lraXBlZGlhIDogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Tb3VyY2VfbGluZXNfb2ZfY29kZVwiXG5cbiJdfQ==
//# sourceURL=C:\github\p5Dojo\coffee\data\ZL.coffee