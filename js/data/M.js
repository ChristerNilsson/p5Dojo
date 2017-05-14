// Generated by CoffeeScript 1.11.1
var ID_ManyDices, ID_MidPoints, ID_Moire, ID_MultiTimer;

ID_ManyDices = {
  v: '2017-04-29',
  k: '-> range for if point [] operators',
  l: 8,
  b: "",
  a: "dice = (x,y,d) ->\n	for bits,i in [21,56,32,62,62,32,56]\n		dx = 4 * [0,-1,-1,-1,1,1,1][i]\n		dy = 4 * [0,-1,0,1,-1,0,1][i]\n		if d&bits then point 10+x+dx,10+y+dy\nfor i in range 10\n	for j in range 10\n		dice 20*i, 20*j, 1 << (i+j) % 6"
};

ID_MidPoints = {
  v: '2017-04-29',
  k: 'sc sw point',
  l: 11,
  b: "",
  a: "sw 10\nsc 1,0,0\npoint 100,100\nsc 0,1,0\npoint 100,0\nsc 1,1,0\npoint 0,100\nsc 0\npoint 200,100\nsc 1\npoint 100,200",
  e: {
    Matteboken: "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"
  }
};

ID_Moire = {
  v: '2017-04-29',
  k: 'bg range operators for line map class',
  l: 11,
  b: "class Moire extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new Moire",
  a: "class Moire extends Application\n	reset : ->\n		super\n		[@x,@y] = [100,100]\n	draw : ->\n		bg 0\n		for i in range 40\n			for j in range 4\n				[x,y] = [0,i*5,200,200-i*5,0][j..j+1]\n				line @x,@y,x,y\n	mousePressed : (mx,my) -> [@x,@y] = [mx,my]\n\napp = new Moire \"a\"",
  c: {
    app: "reset()"
  },
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Moir%C3%A9_pattern"
  }
};

ID_MultiTimer = {
  v: '2017-04-29',
  k: 'bg sc fc for [] operators text nf if int round millis class',
  l: 30,
  b: "# OBS! Tiderna kan skilja med flera millisekunder. Sorry!\n\nclass MultiTimer extends Application\n	reset : ->\n		super\n	draw  : ->\n	mousePressed : (mx,my) ->\napp = new MultiTimer",
  a: "class MultiTimer extends Application\n	reset : ->\n		super\n		@start = int millis()\n		@buttons = [[0,0,\"A\",0],[100,0,\"B\",0],[0,50,\"C\",0],[100,50,\"D\",0],[0,100,\"E\",0],[100,100,\"F\",0],[0,150,\"G\",0],[100,150,\"H\",0]]\n		@active = -1\n	draw : ->\n		bg 0\n		textFont \"monospace\"\n		textSize 24\n		sc()\n		for [x,y,txt,time],i in @buttons\n			if @active==i then fc 1,0,0 else fc 1,1,0\n			textAlign LEFT,TOP\n			text txt, x+10,y\n			textAlign RIGHT,TOP\n			secs = round time/1000\n			text nf(int(secs / 60),2) + ':' + nf(secs % 60,2), x+100,y\n	mousePressed : (mx,my) ->\n		for [x,y,txt,time],i in @buttons\n			if x <= mx <= x+100 and y <= my <= y+50 then active = i\n		if active == @active\n			@buttons[@active][3] += int millis() - @start\n			@active = -1\n		else if @active == -1\n			@active = active\n		else # byte\n			@buttons[@active][3] += int millis() - @start\n			@active = active\n		@start = int millis()\n\napp = new MultiTimer \"a\"",
  c: {
    app: "reset()"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcTS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsWUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsb0NBREY7RUFFQSxDQUFBLEVBQUUsQ0FGRjtFQUdBLENBQUEsRUFBSSxFQUhKO0VBSUEsQ0FBQSxFQUFJLCtPQUpKOzs7QUFlRCxZQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxhQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLENBQUEsRUFBRyx3SEFKSDtFQWlCQSxDQUFBLEVBQ0M7SUFBQSxVQUFBLEVBQWEsdUVBQWI7R0FsQkQ7OztBQW9CRCxRQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx1Q0FERjtFQUVBLENBQUEsRUFBRSxFQUZGO0VBR0EsQ0FBQSxFQUFFLGlIQUhGO0VBV0EsQ0FBQSxFQUFHLGtSQVhIO0VBMEJBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSxTQUFOO0dBM0JEO0VBNEJBLENBQUEsRUFDQztJQUFBLFNBQUEsRUFBWSxrREFBWjtHQTdCRDs7O0FBK0JELGFBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDZEQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsd0xBSEY7RUFhQSxDQUFBLEVBQUUsODdCQWJGO0VBK0NBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBSyxTQUFMO0dBaEREIiwic291cmNlc0NvbnRlbnQiOlsiSURfTWFueURpY2VzID1cblx0djonMjAxNy0wNC0yOSdcblx0azonLT4gcmFuZ2UgZm9yIGlmIHBvaW50IFtdIG9wZXJhdG9ycydcblx0bDo4XG5cdGIgOiBcIlwiXG5cdGEgOiBcIlwiXCJcbmRpY2UgPSAoeCx5LGQpIC0+XG5cdGZvciBiaXRzLGkgaW4gWzIxLDU2LDMyLDYyLDYyLDMyLDU2XVxuXHRcdGR4ID0gNCAqIFswLC0xLC0xLC0xLDEsMSwxXVtpXVxuXHRcdGR5ID0gNCAqIFswLC0xLDAsMSwtMSwwLDFdW2ldXG5cdFx0aWYgZCZiaXRzIHRoZW4gcG9pbnQgMTAreCtkeCwxMCt5K2R5XG5mb3IgaSBpbiByYW5nZSAxMFxuXHRmb3IgaiBpbiByYW5nZSAxMFxuXHRcdGRpY2UgMjAqaSwgMjAqaiwgMSA8PCAoaStqKSAlIDZcblwiXCJcIlxuXG5JRF9NaWRQb2ludHMgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidzYyBzdyBwb2ludCdcblx0bDoxMVxuXHRiOiBcIlwiXG5cdGE6IFwiXCJcIlxuc3cgMTBcbnNjIDEsMCwwXG5wb2ludCAxMDAsMTAwXG5zYyAwLDEsMFxucG9pbnQgMTAwLDBcbnNjIDEsMSwwXG5wb2ludCAwLDEwMFxuc2MgMFxucG9pbnQgMjAwLDEwMFxuc2MgMVxucG9pbnQgMTAwLDIwMFxuXCJcIlwiXG5cdGUgOlxuXHRcdE1hdHRlYm9rZW4gOiBcImh0dHA6Ly93d3cubWF0dGVib2tlbi5zZS9sZWt0aW9uZXIvbWF0dGUtMS9mdW5rdGlvbmVyL2tvb3JkaW5hdHN5c3RlbVwiXG5cbklEX01vaXJlID1cblx0djonMjAxNy0wNC0yOSdcblx0azonYmcgcmFuZ2Ugb3BlcmF0b3JzIGZvciBsaW5lIG1hcCBjbGFzcydcblx0bDoxMVxuXHRiOlwiXCJcIlxuY2xhc3MgTW9pcmUgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5hcHAgPSBuZXcgTW9pcmVcblx0XHRcdFwiXCJcIlxuXHRhOiBcIlwiXCJcbmNsYXNzIE1vaXJlIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0W0B4LEB5XSA9IFsxMDAsMTAwXVxuXHRkcmF3IDogLT5cblx0XHRiZyAwXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgNDBcblx0XHRcdGZvciBqIGluIHJhbmdlIDRcblx0XHRcdFx0W3gseV0gPSBbMCxpKjUsMjAwLDIwMC1pKjUsMF1bai4uaisxXVxuXHRcdFx0XHRsaW5lIEB4LEB5LHgseVxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+IFtAeCxAeV0gPSBbbXgsbXldXG5cbmFwcCA9IG5ldyBNb2lyZSBcImFcIlxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpXCJcblx0ZTpcblx0XHRXaWtpcGVkaWEgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01vaXIlQzMlQTlfcGF0dGVyblwiXG5cbklEX011bHRpVGltZXIgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidiZyBzYyBmYyBmb3IgW10gb3BlcmF0b3JzIHRleHQgbmYgaWYgaW50IHJvdW5kIG1pbGxpcyBjbGFzcydcblx0bDozMFxuXHRiOlwiXCJcIlxuIyBPQlMhIFRpZGVybmEga2FuIHNraWxqYSBtZWQgZmxlcmEgbWlsbGlzZWt1bmRlci4gU29ycnkhXG5cbmNsYXNzIE11bHRpVGltZXIgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgOiAtPlxuXHRtb3VzZVByZXNzZWQgOiAobXgsbXkpIC0+XG5hcHAgPSBuZXcgTXVsdGlUaW1lclxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBNdWx0aVRpbWVyIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QHN0YXJ0ID0gaW50IG1pbGxpcygpXG5cdFx0QGJ1dHRvbnMgPSBbWzAsMCxcIkFcIiwwXSxbMTAwLDAsXCJCXCIsMF0sWzAsNTAsXCJDXCIsMF0sWzEwMCw1MCxcIkRcIiwwXSxbMCwxMDAsXCJFXCIsMF0sWzEwMCwxMDAsXCJGXCIsMF0sWzAsMTUwLFwiR1wiLDBdLFsxMDAsMTUwLFwiSFwiLDBdXVxuXHRcdEBhY3RpdmUgPSAtMVxuXHRkcmF3IDogLT5cblx0XHRiZyAwXG5cdFx0dGV4dEZvbnQgXCJtb25vc3BhY2VcIlxuXHRcdHRleHRTaXplIDI0XG5cdFx0c2MoKVxuXHRcdGZvciBbeCx5LHR4dCx0aW1lXSxpIGluIEBidXR0b25zXG5cdFx0XHRpZiBAYWN0aXZlPT1pIHRoZW4gZmMgMSwwLDAgZWxzZSBmYyAxLDEsMFxuXHRcdFx0dGV4dEFsaWduIExFRlQsVE9QXG5cdFx0XHR0ZXh0IHR4dCwgeCsxMCx5XG5cdFx0XHR0ZXh0QWxpZ24gUklHSFQsVE9QXG5cdFx0XHRzZWNzID0gcm91bmQgdGltZS8xMDAwXG5cdFx0XHR0ZXh0IG5mKGludChzZWNzIC8gNjApLDIpICsgJzonICsgbmYoc2VjcyAlIDYwLDIpLCB4KzEwMCx5XG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cblx0XHRmb3IgW3gseSx0eHQsdGltZV0saSBpbiBAYnV0dG9uc1xuXHRcdFx0aWYgeCA8PSBteCA8PSB4KzEwMCBhbmQgeSA8PSBteSA8PSB5KzUwIHRoZW4gYWN0aXZlID0gaVxuXHRcdGlmIGFjdGl2ZSA9PSBAYWN0aXZlXG5cdFx0XHRAYnV0dG9uc1tAYWN0aXZlXVszXSArPSBpbnQgbWlsbGlzKCkgLSBAc3RhcnRcblx0XHRcdEBhY3RpdmUgPSAtMVxuXHRcdGVsc2UgaWYgQGFjdGl2ZSA9PSAtMVxuXHRcdFx0QGFjdGl2ZSA9IGFjdGl2ZVxuXHRcdGVsc2UgIyBieXRlXG5cdFx0XHRAYnV0dG9uc1tAYWN0aXZlXVszXSArPSBpbnQgbWlsbGlzKCkgLSBAc3RhcnRcblx0XHRcdEBhY3RpdmUgPSBhY3RpdmVcblx0XHRAc3RhcnQgPSBpbnQgbWlsbGlzKClcblxuYXBwID0gbmV3IE11bHRpVGltZXIgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcDogXCJyZXNldCgpXCJcbiJdfQ==
//# sourceURL=C:\github\p5Dojo\coffee\data\M.coffee