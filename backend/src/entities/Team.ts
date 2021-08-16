import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Player } from './Player';
import { Stadium } from './Stadium';

@Entity("team")
class Team{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    headquarters: string;

    @Column()
    founded_at: string;

    @OneToMany(() => Player, players => players.team)
    players: Player[];

    @JoinColumn({name: 'stadium_id'})
    @ManyToOne(() => Stadium, stadium => stadium.teams)
    stadium: Stadium;

    @Column()
    stadium_id: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Team }