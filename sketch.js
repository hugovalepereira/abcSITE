

var s = function(sketch){

  var d;
  var a, b,c;

  var f;

  var comp=1000;

  sketch.setup = function(){

    sketch.createCanvas(window.innerWidth,window.innerHeight);

    sketch.f =sketch.color(255, 200, 0);
    sketch.d= new DNA('a');
    sketch.a= new Planta(sketch.round((sketch.width/2)/25), sketch.round((sketch.height/2)/25), 0, -1, sketch.d, sketch.f);
    sketch.b= new Planta(sketch.round((sketch.width/2)/25+5), sketch.round((sketch.height/2)/25-3), 1, 0, new DNA('b'), sketch.color(200, 0, 255));
    sketch.c= new Planta(sketch.round((sketch.width/2)/25+10), sketch.round((sketch.height/2)/25-5), 0, -1, new DNA('c'), sketch.color(200, 0, 255));


  };


  sketch.draw= function(){
    sketch.clear();
    //sketch.background(255,255,255,0);
    sketch.scale(25, 25);

    sketch.a.plant();
    sketch.a.grow();
    sketch.b.plant();
    sketch.b.grow();
    sketch.c.plant();
    sketch.c.grow();


    if (sketch.a.cau.length==14) {

      sketch.noLoop();
    }

  };

};

var myp5 = new p5(s);
