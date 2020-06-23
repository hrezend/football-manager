class Hypista{
    constructor(imagem){
        this.imagem = imagem;
        this.matriz = [
            [0, 0],
            [220, 0],
            [440, 0],
            [660, 0],
            [0, 270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0, 540],
            [220, 540],
            [440, 540],
            [660, 540],
            [0, 810],
            [220, 810],
            [440, 810],
            [660, 810],
        ];
        this.pontoMatrizAtual = 0;
    }
    exibe(){
        image(this.imagem, 0, height - 135, 110, 135, this.matriz[this.pontoMatrizAtual][0], this.matriz[this.pontoMatrizAtual][1], 220, 270);
        this.animacao();
    }
    animacao(){
        this.pontoMatrizAtual++;
        if(this.pontoMatrizAtual >= this.matriz.length - 1){
            this.pontoMatrizAtual = 0;
        }
    }
}

class Loki{
    constructor(imagem){
        this.imagem = imagem;
        this.matriz = [
            [0, 0],
            [100, 0],
            [200, 0],
            [300, 0],
            [400, 0],
            [600, 0],
            [700, 0],
            [800, 0]
        ];
        this.pontoMatrizAtual = 0;
    }
    exibe(){
        image(this.imagem, 0, height - 159, 150, 159, this.matriz[this.pontoMatrizAtual][0], this.matriz[this.pontoMatrizAtual][1], 100, 105);
        this.animacao();
    }
    animacao(){
        this.pontoMatrizAtual++;
        if(this.pontoMatrizAtual >= this.matriz.length - 1){
            this.pontoMatrizAtual = 0;
        }
    }
}