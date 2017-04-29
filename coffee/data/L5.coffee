ID100 = # GrowingCircles:
	v:'2017-04-29'
	b:"# LOC:6 range fc circle # for in lerp\n"
	a:"""
for i in range 10
	fc i/10.0,0,0
	x = 10+20*i
	y = 10
	r = i
	circle x,y,r
"""

ID101 = # ShrinkingCircles:
	v:'2017-04-29'
	b:"# LOC:4 range fc circle # for in lerp\n"
	a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	r = 10 * i
	circle 100,100, r
"""

ID102 = # RedCone:
	v:'2017-04-29'
	b:"# LOC:6 range fc circle # for in lerp\n"
	a:"""
for i in range 10,0,-1
	fc i/10.0,0,0
	x = 10*i
	y = 10*i
	r = 10*i
	circle x,y,r
"""

ID103 = # HorizontalLine:
	v:'2017-04-29'
	b: "# LOC:2 sc # line\n"
	a: """
sc 1,0,1
line 10,70, 190,70
"""

ID104 = # VerticalLine:
	v:'2017-04-29'
	b: "# LOC:3 sc sw # line\n"
	a: """
sc 1,1,0
sw 10
line 110,30, 110,170
"""

ID105 = # Line:
	v:'2017-04-29'
	b: "# LOC:2 sc # line\n"
	a: """
sc 1,1,0
line 20,0, 200,20
"""

ID106 = # Grid:
	v:'2017-04-29'
	b:"# LOC:5 sc sw range # for in line \n"
	a:"""
sc 1,1,0
sw 2
for i in range 10,200,10
	line 10,i,190,i
	line i,190, i,10
"""

ID107 = # Skislope:
	v:'2017-04-29'
	b: "# LOC:4 bg sc range # for in lerp line"
	a: """
bg 0
sc 1,0,0
for i in range 21
	line i*10,0, 200,i*10
"""

ID108 = # SuperCircle:
	v:'2017-04-29'
	b: """
# LOC:7 bg range # * + - for in line
"""
	a: """
bg 0
for i in range 41
	ni = 5 * i
	line ni,     200,   0, 100+ni
	line ni,       0,   0, 100-ni
	line 100+ni, 200, 200, 200-ni
	line 100+ni,   0, 200, ni
"""
	e:
		PietHein : "https://sv.wikipedia.org/wiki/Piet_Hein"
		SuperEllips : "https://sv.wikipedia.org/wiki/Superellips"
		SergelsTorg : "https://www.google.se/search?q=sergels+torg&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjGpt-jmanTAhWSKCwKHSsMDcQQ_AUICCgB&biw=925&bih=919#tbm=isch&q=superellips+sergels+torg&imgrc=rK6GQHPFiDHQGM:"