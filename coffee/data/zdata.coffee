# v : version YY-MM-DD
# k : keywords
# l : lines of code
# h : hardness 0=Example 1=Easy 2=Medium 3=Hard
# b : user code
# a : original code
# c : commands
# e : links

data =
	"L1: bg point sw sc" :
		bg : ID_bg	
		point : ID_point 
		sw : ID_sw
		sc : ID_sc
		bg_1 : ID_bg_1
		bg_2 : ID_bg_2
		bg_3 : ID_bg_3
		bg_4 : ID_bg_4
		point_1 : ID_point_1
		point_2 : ID_point_2
		point_3 : ID_point_3
		point_4 : ID_point_4
		point_5 : ID_point_5
		point_6 : ID_point_6
		point_7 : ID_point_7
		point_8 : ID_point_8
		point_9 : ID_point_9

	"L2: circle fc rect line" :
		circle : ID_circle
		fc : ID_fc
		rect : ID_rect
		line : ID_line
		circles : ID_circles
		rects : ID_rects
		lines : ID_lines
		Five : ID_circle_5
		Cross : ID_rect_2
		SquareHole : ID_rect_3
		FlagSweden : ID_FlagSweden

	"L3: ellipse triangle quad arc" :
		ellipse : ID_ellipse
		triangle : ID_triangle
		quad : ID_quad 
		arc : ID_arc
		ellipses : ID_ellipses
		triangles : ID_triangles
		quads : ID_quads
		arcs: ID_arcs
		Pacman : ID_arc_2
		YinYang : ID_YinYang

	"L4: for lerp" :
		for : ID_for 
		lerp : ID_lerp
		DoubleFor : ID_for_for
		Skislope : ID_Skislope
		ColorSide : ID_ColorSide
		imagiCharm : ID_ImagiCharm		
		for_1 : ID_for_1
		for_2 : ID_for_2
		for_3 : ID_for_3
		for_4 : ID_for_4
		for_5 : ID_for_5
		for_6 : ID_for_6
		for_7 : ID_for_7
		for_8 : ID_for_8
		for_9 : ID_for_9
		for_10 : ID_for_10
		for_11 : ID_for_11
		PentaLerp : ID_PentaLerp
		SuperCircle : ID_SuperCircle
		ColorCross : ID_ColorCross

	"L5: text textAlign textSize" :
		text : ID_text
		TextRotate : ID_TextRotate
		TextRotateAlign : ID_TextRotateAlign
		Texts : ID_Texts

	"L6: if then else" :	
		ChessRow : ID_ChessRow 
		GalaxiesOne : ID_GalaxiesOne 
		ChessBoard : ID_ChessBoard 
		Pyramid_1 : ID_Pyramid_1
		Pyramid_2 : ID_Pyramid_2
		Pyramid_3 : ID_Pyramid_3
		Pyramid_4 : ID_Pyramid_4
		Pyramid_5 : ID_Pyramid_5
		Pyramid_6 : ID_Pyramid_6
		PyramidDiamond : ID_Pyramid_Diamond
		PyramidManhattan : ID_Pyramid_Manhattan
		PyramidDistance : ID_Pyramid_Distance
		GalaxiesColliding : ID_GalaxiesColliding 

	"L7: translate rotate scale" :
		translate : ID_Translate
		rotate : ID_Rotate
		scale : ID_Scale 
		"push_pop" : ID_PushPop
		TextCoffee : ID_TextCoffee
		RotatedEllipse : ID_RotatedEllipse
		Cards : ID_Cards
		SnowWhiteAndThe7Lerps : ID_SnowWhiteAndThe7Lerps
		MayFlower : ID_MayFlower 
		RotatedRect : ID_RotatedRect
		FlagUnitedKingdom : ID_FlagUnitedKingdom		
		FlagKorea : ID_FlagKorea
		SuperCircle2 : ID_SuperCircle2
		Roulette : ID_Roulette		

	"L8: -> (function)" :
		Function : ID_Function
		p5 : ID_P5
		Average : ID_Average
		Lerp : ID_Lerp
		Map : ID_Map
		ManyDices : ID_ManyDices

	# "L9: class" :
	# 	Counter : ID_Counter
	# 	Square : ID_Square
	# 	Moire : ID_Moire
	# 	RandomDice : ID_RandomDice
	# 	Girlang : ID_Girlang
	# 	GUI : ID_GUI
	# 	Totalisator : ID_Totalisator

	# "LA: 20-30 Lines Of Code" :
	# 	Stopwatch : ID_Stopwatch
	# 	OlympicRingPrep : ID_OlympicRingPrep
	# 	GuessANumber : ID_GuessANumber
	# 	Braid : ID_Braid
	# 	DavidStar : ID_DavidStar
	# 	Korg : ID_Korg
	# 	Korsord : ID_Korsord
	# 	DifferenceEngine : ID_DifferenceEngine
	# 	RecurrenceEngine : ID_RecurrenceEngine
	# 	OlympicRings : ID_OlympicRings
	# 	Alphanumeric : ID_Alphanumeric
	# 	RecursiveCircle : ID_RecursiveCircle
	# 	EngineeringNotation : ID_EngineeringNotation		

	# "LB: 30-40 LOC" :	
	# 	SevenSegment : ID_SevenSegment
	# 	ColorCube : ID_ColorCube
	# 	Connect4 : ID_Connect4

	# 	GuessANumberHex : ID_GuessANumberHex
	# 	Mandelbrot : ID_Mandelbrot
	# 	Nian : ID_Nian

	# 	Coordinator : ID_Coordinator	
	# 	MultiTimer : ID_MultiTimer
	# 	BlackBox2D : ID_BlackBox2D
	# 	LinearRegression : ID_LinearRegression
	# 	Quiz : ID_Quiz
	# 	Paint : ID_Paint
	# 	Tetramino : ID_Tetramino

	# "LC: 40-60 LOC" :
	# 	ChessOne : ID_ChessOne
	# 	ColorPair : ID_ColorPair
	# 	GameOfLife : ID_GameOfLife
	# 	Snake4 : ID_Snake4
	# 	BouncingBalls : ID_BouncingBalls

	# 	Klocka : ID_Klocka
	# 	Snake : ID_Snake
	# 	Kalkylator : ID_Kalkylator
	# 	Hex : ID_Hex
	# 	Braider : ID_Braider

	# 	TowerOfHanoi : ID_TowerOfHanoi
	# 	Reversi : ID_Reversi
	# 	ForthHaiku : ID_ForthHaiku
	# 	SingaporeMult : ID_SingaporeMult
	# 	PickingBerries : ID_PickingBerries
	# 	SingaporeMultComplex : ID_SingaporeMultComplex

	# "LD: Trigonometry" :
	# 	CoffeescriptClock : ID_CoffeescriptClock		
	# 	IndianSun : ID_IndianSun
	# 	GoldenStar : ID_GoldenStar
	# 	SpaceShip : ID_SpaceShip
	# 	Polygon : ID_Polygon		
	# 	Angle : ID_Angle

	# "LE: 60-80 LOC" :
	# 	Shortcut : ID_Shortcut
	# 	ClickDetector : ID_ClickDetector 

	# 	Nim : ID_Nim
	# 	ChessMany : ID_ChessMany

	# 	MineSweeper : ID_MineSweeper
	# 	Nand2TetrisALU : ID_Nand2TetrisALU
	# 	RushHour : ID_RushHour # 71

	# "LF: 80-140 LOC" :
	# 	RubikSquare : ID_RubikSquare # 85
	# 	Shortcut2 : ID_Shortcut2 # 126
	# 	Complex : ID_Complex # 80

	# 	Tetris : ID_Tetris # 109
	# 	RubikCube : ID_RubikCube # 121
	# 	C2048 : ID_2048 # 103

	# 	BeeHaiku3D : ID_BeeHaiku3D # 81
	# 	SingaporeMultPolynom : ID_SingaporeMultPolynom # 86
	# 	Sokoban : ID_Sokoban # 94
	# 	ForthHaiku3D : ID_ForthHaiku3D # 138
	# 	ComputerHistory : ID_ComputerHistory
	
	Information :
		Nyheter : ID_nyheter
		Asserts : ID_Asserts
		Blank : ID_Blank
		# Laboratorium : ID_Laboratorium
		# LinesOfCode : ID_LinesOfCode

	Exhibition :
		sailingBoat : ID018
		melon : ID017
		rainbow : ID016
		clown : ID001
		tomteluva : ID002
		snowman : ID003
		christmasTree : ID004
		santa : ID005
		dist : ID006
		bulge : ID007
		wave : ID008
		circle : ID009
		circles : ID010
		sizedCircles : ID011
		rotatedCircles : ID012
		gravity : ID013
		hypnoticA : ID014
		hypnoticB : ID015
		quadraticus : ID019
