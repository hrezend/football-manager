function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  fase1 = new FaseOne();
  fase2 = new FaseTwo();
  fase3 = new FaseThree();
  fase4 = new FaseFour();
  menu = new Menu();
  buttonMenuToFaseOne = new ButtonMenuToFaseOne('New Game', width/2, height/2);
  cenas = {
    fase4: fase4,
    fase3: fase3,
    fase2: fase2,
    fase1: fase1,
    menu: menu,
  };
  cenas[cenaAtual].setup();
}

function keyPressed(){
  cenas[cenaAtual].keyPressed(key);
}

function draw(){
  cenas[cenaAtual].draw();
}