// Generated by CoffeeScript 1.11.1
var ID_PacMan, ID_PentaLerp, ID_PickingBerries, ID_Polygon;

ID_PacMan = {
  v: '2017-04-29',
  k: 'fc arc radians',
  b: "# LOC:2 \n",
  a: "fc 1,1,0\narc 100,100, 180,180, radians(-135),radians(135)",
  e: {
    Play: "https://www.google.se/#q=pacman&clb=clb",
    Wikipedia: "https://en.wikipedia.org/wiki/Pac-Man"
  }
};

ID_PentaLerp = {
  v: '2017-05-13',
  k: 'bg sc fc range circle for lerp',
  b: "# LOC:11 \n",
  a: "bg 0.5\nsc()\nfor i in range 10\n	for j in range 10\n		r = lerp 0,1/9,i\n		g = lerp 0,1/9,j\n		fc r,g,0\n		x = lerp 10,30,i\n		y = lerp 10,30,j\n		radius = lerp 1,1.5,i+j\n		circle x,y,radius"
};

ID_PickingBerries = {
  v: '2017-04-29',
  k: 'bg sc fc sw [] operators line text constrain dist break for class',
  b: "# LOC:46\n\nclass PickingBerries extends Application\n	reset      : ->\n		super\n	draw       : ->\n	left       : ->\n	right      : ->\n	up         : ->\n	down       : ->\n	snailSpeed : ->\n	slowSpeed  : ->\n	highSpeed  : ->\n	warpSpeed  : ->\n	pick       : ->\napp = new PickingBerries",
  a: "class PickingBerries extends Application\n\n	reset : ->\n		super\n		@SPEEDS = [1,5,20,50]\n		@x = 100\n		@y = 100\n		@speed = 2 # 0..3\n		@clicks = 0\n		@xs = [100,189,124,196,13,187,12,153,32,131]\n		@ys = [107,175,138,188,37,78,168,31,20,188]\n		@moves = \"\"\n		@dxdy = [[1,0],[0,1],[-1,0],[0,-1]]\n\n	draw : ->\n		bg 0\n		rectMode CENTER\n		sc 1\n		sw 1\n		rect @x,@y,2*@SPEEDS[@speed],2*@SPEEDS[@speed]\n		for [dx,dy] in @dxdy\n			for i in range 4\n				point @x+dx*@SPEEDS[i], @y+dy*@SPEEDS[i]\n\n		fc 1,1,0\n		sc()\n		textSize 20\n		textAlign CENTER,CENTER\n		text @clicks,100,180\n\n		sc 1,0,0\n		sw 2\n		for [x,y] in _.zip @xs,@ys\n			line x-3,y-3,x+3,y+3\n			line x+3,y-3,x-3,y+3\n\n	move : (i) ->\n		[dx,dy] = @dxdy[i]\n		@x += dx * @SPEEDS[@speed]\n		@y += dy * @SPEEDS[@speed]\n		@clicks++\n		@moves += 'abcd'[i]\n\n	setSpeed : (index) ->\n		@speed = index\n		@moves += index\n\n	right   : -> @move 0\n	down    : -> @move 1\n	left    : -> @move 2\n	up      : -> @move 3\n\n	snailSpeed : -> @setSpeed 0\n	slowSpeed  : -> @setSpeed 1\n	highSpeed  : -> @setSpeed 2\n	warpSpeed  : -> @setSpeed 3\n\n	step : (d) ->\n		@clicks++\n		constrain @zoom+d,0,3\n	pick : ->\n		for [x,y],i in _.zip @xs,@ys\n			if dist(x,y,@x,@y) <= 2\n				@xs.splice i,1\n				@ys.splice i,1\n				break\n		@clicks++\n\napp = new PickingBerries \"a\"",
  c: {
    app: "reset()|left()|right()|up()|down()|snailSpeed()|slowSpeed()|highSpeed()|warpSpeed()|pick()"
  }
};

ID_Polygon = {
  v: '2017-04-29',
  k: 'bg sc range line for cos sin radians class',
  b: "# LOC:23\n\nclass Turtle\n	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->\n	fd : (d) ->\n	rt : (a) ->\n\nclass Polygon extends Application\n	reset      : ->\n		super\n	draw       : ->\n	antalSidor : (d) ->\n	antalSteg  : (d) ->\napp = new Polygon",
  a: "class Turtle\n	constructor : (@r=1,@g=0,@b=0, @x=100,@y=10,@dir=0) ->\n	fd : (d) ->\n		dx = d*cos radians @dir\n		dy = d*sin radians @dir\n		sc @r,@g,@b\n		line @x,@y,@x+dx,@y+dy\n		@x += dx\n		@y += dy\n	rt : (a) ->\n		@dir +=a\n\nclass Polygon extends Application\n	reset : ->\n		super\n		@n = 6\n		@steg = 60\n\n	draw : ->\n		t = new Turtle()\n		bg 0\n		for i in range @n\n			t.fd @steg\n			t.rt 360/@n\n\n	antalSidor : (d) -> @n += d\n	antalSteg : (d) -> @steg += d\n\napp = new Polygon \"a\"",
  c: {
    app: "reset()|antalSidor -1|antalSidor +1|antalSteg -1|antalSteg +1|"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcUC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsU0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsZ0JBREY7RUFFQSxDQUFBLEVBQUUsWUFGRjtFQUdBLENBQUEsRUFBRSw0REFIRjtFQU9BLENBQUEsRUFDQztJQUFBLElBQUEsRUFBTyx5Q0FBUDtJQUNBLFNBQUEsRUFBWSx1Q0FEWjtHQVJEOzs7QUFXRCxZQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxnQ0FERjtFQUVBLENBQUEsRUFBRSxhQUZGO0VBR0EsQ0FBQSxFQUFFLGlNQUhGOzs7QUFpQkQsaUJBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG1FQURGO0VBRUEsQ0FBQSxFQUFFLCtSQUZGO0VBb0JBLENBQUEsRUFBRSxtekNBcEJGO0VBMkZBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSw0RkFBTjtHQTVGRDs7O0FBOEZELFVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDRDQURGO0VBRUEsQ0FBQSxFQUFFLGdRQUZGO0VBa0JBLENBQUEsRUFBRSxrZkFsQkY7RUFpREEsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLGdFQUFOO0dBbEREIiwic291cmNlc0NvbnRlbnQiOlsiSURfUGFjTWFuID1cblx0djonMjAxNy0wNC0yOSdcblx0azonZmMgYXJjIHJhZGlhbnMnXG5cdGI6XCIjIExPQzoyIFxcblwiXG5cdGE6XCJcIlwiXG5mYyAxLDEsMFxuYXJjIDEwMCwxMDAsIDE4MCwxODAsIHJhZGlhbnMoLTEzNSkscmFkaWFucygxMzUpXG5cIlwiXCJcblx0ZSA6XG5cdFx0UGxheSA6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNlLyNxPXBhY21hbiZjbGI9Y2xiXCJcblx0XHRXaWtpcGVkaWEgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BhYy1NYW5cIlxuXG5JRF9QZW50YUxlcnAgPVxuXHR2OicyMDE3LTA1LTEzJ1xuXHRrOidiZyBzYyBmYyByYW5nZSBjaXJjbGUgZm9yIGxlcnAnXG5cdGI6XCIjIExPQzoxMSBcXG5cIlxuXHRhOlwiXCJcIlxuYmcgMC41XG5zYygpXG5mb3IgaSBpbiByYW5nZSAxMFxuXHRmb3IgaiBpbiByYW5nZSAxMFxuXHRcdHIgPSBsZXJwIDAsMS85LGlcblx0XHRnID0gbGVycCAwLDEvOSxqXG5cdFx0ZmMgcixnLDBcblx0XHR4ID0gbGVycCAxMCwzMCxpXG5cdFx0eSA9IGxlcnAgMTAsMzAsalxuXHRcdHJhZGl1cyA9IGxlcnAgMSwxLjUsaStqXG5cdFx0Y2lyY2xlIHgseSxyYWRpdXNcblwiXCJcIlxuXG5JRF9QaWNraW5nQmVycmllcyA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2JnIHNjIGZjIHN3IFtdIG9wZXJhdG9ycyBsaW5lIHRleHQgY29uc3RyYWluIGRpc3QgYnJlYWsgZm9yIGNsYXNzJ1xuXHRiOlwiXCJcIlxuIyBMT0M6NDZcblxuY2xhc3MgUGlja2luZ0JlcnJpZXMgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCAgICAgIDogLT5cblx0XHRzdXBlclxuXHRkcmF3ICAgICAgIDogLT5cblx0bGVmdCAgICAgICA6IC0+XG5cdHJpZ2h0ICAgICAgOiAtPlxuXHR1cCAgICAgICAgIDogLT5cblx0ZG93biAgICAgICA6IC0+XG5cdHNuYWlsU3BlZWQgOiAtPlxuXHRzbG93U3BlZWQgIDogLT5cblx0aGlnaFNwZWVkICA6IC0+XG5cdHdhcnBTcGVlZCAgOiAtPlxuXHRwaWNrICAgICAgIDogLT5cbmFwcCA9IG5ldyBQaWNraW5nQmVycmllc1xuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBQaWNraW5nQmVycmllcyBleHRlbmRzIEFwcGxpY2F0aW9uXG5cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QFNQRUVEUyA9IFsxLDUsMjAsNTBdXG5cdFx0QHggPSAxMDBcblx0XHRAeSA9IDEwMFxuXHRcdEBzcGVlZCA9IDIgIyAwLi4zXG5cdFx0QGNsaWNrcyA9IDBcblx0XHRAeHMgPSBbMTAwLDE4OSwxMjQsMTk2LDEzLDE4NywxMiwxNTMsMzIsMTMxXVxuXHRcdEB5cyA9IFsxMDcsMTc1LDEzOCwxODgsMzcsNzgsMTY4LDMxLDIwLDE4OF1cblx0XHRAbW92ZXMgPSBcIlwiXG5cdFx0QGR4ZHkgPSBbWzEsMF0sWzAsMV0sWy0xLDBdLFswLC0xXV1cblxuXHRkcmF3IDogLT5cblx0XHRiZyAwXG5cdFx0cmVjdE1vZGUgQ0VOVEVSXG5cdFx0c2MgMVxuXHRcdHN3IDFcblx0XHRyZWN0IEB4LEB5LDIqQFNQRUVEU1tAc3BlZWRdLDIqQFNQRUVEU1tAc3BlZWRdXG5cdFx0Zm9yIFtkeCxkeV0gaW4gQGR4ZHlcblx0XHRcdGZvciBpIGluIHJhbmdlIDRcblx0XHRcdFx0cG9pbnQgQHgrZHgqQFNQRUVEU1tpXSwgQHkrZHkqQFNQRUVEU1tpXVxuXG5cdFx0ZmMgMSwxLDBcblx0XHRzYygpXG5cdFx0dGV4dFNpemUgMjBcblx0XHR0ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxuXHRcdHRleHQgQGNsaWNrcywxMDAsMTgwXG5cblx0XHRzYyAxLDAsMFxuXHRcdHN3IDJcblx0XHRmb3IgW3gseV0gaW4gXy56aXAgQHhzLEB5c1xuXHRcdFx0bGluZSB4LTMseS0zLHgrMyx5KzNcblx0XHRcdGxpbmUgeCszLHktMyx4LTMseSszXG5cblx0bW92ZSA6IChpKSAtPlxuXHRcdFtkeCxkeV0gPSBAZHhkeVtpXVxuXHRcdEB4ICs9IGR4ICogQFNQRUVEU1tAc3BlZWRdXG5cdFx0QHkgKz0gZHkgKiBAU1BFRURTW0BzcGVlZF1cblx0XHRAY2xpY2tzKytcblx0XHRAbW92ZXMgKz0gJ2FiY2QnW2ldXG5cblx0c2V0U3BlZWQgOiAoaW5kZXgpIC0+XG5cdFx0QHNwZWVkID0gaW5kZXhcblx0XHRAbW92ZXMgKz0gaW5kZXhcblxuXHRyaWdodCAgIDogLT4gQG1vdmUgMFxuXHRkb3duICAgIDogLT4gQG1vdmUgMVxuXHRsZWZ0ICAgIDogLT4gQG1vdmUgMlxuXHR1cCAgICAgIDogLT4gQG1vdmUgM1xuXG5cdHNuYWlsU3BlZWQgOiAtPiBAc2V0U3BlZWQgMFxuXHRzbG93U3BlZWQgIDogLT4gQHNldFNwZWVkIDFcblx0aGlnaFNwZWVkICA6IC0+IEBzZXRTcGVlZCAyXG5cdHdhcnBTcGVlZCAgOiAtPiBAc2V0U3BlZWQgM1xuXG5cdHN0ZXAgOiAoZCkgLT5cblx0XHRAY2xpY2tzKytcblx0XHRjb25zdHJhaW4gQHpvb20rZCwwLDNcblx0cGljayA6IC0+XG5cdFx0Zm9yIFt4LHldLGkgaW4gXy56aXAgQHhzLEB5c1xuXHRcdFx0aWYgZGlzdCh4LHksQHgsQHkpIDw9IDJcblx0XHRcdFx0QHhzLnNwbGljZSBpLDFcblx0XHRcdFx0QHlzLnNwbGljZSBpLDFcblx0XHRcdFx0YnJlYWtcblx0XHRAY2xpY2tzKytcblxuYXBwID0gbmV3IFBpY2tpbmdCZXJyaWVzIFwiYVwiXG5cdFx0XHRcIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8bGVmdCgpfHJpZ2h0KCl8dXAoKXxkb3duKCl8c25haWxTcGVlZCgpfHNsb3dTcGVlZCgpfGhpZ2hTcGVlZCgpfHdhcnBTcGVlZCgpfHBpY2soKVwiXG5cbklEX1BvbHlnb24gPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidiZyBzYyByYW5nZSBsaW5lIGZvciBjb3Mgc2luIHJhZGlhbnMgY2xhc3MnXG5cdGI6XCJcIlwiXG4jIExPQzoyM1xuXG5jbGFzcyBUdXJ0bGVcblx0Y29uc3RydWN0b3IgOiAoQHI9MSxAZz0wLEBiPTAsIEB4PTEwMCxAeT0xMCxAZGlyPTApIC0+XG5cdGZkIDogKGQpIC0+XG5cdHJ0IDogKGEpIC0+XG5cbmNsYXNzIFBvbHlnb24gZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCAgICAgIDogLT5cblx0XHRzdXBlclxuXHRkcmF3ICAgICAgIDogLT5cblx0YW50YWxTaWRvciA6IChkKSAtPlxuXHRhbnRhbFN0ZWcgIDogKGQpIC0+XG5hcHAgPSBuZXcgUG9seWdvblxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBUdXJ0bGVcblx0Y29uc3RydWN0b3IgOiAoQHI9MSxAZz0wLEBiPTAsIEB4PTEwMCxAeT0xMCxAZGlyPTApIC0+XG5cdGZkIDogKGQpIC0+XG5cdFx0ZHggPSBkKmNvcyByYWRpYW5zIEBkaXJcblx0XHRkeSA9IGQqc2luIHJhZGlhbnMgQGRpclxuXHRcdHNjIEByLEBnLEBiXG5cdFx0bGluZSBAeCxAeSxAeCtkeCxAeStkeVxuXHRcdEB4ICs9IGR4XG5cdFx0QHkgKz0gZHlcblx0cnQgOiAoYSkgLT5cblx0XHRAZGlyICs9YVxuXG5jbGFzcyBQb2x5Z29uIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QG4gPSA2XG5cdFx0QHN0ZWcgPSA2MFxuXG5cdGRyYXcgOiAtPlxuXHRcdHQgPSBuZXcgVHVydGxlKClcblx0XHRiZyAwXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgQG5cblx0XHRcdHQuZmQgQHN0ZWdcblx0XHRcdHQucnQgMzYwL0BuXG5cblx0YW50YWxTaWRvciA6IChkKSAtPiBAbiArPSBkXG5cdGFudGFsU3RlZyA6IChkKSAtPiBAc3RlZyArPSBkXG5cbmFwcCA9IG5ldyBQb2x5Z29uIFwiYVwiXG5cIlwiXCJcblx0Yzpcblx0XHRhcHAgOiBcInJlc2V0KCl8YW50YWxTaWRvciAtMXxhbnRhbFNpZG9yICsxfGFudGFsU3RlZyAtMXxhbnRhbFN0ZWcgKzF8XCJcblxuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\P.coffee