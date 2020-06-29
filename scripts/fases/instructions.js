class Instructions{
    keyPressed(key){
        console.log('Nothing here yet...');
    }
    setup(){
        buttonMenuToFaseOne = new ButtonMenuToFaseOne('New Game', width/2, height/2);
        soundMenu.stop();
        soundInstructions.loop();
    }
    draw(){
        this._imagemDeFundo();
        this._texto();
        this._button();
    }
    _imagemDeFundo(){
        image(imagemInstructions, 0, 0, width, height);
    }
    _texto(){
        textAlign(CENTER);
        textFont(fontGame);
        textSize(20);
        fill('#00594f');
        text("1º - Press 'ArrowUp' to jump enemies. Avoid collisions!", width/2, height/7 * 1);
        text("2º - Press 'CapsLock' to attack enemies. (under development...)", width/2, height/7 * 2);
        text("3º - Get all the bonuses that appear!", width/2, height/7 * 3);
        text("4º - Press the button and change the stage whenever you want!", width/2, height/7 * 4);
    }
    _button(){
        buttonMenuToFaseOne.y = height / 7 * 5;
        buttonMenuToFaseOne.draw();
    }
}