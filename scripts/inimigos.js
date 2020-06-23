const width_azuring = 105;
const height_azuring = 105;
const width_nidhoggers = 190;
const height_nighoggers = 310;
const width_evilfanatic = 250;
const height_evilganatic = 195;

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
            [0, 0],
            [195, 0],
            [355, 0],
            [570, 0],
            [750, 0],
            [940, 0],
            [1120, 0]
        ];
        this.pontoMatrizAtual = 0;
        this.imageWidths = [190, 175, 205, 175, 175, 175, 175];
        this.imageHeight = 310;
    }
    exibe(){
        image(this.imagem, width - 250, height - 300, width_nidhoggers, height_nighoggers, this.matriz[this.pontoMatrizAtual][0], this.matriz[this.pontoMatrizAtual][1], this.imageWidths[this.pontoMatrizAtual], this.imageHeight);
        this.animacao();
    }
    animacao(){
        this.pontoMatrizAtual++;
        if(this.pontoMatrizAtual >= this.matriz.length - 1){
            this.pontoMatrizAtual = 0;
        }
    }
}

class EvilFanatic{
    constructor(imagem){
        this.imagem = imagem;
        this.matriz = [
            [0, 0],
            [250, 0],
            [500, 0],
            [750, 0],
            [1000, 0],
            [1250, 0],
        ];
        this.pontoMatrizAtual = 0;
        this.imageWidth = 250;
        this.imageHeight = 195;
    }
    exibe(){
        image(this.imagem, width - width_evilfanatic, height - height_evilganatic + 20, width_evilfanatic, height_evilganatic, this.matriz[this.pontoMatrizAtual][0], this.matriz[this.pontoMatrizAtual][1], this.imageWidth, this.imageHeight);
        this.animacao();
    }
    animacao(){
        this.pontoMatrizAtual++;
        if(this.pontoMatrizAtual >= this.matriz.length - 1){
            this.pontoMatrizAtual = 0;
        }
    }
}