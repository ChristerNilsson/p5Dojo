### Javascript till Coffeescript

Utgå från denna [Exempelfil](https://raw.githubusercontent.com/shiffman/The-Nature-of-Code-Examples-p5.js/master/chp08_fractals/NOC_8_08_SimpleLSystem/sketch.js)

```javascript
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// L-System
// Just demonstrating working with L-System strings
// No drawing

// Start with 'A'
var current = 'A';
// Number of  generations
var count = 0;

var instructions;
var show;

var results = '';

function setup() {
  instructions = createP('<a href=\'#\'>Click the mouse to generate.</a>');
  instructions.position(50,50);
  instructions.class('clickable');
  instructions.mousePressed(generate);

  results += 'Generation ' + count + ': ' + current + '<br>';
  show = createP(results);
  show.position(50,100);
}

function generate() {
  // A new StringBuffer for the next generation
  var next = '';

  // Look through the current String to replace according to L-System rules
  for (var i = 0; i < current.length; i++) {
    var c = current.charAt(i);
    if (c === 'A') {
      // If we find A replace with AB
      next += 'AB';
    }  else if (c === 'B') {
      // If we find B replace with A
      next += 'A';
    }
  }
  // The current String is now the next one
  current = next;
  count++;
  // Print to message console
  results += 'Generation ' + count + ': ' + current + '<br>';
  show.html(results);
}
```

* Skapa ett nytt projekt.

* Kopiera in filerna, döp om dem till .coffee

* Se till att index.html refererar till filerna.

## FAS 1

* Byt // mot # överallt.
```javascript
// A new StringBuffer for the next generation
```
```coffeescript
# A new StringBuffer for the next generation
```

* Tag bort "var".
```javascript
var count = 0;
var instructions;
```
```coffeescript
count = 0
instructions = null
```

* Byt for loopar till for i in range osv.

```javascript
for (var i = 0; i < current.length; i++) {
}
```
```coffeescript
for i in range current.length
```
* Byt function mot ->

```javascript
function setup() {
}
```
```coffeescript
setup = () ->
```

* Tag bort krullparenteser från for och if
```javascript
for (var i = 0; i < current.length; i++) {
}
```
```coffeescript
for (var i = 0; i < current.length; i++)
```

* Byt === mot ==
```javascript
if (c === 'A') {
}
```
```coffeescript
if c == 'A'
```

FAS 2 (ej nödvändig)

* Tag bort alla semikolon
```javascript
show.position(50,100);
```
```coffeescript
show.position 50,100
```

* Tag bort onödiga parenteser
```javascript
show.position(50,100);
if (c === 'A') {
}
```
```coffeescript
show.position 50,100
if c == 'A'
```

* Förenkla for loopar om det går

```javascript
for i in range current.length
  c = current.charAt(i)
```
```coffeescript
for c in current
```

* Inför string interpolation
```javascript
results += 'Generation ' + count + ': ' + current + '<br>';```
```coffeescript
results += "Generation #{++count}: #{current}<br>"```

* Krymp mera om det är meningsfullt.

Använd ctrl+shift+i för att komma till console. Eller F12.

## Slutresultat

```coffeescript
current = 'A'
count = 0
show = null
results = ''

setup = ->
  instructions = createP "<a href='#'>Click the mouse to generate.</a>"
  instructions.position 50,50
  instructions.class 'clickable'
  instructions.mousePressed generate

  results += "Generation #{count}: #{current}<br>"
  show = createP results
  show.position 50,100

generate = ->
  hash = {A:'AB', B:'A'}
  current = (hash[c] for c in current when hash[c]?).join ''
  results += "Generation #{++count}: #{current}<br>"
  show.html results
```