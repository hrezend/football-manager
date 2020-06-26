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
        soundProntera.play();
        buttonFaseOneToFaseTwo = new ButtonFaseOneToFaseTwo('Click to Fase 2', 0, 0);
        cenario = new Cenario(imagemSetupOne, 7);
        pontuacao = new Punctuation();
        life = new Life(3, 3);
        loki = new Hero(matriz_loki, imagemLoki, 0, 20, 100, 105, 100, 105);
        const evil_fanatic = new Enemy(matriz_evil_fanatic, imagemEvilFanatic, width, 10, 190, 160, 190, 160, 60, 100);
        const lord_of_death = new Enemy(matriz_lord_of_death, imagemLordOfDeath, width, 10, 185, 225, 185, 225, 30, 100);
        const pyuriel = new Enemy(matriz_pyuriel, imagemPyuriel, width, 10, 105, 135, 105, 135, 30, 100);
        const daehyon = new Enemy(matriz_daehyon, imagemDaehyon, width, 10, 85, 144, 85, 144, 30, 100);
        const fallen_bishop = new Enemy(matriz_fallen_bishop, imagemFallenBishop, width, 10, 90, 124, 90, 124, 30, 100);
        enemies.push(lord_of_death);
        enemies.push(pyuriel);
        enemies.push(daehyon);
        enemies.push(fallen_bishop);
        enemies.push(evil_fanatic);
        randomEnemy = Math.floor(Math.random() * enemies.length);
    }
    draw(){
        enemy_time = enemies[randomEnemy];
        cenario.exibe();
        cenario.move();
        life.draw();
        pontuacao.show();
        pontuacao.incrementPoints();
        loki.show();
        loki.gravit();
        enemy_time.show();
        enemy_time.walk();  
        if(loki.colliding(enemy_time)){
            pontuacao.decrementPoints(5);
            life.loseLife();
            loki.invincibility();
            if(life.qtd_vidas === 0){
                noLoop();
                image(imagemGameOver, width/2 - 200, height/3);
                alert('Você perdeu todas as suas vidas e fez ' + pontuacao.progress() + ' pontos!');
                alert('Press F5 to restart in fase 1!');
            }
        }
        if(enemy_time.passed()){
            randomEnemy = Math.floor(Math.random() * enemies.length);
        }
        if(pontuacao.progress() >= 1000){
            alert('Parabéns, você atingiu 1000 pontos e foi obrigado passar de fase.');
            cenaAtual = 'fase2';
            fase2.setup();
        }
        this._button();
    }
    _button(){
        buttonFaseOneToFaseTwo.draw();
    }
}