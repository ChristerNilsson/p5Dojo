# p5Dojo

## Graphic exercises for p5

* Du ritar p� den �versta bitmappen
* Den andra bitmappen ska du efterlikna
* Den tredje bitmappen visar skillnaden. Ska bli svart

[Bitmap Assert](https://github.com/ChristerNilsson/Kosmos/tree/master/ZZ/A78_Grafisk_Assert)

Anv�nds f�r att l�ra ut grundl�ggande Processing med p5 (Javascript).

F�rger:
  - 0,0,1 bl�
  - 0,1,0 gr�n
  - 0,1,1 cyan
  - 1,0,0 r�d
  - 1,0,1 magenta
  - 1,1,0 gul
  - 0 svart
  - 0.5 gr�
  - 1 vit
  
bakgrundsf�rg:
  - **bg**(1)   vit
  - **bg**(1,1,0) gul

fyllningsf�rg:
  - **fc**()  ingen
  - **fc**(1)   vit
  - **fc**(1,1,0)   gul
  - **fc**(1,0,0,0.5) r�d, halvgenomskinlig

streckf�rg:
  - **sc**()    ingen
  - **sc**(1)   vit
  - **sc**(1,1,0)   gul
  - **sc**(1,0,0,0.5)   r�d, halvgenomskinlig

strecktjocklek:
  - **sw**(pixlar)

ritkommandon:
  - **point**(x,y)
  - **line**(x1,y1, x2,y2)
  - **ellipse**(x,y, w,h)
  - **circle**(x,y,r)
  - **rect**(x,y, w,h)
  - **triangle**(x1,y1, x2,y2, x3,y3)
  - **quad**(x1,y1, x2,y2, x3,y3, x4,y4)
  - **arc**(x,y, w,h, start,stopp, PIE)

koordinatsystemet:
  - **translate**(x,y)         
  - **rd**(degrees)      
  - **scale**(n)

modes: 
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

text:
  - **textAlign**(CENTER,CENTER)  
    * LEFT
    * CENTER
    * RIGHT
    * TOP
    * CENTER
    * BOTTOM
  - **textSize**(n)
  - **text**("Python",x,y)

