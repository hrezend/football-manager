class Enemy extends Animacao{
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
        this.velocidade = 15;
    }
    walk(){
        this.x = this.x - this.velocidade;
        if(this.x < -this.largura){
            this.x = width;
        }
    }
}