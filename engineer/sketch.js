let imagemCenario;
let imagemHypista;
let imagemLoki;
let imagemNidhoggers;
let imagemEvilFanatic;
let cenario;
let hypista;
let loki;
let niddhoggers;
let evil_fanatic;
let trilhaSonora;

function preload(){
  imagemCenario = loadImage('../images/cenario/floresta.png');
  imagemHypista = loadImage('../images/personagem/hypista/sprite.png');
  imagemLoki = loadImage('../images/personagem/loki/walking.png');
  imagemNidhoggers = loadImage('../images/inimigos/nidhoggers_shadow/flying.png');
  imagemEvilFanatic = loadImage('../images/inimigos/evil_fanatic/walking.png')
  trilhaSonora = loadSound('../sounds/theme_of_prontera.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 10);
  hypista = new Hypista(imagemHypista);
  loki = new Loki(imagemLoki);
  nidhoggers = new Nidhoggers(imagemNidhoggers);
  evil_fanatic = new EvilFanatic(imagemEvilFanatic);
  trilhaSonora.loop();
  frameRate(10);
}

function draw(){
  //Exibe e faz o efeito de movimento do cenário
  cenario.exibe();
  cenario.move();
  //Exibe e faz o efeito de movimentação do nosso herói
  loki.exibe();
  loki.animacao();
  //Exibe e faz o efeito de movimentação dos monstros
  nidhoggers.exibe();
  nidhoggers.animacao();

}