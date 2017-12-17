class Caule{
  constructor( x, y, dirX, dirY, gene, cor){
    this.x1=x;
    this.y1=y;
    this.dirX=dirX;
    this.dirY=dirY;
    this.cor=cor;
    this.f=false;
    this.dX=myp5.round(myp5.cos(myp5.acos(this.dirX)+(gene*myp5.HALF_PI)));
    this.dY=myp5.round(myp5.sin(myp5.asin(this.dirY)+(gene*myp5.HALF_PI)));

    if(myp5.random(10)<4){
      this.f=true;
    }

  }

  show() {
    myp5.strokeWeight(0.3);

    myp5.stroke(myp5.red(this.cor)/3,myp5.green(this.cor)/3,myp5.blue(this.cor)/3);
    if (this.dirX==this.dX&& this.dirY==this.dY) {
      this.x2=this.x1+this.dirX;
      this.y2=this.y1+this.dirY;

      myp5.line(this.x1, this.y1, this.x2, this.y2);
    } else {
      this.x2=this.x1+this.dirX+this.dX;
      this.y2=this.y1+this.dirY+this.dY;
      var m;
      if (this.dirX+this.dirY+this.dX+this.dY==0) {
        if (this.dirX+this.dirY<0) m=2;
        else m=0;
      } else {
        if (this.dirX-this.dirY>0) m=3;
        else m =1;
      }
      myp5.noFill();
      myp5.arc(this.x1+this.dX, this.y1+this.dY, 2, 2, myp5.HALF_PI*m, myp5.HALF_PI*(m+1));

    }
    myp5.stroke(this.cor);
    //desenha as flores
    if (this.f) myp5.ellipse(this.x1, this.y2, 0.5, 0.5);
  }


}
