(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 960,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/cnec.png", id:"cnec"},
		{src:"images/noas.png", id:"noas"},
		{src:"sounds/click.mp3", id:"click"},
		{src:"sounds/music.mp3", id:"music"},
		{src:"sounds/sword.mp3", id:"sword"}
	]
};



// symbols:



(lib.cnec = function() {
	this.initialize(img.cnec);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,94);


(lib.noas = function() {
	this.initialize(img.noas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,39);


(lib.Under = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().rr(-57,-57,114,114,9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-57,114,114);


(lib.title = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgAXAgmIAAhPIBRAAIg3ipIhXD4IhmAAICIl4IBsAAICBF4gAiUZLIAAl3IDzgBQAWAAAOALQANAJAFAYIAABqQgFAOgIAGQgJAHgIAEIAAANQAIAAAHAFQAGAFAJAJIAAB9QgJAmgtAAgAguX/IBXAAIAAhXIhXAAgAguVpIBXAAIAAhFIhXAAgAiTRwIAAl3IEnAAIgdBQIikAAIAABFICkAAIAABOIikAAIAABDIDBgBIgdBSgAArKXIhKijIAAhAIBJAAIAAhGIhbAAIAEEnIhmAAIAAi0IgBAAIABgBIAAjCIDzAAQAWAAANALQAOAKAEAWIAAA+IAAAjIAAASIAAAKQgEAUgKAKQgKALgQACIAAACIgnAAIBPCkgAiTC6IAAl0IBlAAIABEmIBZAAIAAkkIACAAIAAgCIBlAAIABF0gAgykeIAAkoIhhAAIAAhPIEnAAIAABPIhiAAIgBEogAh3tJICgAAIABhFIiJAAQgsAAgJglIAAgUIABgVIgBAAIAAhoQAFgXANgKQANgLAWAAIDzAAIgQAuIgNAjIAAAAIg8AAIAAAAIhkAAIAABDICIAAQAXgBANALQANAKAFAXIgBADIAAADIABAAIAACMQgJAlgsABIhNABIAAAAIinABgAgxzTIAAl2IBjAAIgBF2gACP6uIAAkZIAAAAIAAgOIhdAAIAAEnIhkAAIAAgCIgBAAIAAklIhbAAIgBEnIhlAAIAAl2IHoAAIABgBIAAAAIAAABIgBF2g");
	this.shape.setTransform(0,-25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ApXC0IAAlnISvAAIAAFng");
	this.shape_1.setTransform(0,-268);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#660000","#FF0000"],[0,1],0,250,0,-250).s().p("AgCffIpVHlMAAAhOHISvAAMAAABOHg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-286,120,536.1);


(lib.score = function() {
	this.initialize();

	// Camada 1
	this.highScoreTxt = new cjs.Text("0", "20px 'Cartoonist'", "#333333");
	this.highScoreTxt.name = "highScoreTxt";
	this.highScoreTxt.textAlign = "center";
	this.highScoreTxt.lineHeight = 22;
	this.highScoreTxt.lineWidth = 97;
	this.highScoreTxt.setTransform(66,-4.6);

	this.text = new cjs.Text("high score", "10px 'Cartoonist'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.lineWidth = 97;
	this.text.setTransform(66,-18.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().rr(-65.05,-25,130.1,50,9);
	this.shape.setTransform(68,0,0.999,1);

	this.movesTxt = new cjs.Text("0", "30px 'Cartoonist'", "#333333");
	this.movesTxt.name = "movesTxt";
	this.movesTxt.textAlign = "center";
	this.movesTxt.lineHeight = 32;
	this.movesTxt.lineWidth = 98;
	this.movesTxt.setTransform(-70,-22.6);

	this.text_1 = new cjs.Text("movimentos", "10px 'Cartoonist'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 12;
	this.text_1.lineWidth = 97;
	this.text_1.setTransform(-70,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().rr(-65.05,-25,130.1,50,9);
	this.shape_1.setTransform(-68,0,0.999,1);

	this.addChild(this.shape_1,this.text_1,this.movesTxt,this.shape,this.text,this.highScoreTxt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.9,-25,265.9,50);


(lib.Ponto = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().dr(-19.5,-19.5,39,39);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.5,-19.5,39,39);


(lib.pecaBG = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().rr(-50,-50,100,100,9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.limpaScores = function() {
	this.initialize();

	// Camada 1
	this.score = new cjs.Text("LIMPAR HIGH SCORES", "15px 'Cartoonist'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 17;
	this.score.lineWidth = 165;
	this.score.setTransform(-2,-9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().rc(-102.5,-23,205,46,9,0,0,0);

	this.addChild(this.shape,this.score);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.5,-23,205,46);


(lib.levelTitle = function() {
	this.initialize();

	// Camada 1
	this.title = new cjs.Text("ESCOLHA A QUANTIDADE DE PECAS.", "40px 'Cartoonist'", "#FFFFFF");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 42;
	this.title.lineWidth = 463;
	this.title.setTransform(-2,-30);

	this.addChild(this.title);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-233.5,-30,467,80.7);


(lib.level4Option = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("movimentos", "15px 'Cartoonist'", "#003366");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 165;
	this.text.setTransform(185.2,76);

	this.score = new cjs.Text("0", "40px 'Cartoonist'", "#003366");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 42;
	this.score.lineWidth = 165;
	this.score.setTransform(185.2,36.9);

	this.text_1 = new cjs.Text("high score", "20px 'Cartoonist'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 122;
	this.text_1.setTransform(185.2,0);

	this.text_2 = new cjs.Text("peças", "15px 'Roboto'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 60;
	this.text_2.setTransform(50.5,83);

	this.text_3 = new cjs.Text("6", "50px 'Cartoonist'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 52;
	this.text_3.lineWidth = 41;
	this.text_3.setTransform(50.5,32.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#003366","#000000"],[0,1],-8.3,-17.5,0,-8.3,-17.5,78.5).s().rr(-52.5,-52.5,105,105,21);
	this.shape.setTransform(52.5,57.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.749)").s().rr(-100,-34.5,200,69,15);
	this.shape_1.setTransform(187.2,57.5);

	this.addChild(this.shape_1,this.shape,this.text_3,this.text_2,this.text_1,this.score,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,287.2,110);


(lib.level3Option = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("movimentos", "15px 'Cartoonist'", "#003366");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 165;
	this.text.setTransform(185.2,76);

	this.score = new cjs.Text("0", "40px 'Cartoonist'", "#003366");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 42;
	this.score.lineWidth = 165;
	this.score.setTransform(185.2,36.9);

	this.text_1 = new cjs.Text("high score", "20px 'Cartoonist'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 122;
	this.text_1.setTransform(185.2,0);

	this.text_2 = new cjs.Text("peças", "15px 'Roboto'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 60;
	this.text_2.setTransform(50.5,83);

	this.text_3 = new cjs.Text("5", "50px 'Cartoonist'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 52;
	this.text_3.lineWidth = 41;
	this.text_3.setTransform(50.5,32.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#003366","#000000"],[0,1],-8.3,-17.5,0,-8.3,-17.5,78.5).s().rr(-52.5,-52.5,105,105,21);
	this.shape.setTransform(52.5,57.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.749)").s().rr(-100,-34.5,200,69,15);
	this.shape_1.setTransform(187.2,57.5);

	this.addChild(this.shape_1,this.shape,this.text_3,this.text_2,this.text_1,this.score,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,287.2,110);


(lib.level2Option = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("movimentos", "15px 'Cartoonist'", "#003366");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 165;
	this.text.setTransform(185.2,76);

	this.text_1 = new cjs.Text("movimentos", "15px 'Cartoonist'", "#003366");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 165;
	this.text_1.setTransform(185.2,76);

	this.score = new cjs.Text("0", "40px 'Cartoonist'", "#003366");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 42;
	this.score.lineWidth = 165;
	this.score.setTransform(185.2,36.9);

	this.text_2 = new cjs.Text("high score", "20px 'Cartoonist'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 122;
	this.text_2.setTransform(185.2,0);

	this.text_3 = new cjs.Text("peças", "15px 'Roboto'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 60;
	this.text_3.setTransform(50.5,83);

	this.text_4 = new cjs.Text("4", "50px 'Cartoonist'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 52;
	this.text_4.lineWidth = 41;
	this.text_4.setTransform(50.5,32.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#003366","#000000"],[0,1],-8.3,-17.5,0,-8.3,-17.5,78.5).s().rr(-52.5,-52.5,105,105,21);
	this.shape.setTransform(52.5,57.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.749)").s().rr(-100,-34.5,200,69,15);
	this.shape_1.setTransform(187.2,57.5);

	this.addChild(this.shape_1,this.shape,this.text_4,this.text_3,this.text_2,this.score,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,287.2,110);


(lib.level1Option = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("movimentos", "15px 'Cartoonist'", "#003366");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 165;
	this.text.setTransform(185.2,76);

	this.score = new cjs.Text("0", "40px 'Cartoonist'", "#003366");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 42;
	this.score.lineWidth = 165;
	this.score.setTransform(185.2,36.9);

	this.text_1 = new cjs.Text("peças", "15px 'Roboto'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 60;
	this.text_1.setTransform(50.5,83);

	this.text_2 = new cjs.Text("3", "50px 'Cartoonist'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 52;
	this.text_2.lineWidth = 41;
	this.text_2.setTransform(50.5,32.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#003366","#000000"],[0,1],-8.3,-17.5,0,-8.3,-17.5,78.5).s().rr(-52.5,-52.5,105,105,21);
	this.shape.setTransform(52.5,57.5);

	this.text_3 = new cjs.Text("high score", "20px 'Cartoonist'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 122;
	this.text_3.setTransform(185.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.749)").s().rr(-100,-34.5,200,69,15);
	this.shape_1.setTransform(187.2,57.5);

	this.addChild(this.shape_1,this.text_3,this.shape,this.text_2,this.text_1,this.score,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,287.2,110);


(lib.instrucoes = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ehe5ASIMAAAgkPMC9zAAAMAAAAkPg");
	this.shape.setTransform(275,100,0.453,0.862);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,200);


(lib.instrucaoText = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("CLIQUE (PC) OU TOQUE (MOBILE) SOBRE AS PEÇAS PARA MOVIMENTÁ-LAS ATÉ QUE ELAS ESTEJAM EM ORDEM CRESCENTE.\nANTES DE INICIAR, VOCÊ DEVE ESCOLHER A QUANTIDADE DE PEÇAS QUE IRÃO COMPOR O TABULEIRO.\nATENÇÃO! NEM SEMPRE, MENOS PEÇAS SIGNIFICAM UM JOGO MAIS FÁCIL.\n\nBOA SORTE!", "18px 'Roboto'", "#990000");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 506;
	this.text.setTransform(-1,-73.8);

	this.text_1 = new cjs.Text("INSTRUÇÕES", "bold 50px 'Roboto'", "#111111");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 52;
	this.text_1.setTransform(-1,-180.1);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-254,-180.1,510,368.3);


(lib.gameTitle = function() {
	this.initialize();

	// Camada 1
	this.title = new cjs.Text("MISTUREBA", "60px 'Cartoonist'", "#FFFFFF");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 62;
	this.title.lineWidth = 320;
	this.title.setTransform(-2,-30);

	this.addChild(this.title);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162,-30,324.1,60.1);


(lib.finalizacao = function() {
	this.initialize();

	// Camada 1
	this.title = new cjs.Text("MONTAGEM CONCLUÍDA", "30px 'Roboto Cn'", "#333333");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 32;
	this.title.lineWidth = 320;
	this.title.setTransform(273,184.6);

	this.title_1 = new cjs.Text("PARABÉNS!", "60px 'Roboto Cn'", "#333333");
	this.title_1.name = "title_1";
	this.title_1.textAlign = "center";
	this.title_1.lineHeight = 62;
	this.title_1.lineWidth = 320;
	this.title_1.setTransform(273,57);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Egq9AfPMAAAg+eMBV6AAAMAAAA+eg");
	this.shape.setTransform(275,200);

	this.addChild(this.shape,this.title_1,this.title);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,400);


(lib.buttonBG = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlyFyQiZiZAAjZQAAjYCZiaQCaiZDYAAQDZAACZCZQCbCagBDYQABDZibCZQiZCajZAAQjYAAiaiag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


(lib.btjogar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{s1:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// label
	this.text = new cjs.Text("JOGAR", "bold 30px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(-2,-18.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(11));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00FFFF","#0099CC"],[0,1],2,-35,2,35).s().rr(-75,-35,150,70,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00FFFF","#0099CC"],[0,1],-0.5,-36.1,-0.5,33.9).s().p("AqOFpQh4AAABh4IAAnhQgBh4B4AAIUdAAQB4AAgBB4IAAHhQABB4h4AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00FFFF","#0099CC"],[0,1],-3,-37.3,-3,32.7).s().p("AqnF1Qh3AAgBh4IAAn5QABh4B3AAIVPAAQB3AAABB4IAAH5QgBB4h3AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#00FFFF","#0099CC"],[0,1],-5.5,-38.4,-5.5,31.6).s().p("Aq/GBQh5AAAAh4IAAoRQAAh4B5AAIV/AAQB5AAAAB4IAAIRQAAB4h5AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#00FFFF","#0099CC"],[0,1],-8,-39.6,-8,30.4).s().rr(-85,-39.65,170,79.3,12);
	this.shape_4.setTransform(0,0,1,1.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#00FFFF","#0099CC"],[0,1],-6.3,-38.8,-6.3,31.2).s().p("ArIGEQh4AAAAh4IAAoXQAAh4B4AAIWRAAQB4AAAAB4IAAIXQAAB4h4AAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#00FFFF","#0099CC"],[0,1],-4.6,-38,-4.6,32).s().p("Aq3F9Qh4AAAAh4IAAoJQAAh4B4AAIVvAAQB4AAAAB4IAAIJQAAB4h4AAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#00FFFF","#0099CC"],[0,1],-1.3,-36.5,-1.3,33.5).s().p("AqWFtQh4AAAAh4IAAnpQAAh4B4AAIUtAAQB4AAAAB4IAAHpQAAB4h4AAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#00FFFF","#0099CC"],[0,1],0.4,-35.7,0.4,34.3).s().p("AqFFmQh4gBAAh4IAAnZQAAh4B4gBIULAAQB4ABAAB4IAAHZQAAB4h4ABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-35,150,70);


(lib.btcontinuar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// label
	this.text = new cjs.Text("CONTINUAR", "bold 20px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 111;
	this.text.setTransform(-2,-14);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(11));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00FFFF","#0099CC"],[0,1],2,-35,2,35).s().rr(-75,-35,150,70,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00FFFF","#0099CC"],[0,1],-0.5,-36.1,-0.5,33.9).s().p("AqOFpQh4AAABh4IAAnhQgBh4B4AAIUdAAQB4AAgBB4IAAHhQABB4h4AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00FFFF","#0099CC"],[0,1],-3,-37.3,-3,32.7).s().p("AqnF1Qh3AAgBh4IAAn5QABh4B3AAIVPAAQB3AAABB4IAAH5QgBB4h3AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#00FFFF","#0099CC"],[0,1],-5.5,-38.4,-5.5,31.6).s().p("Aq/GBQh5AAAAh4IAAoRQAAh4B5AAIV/AAQB5AAAAB4IAAIRQAAB4h5AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#00FFFF","#0099CC"],[0,1],-8,-39.6,-8,30.4).s().rr(-85,-39.65,170,79.3,12);
	this.shape_4.setTransform(0,0,1,1.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#00FFFF","#0099CC"],[0,1],-6.3,-38.8,-6.3,31.2).s().p("ArIGEQh4AAAAh4IAAoXQAAh4B4AAIWRAAQB4AAAAB4IAAIXQAAB4h4AAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#00FFFF","#0099CC"],[0,1],-4.6,-38,-4.6,32).s().p("Aq3F9Qh4AAAAh4IAAoJQAAh4B4AAIVvAAQB4AAAAB4IAAIJQAAB4h4AAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#00FFFF","#0099CC"],[0,1],-1.3,-36.5,-1.3,33.5).s().p("AqWFtQh4AAAAh4IAAnpQAAh4B4AAIUtAAQB4AAAAB4IAAHpQAAB4h4AAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#00FFFF","#0099CC"],[0,1],0.4,-35.7,0.4,34.3).s().p("AqFFmQh4gBAAh4IAAnZQAAh4B4gBIULAAQB4ABAAB4IAAHZQAAB4h4ABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-35,150,70);


(lib.background = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("EgFrAlkMAAAhLHILYAAMAAABLHg");
	this.shape.setTransform(503,480,0.685,1.996);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("EgFrAlkMAAAhLHILYAAMAAABLHg");
	this.shape_1.setTransform(440,480,0.274,1.996);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.098)").s().p("EgFrAlkMAAAhLHILYAAMAAABLHg");
	this.shape_2.setTransform(349.5,480,1,1.996);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.098)").s().p("EgFrAlkMAAAhLHILYAAMAAABLHg");
	this.shape_3.setTransform(276.5,480,0.068,1.996);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.098)").s().p("EgFrAlkMAAAhLHILYAAMAAABLHg");
	this.shape_4.setTransform(207,480,0.685,1.996);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.098)").s().p("EgFrAlkMAAAhLHILYAAMAAABLHg");
	this.shape_5.setTransform(140,480,0.274,1.996);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.098)").s().p("EgFrAlkMAAAhLHILYAAMAAABLHg");
	this.shape_6.setTransform(71.5,480,1,1.996);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_7.setTransform(275,208.1,1,0.741);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_8.setTransform(275,776,1,0.617);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_9.setTransform(275,918,1,0.37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_10.setTransform(275,851.9,1,0.247);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_11.setTransform(275,709,1,0.123);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_12.setTransform(275,608,1,0.988);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_13.setTransform(275,479,1,0.741);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_14.setTransform(275,382.5,1,0.062);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_15.setTransform(275,318,1,0.37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.098)").s().p("Egq9AGVIAAspMBV6AAAIAAMpg");
	this.shape_16.setTransform(275,90,1,0.741);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#00CCCC","#006666"],[0,1],0,-68.5,0,68.5).s().dr(-54,-68.5,108,137);
	this.shape_17.setTransform(275,480,5.095,7.007);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,960);


(lib.retangulo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhK/AFeIAAq7MCV/AAAIAAK7g");
	this.shape.setTransform(480,566);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,531,960,70);


(lib.mc_indicacao = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("INDICADO PARA", "bold 10px 'Roboto'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(59.5,1);

	this.text_1 = new cjs.Text("ENS. FUND. 1 | ENS. MÉDIO", "bold 14px 'Roboto'", "#990000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.setTransform(97.5,22.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AviBMIAAhMQABghAUgVQAWgVAgAAIcvAAQAgAAAWAVQAUAVAAAhIAABMg");
	this.shape.setTransform(99.5,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuWDlQgiABgUgWQgWgVAAghIAAkzQAAgiAWgUQAUgWAiAAIctAAQAhAAAVAWQAWAUgBAiIAAEzQABAhgWAVQgVAWghgBg");
	this.shape_1.setTransform(99.5,25.5);

	this.addChild(this.shape_1,this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,199,49.5);


(lib.mc_areaConcentracao = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("ÁREA DE CONCENTRAÇÃO", "bold 10px 'Roboto'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(38,1);

	this.text_1 = new cjs.Text("MATEMÁTICA", "bold 14px 'Roboto'", "#990000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.setTransform(97.5,22.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AviBMIAAhMQABghAUgVQAWgVAgAAIcvAAQAgAAAWAVQAUAVAAAhIAABMg");
	this.shape.setTransform(99.5,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuWDlQgiABgUgWQgWgVAAghIAAkzQAAgiAWgUQAUgWAiAAIctAAQAhAAAVAWQAWAUgBAiIAAEzQABAhgWAVQgVAWghgBg");
	this.shape_1.setTransform(99.5,25.5);

	this.addChild(this.shape_1,this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,199,49.5);


(lib.link_noasOver_01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.noas();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,39);


(lib.audioComponent_fundoBlack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#616161","#000000"],[0,1],-8.1,-14.8,6,10.9).s().p("AiACuQgNAAgIgIQgJgJAAgMIAAkgQAAgNAJgJQAIgIANgBIECAAQAMABAIAIQAKAJgBANIAAEgQABAMgKAJQgIAIgMAAg");
	this.shape.setTransform(21.6,22.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.6,5.3,32,35);


(lib.Peca = function() {
	this.initialize();

	// Camada 1
	this.txt = new cjs.Text("00", "60px 'Cartoonist'", "#993399");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 60;
	this.txt.lineWidth = 91;
	this.txt.setTransform(-2,-30);

	this.instance = new lib.pecaBG();

	this.addChild(this.instance,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.buttonReload = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// shape
	this.text = new cjs.Text("inicio", "15px 'Cartoonist'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 61;
	this.text.setTransform(-2,27.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiZixIEzCxIkzCyg");
	this.shape.setTransform(-13,0,0.685,0.685,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().dr(-7,-23,14,46);
	this.shape_1.setTransform(9.5,0,1,0.609,0,-90,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(5));

	// bg
	this.instance = new lib.buttonBG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


(lib.buttonNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Camada 1
	this.text = new cjs.Text("novo", "15px 'Cartoonist'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 61;
	this.text.setTransform(-2,27.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiZixIEzCxIkzCyg");
	this.shape.setTransform(-6.5,-19.2,0.685,0.685,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AFsAAYAADJijCjjJAAYjIAAijijAAjJYAAjICjijDIAAIAACSYh3AAhiBiAAB3YAAB4BiBiB3AAYB4AABihiAAh4g");
	this.shape_1.setTransform(0,0,0.685,0.685,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(5));

	// bg
	this.instance = new lib.buttonBG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


(lib.linkNoas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_4 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// logo
	this.instance = new lib.link_noasOver_01();
	this.instance.setTransform(37.4,12.5,1,1,0,0,0,37.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:50,regY:19.5,x:50,y:19.5},0).wait(3).to({regX:37.4,regY:12.5,x:37.4,y:12.5},0).wait(1).to({regX:50,regY:19.5,x:50,y:19.5},0).wait(4).to({regX:37.4,regY:12.5,x:37.4,y:12.5},0).wait(1));

	// fundo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmeCuIAAlcIM8AAIAAFcg");
	this.shape.setTransform(37.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-6,104,45);


(lib.barra_bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.retangulo("synched",0);
	this.instance.setTransform(0,-531);
	this.instance.alpha = 0.75;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,70);


(lib.fullscreenButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape.setTransform(-6.5,-4.4,0.998,0.998,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_1.setTransform(-4.4,-6.5,0.998,0.998,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_2.setTransform(6.5,-4.4,0.999,0.999,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_3.setTransform(4.4,-6.5,0.999,0.999,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_4.setTransform(6.5,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_5.setTransform(4.4,6.5,1,1,-90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_6.setTransform(-6.5,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_7.setTransform(-4.4,6.5,1,1,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_8.setTransform(-2.5,-4.5,0.998,0.998);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_9.setTransform(-4.5,-2.4,0.998,0.998,-90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_10.setTransform(2.4,-4.5,0.998,0.998);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_11.setTransform(4.5,-2.4,0.998,0.998,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_12.setTransform(2.5,4.5,0.999,0.999,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_13.setTransform(4.5,2.4,0.999,0.999,90);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_14.setTransform(-2.5,4.4,0.999,0.999,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_15.setTransform(-4.5,2.4,0.999,0.999,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Camada 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCuQgMABgIgKQgKgIABgMIAAkgQgBgNAKgJQAIgIAMgBIECAAQANABAIAIQAJAJAAANIAAEgQAAAMgJAIQgIAKgNgBg");

	this.instance = new lib.audioComponent_fundoBlack();
	this.instance.setTransform(0,0,1,1,0,0,0,21.1,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-38.4,90.7,55.9);


(lib.btsound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// sound
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgNAfIglAAIAAg/IAnAAIA+g8IAAC5g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCuQgMABgIgKQgKgIABgMIAAkgQgBgNAKgJQAIgIAMgBIECAAQANABAIAIQAJAJAAANIAAEgQAAAMgJAIQgIAKgNgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAfIgmAAIAAg/IAoAAIA/g8IAAC5g");

	this.instance = new lib.audioComponent_fundoBlack();
	this.instance.setTransform(0,0,1,1,0,0,0,21.1,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.5,32,35);


(lib.btmusic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// music
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAPBOQgFgWAWgJQARgIAUACIAAhWIhTAAIAAA9IABAAIgBABIAAABQgBAMgHAKQgLARgVADQgcAEgFgXQgGgWAWgJQARgHAUACIAAhlIABAAIAAgBIB6AAIAACYIAAAAQgCAMgGAKQgLARgVADIgIABQgVAAgFgUg");
	this.shape.setTransform(-1.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCvQgMAAgJgJQgJgJAAgMIAAkhQAAgMAJgJQAJgJAMAAIECAAQANAAAJAJQAIAJABAMIAAEhQgBAMgIAJQgJAJgNAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPBOQgFgWAWgJQARgIAUACIAAhWIhTAAIAAA9IABAAIgBABIAAABQgBAMgHAKQgLARgVADQgcAEgFgXQgGgWAWgJQARgHAUACIAAhlIABAAIAAgBIB6AAIAACYIAAAAQgCAMgGAKQgLARgVADIgIABQgVAAgFgUg");

	this.instance = new lib.audioComponent_fundoBlack();
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,21.6,22.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.5,32,35);


(lib.Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var context = this;
		
		var livre;
		
		var pecas_arr = [];
		var pontos_arr = [];
		var rand_arr = [];
		
		var finalizado = false;
		
		var i = 0;
		
		var qtd = this.parent.qtd;
		
		var moves = 0;
		
		var score = this.score;
		
		// método que inicializa o jogo como um todo
		this.inicializa = function()
		{
			moves = 0;
			
			qtd = context.parent.qtd;
			
			// seta o highScore
			setHighScoreFields(qtd);
			
			createStructure(qtd);
			
			rand_arr = randomiza(pecas_arr.length - 1);
			
			livre = pontos_arr[pontos_arr.length - 1];
			
			for(i = 0; i < pecas_arr.length; i++) {
				
				pecas_arr[i].txt.text = i;
				
				if(i < qtd - 1) {
					
					pecas_arr[i].x = pontos_arr[rand_arr[i]].x;
					pecas_arr[i].y = pontos_arr[rand_arr[i]].y;
				}
				
				pecas_arr[i].ponto = pontos_arr[rand_arr[i]];
				pecas_arr[i].addEventListener("click", checkMovimento);
			}
			
			finalizado = false;
			
			organizeDepth(pontos_arr);
			organizeDepth(pecas_arr);
		}
		
		function createStructure(n)
		{
			pecas_arr = [];
			pontos_arr = [];
			
			// a raiz quadrada do total de elementos
			var raiz = Math.sqrt(n);
			// tamanho do objeto under no flash
			var underSize = 114;
			// utilizado para calcular a escala
			var size = (500 - (raiz - 1) * 10) / raiz;
			// calculo da escala
			var scale = (size * 100 / underSize) / 100;
			// distância entre o centro dos objetos
			var inc = underSize * scale + 10;
			// posicao inicial x (muda)
			var px = 100;
			// posicao inicial y
			var py = 225 + (underSize * 0.5) * scale;
			
			for (var i = 0; i < n; i++)
			{
				var under = new lib.Under();
				var ponto = new lib.Ponto();
				var peca = new lib.Peca();
				
				// calcula o resto do incremento pelo valor da raiz
				var dif = i % raiz;
				// altera a escala do objeto under de acordo com a escala calculada
				under.scaleX = under.scaleY = scale;
				// define width de under para facilitar cálculos futuros
				under.width = underSize * scale;
				// calcula o valor de px
				px = under.width * 0.5 + 20;
				// define a posição x de under através de calculo
				under.x = px + (inc * dif);
				// de a diferença for igual a 0 quer dizer que está na hora de incrementar a posição y
				if (dif == 0 && i != 0) py += inc;
				// atribui posição y
				under.y = py;
				
				// alpha 0
				under.alpha = 0;
				// aparece
				createjs.Tween.get(under, {override:true}).wait(500).to({alpha:1}, 500, createjs.Ease.quartOut);
				
				// posicionando os pontos
				ponto.x = under.x;
				ponto.y = under.y;
				ponto.name = "pt" + i;
				// array com os pontos que relacionam-se com este
				ponto.relations = [];
				// armazena no array
				pontos_arr.push(ponto);
				
				// define a escala da peça
				peca.scaleX = peca.scaleY = scale;
				// define posições x e y da peca
				peca.x = i == n - 1 ? canvas.width * 2 : ponto.x;
				peca.y = ponto.y;
				// define nome
				peca.name = "_" + i;
				// armazena no array
				pecas_arr.push(peca);
				
				// alpha 0
				peca.alpha = 0;
				// aparece
				createjs.Tween.get(peca, {override:true}).wait(750).to({alpha:1}, 500, createjs.Ease.quartOut);
				
				// adiciona no context
				context.addChild(under, ponto, peca);
			}
				
			// cria as relações dos pontos
			listRelations(raiz);
		}
		
		// configura os pontos para que quando estiverem livres saberem de quais pontos podem receber
		function listRelations(raiz)
		{
			var j = pontos_arr.length;
			
			for (var k = 0; k < j; k++)
			{
				var altura = Math.floor(k / raiz);
				
					// insere top
				if (altura > 0) 
					pontos_arr[k].relations.push(pontos_arr[k - raiz].name);
				
					// insere down
				if (altura < raiz - 1) 
					pontos_arr[k].relations.push(pontos_arr[k + raiz].name);
				
					// insere left
				if (k % raiz > 0) 
					pontos_arr[k].relations.push(pontos_arr[k - 1].name);
				
					// insere right
				if (k % raiz < raiz - 1) 
					pontos_arr[k].relations.push(pontos_arr[k + 1].name);
			}
		}
		
		// organiza as peças por cima dos pontos
		function organizeDepth(arr)
		{
			for (var i = 0; i < arr.length; i++)
				context.setChildIndex(arr[i], context.getNumChildren() - 1);
		}
		
		function setHighScoreFields()
		{
			var id = qtd == 9 ? 1 : qtd == 16 ? 2 : qtd == 25 ? 3 : 4;
			//localStorage.clear();
			
			if (localStorage.getItem('highScore' + id))
				score.highScoreTxt.text = localStorage.getItem('highScore' + id);
			else
				score.highScoreTxt.text = "0";
			score.movesTxt.text = "0";
		}
		
		function checkMovimento(event)
		{
			if (finalizado)
				return;
			
			var ponto = event.currentTarget.ponto;
		
			if (checkPeca(event.currentTarget)) 
			{
				createjs.Tween.get(event.currentTarget, {override:true}).to({x:livre.x, y:livre.y}, 150, createjs.Ease.quartOut).call(renova);
				
				event.currentTarget.ponto = livre;
				
				moves++;
				//localStorage.setItem("highScore1", moves);
			
				score.movesTxt.text = "" + moves;
				
				habilita(false);
				livre = ponto;
				corrige();		
			} 
			else 
			{
				console.log("VOCÊ NÃO PODE MOVIMENTAR ESSA PEÇA");
			}
		}
		
		function renova()
		{
			habilita(true);
		}
		
		function habilita(_boo)
		{	
			for(i = 0; i < pecas_arr.length; i++) 		
				pecas_arr[i].mouseEnabled = _boo;
		}
		
		function corrige()
		{	
			var cont = 0;
			for(i = 0; i < pecas_arr.length - 1; i++)
			{
				if (pecas_arr[i].ponto.name == pontos_arr[i].name)
					cont++;
			}
			
			if (cont == pecas_arr.length - 1)
			{
				context.getChildByName("_" + (qtd - 1)).x = context.getChildByName("pt" + (qtd - 1)).x;
				context.getChildByName("_" + (qtd - 1)).y = context.getChildByName("pt" + (qtd - 1)).y;
				
				finaliza();
			}
		}
		
		function finaliza()
		{
			var id = qtd == 9 ? 1 : qtd == 16 ? 2 : qtd == 25 ? 3 : 4;
			
			if (localStorage.getItem('highScore' + id))
			{
				if (parseInt(localStorage.getItem('highScore' + id)) > moves)
					localStorage.setItem('highScore' + id, moves);
			}
			else
			{
				localStorage.setItem('highScore' + id, moves);
			}
		}
		
		function checkPeca(_mc)
		{	
			if (livre.relations.indexOf(_mc.ponto.name) == -1)
				return false;
			
			return true;
		}
		
		function randomiza(n) 
		{	
			var a = [];
			var aux = 0;
			
			for (var i = 0; i < n; i++) 
			{
				aux = Math.floor(Math.random() * n);
				if (a.indexOf(aux) == -1)
					a.push(aux);
				else
					i--;
			}
			
			return a;
		}
		
		/**
		Métodos dos botões
		*/
		
		function reinicia(event)
		{
			for(i = 0; i < pecas_arr.length; i++) {
				pecas_arr[i].removeEventListener("click", checkMovimento);
				context.removeChild(pecas_arr[i]);
			}
			pecas_arr = [];
			
			context.removeAllChildren();
		
			finalizado = false;
			
			if (event)
			{
				context.gotoAndPlay(1);
				context.inicializa();
			}
			
			if (context.parent.enableSounds)
				playSound("click");
		}
		
		function reset(event)
		{
			context.buttonReload.off("click", reset);
			context.buttonNext.off("click", reinicia);
			
			reinicia();
			try { context.parent.reinicia(); }
			catch (e) { console.log("erro"); }
		}
		
		this.buttonNext.on("click", reinicia);
		this.buttonReload.on("click", reset);
		
		this.inicializa();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// score
	this.score = new lib.score();
	this.score.setTransform(726,773);
	this.score.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.score).wait(14).to({x:275,alpha:1},10,cjs.Ease.get(1)).wait(1));

	// finalizacao
	this.feedback = new lib.finalizacao();
	this.feedback.setTransform(835,480.5,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get(this.feedback).wait(25));

	// title
	this.instance = new lib.gameTitle();
	this.instance.setTransform(275,172.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(7));

	// buttonReload
	this.buttonReload = new lib.buttonReload();
	this.buttonReload.setTransform(165.5,1033.5);

	this.timeline.addTween(cjs.Tween.get(this.buttonReload).to({x:163,y:875.5},9,cjs.Ease.get(1)).wait(16));

	// buttonNext
	this.buttonNext = new lib.buttonNext();
	this.buttonNext.setTransform(389.5,1033.5);

	this.timeline.addTween(cjs.Tween.get(this.buttonNext).wait(13).to({x:387,y:875.5},9,cjs.Ease.get(1)).wait(3));

	// bg
	this.text = new cjs.Text("Game", "20px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.setTransform(-82,6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().dr(-80,-20,160,40);
	this.shape.setTransform(-80,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,0,1270,1086);


(lib.informacoes = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mc_indicacao();
	this.instance.setTransform(231,11.5);

	this.instance_1 = new lib.mc_areaConcentracao();
	this.instance_1.setTransform(20,11.5);

	this.logonoas_mc = new lib.linkNoas();
	this.logonoas_mc.setTransform(480,33.5,1,1,0,0,0,37.4,12.5);

	this.instance_2 = new lib.barra_bg();
	this.instance_2.setTransform(229.1,-230.5,0.573,1,0,0,0,399.9,-230.5);

	this.addChild(this.instance_2,this.logonoas_mc,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,70);


(lib.mc_audioComponent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var music = playSound("music", 1000);
		music.setVolume(0.5);
		
		var context = this;
		var musica = this.musica;
		var sons = this.sons;
		
		function musicaHandler(event)
		{
			musica.cont++;
			if (musica.cont % 2 == 0 && createjs.Touch.isSupported())
				return;
			
			if (musica.currentFrame == 0) 
			{
				musica.gotoAndStop(1);
				music.setVolume(0.0);
			}
			else 
			{
				musica.gotoAndStop(0);
				music.setVolume(0.5);
			}
		}
		
		function sonsHandler(event)
		{
			sons.cont++;
			if (sons.cont % 2 == 0 && createjs.Touch.isSupported())
				return;
			
			if (sons.currentFrame == 0)
			{
				context.parent.enableSounds = false;
				sons.gotoAndStop(1);
			}
			else
			{
				context.parent.enableSounds = true;
				sons.gotoAndStop(0);
			}
		}
		
		musica.on("click", musicaHandler);
		musica.cont = 0;
		sons.on("click", sonsHandler);
		sons.cont = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// botao
	this.musica = new lib.btmusic();
	this.musica.setTransform(-39.3,0.2,1,0.998,0,0,0,0,0.2);

	this.sons = new lib.btsound();
	this.sons.setTransform(0.2,0.2,1,0.998,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sons},{t:this.musica}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-32.3,71.8,49.8);


// stage content:



(lib.mistureba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{instrucoes:25,level:60,game:90});

	// timeline functions:
	this.frame_0 = function() {
		this.name = "cinematica";
		var context = this;
		
		var game = this.game;
		this.enableSounds = true;
		
		// Declaração dos objetos
		var btjogar = this.btjogar;
		btjogar.clickCont = 0;
		var btcontinuar = this.btcontinuar;
		btcontinuar.clickCont = 0;
		
		var fullscreenSwitch = this.fullscreenSwitch;
		fullscreenSwitch.clickCont = 0;
		
		var limpaScores = this.limpaScores;
		
		var level1 = this.level1;
		level1.name = "level1";
		level1.clickCont = 0;
		var level2 = this.level2;
		level2.name = "level2";
		level2.clickCont = 0;
		var level3 = this.level3;
		level3.name = "level3";
		level3.clickCont = 0;
		var level4 = this.level4;
		level4.name = "level4";
		level4.clickCont = 0;
		
		var game1 = this.game1;
		var game2 = this.game2;
		var game3 = this.game3;
		var game4 = this.game4;
		
		var bg = this.bg;
		
		this.qtd = 0;
		
		if (createjs.Touch.isSupported())
			this.audioComponent.visible = false;
		
		this.jogarHandler = function(event)
		{
			btjogar.clickCont++;
			//btjogar.off("click", context.jogarHandler);
			
			if (createjs.Touch.isSupported() && btjogar.clickCont % 2 == 0)
				return;
			
			btjogar.gotoAndPlay("s1");
			context.gotoAndPlay("instrucoes");
			
			if (context.enableSounds)
				createjs.Sound.play("click"); //playSound("click");
		}
		
		// added for phonegap
		/*function playAudio(url) {
		    // Play the audio file at url
		    var my_media = new Media(url,
		        // success callback
		        function () {
		            console.log("playAudio():Audio Success");
		        },
		        // error callback
		        function (err) {
		            console.log("playAudio():Audio Error: " + err);
		        }
		    );
		    // Play audio
		    my_media.play();
		}*/
		
		this.gotoLevel = function(event)
		{
			btcontinuar.clickCont++;
			//btcontinuar.off("click", context.gotoGame);
			
			if (createjs.Touch.isSupported() && btcontinuar.clickCont % 2 == 0)
				return;
			
			btcontinuar.gotoAndPlay("s1");
			context.gotoAndPlay("level");
			//localStorage.clear();
			if (localStorage.getItem('highScore1'))
				level1.score.text = localStorage.getItem('highScore1') + "";
			
			if (localStorage.getItem('highScore2'))
				level2.score.text = localStorage.getItem('highScore2') + "";
			
			if (localStorage.getItem('highScore3'))
				level3.score.text = localStorage.getItem('highScore3') + "";
			
			if (localStorage.getItem('highScore4'))
				level4.score.text = localStorage.getItem('highScore4') + "";
			
			if (context.enableSounds)
				playSound("click");
		}
		
		this.gotoGame = function(event)
		{
			event.currentTarget.clickCont++;	
			
			if (createjs.Touch.isSupported() && event.currentTarget.clickCont % 2 == 0)
				return;
			
			if (event.currentTarget.name == "level1")
				context.qtd = 9;
			else if (event.currentTarget.name == "level2")
				context.qtd = 16;
			else if (event.currentTarget.name == "level3")
				context.qtd = 25;
			else
				context.qtd = 36;
			
			context.gotoAndPlay("game");
			if (game.currentFrame > 0)
			{
				game.gotoAndPlay(1);
				game.inicializa();
			}
			
			if (context.enableSounds)
				playSound("click");
		}
		
		function zeraScores(event)
		{
			localStorage.clear();
			
			level1.score.text = "0";
			level2.score.text = "0";
			level3.score.text = "0";
			level4.score.text = "0";
		}
		
		this.fullscreenHandler = function(event) 
		{
			fullscreenSwitch.clickCont++;
			
			if (createjs.Touch.isSupported() && fullscreenSwitch.clickCont % 2 == 0)
				return;
			
			toggleFullScreen();
		};
		
		this.reinicia = function()
		{
			context.removeAllChildren();
			btcontinuar.clickCont = 0;
			btjogar.clickCont = 0;
			fullscreenSwitch.clickCont = 0;
			context.gotoAndPlay(1);
		}
		
		function toggleFullScreen() 
		{
			if (!document.fullscreenElement &&    // alternative standard method
				!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
				if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if (document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
				
				fullscreenSwitch.gotoAndStop(1);
				
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				}
				
				fullscreenSwitch.gotoAndStop(0);
			}
			
			window.scrollTo(0, 1);
			window.pageYOffset = 0;
		}
		
		createjs.Touch.enable(stage, true, true);
		
		//inicializa();
		btjogar.on("click", this.jogarHandler);
		btjogar.cursor = "pointer";
		
		btcontinuar.on("click", this.gotoLevel);
		btcontinuar.cursor = "pointer";
		
		level1.on("click", this.gotoGame);
		level2.on("click", this.gotoGame);
		level3.on("click", this.gotoGame);
		level4.on("click", this.gotoGame);
		
		limpaScores.on("click", zeraScores);
		
		fullscreenSwitch.on("click", this.fullscreenHandler);
		
		var keepAspectRatio = false;
		
		window.onresize = function()
		{
			onResize();
		}
		
		function onResize()
		{
			// browser viewport size
			var w = window.innerWidth;
			var h = window.innerHeight;
			
			// stage dimensions
			var ow = 550; // your stage width
			var oh = 960; // your stage height
			
			/*if ((fullscreenSwitch.currentFrame == 1) && (window.innerWidth < window.innerHeight))
				keepAspectRatio = false;
			else 
				keepAspectRatio = true;*/
			
			if (keepAspectRatio)
			{
				// keep aspect ratio
				var scale = Math.min(w / ow, h / oh);
				stage.scaleX = scale;
				stage.scaleY = scale;
				
				// adjust canvas size
				stage.canvas.width = ow * scale;
				stage.canvas.height = oh * scale;
			}
			else
			{
				// scale to exact fit
				stage.scaleX = w / ow;
				stage.scaleY = h / oh;
				
				// adjust canvas size
				stage.canvas.width = ow * stage.scaleX;
				stage.canvas.height = oh * stage.scaleY;
			}
			
			bg.cache(0, 0, stage.canvas.width / stage.scaleX, stage.canvas.height / stage.scaleY);
			
			// update the stage
			stage.update();
		}
		
		
		
		onResize();
	}
	this.frame_24 = function() {
		this.stop();
		
		var instrucoes = this.instrucoes;
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(35).call(this.frame_59).wait(30).call(this.frame_89).wait(30).call(this.frame_119).wait(1));

	// informacoes
	this.instance = new lib.informacoes();
	this.instance.setTransform(480,729.5,1,1,0,0,0,480,-230.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:659.5},14,cjs.Ease.get(1)).wait(10).to({y:729.5},10,cjs.Ease.get(-1)).wait(86));

	// fullscreen
	this.fullscreenSwitch = new lib.fullscreenButton();
	this.fullscreenSwitch.setTransform(40.6,47.2,1.547,1.546);
	this.fullscreenSwitch.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.fullscreenSwitch).wait(120));

	// music
	this.audioComponent = new lib.mc_audioComponent();
	this.audioComponent.setTransform(511.1,46.9,1.547,1.538,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.audioComponent).wait(120));

	// game
	this.game = new lib.Game();
	this.game._off = true;

	this.timeline.addTween(cjs.Tween.get(this.game).wait(90).to({_off:false},0).wait(30));

	// limpa scores
	this.limpaScores = new lib.limpaScores();
	this.limpaScores.setTransform(447.5,1002);
	this.limpaScores._off = true;

	this.timeline.addTween(cjs.Tween.get(this.limpaScores).wait(60).to({_off:false},0).to({y:937},9,cjs.Ease.get(1)).wait(23).to({y:1002},9).wait(19));

	// level 4
	this.level4 = new lib.level4Option();
	this.level4.setTransform(-179,780,1,1,0,0,0,143.6,55);
	this.level4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.level4).wait(60).to({_off:false},0).wait(15).to({x:275},11,cjs.Ease.get(1)).wait(4).to({x:733.9},9,cjs.Ease.get(-1)).wait(21));

	// level 3
	this.level3 = new lib.level3Option();
	this.level3.setTransform(742,640,1,1,0,0,0,143.6,55);
	this.level3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.level3).wait(60).to({_off:false},0).wait(10).to({x:275},11,cjs.Ease.get(1)).wait(11).to({x:-196},9,cjs.Ease.get(-1)).wait(19));

	// level 2
	this.level2 = new lib.level2Option();
	this.level2.setTransform(-179,500,1,1,0,0,0,143.6,55);
	this.level2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.level2).wait(60).to({_off:false},0).wait(5).to({x:275},11,cjs.Ease.get(1)).wait(18).to({x:733.9},9,cjs.Ease.get(-1)).wait(17));

	// level 1
	this.level1 = new lib.level1Option();
	this.level1.setTransform(742,360,1,1,0,0,0,143.6,55);
	this.level1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.level1).wait(60).to({_off:false},0).to({x:275},11,cjs.Ease.get(1)).wait(25).to({x:-196},9,cjs.Ease.get(-1)).wait(15));

	// level title
	this.instance_1 = new lib.levelTitle();
	this.instance_1.setTransform(275,172.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(12).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// instrucao
	this.instance_2 = new lib.instrucaoText();
	this.instance_2.setTransform(275,394.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).to({alpha:0},4,cjs.Ease.get(-1)).to({_off:true},1).wait(56));

	// instrucoes Cópia
	this.instance_3 = new lib.instrucoes();
	this.instance_3.setTransform(-560.8,393);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({x:0},14,cjs.Ease.get(1)).wait(10).to({x:607.9},7,cjs.Ease.get(-1)).to({_off:true},1).wait(53));

	// instrucoes
	this.instance_4 = new lib.instrucoes();
	this.instance_4.setTransform(568.1,195);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).to({x:0},14,cjs.Ease.get(1)).wait(10).to({x:-616},7,cjs.Ease.get(-1)).to({_off:true},1).wait(53));

	// continuar
	this.btcontinuar = new lib.btcontinuar();
	this.btcontinuar.setTransform(-180,754.5);

	this.timeline.addTween(cjs.Tween.get(this.btcontinuar).wait(48).to({x:295},9,cjs.Ease.get(1)).to({x:275},2).to({x:255},1).to({x:707.1},6,cjs.Ease.get(-1)).to({_off:true},1).wait(53));

	// title
	this.instance_5 = new lib.title();
	this.instance_5.setTransform(275,-263.3);
	this.instance_5._off = true;
	this.instance_5.cache(-62,-288,124,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({scaleX:1.25,scaleY:1.25,y:363.4},8,cjs.Ease.get(1)).to({y:343.4},2).to({y:363.4},1).to({scaleX:1,scaleY:1,y:-279.3},6).to({_off:true},1).wait(88));

	// bt iniciar
	this.btjogar = new lib.btjogar();
	this.btjogar.setTransform(-235,754.4);

	this.timeline.addTween(cjs.Tween.get(this.btjogar).wait(9).to({x:295},10,cjs.Ease.get(1)).to({x:275},2).wait(7).to({x:255},1).to({x:795},5,cjs.Ease.get(-1)).to({_off:true},1).wait(85));

	// bg
	this.bg = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,383,860,1127.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;