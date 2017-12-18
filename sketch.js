

var s = function(sketch){


  var a, b, c, e;
  var corA, corB, corC, corE;
  sketch.aF=sketch.bF=sketch.cF= false;

  sketch.stop=true;
  var comp=1000;

  sketch.setup = function(){

    sketch.createCanvas(window.innerWidth,window.innerHeight);

    sketch.corA =sketch.color(255, 196, 71);
    sketch.corE =sketch.color(255, 100, 60);
    sketch.corB =sketch.color(0, 200, 255);


    sketch.corA =sketch.color(255, 196, 71);
    sketch.corB =sketch.color(193,209,70);
    sketch.corC =sketch.color(240,98,105);
    sketch.a= new Planta(-5, 2, 0, -1, new DNA('a'), sketch.corA);
    sketch.b= new Planta(0, -1, 1, 0, new DNA('b'), sketch.corB);
    sketch.c= new Planta(5, -3, 0, -1, new DNA('c'), sketch.corC);
    //sketch.e= new Planta(-10, -1, 1, 0, new DNA('b'), sketch.corE);


  };


  sketch.draw= function(){

    sketch.clear();
    sketch.translate(sketch.width*0.5,sketch.height*0.5);
    //sketch.background(255,255,255,0);
    sketch.scale(25, 25);


    sketch.a.plant();
    if (sketch.a.cau.length<13) {
      sketch.a.grow();
    }else{

      sketch.aF=true;
    }


    // PLANTA DE TESTE

    // sketch.e.plant();
    // if (sketch.e.cau.length<13) {
    //   sketch.e.grow();
    // }

    sketch.b.plant();
    if (sketch.b.cau.length<13) {
      sketch.b.grow();
    }else{

      sketch.bF=true;
    }

    sketch.c.plant();
    if (sketch.c.cau.length<8){
      sketch.c.grow();
    }else{
      sketch.cF=true;
    }

    console.log(sketch.aF,sketch.bF,sketch.cF);
    if (sketch.aF && sketch.bF && sketch.cF && sketch.stop) {

      setTimeout(function(){
        $('body').append("<p id='type'>AGRICULTURA<br>BIOLÓGICA<br>COIMBRA</p><div id='box'><div id='botaoInicial'></div><div id='botaoSombra'></div></div>");
        $('#type').animate({opacity:1},1500);
        $('#box').animate({opacity:1},1500);
      },500);
      sketch.stop=false;
      sketch.noLoop();

    }

  };

  sketch.windowResized = function() {
    sketch.resizeCanvas(window.innerWidth, window.innerHeight);
    sketch.noLoop();
  }

};

var myp5 = new p5(s,'main');
