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
					@addTitle key, level, i, br.concat i
				children = items[key]
				@traverse children, level+1, br.concat i

		if level == 1 # exercise
			for key,i in _.keys items
				if i == @branch[level] or @branch.length == level
					@addTitle key, level, i, br.concat i
				keywords = items[key].k.split ' '
				keywords.sort()
				@traverse keywords, level+1, br.concat i

		if level == 2 
			# keywords
			for item in items 
				@addTitle item, level, i, br

			# commands
			@calls = decorate data[@chapter][@exercise].c
			for key of @calls
				if key != 'draw()'
					@addCommand key, level, i, br

	handleRow : (b) ->
		tr = document.createElement "tr"
		addCell tr,b,100
		@table.appendChild tr

	addTitle : (title,level,i,br) ->
		if level == 2 then b = makeButton title, BLACK,YELLOW
		else if @branch[level] == i then b = makeButton title, WHITE, BLACK
		else b = makeButton title, BLACK, WHITE
		b.style.width = '205px'
		b.style.textAlign = 'left'
		b.branch = br
		b.style.paddingLeft = 10*level + "px"

		b.onclick = => 
			if level == 0 then @sel1click b.value
			if level == 1 
				if b.style.backgroundColor == 'rgb(255, 255, 255)'
					@sel2click ""
				else
					@sel2click b.value					
			if level == 2 then @sel3click b.value
			if level in [0,1] then @branch = calcBranch @branch, b.branch
			updateTables()

		@handleRow b
		b

	addCommand : (title,level,i,br) ->
		b = makeButton title, BLUE,YELLOW
		b.style.width = '205px'
		b.style.textAlign = 'left'
		b.style.paddingLeft = 10*level + "px"
		code = @calls[title]
		b.onclick = -> 
			if run1(code) == true
				run0(code)
			compare()
		@handleRow b
		b

	setState : (st) ->
		@state = st

		if st==2 then $('#input').show() else $('#input').hide()
		if st==2 then msg.show() else msg.hide()
		if st==2 then $(".CodeMirror").show() else $(".CodeMirror").hide()

		if st<=1
			tableClear()
			linksClear()
			setLinks()
			bg 0.5

		if st==1 then	@exercise = ""

	sel1click : (chapter) ->
		@chapter = chapter
		@exercise = ""
		@calls = {}
		@setState 1

	sel2click : (exercise) ->
		@exercise = exercise
		if @exercise == ""
			myCodeMirror.setValue ""
			bg 0.5
			return

		@setState 2

		src = localStorage[@exercise + "/d"]
		if src == undefined or src == null or src == ''
			src = data[@chapter][@exercise].b
			localStorage[@exercise + "/d"] = src
			localStorage[@exercise + "/v"] = data[@chapter][@exercise].v
		myCodeMirror.setValue src

		if localStorage[@exercise + "/v"]? and localStorage[@exercise + "/v"] != data[@chapter][@exercise].v
			renew.show()
		else
			renew.hide()

		tableClear()

		code = @calls["draw()"]

		run1 code
		run0 code 
		myCodeMirror.focus()
		compare()

	sel3click : (keyword) ->
		url = buildLink keyword
		if url?
			win = window.open url, '_blank'
			win.focus()
	