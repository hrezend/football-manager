class Hero extends Animacao{
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
        this.yBase = height - this.altura;
        this.y = this.yBase;
        this.gravity = 3;
        this.speedJump = 0;
        this.jumpHeight = 35;
        this.amount_jumps = 0;
    }
    jump(){
        if(this.amount_jumps != 2){
            this.speedJump =- this.jumpHeight;
            this.amount_jumps++;
        }
    }
    gravit(){
        this.y = this.y + this.speedJump;
        this.speedJump = this.speedJump + this.gravity;
        if(this.y > this.yBase){
            this.y = this.yBase;
            this.amount_jumps = 0;
        }
    }
    colliding(enemy){
        const precision_height = 0.9;
        const precision_width = 0.5;
        //noFill();
        //rect(this.x, this.y, this.largura * precision_width, this.altura * precision_height);
        //rect(enemy.x, enemy.y, enemy.largura * precision_width, enemy.altura * precision_height);
        const collid = collideRectRect(
            this.x,
            this.y,
            this.largura * precision_width,
            this.altura * precision_height,
            enemy.x,
            enemy.y,
            enemy.largura * precision_width,
            enemy.altura * precision_height,
        );
        return collid;
    }
    attack(){
        
    }
}