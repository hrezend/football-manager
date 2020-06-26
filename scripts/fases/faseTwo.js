class FaseTwo{
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
        soundProntera.stop();
        soundMorocc.loop();
        scene_two_tree = new Cenario(imagemSetupTwoTree, 7);
        scene_two_vegetation = new Cenario(imagemSetupTwoVegetation, 7);
        scene_two_back = new Cenario(imagemSetupTwoBack, 4);
        scene_two_air = new Cenario(imagemSetupTwoAir, 20);
        pontuacao = new Punctuation();
        loki = new Hero(matriz_loki, imagemLoki, 0, 20, 100, 105, 100, 105);
        const nidhoggers_shadow = new Enemy(matriz_nidhoggers, imagemNidhoggers, width, 10, 185, 274, 185, 274, 30, 100);
        const memory_of_thanatos = new Enemy(matriz_memory_of_thanatos, imagemMemoryOfThanatos, width, 10, 75, 116, 75, 116, 30, 100);
        const valkyrie_randgris = new Enemy(matriz_valkyrie_randgris, imagemValkyrieRandgris, width, 10, 170, 150, 170, 150, 50, 100);
        const naght_sieger = new Enemy(matriz_naght_sieger, imagemNaghtSieger, width, 10, 235, 226, 235, 226, 20, 100);
        const kades = new Enemy(matriz_kades, imagemKades, width, 10, 90, 155, 90, 155, 30, 100);
        const gloom_under_night = new Enemy(matriz_gloom_under_night, imagemGloomUnderNight, width, 10, 125, 165, 125, 165, 30, 100);
        const faceworm_queen = new Enemy(matriz_faceworm_queen, imagemFacewoormQueen, width, 10, 180, 125, 180, 125, 40, 100);
        enemies.length = 0;
        enemies.push(gloom_under_night);
        enemies.push(faceworm_queen);
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
}