BACKGR = 0

function Area(pixels,x0,y0,w,h) {
    this.pixels = pixels
    this.x0=x0
    this.y0=y0
    this.w=w
    this.h=h
    this.W = 5+201+5

    this.getPixel = function(i,j) {
      index = 4 * ((this.y0 + j) * this.W + this.x0 + i)
      return [this.pixels[index+0],this.pixels[index+1],this.pixels[index+2],this.pixels[index+3]]
    }
    
    this.setPixel = function(i,j,pixel) {
      index = 4 * ((this.y0 + j) * this.W + this.x0 + i)
      this.pixels[index+0] = pixel[0]
      this.pixels[index+1] = pixel[1]
      this.pixels[index+2] = pixel[2]
      this.pixels[index+3] = pixel[3]
    }
}