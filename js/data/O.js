// Generated by CoffeeScript 1.11.1
var ID_OlympicRingPrep, ID_OlympicRings, ID_OneDiceHistogram;

ID_OlympicRingPrep = {
  v: '2017-04-29',
  k: 'sc fc sw arc angleMode strokeCap class',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcTy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsa0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLHdDQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsNkpBSEY7RUFjQSxDQUFBLEVBQUUsMFlBZEY7RUFvQ0EsQ0FBQSxFQUNDO0lBQUEsR0FBQSxFQUFNLG1GQUFOO0dBckNEOzs7QUF1Q0QsZUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsaUNBREY7RUFFQSxDQUFBLEVBQUUsRUFGRjtFQUdBLENBQUEsRUFBRyx1SkFISDtFQVlBLENBQUEsRUFBRyxxbUJBWkg7RUEyQ0EsQ0FBQSxFQUNDO0lBQUEsU0FBQSxFQUFZLCtDQUFaO0dBNUNEOzs7QUE4Q0QsbUJBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG1EQURGO0VBRUEsQ0FBQSxFQUFFLEVBRkY7RUFHQSxDQUFBLEVBQUUsaUtBSEY7RUFhQSxDQUFBLEVBQUUsc1RBYkYiLCJzb3VyY2VzQ29udGVudCI6WyJJRF9PbHltcGljUmluZ1ByZXAgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRrOidzYyBmYyBzdyBhcmMgYW5nbGVNb2RlIHN0cm9rZUNhcCBjbGFzcydcblx0bDoyMVxuXHRiOlwiXCJcIlxuY2xhc3MgUmluZyBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0ICA6IC0+XG5cdFx0c3VwZXJcblx0ZHJhdyAgIDogLT5cblx0c3RhcnQgIDogKGQpIC0+XG5cdHN0b3BwICA6IChkKSAtPlxuXHRyYWRpdXMgOiAoZCkgLT5cblx0d2lkdGggIDogKGQpIC0+XG5hcHAgPSBuZXcgUmluZ1xuXCJcIlwiXG5cdGE6XCJcIlwiXG5jbGFzcyBSaW5nIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QF9zdGFydCA9IDNcblx0XHRAX3N0b3BwID0gNlxuXHRcdEBfdyA9IDVcblx0XHRAX3JhZGl1cyA9IDUwXG5cdHN0YXJ0IDogKGQpIC0+IEBfc3RhcnQrPWRcblx0c3RvcHAgOiAoZCkgLT4gQF9zdG9wcCs9ZFxuXHRyYWRpdXMgOiAoZCkgLT4gQF9yYWRpdXMrPWRcblx0d2lkdGggOiAoZCkgLT4gQF93Kz1kXG5cdGRyYXcgOiAtPlxuXHRcdGhvdXIgPSBQSS82XG5cdFx0c3Ryb2tlQ2FwIFNRVUFSRVxuXHRcdGZjKClcblx0XHRzdyBAX3dcblx0XHRzYyAxLDEsMFxuXHRcdGFyYyAxMDAsMTAwLDIqQF9yYWRpdXMsMipAX3JhZGl1cywoQF9zdGFydC0zKSpob3VyLChAX3N0b3BwLTMpKmhvdXJcblxuYXBwID0gbmV3IFJpbmcgXCJhXCJcblwiXCJcIlxuXHRjOlxuXHRcdGFwcCA6IFwicmVzZXQoKXxzdGFydCAtMXxzdGFydCArMXxzdG9wcCAtMXxzdG9wcCArMXxyYWRpdXMgLTF8cmFkaXVzICsxfHdpZHRoIC0xfHdpZHRoICsxXCJcblxuSURfT2x5bXBpY1JpbmdzID1cblx0djonMjAxNy0wNC0yOSdcblx0azonc2MgYmcgZmMgc3cgYXJjIHN0cm9rZUNhcCBjbGFzcydcblx0bDoyNFxuXHRiOiBcIlwiXCJcbmNsYXNzIFJpbmdcblx0Y29uc3RydWN0b3IgOiAoQHgsQHksQHIsQGcsQGIpIC0+XG5cdGRyYXcgOiAoc3RhcnQ9MyxzdG9wcD0zLGhvdXI9UEkvNikgLT5cblxub2x5bXBpYyA9ICh4PTEwMCx5PTEwMCxyYWRpdXM9NTAsZD02MCx3PTEwKSAtPlxuXG5vbHltcGljKClcblwiXCJcIlxuXHRhOiBcIlwiXCJcbmNsYXNzIFJpbmdcblx0Y29uc3RydWN0b3IgOiAoQHgsQHksQHJhZGl1cywgQHIsQGcsQGIpIC0+XG5cdGRyYXcgOiAoc3RhcnQ9MyxzdG9wcD0zLGhvdXI9UEkvNikgLT5cblx0XHRzYyBAcixAZyxAYlxuXHRcdGFyYyBAeCxAeSxAcmFkaXVzLEByYWRpdXMsKHN0YXJ0LTMpKmhvdXIsKHN0b3BwLTMpKmhvdXJcblxub2x5bXBpYyA9ICh4PTEwMCx5PTEwMCxyYWRpdXM9NTAsZD02MCx3PTEwKSAtPlxuXHRyMSA9IG5ldyBSaW5nIHgtZCwgIHksICAgICByYWRpdXMsIDAsMCwxXG5cdHIyID0gbmV3IFJpbmcgeCwgICAgeSwgICAgIHJhZGl1cywgMCwwLDBcblx0cjMgPSBuZXcgUmluZyB4K2QsICB5LCAgICAgcmFkaXVzLCAxLDAsMFxuXHRyNCA9IG5ldyBSaW5nIHgtZC8yLHkrZC8zLCByYWRpdXMsIDEsMSwwXG5cdHI1ID0gbmV3IFJpbmcgeCtkLzIseStkLzMsIHJhZGl1cywgMCwxLDBcblxuXHRzdHJva2VDYXAgU1FVQVJFXG5cdGJnIDAuNVxuXHRmYygpXG5cdHN3IHdcblxuXHRyMS5kcmF3KClcblx0cjMuZHJhdygpXG5cdHI0LmRyYXcoKVxuXHRyNS5kcmF3KClcblx0cjEuZHJhdyAyLDRcblx0cjIuZHJhdygpXG5cdHI0LmRyYXcgMTIsMlxuXHRyNS5kcmF3IDgsMTBcblx0cjMuZHJhdyA2LDhcblxub2x5bXBpYygpXG5cIlwiXCJcblx0ZSA6XG5cdFx0V2lraXBlZGlhIDogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9PbHltcGljX3N5bWJvbHNcIlxuXG5JRF9PbmVEaWNlSGlzdG9ncmFtID1cblx0djonMjAxNy0wNC0yOSdcblx0azonZmMgc2MgcmFuZ2UgaW50IHJhbmRvbSB0ZXh0IGZvciBvcGVyYXRvcnMgcmVjdCBbXSdcblx0bDoxN1xuXHRiOlwiXCJcIlxuIyBPQlM6IFDDpSBncnVuZCBhdiByYW5kb20gYmxpciBiaXRtYXBwYXJuYSBpbnRlIGxpa2FkYW5hXG5cbmggPSA1MFxuY291bnRzID0gQXJyYXkoNCkuZmlsbCAxNTBcbmZvciBjb3VudCxpIGluIGNvdW50c1xuXHR5ID0gaCppXG5cdHJlY3QgMCx5LGNvdW50LGhcblx0dGV4dCB5LDAseVxuXCJcIlwiXG5cdGE6XCJcIlwiXG5jb3VudHMgPSBBcnJheSg2KS5maWxsIDBcbmRpY2UgPSAtPiBpbnQgNiAqIHJhbmRvbSgpXG5mb3IgaSBpbiByYW5nZSAxMDAwXG5cdGNvdW50c1tkaWNlKCldKytcbmggPSBpbnQgMjAwLzZcbnNjKClcbmZvciBjb3VudCxpIGluIGNvdW50c1xuXHR5ID0gaCppXG5cdGZjIDEsMSwwLDAuNVxuXHRzYyAxLDEsMFxuXHRyZWN0IDAseSxjb3VudCxoLTNcblx0ZmMgMSwxLDBcblx0c2MoKVxuXHR0ZXh0QWxpZ24gTEVGVCxDRU5URVJcblx0dGV4dCBpKzEsIDUseStoLzJcblx0dGV4dEFsaWduIFJJR0hULENFTlRFUlxuXHR0ZXh0IGNvdW50LCBjb3VudC01LHkraC8yXG5cIlwiXCJcblxuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\O.coffee