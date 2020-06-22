let imagemCenario;
let imagemPersonagem;
let imagemNidhoggers;
let cenario;
let personagem;
let trilhaSonora;

function preload(){
  imagemCenario = loadImage('../images/cenario/floresta.png');
  imagemPersonagem = loadImage('../images/personagem/witch.png');
  imagemNidhoggers = loadImage('../images/inimigos/nidhoggers_shadow.png');
  trilhaSonora = loadSound('../sounds/theme_of_prontera.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  nidhoggers = new Nidhoggers(imagemNidhoggers);
  trilhaSonora.loop();
  frameRate(30);
}

function draw(){
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  personagem.animacao();
  nidhoggers.exibe();
  nidhoggers.animacao();
}