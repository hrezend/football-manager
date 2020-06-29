class FaseFour{
    keyPressed(key){
        if(key === 'ArrowUp'){
            loki.jump();
        }
        if(key === 'CapsLock'){
            loki.attack();
        }
    }
    setup(){
        soundIce.stop();
        soundFlorest.loop();
        cenario = new Cenario(imagemSetupFour, 7);
        pontuacao = new Punctuation();
        life = new Life(3, 3);
        loki = new Hero(matriz_loki, imagemLoki, 0, 20, 100, 105, 100, 105);
        const faceworm_queen = new Enemy(matriz_faceworm_queen, imagemFacewoormQueen, width, 10, 180, 125, 180, 125, 30, 100);
        const maya = new Enemy(matriz_maya, imagemMaya, width, 10, 134, 172, 134, 172, 30, 100);
        const agni = new Enemy(matriz_agni3, imagemAgni3, width, 10, 90, 144, 90, 144, 25, 100);
        const eddga = new Enemy(matriz_eddga, imagemEddga, width, 10, 96, 112, 96, 112, 30, 100);
        enemies.length = 0;
        enemies.push(faceworm_queen);
        enemies.push(maya);
        enemies.push(agni);
        enemies.push(eddga);
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
            soundDamage.play();
            pontuacao.decrementPoints(5);
            life.loseLife();
            loki.invincibility();
            if(life.qtd_vidas === 0){
                soundFlorest.stop();
                soundGameOver.play();
                image(imagemGameOver, width/2 - 200, height/3);
                noLoop();
                alert('Você perdeu todas as suas vidas e fez ' + pontuacao.progress() + ' pontos!');
                alert('Press F5 to restart in fase 1!');
            }
        }
        if(enemy_time.passed()){
            randomEnemy = Math.floor(Math.random() * enemies.length);
        }
        if(pontuacao.progress() >= 1000){
            alert('Parabéns, você atingiu 1000 pontos e zerou o jogo.');
            noLoop();
        }
    }
}