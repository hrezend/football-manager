import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Player } from './Player';
import { Team } from './Team';

@Entity("player_has_team")
class PlayerHasTeam{

    @PrimaryColumn()
    id: string;

    @CreateDateColumn()
    started_at: string;

    @UpdateDateColumn()
    finished_at: string;

    @JoinColumn({name:'player_id'})
    @ManyToOne(type => Player, player_has_team => PlayerHasTeam)
    player: Player;

    @Column()
    player_id: string;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { PlayerHasTeam }