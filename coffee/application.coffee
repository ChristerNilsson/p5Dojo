class Application

	constructor : (@_name='b') ->

		classes = {}
		classes[klass.name] = klass for klass in @classes()

		_name = chapter + "/" + exercise + "/" + @_name
		obj = localStorage.getItem _name
		if obj
			for key,value of JSON.parse obj
				@[key] = @deserialize value,classes
		print @

	classes : -> []

	deserialize : (obj,classes) ->
		#if _.isNull(obj) then return null
		#if _.isNumber(obj) then return obj
		#if _.isString(obj) then return obj
		if _.isObject(obj)
			if _.isArray(obj) then return (@deserialize(item,classes) for item in obj) # array
			if '_type' in _.keys(obj)
				if classes[obj["_type"]] == undefined
					print "Please define classes : -> [" + obj["_type"] + "] in your Application"
					return
				o = _.create classes[obj["_type"]].prototype, {}
				for key,value of obj
					o[key] = @deserialize(value,classes) if key != '_type'
				return o
			else # dict
				res = {}
				for key,value of obj
					res[key] = @deserialize(value,classes)
				return res
		return obj # catches Number, String, Boolean, null etc

	draw : ->

	mark : (obj=@) ->
		#print 'mark',obj
		if _.isArray(obj) then return	(@mark(item) for item in obj) # array
		if _.isObject(obj)
			#print 1
			obj['_type'] = obj.constructor.name if obj.constructor.name != 'Object'
			#print obj['_type']
			#print 2
			for value in _.values obj # annars kommer metoderna med.
				@mark value

	mousePressed : (mx,my) -> # print "mousePressed", mx, mx

	store : ->
		_name = chapter + "/" + exercise + "/" + @_name
		@mark()
		#print @
		obj = JSON.stringify @
		#print obj
		localStorage.setItem _name, obj
		fillTable chapter + "/" + exercise + "/a", chapter + "/" + exercise + "/b"

	readText : -> $('#input').val()
	readInt : -> parseInt @readText()
	readFloat : -> parseFloat @readText()
	reset :  ->
		for key in _.keys @
			if key != "_name" then delete @[key]
