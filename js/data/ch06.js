// Generated by CoffeeScript 1.11.1
var ID120, ID121, ID122, ID123, ID124, ID125;

ID120 = {
  b: "# LOC:2 fc # triangle\n",
  a: "fc 1\ntriangle 20,40, 160,100, 100,140"
};

ID121 = {
  b: "# LOC:2 fc # quad\n",
  a: "fc 1,1,0\nquad 150,100, 180,20, 40,20, 100,140"
};

ID122 = {
  b: "# LOC:2 fc # arc radians\n",
  a: "fc 1,1,0\narc 100,100, 80,80, radians(-135),radians(135)"
};

ID123 = {
  b: "# LOC:7 fc sc sw # arc radians strokeCap\n",
  a: "fc()\nsc 1,0,0\nsw 20\narc 100,70, 100,100, radians(-90),radians(90)\nsc 1,1,0\nstrokeCap SQUARE\narc 100,120, 100,100, radians(90),radians(-90)"
};

ID124 = {
  b: "# LOC:10 range # Array fill length floor random text textAlign for in ++ * / + - rect []\n",
  a: "counts = Array(6).fill 0\ndice = -> floor 6 * random() \ntextAlign CENTER,CENTER\nfor i in range 1000\n	counts[dice()]++\nw = 30\nfor count,i in counts\n	x = w*i + (200-w*counts.length)/2\n	rect x,0,w,count         \n	text i+1,x+w/2,10                	"
};

ID125 = {
  b: "# LOC:10 range # Array fill length floor random text textAlign for in ++ * / + - rect []\n",
  a: "counts = Array(11).fill 0\ndice = -> floor 6 * random() \ntextAlign CENTER,CENTER\nfor i in range 1000\n	counts[dice() + dice()]++\nw = 16\nfor count,i in counts\n	x = w*i + (200-w*counts.length)/2\n	rect x,0,w,count         \n	text i+2,x+w/2,10                	",
  e: {
    Kojo: "https://www.youtube.com/watch?v=X6YSgNkcgAs"
  }
};
