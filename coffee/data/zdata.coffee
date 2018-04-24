# v : version YY-MM-DD
# k : keywords
# l : lines of code
# h : hardness 0=Example 1=Easy 2=Medium 3=Hard
# b : user code
# a : original code
# c : commands
# e : links

data =
	"1: bg point sc sw" :
		Background1 : ID_Background1
		Background2 : ID_Background2
		Background3 : ID_Background3
		Background4 : ID_Background4
		X : ID_X
		Y : ID_Y
		CornerPoints : ID_CornerPoints
		MidPoints : ID_MidPoints
		CornerPoints7 : ID_CornerPoints7
		CornerPoints3 : ID_CornerPoints3
		Diagonal1 : ID_Diagonal1
		Diagonal2 : ID_Diagonal2
		Dices : ID_Dices

	"2: circle rect line fc" :
		GreenRect : ID_GreenRect
		WhiteCircle : ID_WhiteCircle
		WhiteEmptyCircle : ID_WhiteEmptyCircle
		TwoDiscsA : ID_TwoDiscsA
		TwoDiscsB : ID_TwoDiscsB
		HorizontalLine : ID_HorizontalLine
		VerticalLine : ID_VerticalLine
		Line : ID_Line
		Five : ID_Five
		Cross : ID_Cross
		SquareHole : ID_SquareHole
		FlagSweden : ID_FlagSweden

	"3: ellipse arc triangle quad" :
		GreenEllipse : ID_GreenEllipse
		Triangle : ID_Triangle
		Quad : ID_Quad
		Arc : ID_Arc
		TwoArcs : ID_TwoArcs
		PacMan : ID_PacMan

	"4: for range lerp []" :
		HorizontalSquares : ID_HorizontalSquares
		VerticalSquares : ID_VerticalSquares
		DiagonalSquares : ID_DiagonalSquares
		GrowingSquares : ID_GrowingSquares
		GrowingRedSquares : ID_GrowingRedSquares
		GrowingCircles : ID_GrowingCircles
		ShrinkingCircles : ID_ShrinkingCircles
		RedCone : ID_RedCone
		Sunshine : ID_Sunshine
		Lines : ID_Lines
		Grid : ID_Grid
		DoubleForLoop : ID_DoubleForLoop
		PentaLerp : ID_PentaLerp
		Skislope : ID_Skislope
		SuperCircle : ID_SuperCircle
		ColorSide : ID_ColorSide
		ColorCross : ID_ColorCross

	"5: if then else" :
		ChessRow : ID_ChessRow 
		ChessBoard : ID_ChessBoard 
		GalaxiesOne : ID_GalaxiesOne 
		GalaxiesColliding : ID_GalaxiesColliding 

	"6: translate rotate scale" :
		Translate : ID_Translate
		Rotate : ID_Rotate
		Scale : ID_Scale 
		PushPop : ID_PushPop
		RotatedEllipse : ID_RotatedEllipse
		RotatedRectA : ID_RotatedRectA
		RotatedRectB : ID_RotatedRectB
		RotatedRectC : ID_RotatedRectC
		Cards : ID_Cards
		SnowWhiteAndThe7Lerps : ID_SnowWhiteAndThe7Lerps
		MayFlower : ID_MayFlower 
		FlagUnitedKingdom : ID_FlagUnitedKingdom		
		FlagKorea : ID_FlagKorea
		SuperCircle2 : ID_SuperCircle2

	"7: text textAlign textSize" :
		TextA : ID_TextA
		TextB : ID_TextB
		TextC : ID_TextC
		CoffeescriptClock : ID_CoffeescriptClock
		Roulette : ID_Roulette

	"8: -> (function)" :
		Function : ID_Function
		p5 : ID_P5
		Average : ID_Average
		Lerp : ID_Lerp
		Map : ID_Map
		ManyDices : ID_ManyDices

	"9: class" :
		Counter : ID_Counter
		Square : ID_Square
		Moire : ID_Moire
		RandomDice : ID_RandomDice
		Girlang : ID_Girlang
		GUI : ID_GUI
		IndianSun : ID_IndianSun
		Polygon : ID_Polygon
		GoldenStar : ID_GoldenStar
		Braid : ID_Braid
		SpaceShip : ID_SpaceShip
		Klocka : ID_Klocka

	"A: 20-30 LOC" :
		Stopwatch : ID_Stopwatch
		OlympicRingPrep : ID_OlympicRingPrep
		GuessANumber : ID_GuessANumber
		Korg : ID_Korg
		Korsord : ID_Korsord
		OlympicRings : ID_OlympicRings
		Alphanumeric : ID_Alphanumeric
		RecursiveCircle : ID_RecursiveCircle
		EngineeringNotation : ID_EngineeringNotation		

	"B: 30-40 LOC" :	
		SevenSegment : ID_SevenSegment
		ColorCube : ID_ColorCube
		Connect4 : ID_Connect4

		GuessANumberHex : ID_GuessANumberHex
		Mandelbrot : ID_Mandelbrot
		Nian : ID_Nian

		Coordinator : ID_Coordinator	
		MultiTimer : ID_MultiTimer
		BlackBox2D : ID_BlackBox2D
		LinearRegression : ID_LinearRegression
		Quiz : ID_Quiz
		Paint : ID_Paint
		Tetramino : ID_Tetramino

	"C: 40-50 LOC" :
		ColorPair : ID_ColorPair
		GameOfLife : ID_GameOfLife
		Snake4 : ID_Snake4
		BouncingBalls : ID_BouncingBalls

		Snake : ID_Snake
		Kalkylator : ID_Kalkylator
		Hex : ID_Hex
		Braider : ID_Braider

		TowerOfHanoi : ID_TowerOfHanoi
		Reversi : ID_Reversi
		ForthHaiku : ID_ForthHaiku
		SingaporeMult : ID_SingaporeMult
		PickingBerries : ID_PickingBerries

	"D: 50-60 LOC" :
		ChessOne : ID_ChessOne
		SingaporeMultComplex : ID_SingaporeMultComplex
		Angle : ID_Angle

	"E: 60-80 LOC" :
		Shortcut : ID_Shortcut
		ClickDetector : ID_ClickDetector 

		Nim : ID_Nim
		ChessMany : ID_ChessMany

		MineSweeper : ID_MineSweeper
		Nand2TetrisALU : ID_Nand2TetrisALU
		RushHour : ID_RushHour # 71

	"F: 80-140 LOC" :
		RubikSquare : ID_RubikSquare # 85
		Shortcut2 : ID_Shortcut2 # 126
		Complex : ID_Complex # 80

		Tetris : ID_Tetris # 109
		RubikCube : ID_RubikCube # 121
		C2048 : ID_2048 # 103

		BeeHaiku3D : ID_BeeHaiku3D # 81
		SingaporeMultPolynom : ID_SingaporeMultPolynom # 86
		Sokoban : ID_Sokoban # 94
		ForthHaiku3D : ID_ForthHaiku3D # 138
	
	Information :
		Nyheter : ID_nyheter
		Asserts : ID_Asserts
		Blank : ID_Blank
		Laboratorium : ID_Laboratorium
		LinesOfCode : ID_LinesOfCode

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
