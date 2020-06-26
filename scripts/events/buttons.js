class ButtonMenuToFaseOne{
    constructor(texto, x, y){
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.button = createButton(this.texto);
        this.button.addClass('botao-tela-inicial');
        this.button.mousePressed(() => this._changeScene());
    }
    draw(){
        this.button.position(this.x, this.y);
        this.button.center('horizontal');
    }
    _changeScene(){
        this.button.remove();
        cenaAtual = 'fase1';
        fase1.setup();
    }
}

class ButtonFaseOneToFaseTwo{
    constructor(texto, x, y){
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.button = createButton(this.texto);
        this.button.addClass('botao-tela-inicial');
        this.button.mousePressed(() => this._changeScene());
    }
    draw(){
        this.button.position(this.x, this.y);
        this.button.center('horizontal');
    }
    _changeScene(){
        this.button.remove();
        cenaAtual = 'fase2';
        fase2.setup();
    }
}