class Menu{
    keyPressed(key){
        console.log('Nothing here yet...');
    }
    setup(){
        soundMenu.loop();
    }
    draw(){
        this._imagemDeFundo();
        this._texto();
        this._button();
    }
    _imagemDeFundo(){
        image(imagemMenu, 0, 0, width, height);
    }
    _texto(){
        textAlign(CENTER);
        textFont(fontGame);
        textSize(54);
        text('Endless', width/2, height/3);
        textSize(74);
        text('Runnerok', width/2, height / 5 * 3);
    }
    _button(){
        buttonMenuToInstructions.y = height / 7 * 5;
        buttonMenuToInstructions.draw();
    }
}