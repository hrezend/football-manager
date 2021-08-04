import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("teams")
class Team{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    founded_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Team }