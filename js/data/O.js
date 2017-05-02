// Generated by CoffeeScript 1.11.1
var ID_OlympicRingPrep, ID_OlympicRings, ID_OneDiceHistogram;

ID_OlympicRingPrep = {
  v: '2017-04-29',
  b: "# LOC:21 sc fc sw # arc strokeCap class extends constructor new @ super ->\n\nclass Ring extends Application\n	reset  : ->\n		super\n	draw   : ->\n	start  : (d) ->\n	stopp  : (d) ->\n	radius : (d) ->\n	width  : (d) ->\napp = new Ring",
  a: "class Ring extends Application\n	reset : ->\n		super\n		@_start = 3\n		@_stopp = 6\n		@_w = 5\n		@_radius = 50\n	start : (d) -> @_start+=d\n	stopp : (d) -> @_stopp+=d\n	radius : (d) -> @_radius+=d\n	width : (d) -> @_w+=d\n	draw : ->\n		hour = PI/6\n		strokeCap SQUARE\n		fc()\n		sw @_w\n		sc 1,1,0\n		arc 100,100,2*@_radius,2*@_radius,(@_start-3)*hour,(@_stopp-3)*hour\n\napp = new Ring \"a\"",
  c: {
    app: "reset()|start -1|start +1|stopp -1|stopp +1|radius -1|radius +1|width -1|width +1"
  }
};

ID_OlympicRings = {
  v: '2017-04-29',
  b: "# LOC:24 sc bg fc sw # arc strokeCap class constructor new @\n\nclass Ring\n	constructor : (@x,@y,@r,@g,@b) ->\n	draw : (start=3,stopp=3,hour=PI/6) ->\n\nolympic = (x=100,y=100,radius=50,d=60,w=10) ->\n\nolympic()",
  a: "class Ring\n	constructor : (@x,@y,@radius, @r,@g,@b) ->\n	draw : (start=3,stopp=3,hour=PI/6) ->\n		sc @r,@g,@b\n		arc @x,@y,@radius,@radius,(start-3)*hour,(stopp-3)*hour\n\nolympic = (x=100,y=100,radius=50,d=60,w=10) ->\n	r1 = new Ring x-d,  y,     radius, 0,0,1\n	r2 = new Ring x,    y,     radius, 0,0,0\n	r3 = new Ring x+d,  y,     radius, 1,0,0\n	r4 = new Ring x-d/2,y+d/3, radius, 1,1,0\n	r5 = new Ring x+d/2,y+d/3, radius, 0,1,0\n\n	strokeCap SQUARE\n	bg 0.5\n	fc()\n	sw w\n\n	r1.draw()\n	r3.draw()\n	r4.draw()\n	r5.draw()\n	r1.draw 2,4\n	r2.draw()\n	r4.draw 12,2\n	r5.draw 8,10\n	r3.draw 6,8\n\nolympic()",
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Olympic_symbols"
  }
};

ID_OneDiceHistogram = {
  v: '2017-04-29',
  b: "# LOC:17 fc sc range # Array fill length int random text textAlign for in ++ * / + - rect []\n# OBS: På grund av random blir bitmapparna inte likadana\n\nh = 50\ncounts = Array(4).fill 150\nfor count,i in counts\n	y = h*i\n	rect 0,y,count,h\n	text y,0,y",
  a: "counts = Array(6).fill 0\ndice = -> int 6 * random()\nfor i in range 1000\n	counts[dice()]++\nh = int 200/6\nsc()\nfor count,i in counts\n	y = h*i\n	fc 1,1,0,0.5\n	sc 1,1,0\n	rect 0,y,count,h-3\n	fc 1,1,0\n	sc()\n	textAlign LEFT,CENTER\n	text i+1, 5,y+h/2\n	textAlign RIGHT,CENTER\n	text count, count-5,y+h/2"
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcTy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsa0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDJPQURGO0VBY0EsQ0FBQSxFQUFFLDBZQWRGO0VBb0NBLENBQUEsRUFDQztJQUFBLEdBQUEsRUFBTSxtRkFBTjtHQXJDRDs7O0FBdUNELGVBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFHLHVOQURIO0VBWUEsQ0FBQSxFQUFHLHFtQkFaSDtFQTJDQSxDQUFBLEVBQ0M7SUFBQSxTQUFBLEVBQVksK0NBQVo7R0E1Q0Q7OztBQThDRCxtQkFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsK1BBREY7RUFZQSxDQUFBLEVBQUUsc1RBWkYiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9PbHltcGljUmluZ1ByZXAgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOlwiXCJcIlxuIyBMT0M6MjEgc2MgZmMgc3cgIyBhcmMgc3Ryb2tlQ2FwIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3IgbmV3IEAgc3VwZXIgLT5cblxuY2xhc3MgUmluZyBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0ICA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgIDogLT5cblx0c3RhcnQgIDogKGQpIC0+XG5cdHN0b3BwICA6IChkKSAtPlxuXHRyYWRpdXMgOiAoZCkgLT5cblx0d2lkdGggIDogKGQpIC0+XG5hcHAgPSBuZXcgUmluZ1xuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBSaW5nIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QF9zdGFydCA9IDNcblx0XHRAX3N0b3BwID0gNlxuXHRcdEBfdyA9IDVcblx0XHRAX3JhZGl1cyA9IDUwXG5cdHN0YXJ0IDogKGQpIC0+IEBfc3RhcnQrPWRcblx0c3RvcHAgOiAoZCkgLT4gQF9zdG9wcCs9ZFxuXHRyYWRpdXMgOiAoZCkgLT4gQF9yYWRpdXMrPWRcblx0d2lkdGggOiAoZCkgLT4gQF93Kz1kXG5cdGRyYXcgOiAtPlxuXHRcdGhvdXIgPSBQSS82XG5cdFx0c3Ryb2tlQ2FwIFNRVUFSRVxuXHRcdGZjKClcblx0XHRzdyBAX3dcblx0XHRzYyAxLDEsMFxuXHRcdGFyYyAxMDAsMTAwLDIqQF9yYWRpdXMsMipAX3JhZGl1cywoQF9zdGFydC0zKSpob3VyLChAX3N0b3BwLTMpKmhvdXJcblxuYXBwID0gbmV3IFJpbmcgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxzdGFydCAtMXxzdGFydCArMXxzdG9wcCAtMXxzdG9wcCArMXxyYWRpdXMgLTF8cmFkaXVzICsxfHdpZHRoIC0xfHdpZHRoICsxXCJcblxuSURfT2x5bXBpY1JpbmdzID1cblx0djonMjAxNy0wNC0yOSdcblx0YjogXCJcIlwiXG4jIExPQzoyNCBzYyBiZyBmYyBzdyAjIGFyYyBzdHJva2VDYXAgY2xhc3MgY29uc3RydWN0b3IgbmV3IEBcblxuY2xhc3MgUmluZ1xuXHRjb25zdHJ1Y3RvciA6IChAeCxAeSxAcixAZyxAYikgLT5cblx0ZHJhdyA6IChzdGFydD0zLHN0b3BwPTMsaG91cj1QSS82KSAtPlxuXG5vbHltcGljID0gKHg9MTAwLHk9MTAwLHJhZGl1cz01MCxkPTYwLHc9MTApIC0+XG5cbm9seW1waWMoKVxuXCJcIlwiXG5cdGE6IFwiXCJcIlxuY2xhc3MgUmluZ1xuXHRjb25zdHJ1Y3RvciA6IChAeCxAeSxAcmFkaXVzLCBAcixAZyxAYikgLT5cblx0ZHJhdyA6IChzdGFydD0zLHN0b3BwPTMsaG91cj1QSS82KSAtPlxuXHRcdHNjIEByLEBnLEBiXG5cdFx0YXJjIEB4LEB5LEByYWRpdXMsQHJhZGl1cywoc3RhcnQtMykqaG91ciwoc3RvcHAtMykqaG91clxuXG5vbHltcGljID0gKHg9MTAwLHk9MTAwLHJhZGl1cz01MCxkPTYwLHc9MTApIC0+XG5cdHIxID0gbmV3IFJpbmcgeC1kLCAgeSwgICAgIHJhZGl1cywgMCwwLDFcblx0cjIgPSBuZXcgUmluZyB4LCAgICB5LCAgICAgcmFkaXVzLCAwLDAsMFxuXHRyMyA9IG5ldyBSaW5nIHgrZCwgIHksICAgICByYWRpdXMsIDEsMCwwXG5cdHI0ID0gbmV3IFJpbmcgeC1kLzIseStkLzMsIHJhZGl1cywgMSwxLDBcblx0cjUgPSBuZXcgUmluZyB4K2QvMix5K2QvMywgcmFkaXVzLCAwLDEsMFxuXG5cdHN0cm9rZUNhcCBTUVVBUkVcblx0YmcgMC41XG5cdGZjKClcblx0c3cgd1xuXG5cdHIxLmRyYXcoKVxuXHRyMy5kcmF3KClcblx0cjQuZHJhdygpXG5cdHI1LmRyYXcoKVxuXHRyMS5kcmF3IDIsNFxuXHRyMi5kcmF3KClcblx0cjQuZHJhdyAxMiwyXG5cdHI1LmRyYXcgOCwxMFxuXHRyMy5kcmF3IDYsOFxuXG5vbHltcGljKClcblwiXCJcIlxuXHRlIDpcblx0XHRXaWtpcGVkaWEgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL09seW1waWNfc3ltYm9sc1wiXG5cbklEX09uZURpY2VIaXN0b2dyYW0gPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOlwiXCJcIlxuIyBMT0M6MTcgZmMgc2MgcmFuZ2UgIyBBcnJheSBmaWxsIGxlbmd0aCBpbnQgcmFuZG9tIHRleHQgdGV4dEFsaWduIGZvciBpbiArKyAqIC8gKyAtIHJlY3QgW11cbiMgT0JTOiBQw6UgZ3J1bmQgYXYgcmFuZG9tIGJsaXIgYml0bWFwcGFybmEgaW50ZSBsaWthZGFuYVxuXG5oID0gNTBcbmNvdW50cyA9IEFycmF5KDQpLmZpbGwgMTUwXG5mb3IgY291bnQsaSBpbiBjb3VudHNcblx0eSA9IGgqaVxuXHRyZWN0IDAseSxjb3VudCxoXG5cdHRleHQgeSwwLHlcblwiXCJcIlxuXHRhOlwiXCJcIlxuY291bnRzID0gQXJyYXkoNikuZmlsbCAwXG5kaWNlID0gLT4gaW50IDYgKiByYW5kb20oKVxuZm9yIGkgaW4gcmFuZ2UgMTAwMFxuXHRjb3VudHNbZGljZSgpXSsrXG5oID0gaW50IDIwMC82XG5zYygpXG5mb3IgY291bnQsaSBpbiBjb3VudHNcblx0eSA9IGgqaVxuXHRmYyAxLDEsMCwwLjVcblx0c2MgMSwxLDBcblx0cmVjdCAwLHksY291bnQsaC0zXG5cdGZjIDEsMSwwXG5cdHNjKClcblx0dGV4dEFsaWduIExFRlQsQ0VOVEVSXG5cdHRleHQgaSsxLCA1LHkraC8yXG5cdHRleHRBbGlnbiBSSUdIVCxDRU5URVJcblx0dGV4dCBjb3VudCwgY291bnQtNSx5K2gvMlxuXCJcIlwiXG5cbiJdfQ==
//# sourceURL=C:\github\p5Dojo\coffee\data\O.coffee