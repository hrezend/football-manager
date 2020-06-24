//Imagens
let imagemCenario;
let imagemLoki;
let imagemEvilFanatic;
let imagemNidhoggers;
//Instancias
let cenario;
let loki;
let evil_fanatic;
let nidhoggers;
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
  soundGame.loop();
  frameRate(15);

  enemies.push(evil_fanatic);
  enemies.push(nidhoggers);
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