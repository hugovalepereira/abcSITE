
class DNA{
  constructor( letra ){
    if(letra){
      if(letra=='a'){
        this.genes =[0,0,0,0,0,-1,1,0,0,0,0,0,0,1,0,0,-1,1,0,-1];

      }else if(letra=='b'){
        this.genes =[-1,0,1,1,0,0,0,0,-1,-1,0,1,0,0,1,0,-1,-1,-1,0];

      }else if(letra=='c'){
        this.genes =[1,1,0,0,0,0,-1,-1,-1,1,0,-1,0,-1,0,-1,0,-1,0,0];
      }
    }else{
      this.length=200;
      this.genes = [];

      for (var i = 0; i<this.length; i++) {
        this.genes[i]=myp5.round(myp5.random(-1, 1));
      }
    }

  }




}
