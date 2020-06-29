class Punctuation{
    constructor(){
        this.points = 0;
    }
    progress(){
        return this.points;
    }
    show(){
        fill('#00594f');
        textAlign(RIGHT);
        textSize(50);
        text(parseInt(this.points), width-30, 50);
    }
    incrementPoints(){
        this.points = this.points + 0.5;
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