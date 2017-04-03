assert = (a,b=true) -> if not _.isEqual(a, b) then print a + " != " + b

tabcount = (s) ->
  i = 0
  while s[i]=='\t'
    i += 1
  i

count = (s,ch) ->
  arr = s.split(ch)
  arr.length-1

enclose = (s) ->
  if count(s,'=') == 1
    return s    
  arr = s.trim().split(' ')
  arr[0] + ' (' + arr.slice(1).join(' ') + ')'

spacesToTabs = (line) ->
  if line.indexOf('  ') == 0
    return '\t' + spacesToTabs line.substring 2
  if line.indexOf('\t') == 0
    return '\t' + spacesToTabs line.substring 1
  if line.indexOf(' \t') == 0
    return '\t' + spacesToTabs line.substring 2
  line
assert spacesToTabs('    '),'\t\t'
assert spacesToTabs('\t  '),'\t\t'
assert spacesToTabs('  \t'),'\t\t'
assert spacesToTabs(' \t  '),'\t\t'

rtrim = (str) ->
  str.replace /\s\s*$/, ''

# tar bort alla blanka och tabbar
clean = (s) -> s.split(' ').join("").split('\t').join("")

transpile = (code) ->
  lines = code.split '\n'
  if lines[0].indexOf('//ECMA') == 0
    return code
  temp = []
  for line in lines 
    line = spacesToTabs line
    tabs = tabcount line
    if clean(line).length > 0
      temp.push line
  code = temp.join '\n'
  CoffeeScript.compile code