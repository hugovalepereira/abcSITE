
class DNA{
  constructor(){
    this.length=1000;
    this.genes = [];

    for (var i = 0; i<this.length; i++) {
      this.genes[i]=myp5.round(myp5.random(-1, 1));
    }
    
  }




}
