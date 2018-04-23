LINKS = 
	"p5Dojo"       : "https://github.com/ChristerNilsson/p5Dojo/blob/master/README.md#p5dojo"
	"p5Color"      : "https://christernilsson.github.io/p5Color"
	"Links" 			 : "https://christernilsson.github.io/Lab"

class Menu
	constructor : (@items, @table=null, @branch=[]) ->
		@state = 0
		@chapter = ''
		@exercise = ''
		@calls = {}
	rensa : -> @table.innerHTML = ""
	clear : -> @branch = []

	traverse : (items=@items, level=0, br=[]) ->
		if false == goDeeper @branch,br then return

		if level == 0 # chapter
			for key,i in _.keys items
				if i == @branch[level] or @branch.length == level
					@addTitle key, level, i, br.concat(i), [BLACK,WHITE]
				children = items[key]
				@traverse children, level+1, br.concat i

		if @branch.length == 0
			for text,link of LINKS 
				b = @addCommand text, 0, DARKGREEN, WHITE
				do (link) -> b.onclick = -> window.open(link, '_blank').focus()				

		if level == 1 # exercise
			for key,i in _.keys items
				print 'key',key,items[key].h,@hardness items[key].h
				if i == @branch[level] or @branch.length == level
					@addTitle key, level, i, br.concat(i), @hardness items[key].h
				keywords = items[key].k.split ' '
				keywords.sort()
				@traverse keywords, level+1, br.concat i

		if level == 2 
			# keywords
			for item in items 
				if item != '' then @addTitle item, level, i, br, [BLACK,YELLOW]

			# commands
			@calls = decorate data[@chapter][@exercise].c
			for key of @calls
				if key != 'draw()' then @addCommand key, level, BLUE, YELLOW

			# renew
			if localStorage[@exercise + "/v"]? and localStorage[@exercise + "/v"] != data[@chapter][@exercise].v
				b = @addCommand "Renew", level, RED, WHITE
				b.onclick = ->
					print myCodeMirror.getValue() # Låt stå!
					exercise = data[meny.chapter][meny.exercise]
					myCodeMirror.setValue exercise.b
					localStorage[meny.exercise + "/" + 'v'] = exercise.v
					localStorage[meny.exercise + "/" + 'd'] = exercise.b

			# links
			if @exercise != ''
				for text,link of data[@chapter][@exercise].e
					b = @addCommand text, level, GREEN, BLACK
					do (link) -> b.onclick = -> window.open(link, '_blank').focus()

	handleRow : (b) ->
		tr = document.createElement "tr"
		addCell tr,b,100
		@table.appendChild tr

	lineCount : -> data[@chapter][@exercise].l

	hardness : (h) ->
		print typeof h
		if h==0 then return [WHITE,BLACK]
		if h==1 then return [GREEN,BLACK] 
		if h==2 then return [YELLOW,BLACK]
		if h==3 then return [RED,WHITE]
		[RED,WHITE]

	addTitle : (title,level,i,br,colors=[BLACK,RED]) ->
		print colors
		#print level
		[c1,c2] = colors 

		if level == 2 
			b = makeButton title, level, c1, c2
		else if @branch[level] == i 
			if level == 1
				b = makeButton ' - ' + "#{title} [#{@lineCount()}]", level, c1, c2
			else 
				b = makeButton ' - ' + title, level, c1, c2
		else 
			b = makeButton ' + ' + title, level, c1, c2 
		
		b.branch = br

		b.onclick = => 
			value = b.value[3..]
			if level == 0 then @sel1click value
			if level == 1 then @sel2click value				
			if level == 2 then @sel3click b.value
			if level in [0,1] then @branch = calcBranch @branch, b.branch
			updateTables()

		@handleRow b
		b

	addCommand : (title,level,color1, color2) ->
		b = makeButton title, level, color1, color2
		code = @calls[title]
		b.onclick = -> 
			if run1(code) == true then run0 code
			compare()
		@handleRow b
		b

	exer : -> 
		if @exercise == '' or @exercise == null then return ''
		@exercise.split(' ')[0]	

	setState : (st) ->
		@state = st

		#if st==2 then @calls = data[@chapter][@exercise].c else @calls = {}
		$('#input').hide()
		if _.size(@calls) > 0 then $('#input').show() 
		if st==2 then msg.show() else msg.hide()
		if st==2 then $(".CodeMirror").show() else $(".CodeMirror").hide()

		if st<=1
			@calls = {}
			tableClear()
			bg 0.5

		if st==1 then	@exercise = ""

	sel1click : (chapter) ->
		@chapter = chapter
		@exercise = ""
		@calls = {}
		@setState 1

	sel2click : (exercise) ->
		@exercise = exercise
		if @exer() == ""
			myCodeMirror.setValue ""
			bg 0.5
			return
		@calls = data[@chapter][@exer()].c
		@setState 2

		src = localStorage[@exer() + "/d"]
		if src == undefined or src == null or src == ''
			src = data[@chapter][@exer()].b
			localStorage[@exer() + "/d"] = src
			localStorage[@exer() + "/v"] = data[@chapter][@exer()].v
		myCodeMirror.setValue src

		tableClear()

		calls = data[@chapter][@exer()].c		
		if _.size(calls) > 0 
			code = @calls["draw()"]
		if run1(code) == true
			run0 code 

		myCodeMirror.focus()
		compare()

	sel3click : (keyword) ->
		url = buildLink keyword
		if url?
			win = window.open url, '_blank'
			win.focus()
	