BACKGR = 0

class Area
  constructor : (@pixels,@x,@y,@w,@h) ->
    @W = 5+201+5

  getPixel : (i,j) ->
      index = 4 * ((@y + j) * @W + @x + i)
      [@pixels[index+0],@pixels[index+1],@pixels[index+2],@pixels[index+3]]
    
  setPixel : (i,j,pixel) ->
      index = 4 * ((@y + j) * @W + @x + i)
      @pixels[index+0] = pixel[0]
      @pixels[index+1] = pixel[1]
      @pixels[index+2] = pixel[2]
      @pixels[index+3] = pixel[3]