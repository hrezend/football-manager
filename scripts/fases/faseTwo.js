class FaseTwo{
    keyPressed(key){
        if(key === 'ArrowUp'){
            loki.jump();
        }
        if(key === 'CapsLock'){
            loki.attack();
        }
    }
    setup(){
        soundProntera.stop();
        soundMorocc.loop();
        buttonFaseTwoToFaseThree = new ButtonFaseTwoToFaseThree('Click to Fase 3', 0, 0);
        bonus = new Bonuses(matriz_items, imagemItems, width, height/7 * 5, 53, 100, 105, 200, 100, 3000);
        scene_two_tree = new Cenario(imagemSetupTwoTree, 7);
        scene_two_vegetation = new Cenario(imagemSetupTwoVegetation, 7);
        scene_two_back = new Cenario(imagemSetupTwoBack, 4);
        scene_two_air = new Cenario(imagemSetupTwoAir, 20);
        pontuacao = new Punctuation();
        life = new Life(5, 5);
        loki = new Hero(matriz_loki, imagemLoki, 0, 20, 100, 105, 100, 105);
        const nidhoggers_shadow = new Enemy(matriz_nidhoggers, imagemNidhoggers, width, 10, 185, 274, 185, 274, 30, 100);
        const memory_of_thanatos = new Enemy(matriz_memory_of_thanatos, imagemMemoryOfThanatos, width, 10, 75, 116, 75, 116, 30, 100);
        const valkyrie_randgris = new Enemy(matriz_valkyrie_randgris, imagemValkyrieRandgris, width, 10, 170, 150, 170, 150, 30, 100);
        const naght_sieger = new Enemy(matriz_naght_sieger, imagemNaghtSieger, width, 10, 235, 226, 235, 226, 20, 100);
        const kades = new Enemy(matriz_kades, imagemKades, width, 10, 90, 155, 90, 155, 30, 100);
        const gloom_under_night = new Enemy(matriz_gloom_under_night, imagemGloomUnderNight, width, 10, 125, 165, 125, 165, 30, 100);
        enemies.length = 0;
        enemies.push(gloom_under_night);
        enemies.push(nidhoggers_shadow);
        enemies.push(memory_of_thanatos);
        enemies.push(kades);
        enemies.push(valkyrie_randgris);
        enemies.push(naght_sieger);
        randomEnemy = Math.floor(Math.random() * enemies.length);
    }
    draw(){
        enemy_time = enemies[randomEnemy];
        scene_two_back.exibe();
        scene_two_back.move();
        scene_two_tree.exibe();
        scene_two_tree.move();
        scene_two_air.exibe();
        scene_two_air.move();
        pontuacao.show();
        pontuacao.incrementPoints();
        loki.show();
        loki.gravit();
        enemy_time.show();
        enemy_time.walk();  
        scene_two_vegetation.exibe();
        scene_two_vegetation.move();
        life.draw();
        bonus.show();
        bonus.walk();

        if(loki.colliding(enemy_time)){
            soundDamage.play();
            pontuacao.decrementPoints(5);
            life.loseLife();
            loki.invincibility();
            if(life.qtd_vidas === 0){
                soundMorocc.stop();
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
        buttonFaseTwoToFaseThree.draw();
    }
}