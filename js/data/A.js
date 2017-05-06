// Generated by CoffeeScript 1.11.1
var ID_Alphanumeric;

ID_Alphanumeric = {
  v: '2017-04-29',
  b: "# LOC:29 bg sc fc range circle # for in & + - * ^ ** %% [] length splice dist\n#        push if then else class extends constructor new @ super ->\n\nclass AlphaNumeric extends Application\n	reset : ->\n		super\n	draw  : ->\n	add   : ->\n	del   : ->\n	left  : ->\n	right : ->\n	mousePressed : (mx,my) ->\napp = new AlphaNumeric",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcQS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsZUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUseVVBREY7RUFnQkEsQ0FBQSxFQUFFLDgyQkFoQkY7RUFrREEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFLLG9DQUFMO0dBbkREO0VBb0RBLENBQUEsRUFDQztJQUFBLE1BQUEsRUFBUywwREFBVDtJQUNBLFlBQUEsRUFBZSx1RUFEZjtJQUVBLFlBQUEsRUFBZSw0SUFGZjtHQXJERCIsInNvdXJjZXNDb250ZW50IjpbIklEX0FscGhhbnVtZXJpYyA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGI6XCJcIlwiXG4jIExPQzoyOSBiZyBzYyBmYyByYW5nZSBjaXJjbGUgIyBmb3IgaW4gJiArIC0gKiBeICoqICUlIFtdIGxlbmd0aCBzcGxpY2UgZGlzdFxuIyAgICAgICAgcHVzaCBpZiB0aGVuIGVsc2UgY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciBuZXcgQCBzdXBlciAtPlxuXG5jbGFzcyBBbHBoYU51bWVyaWMgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgOiAtPlxuXHRhZGQgICA6IC0+XG5cdGRlbCAgIDogLT5cblx0bGVmdCAgOiAtPlxuXHRyaWdodCA6IC0+XG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cbmFwcCA9IG5ldyBBbHBoYU51bWVyaWNcblwiXCJcIlxuXHRhOlwiXCJcIlxuY2xhc3MgQWxwaGFOdW1lcmljIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QFJBRElVUyA9IDhcblx0XHRARElTVEFOQ0UgPSAyMFxuXHRcdEBwYXR0ZXJuID0gW1s0LDEyLDQsNCw0LDQsMTRdLCBbMTQsMTcsMSwyLDQsOCwzMV0sIFsxNCwxNywxNywzMSwxNywxNywxN10sWzMwLDE3LDE3LDMwLDE3LDE3LDMwXV1cblx0XHRAaW5kZXggPSAwXG5cdGRyYXcgOiAtPlxuXHRcdGJnIDBcblx0XHRzYygpXG5cdFx0Zm9yIGluZGV4LGogaW4gQHBhdHRlcm5bQGluZGV4XVxuXHRcdFx0eSA9ICA0MCtARElTVEFOQ0UqalxuXHRcdFx0Zm9yIGkgaW4gcmFuZ2UgNVxuXHRcdFx0XHRpZiBpbmRleCAmIDE8PGkgdGhlbiBmYyAwLDEsMCBlbHNlIGZjIDAsMC4zLDBcblx0XHRcdFx0eCA9IDE0MC1ARElTVEFOQ0UqaVxuXHRcdFx0XHRjaXJjbGUgeCx5LEBSQURJVVNcblx0YWRkICAgOiAtPlxuXHRcdEBwYXR0ZXJuLnB1c2ggWzAsMCwwLDAsMCwwLDBdXG5cdFx0QGluZGV4ID0gQHBhdHRlcm4ubGVuZ3RoIC0gMVxuXHRkZWwgICA6IC0+IEBwYXR0ZXJuLnNwbGljZSBAaW5kZXgsIDFcblx0bGVmdCAgOiAtPiBAaW5kZXggPSAoQGluZGV4IC0gMSkgJSUgQHBhdHRlcm4ubGVuZ3RoXG5cdHJpZ2h0IDogLT4gQGluZGV4ID0gKEBpbmRleCArIDEpICUlIEBwYXR0ZXJuLmxlbmd0aFxuXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0XHRmb3IgaW5kZXgsaiBpbiBAcGF0dGVybltAaW5kZXhdXG5cdFx0XHR5ID0gIDQwK0BESVNUQU5DRSpqXG5cdFx0XHRmb3IgaSBpbiByYW5nZSA1XG5cdFx0XHRcdHggPSAxNDAtQERJU1RBTkNFKmlcblx0XHRcdFx0aWYgZGlzdCh4LHksbXgsbXkpIDwgQFJBRElVU1xuXHRcdFx0XHRcdEBwYXR0ZXJuW0BpbmRleF1bal0gXj0gMTw8aVxuXG5hcHAgPSBuZXcgQWxwaGFOdW1lcmljIFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHA6IFwicmVzZXQoKXxhZGQoKXxkZWwoKXxsZWZ0KCl8cmlnaHQoKVwiXG5cdGU6XG5cdFx0Ymluw6RydCA6IFwiaHR0cDovL3d3dy5tYXR0ZWJva2VuLnNlL2xla3Rpb25lci9tYXR0ZS0xL3RhbC90YWxzeXN0ZW1cIlxuXHRcdGhleGFkZWNpbWFsdCA6IFwiaHR0cDovL3d3dy5tYXR0ZWd1aWRlbi5zZS9tYXR0ZS0xL2dydW5kZXIvYmluYXJhLW9jaC1oZXhhZGVjaW1hbGEtdGFsXCJcblx0XHQnNXg3IG1hdHJpcycgOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zZS9zZWFyY2g/cT01eDcrbWF0cml4JnNvdXJjZT1sbm1zJnRibT1pc2NoJnNhPVgmdmVkPTBhaFVLRXdqV2pZZW41T3JTQWhYaEo1b0tIZjhCQm1nUV9BVUlCaWdCJmJpdz0xMzEwJmJpaD05NDUmZHByPTEuMVwiXG5cbiJdfQ==
//# sourceURL=C:\github\p5Dojo\coffee\data\A.coffee