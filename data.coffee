# a : facit
# b : student
# c : call
# Observe:	local variables a,b and c must be declared var. e.g. r,g,b
# Eventually, skip a,b and c and use a list instead

data = 
	Lektion1 : 
		whiteBackground: 
			a: "bg(1)"
			b: "# Lines Of Code:1 bg\n"
		grayBackground: 
			a: "bg(0.5)"
			b: "# LOC:1 bg\n"
		redBackground: 
			a: "bg(1,0,0)"
			b: "# LOC:1 bg\n"
		greenBackground:
			a: "bg(0,1,0)"
			b: "# LOC:1 bg\n"
		yellowBackground: 
			a: "bg(1,1,0)"
			b: "# LOC:1 bg\n"
		Point: 
			a: "point(10,30)"
			b: "# LOC:1 point\n"
		redPoint: 
			a: "sc(1,0,0); point(20,40)"
			b: "# LOC:2 point sc\n"
		greenPoint: 
			a: "sc(0,1,0); point(30,10)"
			b: "# LOC:2 point sc\n"

		dices : 
			a: """
				point(10,10);
				sc(1,0,0);
				point(25,5);
				point(35,15);
				sc(0,1,0);
				point(45,5);
				point(50,10);
				point(55,15);
				sc(1,1,0);
				point(65,5);
				point(65,15);
				point(75,5);
				point(75,15);
				sc(1,0,1);
				point(85,5);
				point(85,15);
				point(90,10);
				point(95,5);
				point(95,15);
				sc(0,1,1);
				point(105,5);
				point(105,10);
				point(105,15);
				point(115,5);
				point(115,10);
				point(115,15)
				"""	
			b : "# LOC:26 point sc\n" 
		
		Five: 
			a: """
				bg(1);
				fc(0);
				circle(100,100,20);
				circle(40,40,20);
				circle(40,160,20);
				circle(160,160,20);
				circle(160,40,20)
				""" 
			b: "# LOC:7 bg circle fc\n" 

	Lektion2: 
		whiteCircle: 
			a:" fc(1);circle(60,80,30)"
			b:"# LOC:2 circle fc\n"
		whiteEmptyCircle: 
			a:"sc(1); fc(); sw(2);circle(70,90,40)"
			b:"# LOC:2 circle fc sc sw\n"
		twoDiscsA: 
			a:"fc(1,0,0);circle(80,100,40);fc(0,1,0);circle(100,120,50)"
			b:"# LOC:3 circle fc\n"
		twoDiscsB: 
			a:"fc(0,1,0);circle(140,120,60);fc(1,0,0);circle(60,80,50)"
			b:"# LOC:3 circle fc\n"
		twoDiscsC:
			a:"fc(1,0,0);circle(80,100,40);fc(0,1,0, 0.5);circle(120,100,50)"
			b:"# LOC:3 circle fc\n"
		twoDiscsD: 
			a:"fc(1,0,0, 0.5);circle(80,90,60);fc(0,1,0);circle(110,120,50)"
			b:"# LOC:3 circle fc\n"
		twoDiscsE: 
			a:"fc(1,0,0, 0.5);circle(70,90,50);fc(0,1,0, 0.5);circle(100,130,70)"
			b:"# LOC:3 circle fc\n"
		twoDiscsF: 
			a:"fc(0,1,0, 0.5);circle(120,140,40);fc(1,0,0);circle(80,70,50)"
			b:"# LOC:3 circle fc\n"
		twoDiscsG: 
			a:"fc(0,1,0);circle(110,120,40);fc(1,0,0, 0.5);circle(80,100,60)"
			b:"# LOC:3 circle fc\n"
		twoDiscsH: 
			a:"fc(0,1,0, 0.5);circle(120,100,40);fc(1,0,0, 0.5);circle(80,90,60)"
			b:"# LOC:3 circle fc\n"
	
	Lektion3: 
		greenEllipse: 
			a:"fc(0,1,0);ellipse(120,60, 60,40)"
			b:"# LOC:2 ellipse fc\n"
		greenRect: 
			a:" fc(0,1,0);rect(60,80, 40,50) "
			b:"# LOC:2 fc rect\n"
		redRect:
			a:"fc(1,0,0);rect(80,70, 40,100)"
			b:"# LOC:2 fc rect\n"
		cross: 
			a:"fc(1,0,0);sc();rect(85,70, 70,10);rect(115,40, 10,100)"
			b:"# LOC:3 fc rect\n"

		squareHole: 
			a:"""
				fc(0,1,1);
				sc();
				rect(60,60, 80,20);
				rect(60,120, 80,20);
				rect(60,60, 20,80);
				rect(120,60, 20,80);
				sc(0);
				fc();
				sc(1,0,0);
				sw(3);
				rect(60,60, 80,80);
				rect(80,80, 40,40)
				""" 
			b : "# LOC:12 fc rect sc sw \n"
	
	Lektion4: 
		for01: 
			a:"for (i of range(10)) {x = 5+20*i; rect(x,5, 10,10);}"
			b:"# LOC:2 for lerp rect\n"
		for02: 
			a:"for (i of range(10)) {y = 5+20*i; rect(5,y, 10,10);}"
			b:"# LOC:2 for lerp rect\n"
		for03: 
			a:"for (i of range(10)) {x = 5+20*i; y = 5+20*i; rect(x,y, 10,10);}"
			b:"# LOC:2 for lerp rect\n"
		for04: 
			a:"for (i of range(10)) {for (j of range(10)) {x = 5+20*i;y = 5+20*j;rect(x,y, 10,10);}}"
			b:"# LOC:3 for lerp rect\n"
		for05: 
			a:"rectMode(CENTER);for (i of range(10)) {x = 10+20*i;y = 10;w = 2*i;h = 2*i;rect(x,y, w,h);}"
			b:"# LOC:3 for lerp rect rectMode\n"
		for06: 
			a:"rectMode(CENTER);for (i of range(10)) {fc(i/10.0,0,0);x = 10+20*i;y = 10;w = 2*i;h = 2*i;rect(x,y,w,h);}"
			b:"# LOC:4 fc for lerp rect rectMode\n"
		for07: 
			a:"for (i of range(10)) {fc(i/10.0,0,0);x = 10+20*i;y = 10;r = i;circle(x,y,r);}"
			b:"# LOC:3 for fc circle lerp\n"
		for08: 
			a:"for (i of range(10,0,-1)) {fc(i/10.0,0,0);r = 10 * i;circle(100,100, r);}"
			b:"# LOC:3 for fc circle lerp\n"
		for09: 
			a:"for (i of range(10,0,-1)) {fc(i/10.0,0,0);x = 10*i;y = 10*i;r = 10*i;circle(x,y,r);}"
			b:"# LOC:3 for fc circle lerp\n"
		for10: 
			a:"for (i of range(10)) {for (j of range(10)) {fc(i/10.0,j/10.0,0);x = 10+20*i;y = 10+20*j;r = (i+j)/2;circle(x,y,r);}}"
			b:"# LOC:4 for fc circle lerp\n"

		for11: 
			a:"""
				rectMode(CENTER);
				sc(1);
				translate(100,100);
				for (i of range(18,-1,-1)) {
				  r = 1.0*i/18;
				  fc(r,0,0);
				  w = 70+5*i;
				  h = 70+5*i;
				  rect(0,0, w,h);
				  rd(5);
				}
				""" 
			b:"# LOC:7 for fc circle lerp rd rectMode sc translate\n"

		for12: 
			a:"""
				rectMode(CENTER);
				sc();
				for (i of range(10)) {
				  for (j of range(10)) {
				    push();
				    translate(10+20*i,10+20*j);
				    rd(5*(i+j));
				    var r = i/9.0;
				    var g = j/9.0;
				    var b = 0;
				    fc(r,g,b);
				    rect(0,0, 10,10);
				    pop()
				  }
				}
				""" 
			b:"# LOC:10 fc for lerp push pop rd rect rectMode sc translate\n"
	
	Lektion5:
		horizontalLine: 
			a: "sc(1,0,1); line(10,70, 190,70)"
			b: "# LOC:2 line sc\n"
		verticalLine: 
			a: "sc(1,1,0);sw(10);line(110,30, 110,170)"
			b: "# LOC:3 line sc sw\n"
		yellowLine: 
			a: "sc(1,1,0);line(20,0, 200,20)"
			b: "# LOC:2 line sc\n"
		grid: 
			a:"sc(1,1,0); sw(2); for (var i=10; i<200; i+=10) { line(10,i,190,i);line(i,190,i,10);}"
			b:"# LOC:5 for line sc sw\n"
		skislope:
			a: "bg(0);sc(1,0,0);for (i of range(21)) line(i*10,0,200,i*10)"
			b: "# LOC:4 bg for lerp line sc"

		sunshine:
			a: """
				bg(0);
				sc(1,1,0);
				for (i of range(10)) {
		  		line(i*20,0,200-i*20,200);
		  		line(0,20+i*20,200,180-i*20)
				}
				"""
			b: "# LOC:5 bg for lerp line sc\n"
		
		lines:  
			a:"""
				bg(0)
				for (i in range(37)) {
					line(10,10,190,10+i*5)
					line(10,100,190,10+i*5)
					line(10,190,190,10+i*5) 
				}
				"""
			b:"# LOC:5 bg for lerp line (by Noel Watson)\n"

	Lektion6:
		whiteTriangle: 
			a:"fc(1); triangle(20,40, 160,100, 100,140)"
			b:"# LOC:2 fc triangle\n" 
		yellowQuad: 
			a:"fc(1,1,0); quad(150,100, 180,20, 40,20, 100,140)"
			b:"# LOC:2 fc quad\n"
		pacMan: 
			a:"fc(1,1,0); arc(100,100, 80,80, radians(-135),radians(135), PIE)"
			b:"# LOC:2 arc fc radians PIE\n"
	
	Assert1: 
		Operator1: 
			a:"function f(x) { return x }"
			b:"# + - * / %\nf = (x) -> 0"
			c: 
				"f(2)":2
				"f(3)":3 
		Operator2: 
			a:"function f(x) { return x+1 }"
			b:"# + - * / %\n"
			c: 
				"f(7)":8
				"f(8)":9 
		Operator3: 
			a:"function f(x) { return 2*x }"
			b:"# + - * / %\n"
			c: 
				"f(5)":10
				"f(6)":12 
		Operator4: 
			a:"function f(x) { return x*x }"
			b:"# + - * / %\n"
			c: 
				"f(5)":25
				"f(6)":36
		Operator5: 
			a:"function f(x) { return -x }"
			b:"# + - * / %\n"
			c: 
				"f(-4)":4
				"f(3)":-3
		Operator6: 
			a:"function f(x) { return x-2 }"
			b:"# + - * / %\n" 
			c: 
				"f(7)":5
				"f(17)":15
		Operator7: 
			a: "function f(x) { return x/2 }"
			b: "# + - * / %\n"
			c: 
				"f(8)":4
				"f(6)":3
		Operator8: 
			a:"function f(x) { return x%2 }"
			b:"# + - * / %\n"
			c: 
				"f(7)":1
				"f(8)":0
				"f(10)":0
				"f(11)":1
	
	Assert2: 
		Operator1: 
			a:"function g(a,b) { return a*b }"
			b:"# + - * / %\ng = (a,b) -> 0"
			c: 
				"g(3,4)":12
				"g(4,6)":24
		Operator2: 
			a:"function g(a,b) { return a+b }"
			b:"# + - * / %\n"
			c: 
				"g(3,4)":7
				"g(4,6)":10
		Operator3: 
			a:"function g(a,b) { return b-a }"
			b:"# + - * / %\n"
			c: 
				"g(3,4)":1
				"g(4,6)":2
		Operator4: 
			a:"function g(a,b) { return a/b }"
			b:"# + - * / %\n"
			c: 
				"g(8,4)":2
				"g(12,3)":4
		Operator5: 
			a:"function g(a,b) { return a%b }"
			b:"# + - * / %\n"
			c:
				"g(8,4)":0
				"g(9,4)":1
				"g(10,4)":2
				"g(11,4)":3
	
	Assert3: 
		linearequation1: 
			a:"function f(x) { return 2 * x }"
			b:"# *\nf = (x) -> 0"
			c:  
				"f(2)" : 4
				"f(3)" : 6

		linearequation2: 
			a:"function f(x) { return 3 + 2 * x }"
			b:"# * +\nf = (x) -> 0"
			c: 
				"f(2)" : 7
				"f(3)" : 9

		lerp: 
			a:"function lerp(y1,y2,x) { return y1 + (y2-y1) * x }"
			b:"# * + -\nlerp = (y1,y2,x) -> 0"
			c:  
				"lerp(10,20,-1)" : 0
				"lerp(10,20,0)" : 10
				"lerp(10,20,0.5)" : 15
				"lerp(10,20,1)" : 20
				"lerp(10,20,2)" : 30
		
		map:  
			a:"function map(x,x1,x2,y1,y2) { return y1 + (y2-y1) * (x-x1)/(x2-x1) }"
			b:"# * + - /\nmap = (x,x1,x2,y1,y2) -> 0"
			c:  
				"map(0,1,3,20,40)" : 10
				"map(1,1,3,20,40)" : 20
				"map(2,1,3,20,40)" : 30
				"map(3,1,3,20,40)" : 40
				"map(75,50,100,0,1)" : 0.5
				"map(16,0,40,0,200)" : 80

	Assert4: 
		complex1: 
			a:"""
				class Cpx
					constructor : (@x,@y) ->
					add : (other) ->
						new Complex @x+other.x, @y+other.y
					mul : (other) ->
						a = @x
						b = @y
						c = other.x
						d = other.y
						new Complex a*c-b*d, b*c+a*d
					tos : ->
						sx = "" if @x == 0
						sx = "#{@x}" if @x > 0
						sx = "#{@x}" if @x < 0

						sy = "" if @y == 0
						sy = "-i" if @y == -1
						sy = "i" if @y == 1
						sy = "#{@y}i" if @y > 1
						sy = "#{@y}i" if @y < -1

						if sx!="" and sy!=""
							if @y < 0
								s = sx+sy
							else if @y==0
								s = sx
							else
								s = sx + "+" + sy
						else if @x==0 and @y==0
							s = "0"
						else 
							s = sx + sy
						s

						"""
			b:"# LOC:23 class constructor -> if"
			c:  
				"new Cpx(-1,0).tos()" :"-1"
				"new Cpx(-1,-1).tos()" : "-1-i"
				"new Cpx(0,-1).tos()" : "-i"
				"new Cpx(0,0).tos()" : "0"
				"new Cpx(0,1).tos()" : "i"
				"new Cpx(1,-2).tos()" : "1-2i"
				"new Cpx(1,-1).tos()" : "1-i"
				"new Cpx(1,0).tos()" : "1"
				"new Cpx(1,1).tos()" : "1+i"
				"new Cpx(1,2).tos()" : "1+2i"
	
	LektionZ: 
		chessRow: 
			a:"""
				bg(0.5)
				for (i of range(8)) {
					fc(i%2)
					var x = 20+20*i 
					rect(x,20, 20,20)
				}
				"""
			b:"# LOC:5 % bg fc for rect\n"
		
		chessBoard: 
			a:"""
				bg(0.5)
				for (i of range(1,9))	{
					for (j of range(1,9)) {
						fc((i+j)%2)
						rect(20*i,20*j, 20,20)
					}
				}
				"""
			b:"# LOC:5 bg fc for rect\n"
		
		multimoire: 
			a: """
				function moire(k) {
					background(0)
					for (i of range(k)) {
						for (j of range(37)) {
							line(10,map(i,0,k-1,10,190),190,10+j*5)
						}
					}
				}
				"""
			b:"# LOC:5 bg for line map\n"
			c: 
				"moire(2)":0
				"moire(3)":0
				"moire(4)":0
				"moire(5)":0
		
		colorCube:
			a: """
				function colorCube(n,b) {
					bg(0)
					d = 200.0/n
					m = n-1.0
					for (r of range(n)) {
						for (g of range(n)) {
							fc(r/m,g/m,b/m)
							rect(r*d,g*d,d,d)
						}
					}
				}
				"""
			b: "# LOC:8 -> bg fc for rect\n"
			c:
				"colorCube(2,0)":0
				"colorCube(2,1)":0
				"colorCube(3,0)":0
				"colorCube(3,1)":0
				"colorCube(3,2)":0

		korg: 
			a: """
				function korg(n,w,c1,c2) {
					bg(0)
					sw(w)
					fill(c1)
					stroke(c2)
					q = 2*n+1
					d = 200.0/q
					for (i of range(n)) {
						rect(d+i*2*d,0,d,200)
					}
					for (j of range(n)) {
						rect(0,d+j*2*d,200,d)
					}
					for (i of range(n)) {
						for (j of range(n)) {
							if ((i+j) % 2 == 1) {
								rect(i*2*d,d+j*2*d,3*d,d)
							} else {
								rect(d+i*2*d,j*2*d,d,3*d)
							}
						}
					}
				}
				"""
			b:"# LOC:17 -> bg fc for if else rect sc sw\n"
			c: 
				"korg(1,5,co(1,0,0),co(1,1,0))":0
				"korg(2,4,co(0.5),co(1))":0
				"korg(3,3,co(1,1,0),co(1,0,0))":0
				"korg(4,2,co(1),co(0.5))":0
				"korg(5,1,co(1,0,0),co(1,1,0))":0

		textA: 
			a:"fc(1,1,0);textSize(40);text('Javascript',100,100)"
			b:"# LOC:3 text textSize\n"
		textB: 
			a:"fc(1,1,0);textSize(40);textAlign(CENTER,CENTER);text('Javascript',100,100)"
			b:"# LOC:4 text textAlign textSize\n"
		textC: 
			a:"fc(1,1,0);textSize(40);textAlign(CENTER,CENTER);translate(100,100);rd(90);text('Javascript',0,0)"
			b:"# LOC:6 rd text textAlign textSize translate\n"
		textD: 
			a:"fc(1,1,0);textSize(40);textAlign(CENTER,CENTER);translate(100,100);rd(180);text('Javascript',0,0)"
			b:"# LOC:6 rd text textAlign textSize translate\n"
		
		rotatedEllipse: 
			a:"fc(1,0,0);sc();translate(100,100);rd(45);ellipse(0,0, 80,40)"
			b:"# LOC:5 ellipse rd translate\n"
		rotatedRectA: 
			a:"fc(1,0,0);rect(60,100, 40,40);fc(0,1,0);rect(140,100, 40,40)"
			b:"# LOC:4 fc rect\n"
		rotatedRectB: 
			a:"push();fc(1,0,0);translate(60,100);rd(45);rect(0,0, 40,40);pop();push();fc(0,1,0);translate(140,100);rd(45);rect(0,0, 40,40);pop()"
			b:"# LOC:10 push pop rd rect translate\n"
		rotatedRectC: 
			a:";rectMode(CENTER);push();fc(1,0,0);translate(80,120);rd(45);rect(0,0, 40,40);pop();push();fc(0,1,0);translate(160,120);rd(45);rect(0,0, 40,40);pop()"
			b:"# LOC:11 fc push pop rd rect translate\n"
		manyDices: 
			a:"""
				function dots(x,y,dots) {
					for (dot of dots) {
						if (dot==1) point(x+8,y+8) 
						if (dot==2) point(x+8,y+10)
						if (dot==3) point(x+8,y+12)
						if (dot==4) point(x+10,y+10)
						if (dot==5) point(x+12,y+8)
						if (dot==6) point(x+12,y+10)
						if (dot==7) point(x+12,y+12)
					}
				}
				function dice(x,y,d) {
					if (d==1) dots(x,y,[4])
					if (d==2) dots(x,y,[1,7])
					if (d==3) dots(x,y,[1,4,7])
					if (d==4) dots(x,y,[1,3,5,7])
					if (d==5) dots(x,y,[1,3,4,5,7])
					if (d==6) dots(x,y,[1,2,3,5,6,7])
				}
				function manyDices() {
					fc(0)
					for (i of range(10)) { 
						for (j of range(10)) { 
							dice(20*i,20*j,1+(i+j)%6)
						}
					}
				}
				"""
			b : "# LOC:34 -> fc for if point [] % \n"
			c : "manyDices()":0
		
		klocka: 
			a: """
				function visare(v,w,l,r,g,b) {
					push()
					rd(v-90)
					translate(l/2,0)
					fc(r,g,b)
					rect(0,0,l,w)
					pop()
				}
				function klocka(h,m,s) {
					rectMode(CENTER)
					translate(100,100)
					urtavla()
					visare((h+m/60.0)*30, 7,60,1,0,0)
					visare((m+s/60.0)*6,5,80,0,1,0)
					visare(s*6,2,80,0,0,1)
				}
				function urtavla() {
					fc(0)
					sc(1)
					circle(0,0,90)
					fc(1)
					for (i of range(60)) {
						if (i%5==0) {
							circle(85,0,2)
						} else {
							point(85,0)
						}
						rd(6)
					}
				}
				"""
			b: "# LOC:37 -> circle else fc for if point push pop rd rect rectMode sc translate \n"
			c: 
				"klocka(10,9,30)":0
				"klocka(11,30,15)":0
		
		recursiveCircles: 
			a: """
				sc(1)
				function circles(x,y,r) {
					circle(x,y,r)
					if (r < 10) return
					circles(x-r/2,y,r/2)
					circles(x+r/2,y,r/2)
				}
				"""
			b: "# LOC:7 -> circle if return sc < \n"
			c: "circles(100,100,100)":0
		
		hypnoticA : 
			a: """
				function hypnoticA() {
					bg(0.5, 0, 0)
					sc()
					fc(1)
					for (i of range(100)) {
						x = 100 + cos(i) * i
						y = 100 + sin(i) * i
						circle(x, y, 5)
					}
				}
				"""
			b: "# LOC:6 -> bg circle cos fc sc sin\n"
			c: "hypnoticA()":0

		hypnoticB : 
			a: """
				function hypnoticB(t) {
					bg(0.5, 0, 0)
					sc()
					fc(1)
					for (i of range(100)) {
						x = 100 + cos(i) * i
						y = 100 + sin(i) * i
						speed = i/10.0
						r = map(sin(t*speed), -1, 1, 2, 5)
						circle(x, y, r)
					}
				}
				"""
			b: "# LOC:7 -> bg circle cos fc map sc sin \n"
			c: 
				"hypnoticB(1)":0
				"hypnoticB(5)":0
		
		square : 
			a: "function square(x,y,size) { rect(x,y,size,size) }"
			b: "# LOC:2 -> rect \n"
			c: 
				"square(100,90,50)":0 
				"square(100,100,60)":0

		gravity : 
			a: "fc(1); for (i of range(15)) { x=5+10*i; y=5+lerp(0,lerp(0,1,i),i); circle(x,y,5);}"
			b: "# LOC:6 circle lerp\n"

	LektionN: 

		dist: 
			a:"""
				bg(0)
				fc(1)
				sc()
				for (var i=0; i<10; i++) {
					var x = lerp(10,30,i)
					for (var j=0; j<10; j++) {
						var y = lerp(10,30,j)
						var d = dist(100,100,x,y)
						var r = map(d,0,150,1,20)/2
						circle(x,y,r)
					}
				}
				""" 
			b:"# LOC:10 bg circle dist fc lerp map sc\n"
		
		bulge: 
			a:"""
				bg(0)
				fill(255)
				noStroke()
				for (var i=0; i<20; i++) {
					for (var j=0; j<20; j++) {
						x = i*200/20+5
						y = j*200/20+5
						r = map(sin(i*PI/20),-1,1,1,3) * map(sin(j*PI/20),-1,1,1,3) / 2
						circle(x,y,r)
					}
				}
				"""
			b:"# LOC:10 bg circle dist fill map noStroke sin\n"

		wave: 
			a:"""
				colorMode(HSB,360,100,100)
				noStroke()
				bg(0)
				for (var i=0; i<21; i++) {
					fill(map(i,0,20,0,360),100,100)
					var a = map(i,0,20,0,2*PI)
					var x = 10*i
					var y = map(sin(a),-1,1,0,200)
					circle(x,y,3)
				}
				"""
			b:"# LOC:9 circle colorMode fill map noStroke sin PI\n"

		circle: 
			a:"""
				bg(0)
				colorMode(HSB,360,100,100)
				for (var i=0; i<20; i++){
					var r=map(i,0,19,0,360)
					fill(r,255,255)
					var a=map(i,0,20,0,2*PI)
					sc()
					var x=map(cos(a),-1,1,0,200)
					var y=map(sin(a),-1,1,0,200)
					circle(x,y,3)
				}
				"""
			b:"# LOC:10 bg circle colorMode cos fc map PI sc sin\n"
	
		circles: 
			a:"""
				bg(0)
				noStroke()
				colorMode(HSB,360,100,100)
				translate(100,100)
				for (var i=0; i<20; i++) {
					for (var j=0; j<11; j++) {
						fill(map(i,0,20,0,360),255,255)
						var a = map(i,0,20,0,2*PI)
						var x = map(cos(a),-1,1,-j*10,j*10)
						var y = map(sin(a),-1,1,-j*10,j*10)
						var r = 3
						circle(x,y,r)
					}
				}
				"""
			b:"# LOC:12 bg circle colorMode cos fill map noStroke translate sin PI\n"
		
		sized_circles: 
			a:"""
				bg(0)
				noStroke()
				colorMode(HSB,360,100,100)
				translate(100,100)
				for (var i=0; i<20; i++) { 
					fill(map(i,0,20,0,360),255,255)
					var a = map(i,0,20,0,2*PI)
					for (var j=0; j<11; j++) {
						var x = map(cos(a),-1,1,-j*10,j*10)
						var y = map(sin(a),-1,1,-j*10,j*10)
						var r = map(j,0,10,0,10)/2
						circle(x,y,r)
					}
				}
				"""
			b:"# LOC:12 circle colorMode cos fill map noStroke PI sin translate \n"
		
		rotated_circles: 
			a:"""
				colorMode(HSB,360,100,100);
				sc();
				bg(0);
				translate(100,100);
				for (var i=0; i<20; i++){
					var r = map(i,0,20,0,360);
					var a=map(i,0,20,0,2*PI);
					for (var j=0; j<11; j++){
						push();
						rotate(map(j,0,10,0,360));
						fill(r,255,255);
						var x=map(cos(a),-1,1,-j*10,j*10);
						var y=map(sin(a),-1,1,-j*10,j*10);
						circle(x,y,j/2);
						pop();
					}
				}
				"""
			b:"# LOC:17 circle cos map PI push pop rotate sin translate \n"

		christmasTree:
			a:"""
				bg(0);
				fc(0, 1, 0);
				sc(0, 1, 0);
				triangle(100, 100, 180, 160, 20, 160);
				triangle(100, 60, 160, 120, 40, 120);
				triangle(100, 40, 140, 80, 60, 80);
				fc(0.5);
				sc(0.5);
				rect(80, 160, 40, 20);
				fc(1, 1, 0);
				sc(1, 1, 0);
				quad(100, 0, 120, 20, 100, 40, 80, 20);
				rect(85, 5, 30, 30);
				sc(1, 1, 0);
				line(80, 60, 140, 120);
				line(60, 100, 120, 160);
				fc(1, 0, 0);
				sc(1, 0, 0);
				circle(80, 100, 5);
				circle(140, 140, 5);
				circle(100, 60, 5);
				circle(60, 160, 5);
				circle(100, 120, 5);
				fc(1);
				sc(1);
				rect(0, 180, 200, 20);
				circle(20, 20, 5);
				circle(40, 40, 5);
				circle(10, 80, 5);
				circle(30, 140, 5);
				circle(50, 100, 5);
				circle(120, 50, 5);
				circle(160, 20, 5);
				circle(180, 80, 5);
				circle(160, 130, 5);
				circle(190, 180, 5);
				"""
			b:"# LOC:35 bg circle fc line rect quad sc triangle (by Sab Lar)\n"
