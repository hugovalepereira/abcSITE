

var s = function(sketch){


  var a, b, c, e;
  var corA, corB, corC, corE;
  sketch.aF=sketch.bF=sketch.cF= false;

  sketch.stop=true;
  sketch.intro=false;
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
    console.log((sketch.mouseX-sketch.width*0.5)/25,(sketch.mouseY-sketch.height*0.5)/25);
    sketch.a.plant();
    if ((sketch.a.cau.length<13 || sketch.intro)&&sketch.a.cau.length<80) {
      sketch.a.grow();

    }else{

      sketch.aF=true;

    }


    // PLANTA DE TESTE

    // sketch.e.plant();
    // if (sketch.e.cau.length<13) {
    //   sketch.e.grow();
    // }
    console.log('yey');
    sketch.b.plant();
    if ((sketch.b.cau.length<13 || sketch.intro)&&sketch.a.cau.length<80) {
      sketch.b.grow();
    }else{

      sketch.bF=true;
    }

    sketch.c.plant();
    if ((sketch.c.cau.length<8 || sketch.intro)&&sketch.a.cau.length<80){
      sketch.c.grow();
    }else{
      sketch.cF=true;
    }


    if (sketch.aF && sketch.bF && sketch.cF) {
      sketch.noLoop();
      if(sketch.stop){
        setTimeout(function(){
          $('body').append("<p id='type'>AGRICULTURA<br>BIOLÓGICA<br>COIMBRA</p><div id='box' class='box'><div class='botaoInicial'></div><div class='botaoSombra'></div></div>");
          $('body').append("<span id='label' class='label'>&#8249; clica-me</span>");
          $('#type').animate({opacity:1},1500);
          var b = $('#box');
          var l = $('#label');
          b.animate({opacity:1},1500);

          l.animate({opacity:1},1500);
          $('.botaoSombra').click(function() {
            $( this ).animate({width:'40px',height:'40px'},100,function() {
              $( this ).animate({opacity:0,width:0,height:0},400,function(){
                //MUDAR DE PÁGINA
                sketch.intro=true;
                sketch.aF=sketch.bF=sketch.cF=false;
                sketch.loop();
                //TROCAR ISTO
                setTimeout(function(){$( '#type' ).animate({marginTop: '128px'},1000);},100);
                $('#box').remove();
                $('#label').remove();  //alterar
                console.log('intro '+sketch.intro);
              });
            });
          });
        },500);
        sketch.stop=false;
      }

      if(sketch.intro){
        var what = ['&#8249; histórias de sucesso','&#8249; sobre nós','&#8249; calendário','conselhos &#8250;','conselhos &#8250;'];
        var col = ['rgb(255, 196, 71)','rgb(240,98,105)','rgb(255, 196, 71)','rgb(240,98,105)','rgb(193,209,70)','rgb(240,98,105)'];

        for(var i=0; i<6;i++){
          $('body').append("<div id='box"+i+"' class='box'><div style=' border-color: "+col[i]+";' class='botaoInicial'></div><div style=' border-color: "+col[i]+";' class='botaoSombra'></div></div>");
          $('body').append("<span id='label"+i+"' class='label'>"+what[i]+"</span>");
          $('.box').animate({opacity:1},1500);
          $('.label').animate({opacity:1},1500);
        }
        $('.botaoSombra').click(function() {
          $( this ).animate({width:'40px',height:'40px'},100,function() {
            $( this ).animate({opacity:0,width:0,height:0},400,function(){
              location.replace('a.html');

            });
          });
        });

      }

    }

  };

  sketch.windowResized = function() {
    sketch.resizeCanvas(window.innerWidth, window.innerHeight);
    sketch.noLoop();
  }

};

var myp5 = new p5(s,'main');
