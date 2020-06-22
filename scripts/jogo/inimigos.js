const width_azuring = 105;
const height_azuring = 105;
const width_bungisngis = 170;
const height_bungisngis = 170;

class Azuring{
    constructor(imagem){
        this.imagem = imagem;
        this.matriz = [
            [0, 0],
            [105, 0],
            [210, 0],
            [315, 0],
            [0, 105],
            [105, 105],
            [210, 105],
            [315, 105],
            [0, 210],
            [105, 210],
            [210, 210],
            [315, 210],
        ];
        this.pontoMatrizAtual = 0;
        this.imageWidth = 105;
        this.imageHeight = 105;
    }
    exibe(){
        image(this.imagem, width - 105, height - 105, width_azuring, height_azuring, this.matriz[this.pontoMatrizAtual][0], this.matriz[this.pontoMatrizAtual][1], this.imageWidth, this.imageHeight);
        this.animacao();
    }
    animacao(){
        this.pontoMatrizAtual++;
        if(this.pontoMatrizAtual >= this.matriz.length - 1){
            this.pontoMatrizAtual = 0;
        }
    }
}

class Bungisngis{
    constructor(imagem){
        this.imagem = imagem;
        this.matriz = [
            [0, 340],
            [170, 340],
            [340, 340],
            [510, 340],
            [680, 340],
            [850, 340],
        ];
        this.pontoMatrizAtual = 0;
        this.imageWidth = 170;
        this.imageHeight = 170;
    }
    exibe(){
        image(this.imagem, width - 275, height - 170, width_bungisngis, height_bungisngis, this.matriz[this.pontoMatrizAtual][0], this.matriz[this.pontoMatrizAtual][1], this.imageWidth, this.imageHeight);
        this.animacao();
    }
    animacao(){
        this.pontoMatrizAtual++;
        if(this.pontoMatrizAtual >= this.matriz.length - 1){
            this.pontoMatrizAtual = 0;
        }
    }
}