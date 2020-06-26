class FaseOne{
    keyPressed(key){
        if(key === 'ArrowUp'){
            soundJump.play();
            loki.jump();
        }
        if(key === 'CapsLock'){
            soundAttack.play();
            loki.attack();
        }
    }
    setup(){
        soundMenu.stop();
        soundProntera.loop();
        buttonFaseOneToFaseTwo = new ButtonFaseOneToFaseTwo('Click to Fase Two', 0, 0);
        cenario = new Cenario(imagemSetupOne, 7);
        pontuacao = new Punctuation();
        loki = new Hero(matriz_loki, imagemLoki, 0, 20, 100, 105, 100, 105);
        const evil_fanatic = new Enemy(matriz_evil_fanatic, imagemEvilFanatic, width, 10, 190, 160, 190, 160, 60, 100);
        const lord_of_death = new Enemy(matriz_lord_of_death, imagemLordOfDeath, width, 10, 185, 225, 185, 225, 30, 100);
        const pyuriel = new Enemy(matriz_pyuriel, imagemPyuriel, width, 10, 105, 135, 105, 135, 35, 100);
        const daehyon = new Enemy(matriz_daehyon, imagemDaehyon, width, 10, 85, 144, 85, 144, 35, 100);
        const fallen_bishop = new Enemy(matriz_fallen_bishop, imagemFallenBishop, width, 10, 90, 124, 90, 124, 30, 100);
        const hatii = new Enemy(matriz_hatii, imagemHatii, width, 10, 125, 110, 125, 110, 30, 100);
        const stormy_knight = new Enemy(matriz_stormy_knight, imagemStormyKnight, width, 10, 140, 135, 140, 135, 30, 100);
        enemies.push(lord_of_death);
        enemies.push(pyuriel);
        enemies.push(daehyon);
        enemies.push(fallen_bishop);
        enemies.push(hatii);
        enemies.push(stormy_knight);
        enemies.push(evil_fanatic);
        randomEnemy = Math.floor(Math.random() * enemies.length);
    }
    draw(){
        enemy_time = enemies[randomEnemy];
        cenario.exibe();
        cenario.move();
        pontuacao.show();
        pontuacao.incrementPoints();
        loki.show();
        loki.gravit();
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
        this._button();
    }
    _button(){
        buttonFaseOneToFaseTwo.draw();
    }
}