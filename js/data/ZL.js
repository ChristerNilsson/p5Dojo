// Generated by CoffeeScript 1.11.1
var ID_Asserts, ID_LinesOfCode, ID_nyheter;

ID_nyheter = {
  v: '2017-04-29',
  b: "# LOC:0\n# NYHETER 2017 APR 29\n#   RubikCube\n#   ForthHaiku\n#   Sokoban\n# NYHETER 2017 APR 22\n#   BlackBox2D\n#   GameOfLife\n#   Moire\n#   SuperCircle\n#   CoffeescriptClock\n# NYHETER 2017 APR 15\n#   LinesOfCode\n#   ColorPair\n#   Snake Snake4\n# NYHETER 2017 APR 08\n#   OneDiceHistogram TwoDiceHistogram\n#   ClickDetector IndianSun MultiTimer\n#   Hex\n#   Shortcut Complex\n# NYHETER 2017 APR 01\n#   RandomDice\n#   Nand2TetrisALU\n#   RubikSquare\n# NYHETER 2017 MAR 26\n#   Stopwatch\n#   Korsord\n#   EngineeringNotation\n#   Nian\n#   Kalkylator\n# NYHETER 2017 MAR 19\n#   PickingBerries\n# NYHETER 2017 MAR 12\n#   Roulette\n# NYHETER 2017 MAR 5\n#   TwoArcs\n#   Girlang Braid OlympicRings\n#   GoldenStar Alphanumeric BoardGame SevenSegment\n#   Connect4 SpaceShip\n#   RushHour ChessGame\n\n# Klicka nu på L1!\n\n# Eller besök Utställningen.\n# Dessa program är skapade av deltagare på p5Dojo.\n# Vill du också visa upp ditt alster?\n#   Skicka i så fall koden till p5dojo@googlegroups.com",
  a: ""
};

ID_Asserts = {
  v: '2017-04-29',
  b: "# LOC:0\n# Här kan du se några klargörande exempel.\n# Om de två parametrarna till assert är olika, skrivs de ut till console.\n# Du kan prova egna asserts här. Kontrollera med F12.\n\n# + - * / // **  Operatorer\nassert -10,  2 - 3 * 4\nassert 2.75, 2 + 3 / 4\nassert 32,   4 * 2 ** 3\nassert 14,   2 + 3 * 4\nassert 20,   (2+3) * 4\nassert 32,   4 * 2 ** 3\nassert 1.75, 7 / 4\nassert 1,    7 // 4\nassert 2,    8 // 4\n\n# % Resten vid heltalsdivision\nassert  0,  2 % 2\nassert  1,  1 % 2\nassert  0,  0 % 2\nassert -1, -1 % 2\nassert -0, -2 % 2\n\n# %% Resten vid heltalsdivision. Klarar även negativa tal.\nassert 0,  2 %% 2\nassert 1,  1 %% 2\nassert 0,  0 %% 2\nassert 1, -1 %% 2\nassert 0, -2 %% 2\n\n# Jämförelser\nassert true,  1+2 < 4\nassert true,  1+2 > 2\nassert true,  1+2 == 3\nassert false, 1+2 == 4\nassert true,  1+2 != 4\nassert true,  1+2 >= 3\nassert true,  1+2 <= 4\nassert true,  1 < 2 and 2 < 3\nassert true,  1 < 2 < 3\n\n# and or not  Logiska villkor\nassert false, false and false\nassert false, false and true\nassert false, true and false\nassert true,  true and true\n\nassert false, false or false\nassert true,  false or true\nassert true,  true or false\nassert true,  true or true\n\nassert true,  not false\nassert false, not true\n\n# if then else\nassert 4, if 3 > 4 then 3 else 4\nassert 3, if 3 < 4 then 3 else 4\n\n# '' \"\" strängar\nassert 'Coffeescript',            'Coffee' + 'script'\nassert 6,                         'Coffee'.length\nassert 2,                         'Coffee'.indexOf 'f'\nassert -1,                        'Coffee'.indexOf 'x'\nassert 3,                         'Coffee'.lastIndexOf 'f'\nassert 'script',                  'Coffeescript'.slice 6,12\nassert 'script',                  'Coffeescript'.slice 6\nassert 'COFFEESCRIPT',            'Coffeescript'.toUpperCase()\nassert 'coffeescript',            'Coffeescript'.toLowerCase()\nassert 's',                       'Coffeescript'[6]\nassert 'script',                  'Coffeescript'[6..12]\nassert 'pt',                      'Coffeescript'[-2..]\nassert 'esc',                     'Coffeescript'[5..-5]\nassert ['abra','ka','dabra'],     'abra ka dabra'.split ' '\nassert ['C','o','f','f','e','e'], 'Coffee'.split ''\nassert ['C','o','f','f','e','e'], 'Coffee'.split ''\nassert 'Coffee',                  ' Coffee  '.trim()\nassert 12,                        parseInt '12'\nassert '12',                      12.toString()\nassert 3.14,                      parseFloat '3.14'\nassert '3.141592653589793',       Math.PI.toString()\nassert 'coffee',                  \"coffee\"\nassert true,                      'coffeescript'.includes 'coffee'\nassert false,                     'coffeescript'.includes 'tea'\n\n# []\nassert true, 7 in [7,8]\nassert [7,8],         (i for i in [7,8])\nassert [[7,0],[8,1]], ([item,i] for item,i in [7,8])\nassert [9,16,25],     (x*x for x in [3,4,5])\nassert \"1x2x3\",       [1,2,3].join('x')\nassert [3,2,1] ,      [1,2,3].reverse()\nassert [1,2,3],       [2,1,3].sort()\nassert 3,             [2,1,5].length\n\n# {}\nassert true,              'b' of {a:7,b:8}\nassert ['a','b'],         (key for key of {a:7,b:8})\nassert [['a',7],['b',8]], ([key,item] for key,item of {a:7,b:8})\n\n# & | ^ ~ << >> Bit operationer\nassert [0,0,0,1], [0&0, 0&1, 1&0, 1&1]       # and\nassert [0,1,1,1], [0|0, 0|1, 1|0, 1|1]       # or\nassert [0,1,1,0], [0^0, 0^1, 1^0, 1^1]       # xor\nassert [-1,-2,-3],[~0, ~1, ~2]               # not\nassert [1,2,4,8], [1<<0, 1<<1, 1<<2, 1<<3]   # shift left\nassert [8,4,2,1], [8>>0, 8>>1, 8>>2, 8>>3]   # shift right\n\n# lerp\nassert  8, lerp 10,12,-1\nassert 10, lerp 10,12,0\nassert 11, lerp 10,12,0.5\nassert 12, lerp 10,12,1\nassert 14, lerp 10,12,2\n\n# range\nassert [0,1,2,3,4,5,6,7,8,9]  , range 10\nassert [0,1,2,3,4]            , range 5\nassert [1,2,3,4,5,6,7,8,9,10] , range 1,11\nassert [0,2,4,6,8]            , range 0,10,2\nassert [10,8,6,4,2]           , range 10,0,-2\nassert [9,8,7,6,5,4,3,2,1,0]  , range 10-1,-1,-1\n\n# [..] [...]  range operator\nassert [0,1,2,3,4], [0..4]\nassert [0,1,2,3,4], [0...5]\nassert [6,7],       [5,6,7,8,9][1..2]\nassert [5,6,7],     [5,6,7,8,9][..2]\nassert [6,7,8,9],   [5,6,7,8,9][1..]\nassert [5,6,7,8,9], [5,6,7,8,9][..]\nassert [5,6,7],     [5,6,7,8,9][0..2]\nassert [6,7],       [5,6,7,8,9][1...-2]\nassert [8,9],       [5,6,7,8,9][-2..]\n\n# _.  underscore\nassert 1,                 _.min [2,1,3]\nassert 3,                 _.max [2,1,3]\nassert 2,                 _.first [2,1,3]\nassert 3,                 _.last [2,1,3]\nassert [1,3],             _.rest [2,1,3]\nassert [['a',1],['b',2]], _.pairs {a:1, b:2}\n\nassert true,              \"abc\" == \"abc\"\nassert false,             [1,2] == [1,2]\nassert true,              _.isEqual [1,2], [1,2]\nassert false,              {a:1, b:2} == {a:1, b:2}\nassert true,              _.isEqual {a:1, b:2}, {a:1, b:2}\nassert [1,2],             [1,2]\n\nassert [1,2,3],           _.sortBy [2,1,3]\nassert ['abc','ba','d'],  _.sortBy ['ba','abc','d']\nassert ['d','ba','abc'],  _.sortBy ['ba','abc','d'], 'length'\nassert ['abc','ba','d'],  _.sortBy ['ba','abc','d'], (s) -> -s.length\n\nassert {odd: 3, even: 2}, _.countBy [1,2,3,4,5], (num) -> if num % 2 == 0 then 'even' else 'odd'\nassert [[\"m\",3], [\"l\",4], [\"c\",5]],  _.zip ['m','l','c'], [3,4,5]\nassert [['m','l','c'], [3,4,5]],  _.unzip [[\"m\",3], [\"l\",4], [\"c\",5]]\n\nassert [2, 4, 6],         _.filter [1,2,3,4,5,6], (num) -> num % 2 == 0\nassert [1, 3, 5],         _.reject [1,2,3,4,5,6], (num) -> num % 2 == 0\n\nassert false,             _.some [1>2, 1==2, 1>=2, 1!=1]\nassert true,              _.some [1>2, 1==2, 1>=2, 1!=2]\nassert false,             _.every [2,4,5], (num) -> num % 2 == 0\nassert true,              _.every [2,4,6], (num) -> num % 2 == 0\n\nassert [\"a\", \"b\", \"c\"],   _.keys   {a:1, b:2, c:3}\nassert [1,2,3],           _.values {a:1, b:2, c:3}\n",
  a: "",
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Assertion_(software_development)",
    p5Assert: 'https://christernilsson.github.io/p5Assert'
  }
};

ID_LinesOfCode = {
  v: '2017-04-29',
  b: "# LOC:62 bg fc sc # {} * / + ++ == if then else indexOf parseInt substring\n#        _.max rect for of text textAlign class constructor new @ extends super\n\nclass LinesOfCode extends Application\n	reset : -> super\n	draw : ->\napp = new LinesOfCode",
  a: "class LinesOfCode extends Application\n	reset : ->\n		super\n		@chapter = -1\n		@stat = {}\n		@h = 13\n		@total = 0\n		for chapter,item1 of data\n			if chapter not in ['Nyheter','Exhibition']\n				@stat[chapter] = {}\n				for exercise,item2 of item1\n					b = item2.b\n					p1 = b.indexOf 'LOC:'\n					p2 = b.indexOf ' ',p1\n					loc = parseInt b.substring p1+4,p2\n					@total += loc\n					@stat[chapter][exercise] = loc\n	draw : ->\n		fc 1,1,0\n		sc()\n		if @chapter == -1 then @drawAll() else @drawChapter()\n	drawAll : ->\n		bg 0\n		i = 0\n		rects = []\n		for chapter,item1 of @stat\n			sum = 0\n			for exercise,item2 of item1\n				sum += item2\n			i++\n			textAlign LEFT\n			text chapter,5,i*@h\n			textAlign RIGHT\n			text sum,195,i*@h\n			rects.push sum\n		@max = _.max rects\n		@drawRects rects, @max\n	drawChapter : ->\n		bg 0.5\n		i=0\n		rects = []\n		for chapter,item1 of @stat\n			i++\n			if i == @chapter\n				j = 0\n				for exercise,item2 of item1\n					j++\n					textAlign LEFT\n					text exercise,5,j*@h\n					textAlign RIGHT\n					text item2,195,j*@h\n					rects.push item2\n		@drawRects rects, @max\n	drawRects : (rects,m) ->\n		fc 1,1,0,0.5\n		sc 1,1,0\n		for r,i in rects\n			rect 0,3+@h*i, 200*r/m,@h-2\n	mousePressed : (mx,my) ->\n		if @chapter == -1\n			@chapter = 1 + int my / @h\n		else\n			@chapter = -1\n\napp = new LinesOfCode 'a'",
  c: {
    app: "reset()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Source_lines_of_code"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWkwuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uIiwic291cmNlcyI6WyJjb2ZmZWVcXGRhdGFcXFpMLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBQSxVQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx1L0JBREY7RUFrREEsQ0FBQSxFQUFFLEVBbERGOzs7QUFxREQsVUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsNnlMQURGO0VBNEtBLENBQUEsRUFBRSxFQTVLRjtFQTZLQSxDQUFBLEVBQ0M7SUFBQSxTQUFBLEVBQVksZ0VBQVo7SUFDQSxRQUFBLEVBQVcsNENBRFg7R0E5S0Q7OztBQWlMRCxjQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSw0UEFERjtFQVVBLENBQUEsRUFBRSxnMUNBVkY7RUE2RUEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLFNBQU47R0E5RUQ7RUErRUEsQ0FBQSxFQUNDO0lBQUEsU0FBQSxFQUFZLG9EQUFaO0dBaEZEIiwic291cmNlc0NvbnRlbnQiOlsiSURfbnloZXRlciA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGI6XCJcIlwiXG4jIExPQzowXG4jIE5ZSEVURVIgMjAxNyBBUFIgMjlcbiMgICBSdWJpa0N1YmVcbiMgICBGb3J0aEhhaWt1XG4jICAgU29rb2JhblxuIyBOWUhFVEVSIDIwMTcgQVBSIDIyXG4jICAgQmxhY2tCb3gyRFxuIyAgIEdhbWVPZkxpZmVcbiMgICBNb2lyZVxuIyAgIFN1cGVyQ2lyY2xlXG4jICAgQ29mZmVlc2NyaXB0Q2xvY2tcbiMgTllIRVRFUiAyMDE3IEFQUiAxNVxuIyAgIExpbmVzT2ZDb2RlXG4jICAgQ29sb3JQYWlyXG4jICAgU25ha2UgU25ha2U0XG4jIE5ZSEVURVIgMjAxNyBBUFIgMDhcbiMgICBPbmVEaWNlSGlzdG9ncmFtIFR3b0RpY2VIaXN0b2dyYW1cbiMgICBDbGlja0RldGVjdG9yIEluZGlhblN1biBNdWx0aVRpbWVyXG4jICAgSGV4XG4jICAgU2hvcnRjdXQgQ29tcGxleFxuIyBOWUhFVEVSIDIwMTcgQVBSIDAxXG4jICAgUmFuZG9tRGljZVxuIyAgIE5hbmQyVGV0cmlzQUxVXG4jICAgUnViaWtTcXVhcmVcbiMgTllIRVRFUiAyMDE3IE1BUiAyNlxuIyAgIFN0b3B3YXRjaFxuIyAgIEtvcnNvcmRcbiMgICBFbmdpbmVlcmluZ05vdGF0aW9uXG4jICAgTmlhblxuIyAgIEthbGt5bGF0b3JcbiMgTllIRVRFUiAyMDE3IE1BUiAxOVxuIyAgIFBpY2tpbmdCZXJyaWVzXG4jIE5ZSEVURVIgMjAxNyBNQVIgMTJcbiMgICBSb3VsZXR0ZVxuIyBOWUhFVEVSIDIwMTcgTUFSIDVcbiMgICBUd29BcmNzXG4jICAgR2lybGFuZyBCcmFpZCBPbHltcGljUmluZ3NcbiMgICBHb2xkZW5TdGFyIEFscGhhbnVtZXJpYyBCb2FyZEdhbWUgU2V2ZW5TZWdtZW50XG4jICAgQ29ubmVjdDQgU3BhY2VTaGlwXG4jICAgUnVzaEhvdXIgQ2hlc3NHYW1lXG5cbiMgS2xpY2thIG51IHDDpSBMMSFcblxuIyBFbGxlciBiZXPDtmsgVXRzdMOkbGxuaW5nZW4uXG4jIERlc3NhIHByb2dyYW0gw6RyIHNrYXBhZGUgYXYgZGVsdGFnYXJlIHDDpSBwNURvam8uXG4jIFZpbGwgZHUgb2Nrc8OlIHZpc2EgdXBwIGRpdHQgYWxzdGVyP1xuIyAgIFNraWNrYSBpIHPDpSBmYWxsIGtvZGVuIHRpbGwgcDVkb2pvQGdvb2dsZWdyb3Vwcy5jb21cblwiXCJcIlxuXHRhOlwiXCJcIlxuXCJcIlwiXG5cbklEX0Fzc2VydHMgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOlwiXCJcIlxuIyBMT0M6MFxuIyBIw6RyIGthbiBkdSBzZSBuw6VncmEga2xhcmfDtnJhbmRlIGV4ZW1wZWwuXG4jIE9tIGRlIHR2w6UgcGFyYW1ldHJhcm5hIHRpbGwgYXNzZXJ0IMOkciBvbGlrYSwgc2tyaXZzIGRlIHV0IHRpbGwgY29uc29sZS5cbiMgRHUga2FuIHByb3ZhIGVnbmEgYXNzZXJ0cyBow6RyLiBLb250cm9sbGVyYSBtZWQgRjEyLlxuXG4jICsgLSAqIC8gLy8gKiogIE9wZXJhdG9yZXJcbmFzc2VydCAtMTAsICAyIC0gMyAqIDRcbmFzc2VydCAyLjc1LCAyICsgMyAvIDRcbmFzc2VydCAzMiwgICA0ICogMiAqKiAzXG5hc3NlcnQgMTQsICAgMiArIDMgKiA0XG5hc3NlcnQgMjAsICAgKDIrMykgKiA0XG5hc3NlcnQgMzIsICAgNCAqIDIgKiogM1xuYXNzZXJ0IDEuNzUsIDcgLyA0XG5hc3NlcnQgMSwgICAgNyAvLyA0XG5hc3NlcnQgMiwgICAgOCAvLyA0XG5cbiMgJSBSZXN0ZW4gdmlkIGhlbHRhbHNkaXZpc2lvblxuYXNzZXJ0ICAwLCAgMiAlIDJcbmFzc2VydCAgMSwgIDEgJSAyXG5hc3NlcnQgIDAsICAwICUgMlxuYXNzZXJ0IC0xLCAtMSAlIDJcbmFzc2VydCAtMCwgLTIgJSAyXG5cbiMgJSUgUmVzdGVuIHZpZCBoZWx0YWxzZGl2aXNpb24uIEtsYXJhciDDpHZlbiBuZWdhdGl2YSB0YWwuXG5hc3NlcnQgMCwgIDIgJSUgMlxuYXNzZXJ0IDEsICAxICUlIDJcbmFzc2VydCAwLCAgMCAlJSAyXG5hc3NlcnQgMSwgLTEgJSUgMlxuYXNzZXJ0IDAsIC0yICUlIDJcblxuIyBKw6RtZsO2cmVsc2VyXG5hc3NlcnQgdHJ1ZSwgIDErMiA8IDRcbmFzc2VydCB0cnVlLCAgMSsyID4gMlxuYXNzZXJ0IHRydWUsICAxKzIgPT0gM1xuYXNzZXJ0IGZhbHNlLCAxKzIgPT0gNFxuYXNzZXJ0IHRydWUsICAxKzIgIT0gNFxuYXNzZXJ0IHRydWUsICAxKzIgPj0gM1xuYXNzZXJ0IHRydWUsICAxKzIgPD0gNFxuYXNzZXJ0IHRydWUsICAxIDwgMiBhbmQgMiA8IDNcbmFzc2VydCB0cnVlLCAgMSA8IDIgPCAzXG5cbiMgYW5kIG9yIG5vdCAgTG9naXNrYSB2aWxsa29yXG5hc3NlcnQgZmFsc2UsIGZhbHNlIGFuZCBmYWxzZVxuYXNzZXJ0IGZhbHNlLCBmYWxzZSBhbmQgdHJ1ZVxuYXNzZXJ0IGZhbHNlLCB0cnVlIGFuZCBmYWxzZVxuYXNzZXJ0IHRydWUsICB0cnVlIGFuZCB0cnVlXG5cbmFzc2VydCBmYWxzZSwgZmFsc2Ugb3IgZmFsc2VcbmFzc2VydCB0cnVlLCAgZmFsc2Ugb3IgdHJ1ZVxuYXNzZXJ0IHRydWUsICB0cnVlIG9yIGZhbHNlXG5hc3NlcnQgdHJ1ZSwgIHRydWUgb3IgdHJ1ZVxuXG5hc3NlcnQgdHJ1ZSwgIG5vdCBmYWxzZVxuYXNzZXJ0IGZhbHNlLCBub3QgdHJ1ZVxuXG4jIGlmIHRoZW4gZWxzZVxuYXNzZXJ0IDQsIGlmIDMgPiA0IHRoZW4gMyBlbHNlIDRcbmFzc2VydCAzLCBpZiAzIDwgNCB0aGVuIDMgZWxzZSA0XG5cbiMgJycgXCJcIiBzdHLDpG5nYXJcbmFzc2VydCAnQ29mZmVlc2NyaXB0JywgICAgICAgICAgICAnQ29mZmVlJyArICdzY3JpcHQnXG5hc3NlcnQgNiwgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvZmZlZScubGVuZ3RoXG5hc3NlcnQgMiwgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvZmZlZScuaW5kZXhPZiAnZidcbmFzc2VydCAtMSwgICAgICAgICAgICAgICAgICAgICAgICAnQ29mZmVlJy5pbmRleE9mICd4J1xuYXNzZXJ0IDMsICAgICAgICAgICAgICAgICAgICAgICAgICdDb2ZmZWUnLmxhc3RJbmRleE9mICdmJ1xuYXNzZXJ0ICdzY3JpcHQnLCAgICAgICAgICAgICAgICAgICdDb2ZmZWVzY3JpcHQnLnNsaWNlIDYsMTJcbmFzc2VydCAnc2NyaXB0JywgICAgICAgICAgICAgICAgICAnQ29mZmVlc2NyaXB0Jy5zbGljZSA2XG5hc3NlcnQgJ0NPRkZFRVNDUklQVCcsICAgICAgICAgICAgJ0NvZmZlZXNjcmlwdCcudG9VcHBlckNhc2UoKVxuYXNzZXJ0ICdjb2ZmZWVzY3JpcHQnLCAgICAgICAgICAgICdDb2ZmZWVzY3JpcHQnLnRvTG93ZXJDYXNlKClcbmFzc2VydCAncycsICAgICAgICAgICAgICAgICAgICAgICAnQ29mZmVlc2NyaXB0J1s2XVxuYXNzZXJ0ICdzY3JpcHQnLCAgICAgICAgICAgICAgICAgICdDb2ZmZWVzY3JpcHQnWzYuLjEyXVxuYXNzZXJ0ICdwdCcsICAgICAgICAgICAgICAgICAgICAgICdDb2ZmZWVzY3JpcHQnWy0yLi5dXG5hc3NlcnQgJ2VzYycsICAgICAgICAgICAgICAgICAgICAgJ0NvZmZlZXNjcmlwdCdbNS4uLTVdXG5hc3NlcnQgWydhYnJhJywna2EnLCdkYWJyYSddLCAgICAgJ2FicmEga2EgZGFicmEnLnNwbGl0ICcgJ1xuYXNzZXJ0IFsnQycsJ28nLCdmJywnZicsJ2UnLCdlJ10sICdDb2ZmZWUnLnNwbGl0ICcnXG5hc3NlcnQgWydDJywnbycsJ2YnLCdmJywnZScsJ2UnXSwgJ0NvZmZlZScuc3BsaXQgJydcbmFzc2VydCAnQ29mZmVlJywgICAgICAgICAgICAgICAgICAnIENvZmZlZSAgJy50cmltKClcbmFzc2VydCAxMiwgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCAnMTInXG5hc3NlcnQgJzEyJywgICAgICAgICAgICAgICAgICAgICAgMTIudG9TdHJpbmcoKVxuYXNzZXJ0IDMuMTQsICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQgJzMuMTQnXG5hc3NlcnQgJzMuMTQxNTkyNjUzNTg5NzkzJywgICAgICAgTWF0aC5QSS50b1N0cmluZygpXG5hc3NlcnQgJ2NvZmZlZScsICAgICAgICAgICAgICAgICAgXCJjb2ZmZWVcIlxuYXNzZXJ0IHRydWUsICAgICAgICAgICAgICAgICAgICAgICdjb2ZmZWVzY3JpcHQnLmluY2x1ZGVzICdjb2ZmZWUnXG5hc3NlcnQgZmFsc2UsICAgICAgICAgICAgICAgICAgICAgJ2NvZmZlZXNjcmlwdCcuaW5jbHVkZXMgJ3RlYSdcblxuIyBbXVxuYXNzZXJ0IHRydWUsIDcgaW4gWzcsOF1cbmFzc2VydCBbNyw4XSwgICAgICAgICAoaSBmb3IgaSBpbiBbNyw4XSlcbmFzc2VydCBbWzcsMF0sWzgsMV1dLCAoW2l0ZW0saV0gZm9yIGl0ZW0saSBpbiBbNyw4XSlcbmFzc2VydCBbOSwxNiwyNV0sICAgICAoeCp4IGZvciB4IGluIFszLDQsNV0pXG5hc3NlcnQgXCIxeDJ4M1wiLCAgICAgICBbMSwyLDNdLmpvaW4oJ3gnKVxuYXNzZXJ0IFszLDIsMV0gLCAgICAgIFsxLDIsM10ucmV2ZXJzZSgpXG5hc3NlcnQgWzEsMiwzXSwgICAgICAgWzIsMSwzXS5zb3J0KClcbmFzc2VydCAzLCAgICAgICAgICAgICBbMiwxLDVdLmxlbmd0aFxuXG4jIHt9XG5hc3NlcnQgdHJ1ZSwgICAgICAgICAgICAgICdiJyBvZiB7YTo3LGI6OH1cbmFzc2VydCBbJ2EnLCdiJ10sICAgICAgICAgKGtleSBmb3Iga2V5IG9mIHthOjcsYjo4fSlcbmFzc2VydCBbWydhJyw3XSxbJ2InLDhdXSwgKFtrZXksaXRlbV0gZm9yIGtleSxpdGVtIG9mIHthOjcsYjo4fSlcblxuIyAmIHwgXiB+IDw8ID4+IEJpdCBvcGVyYXRpb25lclxuYXNzZXJ0IFswLDAsMCwxXSwgWzAmMCwgMCYxLCAxJjAsIDEmMV0gICAgICAgIyBhbmRcbmFzc2VydCBbMCwxLDEsMV0sIFswfDAsIDB8MSwgMXwwLCAxfDFdICAgICAgICMgb3JcbmFzc2VydCBbMCwxLDEsMF0sIFswXjAsIDBeMSwgMV4wLCAxXjFdICAgICAgICMgeG9yXG5hc3NlcnQgWy0xLC0yLC0zXSxbfjAsIH4xLCB+Ml0gICAgICAgICAgICAgICAjIG5vdFxuYXNzZXJ0IFsxLDIsNCw4XSwgWzE8PDAsIDE8PDEsIDE8PDIsIDE8PDNdICAgIyBzaGlmdCBsZWZ0XG5hc3NlcnQgWzgsNCwyLDFdLCBbOD4+MCwgOD4+MSwgOD4+MiwgOD4+M10gICAjIHNoaWZ0IHJpZ2h0XG5cbiMgbGVycFxuYXNzZXJ0ICA4LCBsZXJwIDEwLDEyLC0xXG5hc3NlcnQgMTAsIGxlcnAgMTAsMTIsMFxuYXNzZXJ0IDExLCBsZXJwIDEwLDEyLDAuNVxuYXNzZXJ0IDEyLCBsZXJwIDEwLDEyLDFcbmFzc2VydCAxNCwgbGVycCAxMCwxMiwyXG5cbiMgcmFuZ2VcbmFzc2VydCBbMCwxLDIsMyw0LDUsNiw3LDgsOV0gICwgcmFuZ2UgMTBcbmFzc2VydCBbMCwxLDIsMyw0XSAgICAgICAgICAgICwgcmFuZ2UgNVxuYXNzZXJ0IFsxLDIsMyw0LDUsNiw3LDgsOSwxMF0gLCByYW5nZSAxLDExXG5hc3NlcnQgWzAsMiw0LDYsOF0gICAgICAgICAgICAsIHJhbmdlIDAsMTAsMlxuYXNzZXJ0IFsxMCw4LDYsNCwyXSAgICAgICAgICAgLCByYW5nZSAxMCwwLC0yXG5hc3NlcnQgWzksOCw3LDYsNSw0LDMsMiwxLDBdICAsIHJhbmdlIDEwLTEsLTEsLTFcblxuIyBbLi5dIFsuLi5dICByYW5nZSBvcGVyYXRvclxuYXNzZXJ0IFswLDEsMiwzLDRdLCBbMC4uNF1cbmFzc2VydCBbMCwxLDIsMyw0XSwgWzAuLi41XVxuYXNzZXJ0IFs2LDddLCAgICAgICBbNSw2LDcsOCw5XVsxLi4yXVxuYXNzZXJ0IFs1LDYsN10sICAgICBbNSw2LDcsOCw5XVsuLjJdXG5hc3NlcnQgWzYsNyw4LDldLCAgIFs1LDYsNyw4LDldWzEuLl1cbmFzc2VydCBbNSw2LDcsOCw5XSwgWzUsNiw3LDgsOV1bLi5dXG5hc3NlcnQgWzUsNiw3XSwgICAgIFs1LDYsNyw4LDldWzAuLjJdXG5hc3NlcnQgWzYsN10sICAgICAgIFs1LDYsNyw4LDldWzEuLi4tMl1cbmFzc2VydCBbOCw5XSwgICAgICAgWzUsNiw3LDgsOV1bLTIuLl1cblxuIyBfLiAgdW5kZXJzY29yZVxuYXNzZXJ0IDEsICAgICAgICAgICAgICAgICBfLm1pbiBbMiwxLDNdXG5hc3NlcnQgMywgICAgICAgICAgICAgICAgIF8ubWF4IFsyLDEsM11cbmFzc2VydCAyLCAgICAgICAgICAgICAgICAgXy5maXJzdCBbMiwxLDNdXG5hc3NlcnQgMywgICAgICAgICAgICAgICAgIF8ubGFzdCBbMiwxLDNdXG5hc3NlcnQgWzEsM10sICAgICAgICAgICAgIF8ucmVzdCBbMiwxLDNdXG5hc3NlcnQgW1snYScsMV0sWydiJywyXV0sIF8ucGFpcnMge2E6MSwgYjoyfVxuXG5hc3NlcnQgdHJ1ZSwgICAgICAgICAgICAgIFwiYWJjXCIgPT0gXCJhYmNcIlxuYXNzZXJ0IGZhbHNlLCAgICAgICAgICAgICBbMSwyXSA9PSBbMSwyXVxuYXNzZXJ0IHRydWUsICAgICAgICAgICAgICBfLmlzRXF1YWwgWzEsMl0sIFsxLDJdXG5hc3NlcnQgZmFsc2UsICAgICAgICAgICAgICB7YToxLCBiOjJ9ID09IHthOjEsIGI6Mn1cbmFzc2VydCB0cnVlLCAgICAgICAgICAgICAgXy5pc0VxdWFsIHthOjEsIGI6Mn0sIHthOjEsIGI6Mn1cbmFzc2VydCBbMSwyXSwgICAgICAgICAgICAgWzEsMl1cblxuYXNzZXJ0IFsxLDIsM10sICAgICAgICAgICBfLnNvcnRCeSBbMiwxLDNdXG5hc3NlcnQgWydhYmMnLCdiYScsJ2QnXSwgIF8uc29ydEJ5IFsnYmEnLCdhYmMnLCdkJ11cbmFzc2VydCBbJ2QnLCdiYScsJ2FiYyddLCAgXy5zb3J0QnkgWydiYScsJ2FiYycsJ2QnXSwgJ2xlbmd0aCdcbmFzc2VydCBbJ2FiYycsJ2JhJywnZCddLCAgXy5zb3J0QnkgWydiYScsJ2FiYycsJ2QnXSwgKHMpIC0+IC1zLmxlbmd0aFxuXG5hc3NlcnQge29kZDogMywgZXZlbjogMn0sIF8uY291bnRCeSBbMSwyLDMsNCw1XSwgKG51bSkgLT4gaWYgbnVtICUgMiA9PSAwIHRoZW4gJ2V2ZW4nIGVsc2UgJ29kZCdcbmFzc2VydCBbW1wibVwiLDNdLCBbXCJsXCIsNF0sIFtcImNcIiw1XV0sICBfLnppcCBbJ20nLCdsJywnYyddLCBbMyw0LDVdXG5hc3NlcnQgW1snbScsJ2wnLCdjJ10sIFszLDQsNV1dLCAgXy51bnppcCBbW1wibVwiLDNdLCBbXCJsXCIsNF0sIFtcImNcIiw1XV1cblxuYXNzZXJ0IFsyLCA0LCA2XSwgICAgICAgICBfLmZpbHRlciBbMSwyLDMsNCw1LDZdLCAobnVtKSAtPiBudW0gJSAyID09IDBcbmFzc2VydCBbMSwgMywgNV0sICAgICAgICAgXy5yZWplY3QgWzEsMiwzLDQsNSw2XSwgKG51bSkgLT4gbnVtICUgMiA9PSAwXG5cbmFzc2VydCBmYWxzZSwgICAgICAgICAgICAgXy5zb21lIFsxPjIsIDE9PTIsIDE+PTIsIDEhPTFdXG5hc3NlcnQgdHJ1ZSwgICAgICAgICAgICAgIF8uc29tZSBbMT4yLCAxPT0yLCAxPj0yLCAxIT0yXVxuYXNzZXJ0IGZhbHNlLCAgICAgICAgICAgICBfLmV2ZXJ5IFsyLDQsNV0sIChudW0pIC0+IG51bSAlIDIgPT0gMFxuYXNzZXJ0IHRydWUsICAgICAgICAgICAgICBfLmV2ZXJ5IFsyLDQsNl0sIChudW0pIC0+IG51bSAlIDIgPT0gMFxuXG5hc3NlcnQgW1wiYVwiLCBcImJcIiwgXCJjXCJdLCAgIF8ua2V5cyAgIHthOjEsIGI6MiwgYzozfVxuYXNzZXJ0IFsxLDIsM10sICAgICAgICAgICBfLnZhbHVlcyB7YToxLCBiOjIsIGM6M31cblxuXCJcIlwiXG5cdGE6XCJcIlxuXHRlOlxuXHRcdFdpa2lwZWRpYSA6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQXNzZXJ0aW9uXyhzb2Z0d2FyZV9kZXZlbG9wbWVudClcIlxuXHRcdHA1QXNzZXJ0IDogJ2h0dHBzOi8vY2hyaXN0ZXJuaWxzc29uLmdpdGh1Yi5pby9wNUFzc2VydCdcblxuSURfTGluZXNPZkNvZGUgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOlwiXCJcIlxuIyBMT0M6NjIgYmcgZmMgc2MgIyB7fSAqIC8gKyArKyA9PSBpZiB0aGVuIGVsc2UgaW5kZXhPZiBwYXJzZUludCBzdWJzdHJpbmdcbiMgICAgICAgIF8ubWF4IHJlY3QgZm9yIG9mIHRleHQgdGV4dEFsaWduIGNsYXNzIGNvbnN0cnVjdG9yIG5ldyBAIGV4dGVuZHMgc3VwZXJcblxuY2xhc3MgTGluZXNPZkNvZGUgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+IHN1cGVyXG5cdGRyYXcgOiAtPlxuYXBwID0gbmV3IExpbmVzT2ZDb2RlXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIExpbmVzT2ZDb2RlIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QGNoYXB0ZXIgPSAtMVxuXHRcdEBzdGF0ID0ge31cblx0XHRAaCA9IDEzXG5cdFx0QHRvdGFsID0gMFxuXHRcdGZvciBjaGFwdGVyLGl0ZW0xIG9mIGRhdGFcblx0XHRcdGlmIGNoYXB0ZXIgbm90IGluIFsnTnloZXRlcicsJ0V4aGliaXRpb24nXVxuXHRcdFx0XHRAc3RhdFtjaGFwdGVyXSA9IHt9XG5cdFx0XHRcdGZvciBleGVyY2lzZSxpdGVtMiBvZiBpdGVtMVxuXHRcdFx0XHRcdGIgPSBpdGVtMi5iXG5cdFx0XHRcdFx0cDEgPSBiLmluZGV4T2YgJ0xPQzonXG5cdFx0XHRcdFx0cDIgPSBiLmluZGV4T2YgJyAnLHAxXG5cdFx0XHRcdFx0bG9jID0gcGFyc2VJbnQgYi5zdWJzdHJpbmcgcDErNCxwMlxuXHRcdFx0XHRcdEB0b3RhbCArPSBsb2Ncblx0XHRcdFx0XHRAc3RhdFtjaGFwdGVyXVtleGVyY2lzZV0gPSBsb2Ncblx0ZHJhdyA6IC0+XG5cdFx0ZmMgMSwxLDBcblx0XHRzYygpXG5cdFx0aWYgQGNoYXB0ZXIgPT0gLTEgdGhlbiBAZHJhd0FsbCgpIGVsc2UgQGRyYXdDaGFwdGVyKClcblx0ZHJhd0FsbCA6IC0+XG5cdFx0YmcgMFxuXHRcdGkgPSAwXG5cdFx0cmVjdHMgPSBbXVxuXHRcdGZvciBjaGFwdGVyLGl0ZW0xIG9mIEBzdGF0XG5cdFx0XHRzdW0gPSAwXG5cdFx0XHRmb3IgZXhlcmNpc2UsaXRlbTIgb2YgaXRlbTFcblx0XHRcdFx0c3VtICs9IGl0ZW0yXG5cdFx0XHRpKytcblx0XHRcdHRleHRBbGlnbiBMRUZUXG5cdFx0XHR0ZXh0IGNoYXB0ZXIsNSxpKkBoXG5cdFx0XHR0ZXh0QWxpZ24gUklHSFRcblx0XHRcdHRleHQgc3VtLDE5NSxpKkBoXG5cdFx0XHRyZWN0cy5wdXNoIHN1bVxuXHRcdEBtYXggPSBfLm1heCByZWN0c1xuXHRcdEBkcmF3UmVjdHMgcmVjdHMsIEBtYXhcblx0ZHJhd0NoYXB0ZXIgOiAtPlxuXHRcdGJnIDAuNVxuXHRcdGk9MFxuXHRcdHJlY3RzID0gW11cblx0XHRmb3IgY2hhcHRlcixpdGVtMSBvZiBAc3RhdFxuXHRcdFx0aSsrXG5cdFx0XHRpZiBpID09IEBjaGFwdGVyXG5cdFx0XHRcdGogPSAwXG5cdFx0XHRcdGZvciBleGVyY2lzZSxpdGVtMiBvZiBpdGVtMVxuXHRcdFx0XHRcdGorK1xuXHRcdFx0XHRcdHRleHRBbGlnbiBMRUZUXG5cdFx0XHRcdFx0dGV4dCBleGVyY2lzZSw1LGoqQGhcblx0XHRcdFx0XHR0ZXh0QWxpZ24gUklHSFRcblx0XHRcdFx0XHR0ZXh0IGl0ZW0yLDE5NSxqKkBoXG5cdFx0XHRcdFx0cmVjdHMucHVzaCBpdGVtMlxuXHRcdEBkcmF3UmVjdHMgcmVjdHMsIEBtYXhcblx0ZHJhd1JlY3RzIDogKHJlY3RzLG0pIC0+XG5cdFx0ZmMgMSwxLDAsMC41XG5cdFx0c2MgMSwxLDBcblx0XHRmb3IgcixpIGluIHJlY3RzXG5cdFx0XHRyZWN0IDAsMytAaCppLCAyMDAqci9tLEBoLTJcblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuXHRcdGlmIEBjaGFwdGVyID09IC0xXG5cdFx0XHRAY2hhcHRlciA9IDEgKyBpbnQgbXkgLyBAaFxuXHRcdGVsc2Vcblx0XHRcdEBjaGFwdGVyID0gLTFcblxuYXBwID0gbmV3IExpbmVzT2ZDb2RlICdhJ1xuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpXCJcblx0ZTpcblx0XHRXaWtpcGVkaWEgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NvdXJjZV9saW5lc19vZl9jb2RlXCJcblxuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\ZL.coffee