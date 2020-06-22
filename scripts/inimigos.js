const width_azuring = 105;
const height_azuring = 105;
const width_nidhoggers = 185;
const height_nighoggers = 310;

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

class Nidhoggers{
    constructor(imagem){
        this.imagem = imagem;
        this.matriz = [
            //185, 310
            [0, 0],
        ];
        this.pontoMatrizAtual = 0;
        this.imageWidth = 185;
        this.imageHeight = 310;
    }
    exibe(){
        image(this.imagem, width - 185, height - 310, width_nidhoggers, height_nighoggers, this.matriz[this.pontoMatrizAtual][0], this.matriz[this.pontoMatrizAtual][1], this.imageWidth, this.imageHeight);
        this.animacao();
    }
    animacao(){
        this.pontoMatrizAtual++;
        if(this.pontoMatrizAtual >= this.matriz.length - 1){
            this.pontoMatrizAtual = 0;
        }
    }
}