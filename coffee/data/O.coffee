ID_OlympicRingPrep =
	v:'2017-04-29'
	b:"""
# LOC:21 sc fc sw # arc strokeCap class extends constructor new @ super ->

class Ring extends Application
	reset  : ->
		super
	draw   : ->
	start  : (d) ->
	stopp  : (d) ->
	radius : (d) ->
	width  : (d) ->
app = new Ring
"""
	a:"""
class Ring extends Application
	reset : ->
		super
		@_start = 3
		@_stopp = 6
		@_w = 5
		@_radius = 50
	start : (d) -> @_start+=d
	stopp : (d) -> @_stopp+=d
	radius : (d) -> @_radius+=d
	width : (d) -> @_w+=d
	draw : ->
		hour = PI/6
		strokeCap SQUARE
		fc()
		sw @_w
		sc 1,1,0
		arc 100,100,2*@_radius,2*@_radius,(@_start-3)*hour,(@_stopp-3)*hour

app = new Ring "a"
"""
	c:
		app : "reset()|start -1|start +1|stopp -1|stopp +1|radius -1|radius +1|width -1|width +1"

