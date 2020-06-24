class Punctuation{
    constructor(){
        this.points = 0;
    }
    show(){
        fill('#FFF');
        textAlign(RIGHT);
        textSize(50);
        text(parseInt(this.points), width-30, 50);
    }
    incrementPoints(){
        if(this.points < 500){
            this.points = this.points + 0.1;
        }
        else if(this.points < 1000){
            this.points = this.points + 0.2;
        }
    }
    decrementPoints(amount){
        this.amount = amount;
        this.points = this.points - this.amount;
    }
    gameOver(){
        if(this.points < 0){
            return true;
        }
        return false;
    }
}