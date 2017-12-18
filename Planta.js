class Planta {

  constructor(x, y,  e, f, dna,cor) {
    this.dna = dna;

    this.rootX = x;
    this.rootY = y;
    this.cau = [];
    this.cor = cor;
    this.cau [ 0 ] =new Caule(this.rootX, this.rootY, e, f, this.dna.genes[0],this.cor);
  }

  grow() {
    this.cau[this.cau.length]=new Caule(this.cau[this.cau.length-1].x2, this.cau[this.cau.length-1].y2, this.cau[this.cau.length-1].dX, this.cau[this.cau.length-1].dY, this.dna.genes[this.cau.length],this.cor);
  }

  plant() {
    for (let i = 0; i< this.cau.length; i++) {
      this.cau[i].show();
    }
  }
/*
  calcfitness(sec, w){
    let dado =1;
    for (let i = 0; i< sec; i++) {
      if(this.cau[i].dirX==w[0][i]&&this.cau[i].dirY==w[1][i]){
        this.score+=3*dado;
        dado++;
      } else{
        this.score--;
        dado=1;
      }

    }

    this.score=this.score*dado;

    if (this.score<0) this.score=0;

  }*/

  get novo(){
    let n = this;
    n.cau= new Caule[1];
    n.cau[0]=new Caule(rootX, rootY, 0, -1, dna.genes[0]);
    return n;
  }
}
