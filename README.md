# p5Dojo

## Grafiska �vningar f�r Processing med p5 (Javascript).

* Du ritar p� den �versta bitmappen
* Den andra bitmappen ska du efterlikna
* Den tredje bitmappen visar skillnaden. Ska bli helt svart

[p5Dojo](https://christernilsson.github.io/p5Dojo)

### F�rger:
  - 0,0,1 bl�
  - 0,1,0 gr�n
  - 0,1,1 cyan
  - 1,0,0 r�d
  - 1,0,1 magenta
  - 1,1,0 gul
  - 0 svart
  - 0.5 gr�
  - 1 vit
  
### bakgrundsf�rg:
  - **bg**(1)   vit
  - **bg**(1,1,0) gul

### fyllningsf�rg:
  - **fc**()  ingen
  - **fc**(1)   vit
  - **fc**(1,1,0)   gul
  - **fc**(1,0,0,0.5) r�d, halvgenomskinlig

### streckf�rg:
  - **sc**()    ingen
  - **sc**(1)   vit
  - **sc**(1,1,0)   gul
  - **sc**(1,0,0,0.5)   r�d, halvgenomskinlig
  
### skapa en f�rg:
  - **co**(1)   vit
  - **co**(1,1,0)   gul
  - **co**(1,0,0,0.5)   r�d, halvgenomskinlig
  - **color**(255)   vit
  - **color**(255,255,0)   gul
  - **color**(255,0,0,128)   r�d, halvgenomskinlig

### strecktjocklek:
  - **sw**(pixlar)

### ritkommandon:
  - **point**(x,y)
  - **line**(x1,y1, x2,y2)
  - **ellipse**(x,y, w,h)
  - **circle**(x,y,r)
  - **rect**(x,y, w,h)
  - **triangle**(x1,y1, x2,y2, x3,y3)
  - **quad**(x1,y1, x2,y2, x3,y3, x4,y4)
  - **arc**(x,y, w,h, start,stopp, PIE)
  
### for loop:
  - **for** (**var** i=0; i<10; i+=1) { ... } => [0,1,2,3,4,5,6,7,8,9]
  - **for** (**var** i **of** [0,1,2,3,4,5,6,7,8,9]) { ... } => [0,1,2,3,4,5,6,7,8,9]
  - **for** (**var** i **of** range(10)) { ... } => [0,1,2,3,4,5,6,7,8,9]
  - **for** (**var** i **of** range(1,11)) { ... } => [1,2,3,4,5,6,7,8,9,10]
  - **for** (**var** i **of** range(0,10,2)) { ... } => [0,2,4,6,8]
  - **for** (**var** i **of** range(10,0,-2)) { ... } => [10,8,6,4,2]  

### koordinatsystemet:
  - **translate**(x,y)         
  - **rd**(degrees)      
  - **scale**(n)

### modes: 
  - **rectMode**(CENTER)
    * CORNER
    * CORNERS
    * CENTER
    * RADIUS
  - **ellipseMode**(CENTER)
    * CORNER
    * CORNERS
    * CENTER
    * RADIUS

### text:
  - **textAlign**(CENTER,CENTER)  
    * LEFT
    * CENTER
    * RIGHT
    * TOP
    * CENTER
    * BOTTOM
  - **textSize**(n)
  - **text**("p5",x,y)

