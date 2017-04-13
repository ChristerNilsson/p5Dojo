# p5Dojo - Matematik och Spelprogrammering

 - [p5Dojo](https://christernilsson.github.io/p5Dojo) p5dojo.com
 - [p5](https://p5js.org/reference) 
 - [Coffeescript](http://coffeescript.org)
 - [Javascript](https://www.w3schools.com/js)
 - [Underscore](http://underscorejs.org)
 - [p5Assert](https://christernilsson.github.io/p5Assert)
 - [Nilsson](https://github.com/ChristerNilsson/Nilsson/blob/master/README.md)
 - [Mailgrupp](mailto:p5dojo@googlegroups.com)
 
### Så här arbetar du!

* Du ska med kod återskapa den första bitmappen
* Resultatet av din kod hamnar i den andra bitmappen
* Skillnaden visas i den tredje bitmappen. Den ska bli helt svart när du har löst uppgiften.

### Chrome och Windows är ett krav. 
Ingen annan programvara behöver installeras.

### färger
```  
r,g,b färg
0,0,1 blå
0,1,0 grön
0,1,1 cyan
1,0,0 röd
1,0,1 magenta
1,1,0 gul
0     svart
0.5   grå
1     vit
```  

### bakgrundsfärg
|bg r,g,b|färg|
|---|---|
|bg 1|vit|
|bg 1,1,0|gul|  
### fyllningsfärg
|fc r,g,b|färg|
|---|---|
|fc()|ingen|
|fc 1|vit|
|fc 1,1,0|gul|
|fc 1,0,0|röd|
|fc 1,0,0,0.5|röd, halvgenomskinlig|
### streckfärg
|sc r,g,b|färg|
|---|---|
|sc()|ingen|
|sc 1|vit|
|sc 1,1,0|gul|
|sc 1,0,0|röd|
|sc 1,0,0,0.5|röd, halvgenomskinlig|
### strecktjocklek
```  
  sw pixlar
```  
### ritkommandon
|kommando|argument|
|---|---|
|point|x,y|
|line|x1,y1, x2,y2|
|ellipse|x,y, w,h|
|circle|x,y,r|
|rect|x,y, w,h|
|triangle|x1,y1, x2,y2, x3,y3|
|quad|x1,y1, x2,y2, x3,y3, x4,y4|
|arc|x,y, w,h, start,stopp, PIE|  
### lerp   
linjär interpolation och extrapolation

|lerp x0,x1,i|resultat|
|---|---|
|lerp 10,12,-1| 8|
|lerp 10,12,0| 10|
|lerp 10,12,0.5| 11|
|lerp 10,12,1| 12|
|lerp 10,12,2| 14|   
### for loop
Glöm ej att indentera innehållet med ett tabsteg!

|kommando|resultat|
|---|---|
|for i in range 10|[0,1,2,3,4,5,6,7,8,9]|
|for i in range 5|[0,1,2,3,4]|
|for i in range 1,11|[1,2,3,4,5,6,7,8,9,10]|
|for i in range 0,10,2|[0,2,4,6,8]|
|for i in [0..10] by 2|[0,2,4,6,8,10]|
|for i in range 10,0,-2|[10,8,6,4,2]|
|for i in [1,1,2,3,5,8,13,21]|[1,1,2,3,5,8,13,21]|      
### if
```javascript
if i%3==0
  fc 0
else if i%3==1
  fc 0.5
else
  fc 1
```  
### koordinatsystemet
|kommando|kommentar|
|---|---|
|translate x,y   |flyttar origo|      
|rd degrees      |roterar runt origo|
|scale n         |skalar upp eller ner|
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

### text
  - **textAlign** LEFT,BASELINE  
    * LEFT (default)
    * CENTER
    * RIGHT
    * TOP
    * CENTER
    * BOTTOM
    * BASELINE (default)
  - **textSize** n
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

### exempel 1: normal Javascript
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

#### Indata
Följande funktioner läser indata från textrutan under skillnadsbitmappen:

* @readText()
* @readInt()
* @readFloat()

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

## Installation

Installation är ej nödvändigt för att kunna använda p5Dojo.
Denna installation gör du när du är klar med p5Dojo.

### Förkunskaper i Windows

Du måste behärska följande moment innan installation kan ske:

|Verb|Text|Filer|Kataloger|
|---|---|---|---|
|Skapa|x|x|x|
|Ta bort|x|x|x|
|Markera allt|x|x|x|
|Kopiera|x|x|x|
|Klistra in|x|x|x|
|Ångra|x|x|x|
|Byta namn||x|x|

- download [node.js](https://nodejs.org/en/download)
- Skriv in följande kommando i ett terminalfönster
```javascript
npm install -g coffee-script
```

### Så här arbetar du

- Använd texteditorn Sublime Text.
- Kopiera [mallen](https://github.com/ChristerNilsson/000-Mall) för varje nytt projekt.
- Klicka på transpile.bat. Om det piper: läs transpileringsfel här.
- Den eller de javascriptfiler du använder måste anges i index.html
- Dubbelklicka på index.html. Då startar applikationen.
- Vid problem: Tryck på F12 i Chrome och läs eventuella felmeddelanden.
- Du kan skriva ut värden till F12-console med print.
