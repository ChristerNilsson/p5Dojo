// Generated by CoffeeScript 1.11.1
var ID001, ID002, ID003, ID004, ID005, ID006, ID007, ID008, ID009, ID010, ID011, ID012, ID013, ID014, ID015, ID016;

ID001 = {
  v: '2017-05-02',
  k: 'bg circle fc sc sw line lerp',
  b: "# LOC:30  (David Larsson)\n",
  a: "bg 0, 1, 0, 0.5\nfc 1, 0, 0\ncircle 10, 10, 5\ncircle 20, 20, 10\nfor i in range 10\n	x = lerp 10, 20, i\n	y = x\n	r = lerp 5, 10, i\n	circle x, y, r\nfc 0, 1, 1\ncircle 190, 10, 5\ncircle 180, 20, 10\nfor i in range 10\n	x = lerp 190, 180, i\n	y = lerp 10, 20, i\n	r = lerp 5, 10, i\n	circle x, y, r\nfc 1\ncircle 100, 100, 50\nfc 0\ncircle 80, 80, 10\ncircle 120, 80, 10\nsc 1, 1, 0\nsw 5\nline 70, 105, 80, 120\nline 80, 120, 115, 120\nline 115, 120, 130, 105\nfc 1, 0, 0\nsc 1, 0, 0\ncircle 100, 100, 10\n"
};

ID002 = {
  v: '2017-05-02',
  k: 'circle fc sc triangle',
  b: "# LOC:12 (Sabrina Larsson)\n",
  a: "bg 0,1,0\nfc 1,0,0\nsc 1,0,0\ntriangle 60,140,100,60,140,140\nfc 1\nsc 1\ncircle 60,140,10\ncircle 80,140,10\ncircle 100,140,10\ncircle 120,140,10\ncircle 140,140,10\ncircle 100,60,10"
};

ID003 = {
  v: '2017-05-02',
  k: 'circle fc line sc triangle',
  b: "# LOC:21  (David Larsson)\n",
  a: "fc 1\ncircle 100, 150, 50\ncircle 100, 70, 40\nfc 0\ncircle 80, 60, 8\ncircle 120, 60, 8\ncircle 85, 90, 6\ncircle 95, 95, 6\ncircle 115, 90, 6\ncircle 105, 95, 6\nfc 1, 0, 0, 0.5\ntriangle 100, 65, 90, 80, 105, 75\nsc 1, 1, 0\nsw 3\nline 50, 140, 30, 90\nline 35, 100, 40, 80\nline 140, 140, 170, 90\nline 160, 105, 155, 100\nfc 1\nsc 1\nrect 2, 180, 196, 20"
};

ID004 = {
  v: '2017-05-02',
  k: 'bg circle fc line rect quad sc triangle',
  b: "# LOC:35  (Sabrina Larsson)\n",
  a: "bg 0\nfc 0, 1, 0\nsc 0, 1, 0\ntriangle 100, 100, 180, 160, 20, 160\ntriangle 100, 60, 160, 120, 40, 120\ntriangle 100, 40, 140, 80, 60, 80\nfc 0.5\nsc 0.5\nrect 80, 160, 40, 20\nfc 1, 1, 0\nsc 1, 1, 0\nquad 100, 0, 120, 20, 100, 40, 80, 20\nrect 85, 5, 30, 30\nsc 1, 1, 0\nline 80, 60, 140, 120\nline 60, 100, 120, 160\nfc 1, 0, 0\nsc 1, 0, 0\ncircle 80, 100, 5\ncircle 140, 140, 5\ncircle 100, 60, 5\ncircle 60, 160, 5\ncircle 100, 120, 5\nfc 1\nsc 1\nrect 0, 180, 200, 20\ncircle 20, 20, 5\ncircle 40, 40, 5\ncircle 10, 80, 5\ncircle 30, 140, 5\ncircle 50, 100, 5\ncircle 120, 50, 5\ncircle 160, 20, 5\ncircle 180, 80, 5\ncircle 160, 130, 5\ncircle 190, 180, 5"
};

ID005 = {
  v: '2017-05-02',
  k: 'bg circle ellipse fc rect quad sc triangle',
  b: "# LOC:18 (Sabrina Larsson)\n",
  a: "bg 0,0,1\nfc 1,0,0\nsc 1,0,0\nellipse 100,50,60,70\nrect 60,20,30,10\nquad 140,10,145,20,120,25,115,20\nfc 0\nsc 0\ncircle 50,25,10\nrect 70,40,60,10\ncircle 140,20,10\nsc 1,1,0\nrect 100,45,5,5\nfc 0.5\nsc 0.5\nrect 60,80,80,20\nrect 80,100,40,60\ntriangle 100,140,0,200,200,200"
};

ID006 = {
  v: '2017-05-02',
  k: 'bg circle dist fc lerp map sc',
  b: "# LOC:10 \n",
  a: "bg 0\nfc 1\nsc()\nfor i in range 10\n	x = lerp 10,30,i\n	for j in range 10\n		y = lerp 10,30,j\n		d = dist 100,100,x,y\n		r = map(d,0,150,1,20)/2\n		circle x,y,r"
};

ID007 = {
  v: '2017-05-02',
  k: 'bg circle dist fill map noStroke sin',
  b: "# LOC:10 \n",
  a: "bg 0\nfill 255\nnoStroke()\nfor i in range 20\n	for j in range 20\n		x = i*200/20+5\n		y = j*200/20+5\n		r = map(sin(i*PI/20),-1,1,1,3) * map(sin(j*PI/20),-1,1,1,3) / 2\n		circle x,y,r"
};

ID008 = {
  v: '2017-05-02',
  k: 'circle colorMode fill map noStroke sin PI',
  b: "# LOC:9 \n",
  a: "colorMode HSB,360,100,100\nnoStroke()\nbg 0\nfor i in range 21\n	fill map(i,0,20,0,360),100,100\n	a = map i,0,20,0,2*PI\n	x = 10*i\n	y = map sin(a),-1,1,0,200\n	circle x,y,3"
};

ID009 = {
  v: '2017-05-02',
  k: 'bg circle colorMode cos fc map PI sc sin',
  b: "# LOC:10 \n",
  a: "bg 0\ncolorMode HSB,360,100,100\nfor i in range 20\n	r=map i,0,19,0,360\n	fill r,255,255\n	a=map i,0,20,0,2*PI\n	sc()\n	x=map cos(a),-1,1,0,200\n	y=map sin(a),-1,1,0,200\n	circle x,y,3"
};

ID010 = {
  v: '2017-05-02',
  k: 'bg circle colorMode cos fill map noStroke translate sin PI',
  b: "# LOC:12 \n",
  a: "bg 0\nnoStroke()\ncolorMode HSB,360,100,100\ntranslate 100,100\nfor i in range 20\n	for j in range 11\n		fill map(i,0,20,0,360),255,255\n		a = map i,0,20,0,2*PI\n		x = map cos(a),-1,1,-j*10,j*10\n		y = map sin(a),-1,1,-j*10,j*10\n		r = 3\n		circle x,y,r"
};

ID011 = {
  v: '2017-05-02',
  k: 'circle colorMode cos fill map noStroke PI sin translate',
  b: "# LOC:12 \n",
  a: "bg 0\nnoStroke()\ncolorMode HSB,360,100,100\ntranslate 100,100\nfor i in range 20\n	fill map(i,0,20,0,360),255,255\n	a = map i,0,20,0,2*PI\n	for j in range 11\n		x = map cos(a),-1,1,-j*10,j*10\n		y = map sin(a),-1,1,-j*10,j*10\n		r = map(j,0,10,0,10)/2\n		circle x,y,r"
};

ID012 = {
  v: '2017-05-02',
  k: 'circle cos map PI push pop rotate sin translate',
  b: "# LOC:17 \n",
  a: "colorMode HSB,360,100,100\nsc()\nbg 0\ntranslate 100,100\nfor i in range 20\n	r = map i,0,20,0,360\n	a=map i,0,20,0,2*PI\n	for j in range 11\n		push()\n		rotate map j,0,10,0,360\n		fill r,255,255\n		x=map cos(a),-1,1,-j*10,j*10\n		y=map sin(a),-1,1,-j*10,j*10\n		circle x,y,j/2\n		pop()"
};

ID013 = {
  v: '2017-05-02',
  k: 'circle lerp',
  b: "# LOC:6 \n",
  a: "fc 1\nfor i in range 15\n	x=5+10*i\n	y=5+lerp(0,lerp(0,1,i),i)\n	circle x,y,5"
};

ID014 = {
  v: '2017-05-02',
  k: 'bg circle cos fc sc sin',
  b: "# LOC:6 -> \n",
  a: "bg 0.5, 0, 0\nsc()\nfc 1\nfor i in range 100\n	x = 100 + cos(i) * i\n	y = 100 + sin(i) * i\n	circle x, y, 5"
};

ID015 = {
  v: '2017-05-02',
  k: 'bg circle cos fc map sc sin',
  b: "# LOC:7 -> \n",
  a: "bg 0.5, 0, 0\nsc()\nfc 1\nfor i in range 100\n	x = 100 + cos(i) * i\n	y = 100 + sin(i) * i\n	speed = i/10.0\n	r = map sin(5*speed), -1, 1, 2, 5\n	circle x, y, r"
};

ID016 = {
  v: '2017-05-02',
  k: 'bg fc sc sw circle arc',
  b: "# LOC:37 (Isabel T)\n",
  a: "bg 0.5,0.8,1\n\nsw 11\nfc()\nsc 0.9,0.1,0.1\narc 100,97,190,180,PI,PI\nsc 0.9,0.4,0.1\narc 100,107,180,180,PI,PI\nsc 1,0.75,0\narc 100,117,170,180,PI,PI\nsc 0.4,0.75,0.2\narc 100,127,160,180,PI,PI\nsc 0.1,0.65,0.6\narc 100,137,150,180,PI,PI\nsc 0.15,0.45,0.65\narc 100,147,140,180,PI,PI\nsc 0.55,0.25,0.55\narc 100,157,130,180,PI,PI\n\nsw 0\nfc 1\ncircle 0,108,10\ncircle 10,120,13\ncircle 15,130,10\ncircle 20,145,13\ncircle 35,157,12\ncircle 37,170,12\ncircle 25,175,10\ncircle 10,170,10\ncircle 5,150,26\n\ncircle 200,108,10\ncircle 190,120,13\ncircle 185,130,10\ncircle 180,145,13\ncircle 165,157,12\ncircle 163,170,12\ncircle 175,175,10\ncircle 190,170,10\ncircle 195,150,26"
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTDAuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uIiwic291cmNlcyI6WyJjb2ZmZWVcXGRhdGFcXEwwLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBQSxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSw4QkFERjtFQUVBLENBQUEsRUFBRSw2QkFGRjtFQUdBLENBQUEsRUFBRSwrZkFIRjs7O0FBcUNELEtBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLHVCQURGO0VBRUEsQ0FBQSxFQUFFLDhCQUZGO0VBR0EsQ0FBQSxFQUFFLHlMQUhGOzs7QUFrQkQsS0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsNEJBREY7RUFFQSxDQUFBLEVBQUUsNkJBRkY7RUFHQSxDQUFBLEVBQUUseVdBSEY7OztBQTJCRCxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx5Q0FERjtFQUVBLENBQUEsRUFBRSwrQkFGRjtFQUdBLENBQUEsRUFBRSx3cEJBSEY7OztBQTBDRCxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSw0Q0FERjtFQUVBLENBQUEsRUFBRSw4QkFGRjtFQUdBLENBQUEsRUFBRSx5UkFIRjs7O0FBd0JELEtBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLCtCQURGO0VBRUEsQ0FBQSxFQUFFLGFBRkY7RUFHQSxDQUFBLEVBQUUsbUtBSEY7OztBQWdCRCxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxzQ0FERjtFQUVBLENBQUEsRUFBRSxhQUZGO0VBR0EsQ0FBQSxFQUFFLDBMQUhGOzs7QUFlRCxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSwyQ0FERjtFQUVBLENBQUEsRUFBRSxZQUZGO0VBR0EsQ0FBQSxFQUFFLCtLQUhGOzs7QUFlRCxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSwwQ0FERjtFQUVBLENBQUEsRUFBRSxhQUZGO0VBR0EsQ0FBQSxFQUFFLDBMQUhGOzs7QUFnQkQsS0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsNERBREY7RUFFQSxDQUFBLEVBQUUsYUFGRjtFQUdBLENBQUEsRUFBRSwrUEFIRjs7O0FBa0JELEtBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLHlEQURGO0VBRUEsQ0FBQSxFQUFFLGFBRkY7RUFHQSxDQUFBLEVBQUUsOFFBSEY7OztBQWtCRCxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxpREFERjtFQUVBLENBQUEsRUFBRSxhQUZGO0VBR0EsQ0FBQSxFQUFFLGdTQUhGOzs7QUFxQkQsS0FBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUUsYUFERjtFQUVBLENBQUEsRUFBRyxZQUZIO0VBR0EsQ0FBQSxFQUFHLCtFQUhIOzs7QUFXRCxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx5QkFERjtFQUVBLENBQUEsRUFBRyxlQUZIO0VBR0EsQ0FBQSxFQUFHLDZHQUhIOzs7QUFhRCxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSw2QkFERjtFQUVBLENBQUEsRUFBRyxlQUZIO0VBR0EsQ0FBQSxFQUFHLGtLQUhIOzs7QUFlRCxLQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSx3QkFERjtFQUVBLENBQUEsRUFBRSx1QkFGRjtFQUdBLENBQUEsRUFBRSx5cUJBSEYiLCJzb3VyY2VzQ29udGVudCI6WyJJRDAwMSA9ICMgY2xvd246XHJcblx0djonMjAxNy0wNS0wMidcclxuXHRrOidiZyBjaXJjbGUgZmMgc2Mgc3cgbGluZSBsZXJwJ1xyXG5cdGI6XCIjIExPQzozMCAgKERhdmlkIExhcnNzb24pXFxuXCJcclxuXHRhOlwiXCJcIlxyXG5iZyAwLCAxLCAwLCAwLjVcclxuZmMgMSwgMCwgMFxyXG5jaXJjbGUgMTAsIDEwLCA1XHJcbmNpcmNsZSAyMCwgMjAsIDEwXHJcbmZvciBpIGluIHJhbmdlIDEwXHJcblx0eCA9IGxlcnAgMTAsIDIwLCBpXHJcblx0eSA9IHhcclxuXHRyID0gbGVycCA1LCAxMCwgaVxyXG5cdGNpcmNsZSB4LCB5LCByXHJcbmZjIDAsIDEsIDFcclxuY2lyY2xlIDE5MCwgMTAsIDVcclxuY2lyY2xlIDE4MCwgMjAsIDEwXHJcbmZvciBpIGluIHJhbmdlIDEwXHJcblx0eCA9IGxlcnAgMTkwLCAxODAsIGlcclxuXHR5ID0gbGVycCAxMCwgMjAsIGlcclxuXHRyID0gbGVycCA1LCAxMCwgaVxyXG5cdGNpcmNsZSB4LCB5LCByXHJcbmZjIDFcclxuY2lyY2xlIDEwMCwgMTAwLCA1MFxyXG5mYyAwXHJcbmNpcmNsZSA4MCwgODAsIDEwXHJcbmNpcmNsZSAxMjAsIDgwLCAxMFxyXG5zYyAxLCAxLCAwXHJcbnN3IDVcclxubGluZSA3MCwgMTA1LCA4MCwgMTIwXHJcbmxpbmUgODAsIDEyMCwgMTE1LCAxMjBcclxubGluZSAxMTUsIDEyMCwgMTMwLCAxMDVcclxuZmMgMSwgMCwgMFxyXG5zYyAxLCAwLCAwXHJcbmNpcmNsZSAxMDAsIDEwMCwgMTBcclxuXHJcblwiXCJcIlxyXG5cclxuSUQwMDIgPSAjdG9tdGVsdXZhOlxyXG5cdHY6JzIwMTctMDUtMDInXHJcblx0azonY2lyY2xlIGZjIHNjIHRyaWFuZ2xlJ1xyXG5cdGI6XCIjIExPQzoxMiAoU2FicmluYSBMYXJzc29uKVxcblwiXHJcblx0YTpcIlwiXCJcclxuYmcgMCwxLDBcclxuZmMgMSwwLDBcclxuc2MgMSwwLDBcclxudHJpYW5nbGUgNjAsMTQwLDEwMCw2MCwxNDAsMTQwXHJcbmZjIDFcclxuc2MgMVxyXG5jaXJjbGUgNjAsMTQwLDEwXHJcbmNpcmNsZSA4MCwxNDAsMTBcclxuY2lyY2xlIDEwMCwxNDAsMTBcclxuY2lyY2xlIDEyMCwxNDAsMTBcclxuY2lyY2xlIDE0MCwxNDAsMTBcclxuY2lyY2xlIDEwMCw2MCwxMFxyXG5cIlwiXCJcclxuXHJcbklEMDAzID0gIyBzbm93bWFuOlxyXG5cdHY6JzIwMTctMDUtMDInXHJcblx0azonY2lyY2xlIGZjIGxpbmUgc2MgdHJpYW5nbGUnXHJcblx0YjpcIiMgTE9DOjIxICAoRGF2aWQgTGFyc3NvbilcXG5cIlxyXG5cdGE6XCJcIlwiXHJcbmZjIDFcclxuY2lyY2xlIDEwMCwgMTUwLCA1MFxyXG5jaXJjbGUgMTAwLCA3MCwgNDBcclxuZmMgMFxyXG5jaXJjbGUgODAsIDYwLCA4XHJcbmNpcmNsZSAxMjAsIDYwLCA4XHJcbmNpcmNsZSA4NSwgOTAsIDZcclxuY2lyY2xlIDk1LCA5NSwgNlxyXG5jaXJjbGUgMTE1LCA5MCwgNlxyXG5jaXJjbGUgMTA1LCA5NSwgNlxyXG5mYyAxLCAwLCAwLCAwLjVcclxudHJpYW5nbGUgMTAwLCA2NSwgOTAsIDgwLCAxMDUsIDc1XHJcbnNjIDEsIDEsIDBcclxuc3cgM1xyXG5saW5lIDUwLCAxNDAsIDMwLCA5MFxyXG5saW5lIDM1LCAxMDAsIDQwLCA4MFxyXG5saW5lIDE0MCwgMTQwLCAxNzAsIDkwXHJcbmxpbmUgMTYwLCAxMDUsIDE1NSwgMTAwXHJcbmZjIDFcclxuc2MgMVxyXG5yZWN0IDIsIDE4MCwgMTk2LCAyMFxyXG5cIlwiXCJcclxuXHJcbklEMDA0ID0gIyBjaHJpc3RtYXNUcmVlOlxyXG5cdHY6JzIwMTctMDUtMDInXHJcblx0azonYmcgY2lyY2xlIGZjIGxpbmUgcmVjdCBxdWFkIHNjIHRyaWFuZ2xlJ1xyXG5cdGI6XCIjIExPQzozNSAgKFNhYnJpbmEgTGFyc3NvbilcXG5cIlxyXG5cdGE6XCJcIlwiXHJcbmJnIDBcclxuZmMgMCwgMSwgMFxyXG5zYyAwLCAxLCAwXHJcbnRyaWFuZ2xlIDEwMCwgMTAwLCAxODAsIDE2MCwgMjAsIDE2MFxyXG50cmlhbmdsZSAxMDAsIDYwLCAxNjAsIDEyMCwgNDAsIDEyMFxyXG50cmlhbmdsZSAxMDAsIDQwLCAxNDAsIDgwLCA2MCwgODBcclxuZmMgMC41XHJcbnNjIDAuNVxyXG5yZWN0IDgwLCAxNjAsIDQwLCAyMFxyXG5mYyAxLCAxLCAwXHJcbnNjIDEsIDEsIDBcclxucXVhZCAxMDAsIDAsIDEyMCwgMjAsIDEwMCwgNDAsIDgwLCAyMFxyXG5yZWN0IDg1LCA1LCAzMCwgMzBcclxuc2MgMSwgMSwgMFxyXG5saW5lIDgwLCA2MCwgMTQwLCAxMjBcclxubGluZSA2MCwgMTAwLCAxMjAsIDE2MFxyXG5mYyAxLCAwLCAwXHJcbnNjIDEsIDAsIDBcclxuY2lyY2xlIDgwLCAxMDAsIDVcclxuY2lyY2xlIDE0MCwgMTQwLCA1XHJcbmNpcmNsZSAxMDAsIDYwLCA1XHJcbmNpcmNsZSA2MCwgMTYwLCA1XHJcbmNpcmNsZSAxMDAsIDEyMCwgNVxyXG5mYyAxXHJcbnNjIDFcclxucmVjdCAwLCAxODAsIDIwMCwgMjBcclxuY2lyY2xlIDIwLCAyMCwgNVxyXG5jaXJjbGUgNDAsIDQwLCA1XHJcbmNpcmNsZSAxMCwgODAsIDVcclxuY2lyY2xlIDMwLCAxNDAsIDVcclxuY2lyY2xlIDUwLCAxMDAsIDVcclxuY2lyY2xlIDEyMCwgNTAsIDVcclxuY2lyY2xlIDE2MCwgMjAsIDVcclxuY2lyY2xlIDE4MCwgODAsIDVcclxuY2lyY2xlIDE2MCwgMTMwLCA1XHJcbmNpcmNsZSAxOTAsIDE4MCwgNVxyXG5cIlwiXCJcclxuXHJcbklEMDA1ID0gIyBzYW50YTpcclxuXHR2OicyMDE3LTA1LTAyJ1xyXG5cdGs6J2JnIGNpcmNsZSBlbGxpcHNlIGZjIHJlY3QgcXVhZCBzYyB0cmlhbmdsZSdcclxuXHRiOlwiIyBMT0M6MTggKFNhYnJpbmEgTGFyc3NvbilcXG5cIlxyXG5cdGE6XCJcIlwiXHJcbmJnIDAsMCwxXHJcbmZjIDEsMCwwXHJcbnNjIDEsMCwwXHJcbmVsbGlwc2UgMTAwLDUwLDYwLDcwXHJcbnJlY3QgNjAsMjAsMzAsMTBcclxucXVhZCAxNDAsMTAsMTQ1LDIwLDEyMCwyNSwxMTUsMjBcclxuZmMgMFxyXG5zYyAwXHJcbmNpcmNsZSA1MCwyNSwxMFxyXG5yZWN0IDcwLDQwLDYwLDEwXHJcbmNpcmNsZSAxNDAsMjAsMTBcclxuc2MgMSwxLDBcclxucmVjdCAxMDAsNDUsNSw1XHJcbmZjIDAuNVxyXG5zYyAwLjVcclxucmVjdCA2MCw4MCw4MCwyMFxyXG5yZWN0IDgwLDEwMCw0MCw2MFxyXG50cmlhbmdsZSAxMDAsMTQwLDAsMjAwLDIwMCwyMDBcclxuXCJcIlwiXHJcblxyXG5JRDAwNj0gIyBkaXN0OlxyXG5cdHY6JzIwMTctMDUtMDInXHJcblx0azonYmcgY2lyY2xlIGRpc3QgZmMgbGVycCBtYXAgc2MnXHJcblx0YjpcIiMgTE9DOjEwIFxcblwiXHJcblx0YTpcIlwiXCJcclxuYmcgMFxyXG5mYyAxXHJcbnNjKClcclxuZm9yIGkgaW4gcmFuZ2UgMTBcclxuXHR4ID0gbGVycCAxMCwzMCxpXHJcblx0Zm9yIGogaW4gcmFuZ2UgMTBcclxuXHRcdHkgPSBsZXJwIDEwLDMwLGpcclxuXHRcdGQgPSBkaXN0IDEwMCwxMDAseCx5XHJcblx0XHRyID0gbWFwKGQsMCwxNTAsMSwyMCkvMlxyXG5cdFx0Y2lyY2xlIHgseSxyXHJcblwiXCJcIlxyXG5cclxuSUQwMDcgPSAjIGJ1bGdlOlxyXG5cdHY6JzIwMTctMDUtMDInXHJcblx0azonYmcgY2lyY2xlIGRpc3QgZmlsbCBtYXAgbm9TdHJva2Ugc2luJ1xyXG5cdGI6XCIjIExPQzoxMCBcXG5cIlxyXG5cdGE6XCJcIlwiXHJcbmJnIDBcclxuZmlsbCAyNTVcclxubm9TdHJva2UoKVxyXG5mb3IgaSBpbiByYW5nZSAyMFxyXG5cdGZvciBqIGluIHJhbmdlIDIwXHJcblx0XHR4ID0gaSoyMDAvMjArNVxyXG5cdFx0eSA9IGoqMjAwLzIwKzVcclxuXHRcdHIgPSBtYXAoc2luKGkqUEkvMjApLC0xLDEsMSwzKSAqIG1hcChzaW4oaipQSS8yMCksLTEsMSwxLDMpIC8gMlxyXG5cdFx0Y2lyY2xlIHgseSxyXHJcblwiXCJcIlxyXG5cclxuSUQwMDggPSAjIHdhdmU6XHJcblx0djonMjAxNy0wNS0wMidcclxuXHRrOidjaXJjbGUgY29sb3JNb2RlIGZpbGwgbWFwIG5vU3Ryb2tlIHNpbiBQSSdcclxuXHRiOlwiIyBMT0M6OSBcXG5cIlxyXG5cdGE6XCJcIlwiXHJcbmNvbG9yTW9kZSBIU0IsMzYwLDEwMCwxMDBcclxubm9TdHJva2UoKVxyXG5iZyAwXHJcbmZvciBpIGluIHJhbmdlIDIxXHJcblx0ZmlsbCBtYXAoaSwwLDIwLDAsMzYwKSwxMDAsMTAwXHJcblx0YSA9IG1hcCBpLDAsMjAsMCwyKlBJXHJcblx0eCA9IDEwKmlcclxuXHR5ID0gbWFwIHNpbihhKSwtMSwxLDAsMjAwXHJcblx0Y2lyY2xlIHgseSwzXHJcblwiXCJcIlxyXG5cclxuSUQwMDkgPSAjIGNpcmNsZTpcclxuXHR2OicyMDE3LTA1LTAyJ1xyXG5cdGs6J2JnIGNpcmNsZSBjb2xvck1vZGUgY29zIGZjIG1hcCBQSSBzYyBzaW4nXHJcblx0YjpcIiMgTE9DOjEwIFxcblwiXHJcblx0YTpcIlwiXCJcclxuYmcgMFxyXG5jb2xvck1vZGUgSFNCLDM2MCwxMDAsMTAwXHJcbmZvciBpIGluIHJhbmdlIDIwXHJcblx0cj1tYXAgaSwwLDE5LDAsMzYwXHJcblx0ZmlsbCByLDI1NSwyNTVcclxuXHRhPW1hcCBpLDAsMjAsMCwyKlBJXHJcblx0c2MoKVxyXG5cdHg9bWFwIGNvcyhhKSwtMSwxLDAsMjAwXHJcblx0eT1tYXAgc2luKGEpLC0xLDEsMCwyMDBcclxuXHRjaXJjbGUgeCx5LDNcclxuXCJcIlwiXHJcblxyXG5JRDAxMCA9ICMgY2lyY2xlczpcclxuXHR2OicyMDE3LTA1LTAyJ1xyXG5cdGs6J2JnIGNpcmNsZSBjb2xvck1vZGUgY29zIGZpbGwgbWFwIG5vU3Ryb2tlIHRyYW5zbGF0ZSBzaW4gUEknXHJcblx0YjpcIiMgTE9DOjEyIFxcblwiXHJcblx0YTpcIlwiXCJcclxuYmcgMFxyXG5ub1N0cm9rZSgpXHJcbmNvbG9yTW9kZSBIU0IsMzYwLDEwMCwxMDBcclxudHJhbnNsYXRlIDEwMCwxMDBcclxuZm9yIGkgaW4gcmFuZ2UgMjBcclxuXHRmb3IgaiBpbiByYW5nZSAxMVxyXG5cdFx0ZmlsbCBtYXAoaSwwLDIwLDAsMzYwKSwyNTUsMjU1XHJcblx0XHRhID0gbWFwIGksMCwyMCwwLDIqUElcclxuXHRcdHggPSBtYXAgY29zKGEpLC0xLDEsLWoqMTAsaioxMFxyXG5cdFx0eSA9IG1hcCBzaW4oYSksLTEsMSwtaioxMCxqKjEwXHJcblx0XHRyID0gM1xyXG5cdFx0Y2lyY2xlIHgseSxyXHJcblwiXCJcIlxyXG5cclxuSUQwMTEgPSAjIHNpemVkX2NpcmNsZXM6XHJcblx0djonMjAxNy0wNS0wMidcclxuXHRrOidjaXJjbGUgY29sb3JNb2RlIGNvcyBmaWxsIG1hcCBub1N0cm9rZSBQSSBzaW4gdHJhbnNsYXRlJ1xyXG5cdGI6XCIjIExPQzoxMiBcXG5cIlxyXG5cdGE6XCJcIlwiXHJcbmJnIDBcclxubm9TdHJva2UoKVxyXG5jb2xvck1vZGUgSFNCLDM2MCwxMDAsMTAwXHJcbnRyYW5zbGF0ZSAxMDAsMTAwXHJcbmZvciBpIGluIHJhbmdlIDIwXHJcblx0ZmlsbCBtYXAoaSwwLDIwLDAsMzYwKSwyNTUsMjU1XHJcblx0YSA9IG1hcCBpLDAsMjAsMCwyKlBJXHJcblx0Zm9yIGogaW4gcmFuZ2UgMTFcclxuXHRcdHggPSBtYXAgY29zKGEpLC0xLDEsLWoqMTAsaioxMFxyXG5cdFx0eSA9IG1hcCBzaW4oYSksLTEsMSwtaioxMCxqKjEwXHJcblx0XHRyID0gbWFwKGosMCwxMCwwLDEwKS8yXHJcblx0XHRjaXJjbGUgeCx5LHJcclxuXCJcIlwiXHJcblxyXG5JRDAxMiA9ICMgcm90YXRlZF9jaXJjbGVzOlxyXG5cdHY6JzIwMTctMDUtMDInXHJcblx0azonY2lyY2xlIGNvcyBtYXAgUEkgcHVzaCBwb3Agcm90YXRlIHNpbiB0cmFuc2xhdGUnXHJcblx0YjpcIiMgTE9DOjE3IFxcblwiXHJcblx0YTpcIlwiXCJcclxuY29sb3JNb2RlIEhTQiwzNjAsMTAwLDEwMFxyXG5zYygpXHJcbmJnIDBcclxudHJhbnNsYXRlIDEwMCwxMDBcclxuZm9yIGkgaW4gcmFuZ2UgMjBcclxuXHRyID0gbWFwIGksMCwyMCwwLDM2MFxyXG5cdGE9bWFwIGksMCwyMCwwLDIqUElcclxuXHRmb3IgaiBpbiByYW5nZSAxMVxyXG5cdFx0cHVzaCgpXHJcblx0XHRyb3RhdGUgbWFwIGosMCwxMCwwLDM2MFxyXG5cdFx0ZmlsbCByLDI1NSwyNTVcclxuXHRcdHg9bWFwIGNvcyhhKSwtMSwxLC1qKjEwLGoqMTBcclxuXHRcdHk9bWFwIHNpbihhKSwtMSwxLC1qKjEwLGoqMTBcclxuXHRcdGNpcmNsZSB4LHksai8yXHJcblx0XHRwb3AoKVxyXG5cIlwiXCJcclxuXHJcbklEMDEzID0gIyBncmF2aXR5IDpcclxuXHR2OicyMDE3LTA1LTAyJ1xyXG5cdGs6J2NpcmNsZSBsZXJwJ1xyXG5cdGI6IFwiIyBMT0M6NiBcXG5cIlxyXG5cdGE6IFwiXCJcIlxyXG5mYyAxXHJcbmZvciBpIGluIHJhbmdlIDE1XHJcblx0eD01KzEwKmlcclxuXHR5PTUrbGVycCgwLGxlcnAoMCwxLGkpLGkpXHJcblx0Y2lyY2xlIHgseSw1XHJcblwiXCJcIlxyXG5cclxuSUQwMTQgPSAjIGh5cG5vdGljQSA6XHJcblx0djonMjAxNy0wNS0wMidcclxuXHRrOidiZyBjaXJjbGUgY29zIGZjIHNjIHNpbidcclxuXHRiOiBcIiMgTE9DOjYgLT4gXFxuXCJcclxuXHRhOiBcIlwiXCJcclxuYmcgMC41LCAwLCAwXHJcbnNjKClcclxuZmMgMVxyXG5mb3IgaSBpbiByYW5nZSAxMDBcclxuXHR4ID0gMTAwICsgY29zKGkpICogaVxyXG5cdHkgPSAxMDAgKyBzaW4oaSkgKiBpXHJcblx0Y2lyY2xlIHgsIHksIDVcclxuXCJcIlwiXHJcblxyXG5JRDAxNSA9ICMgaHlwbm90aWNCIDpcclxuXHR2OicyMDE3LTA1LTAyJ1xyXG5cdGs6J2JnIGNpcmNsZSBjb3MgZmMgbWFwIHNjIHNpbidcclxuXHRiOiBcIiMgTE9DOjcgLT4gXFxuXCJcclxuXHRhOiBcIlwiXCJcclxuYmcgMC41LCAwLCAwXHJcbnNjKClcclxuZmMgMVxyXG5mb3IgaSBpbiByYW5nZSAxMDBcclxuXHR4ID0gMTAwICsgY29zKGkpICogaVxyXG5cdHkgPSAxMDAgKyBzaW4oaSkgKiBpXHJcblx0c3BlZWQgPSBpLzEwLjBcclxuXHRyID0gbWFwIHNpbig1KnNwZWVkKSwgLTEsIDEsIDIsIDVcclxuXHRjaXJjbGUgeCwgeSwgclxyXG5cIlwiXCJcclxuXHJcbklEMDE2ID0gIyBSYWluYm93IDpcclxuXHR2OicyMDE3LTA1LTAyJ1xyXG5cdGs6J2JnIGZjIHNjIHN3IGNpcmNsZSBhcmMnXHJcblx0YjpcIiMgTE9DOjM3IChJc2FiZWwgVClcXG5cIlxyXG5cdGE6XCJcIlwiXHJcbmJnIDAuNSwwLjgsMVxyXG5cclxuc3cgMTFcclxuZmMoKVxyXG5zYyAwLjksMC4xLDAuMVxyXG5hcmMgMTAwLDk3LDE5MCwxODAsUEksUElcclxuc2MgMC45LDAuNCwwLjFcclxuYXJjIDEwMCwxMDcsMTgwLDE4MCxQSSxQSVxyXG5zYyAxLDAuNzUsMFxyXG5hcmMgMTAwLDExNywxNzAsMTgwLFBJLFBJXHJcbnNjIDAuNCwwLjc1LDAuMlxyXG5hcmMgMTAwLDEyNywxNjAsMTgwLFBJLFBJXHJcbnNjIDAuMSwwLjY1LDAuNlxyXG5hcmMgMTAwLDEzNywxNTAsMTgwLFBJLFBJXHJcbnNjIDAuMTUsMC40NSwwLjY1XHJcbmFyYyAxMDAsMTQ3LDE0MCwxODAsUEksUElcclxuc2MgMC41NSwwLjI1LDAuNTVcclxuYXJjIDEwMCwxNTcsMTMwLDE4MCxQSSxQSVxyXG5cclxuc3cgMFxyXG5mYyAxXHJcbmNpcmNsZSAwLDEwOCwxMFxyXG5jaXJjbGUgMTAsMTIwLDEzXHJcbmNpcmNsZSAxNSwxMzAsMTBcclxuY2lyY2xlIDIwLDE0NSwxM1xyXG5jaXJjbGUgMzUsMTU3LDEyXHJcbmNpcmNsZSAzNywxNzAsMTJcclxuY2lyY2xlIDI1LDE3NSwxMFxyXG5jaXJjbGUgMTAsMTcwLDEwXHJcbmNpcmNsZSA1LDE1MCwyNlxyXG5cclxuY2lyY2xlIDIwMCwxMDgsMTBcclxuY2lyY2xlIDE5MCwxMjAsMTNcclxuY2lyY2xlIDE4NSwxMzAsMTBcclxuY2lyY2xlIDE4MCwxNDUsMTNcclxuY2lyY2xlIDE2NSwxNTcsMTJcclxuY2lyY2xlIDE2MywxNzAsMTJcclxuY2lyY2xlIDE3NSwxNzUsMTBcclxuY2lyY2xlIDE5MCwxNzAsMTBcclxuY2lyY2xlIDE5NSwxNTAsMjZcclxuXCJcIlwiIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\L0.coffee