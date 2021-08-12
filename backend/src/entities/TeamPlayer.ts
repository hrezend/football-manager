import { Entity, Column, PrimaryColumn, JoinColumn, ManyToMany, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Player } from './Player';
import { Team } from './Team';

@Entity("teams_players")
class TeamPlayer{

    @PrimaryColumn()
    readonly id: string;

    @JoinColumn({name: "team_id"})
    @ManyToMany(() => Team)
    team : Team;

    @Column()
    team_id: string;

    @JoinColumn({name: "player_id"})
    @ManyToMany(() => Player)
    player : Player;

    @Column()
    player_id: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    started_at: Date;

    @CreateDateColumn()
    finished_at: Date;

    @Column()
    active: boolean;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { TeamPlayer }