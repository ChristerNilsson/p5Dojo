ID020 = # Background1:
	v:'2017-04-29'
	b: """
# LOC:1
# Första bilden ska du efterlikna.
# Andra bilden skapas av din kod.
# Tredje bilden visar skillnaden mellan de två andra. Ska bli svart när du är klar.

# Tryck på PgDn för att komma till sista raden.
# Skriv in följande kommando: bg 1
# Kontrollera att de två första bilderna nu är lika, och att den tredje är helt svart.

# Klicka på Background2 för att komma till nästa övning.
# Klicka på p5Dojo nere till vänster för mera information.
# Klicka på p5 för att se fler kommandon.

"""
	a: "bg 1"

ID021 = # Background2:
	v:'2017-04-29'
	b: "# LOC:1 bg\n"
	a: "bg 0.5"

ID022 = # Background3:
	v:'2017-04-29'
	b: "# LOC:1 bg\n"
	a: "bg 1,0,0"

ID023 = # Background4:
	v:'2017-04-29'
	b: "# LOC:1 bg\n"
	a: "bg 1,1,0"

ID024 = # X:
	v:'2017-04-29'
	b: """
# LOC:4 sw # point

sw 10      # strokeWeight, strecktjocklek i pixlar
point 100,100  # ritar en punkt på koordinaten x,y

"""
	a: """
sw 20
point 0,0
point 100,0
point 200,0
"""
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID025 = # Y:
	v:'2017-04-29'
	b: """
# LOC:5 sc sw # point

sw 20
sc 1,0,0   # strokeColor, streckfärg red,green,blue
point 100,100

"""
	a: """
sw 10
sc 1,0,0
point 0,0
point 0,100
point 0,200
"""
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID026 = # CornerPoints:
	v:'2017-04-29'
	b: """
# LOC:9 sc sw # point

sw
sc
point

"""
	a: """
sw 10
sc 1,0,0
point 0,0
sc 0,1,0
point 200,0
sc 1,1,0
point 0,200
sc 0
point 200,200
"""
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID027 = # MidPoints:
	v:'2017-04-29'
	b: "# LOC:11 sc sw # point\n"
	a: """
sw 10
sc 1,0,0
point 100,100
sc 0,1,0
point 100,0
sc 1,1,0
point 0,100
sc 0
point 200,100
sc 1
point 100,200
"""
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID028 = # CornerPoints3:
	v:'2017-04-29'
	b: "# LOC:17 sc sw # point\n"
	a: """
sw 10
sc 1,0,0
point 20,0
point 20,20
point 0,20

sc 0,1,0
point 180,0
point 180,20
point 200,20

sc 1,1,0
point 20,180
point 20,200
point 0,180

sc 1
point 180,180
point 180,200
point 200,180
"""
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID029 = # CornerPoints7:
	v:'2017-04-29'
	b: "# LOC:17 sc sw # point\n"
	a: """
sw 10
sc 1,0,0
point 30,0
point 30,10
point 30,20
point 30,30
point 10,30
point 20,30
point 0,30

sc 0,1,0
point 170,200
point 170,190
point 170,180
point 170,170
point 190,170
point 180,170
point 200,170
"""
	e :
		Matteboken : "http://www.matteboken.se/lektioner/matte-1/funktioner/koordinatsystem"

ID030 = # Diagonal1:
	v:'2017-04-29'
	b: "# LOC:12 sc sw # point\n"
	a: """
bg 0,1,0
sw 20
sc 0,0,0
point 0,0

sc 0.25,0.25,0
point 50,50

sc 0.5,0.5,0
point 100,100

sc 0.75,0.75,0
point 150,150

sc 1,1,0
point 200,200
"""

ID031 = # Diagonal2:
	v:'2017-04-29'
	b: "# LOC:11 sc sw # point\n"
	a: """
sw 20
sc 1,0,0
point 200,0

sc 0.75,0.25,0
point 150,50

sc 0.5,0.5,0
point 100,100

sc 0.25,0.75,0
point 50,150

sc 0,1,0
point 0,200
"""
