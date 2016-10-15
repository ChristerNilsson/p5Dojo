# p5Dojo

[p5Dojo](https://christernilsson.github.io/p5Dojo) christernilsson.github.io/p5Dojo

## Grafiska Övningar för Processing med p5 (Förenklad Javascript).

### förenklad javascript
 - Kodblock indenteras med tab (som Python) istf blockparenteser {}
  * Tabstorlek alltid två mellanslag
 - Semikolon används ej
 - Python-kolon används ej
 - Parenteser används ej för att anropa funktioner, på högsta nivån.
 - Arrow functions kan användas för att hantera asserts. Parenteser ska ej användas.
  * x => x*x
  * a,b => a+b

### målsättning
* Du ritar på den översta bitmappen
* Den andra bitmappen ska du efterlikna
* Den tredje bitmappen visar skillnaden. Ska bli helt svart

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
  - **for** **var** i **of** range(10)  => [0,1,2,3,4,5,6,7,8,9]
  - **for** **var** i **of** range(1,11)  => [1,2,3,4,5,6,7,8,9,10]
  - **for** **var** i **of** range(0,10,2)  => [0,2,4,6,8]
  - **for** **var** i **of** range(10,0,-2)  => [10,8,6,4,2]  
  - **for** **var** i=0; i<10; i+=1  => [0,1,2,3,4,5,6,7,8,9]
  - **for** **var** i **of** [0,1,2,3,4,5,6,7,8,9]  => [0,1,2,3,4,5,6,7,8,9] 
  
### if:   
  - Samma syntax som Python, dvs if/elif/else

### koordinatsystemet:
  - **translate** x,y         
  - **rd** degrees      
  - **scale** n

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

