// Generated by CoffeeScript 1.11.1
var ID_Five, ID_ForthHaiku, ID_ForthHaiku3D;

ID_Five = {
  v: '2017-04-29',
  k: 'bg circle fc sc',
  l: 12,
  b: "",
  a: "bg 0.5\nsc()\nfc 1\ncircle 100,100,20\nfc 1,0,0\ncircle 40,40,20\nfc 1,1,0\ncircle 40,160,20\nfc 0,1,0\ncircle 160,160,20\nfc 0,0,1\ncircle 160,40,20"
};

ID_ForthHaiku = {
  v: '2017-04-29',
  k: 'fc range if [] _.last rect for parseFloat class',
  l: 45,
  b: "# Lös först exemplen mha länken nedan!\n\nclass ForthHaiku extends Application\n	reset : ->\n		super\n	resolution : (@n,@size) ->\n	nextExample : ->\n	prevExample : ->\napp = new ForthHaiku",
  a: "class ForthHaiku extends Application\n	draw : ->\n		bg 0.5\n		digit = (bool) -> if bool then 1 else 0\n		stack = []\n		dict = {}\n		dict['x'] = => stack.push x / @n\n		dict['y'] = => stack.push y / @n\n		dict['<'] = -> stack.push(digit stack.pop() > stack.pop())\n		dict['>'] = -> stack.push(digit(stack.pop() < stack.pop()))\n		dict['+'] = -> stack.push stack.pop() + stack.pop()\n		dict['-'] = -> stack.push -stack.pop() + stack.pop()\n		dict['*'] = -> stack.push stack.pop() * stack.pop()\n		dict['sq'] = ->\n			temp = stack.pop()\n			stack.push temp * temp\n		dict['%'] = ->\n			a = stack.pop()\n			b = stack.pop()\n			stack.push b % a\n		dict['floor'] = -> stack.push floor stack.pop()\n		dict['and'] = -> #  pga kortslutning\n			a = stack.pop() != 0\n			b = stack.pop() != 0\n			stack.push digit a and b\n		arr = @example.split ' '\n		sc()\n		for x in range @n\n		  for y in range @n\n		    stack = []\n		    for cmd in arr\n		      if dict[cmd] then dict[cmd]()\n		      else stack.push parseFloat cmd\n		    stack.push 0 for i in range 3-stack.length\n		    fc stack[0], stack[1], stack[2]\n		    rect @size * x, @size * y, @size, @size\n	reset : ->\n		super\n		@resolution()\n		@select 0\n	resolution : (@n=10,@size=20) ->\n	nextExample : -> @select @index+1\n	prevExample : -> @select @index-1\n	select : (n) ->\n		examples = '1|1 1|0 1|0.25 0.25 0.25|1 1 1|x|x y|x y >|x 0.5 >|x 0.5 - sq y 0.5 - sq + 0.25 <|x 8 * floor y 8 * floor + 2 %|x 0.5 < y 0.5 <|x 0.5 < y 0.5 < and'\n		examples = examples.split '|'\n		@index = constrain n,0,examples.length-1\n		@example = examples[@index]\n\napp = new ForthHaiku \"a\"",
  c: {
    app: "reset()|resolution 10,20|resolution 20,10|resolution 50,4|resolution 100,2|resolution 200,1|nextExample()|prevExample()"
  },
  e: {
    "ForthHaiku": "http://forthsalon.appspot.com"
  }
};

ID_ForthHaiku3D = {
  v: '2017-05-30',
  k: 'bg sc fc range for if quad line operators class []',
  l: 130,
  b: "# Stack-1 : < > == <= >= != + - * / // % %% and or xor bit & | ^ bit2\n# Stack   : abs not swp rot ~\n# Stack+1 : i j k t dup\n# Stack+2 : bit3\n\n# false      <=> 0\n#  true      <=> 1\n# i b bit    <=> b >> i & 1\n# i j b bit2 <=> i b bit j b bit\n# b bit3     <=> i b bit j b bit k b bit\n# Exempel: t 10 % k ==\n\nclass ForthHaiku3D extends Application\n	reset : (n,dx,dy)->\n		super\n	draw : ->\n	enter : ->\n	tick : ->\n	mousePressed : ->\napp = new ForthHaiku3D",
  a: "class ForthHaiku3D extends Application\n	reset : (n,dx,dy)->\n		super\n		@SHADE = [0.5,0.75,1]\n		@N = n\n		@DX = dx\n		@DY = dy\n		@showGrid = true\n		@clear()\n		@t = 0\n	clear : -> @blocks = Array(@N*@N*@N).fill 0\n	add : (i,j,k) -> @blocks[@N*@N*k+@N*j+i] = 1\n	draw : ->\n		bg 0.5\n		if @showGrid then @grid()\n		sc()\n		@drawBlock index for index in range @N*@N*@N\n	drawBlock : (index) ->\n		f = (i,j,k) => [100+(@N-i)*2*@DY-2*(@N-j)*@DY, 200-(@N-j)*@DY-(@N-i)*@DY - k*2*@DY]\n		q = (a,b,c,d) -> quad a[0],a[1], b[0],b[1], c[0],c[1], d[0],d[1]\n		ix=index\n		i = ix % @N; ix //= @N\n		j = ix % @N; ix //= @N\n		k = ix\n		block = @blocks[index]\n		if not block? or block==0 then return\n		[r,g,b] = [i/(@N-1),j/(@N-1),k/(@N-1)] # borde vara i,j,k\n		p0 = f i,  j,  k # egentligen osynlig\n		p1 = f i+1,j,  k\n		p2 = f i,  j+1,k\n		p3 = f i+1,j+1,k\n		p4 = f i  ,j,  k+1\n		p5 = f i+1,j,  k+1\n		p6 = f i  ,j+1,k+1\n		p7 = f i+1,j+1,k+1\n		[si,sj,sk] = @SHADE\n		fc r*sj,g*sj,b*sj\n		q p2,p6,p7,p3 # left\n		fc r*si,g*si,b*si\n		q p1,p3,p7,p5 # right\n		fc r*sk,g*sk,b*sk\n		q p4,p5,p7,p6 # roof\n	grid : ->\n		sc 0.75\n		[h2,h3,h4] = [200-2*@N*@DY, 200-@N*@DY, 200]\n		[w2,w3,w4] = [100-@N*@DX,   100,        100+@N*@DX]\n		for i in range @N+1\n			line w3+@DX*i, h4-@DY*i, w2+@DX*i, h3-@DY*i\n			line w2+@DX*i, h3+@DY*i, w3+@DX*i, h2+@DY*i\n	mousePressed : ->\n		@showGrid = not @showGrid\n		@enter()\n	tick : ->\n		@t = @t + 1\n		@enter()\n	enter : ->\n		digit = (bool) -> if bool then 1 else 0\n		@clear()\n		s = @readText().trim()\n		if s=='' then s='k t ' + @N + ' % =='\n		arr = s.split ' '\n		@words = arr.length\n		@trace = ''\n		@count = 0\n		for i in range @N\n			for j in range @N\n				for k in range @N\n					stack = []\n					for cmd in arr\n						if cmd == 'dup' then stack.push _.last stack\n						else if cmd == 'swp'\n							n = stack.length - 1\n							[stack[n-1],stack[n]] = [stack[n],stack[n-1]]\n						else if cmd == 'rot' then stack.push stack.shift()\n						else if cmd == 'i'  then stack.push i\n						else if cmd == 'j'  then stack.push j\n						else if cmd == 'k'  then stack.push k\n						else if cmd == 't'  then stack.push @t\n						else if cmd == '<'  then stack.push digit stack.pop() > stack.pop()\n						else if cmd == '>'  then stack.push digit stack.pop() < stack.pop()\n						else if cmd == '==' then stack.push digit stack.pop() == stack.pop()\n						else if cmd == '<=' then stack.push digit stack.pop() >= stack.pop()\n						else if cmd == '>=' then stack.push digit stack.pop() <= stack.pop()\n						else if cmd == '!=' then stack.push digit stack.pop() != stack.pop()\n						else if cmd == '+'  then stack.push stack.pop() + stack.pop()\n						else if cmd == '-'  then stack.push -stack.pop() + stack.pop()\n						else if cmd == '*'  then stack.push stack.pop() * stack.pop()\n						else if cmd == '/'\n							a = stack.pop()\n							stack.push stack.pop() / a\n						else if cmd == '//'\n							a = stack.pop()\n							stack.push stack.pop() // a\n						else if cmd == '%'\n							a = stack.pop()\n							stack.push stack.pop() % a\n						else if cmd == '%%'\n							a = stack.pop()\n							stack.push stack.pop() %% a\n						else if cmd == 'bit' then stack.push stack.pop() >> stack.pop() & 1  # 9 1023 bit => 1\n						else if cmd == 'bit2'\n							bits = stack.pop()\n							stack = stack.concat [bits >> stack.pop() & 1, bits >> stack.pop() & 1]\n							#stack.push (bits >> stack.pop() & 1) * (bits >> stack.pop() & 1)\n						else if cmd == 'bit3'\n							bits = stack.pop()\n							stack = stack.concat [bits >> i & 1, bits >> j & 1, bits >> k & 1]\n						else if cmd == '&' then stack.push stack.pop() & stack.pop()\n						else if cmd == '|' then stack.push stack.pop() | stack.pop()\n						else if cmd == '^' then stack.push stack.pop() ^ stack.pop()\n						else if cmd == '~' then stack.push ~stack.pop()\n						else if cmd == 'and'\n							[a,b] = [stack.pop(),stack.pop()]\n							stack.push digit a!=0 and b!=0\n						else if cmd == 'or'\n							[a,b] = [stack.pop(),stack.pop()]\n							stack.push digit a!=0 or b!=0\n						else if cmd == 'xor'\n							a = digit stack.pop() != 0\n							b = digit stack.pop() != 0\n							stack.push digit a+b == 1\n						else if cmd == 'not' then stack.push digit stack.pop() == 0\n						else if cmd == 'abs' then stack.push abs stack.pop()\n						else stack.push parseFloat cmd\n						if i==@N-1 and j==@N-1 and k==@N-1 then @trace += cmd + ' [' + stack.join(',') + '] '\n					if stack.pop() != 0\n						@count++\n						@add i,j,k\n		@trace = @trace.trim()\napp = new ForthHaiku3D \"a\"\n",
  c: {
    app: "reset 2,50,25|reset 10,10,5|reset 17,6,3|enter()|tick()"
  },
  e: {
    ForthHaiku: "http://forthsalon.appspot.com/haiku-editor",
    Exempel: 'ForthHaiku3D.html',
    "Beck & Jung": 'https://www.google.se/search?q=beck+jung&tbm=isch&imgil=fTDB34quIvQVtM%253A%253BujSokE1Q4La-QM%253Bhttp%25253A%25252F%25252Fonline.auktionsverket.se%25252F1111%25252F109534-beck-jung-computer-ink-plot&source=iu&pf=m&fir=fTDB34quIvQVtM%253A%252CujSokE1Q4La-QM%252C_&usg=__eBA4v2Ol5RdVComTBJqPkozH59s%3D&biw=1920&bih=1108&dpr=1&ved=0ahUKEwiH0qmqzInUAhVmDZoKHTcYD7wQyjcIQw&ei=hQsmWcf7EOaa6AS3sLzgCw#imgrc=fTDB34quIvQVtM:'
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRi5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcRi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsT0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsaUJBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsQ0FBQSxFQUFHLHVKQUpIOzs7QUFtQkQsYUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsaURBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRSwrTEFIRjtFQWNBLENBQUEsRUFBRSx5bERBZEY7RUFrRUEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLHlIQUFOO0dBbkVEO0VBb0VBLENBQUEsRUFDQztJQUFBLFlBQUEsRUFBZSwrQkFBZjtHQXJFRDs7O0FBdUVELGVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG9EQURGO0VBRUEsQ0FBQSxFQUFFLEdBRkY7RUFHQSxDQUFBLEVBQUUsc2RBSEY7RUF5QkEsQ0FBQSxFQUFFLHkrSUF6QkY7RUE4SkEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLHlEQUFOO0dBL0pEO0VBZ0tBLENBQUEsRUFDQztJQUFBLFVBQUEsRUFBYSw0Q0FBYjtJQUNBLE9BQUEsRUFBVSxtQkFEVjtJQUVBLGFBQUEsRUFBZ0IsbWFBRmhCO0dBaktEIiwic291cmNlc0NvbnRlbnQiOlsiSURfRml2ZSA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2JnIGNpcmNsZSBmYyBzYydcblx0bDoxMlxuXHRiOiBcIlwiXG5cdGE6IFwiXCJcIlxuYmcgMC41XG5zYygpXG5mYyAxXG5jaXJjbGUgMTAwLDEwMCwyMFxuZmMgMSwwLDBcbmNpcmNsZSA0MCw0MCwyMFxuZmMgMSwxLDBcbmNpcmNsZSA0MCwxNjAsMjBcbmZjIDAsMSwwXG5jaXJjbGUgMTYwLDE2MCwyMFxuZmMgMCwwLDFcbmNpcmNsZSAxNjAsNDAsMjBcblwiXCJcIlxuXG5JRF9Gb3J0aEhhaWt1ID1cblx0djonMjAxNy0wNC0yOSdcblx0azonZmMgcmFuZ2UgaWYgW10gXy5sYXN0IHJlY3QgZm9yIHBhcnNlRmxvYXQgY2xhc3MnXG5cdGw6NDVcblx0YjpcIlwiXCJcbiMgTMO2cyBmw7Zyc3QgZXhlbXBsZW4gbWhhIGzDpG5rZW4gbmVkYW4hXG5cbmNsYXNzIEZvcnRoSGFpa3UgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0cmVzb2x1dGlvbiA6IChAbixAc2l6ZSkgLT5cblx0bmV4dEV4YW1wbGUgOiAtPlxuXHRwcmV2RXhhbXBsZSA6IC0+XG5hcHAgPSBuZXcgRm9ydGhIYWlrdVxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBGb3J0aEhhaWt1IGV4dGVuZHMgQXBwbGljYXRpb25cblx0ZHJhdyA6IC0+XG5cdFx0YmcgMC41XG5cdFx0ZGlnaXQgPSAoYm9vbCkgLT4gaWYgYm9vbCB0aGVuIDEgZWxzZSAwXG5cdFx0c3RhY2sgPSBbXVxuXHRcdGRpY3QgPSB7fVxuXHRcdGRpY3RbJ3gnXSA9ID0+IHN0YWNrLnB1c2ggeCAvIEBuXG5cdFx0ZGljdFsneSddID0gPT4gc3RhY2sucHVzaCB5IC8gQG5cblx0XHRkaWN0Wyc8J10gPSAtPiBzdGFjay5wdXNoKGRpZ2l0IHN0YWNrLnBvcCgpID4gc3RhY2sucG9wKCkpXG5cdFx0ZGljdFsnPiddID0gLT4gc3RhY2sucHVzaChkaWdpdChzdGFjay5wb3AoKSA8IHN0YWNrLnBvcCgpKSlcblx0XHRkaWN0WycrJ10gPSAtPiBzdGFjay5wdXNoIHN0YWNrLnBvcCgpICsgc3RhY2sucG9wKClcblx0XHRkaWN0WyctJ10gPSAtPiBzdGFjay5wdXNoIC1zdGFjay5wb3AoKSArIHN0YWNrLnBvcCgpXG5cdFx0ZGljdFsnKiddID0gLT4gc3RhY2sucHVzaCBzdGFjay5wb3AoKSAqIHN0YWNrLnBvcCgpXG5cdFx0ZGljdFsnc3EnXSA9IC0+XG5cdFx0XHR0ZW1wID0gc3RhY2sucG9wKClcblx0XHRcdHN0YWNrLnB1c2ggdGVtcCAqIHRlbXBcblx0XHRkaWN0WyclJ10gPSAtPlxuXHRcdFx0YSA9IHN0YWNrLnBvcCgpXG5cdFx0XHRiID0gc3RhY2sucG9wKClcblx0XHRcdHN0YWNrLnB1c2ggYiAlIGFcblx0XHRkaWN0WydmbG9vciddID0gLT4gc3RhY2sucHVzaCBmbG9vciBzdGFjay5wb3AoKVxuXHRcdGRpY3RbJ2FuZCddID0gLT4gIyAgcGdhIGtvcnRzbHV0bmluZ1xuXHRcdFx0YSA9IHN0YWNrLnBvcCgpICE9IDBcblx0XHRcdGIgPSBzdGFjay5wb3AoKSAhPSAwXG5cdFx0XHRzdGFjay5wdXNoIGRpZ2l0IGEgYW5kIGJcblx0XHRhcnIgPSBAZXhhbXBsZS5zcGxpdCAnICdcblx0XHRzYygpXG5cdFx0Zm9yIHggaW4gcmFuZ2UgQG5cblx0XHQgIGZvciB5IGluIHJhbmdlIEBuXG5cdFx0ICAgIHN0YWNrID0gW11cblx0XHQgICAgZm9yIGNtZCBpbiBhcnJcblx0XHQgICAgICBpZiBkaWN0W2NtZF0gdGhlbiBkaWN0W2NtZF0oKVxuXHRcdCAgICAgIGVsc2Ugc3RhY2sucHVzaCBwYXJzZUZsb2F0IGNtZFxuXHRcdCAgICBzdGFjay5wdXNoIDAgZm9yIGkgaW4gcmFuZ2UgMy1zdGFjay5sZW5ndGhcblx0XHQgICAgZmMgc3RhY2tbMF0sIHN0YWNrWzFdLCBzdGFja1syXVxuXHRcdCAgICByZWN0IEBzaXplICogeCwgQHNpemUgKiB5LCBAc2l6ZSwgQHNpemVcblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QHJlc29sdXRpb24oKVxuXHRcdEBzZWxlY3QgMFxuXHRyZXNvbHV0aW9uIDogKEBuPTEwLEBzaXplPTIwKSAtPlxuXHRuZXh0RXhhbXBsZSA6IC0+IEBzZWxlY3QgQGluZGV4KzFcblx0cHJldkV4YW1wbGUgOiAtPiBAc2VsZWN0IEBpbmRleC0xXG5cdHNlbGVjdCA6IChuKSAtPlxuXHRcdGV4YW1wbGVzID0gJzF8MSAxfDAgMXwwLjI1IDAuMjUgMC4yNXwxIDEgMXx4fHggeXx4IHkgPnx4IDAuNSA+fHggMC41IC0gc3EgeSAwLjUgLSBzcSArIDAuMjUgPHx4IDggKiBmbG9vciB5IDggKiBmbG9vciArIDIgJXx4IDAuNSA8IHkgMC41IDx8eCAwLjUgPCB5IDAuNSA8IGFuZCdcblx0XHRleGFtcGxlcyA9IGV4YW1wbGVzLnNwbGl0ICd8J1xuXHRcdEBpbmRleCA9IGNvbnN0cmFpbiBuLDAsZXhhbXBsZXMubGVuZ3RoLTFcblx0XHRAZXhhbXBsZSA9IGV4YW1wbGVzW0BpbmRleF1cblxuYXBwID0gbmV3IEZvcnRoSGFpa3UgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxyZXNvbHV0aW9uIDEwLDIwfHJlc29sdXRpb24gMjAsMTB8cmVzb2x1dGlvbiA1MCw0fHJlc29sdXRpb24gMTAwLDJ8cmVzb2x1dGlvbiAyMDAsMXxuZXh0RXhhbXBsZSgpfHByZXZFeGFtcGxlKClcIlxuXHRlOlxuXHRcdFwiRm9ydGhIYWlrdVwiIDogXCJodHRwOi8vZm9ydGhzYWxvbi5hcHBzcG90LmNvbVwiXG5cbklEX0ZvcnRoSGFpa3UzRCA9XG5cdHY6JzIwMTctMDUtMzAnXG5cdGs6J2JnIHNjIGZjIHJhbmdlIGZvciBpZiBxdWFkIGxpbmUgb3BlcmF0b3JzIGNsYXNzIFtdJ1xuXHRsOjEzMFxuXHRiOlwiXCJcIlxuIyBTdGFjay0xIDogPCA+ID09IDw9ID49ICE9ICsgLSAqIC8gLy8gJSAlJSBhbmQgb3IgeG9yIGJpdCAmIHwgXiBiaXQyXG4jIFN0YWNrICAgOiBhYnMgbm90IHN3cCByb3QgflxuIyBTdGFjaysxIDogaSBqIGsgdCBkdXBcbiMgU3RhY2srMiA6IGJpdDNcblxuIyBmYWxzZSAgICAgIDw9PiAwXG4jICB0cnVlICAgICAgPD0+IDFcbiMgaSBiIGJpdCAgICA8PT4gYiA+PiBpICYgMVxuIyBpIGogYiBiaXQyIDw9PiBpIGIgYml0IGogYiBiaXRcbiMgYiBiaXQzICAgICA8PT4gaSBiIGJpdCBqIGIgYml0IGsgYiBiaXRcbiMgRXhlbXBlbDogdCAxMCAlIGsgPT1cblxuY2xhc3MgRm9ydGhIYWlrdTNEIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAobixkeCxkeSktPlxuXHRcdHN1cGVyXG5cdGRyYXcgOiAtPlxuXHRlbnRlciA6IC0+XG5cdHRpY2sgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAtPlxuYXBwID0gbmV3IEZvcnRoSGFpa3UzRFxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBGb3J0aEhhaWt1M0QgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IChuLGR4LGR5KS0+XG5cdFx0c3VwZXJcblx0XHRAU0hBREUgPSBbMC41LDAuNzUsMV1cblx0XHRATiA9IG5cblx0XHRARFggPSBkeFxuXHRcdEBEWSA9IGR5XG5cdFx0QHNob3dHcmlkID0gdHJ1ZVxuXHRcdEBjbGVhcigpXG5cdFx0QHQgPSAwXG5cdGNsZWFyIDogLT4gQGJsb2NrcyA9IEFycmF5KEBOKkBOKkBOKS5maWxsIDBcblx0YWRkIDogKGksaixrKSAtPiBAYmxvY2tzW0BOKkBOKmsrQE4qaitpXSA9IDFcblx0ZHJhdyA6IC0+XG5cdFx0YmcgMC41XG5cdFx0aWYgQHNob3dHcmlkIHRoZW4gQGdyaWQoKVxuXHRcdHNjKClcblx0XHRAZHJhd0Jsb2NrIGluZGV4IGZvciBpbmRleCBpbiByYW5nZSBATipATipATlxuXHRkcmF3QmxvY2sgOiAoaW5kZXgpIC0+XG5cdFx0ZiA9IChpLGosaykgPT4gWzEwMCsoQE4taSkqMipARFktMiooQE4taikqQERZLCAyMDAtKEBOLWopKkBEWS0oQE4taSkqQERZIC0gayoyKkBEWV1cblx0XHRxID0gKGEsYixjLGQpIC0+IHF1YWQgYVswXSxhWzFdLCBiWzBdLGJbMV0sIGNbMF0sY1sxXSwgZFswXSxkWzFdXG5cdFx0aXg9aW5kZXhcblx0XHRpID0gaXggJSBATjsgaXggLy89IEBOXG5cdFx0aiA9IGl4ICUgQE47IGl4IC8vPSBATlxuXHRcdGsgPSBpeFxuXHRcdGJsb2NrID0gQGJsb2Nrc1tpbmRleF1cblx0XHRpZiBub3QgYmxvY2s/IG9yIGJsb2NrPT0wIHRoZW4gcmV0dXJuXG5cdFx0W3IsZyxiXSA9IFtpLyhATi0xKSxqLyhATi0xKSxrLyhATi0xKV0gIyBib3JkZSB2YXJhIGksaixrXG5cdFx0cDAgPSBmIGksICBqLCAgayAjIGVnZW50bGlnZW4gb3N5bmxpZ1xuXHRcdHAxID0gZiBpKzEsaiwgIGtcblx0XHRwMiA9IGYgaSwgIGorMSxrXG5cdFx0cDMgPSBmIGkrMSxqKzEsa1xuXHRcdHA0ID0gZiBpICAsaiwgIGsrMVxuXHRcdHA1ID0gZiBpKzEsaiwgIGsrMVxuXHRcdHA2ID0gZiBpICAsaisxLGsrMVxuXHRcdHA3ID0gZiBpKzEsaisxLGsrMVxuXHRcdFtzaSxzaixza10gPSBAU0hBREVcblx0XHRmYyByKnNqLGcqc2osYipzalxuXHRcdHEgcDIscDYscDcscDMgIyBsZWZ0XG5cdFx0ZmMgcipzaSxnKnNpLGIqc2lcblx0XHRxIHAxLHAzLHA3LHA1ICMgcmlnaHRcblx0XHRmYyByKnNrLGcqc2ssYipza1xuXHRcdHEgcDQscDUscDcscDYgIyByb29mXG5cdGdyaWQgOiAtPlxuXHRcdHNjIDAuNzVcblx0XHRbaDIsaDMsaDRdID0gWzIwMC0yKkBOKkBEWSwgMjAwLUBOKkBEWSwgMjAwXVxuXHRcdFt3Mix3Myx3NF0gPSBbMTAwLUBOKkBEWCwgICAxMDAsICAgICAgICAxMDArQE4qQERYXVxuXHRcdGZvciBpIGluIHJhbmdlIEBOKzFcblx0XHRcdGxpbmUgdzMrQERYKmksIGg0LUBEWSppLCB3MitARFgqaSwgaDMtQERZKmlcblx0XHRcdGxpbmUgdzIrQERYKmksIGgzK0BEWSppLCB3MytARFgqaSwgaDIrQERZKmlcblx0bW91c2VQcmVzc2VkIDogLT5cblx0XHRAc2hvd0dyaWQgPSBub3QgQHNob3dHcmlkXG5cdFx0QGVudGVyKClcblx0dGljayA6IC0+XG5cdFx0QHQgPSBAdCArIDFcblx0XHRAZW50ZXIoKVxuXHRlbnRlciA6IC0+XG5cdFx0ZGlnaXQgPSAoYm9vbCkgLT4gaWYgYm9vbCB0aGVuIDEgZWxzZSAwXG5cdFx0QGNsZWFyKClcblx0XHRzID0gQHJlYWRUZXh0KCkudHJpbSgpXG5cdFx0aWYgcz09JycgdGhlbiBzPSdrIHQgJyArIEBOICsgJyAlID09J1xuXHRcdGFyciA9IHMuc3BsaXQgJyAnXG5cdFx0QHdvcmRzID0gYXJyLmxlbmd0aFxuXHRcdEB0cmFjZSA9ICcnXG5cdFx0QGNvdW50ID0gMFxuXHRcdGZvciBpIGluIHJhbmdlIEBOXG5cdFx0XHRmb3IgaiBpbiByYW5nZSBATlxuXHRcdFx0XHRmb3IgayBpbiByYW5nZSBATlxuXHRcdFx0XHRcdHN0YWNrID0gW11cblx0XHRcdFx0XHRmb3IgY21kIGluIGFyclxuXHRcdFx0XHRcdFx0aWYgY21kID09ICdkdXAnIHRoZW4gc3RhY2sucHVzaCBfLmxhc3Qgc3RhY2tcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdzd3AnXG5cdFx0XHRcdFx0XHRcdG4gPSBzdGFjay5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdFtzdGFja1tuLTFdLHN0YWNrW25dXSA9IFtzdGFja1tuXSxzdGFja1tuLTFdXVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ3JvdCcgdGhlbiBzdGFjay5wdXNoIHN0YWNrLnNoaWZ0KClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdpJyAgdGhlbiBzdGFjay5wdXNoIGlcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdqJyAgdGhlbiBzdGFjay5wdXNoIGpcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdrJyAgdGhlbiBzdGFjay5wdXNoIGtcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICd0JyAgdGhlbiBzdGFjay5wdXNoIEB0XG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnPCcgIHRoZW4gc3RhY2sucHVzaCBkaWdpdCBzdGFjay5wb3AoKSA+IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnPicgIHRoZW4gc3RhY2sucHVzaCBkaWdpdCBzdGFjay5wb3AoKSA8IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnPT0nIHRoZW4gc3RhY2sucHVzaCBkaWdpdCBzdGFjay5wb3AoKSA9PSBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJzw9JyB0aGVuIHN0YWNrLnB1c2ggZGlnaXQgc3RhY2sucG9wKCkgPj0gc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICc+PScgdGhlbiBzdGFjay5wdXNoIGRpZ2l0IHN0YWNrLnBvcCgpIDw9IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnIT0nIHRoZW4gc3RhY2sucHVzaCBkaWdpdCBzdGFjay5wb3AoKSAhPSBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJysnICB0aGVuIHN0YWNrLnB1c2ggc3RhY2sucG9wKCkgKyBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJy0nICB0aGVuIHN0YWNrLnB1c2ggLXN0YWNrLnBvcCgpICsgc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICcqJyAgdGhlbiBzdGFjay5wdXNoIHN0YWNrLnBvcCgpICogc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICcvJ1xuXHRcdFx0XHRcdFx0XHRhID0gc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdFx0c3RhY2sucHVzaCBzdGFjay5wb3AoKSAvIGFcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICcvLydcblx0XHRcdFx0XHRcdFx0YSA9IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRcdHN0YWNrLnB1c2ggc3RhY2sucG9wKCkgLy8gYVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJyUnXG5cdFx0XHRcdFx0XHRcdGEgPSBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0XHRzdGFjay5wdXNoIHN0YWNrLnBvcCgpICUgYVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJyUlJ1xuXHRcdFx0XHRcdFx0XHRhID0gc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdFx0c3RhY2sucHVzaCBzdGFjay5wb3AoKSAlJSBhXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnYml0JyB0aGVuIHN0YWNrLnB1c2ggc3RhY2sucG9wKCkgPj4gc3RhY2sucG9wKCkgJiAxICAjIDkgMTAyMyBiaXQgPT4gMVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ2JpdDInXG5cdFx0XHRcdFx0XHRcdGJpdHMgPSBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0XHRzdGFjayA9IHN0YWNrLmNvbmNhdCBbYml0cyA+PiBzdGFjay5wb3AoKSAmIDEsIGJpdHMgPj4gc3RhY2sucG9wKCkgJiAxXVxuXHRcdFx0XHRcdFx0XHQjc3RhY2sucHVzaCAoYml0cyA+PiBzdGFjay5wb3AoKSAmIDEpICogKGJpdHMgPj4gc3RhY2sucG9wKCkgJiAxKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ2JpdDMnXG5cdFx0XHRcdFx0XHRcdGJpdHMgPSBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0XHRzdGFjayA9IHN0YWNrLmNvbmNhdCBbYml0cyA+PiBpICYgMSwgYml0cyA+PiBqICYgMSwgYml0cyA+PiBrICYgMV1cblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICcmJyB0aGVuIHN0YWNrLnB1c2ggc3RhY2sucG9wKCkgJiBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ3wnIHRoZW4gc3RhY2sucHVzaCBzdGFjay5wb3AoKSB8IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnXicgdGhlbiBzdGFjay5wdXNoIHN0YWNrLnBvcCgpIF4gc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICd+JyB0aGVuIHN0YWNrLnB1c2ggfnN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnYW5kJ1xuXHRcdFx0XHRcdFx0XHRbYSxiXSA9IFtzdGFjay5wb3AoKSxzdGFjay5wb3AoKV1cblx0XHRcdFx0XHRcdFx0c3RhY2sucHVzaCBkaWdpdCBhIT0wIGFuZCBiIT0wXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnb3InXG5cdFx0XHRcdFx0XHRcdFthLGJdID0gW3N0YWNrLnBvcCgpLHN0YWNrLnBvcCgpXVxuXHRcdFx0XHRcdFx0XHRzdGFjay5wdXNoIGRpZ2l0IGEhPTAgb3IgYiE9MFxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ3hvcidcblx0XHRcdFx0XHRcdFx0YSA9IGRpZ2l0IHN0YWNrLnBvcCgpICE9IDBcblx0XHRcdFx0XHRcdFx0YiA9IGRpZ2l0IHN0YWNrLnBvcCgpICE9IDBcblx0XHRcdFx0XHRcdFx0c3RhY2sucHVzaCBkaWdpdCBhK2IgPT0gMVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ25vdCcgdGhlbiBzdGFjay5wdXNoIGRpZ2l0IHN0YWNrLnBvcCgpID09IDBcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdhYnMnIHRoZW4gc3RhY2sucHVzaCBhYnMgc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2Ugc3RhY2sucHVzaCBwYXJzZUZsb2F0IGNtZFxuXHRcdFx0XHRcdFx0aWYgaT09QE4tMSBhbmQgaj09QE4tMSBhbmQgaz09QE4tMSB0aGVuIEB0cmFjZSArPSBjbWQgKyAnIFsnICsgc3RhY2suam9pbignLCcpICsgJ10gJ1xuXHRcdFx0XHRcdGlmIHN0YWNrLnBvcCgpICE9IDBcblx0XHRcdFx0XHRcdEBjb3VudCsrXG5cdFx0XHRcdFx0XHRAYWRkIGksaixrXG5cdFx0QHRyYWNlID0gQHRyYWNlLnRyaW0oKVxuYXBwID0gbmV3IEZvcnRoSGFpa3UzRCBcImFcIlxuXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0IDIsNTAsMjV8cmVzZXQgMTAsMTAsNXxyZXNldCAxNyw2LDN8ZW50ZXIoKXx0aWNrKClcIlxuXHRlOlxuXHRcdEZvcnRoSGFpa3UgOiBcImh0dHA6Ly9mb3J0aHNhbG9uLmFwcHNwb3QuY29tL2hhaWt1LWVkaXRvclwiXG5cdFx0RXhlbXBlbCA6ICdGb3J0aEhhaWt1M0QuaHRtbCdcblx0XHRcIkJlY2sgJiBKdW5nXCIgOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNlL3NlYXJjaD9xPWJlY2sranVuZyZ0Ym09aXNjaCZpbWdpbD1mVERCMzRxdUl2UVZ0TSUyNTNBJTI1M0J1alNva0UxUTRMYS1RTSUyNTNCaHR0cCUyNTI1M0ElMjUyNTJGJTI1MjUyRm9ubGluZS5hdWt0aW9uc3ZlcmtldC5zZSUyNTI1MkYxMTExJTI1MjUyRjEwOTUzNC1iZWNrLWp1bmctY29tcHV0ZXItaW5rLXBsb3Qmc291cmNlPWl1JnBmPW0mZmlyPWZUREIzNHF1SXZRVnRNJTI1M0ElMjUyQ3VqU29rRTFRNExhLVFNJTI1MkNfJnVzZz1fX2VCQTR2Mk9sNVJkVkNvbVRCSnFQa296SDU5cyUzRCZiaXc9MTkyMCZiaWg9MTEwOCZkcHI9MSZ2ZWQ9MGFoVUtFd2lIMHFtcXpJblVBaFZtRFpvS0hUY1lEN3dReWpjSVF3JmVpPWhRc21XY2Y3RU9hYTZBUzNzTHpnQ3cjaW1ncmM9ZlREQjM0cXVJdlFWdE06J1xuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\F.coffee