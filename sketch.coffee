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

setMsg = (txt) ->
	msg.val txt
	if txt == ''
		msg.css 'background-color' , '#FFFFFF'
	else
		msg.css 'background-color' , '#FF0000'

grid = ->
	push()
	sc 1
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
	fill fixColor arguments
	rect 0, 0, 200, 200

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
	#print ""
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
	#print res 
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
	c = createCanvas 5+201+5, 5+201 +5+6+ 201 +5+6+ 201+5
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

editor_change = ->
	if _.size(calls) == 0
		call = ""
	else # transpile, draw
		call = calls["draw()"]
	run1()
	run0()
	if msg.val() == '' then compare()

run0 = ->
	b = myCodeMirror.getValue()
	data[chapter][exercise]["b"] = b
	run 0, b + "\n" + call
	if msg.val() == '' then compare()

run1 = -> 
	background 128
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
	translate 5, 5+(1-n) * 212
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
	
	area0 = new Area pixels,GAP,GAP,						  		WIDTH,HEIGHT
	area1 = new Area pixels,GAP,1*(GAP+HEIGHT+6)+GAP, WIDTH,HEIGHT
	area2 = new Area pixels,GAP,2*(GAP+HEIGHT+6)+GAP, WIDTH,HEIGHT

	for i in range WIDTH+1
		for j in range HEIGHT+1
		
			lst1 = area0.getPixel i,j
			r1 = lst1[0]
			g1 = lst1[1]
			b1 = lst1[2]
			lst2 = area1.getPixel i,j
			r2 = lst2[0]
			g2 = lst2[1]
			b2 = lst2[2]
			r = abs r1-r2
			g = abs g1-g2
			b = abs b1-b2

			area2.setPixel i,j,[r,g,b,255] 
		
	updatePixels()

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

	readText : -> 
		x = $('#input').val()
		$('#input').val('')
		x
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