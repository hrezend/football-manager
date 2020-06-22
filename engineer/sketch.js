let imagemCenario;
let imagemPersonagem;
let imagemAzuring;
let imagemBungisngis;
let cenario;
let personagem;
let trilhaSonora;

function preload(){
  imagemCenario = loadImage('../images/cenario/floresta.png');
  imagemPersonagem = loadImage('../images/personagem/witch.png');
  imagemAzuring = loadImage('../images/inimigos/azuring.png');
  trilhaSonora = loadSound('../sounds/theme_of_prontera.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  azuring = new Azuring(imagemAzuring);
  trilhaSonora.loop();
  frameRate(30);
}

function draw(){
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  personagem.animacao();
  azuring.exibe();
  azuring.animacao();
}