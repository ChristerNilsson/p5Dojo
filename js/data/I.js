// Generated by CoffeeScript 1.11.1
var ID_IndianSun;

ID_IndianSun = {
  v: '2017-04-29',
  b: "# LOC:10 range # line sin cos radians for in if then else constrain * / + - class extends constructor new @ super ->\n\nclass IndianSun extends Application\n	reset : ->\n		super\n	draw : ->\n	mousePressed : (mx,my) ->\napp = new IndianSun",
  a: "class IndianSun extends Application\n	reset : ->\n		super\n		@n = 5\n	draw : ->\n		points = ([100+100*cos(i*radians 360/@n), 100+100*sin(i*radians 360/@n)] for i in range @n)\n		for [x1,y1] in points\n			for [x2,y2] in points\n				line x1,y1,x2,y2\n	mousePressed : (mx,my) -> @n = constrain @n + (if my < 100 then 1 else -1), 3, 20\n\napp = new IndianSun \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Kojo: "http://www.kogics.net/codesketch?id=28"
  }
};
