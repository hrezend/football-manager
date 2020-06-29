class FaseThree{
    keyPressed(key){
        if(key === 'ArrowUp'){
            loki.jump();
        }
        if(key === 'CapsLock'){
            loki.attack();
        }
    }
    setup(){
        soundMorocc.stop();
        soundIce.loop();
        scene_three_back = new Cenario(imagemSetupThreeBack, 5);
        scene_three_front = new Cenario(imagemSetupThreeFront, 10);
        pontuacao = new Punctuation();
        buttonFaseThreeToFaseFour = new ButtonFaseThreeToFaseFour('Click to Fase 4', 0, 0);
        bonus = new Bonuses(matriz_items, imagemItems, width, height/7 * 5, 53, 100, 105, 200, 100, 3000);
        life = new Life(3, 3);
        loki = new Hero(matriz_loki, imagemLoki, 0, 50, 100, 105, 100, 105);
        const hatii = new Enemy(matriz_hatii, imagemHatii, width, 28, 125, 110, 125, 110, 30, 100);
        const stormy_knight = new Enemy(matriz_stormy_knight, imagemStormyKnight, width, 40, 140, 135, 140, 135, 30, 100);
        const aqua3 = new Enemy(matriz_aqua3, imagemAqua3, width, 25, 92, 150, 92, 150, 20, 100);
        const ktullanux = new Enemy(matriz_ktullanux, imagemKtullanux, width, 25, 167, 100, 167, 100, 25, 100);
        enemies.length = 0;
        enemies.push(ktullanux);
        enemies.push(hatii);
        enemies.push(stormy_knight);
        enemies.push(aqua3);
        randomEnemy = Math.floor(Math.random() * enemies.length);
    }
    draw(){
        enemy_time = enemies[randomEnemy];
        scene_three_back.exibe();
        scene_three_back.move();
        scene_three_front.exibe();
        scene_three_front.move();
        life.draw();
        pontuacao.show();
        pontuacao.incrementPoints();
        loki.show();
        loki.gravit();
        bonus.show();
        bonus.walk();
        enemy_time.show();
        enemy_time.walk();

        if(loki.colliding(enemy_time)){
            soundDamage.play();
            pontuacao.decrementPoints(5);
            life.loseLife();
            loki.invincibility();
            if(life.qtd_vidas === 0){
                soundIce.stop();
                soundGameOver.play();
                image(imagemGameOver, width/2 - 200, height/3);
                noLoop();
                alert('Você perdeu todas as suas vidas e fez ' + pontuacao.progress() + ' pontos!');
                alert('Press F5 to return to the beginning!');
            }
        }

        if(loki.collecting(bonus)){
            loki.collecting_cdd();
            soundCollect.play();
            life.incrementLife();
        }

        if(enemy_time.passed()){
            randomEnemy = Math.floor(Math.random() * enemies.length);
        }
        this._button();
    }
    _button(){
        buttonFaseThreeToFaseFour.draw();
    }
}