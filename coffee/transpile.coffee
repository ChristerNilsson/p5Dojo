assert = (a,b=true) -> if not _.isEqual(a, b) then print JSON.stringify(a) + " != " + JSON.stringify(b)

spacesToTabs = (line) ->
	if line.indexOf('  ') == 0  then return '\t' + spacesToTabs line.substring 2
	if line.indexOf('\t') == 0  then return '\t' + spacesToTabs line.substring 1
	if line.indexOf(' \t') == 0 then return '\t' + spacesToTabs line.substring 2
	line
assert spacesToTabs('    '), '\t\t'
assert spacesToTabs('\t  '), '\t\t'
assert spacesToTabs('  \t'), '\t\t'
assert spacesToTabs(' \t  '),'\t\t'

transpile = (code) ->
	lines = code.split '\n'
	temp = (spacesToTabs(line) for line in lines)
	code = temp.join '\n'
	CoffeeScript.compile code, {bare: true}

#rtrim = (str) -> str.replace /\s\s*$/, ''

# tar bort alla blanka och tabbar
#clean = (s) -> s.split(' ').join("").split('\t').join("")

#tabcount = (s) ->
#	i = 0
#	while s[i]=='\t'
#		i += 1
#	i

#count = (s,ch) ->
#	arr = s.split(ch)
#	arr.length-1

#enclose = (s) ->
#	if count(s,'=') == 1 then return s
#	arr = s.trim().split(' ')
#	arr[0] + ' (' + arr.slice(1).join(' ') + ')'