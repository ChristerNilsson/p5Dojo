// Generated by CoffeeScript 2.3.2
var ID_Nand2TetrisALU, ID_Nian, ID_Nim;

ID_Nand2TetrisALU = {
  v: '2017-04-29',
  k: 'sc fc sw range text class point quad dist for if operators',
  l: 63,
  b: "# Se länken Nand2Tetris, sidan 36, för mer information!\n\nclass ALU extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new ALU",
  a: "class ALU extends Application\n	reset : ->\n		super\n		@x = 3\n		@y = 5\n		@flags = 0\n		@BUTTONS = [[5,1],[7,1],[9,1],[11,1],[13,1],[15,1],[3,3],[5,3],[15,3],[17,3]]\n\n	draw1 : (value,x0,y0) ->\n		sc()\n		fc 1,1,0\n		text value, x0,y0\n		for i in range 16\n			if (value & 1<<(15-i)) != 0 then fc 1 else fc 0.75\n			if (value & 1<<(15-i)) != 0 then r=2.5 else r=1\n			circle x0-40+3+5*i,y0+20,r\n\n	draw : ->\n		textAlign CENTER,CENTER\n		fc 1,1,0\n		quad 0,80, 200,80, 140,120, 60,120\n		[z,zr,ng] = @calc()\n		@draw1 @x,40,50\n		@draw1 @y,160,50\n		@draw1  z,100,130\n		flags = \"zx nx zy ny f no\".split \" \"\n		sc()\n		textSize 16\n		for i in range 6\n			[x,y] = @BUTTONS[i]\n			fc 1,0,0\n			circle 10*x,10*y,10\n			if @flags & 1<<i then fc 1 else fc 0.5\n			text flags[i],10*x,10*y\n		for ch,i in \"-+-+\"\n			[x,y] = @BUTTONS[6+i]\n			fc 1,0,0\n			circle 10*x,10*y,10\n			fc 1\n			text ch, 10*x,10*y\n		if zr==1 then fc 1 else fc 0.5\n		text \"zr\",90,170\n		if ng==1 then fc 1 else fc 0.5\n		text \"ng\",110,170\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for button,i in @BUTTONS\n			if dist(10*button[0],10*button[1],mx,my) < 10 then index = i\n		if 0 <= index <= 5 then @flags ^= 1<<index\n		if index == 6 then @x--\n		if index == 7 then @x++\n		if index == 8 then @y--\n		if index == 9 then @y++\n\n	calc : ->\n		x=@x\n		if @flags & 1 then x=0\n		if @flags & 2 then x=~x\n		y=@y\n		if @flags & 4 then y=0\n		if @flags & 8 then y=~y\n		if @flags & 16 then out = x+y else out = x&y\n		if @flags & 32 then out = ~out\n		if out==0 then zr=1 else zr=0\n		if out<0 then ng=1 else ng=0\n		[out,zr,ng]\n\napp = new ALU \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Nand2Tetris: "http://www.nand2tetris.org/chapters/chapter%2002.pdf"
  }
};

ID_Nian = {
  v: '2017-04-29',
  k: 'bg fc sc [] "" reduce operators text for {} _.countBy if class',
  l: 35,
  h: 2,
  b: "# Bilda ord med fyra till nio bokstäver. Använd variabeln ordlista.\n# Den mittersta bokstaven måste ingå. Prova med \"aaefkrrtu\"\n\nclass Nian extends Application\n	reset : ->\n		super\n	draw  : ->\n	enter : ->\n\napp = new Nian",
  a: "class Nian extends Application\n	reset : ->\n		super\n		@found = \"\"\n	draw : ->\n		n = 15\n		bg 0\n		textAlign LEFT,TOP\n		textSize 12\n		fc 1,1,0\n		sc()\n		for word,i in @found.split \" \"\n			x = int i / n\n			y = i % n\n			text word,5+200/4*x,200*y/n\n	bits : (word) -> word.split(\"\").reduce ((acc,ch) -> acc|(2 ** \"abcdefghijklmnopqrstuvwxyzåäö\".indexOf ch)), 0\n	ok : (f1,f2) ->\n		for ch, f of f2\n			if f > f1[ch] then return false\n		true\n	enter : ->\n		words = ordlista.split \" \"\n		patterns = (@bits word for word in words)\n		@letters = @readText().toLowerCase()\n		mandatory = @letters[4]\n		@found = []\n		p = @bits @letters\n		letters1 = @letters.split \"\"\n		freq1 = _.countBy letters1\n		for pattern,i in patterns\n			if (p & pattern) == pattern\n				letters2 = words[i].split \"\"\n				freq2 = _.countBy letters2\n				if @ok(freq1,freq2) and mandatory in letters2 then @found.push words[i]\n		@found = @found.join \" \"\n\napp = new Nian \"a\"",
  c: {
    app: "reset()|enter()"
  },
  e: {
    Nian: "http://svenska-apps.se/iphone-ipad/underhallning/svd-nian-babqpg.html",
    '_.countBy': "http://underscorejs.org/#countBy",
    reduce: "https://coffeescript-cookbook.github.io/chapters/arrays/reducing-arrays"
  }
};

ID_Nim = {
  v: '2017-04-29',
  k: 'bg fc sc circle operators if _.isEqual return constrain text class',
  l: 62,
  h: 2,
  b: "class Nim extends Application\n	reset : ->\n		super\n		@seed = 0\n	draw  : ->\n	newGame : ->\n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Nim",
  a: "class Nim extends Application\n	reset : ->\n		super\n		@RADIUS = 30\n		@BUTTONS = [[35,80],[100,80],[165,80], [35,150,'ok'],[100,150,'x'],[165,150,'hint']]\n		@seed = 0\n		@newGame()\n		@init()\n\n	init : ->\n		@active = -1\n		@player = 0\n		@original = @board[..]\n\n	move : (index) ->\n		if @active in [index,-1]\n			@active = index\n			@board[@active] = constrain @board[@active]-1, 0, 99\n\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n\n	newGame : ->\n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n		@init()\n\n	ok : ->\n		if @active == -1 then return\n		@player = 1 - @player\n		@active = -1\n		@original = @board[..]\n\n	cancel : ->\n		@board = @original\n		@active = -1\n\n	draw : ->\n		textAlign CENTER,CENTER\n		textSize 32\n		bg 0\n		for [x,y,txt],i in @BUTTONS\n			fc 0\n			sc 1\n			sw 2\n			if i<=2 and @active==-1 or @active==i then circle x,y,@RADIUS\n			if i in [3,4] and @active!=-1 then circle x,y,@RADIUS\n			if i==5 and @active==-1 then circle x,y,@RADIUS\n			fc 1\n			sc()\n			if i<=2 then text @board[i],x,y\n			if i>=3 then text txt,x,y\n		fc 1,@player,0\n		circle 20 + @player * 160,20,10\n\n	hint : ->\n		if @active != -1 then return\n		[a,b,c] = @board\n		board = if (b^c) < a then [b^c,b,c] else if (a^c) < b then [a,a^c,c] else if (a^b) < c then [a,b,a^b] else [a,b,c]\n		if not _.isEqual(board,@board)\n			@board = board\n			@player = 1 - @player\n\n	mousePressed : (mx,my) ->\n		index = -1\n		for button,i in @BUTTONS\n			if dist(button[0],button[1],mx,my) < @RADIUS then index = i\n		if index <= 2 then @move index\n		if index == 3 then @ok()\n		if index == 4 then @cancel()\n		if index == 5 then @hint()\n\napp = new Nim \"a\"\n",
  c: {
    app: "reset()|newGame()"
  },
  e: {
    Nim: "https://en.wikipedia.org/wiki/Nim",
    xor: "https://en.wikipedia.org/wiki/Bitwise_operation#XOR",
    Nimrod: "https://en.wikipedia.org/wiki/Nimrod_(computing)"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTi5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcTi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsaUJBQUEsRUFBQSxPQUFBLEVBQUE7O0FBQUEsaUJBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDREQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUcsd0tBSEg7RUFhQSxDQUFBLEVBQUUsa21EQWJGO0VBb0ZBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTTtFQUFOLENBckZEO0VBc0ZBLENBQUEsRUFDQztJQUFBLFdBQUEsRUFBYztFQUFkO0FBdkZEOztBQXlGRCxPQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxnRUFERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLENBSEY7RUFJQSxDQUFBLEVBQUUsd09BSkY7RUFnQkEsQ0FBQSxFQUFFLDY4QkFoQkY7RUF1REEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNO0VBQU4sQ0F4REQ7RUEwREEsQ0FBQSxFQUNDO0lBQUEsSUFBQSxFQUFPLHVFQUFQO0lBQ0EsV0FBQSxFQUFjLGtDQURkO0lBRUEsTUFBQSxFQUFTO0VBRlQ7QUEzREQ7O0FBK0RELE1BQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG9FQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsQ0FIRjtFQUlBLENBQUEsRUFBRSx5UkFKRjtFQWlCQSxDQUFBLEVBQUUsbXJEQWpCRjtFQTRGQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU07RUFBTixDQTdGRDtFQThGQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0sbUNBQU47SUFDQSxHQUFBLEVBQU0scURBRE47SUFFQSxNQUFBLEVBQVM7RUFGVDtBQS9GRCIsInNvdXJjZXNDb250ZW50IjpbIklEX05hbmQyVGV0cmlzQUxVID1cblx0djonMjAxNy0wNC0yOSdcblx0azonc2MgZmMgc3cgcmFuZ2UgdGV4dCBjbGFzcyBwb2ludCBxdWFkIGRpc3QgZm9yIGlmIG9wZXJhdG9ycydcblx0bDo2M1xuXHRiOiBcIlwiXCJcbiMgU2UgbMOkbmtlbiBOYW5kMlRldHJpcywgc2lkYW4gMzYsIGbDtnIgbWVyIGluZm9ybWF0aW9uIVxuXG5jbGFzcyBBTFUgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5hcHAgPSBuZXcgQUxVXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIEFMVSBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEB4ID0gM1xuXHRcdEB5ID0gNVxuXHRcdEBmbGFncyA9IDBcblx0XHRAQlVUVE9OUyA9IFtbNSwxXSxbNywxXSxbOSwxXSxbMTEsMV0sWzEzLDFdLFsxNSwxXSxbMywzXSxbNSwzXSxbMTUsM10sWzE3LDNdXVxuXG5cdGRyYXcxIDogKHZhbHVlLHgwLHkwKSAtPlxuXHRcdHNjKClcblx0XHRmYyAxLDEsMFxuXHRcdHRleHQgdmFsdWUsIHgwLHkwXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgMTZcblx0XHRcdGlmICh2YWx1ZSAmIDE8PCgxNS1pKSkgIT0gMCB0aGVuIGZjIDEgZWxzZSBmYyAwLjc1XG5cdFx0XHRpZiAodmFsdWUgJiAxPDwoMTUtaSkpICE9IDAgdGhlbiByPTIuNSBlbHNlIHI9MVxuXHRcdFx0Y2lyY2xlIHgwLTQwKzMrNSppLHkwKzIwLHJcblxuXHRkcmF3IDogLT5cblx0XHR0ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxuXHRcdGZjIDEsMSwwXG5cdFx0cXVhZCAwLDgwLCAyMDAsODAsIDE0MCwxMjAsIDYwLDEyMFxuXHRcdFt6LHpyLG5nXSA9IEBjYWxjKClcblx0XHRAZHJhdzEgQHgsNDAsNTBcblx0XHRAZHJhdzEgQHksMTYwLDUwXG5cdFx0QGRyYXcxICB6LDEwMCwxMzBcblx0XHRmbGFncyA9IFwienggbnggenkgbnkgZiBub1wiLnNwbGl0IFwiIFwiXG5cdFx0c2MoKVxuXHRcdHRleHRTaXplIDE2XG5cdFx0Zm9yIGkgaW4gcmFuZ2UgNlxuXHRcdFx0W3gseV0gPSBAQlVUVE9OU1tpXVxuXHRcdFx0ZmMgMSwwLDBcblx0XHRcdGNpcmNsZSAxMCp4LDEwKnksMTBcblx0XHRcdGlmIEBmbGFncyAmIDE8PGkgdGhlbiBmYyAxIGVsc2UgZmMgMC41XG5cdFx0XHR0ZXh0IGZsYWdzW2ldLDEwKngsMTAqeVxuXHRcdGZvciBjaCxpIGluIFwiLSstK1wiXG5cdFx0XHRbeCx5XSA9IEBCVVRUT05TWzYraV1cblx0XHRcdGZjIDEsMCwwXG5cdFx0XHRjaXJjbGUgMTAqeCwxMCp5LDEwXG5cdFx0XHRmYyAxXG5cdFx0XHR0ZXh0IGNoLCAxMCp4LDEwKnlcblx0XHRpZiB6cj09MSB0aGVuIGZjIDEgZWxzZSBmYyAwLjVcblx0XHR0ZXh0IFwienJcIiw5MCwxNzBcblx0XHRpZiBuZz09MSB0aGVuIGZjIDEgZWxzZSBmYyAwLjVcblx0XHR0ZXh0IFwibmdcIiwxMTAsMTcwXG5cblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuXHRcdGluZGV4ID0gLTFcblx0XHRmb3IgYnV0dG9uLGkgaW4gQEJVVFRPTlNcblx0XHRcdGlmIGRpc3QoMTAqYnV0dG9uWzBdLDEwKmJ1dHRvblsxXSxteCxteSkgPCAxMCB0aGVuIGluZGV4ID0gaVxuXHRcdGlmIDAgPD0gaW5kZXggPD0gNSB0aGVuIEBmbGFncyBePSAxPDxpbmRleFxuXHRcdGlmIGluZGV4ID09IDYgdGhlbiBAeC0tXG5cdFx0aWYgaW5kZXggPT0gNyB0aGVuIEB4Kytcblx0XHRpZiBpbmRleCA9PSA4IHRoZW4gQHktLVxuXHRcdGlmIGluZGV4ID09IDkgdGhlbiBAeSsrXG5cblx0Y2FsYyA6IC0+XG5cdFx0eD1AeFxuXHRcdGlmIEBmbGFncyAmIDEgdGhlbiB4PTBcblx0XHRpZiBAZmxhZ3MgJiAyIHRoZW4geD1+eFxuXHRcdHk9QHlcblx0XHRpZiBAZmxhZ3MgJiA0IHRoZW4geT0wXG5cdFx0aWYgQGZsYWdzICYgOCB0aGVuIHk9fnlcblx0XHRpZiBAZmxhZ3MgJiAxNiB0aGVuIG91dCA9IHgreSBlbHNlIG91dCA9IHgmeVxuXHRcdGlmIEBmbGFncyAmIDMyIHRoZW4gb3V0ID0gfm91dFxuXHRcdGlmIG91dD09MCB0aGVuIHpyPTEgZWxzZSB6cj0wXG5cdFx0aWYgb3V0PDAgdGhlbiBuZz0xIGVsc2Ugbmc9MFxuXHRcdFtvdXQsenIsbmddXG5cbmFwcCA9IG5ldyBBTFUgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKVwiXG5cdGU6XG5cdFx0TmFuZDJUZXRyaXMgOiBcImh0dHA6Ly93d3cubmFuZDJ0ZXRyaXMub3JnL2NoYXB0ZXJzL2NoYXB0ZXIlMjAwMi5wZGZcIlxuXG5JRF9OaWFuID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgZmMgc2MgW10gXCJcIiByZWR1Y2Ugb3BlcmF0b3JzIHRleHQgZm9yIHt9IF8uY291bnRCeSBpZiBjbGFzcydcblx0bDozNVxuXHRoOjJcblx0YjpcIlwiXCJcbiMgQmlsZGEgb3JkIG1lZCBmeXJhIHRpbGwgbmlvIGJva3N0w6R2ZXIuIEFudsOkbmQgdmFyaWFiZWxuIG9yZGxpc3RhLlxuIyBEZW4gbWl0dGVyc3RhIGJva3N0YXZlbiBtw6VzdGUgaW5nw6UuIFByb3ZhIG1lZCBcImFhZWZrcnJ0dVwiXG5cbmNsYXNzIE5pYW4gZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgOiAtPlxuXHRlbnRlciA6IC0+XG5cbmFwcCA9IG5ldyBOaWFuXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIE5pYW4gZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAZm91bmQgPSBcIlwiXG5cdGRyYXcgOiAtPlxuXHRcdG4gPSAxNVxuXHRcdGJnIDBcblx0XHR0ZXh0QWxpZ24gTEVGVCxUT1Bcblx0XHR0ZXh0U2l6ZSAxMlxuXHRcdGZjIDEsMSwwXG5cdFx0c2MoKVxuXHRcdGZvciB3b3JkLGkgaW4gQGZvdW5kLnNwbGl0IFwiIFwiXG5cdFx0XHR4ID0gaW50IGkgLyBuXG5cdFx0XHR5ID0gaSAlIG5cblx0XHRcdHRleHQgd29yZCw1KzIwMC80KngsMjAwKnkvblxuXHRiaXRzIDogKHdvcmQpIC0+IHdvcmQuc3BsaXQoXCJcIikucmVkdWNlICgoYWNjLGNoKSAtPiBhY2N8KDIgKiogXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5esOlw6TDtlwiLmluZGV4T2YgY2gpKSwgMFxuXHRvayA6IChmMSxmMikgLT5cblx0XHRmb3IgY2gsIGYgb2YgZjJcblx0XHRcdGlmIGYgPiBmMVtjaF0gdGhlbiByZXR1cm4gZmFsc2Vcblx0XHR0cnVlXG5cdGVudGVyIDogLT5cblx0XHR3b3JkcyA9IG9yZGxpc3RhLnNwbGl0IFwiIFwiXG5cdFx0cGF0dGVybnMgPSAoQGJpdHMgd29yZCBmb3Igd29yZCBpbiB3b3Jkcylcblx0XHRAbGV0dGVycyA9IEByZWFkVGV4dCgpLnRvTG93ZXJDYXNlKClcblx0XHRtYW5kYXRvcnkgPSBAbGV0dGVyc1s0XVxuXHRcdEBmb3VuZCA9IFtdXG5cdFx0cCA9IEBiaXRzIEBsZXR0ZXJzXG5cdFx0bGV0dGVyczEgPSBAbGV0dGVycy5zcGxpdCBcIlwiXG5cdFx0ZnJlcTEgPSBfLmNvdW50QnkgbGV0dGVyczFcblx0XHRmb3IgcGF0dGVybixpIGluIHBhdHRlcm5zXG5cdFx0XHRpZiAocCAmIHBhdHRlcm4pID09IHBhdHRlcm5cblx0XHRcdFx0bGV0dGVyczIgPSB3b3Jkc1tpXS5zcGxpdCBcIlwiXG5cdFx0XHRcdGZyZXEyID0gXy5jb3VudEJ5IGxldHRlcnMyXG5cdFx0XHRcdGlmIEBvayhmcmVxMSxmcmVxMikgYW5kIG1hbmRhdG9yeSBpbiBsZXR0ZXJzMiB0aGVuIEBmb3VuZC5wdXNoIHdvcmRzW2ldXG5cdFx0QGZvdW5kID0gQGZvdW5kLmpvaW4gXCIgXCJcblxuYXBwID0gbmV3IE5pYW4gXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxlbnRlcigpXCJcblxuXHRlOlxuXHRcdE5pYW4gOiBcImh0dHA6Ly9zdmVuc2thLWFwcHMuc2UvaXBob25lLWlwYWQvdW5kZXJoYWxsbmluZy9zdmQtbmlhbi1iYWJxcGcuaHRtbFwiXG5cdFx0J18uY291bnRCeScgOiBcImh0dHA6Ly91bmRlcnNjb3JlanMub3JnLyNjb3VudEJ5XCJcblx0XHRyZWR1Y2UgOiBcImh0dHBzOi8vY29mZmVlc2NyaXB0LWNvb2tib29rLmdpdGh1Yi5pby9jaGFwdGVycy9hcnJheXMvcmVkdWNpbmctYXJyYXlzXCJcblxuSURfTmltID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgZmMgc2MgY2lyY2xlIG9wZXJhdG9ycyBpZiBfLmlzRXF1YWwgcmV0dXJuIGNvbnN0cmFpbiB0ZXh0IGNsYXNzJ1xuXHRsOjYyXG5cdGg6MlxuXHRiOlwiXCJcIlxuY2xhc3MgTmltIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QHNlZWQgPSAwXG5cdGRyYXcgIDogLT5cblx0bmV3R2FtZSA6IC0+XG5cdFx0W2EsYixjXSA9IFsxK0ByYW5kaW50KDUpLDErQHJhbmRpbnQoNSksMStAcmFuZGludCg1KV1cblx0XHRAYm9hcmQgPSBbYSxhK2IsYStiK2NdXG5cdHJhbmRpbnQgOiAobikgLT4gaW50IG4gKiBmcmFjdGlvbiAxMDAwMCAqIE1hdGguc2luIEBzZWVkKytcblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuYXBwID0gbmV3IE5pbVxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBOaW0gZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAUkFESVVTID0gMzBcblx0XHRAQlVUVE9OUyA9IFtbMzUsODBdLFsxMDAsODBdLFsxNjUsODBdLCBbMzUsMTUwLCdvayddLFsxMDAsMTUwLCd4J10sWzE2NSwxNTAsJ2hpbnQnXV1cblx0XHRAc2VlZCA9IDBcblx0XHRAbmV3R2FtZSgpXG5cdFx0QGluaXQoKVxuXG5cdGluaXQgOiAtPlxuXHRcdEBhY3RpdmUgPSAtMVxuXHRcdEBwbGF5ZXIgPSAwXG5cdFx0QG9yaWdpbmFsID0gQGJvYXJkWy4uXVxuXG5cdG1vdmUgOiAoaW5kZXgpIC0+XG5cdFx0aWYgQGFjdGl2ZSBpbiBbaW5kZXgsLTFdXG5cdFx0XHRAYWN0aXZlID0gaW5kZXhcblx0XHRcdEBib2FyZFtAYWN0aXZlXSA9IGNvbnN0cmFpbiBAYm9hcmRbQGFjdGl2ZV0tMSwgMCwgOTlcblxuXHRyYW5kaW50IDogKG4pIC0+IGludCBuICogZnJhY3Rpb24gMTAwMDAgKiBNYXRoLnNpbiBAc2VlZCsrXG5cblx0bmV3R2FtZSA6IC0+XG5cdFx0W2EsYixjXSA9IFsxK0ByYW5kaW50KDUpLDErQHJhbmRpbnQoNSksMStAcmFuZGludCg1KV1cblx0XHRAYm9hcmQgPSBbYSxhK2IsYStiK2NdXG5cdFx0QGluaXQoKVxuXG5cdG9rIDogLT5cblx0XHRpZiBAYWN0aXZlID09IC0xIHRoZW4gcmV0dXJuXG5cdFx0QHBsYXllciA9IDEgLSBAcGxheWVyXG5cdFx0QGFjdGl2ZSA9IC0xXG5cdFx0QG9yaWdpbmFsID0gQGJvYXJkWy4uXVxuXG5cdGNhbmNlbCA6IC0+XG5cdFx0QGJvYXJkID0gQG9yaWdpbmFsXG5cdFx0QGFjdGl2ZSA9IC0xXG5cblx0ZHJhdyA6IC0+XG5cdFx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcblx0XHR0ZXh0U2l6ZSAzMlxuXHRcdGJnIDBcblx0XHRmb3IgW3gseSx0eHRdLGkgaW4gQEJVVFRPTlNcblx0XHRcdGZjIDBcblx0XHRcdHNjIDFcblx0XHRcdHN3IDJcblx0XHRcdGlmIGk8PTIgYW5kIEBhY3RpdmU9PS0xIG9yIEBhY3RpdmU9PWkgdGhlbiBjaXJjbGUgeCx5LEBSQURJVVNcblx0XHRcdGlmIGkgaW4gWzMsNF0gYW5kIEBhY3RpdmUhPS0xIHRoZW4gY2lyY2xlIHgseSxAUkFESVVTXG5cdFx0XHRpZiBpPT01IGFuZCBAYWN0aXZlPT0tMSB0aGVuIGNpcmNsZSB4LHksQFJBRElVU1xuXHRcdFx0ZmMgMVxuXHRcdFx0c2MoKVxuXHRcdFx0aWYgaTw9MiB0aGVuIHRleHQgQGJvYXJkW2ldLHgseVxuXHRcdFx0aWYgaT49MyB0aGVuIHRleHQgdHh0LHgseVxuXHRcdGZjIDEsQHBsYXllciwwXG5cdFx0Y2lyY2xlIDIwICsgQHBsYXllciAqIDE2MCwyMCwxMFxuXG5cdGhpbnQgOiAtPlxuXHRcdGlmIEBhY3RpdmUgIT0gLTEgdGhlbiByZXR1cm5cblx0XHRbYSxiLGNdID0gQGJvYXJkXG5cdFx0Ym9hcmQgPSBpZiAoYl5jKSA8IGEgdGhlbiBbYl5jLGIsY10gZWxzZSBpZiAoYV5jKSA8IGIgdGhlbiBbYSxhXmMsY10gZWxzZSBpZiAoYV5iKSA8IGMgdGhlbiBbYSxiLGFeYl0gZWxzZSBbYSxiLGNdXG5cdFx0aWYgbm90IF8uaXNFcXVhbChib2FyZCxAYm9hcmQpXG5cdFx0XHRAYm9hcmQgPSBib2FyZFxuXHRcdFx0QHBsYXllciA9IDEgLSBAcGxheWVyXG5cblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuXHRcdGluZGV4ID0gLTFcblx0XHRmb3IgYnV0dG9uLGkgaW4gQEJVVFRPTlNcblx0XHRcdGlmIGRpc3QoYnV0dG9uWzBdLGJ1dHRvblsxXSxteCxteSkgPCBAUkFESVVTIHRoZW4gaW5kZXggPSBpXG5cdFx0aWYgaW5kZXggPD0gMiB0aGVuIEBtb3ZlIGluZGV4XG5cdFx0aWYgaW5kZXggPT0gMyB0aGVuIEBvaygpXG5cdFx0aWYgaW5kZXggPT0gNCB0aGVuIEBjYW5jZWwoKVxuXHRcdGlmIGluZGV4ID09IDUgdGhlbiBAaGludCgpXG5cbmFwcCA9IG5ldyBOaW0gXCJhXCJcblxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpfG5ld0dhbWUoKVwiXG5cdGU6XG5cdFx0TmltIDogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9OaW1cIlxuXHRcdHhvciA6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQml0d2lzZV9vcGVyYXRpb24jWE9SXCJcblx0XHROaW1yb2QgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05pbXJvZF8oY29tcHV0aW5nKVwiXG4iXX0=
//# sourceURL=c:\github\p5Dojo\coffee\data\N.coffee