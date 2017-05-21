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
	v:'2017-05-21'
	k:'_.findIndex _.isEqual arguments bg sc fc range for if quad line operators class [] {}'
	l:73
	b:"""
# @blocks: 0 ritas ej. 1 ritas med rgb från position. Övriga tas rgb från @colors.
class Isometric extends Application
	reset : ->
		super
	draw : ->
	box : ->
	sphere : ->
app = new Isometric
"""
	a:"""
class Isometric extends Application
	reset : ->
		super
		@i=0.5
		@j=0.75
		@k=1
		@alpha=1
		@n=10
		@dx=10
		@dy=5
		@w2 = 2*200/4
		@w3 = 3*200/4
		@w4 = 4*200/4
		@clear()
	clear : ->
		@blocks = Array(1000).fill 0
		@colors = [0,0]
	add : (i,j,k,r,g,b) ->
		index = 1
		if arguments.length==6 then index = _.findIndex @colors, (rgb) => _.isEqual rgb,[r,g,b]
		if index == -1
			index = @colors.length
			@colors.push [r,g,b]
		@blocks[@n*@n*i+@n*j+k] = index
	draw : ->
		bg 0.5
		sc()
		@drawBlock index for index in range @n*@n*@n
	drawBlock : (index) ->
		f = (i,j,k) => [@w2+(10-i)*@dx-2*(10-j)*@dy, @w4-(10-j)*@dy-(10-i)*@dx/2 - k*@dy*2]
		q = (a,b,c,d) -> quad a[0],a[1], b[0],b[1], c[0],c[1], d[0],d[1]
		ix=index
		k = ix % @n; ix //= @n
		j = ix % @n; ix //= @n
		i = ix
		block = @blocks[index]
		if not block? or block==0 then return
		[r,g,b] = if block==1 then [i/9,j/9,k/9]	else @colors[block]
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
		@clear()
		for i in range @n
			for j in range @n
				for k in range @n
					tot = 0
					if i in [2,3,4,5,6,7] then tot++
					if j in [2,3,4,5,6,7] then tot++
					if k in [2,3,4,5,6,7] then tot++
					if tot <= 1 then @add i,j,k
	sphere : ->
		@clear()
		for i in range @n
			for j in range @n
				for k in range @n
					if (i-4.5)*(i-4.5) + (j-4.5)*(j-4.5) + (k-4.5)*(k-4.5) < 23 then @add i,j,k, 1,0,0
app = new Isometric "a"

"""
	c:
		app : "reset()|box()|sphere()"
