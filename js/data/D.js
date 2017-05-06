// Generated by CoffeeScript 1.11.1
var ID_Diagonal1, ID_Diagonal2, ID_DiagonalSquares, ID_Dices, ID_DoubleForLoop;

ID_Diagonal1 = {
  v: '2017-04-29',
  b: "# LOC:12 sc sw # point\n",
  a: "bg 0,1,0\nsw 20\nsc 0,0,0\npoint 0,0\n\nsc 0.25,0.25,0\npoint 50,50\n\nsc 0.5,0.5,0\npoint 100,100\n\nsc 0.75,0.75,0\npoint 150,150\n\nsc 1,1,0\npoint 200,200"
};

ID_Diagonal2 = {
  v: '2017-04-29',
  b: "# LOC:11 sc sw # point\n",
  a: "sw 20\nsc 1,0,0\npoint 200,0\n\nsc 0.75,0.25,0\npoint 150,50\n\nsc 0.5,0.5,0\npoint 100,100\n\nsc 0.25,0.75,0\npoint 50,150\n\nsc 0,1,0\npoint 0,200"
};

ID_DiagonalSquares = {
  v: '2017-04-29',
  b: "# LOC:4 range # rect for in lerp\n",
  a: "for i in range 10\n	x = 5+20*i\n	y = 5+20*i\n	rect x,y, 10,10"
};

ID_DoubleForLoop = {
  v: '2017-04-29',
  b: "# LOC:5 range # rect for in lerp\n",
  a: "for i in range 10\n	for j in range 10\n		x = 5+20*i\n		y = 5+20*j\n		rect x,y, 10,10"
};

ID_Dices = {
  v: '2017-04-29',
  b: "# LOC:26 sc # point\n",
  a: "point 10,10\n\nsc 1,0,0\npoint 185,5\npoint 195,15\n\nsc 0,1,0\npoint 85,65\npoint 90,70\npoint 95,75\n\nsc 1,1,0\npoint 165,105\npoint 165,115\npoint 175,105\npoint 175,115\n\nsc 1,0,1\npoint 45,125\npoint 45,135\npoint 50,130\npoint 55,125\npoint 55,135\n\nsc 0,1,1\npoint 105,165\npoint 105,170\npoint 105,175\npoint 115,165\npoint 115,170\npoint 115,175"
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcZGF0YVxcRC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsWUFBQSxHQUNDO0VBQUEsQ0FBQSxFQUFFLFlBQUY7RUFDQSxDQUFBLEVBQUcsMEJBREg7RUFFQSxDQUFBLEVBQUcsZ0tBRkg7OztBQXFCRCxZQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRywwQkFESDtFQUVBLENBQUEsRUFBRyxzSkFGSDs7O0FBb0JELGtCQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBRSxvQ0FERjtFQUVBLENBQUEsRUFBRSwrREFGRjs7O0FBU0QsZ0JBQUEsR0FDQztFQUFBLENBQUEsRUFBRSxZQUFGO0VBQ0EsQ0FBQSxFQUFFLG9DQURGO0VBRUEsQ0FBQSxFQUFFLHNGQUZGOzs7QUFVRCxRQUFBLEdBQ0M7RUFBQSxDQUFBLEVBQUUsWUFBRjtFQUNBLENBQUEsRUFBSSx1QkFESjtFQUVBLENBQUEsRUFBRyx1V0FGSCIsInNvdXJjZXNDb250ZW50IjpbIklEX0RpYWdvbmFsMSA9XG5cdHY6JzIwMTctMDQtMjknXG5cdGI6IFwiIyBMT0M6MTIgc2Mgc3cgIyBwb2ludFxcblwiXG5cdGE6IFwiXCJcIlxuYmcgMCwxLDBcbnN3IDIwXG5zYyAwLDAsMFxucG9pbnQgMCwwXG5cbnNjIDAuMjUsMC4yNSwwXG5wb2ludCA1MCw1MFxuXG5zYyAwLjUsMC41LDBcbnBvaW50IDEwMCwxMDBcblxuc2MgMC43NSwwLjc1LDBcbnBvaW50IDE1MCwxNTBcblxuc2MgMSwxLDBcbnBvaW50IDIwMCwyMDBcblwiXCJcIlxuXG5JRF9EaWFnb25hbDIgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOiBcIiMgTE9DOjExIHNjIHN3ICMgcG9pbnRcXG5cIlxuXHRhOiBcIlwiXCJcbnN3IDIwXG5zYyAxLDAsMFxucG9pbnQgMjAwLDBcblxuc2MgMC43NSwwLjI1LDBcbnBvaW50IDE1MCw1MFxuXG5zYyAwLjUsMC41LDBcbnBvaW50IDEwMCwxMDBcblxuc2MgMC4yNSwwLjc1LDBcbnBvaW50IDUwLDE1MFxuXG5zYyAwLDEsMFxucG9pbnQgMCwyMDBcblwiXCJcIlxuXG5JRF9EaWFnb25hbFNxdWFyZXMgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOlwiIyBMT0M6NCByYW5nZSAjIHJlY3QgZm9yIGluIGxlcnBcXG5cIlxuXHRhOlwiXCJcIlxuZm9yIGkgaW4gcmFuZ2UgMTBcblx0eCA9IDUrMjAqaVxuXHR5ID0gNSsyMCppXG5cdHJlY3QgeCx5LCAxMCwxMFxuXCJcIlwiXG5cbklEX0RvdWJsZUZvckxvb3AgPVxuXHR2OicyMDE3LTA0LTI5J1xuXHRiOlwiIyBMT0M6NSByYW5nZSAjIHJlY3QgZm9yIGluIGxlcnBcXG5cIlxuXHRhOlwiXCJcIlxuZm9yIGkgaW4gcmFuZ2UgMTBcblx0Zm9yIGogaW4gcmFuZ2UgMTBcblx0XHR4ID0gNSsyMCppXG5cdFx0eSA9IDUrMjAqalxuXHRcdHJlY3QgeCx5LCAxMCwxMFxuXCJcIlwiXG5cbklEX0RpY2VzID1cblx0djonMjAxNy0wNC0yOSdcblx0YiA6IFwiIyBMT0M6MjYgc2MgIyBwb2ludFxcblwiXG5cdGE6IFwiXCJcIlxucG9pbnQgMTAsMTBcblxuc2MgMSwwLDBcbnBvaW50IDE4NSw1XG5wb2ludCAxOTUsMTVcblxuc2MgMCwxLDBcbnBvaW50IDg1LDY1XG5wb2ludCA5MCw3MFxucG9pbnQgOTUsNzVcblxuc2MgMSwxLDBcbnBvaW50IDE2NSwxMDVcbnBvaW50IDE2NSwxMTVcbnBvaW50IDE3NSwxMDVcbnBvaW50IDE3NSwxMTVcblxuc2MgMSwwLDFcbnBvaW50IDQ1LDEyNVxucG9pbnQgNDUsMTM1XG5wb2ludCA1MCwxMzBcbnBvaW50IDU1LDEyNVxucG9pbnQgNTUsMTM1XG5cbnNjIDAsMSwxXG5wb2ludCAxMDUsMTY1XG5wb2ludCAxMDUsMTcwXG5wb2ludCAxMDUsMTc1XG5wb2ludCAxMTUsMTY1XG5wb2ludCAxMTUsMTcwXG5wb2ludCAxMTUsMTc1XG5cIlwiXCJcblxuIl19
//# sourceURL=C:\github\p5Dojo\coffee\data\D.coffee