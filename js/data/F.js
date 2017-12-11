// Generated by CoffeeScript 2.0.3
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
  l: 138,
  b: "# Stack-1 : < > == <= >= != + - * / // % %% and or xor & | ^ bit\n# Stack   : abs not swp rot ~ biti bitj bitk\n# Stack+1 : i j k t dup bitij bitik bitjk\n# Stack+2 : bitijk\n\n# false      <=> 0\n#  true      <=> 1\n# i b bit    <=> b >> i & 1\n# b biti     <=> b >> i & 1\n# b bitij    <=> i b bit j b bit\n# b bitijk   <=> i b bit j b bit k b bit\n# Exempel: t 10 % k ==\n\nclass ForthHaiku3D extends Application\n	reset : (n,dx,dy)->\n		super\n	draw : ->\n	enter : ->\n	tick : ->\n	mousePressed : ->\napp = new ForthHaiku3D",
  a: "class ForthHaiku3D extends Application\n	reset : (n,dx,dy)->\n		super\n		@SHADE = [0.5,0.75,1]\n		@N = n\n		@DX = dx\n		@DY = dy\n		@showGrid = true\n		@clear()\n		@t = 0\n	clear : -> @blocks = Array(@N*@N*@N).fill 0\n	add : (i,j,k) -> @blocks[@N*@N*k+@N*j+i] = 1\n	draw : ->\n		bg 0.5\n		if @showGrid then @grid()\n		sc()\n		@drawBlock index for index in range @N*@N*@N\n	drawBlock : (index) ->\n		f = (i,j,k) => [100+(@N-i)*2*@DY-2*(@N-j)*@DY, 200-(@N-j)*@DY-(@N-i)*@DY - k*2*@DY]\n		q = (a,b,c,d) -> quad a[0],a[1], b[0],b[1], c[0],c[1], d[0],d[1]\n		ix=index\n		i = ix % @N; ix //= @N\n		j = ix % @N; ix //= @N\n		k = ix\n		block = @blocks[index]\n		if not block? or block==0 then return\n		[r,g,b] = [i/(@N-1),j/(@N-1),k/(@N-1)] # borde vara i,j,k\n		p0 = f i,  j,  k # egentligen osynlig\n		p1 = f i+1,j,  k\n		p2 = f i,  j+1,k\n		p3 = f i+1,j+1,k\n		p4 = f i  ,j,  k+1\n		p5 = f i+1,j,  k+1\n		p6 = f i  ,j+1,k+1\n		p7 = f i+1,j+1,k+1\n		[si,sj,sk] = @SHADE\n		fc r*sj,g*sj,b*sj\n		q p2,p6,p7,p3 # left\n		fc r*si,g*si,b*si\n		q p1,p3,p7,p5 # right\n		fc r*sk,g*sk,b*sk\n		q p4,p5,p7,p6 # roof\n	grid : ->\n		sc 0.75\n		[h2,h3,h4] = [200-2*@N*@DY, 200-@N*@DY, 200]\n		[w2,w3,w4] = [100-@N*@DX,   100,        100+@N*@DX]\n		for i in range @N+1\n			line w3+@DX*i, h4-@DY*i, w2+@DX*i, h3-@DY*i\n			line w2+@DX*i, h3+@DY*i, w3+@DX*i, h2+@DY*i\n	mousePressed : ->\n		@showGrid = not @showGrid\n		@enter()\n	tick : ->\n		@t = @t + 1\n		@enter()\n	enter : ->\n		digit = (bool) -> if bool then 1 else 0\n		@clear()\n		s = @readText().trim()\n		if s=='' then s='k t ' + @N + ' % =='\n		arr = s.split ' '\n		@words = arr.length\n		@trace = ''\n		@count = 0\n		for i in range @N\n			for j in range @N\n				for k in range @N\n					stack = []\n					for cmd in arr\n						if cmd == 'dup' then stack.push _.last stack\n						else if cmd == 'swp'\n							n = stack.length - 1\n							[stack[n-1],stack[n]] = [stack[n],stack[n-1]]\n						else if cmd == 'rot' then stack.push stack.shift()\n						else if cmd == 'i'  then stack.push i\n						else if cmd == 'j'  then stack.push j\n						else if cmd == 'k'  then stack.push k\n						else if cmd == 't'  then stack.push @t\n						else if cmd == '<'  then stack.push digit stack.pop() > stack.pop()\n						else if cmd == '>'  then stack.push digit stack.pop() < stack.pop()\n						else if cmd == '==' then stack.push digit stack.pop() == stack.pop()\n						else if cmd == '<=' then stack.push digit stack.pop() >= stack.pop()\n						else if cmd == '>=' then stack.push digit stack.pop() <= stack.pop()\n						else if cmd == '!=' then stack.push digit stack.pop() != stack.pop()\n						else if cmd == '+'  then stack.push stack.pop() + stack.pop()\n						else if cmd == '-'  then stack.push -stack.pop() + stack.pop()\n						else if cmd == '*'  then stack.push stack.pop() * stack.pop()\n						else if cmd == '/'\n							a = stack.pop()\n							stack.push stack.pop() / a\n						else if cmd == '//'\n							a = stack.pop()\n							stack.push stack.pop() // a\n						else if cmd == '%'\n							a = stack.pop()\n							stack.push stack.pop() % a\n						else if cmd == '%%'\n							a = stack.pop()\n							stack.push stack.pop() %% a\n						else if cmd == 'bit' then stack.push stack.pop() >> stack.pop() & 1\n						else if cmd == 'biti' then stack.push stack.pop() >> i & 1\n						else if cmd == 'bitj' then stack.push stack.pop() >> j & 1\n						else if cmd == 'bitk' then stack.push stack.pop() >> k & 1\n						else if cmd == 'bitij'\n							bits = stack.pop()\n							stack = stack.concat [bits >> i & 1, bits >> j & 1]\n						else if cmd == 'bitik'\n							bits = stack.pop()\n							stack = stack.concat [bits >> i & 1, bits >> k & 1]\n						else if cmd == 'bitjk'\n							bits = stack.pop()\n							stack = stack.concat [bits >> j & 1, bits >> k & 1]\n						else if cmd == 'bitijk'\n							bits = stack.pop()\n							stack = stack.concat [bits >> i & 1, bits >> j & 1, bits >> k & 1]\n						else if cmd == '&' then stack.push stack.pop() & stack.pop()\n						else if cmd == '|' then stack.push stack.pop() | stack.pop()\n						else if cmd == '^' then stack.push stack.pop() ^ stack.pop()\n						else if cmd == '~' then stack.push ~stack.pop()\n						else if cmd == 'and'\n							[a,b] = [stack.pop(),stack.pop()]\n							stack.push digit a!=0 and b!=0\n						else if cmd == 'or'\n							[a,b] = [stack.pop(),stack.pop()]\n							stack.push digit a!=0 or b!=0\n						else if cmd == 'xor'\n							a = digit stack.pop() != 0\n							b = digit stack.pop() != 0\n							stack.push digit a+b == 1\n						else if cmd == 'not' then stack.push digit stack.pop() == 0\n						else if cmd == 'abs' then stack.push abs stack.pop()\n						else stack.push parseFloat cmd\n						if i==@N-1 and j==@N-1 and k==@N-1 then @trace += cmd + ' [' + stack.join(',') + '] '\n					if stack.pop() != 0\n						@count++\n						@add i,j,k\n		@trace = @trace.trim()\napp = new ForthHaiku3D \"a\"\n",
  c: {
    app: "reset 2,50,25|reset 10,10,5|reset 17,6,3|enter()|tick()"
  },
  e: {
    ForthHaiku: "http://forthsalon.appspot.com/haiku-editor",
    Exempel: 'ForthHaiku3D.html',
    "Beck & Jung": 'https://www.google.se/search?q=beck+jung&tbm=isch&imgil=fTDB34quIvQVtM%253A%253BujSokE1Q4La-QM%253Bhttp%25253A%25252F%25252Fonline.auktionsverket.se%25252F1111%25252F109534-beck-jung-computer-ink-plot&source=iu&pf=m&fir=fTDB34quIvQVtM%253A%252CujSokE1Q4La-QM%252C_&usg=__eBA4v2Ol5RdVComTBJqPkozH59s%3D&biw=1920&bih=1108&dpr=1&ved=0ahUKEwiH0qmqzInUAhVmDZoKHTcYD7wQyjcIQw&ei=hQsmWcf7EOaa6AS3sLzgCw#imgrc=fTDB34quIvQVtM:'
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRi5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcRi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsT0FBQSxFQUFBLGFBQUEsRUFBQTs7QUFBQSxPQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxpQkFERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxDQUFBLEVBQUc7QUFKSDs7QUFtQkQsYUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsaURBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRSwrTEFIRjtFQWNBLENBQUEsRUFBRSx5bERBZEY7RUFrRUEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNO0VBQU4sQ0FuRUQ7RUFvRUEsQ0FBQSxFQUNDO0lBQUEsWUFBQSxFQUFlO0VBQWY7QUFyRUQ7O0FBdUVELGVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG9EQURGO0VBRUEsQ0FBQSxFQUFFLEdBRkY7RUFHQSxDQUFBLEVBQUUsaWhCQUhGO0VBMEJBLENBQUEsRUFBRSwyeUpBMUJGO0VBdUtBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTTtFQUFOLENBeEtEO0VBeUtBLENBQUEsRUFDQztJQUFBLFVBQUEsRUFBYSw0Q0FBYjtJQUNBLE9BQUEsRUFBVSxtQkFEVjtJQUVBLGFBQUEsRUFBZ0I7RUFGaEI7QUExS0QiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9GaXZlID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgY2lyY2xlIGZjIHNjJ1xuXHRsOjEyXG5cdGI6IFwiXCJcblx0YTogXCJcIlwiXG5iZyAwLjVcbnNjKClcbmZjIDFcbmNpcmNsZSAxMDAsMTAwLDIwXG5mYyAxLDAsMFxuY2lyY2xlIDQwLDQwLDIwXG5mYyAxLDEsMFxuY2lyY2xlIDQwLDE2MCwyMFxuZmMgMCwxLDBcbmNpcmNsZSAxNjAsMTYwLDIwXG5mYyAwLDAsMVxuY2lyY2xlIDE2MCw0MCwyMFxuXCJcIlwiXG5cbklEX0ZvcnRoSGFpa3UgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidmYyByYW5nZSBpZiBbXSBfLmxhc3QgcmVjdCBmb3IgcGFyc2VGbG9hdCBjbGFzcydcblx0bDo0NVxuXHRiOlwiXCJcIlxuIyBMw7ZzIGbDtnJzdCBleGVtcGxlbiBtaGEgbMOkbmtlbiBuZWRhbiFcblxuY2xhc3MgRm9ydGhIYWlrdSBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRyZXNvbHV0aW9uIDogKEBuLEBzaXplKSAtPlxuXHRuZXh0RXhhbXBsZSA6IC0+XG5cdHByZXZFeGFtcGxlIDogLT5cbmFwcCA9IG5ldyBGb3J0aEhhaWt1XG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIEZvcnRoSGFpa3UgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRkcmF3IDogLT5cblx0XHRiZyAwLjVcblx0XHRkaWdpdCA9IChib29sKSAtPiBpZiBib29sIHRoZW4gMSBlbHNlIDBcblx0XHRzdGFjayA9IFtdXG5cdFx0ZGljdCA9IHt9XG5cdFx0ZGljdFsneCddID0gPT4gc3RhY2sucHVzaCB4IC8gQG5cblx0XHRkaWN0Wyd5J10gPSA9PiBzdGFjay5wdXNoIHkgLyBAblxuXHRcdGRpY3RbJzwnXSA9IC0+IHN0YWNrLnB1c2goZGlnaXQgc3RhY2sucG9wKCkgPiBzdGFjay5wb3AoKSlcblx0XHRkaWN0Wyc+J10gPSAtPiBzdGFjay5wdXNoKGRpZ2l0KHN0YWNrLnBvcCgpIDwgc3RhY2sucG9wKCkpKVxuXHRcdGRpY3RbJysnXSA9IC0+IHN0YWNrLnB1c2ggc3RhY2sucG9wKCkgKyBzdGFjay5wb3AoKVxuXHRcdGRpY3RbJy0nXSA9IC0+IHN0YWNrLnB1c2ggLXN0YWNrLnBvcCgpICsgc3RhY2sucG9wKClcblx0XHRkaWN0WycqJ10gPSAtPiBzdGFjay5wdXNoIHN0YWNrLnBvcCgpICogc3RhY2sucG9wKClcblx0XHRkaWN0WydzcSddID0gLT5cblx0XHRcdHRlbXAgPSBzdGFjay5wb3AoKVxuXHRcdFx0c3RhY2sucHVzaCB0ZW1wICogdGVtcFxuXHRcdGRpY3RbJyUnXSA9IC0+XG5cdFx0XHRhID0gc3RhY2sucG9wKClcblx0XHRcdGIgPSBzdGFjay5wb3AoKVxuXHRcdFx0c3RhY2sucHVzaCBiICUgYVxuXHRcdGRpY3RbJ2Zsb29yJ10gPSAtPiBzdGFjay5wdXNoIGZsb29yIHN0YWNrLnBvcCgpXG5cdFx0ZGljdFsnYW5kJ10gPSAtPiAjICBwZ2Ega29ydHNsdXRuaW5nXG5cdFx0XHRhID0gc3RhY2sucG9wKCkgIT0gMFxuXHRcdFx0YiA9IHN0YWNrLnBvcCgpICE9IDBcblx0XHRcdHN0YWNrLnB1c2ggZGlnaXQgYSBhbmQgYlxuXHRcdGFyciA9IEBleGFtcGxlLnNwbGl0ICcgJ1xuXHRcdHNjKClcblx0XHRmb3IgeCBpbiByYW5nZSBAblxuXHRcdCAgZm9yIHkgaW4gcmFuZ2UgQG5cblx0XHQgICAgc3RhY2sgPSBbXVxuXHRcdCAgICBmb3IgY21kIGluIGFyclxuXHRcdCAgICAgIGlmIGRpY3RbY21kXSB0aGVuIGRpY3RbY21kXSgpXG5cdFx0ICAgICAgZWxzZSBzdGFjay5wdXNoIHBhcnNlRmxvYXQgY21kXG5cdFx0ICAgIHN0YWNrLnB1c2ggMCBmb3IgaSBpbiByYW5nZSAzLXN0YWNrLmxlbmd0aFxuXHRcdCAgICBmYyBzdGFja1swXSwgc3RhY2tbMV0sIHN0YWNrWzJdXG5cdFx0ICAgIHJlY3QgQHNpemUgKiB4LCBAc2l6ZSAqIHksIEBzaXplLCBAc2l6ZVxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAcmVzb2x1dGlvbigpXG5cdFx0QHNlbGVjdCAwXG5cdHJlc29sdXRpb24gOiAoQG49MTAsQHNpemU9MjApIC0+XG5cdG5leHRFeGFtcGxlIDogLT4gQHNlbGVjdCBAaW5kZXgrMVxuXHRwcmV2RXhhbXBsZSA6IC0+IEBzZWxlY3QgQGluZGV4LTFcblx0c2VsZWN0IDogKG4pIC0+XG5cdFx0ZXhhbXBsZXMgPSAnMXwxIDF8MCAxfDAuMjUgMC4yNSAwLjI1fDEgMSAxfHh8eCB5fHggeSA+fHggMC41ID58eCAwLjUgLSBzcSB5IDAuNSAtIHNxICsgMC4yNSA8fHggOCAqIGZsb29yIHkgOCAqIGZsb29yICsgMiAlfHggMC41IDwgeSAwLjUgPHx4IDAuNSA8IHkgMC41IDwgYW5kJ1xuXHRcdGV4YW1wbGVzID0gZXhhbXBsZXMuc3BsaXQgJ3wnXG5cdFx0QGluZGV4ID0gY29uc3RyYWluIG4sMCxleGFtcGxlcy5sZW5ndGgtMVxuXHRcdEBleGFtcGxlID0gZXhhbXBsZXNbQGluZGV4XVxuXG5hcHAgPSBuZXcgRm9ydGhIYWlrdSBcImFcIlxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpfHJlc29sdXRpb24gMTAsMjB8cmVzb2x1dGlvbiAyMCwxMHxyZXNvbHV0aW9uIDUwLDR8cmVzb2x1dGlvbiAxMDAsMnxyZXNvbHV0aW9uIDIwMCwxfG5leHRFeGFtcGxlKCl8cHJldkV4YW1wbGUoKVwiXG5cdGU6XG5cdFx0XCJGb3J0aEhhaWt1XCIgOiBcImh0dHA6Ly9mb3J0aHNhbG9uLmFwcHNwb3QuY29tXCJcblxuSURfRm9ydGhIYWlrdTNEID1cblx0djonMjAxNy0wNS0zMCdcblx0azonYmcgc2MgZmMgcmFuZ2UgZm9yIGlmIHF1YWQgbGluZSBvcGVyYXRvcnMgY2xhc3MgW10nXG5cdGw6MTM4XG5cdGI6XCJcIlwiXG4jIFN0YWNrLTEgOiA8ID4gPT0gPD0gPj0gIT0gKyAtICogLyAvLyAlICUlIGFuZCBvciB4b3IgJiB8IF4gYml0XG4jIFN0YWNrICAgOiBhYnMgbm90IHN3cCByb3QgfiBiaXRpIGJpdGogYml0a1xuIyBTdGFjaysxIDogaSBqIGsgdCBkdXAgYml0aWogYml0aWsgYml0amtcbiMgU3RhY2srMiA6IGJpdGlqa1xuXG4jIGZhbHNlICAgICAgPD0+IDBcbiMgIHRydWUgICAgICA8PT4gMVxuIyBpIGIgYml0ICAgIDw9PiBiID4+IGkgJiAxXG4jIGIgYml0aSAgICAgPD0+IGIgPj4gaSAmIDFcbiMgYiBiaXRpaiAgICA8PT4gaSBiIGJpdCBqIGIgYml0XG4jIGIgYml0aWprICAgPD0+IGkgYiBiaXQgaiBiIGJpdCBrIGIgYml0XG4jIEV4ZW1wZWw6IHQgMTAgJSBrID09XG5cbmNsYXNzIEZvcnRoSGFpa3UzRCBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogKG4sZHgsZHkpLT5cblx0XHRzdXBlclxuXHRkcmF3IDogLT5cblx0ZW50ZXIgOiAtPlxuXHR0aWNrIDogLT5cblx0bW91c2VQcmVzc2VkIDogLT5cbmFwcCA9IG5ldyBGb3J0aEhhaWt1M0RcblwiXCJcIlxuXHRhOlwiXCJcIlxuY2xhc3MgRm9ydGhIYWlrdTNEIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAobixkeCxkeSktPlxuXHRcdHN1cGVyXG5cdFx0QFNIQURFID0gWzAuNSwwLjc1LDFdXG5cdFx0QE4gPSBuXG5cdFx0QERYID0gZHhcblx0XHRARFkgPSBkeVxuXHRcdEBzaG93R3JpZCA9IHRydWVcblx0XHRAY2xlYXIoKVxuXHRcdEB0ID0gMFxuXHRjbGVhciA6IC0+IEBibG9ja3MgPSBBcnJheShATipATipATikuZmlsbCAwXG5cdGFkZCA6IChpLGosaykgLT4gQGJsb2Nrc1tATipATiprK0BOKmoraV0gPSAxXG5cdGRyYXcgOiAtPlxuXHRcdGJnIDAuNVxuXHRcdGlmIEBzaG93R3JpZCB0aGVuIEBncmlkKClcblx0XHRzYygpXG5cdFx0QGRyYXdCbG9jayBpbmRleCBmb3IgaW5kZXggaW4gcmFuZ2UgQE4qQE4qQE5cblx0ZHJhd0Jsb2NrIDogKGluZGV4KSAtPlxuXHRcdGYgPSAoaSxqLGspID0+IFsxMDArKEBOLWkpKjIqQERZLTIqKEBOLWopKkBEWSwgMjAwLShATi1qKSpARFktKEBOLWkpKkBEWSAtIGsqMipARFldXG5cdFx0cSA9IChhLGIsYyxkKSAtPiBxdWFkIGFbMF0sYVsxXSwgYlswXSxiWzFdLCBjWzBdLGNbMV0sIGRbMF0sZFsxXVxuXHRcdGl4PWluZGV4XG5cdFx0aSA9IGl4ICUgQE47IGl4IC8vPSBATlxuXHRcdGogPSBpeCAlIEBOOyBpeCAvLz0gQE5cblx0XHRrID0gaXhcblx0XHRibG9jayA9IEBibG9ja3NbaW5kZXhdXG5cdFx0aWYgbm90IGJsb2NrPyBvciBibG9jaz09MCB0aGVuIHJldHVyblxuXHRcdFtyLGcsYl0gPSBbaS8oQE4tMSksai8oQE4tMSksay8oQE4tMSldICMgYm9yZGUgdmFyYSBpLGosa1xuXHRcdHAwID0gZiBpLCAgaiwgIGsgIyBlZ2VudGxpZ2VuIG9zeW5saWdcblx0XHRwMSA9IGYgaSsxLGosICBrXG5cdFx0cDIgPSBmIGksICBqKzEsa1xuXHRcdHAzID0gZiBpKzEsaisxLGtcblx0XHRwNCA9IGYgaSAgLGosICBrKzFcblx0XHRwNSA9IGYgaSsxLGosICBrKzFcblx0XHRwNiA9IGYgaSAgLGorMSxrKzFcblx0XHRwNyA9IGYgaSsxLGorMSxrKzFcblx0XHRbc2ksc2osc2tdID0gQFNIQURFXG5cdFx0ZmMgcipzaixnKnNqLGIqc2pcblx0XHRxIHAyLHA2LHA3LHAzICMgbGVmdFxuXHRcdGZjIHIqc2ksZypzaSxiKnNpXG5cdFx0cSBwMSxwMyxwNyxwNSAjIHJpZ2h0XG5cdFx0ZmMgcipzayxnKnNrLGIqc2tcblx0XHRxIHA0LHA1LHA3LHA2ICMgcm9vZlxuXHRncmlkIDogLT5cblx0XHRzYyAwLjc1XG5cdFx0W2gyLGgzLGg0XSA9IFsyMDAtMipATipARFksIDIwMC1ATipARFksIDIwMF1cblx0XHRbdzIsdzMsdzRdID0gWzEwMC1ATipARFgsICAgMTAwLCAgICAgICAgMTAwK0BOKkBEWF1cblx0XHRmb3IgaSBpbiByYW5nZSBATisxXG5cdFx0XHRsaW5lIHczK0BEWCppLCBoNC1ARFkqaSwgdzIrQERYKmksIGgzLUBEWSppXG5cdFx0XHRsaW5lIHcyK0BEWCppLCBoMytARFkqaSwgdzMrQERYKmksIGgyK0BEWSppXG5cdG1vdXNlUHJlc3NlZCA6IC0+XG5cdFx0QHNob3dHcmlkID0gbm90IEBzaG93R3JpZFxuXHRcdEBlbnRlcigpXG5cdHRpY2sgOiAtPlxuXHRcdEB0ID0gQHQgKyAxXG5cdFx0QGVudGVyKClcblx0ZW50ZXIgOiAtPlxuXHRcdGRpZ2l0ID0gKGJvb2wpIC0+IGlmIGJvb2wgdGhlbiAxIGVsc2UgMFxuXHRcdEBjbGVhcigpXG5cdFx0cyA9IEByZWFkVGV4dCgpLnRyaW0oKVxuXHRcdGlmIHM9PScnIHRoZW4gcz0nayB0ICcgKyBATiArICcgJSA9PSdcblx0XHRhcnIgPSBzLnNwbGl0ICcgJ1xuXHRcdEB3b3JkcyA9IGFyci5sZW5ndGhcblx0XHRAdHJhY2UgPSAnJ1xuXHRcdEBjb3VudCA9IDBcblx0XHRmb3IgaSBpbiByYW5nZSBATlxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgQE5cblx0XHRcdFx0Zm9yIGsgaW4gcmFuZ2UgQE5cblx0XHRcdFx0XHRzdGFjayA9IFtdXG5cdFx0XHRcdFx0Zm9yIGNtZCBpbiBhcnJcblx0XHRcdFx0XHRcdGlmIGNtZCA9PSAnZHVwJyB0aGVuIHN0YWNrLnB1c2ggXy5sYXN0IHN0YWNrXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnc3dwJ1xuXHRcdFx0XHRcdFx0XHRuID0gc3RhY2subGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRbc3RhY2tbbi0xXSxzdGFja1tuXV0gPSBbc3RhY2tbbl0sc3RhY2tbbi0xXV1cblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdyb3QnIHRoZW4gc3RhY2sucHVzaCBzdGFjay5zaGlmdCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnaScgIHRoZW4gc3RhY2sucHVzaCBpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnaicgIHRoZW4gc3RhY2sucHVzaCBqXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnaycgIHRoZW4gc3RhY2sucHVzaCBrXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAndCcgIHRoZW4gc3RhY2sucHVzaCBAdFxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJzwnICB0aGVuIHN0YWNrLnB1c2ggZGlnaXQgc3RhY2sucG9wKCkgPiBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJz4nICB0aGVuIHN0YWNrLnB1c2ggZGlnaXQgc3RhY2sucG9wKCkgPCBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJz09JyB0aGVuIHN0YWNrLnB1c2ggZGlnaXQgc3RhY2sucG9wKCkgPT0gc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICc8PScgdGhlbiBzdGFjay5wdXNoIGRpZ2l0IHN0YWNrLnBvcCgpID49IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnPj0nIHRoZW4gc3RhY2sucHVzaCBkaWdpdCBzdGFjay5wb3AoKSA8PSBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJyE9JyB0aGVuIHN0YWNrLnB1c2ggZGlnaXQgc3RhY2sucG9wKCkgIT0gc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICcrJyAgdGhlbiBzdGFjay5wdXNoIHN0YWNrLnBvcCgpICsgc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICctJyAgdGhlbiBzdGFjay5wdXNoIC1zdGFjay5wb3AoKSArIHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnKicgIHRoZW4gc3RhY2sucHVzaCBzdGFjay5wb3AoKSAqIHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnLydcblx0XHRcdFx0XHRcdFx0YSA9IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRcdHN0YWNrLnB1c2ggc3RhY2sucG9wKCkgLyBhXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnLy8nXG5cdFx0XHRcdFx0XHRcdGEgPSBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0XHRzdGFjay5wdXNoIHN0YWNrLnBvcCgpIC8vIGFcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICclJ1xuXHRcdFx0XHRcdFx0XHRhID0gc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdFx0c3RhY2sucHVzaCBzdGFjay5wb3AoKSAlIGFcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICclJSdcblx0XHRcdFx0XHRcdFx0YSA9IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRcdHN0YWNrLnB1c2ggc3RhY2sucG9wKCkgJSUgYVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ2JpdCcgdGhlbiBzdGFjay5wdXNoIHN0YWNrLnBvcCgpID4+IHN0YWNrLnBvcCgpICYgMVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ2JpdGknIHRoZW4gc3RhY2sucHVzaCBzdGFjay5wb3AoKSA+PiBpICYgMVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ2JpdGonIHRoZW4gc3RhY2sucHVzaCBzdGFjay5wb3AoKSA+PiBqICYgMVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ2JpdGsnIHRoZW4gc3RhY2sucHVzaCBzdGFjay5wb3AoKSA+PiBrICYgMVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ2JpdGlqJ1xuXHRcdFx0XHRcdFx0XHRiaXRzID0gc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdFx0c3RhY2sgPSBzdGFjay5jb25jYXQgW2JpdHMgPj4gaSAmIDEsIGJpdHMgPj4gaiAmIDFdXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnYml0aWsnXG5cdFx0XHRcdFx0XHRcdGJpdHMgPSBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0XHRzdGFjayA9IHN0YWNrLmNvbmNhdCBbYml0cyA+PiBpICYgMSwgYml0cyA+PiBrICYgMV1cblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdiaXRqaydcblx0XHRcdFx0XHRcdFx0Yml0cyA9IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRcdHN0YWNrID0gc3RhY2suY29uY2F0IFtiaXRzID4+IGogJiAxLCBiaXRzID4+IGsgJiAxXVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ2JpdGlqaydcblx0XHRcdFx0XHRcdFx0Yml0cyA9IHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRcdHN0YWNrID0gc3RhY2suY29uY2F0IFtiaXRzID4+IGkgJiAxLCBiaXRzID4+IGogJiAxLCBiaXRzID4+IGsgJiAxXVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJyYnIHRoZW4gc3RhY2sucHVzaCBzdGFjay5wb3AoKSAmIHN0YWNrLnBvcCgpXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnfCcgdGhlbiBzdGFjay5wdXNoIHN0YWNrLnBvcCgpIHwgc3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdeJyB0aGVuIHN0YWNrLnB1c2ggc3RhY2sucG9wKCkgXiBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ34nIHRoZW4gc3RhY2sucHVzaCB+c3RhY2sucG9wKClcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdhbmQnXG5cdFx0XHRcdFx0XHRcdFthLGJdID0gW3N0YWNrLnBvcCgpLHN0YWNrLnBvcCgpXVxuXHRcdFx0XHRcdFx0XHRzdGFjay5wdXNoIGRpZ2l0IGEhPTAgYW5kIGIhPTBcblx0XHRcdFx0XHRcdGVsc2UgaWYgY21kID09ICdvcidcblx0XHRcdFx0XHRcdFx0W2EsYl0gPSBbc3RhY2sucG9wKCksc3RhY2sucG9wKCldXG5cdFx0XHRcdFx0XHRcdHN0YWNrLnB1c2ggZGlnaXQgYSE9MCBvciBiIT0wXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAneG9yJ1xuXHRcdFx0XHRcdFx0XHRhID0gZGlnaXQgc3RhY2sucG9wKCkgIT0gMFxuXHRcdFx0XHRcdFx0XHRiID0gZGlnaXQgc3RhY2sucG9wKCkgIT0gMFxuXHRcdFx0XHRcdFx0XHRzdGFjay5wdXNoIGRpZ2l0IGErYiA9PSAxXG5cdFx0XHRcdFx0XHRlbHNlIGlmIGNtZCA9PSAnbm90JyB0aGVuIHN0YWNrLnB1c2ggZGlnaXQgc3RhY2sucG9wKCkgPT0gMFxuXHRcdFx0XHRcdFx0ZWxzZSBpZiBjbWQgPT0gJ2FicycgdGhlbiBzdGFjay5wdXNoIGFicyBzdGFjay5wb3AoKVxuXHRcdFx0XHRcdFx0ZWxzZSBzdGFjay5wdXNoIHBhcnNlRmxvYXQgY21kXG5cdFx0XHRcdFx0XHRpZiBpPT1ATi0xIGFuZCBqPT1ATi0xIGFuZCBrPT1ATi0xIHRoZW4gQHRyYWNlICs9IGNtZCArICcgWycgKyBzdGFjay5qb2luKCcsJykgKyAnXSAnXG5cdFx0XHRcdFx0aWYgc3RhY2sucG9wKCkgIT0gMFxuXHRcdFx0XHRcdFx0QGNvdW50Kytcblx0XHRcdFx0XHRcdEBhZGQgaSxqLGtcblx0XHRAdHJhY2UgPSBAdHJhY2UudHJpbSgpXG5hcHAgPSBuZXcgRm9ydGhIYWlrdTNEIFwiYVwiXG5cblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQgMiw1MCwyNXxyZXNldCAxMCwxMCw1fHJlc2V0IDE3LDYsM3xlbnRlcigpfHRpY2soKVwiXG5cdGU6XG5cdFx0Rm9ydGhIYWlrdSA6IFwiaHR0cDovL2ZvcnRoc2Fsb24uYXBwc3BvdC5jb20vaGFpa3UtZWRpdG9yXCJcblx0XHRFeGVtcGVsIDogJ0ZvcnRoSGFpa3UzRC5odG1sJ1xuXHRcdFwiQmVjayAmIEp1bmdcIiA6ICdodHRwczovL3d3dy5nb29nbGUuc2Uvc2VhcmNoP3E9YmVjaytqdW5nJnRibT1pc2NoJmltZ2lsPWZUREIzNHF1SXZRVnRNJTI1M0ElMjUzQnVqU29rRTFRNExhLVFNJTI1M0JodHRwJTI1MjUzQSUyNTI1MkYlMjUyNTJGb25saW5lLmF1a3Rpb25zdmVya2V0LnNlJTI1MjUyRjExMTElMjUyNTJGMTA5NTM0LWJlY2stanVuZy1jb21wdXRlci1pbmstcGxvdCZzb3VyY2U9aXUmcGY9bSZmaXI9ZlREQjM0cXVJdlFWdE0lMjUzQSUyNTJDdWpTb2tFMVE0TGEtUU0lMjUyQ18mdXNnPV9fZUJBNHYyT2w1UmRWQ29tVEJKcVBrb3pINTlzJTNEJmJpdz0xOTIwJmJpaD0xMTA4JmRwcj0xJnZlZD0wYWhVS0V3aUgwcW1xekluVUFoVm1EWm9LSFRjWUQ3d1F5amNJUXcmZWk9aFFzbVdjZjdFT2FhNkFTM3NMemdDdyNpbWdyYz1mVERCMzRxdUl2UVZ0TTonXG4iXX0=
//# sourceURL=C:\github\p5Dojo\coffee\data\F.coffee