// Generated by CoffeeScript 1.11.1
var ID_Nand2TetrisALU, ID_Nian, ID_Nim;

ID_Nand2TetrisALU = {
  v: '2017-04-29',
  k: 'sc fc sw range text class point quad dist for if operators',
  b: "# LOC:63\n# Se länken Nand2Tetris, sidan 36, för mer information!\n\nclass ALU extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new ALU",
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
  b: "# LOC:35\n# Bilda ord med fyra till nio bokstäver. Använd variabeln ordlista.\n# Den mittersta bokstaven måste ingå. Prova med \"aaefkrrtu\"\n\nclass Nian extends Application\n	reset : ->\n		super\n	draw  : ->\n	enter : ->\n\napp = new Nian",
  a: "class Nian extends Application\n	reset : ->\n		super\n		@found = \"\"\n	draw : ->\n		n = 15\n		bg 0\n		textAlign LEFT,TOP\n		textSize 12\n		fc 1,1,0\n		sc()\n		for word,i in @found.split \" \"\n			x = int i / n\n			y = i % n\n			text word,5+200/4*x,200*y/n\n	bits : (word) -> word.split(\"\").reduce ((acc,ch) -> acc|(2 ** \"abcdefghijklmnopqrstuvwxyzåäö\".indexOf ch)), 0\n	ok : (f1,f2) ->\n		for ch, f of f2\n			if f > f1[ch] then return false\n		true\n	enter : ->\n		words = ordlista.split \" \"\n		patterns = (@bits word for word in words)\n		@letters = @readText()\n		mandatory = @letters[4]\n		@found = []\n		p = @bits @letters\n		letters1 = @letters.split \"\"\n		freq1 = _.countBy letters1\n		for pattern,i in patterns\n			if (p & pattern) == pattern\n				letters2 = words[i].split \"\"\n				freq2 = _.countBy letters2\n				if @ok(freq1,freq2) and mandatory in letters2 then @found.push words[i]\n		@found = @found.join \" \"\n\napp = new Nian \"a\"",
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
  b: "# LOC:62\n\nclass Nim extends Application\n	reset : ->\n		super\n		@seed = 0\n	draw  : ->\n	newGame : ->\n		[a,b,c] = [1+@randint(5),1+@randint(5),1+@randint(5)]\n		@board = [a,a+b,a+b+c]\n	randint : (n) -> int n * fraction 10000 * Math.sin @seed++\n	mousePressed : (mx,my) ->\napp = new Nim",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTi5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcTi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsaUJBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDREQURGO0VBRUEsQ0FBQSxFQUFHLGtMQUZIO0VBYUEsQ0FBQSxFQUFFLGttREFiRjtFQW9GQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0sU0FBTjtHQXJGRDtFQXNGQSxDQUFBLEVBQ0M7SUFBQSxXQUFBLEVBQWMsc0RBQWQ7R0F2RkQ7OztBQXlGRCxPQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxnRUFERjtFQUVBLENBQUEsRUFBRSxrUEFGRjtFQWVBLENBQUEsRUFBRSwrN0JBZkY7RUFzREEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLGlCQUFOO0dBdkREO0VBeURBLENBQUEsRUFDQztJQUFBLElBQUEsRUFBTyx1RUFBUDtJQUNBLFdBQUEsRUFBYyxrQ0FEZDtJQUVBLE1BQUEsRUFBUyx5RUFGVDtHQTFERDs7O0FBOERELE1BQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG9FQURGO0VBRUEsQ0FBQSxFQUFFLHFTQUZGO0VBaUJBLENBQUEsRUFBRSxtckRBakJGO0VBNEZBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSxtQkFBTjtHQTdGRDtFQThGQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0sbUNBQU47SUFDQSxHQUFBLEVBQU0scURBRE47SUFFQSxNQUFBLEVBQVMsa0RBRlQ7R0EvRkQiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9OYW5kMlRldHJpc0FMVSA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J3NjIGZjIHN3IHJhbmdlIHRleHQgY2xhc3MgcG9pbnQgcXVhZCBkaXN0IGZvciBpZiBvcGVyYXRvcnMnXG5cdGI6IFwiXCJcIlxuIyBMT0M6NjNcbiMgU2UgbMOkbmtlbiBOYW5kMlRldHJpcywgc2lkYW4gMzYsIGbDtnIgbWVyIGluZm9ybWF0aW9uIVxuXG5jbGFzcyBBTFUgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5hcHAgPSBuZXcgQUxVXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIEFMVSBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEB4ID0gM1xuXHRcdEB5ID0gNVxuXHRcdEBmbGFncyA9IDBcblx0XHRAQlVUVE9OUyA9IFtbNSwxXSxbNywxXSxbOSwxXSxbMTEsMV0sWzEzLDFdLFsxNSwxXSxbMywzXSxbNSwzXSxbMTUsM10sWzE3LDNdXVxuXG5cdGRyYXcxIDogKHZhbHVlLHgwLHkwKSAtPlxuXHRcdHNjKClcblx0XHRmYyAxLDEsMFxuXHRcdHRleHQgdmFsdWUsIHgwLHkwXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgMTZcblx0XHRcdGlmICh2YWx1ZSAmIDE8PCgxNS1pKSkgIT0gMCB0aGVuIGZjIDEgZWxzZSBmYyAwLjc1XG5cdFx0XHRpZiAodmFsdWUgJiAxPDwoMTUtaSkpICE9IDAgdGhlbiByPTIuNSBlbHNlIHI9MVxuXHRcdFx0Y2lyY2xlIHgwLTQwKzMrNSppLHkwKzIwLHJcblxuXHRkcmF3IDogLT5cblx0XHR0ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxuXHRcdGZjIDEsMSwwXG5cdFx0cXVhZCAwLDgwLCAyMDAsODAsIDE0MCwxMjAsIDYwLDEyMFxuXHRcdFt6LHpyLG5nXSA9IEBjYWxjKClcblx0XHRAZHJhdzEgQHgsNDAsNTBcblx0XHRAZHJhdzEgQHksMTYwLDUwXG5cdFx0QGRyYXcxICB6LDEwMCwxMzBcblx0XHRmbGFncyA9IFwienggbnggenkgbnkgZiBub1wiLnNwbGl0IFwiIFwiXG5cdFx0c2MoKVxuXHRcdHRleHRTaXplIDE2XG5cdFx0Zm9yIGkgaW4gcmFuZ2UgNlxuXHRcdFx0W3gseV0gPSBAQlVUVE9OU1tpXVxuXHRcdFx0ZmMgMSwwLDBcblx0XHRcdGNpcmNsZSAxMCp4LDEwKnksMTBcblx0XHRcdGlmIEBmbGFncyAmIDE8PGkgdGhlbiBmYyAxIGVsc2UgZmMgMC41XG5cdFx0XHR0ZXh0IGZsYWdzW2ldLDEwKngsMTAqeVxuXHRcdGZvciBjaCxpIGluIFwiLSstK1wiXG5cdFx0XHRbeCx5XSA9IEBCVVRUT05TWzYraV1cblx0XHRcdGZjIDEsMCwwXG5cdFx0XHRjaXJjbGUgMTAqeCwxMCp5LDEwXG5cdFx0XHRmYyAxXG5cdFx0XHR0ZXh0IGNoLCAxMCp4LDEwKnlcblx0XHRpZiB6cj09MSB0aGVuIGZjIDEgZWxzZSBmYyAwLjVcblx0XHR0ZXh0IFwienJcIiw5MCwxNzBcblx0XHRpZiBuZz09MSB0aGVuIGZjIDEgZWxzZSBmYyAwLjVcblx0XHR0ZXh0IFwibmdcIiwxMTAsMTcwXG5cblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxuXHRcdGluZGV4ID0gLTFcblx0XHRmb3IgYnV0dG9uLGkgaW4gQEJVVFRPTlNcblx0XHRcdGlmIGRpc3QoMTAqYnV0dG9uWzBdLDEwKmJ1dHRvblsxXSxteCxteSkgPCAxMCB0aGVuIGluZGV4ID0gaVxuXHRcdGlmIDAgPD0gaW5kZXggPD0gNSB0aGVuIEBmbGFncyBePSAxPDxpbmRleFxuXHRcdGlmIGluZGV4ID09IDYgdGhlbiBAeC0tXG5cdFx0aWYgaW5kZXggPT0gNyB0aGVuIEB4Kytcblx0XHRpZiBpbmRleCA9PSA4IHRoZW4gQHktLVxuXHRcdGlmIGluZGV4ID09IDkgdGhlbiBAeSsrXG5cblx0Y2FsYyA6IC0+XG5cdFx0eD1AeFxuXHRcdGlmIEBmbGFncyAmIDEgdGhlbiB4PTBcblx0XHRpZiBAZmxhZ3MgJiAyIHRoZW4geD1+eFxuXHRcdHk9QHlcblx0XHRpZiBAZmxhZ3MgJiA0IHRoZW4geT0wXG5cdFx0aWYgQGZsYWdzICYgOCB0aGVuIHk9fnlcblx0XHRpZiBAZmxhZ3MgJiAxNiB0aGVuIG91dCA9IHgreSBlbHNlIG91dCA9IHgmeVxuXHRcdGlmIEBmbGFncyAmIDMyIHRoZW4gb3V0ID0gfm91dFxuXHRcdGlmIG91dD09MCB0aGVuIHpyPTEgZWxzZSB6cj0wXG5cdFx0aWYgb3V0PDAgdGhlbiBuZz0xIGVsc2Ugbmc9MFxuXHRcdFtvdXQsenIsbmddXG5cbmFwcCA9IG5ldyBBTFUgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKVwiXG5cdGU6XG5cdFx0TmFuZDJUZXRyaXMgOiBcImh0dHA6Ly93d3cubmFuZDJ0ZXRyaXMub3JnL2NoYXB0ZXJzL2NoYXB0ZXIlMjAwMi5wZGZcIlxuXG5JRF9OaWFuID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgZmMgc2MgW10gXCJcIiByZWR1Y2Ugb3BlcmF0b3JzIHRleHQgZm9yIHt9IF8uY291bnRCeSBpZiBjbGFzcydcblx0YjpcIlwiXCJcbiMgTE9DOjM1XG4jIEJpbGRhIG9yZCBtZWQgZnlyYSB0aWxsIG5pbyBib2tzdMOkdmVyLiBBbnbDpG5kIHZhcmlhYmVsbiBvcmRsaXN0YS5cbiMgRGVuIG1pdHRlcnN0YSBib2tzdGF2ZW4gbcOlc3RlIGluZ8OlLiBQcm92YSBtZWQgXCJhYWVma3JydHVcIlxuXG5jbGFzcyBOaWFuIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdGRyYXcgIDogLT5cblx0ZW50ZXIgOiAtPlxuXG5hcHAgPSBuZXcgTmlhblxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBOaWFuIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QGZvdW5kID0gXCJcIlxuXHRkcmF3IDogLT5cblx0XHRuID0gMTVcblx0XHRiZyAwXG5cdFx0dGV4dEFsaWduIExFRlQsVE9QXG5cdFx0dGV4dFNpemUgMTJcblx0XHRmYyAxLDEsMFxuXHRcdHNjKClcblx0XHRmb3Igd29yZCxpIGluIEBmb3VuZC5zcGxpdCBcIiBcIlxuXHRcdFx0eCA9IGludCBpIC8gblxuXHRcdFx0eSA9IGkgJSBuXG5cdFx0XHR0ZXh0IHdvcmQsNSsyMDAvNCp4LDIwMCp5L25cblx0Yml0cyA6ICh3b3JkKSAtPiB3b3JkLnNwbGl0KFwiXCIpLnJlZHVjZSAoKGFjYyxjaCkgLT4gYWNjfCgyICoqIFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXrDpcOkw7ZcIi5pbmRleE9mIGNoKSksIDBcblx0b2sgOiAoZjEsZjIpIC0+XG5cdFx0Zm9yIGNoLCBmIG9mIGYyXG5cdFx0XHRpZiBmID4gZjFbY2hdIHRoZW4gcmV0dXJuIGZhbHNlXG5cdFx0dHJ1ZVxuXHRlbnRlciA6IC0+XG5cdFx0d29yZHMgPSBvcmRsaXN0YS5zcGxpdCBcIiBcIlxuXHRcdHBhdHRlcm5zID0gKEBiaXRzIHdvcmQgZm9yIHdvcmQgaW4gd29yZHMpXG5cdFx0QGxldHRlcnMgPSBAcmVhZFRleHQoKVxuXHRcdG1hbmRhdG9yeSA9IEBsZXR0ZXJzWzRdXG5cdFx0QGZvdW5kID0gW11cblx0XHRwID0gQGJpdHMgQGxldHRlcnNcblx0XHRsZXR0ZXJzMSA9IEBsZXR0ZXJzLnNwbGl0IFwiXCJcblx0XHRmcmVxMSA9IF8uY291bnRCeSBsZXR0ZXJzMVxuXHRcdGZvciBwYXR0ZXJuLGkgaW4gcGF0dGVybnNcblx0XHRcdGlmIChwICYgcGF0dGVybikgPT0gcGF0dGVyblxuXHRcdFx0XHRsZXR0ZXJzMiA9IHdvcmRzW2ldLnNwbGl0IFwiXCJcblx0XHRcdFx0ZnJlcTIgPSBfLmNvdW50QnkgbGV0dGVyczJcblx0XHRcdFx0aWYgQG9rKGZyZXExLGZyZXEyKSBhbmQgbWFuZGF0b3J5IGluIGxldHRlcnMyIHRoZW4gQGZvdW5kLnB1c2ggd29yZHNbaV1cblx0XHRAZm91bmQgPSBAZm91bmQuam9pbiBcIiBcIlxuXG5hcHAgPSBuZXcgTmlhbiBcImFcIlxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpfGVudGVyKClcIlxuXG5cdGU6XG5cdFx0TmlhbiA6IFwiaHR0cDovL3N2ZW5za2EtYXBwcy5zZS9pcGhvbmUtaXBhZC91bmRlcmhhbGxuaW5nL3N2ZC1uaWFuLWJhYnFwZy5odG1sXCJcblx0XHQnXy5jb3VudEJ5JyA6IFwiaHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvI2NvdW50QnlcIlxuXHRcdHJlZHVjZSA6IFwiaHR0cHM6Ly9jb2ZmZWVzY3JpcHQtY29va2Jvb2suZ2l0aHViLmlvL2NoYXB0ZXJzL2FycmF5cy9yZWR1Y2luZy1hcnJheXNcIlxuXG5JRF9OaW0gPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidiZyBmYyBzYyBjaXJjbGUgb3BlcmF0b3JzIGlmIF8uaXNFcXVhbCByZXR1cm4gY29uc3RyYWluIHRleHQgY2xhc3MnXG5cdGI6XCJcIlwiXG4jIExPQzo2MlxuXG5jbGFzcyBOaW0gZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAc2VlZCA9IDBcblx0ZHJhdyAgOiAtPlxuXHRuZXdHYW1lIDogLT5cblx0XHRbYSxiLGNdID0gWzErQHJhbmRpbnQoNSksMStAcmFuZGludCg1KSwxK0ByYW5kaW50KDUpXVxuXHRcdEBib2FyZCA9IFthLGErYixhK2IrY11cblx0cmFuZGludCA6IChuKSAtPiBpbnQgbiAqIGZyYWN0aW9uIDEwMDAwICogTWF0aC5zaW4gQHNlZWQrK1xuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5hcHAgPSBuZXcgTmltXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIE5pbSBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRcdEBSQURJVVMgPSAzMFxuXHRcdEBCVVRUT05TID0gW1szNSw4MF0sWzEwMCw4MF0sWzE2NSw4MF0sIFszNSwxNTAsJ29rJ10sWzEwMCwxNTAsJ3gnXSxbMTY1LDE1MCwnaGludCddXVxuXHRcdEBzZWVkID0gMFxuXHRcdEBuZXdHYW1lKClcblx0XHRAaW5pdCgpXG5cblx0aW5pdCA6IC0+XG5cdFx0QGFjdGl2ZSA9IC0xXG5cdFx0QHBsYXllciA9IDBcblx0XHRAb3JpZ2luYWwgPSBAYm9hcmRbLi5dXG5cblx0bW92ZSA6IChpbmRleCkgLT5cblx0XHRpZiBAYWN0aXZlIGluIFtpbmRleCwtMV1cblx0XHRcdEBhY3RpdmUgPSBpbmRleFxuXHRcdFx0QGJvYXJkW0BhY3RpdmVdID0gY29uc3RyYWluIEBib2FyZFtAYWN0aXZlXS0xLCAwLCA5OVxuXG5cdHJhbmRpbnQgOiAobikgLT4gaW50IG4gKiBmcmFjdGlvbiAxMDAwMCAqIE1hdGguc2luIEBzZWVkKytcblxuXHRuZXdHYW1lIDogLT5cblx0XHRbYSxiLGNdID0gWzErQHJhbmRpbnQoNSksMStAcmFuZGludCg1KSwxK0ByYW5kaW50KDUpXVxuXHRcdEBib2FyZCA9IFthLGErYixhK2IrY11cblx0XHRAaW5pdCgpXG5cblx0b2sgOiAtPlxuXHRcdGlmIEBhY3RpdmUgPT0gLTEgdGhlbiByZXR1cm5cblx0XHRAcGxheWVyID0gMSAtIEBwbGF5ZXJcblx0XHRAYWN0aXZlID0gLTFcblx0XHRAb3JpZ2luYWwgPSBAYm9hcmRbLi5dXG5cblx0Y2FuY2VsIDogLT5cblx0XHRAYm9hcmQgPSBAb3JpZ2luYWxcblx0XHRAYWN0aXZlID0gLTFcblxuXHRkcmF3IDogLT5cblx0XHR0ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxuXHRcdHRleHRTaXplIDMyXG5cdFx0YmcgMFxuXHRcdGZvciBbeCx5LHR4dF0saSBpbiBAQlVUVE9OU1xuXHRcdFx0ZmMgMFxuXHRcdFx0c2MgMVxuXHRcdFx0c3cgMlxuXHRcdFx0aWYgaTw9MiBhbmQgQGFjdGl2ZT09LTEgb3IgQGFjdGl2ZT09aSB0aGVuIGNpcmNsZSB4LHksQFJBRElVU1xuXHRcdFx0aWYgaSBpbiBbMyw0XSBhbmQgQGFjdGl2ZSE9LTEgdGhlbiBjaXJjbGUgeCx5LEBSQURJVVNcblx0XHRcdGlmIGk9PTUgYW5kIEBhY3RpdmU9PS0xIHRoZW4gY2lyY2xlIHgseSxAUkFESVVTXG5cdFx0XHRmYyAxXG5cdFx0XHRzYygpXG5cdFx0XHRpZiBpPD0yIHRoZW4gdGV4dCBAYm9hcmRbaV0seCx5XG5cdFx0XHRpZiBpPj0zIHRoZW4gdGV4dCB0eHQseCx5XG5cdFx0ZmMgMSxAcGxheWVyLDBcblx0XHRjaXJjbGUgMjAgKyBAcGxheWVyICogMTYwLDIwLDEwXG5cblx0aGludCA6IC0+XG5cdFx0aWYgQGFjdGl2ZSAhPSAtMSB0aGVuIHJldHVyblxuXHRcdFthLGIsY10gPSBAYm9hcmRcblx0XHRib2FyZCA9IGlmIChiXmMpIDwgYSB0aGVuIFtiXmMsYixjXSBlbHNlIGlmIChhXmMpIDwgYiB0aGVuIFthLGFeYyxjXSBlbHNlIGlmIChhXmIpIDwgYyB0aGVuIFthLGIsYV5iXSBlbHNlIFthLGIsY11cblx0XHRpZiBub3QgXy5pc0VxdWFsKGJvYXJkLEBib2FyZClcblx0XHRcdEBib2FyZCA9IGJvYXJkXG5cdFx0XHRAcGxheWVyID0gMSAtIEBwbGF5ZXJcblxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5cdFx0aW5kZXggPSAtMVxuXHRcdGZvciBidXR0b24saSBpbiBAQlVUVE9OU1xuXHRcdFx0aWYgZGlzdChidXR0b25bMF0sYnV0dG9uWzFdLG14LG15KSA8IEBSQURJVVMgdGhlbiBpbmRleCA9IGlcblx0XHRpZiBpbmRleCA8PSAyIHRoZW4gQG1vdmUgaW5kZXhcblx0XHRpZiBpbmRleCA9PSAzIHRoZW4gQG9rKClcblx0XHRpZiBpbmRleCA9PSA0IHRoZW4gQGNhbmNlbCgpXG5cdFx0aWYgaW5kZXggPT0gNSB0aGVuIEBoaW50KClcblxuYXBwID0gbmV3IE5pbSBcImFcIlxuXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8bmV3R2FtZSgpXCJcblx0ZTpcblx0XHROaW0gOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05pbVwiXG5cdFx0eG9yIDogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CaXR3aXNlX29wZXJhdGlvbiNYT1JcIlxuXHRcdE5pbXJvZCA6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTmltcm9kXyhjb21wdXRpbmcpXCJcbiJdfQ==
//# sourceURL=C:\github\p5Dojo\coffee\data\N.coffee