# p5Dojo

[p5Dojo](https://christernilsson.github.io/p5Dojo) christernilsson.github.io/p5Dojo

## grundläggande programmering med processing och p5

### målsättning
* Den första bitmappen ritar du på, genom att programmera.
* Den andra bitmappen ska du efterlikna
* Den tredje bitmappen visar skillnaden. 
* De två bitmapparna är lika när den tredje är helt svart (dvs 0,0,0)

### färger:
  - 0,0,1 blå
  - 0,1,0 grön
  - 0,1,1 cyan
  - 1,0,0 röd
  - 1,0,1 magenta
  - 1,1,0 gul
  - 0 svart
  - 0.5 grå
  - 1 vit
  
### bakgrundsfärg:
  - **bg** 1   vit
  - **bg** 1,1,0 gul

### fyllningsfärg:
  - **fc**  ingen
  - **fc** 1   vit
  - **fc** 1,1,0   gul
  - **fc** 1,0,0,0.5 röd, halvgenomskinlig

### streckfärg:
  - **sc**    ingen
  - **sc** 1   vit
  - **sc** 1,1,0   gul
  - **sc** 1,0,0,0.5   röd, halvgenomskinlig
  
### skapa en färg:
  - **co** 1   vit
  - **co** 1,1,0   gul
  - **co** 1,0,0,0.5   röd, halvgenomskinlig
  - **color** 255   vit
  - **color** 255,255,0   gul
  - **color** 255,0,0,128   röd, halvgenomskinlig

### strecktjocklek:
  - **sw** pixlar

### ritkommandon:
  - **point** x,y
  - **line** x1,y1, x2,y2
  - **ellipse** x,y, w,h
  - **circle** x,y,r
  - **rect** x,y, w,h
  - **triangle** x1,y1, x2,y2, x3,y3
  - **quad** x1,y1, x2,y2, x3,y3, x4,y4
  - **arc** x,y, w,h, start,stopp, PIE 
  
### for loop:
  - Glöm ej att indentera innehållet med ett tabsteg!
  - **loopa** i    => [0,1,2,3,4,5,6,7,8,9]
  - **loopa** i 5  => [0,1,2,3,4]
  - **loopa** i 1,11  => [1,2,3,4,5,6,7,8,9,10]
  - **loopa** i 0,10,2  => [0,2,4,6,8]
  - **loopa** i 10,0,-2  => [10,8,6,4,2]
  - **for** **var** i **of** [1,1,2,3,5,8,13,21] => [1,1,2,3,5,8,13,21]
  
### if:   
  - Pythonsyntax minus kolon:
```
  if i%3==0
    fc 0
  elif i%3==1
    fc 1
  else
    fc 2
```    

### koordinatsystemet:
  - **translate** x,y   flytta origo      
  - **rd** degrees      rotera runt origo
  - **scale** n         skala upp eller ner
  - **push**  spara translation,rotation,skalning mm
  - **pop**   återställ translation,rotation,skalning mm

### modes: 
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

### text:
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

### förenklad javascript
 - Orsak: Programmering ska vara så enkelt som möjligt
 - Kodblock indenteras med tab (som Python) istf blockparenteser {}
  * Tabstorlek alltid två mellanslag
  * Python-kolon används ej
 - Semikolon används ej
 - Parenteser används ej för att anropa funktioner, på högsta nivån.
 - Arrow functions kan användas för att hantera asserts. Parenteser ska ej användas.
  * x => x*x
  * a,b => a+b
  
### exempel
```    
loopa i
  x = 20*i + 5
  y = 5
  w = 10
  h = 10
  fc i%2
  rect x,y,w,h
```    

### mera information

 - [download](https://p5js.org)
 - [manual](https://p5js.org/reference)
 - [e-bok av Lauren McCarthy, SEK 55](https://play.google.com/store/books/details?id=iP3GCgAAQBAJ&rdid=book-iP3GCgAAQBAJ&rdot=1&source=gbs_atb&pcampaignid=books_booksearch_atb)
 - [funprogramming](http://funprogramming.org)
 - [p5.js video tutorial](https://www.youtube.com/user/shiffman/playlists?sort=dd&view=50&shelf_id=14)

### kontakt, synpunkter, felrapportering mm

https://github.com/ChristerNilsson/p5Dojo/issues
