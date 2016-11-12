function assert(a,b) {
  if (a!=b) {
    console.log(a + " != " + b)
  }
}

function tabcount(s) {
  var i=0;
  while (s[i]=='\t') i+=1
  return i
}

function count(s,ch) {
  var arr = s.split(ch)
  return arr.length-1
}

function enclose(s) {
  if (count(s,'=')==1) return s    
  var arr = s.trim().split(' ')
  return arr[0] + ' (' + arr.slice(1).join(' ') + ')'
}

function spacesToTabs(line) {
  if (line.indexOf('  ')==0) return '\t' + spacesToTabs(line.substring(2))
  if (line.indexOf('\t')==0) return '\t' + spacesToTabs(line.substring(1))
  if (line.indexOf(' \t')==0) return '\t' + spacesToTabs(line.substring(2))
  return line
}  
assert(spacesToTabs('    '),'\t\t')
assert(spacesToTabs('\t  '),'\t\t')
assert(spacesToTabs('  \t'),'\t\t')
assert(spacesToTabs(' \t  '),'\t\t')

function rtrim (str) {
  return str.replace(/\s\s*$/, '');
}

// tar bort alla blanka, tabbar och kommentarer
function clean(s) {
  s = s.split(' ').join("")
  s = s.split('\t').join("")
  var pos = s.indexOf("#")
  if (pos>=0) s = s.substr(0,pos)
  return s
}

function transpile(code) {
  var lines = code.split('\n')
  if (lines[0].indexOf('//ECMA') == 0) return code
  var temp = []
  for (var line of lines) {
    line = spacesToTabs(line)
    tabs = tabcount(line)
    if (clean(line).length > 0) {
      //indents.push(tabs)
      //temp.push(line.substr(tabs))
      temp.push(line)
    }
  } 
  code = temp.join('\n')
  console.log(code)
  return CoffeeScript.compile(code)
}

function xxx_transpile(code) {
  var lines = code.split('\n')
  if (lines[0].indexOf('//ECMA')==0) return code
  var res = []
  var indents = []
  var temp = []
  for (var line of lines) {
    line = spacesToTabs(line)
    tabs = tabcount(line)
    if (clean(line).length > 0) {
      indents.push(tabs)
      temp.push(line.substr(tabs))
    }
  } 
  lines = temp
  indents.push(0)
  
  for (var i=0; i<lines.length; i++) {
    var line = lines[i]
    var pos = line.indexOf("//")
    if (pos>=0) line = line.substr(0,pos)
    //console.log('['+line+']')
    
    var s = line.split('@').join("this.")
    var s = s.split('\t').join("")

    s = rtrim(s) 
    var firstWord = s.split(' ')[0]
    if (s=='' || s[0]=='/') {
      res.push(Array(indents[i]).join("  ")+s)
    } else if (s.indexOf('=>') != -1)  { // arrow function
      var arr = s.split('=>')
      res.push('function f(' + arr[0] + ') { return ' + arr[1] +'}')
    } else {
      var indent = indents[i+1] - indents[i]
      if (firstWord!='function' && firstWord!='else'  && firstWord!='loopa') {
        s = Array(indents[i]+1).join("  ") + enclose(s)
      }
      if (firstWord == 'elif') {
        s = s.replace('elif','else if')
      } else if (firstWord == 'loopa') {
        var arr = s.split(" ")
        var n = 10
        if (arr.length>=3) {
          n=arr[2]
        }
        s = "for (var " + arr[1] + " of range(" + n + "))"
      }
      if (indent==0) res.push(s)
      if (indent==1) res.push(s + ' {')                   
      if (indent < 0)  res.push(s+Array(-indent+1).join(" }"))
    }  
  }
  for (var l of res) {
    console.log(l)
  }
  return res.join("\n")
}
