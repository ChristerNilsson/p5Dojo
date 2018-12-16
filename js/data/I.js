'use strict';

// Generated by CoffeeScript 2.3.2
var ID_IndianSun;

ID_IndianSun = {
  v: '2018-04-26',
  k: 'range line sin cos angleMode for if constrain operators class',
  l: 10,
  h: 3,
  b: "class IndianSun extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new IndianSun",
  a: "class IndianSun extends Application\n	reset : ->\n		super\n		@n = 5\n	draw : ->\n		angleMode DEGREES\n		points = ([100+100*cos(i * 360/@n), 100+100*sin(i * 360/@n)] for i in range @n)\n		for [x1,y1] in points\n			for [x2,y2] in points\n				line x1,y1,x2,y2\n	mousePressed : (mx,my) -> @n = constrain @n + (if my < 100 then 1 else -1), 3, 20\n\napp = new IndianSun \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Kojo: "http://www.kogics.net/codesketch?id=28"
  }
};
//# sourceMappingURL=I.js.map
