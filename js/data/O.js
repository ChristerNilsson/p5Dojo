// Generated by CoffeeScript 1.11.1
var ID_OlympicRingPrep, ID_OlympicRings, ID_OneDiceHistogram;

ID_OlympicRingPrep = {
  v: '2017-04-29',
  k: 'sc fc sw arc strokeCap class',
  l: 21,
  b: "class Ring extends Application\n	reset  : ->\n		super\n	draw   : ->\n	start  : (d) ->\n	stopp  : (d) ->\n	radius : (d) ->\n	width  : (d) ->\napp = new Ring",
  a: "class Ring extends Application\n	reset : ->\n		super\n		@_start = 3\n		@_stopp = 6\n		@_w = 5\n		@_radius = 50\n	start : (d) -> @_start+=d\n	stopp : (d) -> @_stopp+=d\n	radius : (d) -> @_radius+=d\n	width : (d) -> @_w+=d\n	draw : ->\n		hour = PI/6\n		strokeCap SQUARE\n		fc()\n		sw @_w\n		sc 1,1,0\n		arc 100,100,2*@_radius,2*@_radius,(@_start-3)*hour,(@_stopp-3)*hour\n\napp = new Ring \"a\"",
  c: {
    app: "reset()|start -1|start +1|stopp -1|stopp +1|radius -1|radius +1|width -1|width +1"
  }
};

ID_OlympicRings = {
  v: '2017-04-29',
  k: 'sc bg fc sw arc strokeCap class',
  l: 24,
  b: "class Ring\n	constructor : (@x,@y,@r,@g,@b) ->\n	draw : (start=3,stopp=3,hour=PI/6) ->\n\nolympic = (x=100,y=100,radius=50,d=60,w=10) ->\n\nolympic()",
  a: "class Ring\n	constructor : (@x,@y,@radius, @r,@g,@b) ->\n	draw : (start=3,stopp=3,hour=PI/6) ->\n		sc @r,@g,@b\n		arc @x,@y,@radius,@radius,(start-3)*hour,(stopp-3)*hour\n\nolympic = (x=100,y=100,radius=50,d=60,w=10) ->\n	r1 = new Ring x-d,  y,     radius, 0,0,1\n	r2 = new Ring x,    y,     radius, 0,0,0\n	r3 = new Ring x+d,  y,     radius, 1,0,0\n	r4 = new Ring x-d/2,y+d/3, radius, 1,1,0\n	r5 = new Ring x+d/2,y+d/3, radius, 0,1,0\n\n	strokeCap SQUARE\n	bg 0.5\n	fc()\n	sw w\n\n	r1.draw()\n	r3.draw()\n	r4.draw()\n	r5.draw()\n	r1.draw 2,4\n	r2.draw()\n	r4.draw 12,2\n	r5.draw 8,10\n	r3.draw 6,8\n\nolympic()",
  e: {
    Wikipedia: "https://en.wikipedia.org/wiki/Olympic_symbols"
  }
};

ID_OneDiceHistogram = {
  v: '2017-04-29',
  k: 'fc sc range int random text for operators rect []',
  l: 17,
  b: "# OBS: På grund av random blir bitmapparna inte likadana\n\nh = 50\ncounts = Array(4).fill 150\nfor count,i in counts\n	y = h*i\n	rect 0,y,count,h\n	text y,0,y",
  a: "counts = Array(6).fill 0\ndice = -> int 6 * random()\nfor i in range 1000\n	counts[dice()]++\nh = int 200/6\nsc()\nfor count,i in counts\n	y = h*i\n	fc 1,1,0,0.5\n	sc 1,1,0\n	rect 0,y,count,h-3\n	fc 1,1,0\n	sc()\n	textAlign LEFT,CENTER\n	text i+1, 5,y+h/2\n	textAlign RIGHT,CENTER\n	text count, count-5,y+h/2"
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcTy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsa0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLDhCQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsNkpBSEY7RUFjQSxDQUFBLEVBQUUsMFlBZEY7RUFvQ0EsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLG1GQUFOO0dBckNEOzs7QUF1Q0QsZUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsaUNBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRyx1SkFISDtFQVlBLENBQUEsRUFBRyxxbUJBWkg7RUEyQ0EsQ0FBQSxFQUNDO0lBQUEsU0FBQSxFQUFZLCtDQUFaO0dBNUNEOzs7QUE4Q0QsbUJBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG1EQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsaUtBSEY7RUFhQSxDQUFBLEVBQUUsc1RBYkYiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9PbHltcGljUmluZ1ByZXAgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidzYyBmYyBzdyBhcmMgc3Ryb2tlQ2FwIGNsYXNzJ1xuXHRsOjIxXG5cdGI6XCJcIlwiXG5jbGFzcyBSaW5nIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgIDogLT5cblx0XHRzdXBlclxuXHRkcmF3ICAgOiAtPlxuXHRzdGFydCAgOiAoZCkgLT5cblx0c3RvcHAgIDogKGQpIC0+XG5cdHJhZGl1cyA6IChkKSAtPlxuXHR3aWR0aCAgOiAoZCkgLT5cbmFwcCA9IG5ldyBSaW5nXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIFJpbmcgZXh0ZW5kcyBBcHBsaWNhdGlvblxuXHRyZXNldCA6IC0+XG5cdFx0c3VwZXJcblx0XHRAX3N0YXJ0ID0gM1xuXHRcdEBfc3RvcHAgPSA2XG5cdFx0QF93ID0gNVxuXHRcdEBfcmFkaXVzID0gNTBcblx0c3RhcnQgOiAoZCkgLT4gQF9zdGFydCs9ZFxuXHRzdG9wcCA6IChkKSAtPiBAX3N0b3BwKz1kXG5cdHJhZGl1cyA6IChkKSAtPiBAX3JhZGl1cys9ZFxuXHR3aWR0aCA6IChkKSAtPiBAX3crPWRcblx0ZHJhdyA6IC0+XG5cdFx0aG91ciA9IFBJLzZcblx0XHRzdHJva2VDYXAgU1FVQVJFXG5cdFx0ZmMoKVxuXHRcdHN3IEBfd1xuXHRcdHNjIDEsMSwwXG5cdFx0YXJjIDEwMCwxMDAsMipAX3JhZGl1cywyKkBfcmFkaXVzLChAX3N0YXJ0LTMpKmhvdXIsKEBfc3RvcHAtMykqaG91clxuXG5hcHAgPSBuZXcgUmluZyBcImFcIlxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpfHN0YXJ0IC0xfHN0YXJ0ICsxfHN0b3BwIC0xfHN0b3BwICsxfHJhZGl1cyAtMXxyYWRpdXMgKzF8d2lkdGggLTF8d2lkdGggKzFcIlxuXG5JRF9PbHltcGljUmluZ3MgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidzYyBiZyBmYyBzdyBhcmMgc3Ryb2tlQ2FwIGNsYXNzJ1xuXHRsOjI0XG5cdGI6IFwiXCJcIlxuY2xhc3MgUmluZ1xuXHRjb25zdHJ1Y3RvciA6IChAeCxAeSxAcixAZyxAYikgLT5cblx0ZHJhdyA6IChzdGFydD0zLHN0b3BwPTMsaG91cj1QSS82KSAtPlxuXG5vbHltcGljID0gKHg9MTAwLHk9MTAwLHJhZGl1cz01MCxkPTYwLHc9MTApIC0+XG5cbm9seW1waWMoKVxuXCJcIlwiXG5cdGE6IFwiXCJcIlxuY2xhc3MgUmluZ1xuXHRjb25zdHJ1Y3RvciA6IChAeCxAeSxAcmFkaXVzLCBAcixAZyxAYikgLT5cblx0ZHJhdyA6IChzdGFydD0zLHN0b3BwPTMsaG91cj1QSS82KSAtPlxuXHRcdHNjIEByLEBnLEBiXG5cdFx0YXJjIEB4LEB5LEByYWRpdXMsQHJhZGl1cywoc3RhcnQtMykqaG91ciwoc3RvcHAtMykqaG91clxuXG5vbHltcGljID0gKHg9MTAwLHk9MTAwLHJhZGl1cz01MCxkPTYwLHc9MTApIC0+XG5cdHIxID0gbmV3IFJpbmcgeC1kLCAgeSwgICAgIHJhZGl1cywgMCwwLDFcblx0cjIgPSBuZXcgUmluZyB4LCAgICB5LCAgICAgcmFkaXVzLCAwLDAsMFxuXHRyMyA9IG5ldyBSaW5nIHgrZCwgIHksICAgICByYWRpdXMsIDEsMCwwXG5cdHI0ID0gbmV3IFJpbmcgeC1kLzIseStkLzMsIHJhZGl1cywgMSwxLDBcblx0cjUgPSBuZXcgUmluZyB4K2QvMix5K2QvMywgcmFkaXVzLCAwLDEsMFxuXG5cdHN0cm9rZUNhcCBTUVVBUkVcblx0YmcgMC41XG5cdGZjKClcblx0c3cgd1xuXG5cdHIxLmRyYXcoKVxuXHRyMy5kcmF3KClcblx0cjQuZHJhdygpXG5cdHI1LmRyYXcoKVxuXHRyMS5kcmF3IDIsNFxuXHRyMi5kcmF3KClcblx0cjQuZHJhdyAxMiwyXG5cdHI1LmRyYXcgOCwxMFxuXHRyMy5kcmF3IDYsOFxuXG5vbHltcGljKClcblwiXCJcIlxuXHRlIDpcblx0XHRXaWtpcGVkaWEgOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL09seW1waWNfc3ltYm9sc1wiXG5cbklEX09uZURpY2VIaXN0b2dyYW0gPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidmYyBzYyByYW5nZSBpbnQgcmFuZG9tIHRleHQgZm9yIG9wZXJhdG9ycyByZWN0IFtdJ1xuXHRsOjE3XG5cdGI6XCJcIlwiXG4jIE9CUzogUMOlIGdydW5kIGF2IHJhbmRvbSBibGlyIGJpdG1hcHBhcm5hIGludGUgbGlrYWRhbmFcblxuaCA9IDUwXG5jb3VudHMgPSBBcnJheSg0KS5maWxsIDE1MFxuZm9yIGNvdW50LGkgaW4gY291bnRzXG5cdHkgPSBoKmlcblx0cmVjdCAwLHksY291bnQsaFxuXHR0ZXh0IHksMCx5XG5cIlwiXCJcblx0YTpcIlwiXCJcbmNvdW50cyA9IEFycmF5KDYpLmZpbGwgMFxuZGljZSA9IC0+IGludCA2ICogcmFuZG9tKClcbmZvciBpIGluIHJhbmdlIDEwMDBcblx0Y291bnRzW2RpY2UoKV0rK1xuaCA9IGludCAyMDAvNlxuc2MoKVxuZm9yIGNvdW50LGkgaW4gY291bnRzXG5cdHkgPSBoKmlcblx0ZmMgMSwxLDAsMC41XG5cdHNjIDEsMSwwXG5cdHJlY3QgMCx5LGNvdW50LGgtM1xuXHRmYyAxLDEsMFxuXHRzYygpXG5cdHRleHRBbGlnbiBMRUZULENFTlRFUlxuXHR0ZXh0IGkrMSwgNSx5K2gvMlxuXHR0ZXh0QWxpZ24gUklHSFQsQ0VOVEVSXG5cdHRleHQgY291bnQsIGNvdW50LTUseStoLzJcblwiXCJcIlxuXG4iXX0=
//# sourceURL=C:\github\p5Dojo\coffee\data\O.coffee