class Life{
    constructor(total, initial){
        this.total = total;
        this.initial = initial;
        this.qtd_vidas = this.initial;
        this.altura = 25;
        this.largura = 25;
        this.xInicial = 20;
        this.yInicial = 20;
    }
    draw(){
        for(let i = 0; i < this.qtd_vidas; i++){
            let margem = i * 10;
            let posicao = this.xInicial * (1 + i);
            image(imagemLife, posicao + margem, this.yInicial, this.largura, this.altura);
        }
    }
    incrementLife(){
        if(this.qtd_vidas < this.total){
            this.qtd_vidas++;
        }
    }
    loseLife(){
        this.qtd_vidas--;
    }
}