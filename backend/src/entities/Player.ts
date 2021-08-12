import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("players")
class Player{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    readonly name: string;

    @Column()
    readonly cpf: string;

    @CreateDateColumn()
    birth_date: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Player }