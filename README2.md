## Installation av Coffeescript

Lämpligt att göra när du är klar med alla övningar i p5Dojo.
Då kan du t ex göra animerade 3D-spel.

### Förkunskaper i Windows

Du måste behärska följande moment innan installation kan ske:

```    
Uppgift        Text Filer Kataloger
===================================
Skapa           x     x       x
Ta bort         x     x       x
Markera allt    x     x       x
Kopiera         x     x       x
Klistra in      x     x       x
Ångra           x     x       x
Byta namn             x       x
```    

### Download 

- download [node.js](https://nodejs.org/en/download)
- Skriv in följande kommando i ett terminalfönster
```javascript
npm install -g coffee-script
```
- download [Sublime Text](https://www.sublimetext.com/3)

### Hämta 000-Mall

* Hämta [mallen](https://github.com/ChristerNilsson/000-Mall)
* Du ska klicka på den gröna knappen och välja "Clone or download"
* Välj "Download ZIP"
* Dubbelklicka på den nerladdade filen.
* Markera den enda katalogen och kopiera den.
* Klistra in den i en katalog med t ex namnet p5Dojo.
* Denna katalog ska du INTE arbeta i, enbart kopiera.

### Start av nytt projekt 

* Tag en kopia av Mall-katalogen, t ex med ctrl-c ctrl-v
* Byt namn på kopian till ditt nya projekt, t ex XXX.
* Starta transpile.bat. Denna kompilerar dina .coffee till .js-filer
* Dubbelklicka på index.html. Nu startar Chrome.
* Klicka på den gråa ytan. Du ska nu se koordinater.
* Starta Sublime
* File | Open Folder 
* Välj katalogen XXX
* Klicka på sketch.coffee
* Byt bg 0.5 mot bg 1
* Spara med ctrl-s
* Refresha din browser, dvs Chrome.
* Nu ska bakgrunden vara vit.

### Problemhantering

* Transpileringsproblem
  * Kontrollera att transpilern är igång
  * Kontrollera om syntaxfel har inträffat. De är rödfärgade.
  * Dessa felmeddelande innehåller
    * Filnamn
    * Rad
    * Kolumn
    * Orsak
* Exekveringsproblem
  * Klicka på F12 i Chrome, alternativt ctrl-shift-i
  * Välj fliken Console.
  * Avläs eventuellt felmeddelande
  * Hjälper inte det, lägg in print-satser i koden. De hamnar i Console.
  * Det går även att debugga med brytpunkter och radvis exekevering i Chrome. 
    * Se: https://developers.google.com/web/tools/chrome-devtools/javascript

### Viktiga kortkommandon

* Utforskaren
  * ctrl-a Markerar alla filer och kataloger
  * ctrl-x Tar bort markerade filer och kataloger
  * ctrl-c Kopierar markerade filer och kataloger
  * ctrl-v Klistrar in klippbordets filer och kataloger
* Sublime
  * ctrl-s Sparar aktuell fil
  * ctrl-a Markerar allt
  * ctrl-z Ångrar senaste kommandona
  * ctrl-x Tar bort det markerade
  * ctrl-c Kopierar det markerade
  * ctrl-v Klistrar in
* Chrome
  * ctrl-r Refresh
  * ctrl-shift-i Öppar felsökningsfönster

### Indenteringsproblem

* Indentering används istället för krullparenteser i Coffeescript
* Markera allt i textfilen med ctrl-a
* Kontrollera att alla indenteringar är konsekventa
  * Antingen ska de vara två punkter (mellanslag) 
  * eller ett streck (tab)
* Ställ gärna in Sublime så att tab sparas istf mellanslag
  * Olika personer vill ha olika indrag. Tab klarar det
  * Tab tar mindre plats i filen
  * En Tab går snabbare att ta bort än flera mellanslag
* I Sublime kan du även ställa in hur många mellanslag ett Tab ska motsvara.

### Sublime

* Sublime erbjuder färgsyntax för bl a Coffeescript.
* Detta kan konfigureras med [Xavura](https://github.com/Xavura/CoffeeScript-Sublime-Plugin)
