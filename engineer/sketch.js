function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  fase1 = new FaseOne();
  fase2 = new FaseTwo();
  fase3 = new FaseThree();
  fase4 = new FaseFour();
  instrucoes = new Instructions();
  menu = new Menu();
  buttonMenuToInstructions = new ButtonMenuToInstructions('Instructions', 0, 0);
  cenas = {
    fase4: fase4,
    fase3: fase3,
    fase2: fase2,
    fase1: fase1,
    menu: menu,
    instrucoes: instrucoes,
  };
  menu.setup();
}

function keyPressed(){
  cenas[cenaAtual].keyPressed(key);
}

function draw(){
  cenas[cenaAtual].draw();
}