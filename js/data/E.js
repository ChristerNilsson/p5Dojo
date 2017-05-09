// Generated by CoffeeScript 1.11.1
var ID_EngineeringNotation;

ID_EngineeringNotation = {
  v: '2017-04-29',
  k: 'fc sc bg int log10 constrain comparisons operators text class',
  b: "# LOC:28\n\nclass Engineering extends Application\n	reset : ->\n		super\n	draw  : ->\n	more  : ->\n	less  : ->\napp = new Engineering",
  a: "class Engineering extends Application\n	reset : ->\n		super\n		@PREFIXES = \"yzafpnµm kMGTPEZY\"\n		@numbers = \"-273.15 1.6021766208e-19 3.1415926535 9.80665 101325 299792458 1073741824 6.022140857e23\"\n		@digits = 3\n	format : (x) ->\n		if x<0 then return \"-\" + @format(-x)\n		exponent = 3 * int Math.log10(x)/3\n		x = x / 10 ** exponent\n		if x < 10 then factor = 10 ** (@digits-1)\n		else if x < 100 then factor = 10 ** (@digits-2)\n		else factor = 10 ** (@digits-3)\n		Math.round(x * factor) / factor + @PREFIXES[8+exponent/3]\n	draw  : ->\n		bg 0\n		textAlign RIGHT,TOP\n		textSize 20\n		textFont \"monospace\"\n		fc 1,0,0\n		sc()\n		textAlign RIGHT,TOP\n		for nr,i in @numbers.split \" \"\n			x = parseFloat nr\n			if i<8 then text @format(1/x), 100-5,i*20\n			text @format(x), 200-5,i*20\n	more  : -> @digits = constrain @digits+1, 1,6\n	less  : -> @digits = constrain @digits-1, 1,6\n\napp = new Engineering \"a\"",
  c: {
    app: "reset()|more()|less()"
  },
  e: {
    EngineeringNotation: "https://en.wikipedia.org/wiki/Engineering_notation"
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcRS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsc0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLCtEQURGO0VBRUEsQ0FBQSxFQUFFLHVJQUZGO0VBYUEsQ0FBQSxFQUFFLCs1QkFiRjtFQTZDQSxDQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQU0sdUJBQU47R0E5Q0Q7RUErQ0EsQ0FBQSxFQUNDO0lBQUEsbUJBQUEsRUFBc0Isb0RBQXRCO0dBaEREIiwic291cmNlc0NvbnRlbnQiOlsiSURfRW5naW5lZXJpbmdOb3RhdGlvbiA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGs6J2ZjIHNjIGJnIGludCBsb2cxMCBjb25zdHJhaW4gY29tcGFyaXNvbnMgb3BlcmF0b3JzIHRleHQgY2xhc3MnXG5cdGI6XCJcIlwiXG4jIExPQzoyOFxuXG5jbGFzcyBFbmdpbmVlcmluZyBleHRlbmRzIEFwcGxpY2F0aW9uXG5cdHJlc2V0IDogLT5cblx0XHRzdXBlclxuXHRkcmF3ICA6IC0+XG5cdG1vcmUgIDogLT5cblx0bGVzcyAgOiAtPlxuYXBwID0gbmV3IEVuZ2luZWVyaW5nXG5cIlwiXCJcblx0YTpcIlwiXCJcbmNsYXNzIEVuZ2luZWVyaW5nIGV4dGVuZHMgQXBwbGljYXRpb25cblx0cmVzZXQgOiAtPlxuXHRcdHN1cGVyXG5cdFx0QFBSRUZJWEVTID0gXCJ5emFmcG7CtW0ga01HVFBFWllcIlxuXHRcdEBudW1iZXJzID0gXCItMjczLjE1IDEuNjAyMTc2NjIwOGUtMTkgMy4xNDE1OTI2NTM1IDkuODA2NjUgMTAxMzI1IDI5OTc5MjQ1OCAxMDczNzQxODI0IDYuMDIyMTQwODU3ZTIzXCJcblx0XHRAZGlnaXRzID0gM1xuXHRmb3JtYXQgOiAoeCkgLT5cblx0XHRpZiB4PDAgdGhlbiByZXR1cm4gXCItXCIgKyBAZm9ybWF0KC14KVxuXHRcdGV4cG9uZW50ID0gMyAqIGludCBNYXRoLmxvZzEwKHgpLzNcblx0XHR4ID0geCAvIDEwICoqIGV4cG9uZW50XG5cdFx0aWYgeCA8IDEwIHRoZW4gZmFjdG9yID0gMTAgKiogKEBkaWdpdHMtMSlcblx0XHRlbHNlIGlmIHggPCAxMDAgdGhlbiBmYWN0b3IgPSAxMCAqKiAoQGRpZ2l0cy0yKVxuXHRcdGVsc2UgZmFjdG9yID0gMTAgKiogKEBkaWdpdHMtMylcblx0XHRNYXRoLnJvdW5kKHggKiBmYWN0b3IpIC8gZmFjdG9yICsgQFBSRUZJWEVTWzgrZXhwb25lbnQvM11cblx0ZHJhdyAgOiAtPlxuXHRcdGJnIDBcblx0XHR0ZXh0QWxpZ24gUklHSFQsVE9QXG5cdFx0dGV4dFNpemUgMjBcblx0XHR0ZXh0Rm9udCBcIm1vbm9zcGFjZVwiXG5cdFx0ZmMgMSwwLDBcblx0XHRzYygpXG5cdFx0dGV4dEFsaWduIFJJR0hULFRPUFxuXHRcdGZvciBucixpIGluIEBudW1iZXJzLnNwbGl0IFwiIFwiXG5cdFx0XHR4ID0gcGFyc2VGbG9hdCBuclxuXHRcdFx0aWYgaTw4IHRoZW4gdGV4dCBAZm9ybWF0KDEveCksIDEwMC01LGkqMjBcblx0XHRcdHRleHQgQGZvcm1hdCh4KSwgMjAwLTUsaSoyMFxuXHRtb3JlICA6IC0+IEBkaWdpdHMgPSBjb25zdHJhaW4gQGRpZ2l0cysxLCAxLDZcblx0bGVzcyAgOiAtPiBAZGlnaXRzID0gY29uc3RyYWluIEBkaWdpdHMtMSwgMSw2XG5cbmFwcCA9IG5ldyBFbmdpbmVlcmluZyBcImFcIlxuXCJcIlwiXG5cdGM6XG5cdFx0YXBwIDogXCJyZXNldCgpfG1vcmUoKXxsZXNzKClcIlxuXHRlOlxuXHRcdEVuZ2luZWVyaW5nTm90YXRpb24gOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0VuZ2luZWVyaW5nX25vdGF0aW9uXCJcblxuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\E.coffee