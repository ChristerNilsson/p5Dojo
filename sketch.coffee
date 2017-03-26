# todo: Code Mirror hanterar inte toggleComment via Ctrl+/

myCodeMirror = null
msg = null
sel1 = null
sel2 = null
sel3 = null
chapter = ""
exercise = ""
call = ''
calls = {}

gap = 0
block = 0
buffer = [[],[],[]]

setMsg = (txt) ->
	msg.val txt
	msg.css 'background-color', if txt == '' then '#FFFFFF' else '#FF0000'

grid = ->
	push()
	sc 0.5
	for i in range 11
		line 0, 20 * i, 200, 20 * i
		line 20 * i, 0, 20 * i, 200
	pop()

myprint = -> print Array.prototype.slice.call(arguments).join(" ")

co = -> fixColor arguments

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

bg = ->
	#fill fixColor arguments
	background fixColor arguments
	#rect 0, 0, 200, 200

fc = ->
	n = arguments.length
	if n == 0
		noFill()
	else 
		fill fixColor arguments

sc = ->
	n = arguments.length
	if n == 0
		noStroke()
	else 
		stroke fixColor arguments

bgc = (cc) -> bg cc%2, int(cc/2)%2, int(cc/4) 
fcc = (cc) -> fc cc%2, int(cc/2)%2, int(cc/4) 
scc = (cc) -> sc cc%2, int(cc/2)%2, int(cc/4) 
tcc = (cc) -> fcc [7,7,0,0,7,0,0,0][cc] 

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
	calls = {}
	fillSelect sel2, data[chapter]
	exercise = _.keys(data[chapter])[0]
	sel2.val(exercise).change()

sel2change = (sel) ->
	exercise = sel.value
	call = ""
	calls = decorate data[chapter][exercise]["c"]

	setLinks()
	calls_without_draw = _.omit calls, 'draw()'

	fillSelect sel3, calls_without_draw	 
	myCodeMirror.setValue data[chapter][exercise]["b"]

	tableClear()

	if calls?
		sel3.val("draw()").change()
		call = calls["draw()"]

	run1()
	run0()
	myCodeMirror.focus() 
	compare()

sel3click = (sel) ->
	if calls? then call = calls[sel.value]
	run1()
	run0()
	myCodeMirror.focus()
	compare()

setLinks = ->
	linksClear()
	linkAppend links,	"https://github.com/ChristerNilsson/p5Dojo/blob/master/README.md", "p5Dojo"
	linkAppend links,	"https://p5js.org/reference", "p5"
	linkAppend links,	"http://coffeescript.org", "Coffeescript"
	linkAppend links,	"https://www.w3schools.com/js", "Javascript"
	linkAppend links,	"https://github.com/ChristerNilsson/Nilsson/blob/master/README.md", "Nilsson"
	linkAppend links,	"https://christernilsson.github.io/p5Color", "p5Color"
	linkAppend links,	"http://underscorejs.org/", "Underscore"

	for text,link of data[chapter][exercise]["e"]
		linkAppend links,link,text

linksClear = -> $("#links tr").remove()

d = (s) -> "'" + s + "'"
dd = (s) -> '"' + s + '"'

linkAppend = (t, link, text) -> # exakt en kolumn
	row = t.insertRow -1
	cell1 = row.insertCell -1
	s = '<a href=' + d(link)  
	s += ' target=' + d('_blank')
	s += ' onmouseover=' + d('this.style.color=' + dd('yellow') + ';') 
	s += ' onmouseout='  + d('this.style.color=' + dd('black') + ';') 
	s += '>' 
	s += text 
	s += '</a>'
	cell1.innerHTML = s		

decorate = (dict) -> # {klocka: "draw|incr_hour"}
	if dict==undefined then return {}
	if dict==null then return {}
	res = {}
	for objekt, s of dict
		methods = s.split "|"
		res["draw()"] = objekt + ".draw(); " + objekt + ".store()"
		res[method] = objekt + "." + method + "; " + objekt + ".draw(); " + objekt + ".store()" for method in methods
	res

changeLayout = ->
	w = $(window).width()
	$(".CodeMirror").width w-425
	$("#canvas").css {top: 0, left: 205, position:'absolute'}	 # w-215
	$("#msg").width w-430

resizeTimer = 0
$(window).resize ->
		clearTimeout resizeTimer
		resizeTimer = setTimeout changeLayout, 10

setup = ->
	c = createCanvas 5+201+5, 3*201+20

	gap = 5 * width * 4
	block = 201 * width * 4

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
	myCodeMirror.on "change", editor_change
	
	#background 128
	#bg 0.75
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

editor_change = ->
	if _.size(calls) == 0
		call = ""
	else # transpile, draw
		call = calls["draw()"]
	run1()
	run0()

run0 = ->
	b = myCodeMirror.getValue()
	data[chapter][exercise]["b"] = b
	run 0, b + "\n" + call
	if msg.val() == '' then compare()

run1 = -> 
	#background 128
	#bg 0.25
	run 1, data[chapter][exercise]["a"] + "\n" + call

reset = ->
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
	translate 5,5
	reset()

	setMsg ""
	try 
		code = transpile coffee
		try
			eval code
			buffer[1-n] = store()
		catch e
			setMsg e.stack.split('\n')[0]
		pop()
		return true
	catch e
		pop()
		setMsg e.name + ": " + e.message
		return false 

store = ->
	loadPixels()
	pixels[gap...gap + block]

fetch = (buffer,y0) ->
	loadPixels()
	for i in range block
		pixels[gap + (gap+block)*y0 + i] = buffer[i]
	updatePixels()	

fix_frames = ->
	loadPixels()
	for k in range 4
		for i in range gap
			pixels[(gap+block)*k+i] = 128-64
	for j in range height # 3*201+20
		for i in range 20
			pixels[j*width*4+i] = 128-64
			pixels[j*width*4+206*4+i] = 128-64
	updatePixels()	

compare = ->  # Lägg en timer på denna. Bör vänta någon sekund
	a = buffer[0]
	b = buffer[1]
	c = a[..]

	for i in range block/4
		i4 = 4*i
		c[i4+0] = abs c[i4+0] - b[i4+0]  	
		c[i4+1] = abs c[i4+1] - b[i4+1] 	
		c[i4+2] = abs c[i4+2] - b[i4+2]  	
		c[i4+3] = 255

	fetch a, 0 
	fetch b, 1 
	fetch c, 2
	fix_frames()

class Application
	constructor : (@name) ->
		name = chapter + "/" + exercise + "/" + @name
		obj = localStorage.getItem name 
		if obj
			dict = JSON.parse obj
			for key,value of dict
				@[key] = value
			
	store : -> 
		name = chapter + "/" + exercise + "/" + @name
		obj = JSON.stringify @
		localStorage.setItem name, obj
		fillTable chapter + "/" + exercise + "/a", chapter + "/" + exercise + "/b"
 
	draw : -> 
		textSize 32
		textAlign CENTER,CENTER
		fc 1,1,0
		text "Define draw!",100,100

	reset : ->
		for key in _.keys @
			if key != "name" then delete @[key]

	readText : -> $('#input').val()
	readInt : -> parseInt @readText()
	readFloat : -> parseFloat @readText()

tableClear = -> $("#tabell tr").remove()

tableAppend = (t, call, expected, actual) -> # exakt tre kolumner
	sp = "&nbsp;"
	row = t.insertRow -1

	cell1 = row.insertCell -1
	cell1.innerHTML = sp + call + sp
	cell1.style.backgroundColor = '#FFFF00'

	cell2 = row.insertCell -1
	cell2.innerHTML = sp + JSON.stringify(expected) + sp
	cell2.style.backgroundColor = '#00FF00'

	cell3 = row.insertCell -1
	cell3.innerHTML = sp + JSON.stringify(actual) + sp
	cell3.style.backgroundColor = if _.isEqual(expected, actual) then '#00FF00' else '#FF0000'

fillTable = (a,b) ->
	a = JSON.parse localStorage[a]
	b = JSON.parse localStorage[b]
	tableClear()
	keys = []
	keys.push key for key,value of a
	keys.push key for key,value of b
	sort keys
	keys = _.uniq keys

	for key in keys
		if key != 'name'
			tableAppend tabell, "@" + key,a[key],b[key]