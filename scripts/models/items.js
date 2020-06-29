class Bonuses extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
        this.velocidade = velocidade;
        this.delay = delay;
        this.x = width + this.delay;
    }
    walk(){
        this.x = this.x - this.velocidade;
        if(this.x < -this.largura - this.delay){
            this.x = width;
        }
    }
    passed(){
        if(this.x < -this.largura){
            return true;
        }
        return false;
    }
}