# p5Dojo - Matematik och Spelprogrammering

# _p5Dojo - Math and Game Programming_

 - [p5Dojo](https://christernilsson.github.io/p5Dojo) p5dojo.com
 - [p5](https://p5js.org/reference)
 - [Coffeescript](http://coffeescript.org)
 - [Javascript](https://www.w3schools.com/js)
 - [Underscore](http://underscorejs.org)
 - [p5Assert](https://christernilsson.github.io/p5Assert)
 - [Nilsson](https://github.com/ChristerNilsson/Nilsson/blob/master/README.md)
 - [Mailgrupp](mailto:p5dojo@googlegroups.com)

## Så här arbetar du!  _This is the way you work!_

* Du ska med kod återskapa den första bitmappen. _The first bitmap is your mission._
* Resultatet av din kod hamnar i den andra bitmappen. _The result of your code is displayed in the second bitmap._
* Skillnaden visas i den tredje bitmappen. Den ska bli helt svart när du har löst uppgiften. _The third bitmap contains the difference. When you are finished, it will be black._

### Chrome och Windows rekommenderas. _Windows and Chrome are recommended._
Ingen annan programvara behöver installeras. _No other software is needed._

### färger
```
r,g,b  färg
=============
0,0,1  blå
0,1,0  grön
0,1,1  cyan
1,0,0  röd
1,0,1  magenta
1,1,0  gul
0      svart
0.5    grå
1      vit
```
### _colors_
```
r,g,b  color
==============
0,0,1  blue
0,1,0  green
0,1,1  cyan
1,0,0  red
1,0,1  magenta
1,1,0  yellow
0      black
0.5    gray
1      white
```

### bg
bakgrundsfärg  [_background_](https://p5js.org/reference/#/p5/background)

```
bg r,g,b  färg
==============
bg 1      vit
bg 1,1,0  gul
```
```
bg r,g,b  color
==============
bg 1      white
bg 1,1,0  yellow
```

### fc
fyllningsfärg  [_fill_](https://p5js.org/reference/#/p5/fill)
```
fc r,g,b      färg
==================
fc()          ingen
fc 1          vit
fc 1,1,0      gul
fc 1,0,0      röd
fc 1,0,0,0.5  röd, halvgenomskinlig
```

### sc
streckfärg  [_stroke_](https://p5js.org/reference/#/p5/stroke)
```
sc r,g,b      färg
==================
sc()          ingen
sc 1          vit
sc 1,1,0      gul
sc 1,0,0      röd
sc 1,0,0,0.5  röd, halvgenomskinlig
```

### sw
strecktjocklek  [_strokeWeight_](https://p5js.org/reference/#/p5/strokeWeight)
```
sw pixlar
```

## Ritkommandon  _Drawing commands_

### circle
```javascript
circle    x,y,r
```

### [point](https://p5js.org/reference/#/p5/point)
```javascript
point     x,y
```

### [line](https://p5js.org/reference/#/p5/line)
```javascript
line      x1,y1, x2,y2
```
### [ellipse](https://p5js.org/reference/#/p5/ellipse)
```javascript
ellipse   x,y, w,h
```
### [rect](https://p5js.org/reference/#/p5/rect)
```javascript
rect      x,y, w,h
```
### [triangle](https://p5js.org/reference/#/p5/triangle)
```javascript
triangle  x1,y1, x2,y2, x3,y3
```
### [quad](https://p5js.org/reference/#/p5/quad)
```javascript
quad      x1,y1, x2,y2, x3,y3, x4,y4
```
### [arc](https://p5js.org/reference/#/p5/arc)
```javascript
arc       x,y, w,h, start,stopp, PIE
```

## Inbyggda funktioner  _builtin functions_

### [lerp](https://p5js.org/reference/#/p5/lerp)
linjär interpolation och extrapolation, genom att ange två startpunkter.
_Linear interpolation and extrapolation_
```javascript
      lerp y0,y1,i
 8 == lerp 10,12,-1
10 == lerp 10,12,0
11 == lerp 10,12,0.5
12 == lerp 10,12,1
14 == lerp 10,12,2
```
### [map](https://p5js.org/reference/#/p5/map)
linjär interpolation och extrapolation, genom att ange start- och slutpunkter.
_Linear interpolation and extrapolation_
```javascript
 yi == map xi, x0, xn, y0,  yn
250 == map 25,  0,100,  0,1000
 30 == map  1,  0, 10, 25,  75
```
### [constrain](https://p5js.org/reference/#/p5/constrain)
```javascript
       constrain   x, xmin, xmax
  0 == constrain -10,    0,  100
 10 == constrain  10,    0,  100
100 == constrain 120,    0,  100
```
### [int](https://p5js.org/reference/#/p5/int)
```javascript
  3 == int 3.14
 -3 == int -3.14
```
### [round](https://p5js.org/reference/#/p5/round)
```javascript
  3 == round 3.14
 -3 == round -3.14
```
### [parseInt](https://www.w3schools.com/jsref/jsref_parseint.asp)
```javascript
  3 == parseInt '3.14'
 -3 == parseInt '-3.14'
```
### [parseFloat](https://www.w3schools.com/jsref/jsref_parsefloat.asp)
```javascript
  3.14 == parseInt '3.14'
 -3.14 == parseInt '-3.14'
```
### [dist](https://p5js.org/reference/#/p5/dist)
```javascript
     dist x1,y1,x2,y2
5 == dist  0, 3, 0, 4
5 == dist 10,13,10,14
```
### [nf](https://p5js.org/reference/#/p5/nf)
```javascript
'00112.53'   == nf 112.53096155, 5, 2
'0112.531'   == nf 112.53096155, 4, 3
'112.530962' == nf 112.53096155, 3, 6
```
### [PI](https://p5js.org/reference/#/p5/PI)
```javascript
0.78539816339          == QUARTER_PI
1.57079632679489661923 == HALF_PI
3.14159265358979323846 == PI
6.28318530717958647693 == TWO_PI
```
### [sqrt](https://p5js.org/reference/#/p5/sqrt)
```javascript
1.41421356237 == sqrt 2
2             == sqrt 4
5             == sqrt 25
```
### rd
Roterar en vinkel given i grader medurs. _Rotate a given angle in degrees clockwise_
```javascript
rd = (vinkel) -> rotate radians vinkel
```
### [radians](https://p5js.org/reference/#/p5/radians)
```javascript
0             == radians 0
PI/2          == radians 90
PI            == radians 180
3*PI/2        == radians 270
```
### [cos](https://p5js.org/reference/#/p5/cos)
```javascript
1             == cos 0
0.5           == cos PI / 3
0.70710678118 == cos radians 45
0             == cos PI / 2
-1            == cos PI
```
### [sin](https://p5js.org/reference/#/p5/sin)
```javascript
0             == sin 0
0.5           == sin PI / 6
0.70710678118 == sin PI / 4
1             == sin radians 90
0             == sin PI
```
### log10
```javascript
0             == log10 1
0.30102999566 == log10 2
1             == log10 10
2             == log10 100
```
### [Date](https://www.w3schools.com/jsref/jsref_obj_date.asp)
```javascript
d  = new Date(2017, 5, 9, 18, 44, 37, 123)
18 == d.getHours()
44 == d.getMinutes()
37 == d.getSeconds()
```
### [range](http://underscorejs.org/#range)
```javascript
         range start,   stopp,    inkrement
compare: for i=start; i<stopp; i+=inkrement
[0,1,2,3,4,5,6,7,8,9]  == range 10
[0,1,2,3,4]            == range 5
[1,2,3,4,5,6,7,8,9,10] == range 1,11
[0,2,4,6,8]            == range 0,10,2
[10,8,6,4,2]           == range 10,0,-2
```

### [for](http://coffeescript.org/#loops)
Glöm ej att indentera innehållet med ett tabsteg! _Don't forget to indent one tab!_
```javascript
kommando                      resultat
======================================
for i in range 10             [0,1,2,3,4,5,6,7,8,9]
for i in range 5              [0,1,2,3,4]
for i in range 1,11           [1,2,3,4,5,6,7,8,9,10]
for i in range 0,10,2         [0,2,4,6,8]
for i in [0..10] by 2         [0,2,4,6,8,10]
for i in range 10,0,-2        [10,8,6,4,2]
for i in [1,1,2,3,5,8,13,21]  [1,1,2,3,5,8,13,21]
```

### [array](http://coffeescript.org/#literals)
```javascript
a = [7,8,9]
a[0] == 7
a.push 10
a.length == 4
8 in a == true
a.pop() == 10
a == [7,8,9]
a.unshift 6
a == [6,7,8,9]
a.shift() == 6
a == [7,8,9]
a.splice(1,1) == [8]
a.reverse() == [9,7]
a.join(':') == '9:7'
a.splice(1,0,8) == [9,8,7]
a.concat([4]) == [9,8,7,4]
a.sort()
a == [7,8,9]
Array(5).fill(0) == [0,0,0,0,0]
10 == [1,2,3,4].reduce ((total,num) -> total + num)
```

### [string](https://www.w3schools.com/js/js_string_methods.asp)
```javascript
"CoffeeScript".toUpperCase() == "COFFEESCRIPT"
"CoffeeScript".toLowerCase() == "coffeescript"
"CoffeeScript"[6]            == "S"
"CoffeeScript".substr(0,6)   == "Coffee"
"10,20,30".split(',')        == ['10','20','30']
"CoffeeScript".indexOf('c')  == 7
```

### [object](http://coffeescript.org/#literals)
```javascript
b = {x:1}
b.y = 2
b['z'] = 3
b == {x:1, y:2, z:3}
keys = []
values = []
for key,value of b # Notera att of används här.
  keys.push key
  values.push value
keys == ['x','y','z']
values == [1,2,3]
```

### [inclusiveRange](http://coffeescript.org/#slices)
```javascript
[2..4] == [2,3,4]
'abcde'[2..4] == 'cde'
```

### [exclusiveRange](http://coffeescript.org/#slices)
```javascript
[2...4] == [2,3]
'abcde'[2...4] == 'cd'
```

### [operators](https://www.w3schools.com/js/js_arithmetic.asp)
### comparisons
### logical
### [precedence](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
```javascript
(2 + 3) * 4 == 20

not false == true  # Logisk icke. Motsvarar ! i Javascript
not true  == false

~0 == 1 # bitwise not
~1 == 0

2 ** 3      == 2*2*2
3 / 2       == 1.5
3 // 2      == 1
3 % 2       == 1
4 % 2       == 0
-3 %% 2     == 1

2 + 3 * 4   == 14
1 + 2       == 3
1 - 2       == -1

1 << 2 == 4 # shift left
5 >> 2 == 1 # shift right

2 < 3  == true
2 > 3  == false
2 >= 3 == false
2 >= 2 == true
2 <= 3 == true
2 <= 2 == true

2 == 3 == false
2 == 2 == true
2 != 3 == true
2 != 2 == false

0 & 0 == 0 # bitwise and
0 & 1 == 0
1 & 0 == 0
1 & 1 == 1

0 ^ 0 == 0 # bitwise xor
0 ^ 1 == 1
1 ^ 0 == 1
1 ^ 1 == 0

0 | 0 == 0 # bitwise or
0 | 1 == 1
1 | 0 == 1
1 | 1 == 1

false and false == false  # Logisk och. Motsvarar && i Javascript
false and true  == false
true  and false == false
true  and true  == true

false or false == false  # Logisk eller. Motsvarar || i Javascript
false or true  == true
true  or false == true
true  or true  == true

```

## Kod

### while
```javascript
i = 0
res = []
while i < 10
  res.push i
  i++
res == [0,1,2,3,4,5,6,7,8,9]
```

### [if](http://coffeescript.org/#conditionals)
```javascript
if i%3==0
  fc 0
else if i%3==1
  fc 0.5
else
  fc 1

fc if i%3==0 then 0 else 0.5
```

### koordinatsystemet
```javascript
kommando        kommentar
=========================
translate x,y   flyttar origo
rd degrees      roterar runt origo
scale n         skalar upp eller ner
```

### modes
  - **rectMode** CORNER
    * CORNER (default)
    * CORNERS
    * CENTER
    * RADIUS
  - **ellipseMode** CENTER
    * CORNER
    * CORNERS
    * CENTER (default)
    * RADIUS

### [text](https://p5js.org/reference/#/p5/text)
  - **textAlign** LEFT,BASELINE (default)
  - **textAlign** CENTER,CENTER
    * LEFT,CENTER,RIGHT
    * TOP,CENTER,BOTTOM,BASELINE
  - **textSize** n
  - **textFont 'monospace' # t ex
  - **text** "p5",x,y

### push & pop
Sparar och återställer följande kommandon:
 - rotate scale translate fc sc sw rectMode
 - tint strokeCap strokeJoin imageMode ellipseMode colorMode
 - textAlign textFont textMode textSize textLeading
 - [information](https://www.processing.org/tutorials/transform2d)

### coffeescript
 - Orsak: Programmering ska vara så enkelt som möjligt
 - Kodblock indenteras med tab (som Python) i stället för blockparenteser {}
  * Tabstorlek alltid två mellanslag
  * Python-kolon används ej
 - Semikolon är frivilliga
 - Parenteser behövs bara för att anropa funktioner som saknar parametrar.
 - Funktioner skapas med ->
  * f = (x) -> x*x
  * g = (a,b) -> a+b


### [this](http://coffeescript.org/#classes)
@ i Coffescript motsvarar this i Javascript.
Används för att komma åt egenskaper och metoder i det egna objektet.
```javascript
class Animal
  constructor : ->
    @legs = 4
```

### [pil](http://coffeescript.org/#language)
```javascript
->
```
Används av Coffescript i stället för ordet function i Javascript.
Se exempel 2 nedan.

### exempel 1: CoffeeScript
```javascript
bg 1, 0.5, 1
sw 2
sc 0.5
for i in range 10
  fc i % 2
  rd 5
  rect 20 * i + 5, 5, 10, 10
```

### exempel 1: Javascript
```javascript
background(255, 127, 255);
strokeWeight(2);
stroke(127);
for (var i = 0; i < 10; i++) {
  fill((i % 2) * 255);
  rotate(radians(5));
  rect(20 * i + 5, 5, 10, 10);
}
```

### exempel 2: funktion i Coffeescript
```javascript
f = (a,b) -> a+b
```

### exempel 2: funktion i Javascript
```javascript
function f(a,b) {
  return a+b;
}
```

### Källkod

Din källkod sparas på din maskin automatiskt. Vill du starta om, töm editorfönstret och refresha browsern. Nu ska koden ha återställts. Flera personer kan dela på samma maskin, men de måste då ha separata inloggingar.

Om du tycker att editorn är långsam, skapa medvetet ett syntaxfel, som visas med rött.

### Interaktivitet

Lektion 9 och framåt innehåller interaktiva övningar.
Det innebär att man med menykommandon och/eller musklick påverkar ett objekts tillstånd.
Utritningen av objektet är beroende av tillståndet.

#### Menykommandon
Tredje listboxen innehåller menykommandon. Dessa definieras av programmeraren.
Lämpligen görs det i samma ordning. Det innebär att man börjar med reset. I Reset initialiserar man alla variabler. Låt anropet till super vara kvar.
Efter reset kommer draw. Draw ritar upp bitmappen. Tag bort anropet till super. Draw ingår inte i menyn. Det beror på att Draw anropas automatiskt efter varje menykommando.

#### Att tänka på
Tabellen längst ner innehåller tillståndet.

* Första kolumnen innehåller egenskapens namn. Alltid gul.
* Andra kolumnen innehåller förebildens data. Alltid grön.
* Tredje kolumnen innehåller resultat av användarens kod. Röd som blir grön.
* Klicka på reset om det ser konstigt ut.
* Draw anropas automatiskt varje gång innehållet i editorn förändras.

### readText
Läser en textrad från textrutan under skillnadsbitmappen
```javascript
@readText()
```

### readInt
Läser ett heltal från textrutan under skillnadsbitmappen
```javascript
@readInt()
```

### readFloat
Läser ett flyttal från textrutan under skillnadsbitmappen
```javascript
@readFloat()
```

#### Mushantering
mousePressed(mx,my) kan definieras för att ta hand om musklick.
Mushantering ger större flexibilitet, men kräver att programmeraren måste avgöra var användaren klickat.

#### Minimalt exempel
Efter funktionspilarna lägger man i sin kod. Förutom dessa metoder, tillkommer menykommandon och egna hjälpmetoder. Sista raden skapar själva objektet.
```javascript
class Counter extends Application
  reset : -> super
  draw  : -> super
  mousePressed : (mx,my) ->
counter = new Counter
```

Exemplet, ej fullständigt:
```javascript
class Counter extends Application
  reset : ->
    super
    @counter = 0
  draw  : ->
    text @counter,100,100
  up : ->
    @counter++
  mousePressed : (mx,my) ->
counter = new Counter
```

### class

En klass skapas genom att skriva ordet _class_ följt av namnet.

Metoder, även konstruktorn, skrivs med namnet följt av ett kolon samt en pil.

```javascript
class Tidsmaskin
  constructor: ->
```

För att skapa en instans, använd ordet _new_ följt av klassens namn.

```javascript
tidsmaskin = new Tidsmaskin
```

#### Egenskaper

Egenskaper inleds med tecknet _@_

```javascript
class Tidsmaskin
  constructor: (pilot) ->
    @pilot = pilot
```

Man kan nå egenskaperna med punkt också.

```javascript
tidsmaskin = new Tidsmaskin "H. G. Wells"
print tidsmaskin.pilot  # "H. G. Wells" skrivs ut
```

Man kan spara en rad kod så här:

```javascript
class Tidsmaskin
  constructor: (@pilot) ->
```

#### Arv

Så här ärver du en annan klass:

```javascript
class Tardis extends Tidsmaskin
class DeLorean extends Tidsmaskin
```

Antag att de båda maskinerna har olika startljud.
_super_ innebär att man anropar den ärvda metoden.

```javascript
class Tidsmaskin
  constructor: (@pilot) ->
  go: (noise) -> print noise

class Tardis extends Tidsmaskin
  go: -> super "blubb"

class DeLorean extends Tidsmaskin
  go: -> super "vorp vorp"

t1 = new Tardis "The Doctor"
t2 = new DeLorean "Marty"

t1.go() # "blubb" skrivs ut.
t2.go() # "vorp vorp" skrivs ut.
```

### mera information

 - [download](https://p5js.org)
 - [manual p5.js](https://p5js.org/reference)
 - [coffeescript](http://coffeescript.org)
 - [engelsk e-bok i färg (om fem minuter) av Lauren McCarthy, SEK 55](https://play.google.com/store/books/details?id=iP3GCgAAQBAJ&rdid=book-iP3GCgAAQBAJ&rdot=1&source=gbs_atb&pcampaignid=books_booksearch_atb)
 - [svartvit pappersbok (om fem dagar), 130 SEK](https://www.adlibris.com/se/bok/getting-started-with-p5js-making-interactive-graphics-in-javascript-and-processing-9781457186776)
 - [funprogramming](http://funprogramming.org)
 - [p5.js video tutorial](https://www.youtube.com/user/shiffman/playlists?sort=dd&view=50&shelf_id=14)

### kontakt, synpunkter, felrapportering, förslag till exempelkod

 - janchrister.nilsson snabela gmail.com
