

var s = function(sketch){


  var a, b, c;
  var corA, corB, corC;



  var comp=1000;

  sketch.setup = function(){

    sketch.createCanvas(window.innerWidth,window.innerHeight);

    sketch.corA =sketch.color(255, 196, 71);
    sketch.corB =sketch.color(200, 0, 255);
    sketch.corC =sketch.color(0, 200, 255);


    sketch.corA =sketch.color(255, 196, 71);
    sketch.corB =sketch.color(193,209,70);
    sketch.corC =sketch.color(240,98,105);
    sketch.a= new Planta(sketch.round(-5), sketch.round(2), 0, -1, new DNA('a'), sketch.corA);
    sketch.b= new Planta(sketch.round(0), sketch.round(-1), 1, 0, new DNA('b'), sketch.corB);
    sketch.c= new Planta(sketch.round(5), sketch.round(-3), 0, -1, new DNA('c'), sketch.corC);


  };


  sketch.draw= function(){

    sketch.clear();
    sketch.translate(sketch.width*0.5,sketch.height*0.5);
    //sketch.background(255,255,255,0);
    sketch.scale(25, 25);

    sketch.a.plant();

    if (sketch.a.cau.length<13) {
      sketch.a.grow();
    }

    sketch.b.plant();
    if (sketch.b.cau.length<13) {
      sketch.b.grow();
    }

    sketch.c.plant();
    if (sketch.c.cau.length<8){
      sketch.c.grow();
    }


    if (sketch.a.cau.length>=14) {

      sketch.noLoop();
      alert('sexo');
      sketch.$('#main').append("<p>AGRICULTURA<br>BIOLÓGICA<br>COIMBRA</p>");
    }

  };

  sketch.windowResized = function() {
    sketch.resizeCanvas(window.innerWidth, window.innerHeight);
  }

};

var myp5 = new p5(s);
