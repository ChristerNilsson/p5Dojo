'use strict';

// Generated by CoffeeScript 2.0.3
var ID_Quiz, ID_quad, ID_quads;

ID_quad = {
  v: '2018-04-27',
  k: 'quad',
  l: 1,
  h: 0,
  b: "# Rita en fyrhörning\n\n# Draw a quadrangle\n\n#    x1,y1,x2,y2, x3,y3,x4,y4\nquad 20,20,20,80,100,80,80,40",
  a: "# Rita en fyrhörning\n\n# Draw a quadrangle\n\n#    x1,y1,x2,y2, x3,y3,x4,y4\nquad 20,20,20,80,100,80,80,40"
};

ID_quads = {
  v: '2018-04-26',
  k: 'fc quad sw sc',
  l: 6,
  h: 1,
  b: "# quad x1,y1, x2,y2, x3,y3, x4,y4",
  a: "bg 0.5\nsw 2\nsc 0\nfc 1,1,0,0.5\nquad 150,100, 180,40, 40,20, 100,140\nfc 1,0,0,0.5\nquad 160,150, 190,90, 50,70, 110,190"
};

ID_Quiz = {
  v: '2017-05-13',
  k: 'bg sw fc text operators class for range []',
  l: 35,
  b: "class Quiz extends Application\n	reset : ->\n		super\n		@seed = 0\n		@questions = []\n		for i in range 5\n			@questions.push @makeQuestion @randint 2\n		@state = 0\n	makeQuestion : (typ) ->\n		if typ == 0\n			a = @randint 20\n			b = @randint 20\n			[\"Vad är \"+ a + \"+\" + b + \"?\", (a + b).toString()]\n		else if typ == 1\n			qs = []\n			qs.push \"Sverige Stockholm\"\n			qs.push \"Tyskland Berlin\"\n			qs.push \"Finland Helsingfors\"\n			[a,b] = qs[@randint 3].split ' '\n			[(\"Vad heter huvudstaden i \"+ a + \"?\"), b]\n	draw : ->\n		textAlign CENTER,CENTER\n		textSize 12\n		fc 1,1,0\n		sc()\n		text @state,100,50\n		if @state == @questions.length\n			text \"Grattis!\",100,100\n		else\n			text @questions[@state][0],100,100\n	enter : (answer) ->\n		answer = @readText()\n		print answer,@questions[@state][1]\n		if answer == @questions[@state][1] then @state++\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\napp = new Quiz",
  a: "class Quiz extends Application\n	reset : ->\n		super\n		@seed = 0\n		@questions = []\n		for i in range 5\n			@questions.push @makeQuestion @randint 2\n		@state = 0\n	makeQuestion : (typ) ->\n		if typ == 0\n			a = @randint 20\n			b = @randint 20\n			[\"Vad är \"+ a + \"+\" + b + \"?\", (a + b).toString()]\n		else if typ == 1\n			qs = []\n			qs.push \"Sverige Stockholm\"\n			qs.push \"Tyskland Berlin\"\n			qs.push \"Finland Helsingfors\"\n			[a,b] = qs[@randint 3].split ' '\n			[(\"Vad heter huvudstaden i \"+ a + \"?\"), b]\n	draw : ->\n		textAlign CENTER,CENTER\n		textSize 12\n		fc 1,1,0\n		sc()\n		text @state,100,50\n		if @state == @questions.length\n			text \"Grattis!\",100,100\n		else\n			text @questions[@state][0],100,100\n	enter : (answer) ->\n		answer = @readText()\n		print answer,@questions[@state][1]\n		if answer == @questions[@state][1] then @state++\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\napp = new Quiz \"a\"",
  c: {
    app: "reset()|enter()"
  }
};
//# sourceMappingURL=Q.js.map
