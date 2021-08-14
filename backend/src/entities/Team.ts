import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Player } from './Player';

@Entity("team")
class Team{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    founded_at: string;

    @OneToMany(() => Player, players => players.team)
    players: Player[];

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Team }