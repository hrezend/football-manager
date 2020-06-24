//Imagens
let imagemCenario;
let imagemLoki;
let imagemEvilFanatic;
let imagemNidhoggers;
let imagemFacewoormQueen;
let imagemLordOfDeath;
let imagemPyuriel;
let imagemDaehyon;
//Instancias
let cenario;
let loki;
let pontuacao;            
//Efeitos Sonoros
let soundGame;
let soundJump;
let soundAttack;
//Helper Functions
let randomEnemy;
let enemy_time;
const enemies = [];

function preload(){
  imagemCenario = loadImage('../images/cenario/cenario.png');
  imagemGameOver = loadImage('../images/assets/gameOver.png');
  imagemLoki = loadImage('../images/personagem/loki/walking.png');
  imagemEvilFanatic = loadImage('../images/inimigos/evil_fanatic/walking.png');
  imagemNidhoggers = loadImage('../images/inimigos/nidhoggers_shadow/flying.png');
  imagemFacewoormQueen = loadImage('../images/inimigos/faceworm_queen/walking.png');
  imagemLordOfDeath = loadImage('../images/inimigos/lord_of_death/walking.png');
  imagemPyuriel = loadImage('../images/inimigos/pyuriel/walking.png');
  imagemDaehyon = loadImage('../images/inimigos/daehyon/walking.png');
  soundGame = loadSound('../sounds/theme_of_prontera.mp3');
  soundJump = loadSound('../sounds/effect_jump.mp3');
  soundAttack = loadSound('../sounds/effect_attack.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 7);
  pontuacao = new Punctuation();
  loki = new Hero(matriz_loki, imagemLoki, 0, 20, 100, 105, 100, 105);
  const evil_fanatic = new Enemy(matriz_evil_fanatic, imagemEvilFanatic, width, -10, 165, 180, 195, 250, 50, 100);
  const nidhoggers = new Enemy(matriz_nidhoggers, imagemNidhoggers, width, 10, 190, 310, 186, 310, 30, 100);
  const faceworm_queen = new Enemy(matriz_faceworm_queen, imagemFacewoormQueen, width, 10, 180, 125, 180, 125, 40, 100);
  const lord_of_death = new Enemy(matriz_lord_of_death, imagemLordOfDeath, width, 10, 185, 225, 185, 225, 30, 100);
  const pyuriel = new Enemy(matriz_pyuriel, imagemPyuriel, width, 10, 105, 135, 105, 135, 30, 100);
  const daehyon = new Enemy(matriz_daehyon, imagemDaehyon, width, 10, 85, 144, 85, 144, 30, 100);
  soundGame.loop();
  frameRate(5);

  //enemies.push(evil_fanatic);
  //enemies.push(nidhoggers);
  //enemies.push(faceworm_queen);
  //enemies.push(lord_of_death);
  //enemies.push(pyuriel);
  //enemies.push(daehyon);
  randomEnemy = Math.floor(Math.random() * enemies.length);
}

function keyPressed(){
  if(key === 'ArrowUp'){
    soundJump.play();
    loki.jump();
  }
  if(key === 'CapsLock'){
    soundAttack.play();
    loki.attack();
  }
}

function draw(){
  //Exibe e faz o efeito de movimento do cenário
  cenario.exibe();
  cenario.move();
  //Exibe a pontuacao
  pontuacao.show();
  pontuacao.incrementPoints();
  //Exibe e faz o efeito de movimentação do nosso herói
  loki.show();
  loki.gravit();
  //Exibe e faz o efeito de movimentação do inimigo
  enemy_time = enemies[randomEnemy];
  enemy_time.show();
  enemy_time.walk();  
  if(loki.colliding(enemy_time)){
    console.log('Colidiu!');
    pontuacao.decrementPoints(2);
    if(pontuacao.gameOver()){
      image(imagemGameOver, width/2 - 200, height/3);
      noLoop();
    }
  }
  if(enemy_time.passed()){
    randomEnemy = Math.floor(Math.random() * enemies.length);
  }

}