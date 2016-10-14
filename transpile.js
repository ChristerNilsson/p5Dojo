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
  while (true) {
    if (line.indexOf('  ')==0) {
      line = line.replace('  ','\t')
    } else if (line.indexOf(' \t')==0) {
      line = line.replace(' \t','\t')
    } else {
      return line
    }
  }
}

function transpile(code) {
  var lines = code.split('\n')
  var res = []
  var indents = []
  for (var line of lines) {
    line = spacesToTabs(line)
    indents.push(tabcount(line))
  }  
  indents.push(0)
  
  for (var i=0; i<lines.length; i++) {
    var s = lines[i].split('\t').join("")
    var firstWord = s.split(' ')[0]
    if (s=='' || s[0]=='/') {
      res.push(Array(indents[i]).join("  ")+s)
    } else if (s.indexOf('=>') != -1)  { // arrow function
      var arr = s.split('=>')
      res.push('function f(' + arr[0] + ') { return ' + arr[1] +'}')
    } else {
      var indent = indents[i+1] - indents[i]
      if (firstWord!='function' && firstWord!='else') {
        s = Array(indents[i]+1).join("  ") + enclose(s)
      }
      if (firstWord == 'elif') {
        s = s.replace('elif','else if')
      }
      if (indent==0) res.push(s)
      if (indent==1) res.push(s + ' {')                   
      if (indent < 0)  res.push(s+Array(-indent+1).join(" }"))
    }  
  }
  return res.join("\n")
}
