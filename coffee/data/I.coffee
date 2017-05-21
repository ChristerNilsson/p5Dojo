ID_IndianSun =
	v:'2017-04-29'
	k:'range line sin cos radians for if constrain operators class'
	l:10
	b:"""
class IndianSun extends Application
	reset : ->
		super
	draw : ->
	mousePressed : (mx,my) ->
app = new IndianSun
"""
	a:"""
class IndianSun extends Application
	reset : ->
		super
		@n = 5
	draw : ->
		points = ([100+100*cos(i*radians 360/@n), 100+100*sin(i*radians 360/@n)] for i in range @n)
		for [x1,y1] in points
			for [x2,y2] in points
				line x1,y1,x2,y2
	mousePressed : (mx,my) -> @n = constrain @n + (if my < 100 then 1 else -1), 3, 20

app = new IndianSun "a"
"""
	c:
		app : "reset()"
	e:
		Kojo : "http://www.kogics.net/codesketch?id=28"

ID_Isometric =
	v:'2017-05-20'
	k:'bg sc fc range for if quad line operators class [] {}'
	l:67
	b:"""
class Isometric extends Application
	reset : (@i=0.5, @j=0.75, @k=1, @alpha=1) ->
	draw : ->
	box : ->
	sphere : ->
app = new Isometric
"""
	a:"""
class Isometric extends Application
	reset : (@i=0.5, @j=0.75, @k=1, @alpha=1) ->
		@n=10
		@dx=10
		@dy=5
		@blocks = {}
		@w2 = 2*200/4
		@w3 = 3*200/4
		@w4 = 4*200/4
		@r=1
		@g=1
		@b=1
	setColor : (@r,@g,@b) ->
	add : (i,j,k) -> @blocks[@n*@n*i+@n*j+k] = [@r,@g,@b]
	draw : ->
		bg 0.5
		sc()
		@drawBlock index for index in range @n*@n*@n
	drawBlock : (index) ->
		f = (i,j,k) =>
			i = 10-i
			j = 10-j
			[@w2+i*@dx-2*j*@dy, @w4-j*@dy-i*@dx/2 - k*@dy*2]
		q = (a,b,c,d) -> quad a[0],a[1], b[0],b[1], c[0],c[1], d[0],d[1]
		block = @blocks[index]
		if not block? then return
		[r,g,b] = block
		k = index % @n; index //= @n
		j = index % @n; index //= @n
		i = index
		p0 = f i,  j,  k # egentligen osynlig
		p1 = f i+1,j,  k
		p2 = f i,  j+1,k
		p3 = f i+1,j+1,k
		p4 = f i  ,j,  k+1
		p5 = f i+1,j,  k+1
		p6 = f i  ,j+1,k+1
		p7 = f i+1,j+1,k+1
		fc r*@k,g*@k,b*@k,@alpha
		q p4,p5,p7,p6 # roof
		fc r*@j,g*@j,b*@j,@alpha
		q p2,p6,p7,p3 # left
		fc r*@i,g*@i,b*@i,@alpha
		q p1,p3,p7,p5 # right
	grid : ->
		for i in range @n+1
			line @w2+@dx*i, @w4-@dy*i,     @dx*i, @w3-@dy*i
			line @w2-@dx*i, @w4-@dy*i, @w4-@dx*i, @w3-@dy*i
	box : ->
		@blocks = {}
		for i in range @n
			for j in range @n
				for k in range @n
					tot = 0
					if i in [2,3,4,5,6,7] then tot++
					if j in [2,3,4,5,6,7] then tot++
					if k in [2,3,4,5,6,7] then tot++
					if tot <= 1
						@setColor i/10,j/10,k/10
						@add i,j,k
	sphere : ->
		@blocks = {}
		for i in range @n
			for j in range @n
				for k in range @n
					@setColor i/(@n-1),j/(@n-1),k/(@n-1)
					if (i-4.5)*(i-4.5) + (j-4.5)*(j-4.5) + (k-4.5)*(k-4.5) < 23 then @add i,j,k

app = new Isometric "a"
"""
	c:
		app : "reset()|box()|sphere()"
