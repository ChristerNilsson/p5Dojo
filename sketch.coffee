myCodeMirror = null
msg = ""
sel1=null
sel2=null
sel3=null
chapter=""
exercise=""
call = ''
expectedResult = 0

setMsg = (txt) ->
	msg.val txt
	if txt == ''
		msg.css 'background-color' , '#FFFFFF'
	else
		msg.css 'background-color' , '#FF0000'

grid = () ->
	push()
	sc 1
	for i in range 11
		line 0, 20 * i, 200, 20 * i
		line 20 * i, 0, 20 * i, 200
	pop()

myprint = () ->
	print Array.prototype.slice.call(arguments).join(" ")

co = () -> fixColor arguments

ip = (y1,y2,x,x1,x2) ->
	if arguments.length == 3
		x1=0
		x2=9
	map x,x1,x2,y1,y2

fixColor = (args) ->
	n = args.length
	r=0
	g=0
	b=0
	a=1
	if n == 1
		r = args[0]
		g = r
		b = r
	else if n == 3
		r = args[0]
		g = args[1]
		b = args[2]
	else if n == 4
		r = args[0]
		g = args[1]
		b = args[2]
		a = args[3]		
	color 255 * r, 255 * g, 255 * b, 255 * a

bg = () ->
	fill fixColor arguments
	rect 0, 0, 200, 200

fc = () ->
	n = arguments.length
	if n == 0
		noFill()
	else 
		fill fixColor arguments

sc = () ->
	n = arguments.length
	if n == 0
		noStroke()
	else 
		stroke fixColor arguments

sw = (n) -> strokeWeight n

circle = (x,y,r) -> ellipse x,y,2*r,2*r
rd = (vinkel) -> rotate radians vinkel
range = _.range

fillSelect = (sel, dict) ->
	sel.empty()
	for key of dict
		sel.append($("<option>").attr('value', key).text(key))

sel1change = (sel) ->
	chapter = sel.value
	exercise = ""
	call = ""
	fillSelect sel2, data[chapter]
	exercise = _.keys(data[chapter])[0]
	sel2.val(exercise).change()

sel2change = (sel) ->
	exercise = sel.value
	call = ""
	fillSelect sel3, data[chapter][exercise]["c"]	 
		
	a = data[chapter][exercise]["a"]
	a = transpile a
	run 1, a

	b = data[chapter][exercise]["b"]
	myCodeMirror.setValue b
	myCodeMirror.focus() 
	compare()

	calls = data[chapter][exercise]["c"]
	if calls
		call = _.keys(calls)[0]
		sel3.val(call).change()

sel3change = (sel) ->
	call = sel.value
	expectedResult = data[chapter][exercise]["c"][sel.value]

	a = data[chapter][exercise]["a"]
	#a = transpile a
	run 1, a + "\n" + call

	b = data[chapter][exercise]["b"]
	run0()
	myCodeMirror.focus()
	compare()

changeLayout = () ->
	w = $(window).width()
	$(".CodeMirror").width w-430
	$("#canvas").css {top: 0, left: w-215, position:'absolute'}	 
	$("#msg").width w-435

resizeTimer = 0
$(window).resize () ->
		clearTimeout resizeTimer
		resizeTimer = setTimeout changeLayout, 10

setup = ->
	c = createCanvas 5+201+5, 5+201+5+201+5+201+5
	pixelDensity 1
	c.parent 'canvas'
	
	msg = $('#msg')
 
	sel1 = $('#sel1')
	sel2 = $('#sel2')
	sel3 = $('#sel3')

	fillSelect sel1, data

window.onbeforeunload = ->
	return if document.URL.indexOf("record") == -1 
	res = []
	for key1,chapter of data
		for key2,exercise of chapter
			if exercise.d
				res.push "### #{key1} ### #{key2}\n"
				for s,i in exercise.d
					res.push "=== #{i}\n"
					res.push s+"\n"
	blob = new Blob res, {type: "text/plain;charset=utf-8"}
	saveAs blob, "recording.txt"
	true

window.onload = ->

	ta = document.getElementById "code"

	myCodeMirror = CodeMirror.fromTextArea document.getElementById("code"), {
		lineNumbers: true,
		mode: "coffeescript",
		keyMap: "sublime",
		theme: "dracula",
		autoCloseBrackets: true,
		lineWiseCopyCut: true,
		tabSize: 2,
		indentWithTabs: true,
	}
	
	$(".CodeMirror").css 'font-size',"16pt"
	myCodeMirror.on "change", run0

	help = createA 'https://github.com/ChristerNilsson/p5Dojo/blob/master/README.md', 'Help', '_blank'
	help.position 10,640

	p5Color = createA 'https://christernilsson.github.io/p5Color', 'Color', '_blank'
	p5Color.position 50,640

	ref = createA 'https://p5js.org/reference', 'Reference', '_blank'
	ref.position 90,640
	
	background 128
	run 0, ""
	run 1, ""

	chapter = _.keys(data)[0]
	sel1.val(chapter).change()
	exercise = _.keys(data[chapter])[0]
	sel2.val(exercise).change()
	
	myCodeMirror.focus()
	window.resizeTo 1000,750
	changeLayout()

saveToKeyStorage = (b) ->
	s = ""
	for line in b.split '\n'
		if line.indexOf("#") != 0
			s += line
	place = data[chapter][exercise] 
	if !place.d 
		place.d = []
	place.d.push s

run0 = ->
	background 128
	b = myCodeMirror.getValue()
	data[chapter][exercise]["b"] = b
	if window.f != null
		window.f = null
	run1()
	if run 0, b + "\n" + call
		saveToKeyStorage b
	if msg.val() == ''
		compare()

run1 = ->
	a = data[chapter][exercise]["a"] 
	run 1, a + "\n" + call

reset = () ->
	colorMode RGB,255
	angleMode RADIANS
	bg 0
	fc 0
	sc 1
	grid()

run = (n, coffee) ->
	resetMatrix()
	rectMode CORNER
	push()
	translate 5, 5+n * 206
	reset()

	setMsg ""
	try 
		code = transpile coffee
		try
			eval code
		catch e
			setMsg e.stack.split('\n')[0]
		pop()
		return true
	catch e
		pop()
		setMsg e.name + ": " + e.message
		return false 

compare = ->
	
	GAP = 5
	WIDTH = 201
	HEIGHT = 201
	
	loadPixels()
	
	area1 = new Area pixels,GAP,GAP,								WIDTH,HEIGHT
	area2 = new Area pixels,GAP,1*(GAP+HEIGHT)+GAP, WIDTH,HEIGHT
	area3 = new Area pixels,GAP,2*(GAP+HEIGHT)+GAP, WIDTH,HEIGHT
 
	count = 0
	
	for i in range WIDTH+1
		for j in range HEIGHT+1
		
			lst1 = area1.getPixel i,j
			r1 = lst1[0]
			g1 = lst1[1]
			b1 = lst1[2]
			lst2 = area2.getPixel i,j
			r2 = lst2[0]
			g2 = lst2[1]
			b2 = lst2[2]
			r = abs r1-r2
			g = abs g1-g2
			b = abs b1-b2

			area3.setPixel i,j,[r,g,b,255] 
			if r+g+b > 9 # t ex whiteTriangle i motsatt riktning
				count += 1
		
	updatePixels()
	count
