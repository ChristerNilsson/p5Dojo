// Generated by CoffeeScript 1.11.1
var ch03;

ch03 = {
  GreenEllipse: {
    b: "# LOC:2 fc # ellipse\n",
    a: "fc 0,1,0\nellipse 120,60, 60,40"
  },
  GreenRect: {
    b: "# LOC:2 fc # rect\n",
    a: "fc 0,1,0\nrect 60,80, 40,50"
  },
  RedRect: {
    b: "# LOC:2 fc # rect\n",
    a: "fc 1,0,0\nrect 80,70, 40,100"
  },
  Cross: {
    b: "# LOC:4 fc # rect\n",
    a: "fc 1,0,0\nsc()\nrect 85,70, 70,10\nrect 115,40, 10,100"
  },
  SquareHole: {
    b: "# LOC:11 fc sc sw # rect\n",
    a: "fc 0,1,1\nsc()\nrect 60,60, 80,20\nrect 60,120, 80,20\nrect 60,60, 20,80\nrect 120,60, 20,80\nfc()\nsc 1,0,0\nsw 3\nrect 60,60, 80,80\nrect 80,80, 40,40"
  }
};