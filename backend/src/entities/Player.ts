import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("players")
class Player{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    readonly name: string;

    @Column()
    readonly cpf: string;

    @Column()
    birth_date: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Player }