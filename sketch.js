

var s = function(sketch){

  var d;
  var p;

  var f;

  var comp=1000;

  sketch.setup = function(){

    sketch.createCanvas(window.innerWidth,window.innerHeight);

    sketch.f =sketch.color(255, 200, 0);
    sketch.d= new DNA();
    sketch.p= new Planta(sketch.round((sketch.width/2)/15), sketch.round((sketch.height/2)/15), 0, -1, sketch.d, sketch.f);

  };


  sketch.draw= function(){
    sketch.clear();
    //sketch.background(255,255,255,0);
    sketch.scale(15, 15);

    sketch.p.plant();
    sketch.p.grow();

    if (sketch.p.cau.length==sketch.comp) {

      sketch.noLoop();
    }

  };

};

var myp5 = new p5(s);
