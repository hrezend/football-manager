//Imagens
let imagemCenario;
let imagemLoki;
let imagemEvilFanatic;
let imagemNidhoggers;
let imagemFacewoormQueen;
let imagemLordOfDeath;
let imagemPyuriel;
let imagemDaehyon;
let imagemFallenBishop;
let imagemHatii;
let imagemKades;
let imagemGloomUnderNight;
let imagemMemoryOfThanatos;
let imagemStormyKnight;
let imagemValkyrieRandgris;
let imagemNaghtSieger;
//Instancias
let cenario;
let loki;
let pontuacao;            
//Efeitos Sonoros
let soundGame;
let soundJump;
let soundAttack;
let soundLoading;
//Helper Functions
let randomEnemy;
let enemy_time;
const enemies = [];

function preload(){
  soundLoading = loadSound('../sounds/main_theme.mp3');
  soundGame = loadSound('../sounds/theme_of_prontera.mp3');
  soundJump = loadSound('../sounds/effect_jump.mp3');
  soundAttack = loadSound('../sounds/effect_attack.mp3');
  imagemCenario = loadImage('../images/cenario/cenario.png');
  imagemGameOver = loadImage('../images/assets/gameOver.png');
  imagemLoki = loadImage('../images/personagem/loki/walking.png');
  imagemEvilFanatic = loadImage('../images/inimigos/evil_fanatic/walking.png');
  imagemNidhoggers = loadImage('../images/inimigos/nidhoggers_shadow/flying.png');
  imagemFacewoormQueen = loadImage('../images/inimigos/faceworm_queen/walking.png');
  imagemLordOfDeath = loadImage('../images/inimigos/lord_of_death/walking.png');
  imagemPyuriel = loadImage('../images/inimigos/pyuriel/walking.png');
  imagemDaehyon = loadImage('../images/inimigos/daehyon/walking.png');
  imagemFallenBishop = loadImage('../images/inimigos/fallen_bishop/walking.png');
  imagemGloomUnderNight = loadImage('../images/inimigos/gloom_under_night/walking.png');
  imagemHatii = loadImage('../images/inimigos/hatii/walking.png');
  imagemKades = loadImage('../images/inimigos/kades/walking.png');
  imagemMemoryOfThanatos = loadImage('../images/inimigos/memory_of_thanatos/walking.png');
  imagemStormyKnight = loadImage('../images/inimigos/stormy_knight/walking.png');
  imagemValkyrieRandgris = loadImage('../images/inimigos/valkyrie_randgris/walking.png');
  imagemNaghtSieger = loadImage('../images/inimigos/naght_sieger/walking.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 7);
  pontuacao = new Punctuation();
  loki = new Hero(matriz_loki, imagemLoki, 0, 20, 100, 105, 100, 105);
  const evil_fanatic = new Enemy(matriz_evil_fanatic, imagemEvilFanatic, width, 10, 190, 160, 190, 160, 60, 100);
  const nidhoggers_shadow = new Enemy(matriz_nidhoggers, imagemNidhoggers, width, 10, 185, 274, 185, 274, 30, 100);
  const faceworm_queen = new Enemy(matriz_faceworm_queen, imagemFacewoormQueen, width, 10, 180, 125, 180, 125, 40, 100);
  const lord_of_death = new Enemy(matriz_lord_of_death, imagemLordOfDeath, width, 10, 185, 225, 185, 225, 30, 100);
  const pyuriel = new Enemy(matriz_pyuriel, imagemPyuriel, width, 10, 105, 135, 105, 135, 35, 100);
  const daehyon = new Enemy(matriz_daehyon, imagemDaehyon, width, 10, 85, 144, 85, 144, 35, 100);
  const fallen_bishop = new Enemy(matriz_fallen_bishop, imagemFallenBishop, width, 10, 90, 124, 90, 124, 30, 100);
  const gloom_under_night = new Enemy(matriz_gloom_under_night, imagemGloomUnderNight, width, 10, 125, 165, 125, 165, 30, 100);
  const hatii = new Enemy(matriz_hatii, imagemHatii, width, 10, 125, 110, 125, 110, 30, 100);
  const kades = new Enemy(matriz_kades, imagemKades, width, 10, 90, 155, 90, 155, 30, 100);
  const memory_of_thanatos = new Enemy(matriz_memory_of_thanatos, imagemMemoryOfThanatos, width, 10, 75, 116, 75, 116, 30, 100);
  const stormy_knight = new Enemy(matriz_stormy_knight, imagemStormyKnight, width, 10, 140, 135, 140, 135, 30, 100);
  const valkyrie_randgris = new Enemy(matriz_valkyrie_randgris, imagemValkyrieRandgris, width, 10, 170, 150, 170, 150, 50, 100);
  const naght_sieger = new Enemy(matriz_naght_sieger, imagemNaghtSieger, width, 10, 235, 226, 235, 226, 20, 100);
  soundGame.loop();
  frameRate(30);

  if(pontuacao.progress() < 1000){
    enemies.push(faceworm_queen);
    enemies.push(lord_of_death);
    enemies.push(pyuriel);
    enemies.push(daehyon);
    enemies.push(fallen_bishop);
    enemies.push(gloom_under_night);
    enemies.push(hatii);
    enemies.push(kades);
    enemies.push(evil_fanatic);
    enemies.push(nidhoggers_shadow);
    enemies.push(memory_of_thanatos);
    enemies.push(stormy_knight);
    enemies.push(valkyrie_randgris);
    enemies.push(naght_sieger);
  }
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
    pontuacao.decrementPoints(5);
    if(pontuacao.gameOver()){
      image(imagemGameOver, width/2 - 200, height/3);
      noLoop();
    }
  }
  if(enemy_time.passed()){
    randomEnemy = Math.floor(Math.random() * enemies.length);
  }

}