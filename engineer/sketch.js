let imagemCenario;
let imagemLoki;
let imagemEvilFanatic;
let cenario;
let loki;
let evil_fanatic;
let soundGame;
let soundJump

function preload(){
  imagemCenario = loadImage('../images/cenario/cenario.png');
  imagemLoki = loadImage('../images/personagem/loki/walking.png');
  imagemEvilFanatic = loadImage('../images/inimigos/evil_fanatic/walking.png')
  soundGame = loadSound('../sounds/theme_of_prontera.mp3');
  soundJump = loadSound('../sounds/effect_jump.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 7);
  loki = new Hero(matriz_loki, imagemLoki, 0, 100, 105, 100, 105);
  evil_fanatic = new Enemy(matriz_evil_fanatic, imagemEvilFanatic, width - 250, 165, 180, 195, 250);
  soundGame.loop();
  frameRate(30);
}

function keyPressed(){
  if(key === 'ArrowUp'){
    soundJump.play();
    loki.jump();
  }
}

function draw(){
  //Exibe e faz o efeito de movimento do cenário
  cenario.exibe();
  cenario.move();
  //Exibe e faz o efeito de movimentação do nosso herói
  loki.show();
  loki.gravit();
  //Exibe e faz o efeito de movimentação dos monstros
  evil_fanatic.show();
  evil_fanatic.walk();

  if(loki.colliding(evil_fanatic)){
    hoLoop();
  }

}