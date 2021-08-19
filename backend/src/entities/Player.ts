import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Team } from './Team';

@Entity("player")
class Player{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    height: Number;

    @Column()
    shirt_number: Number;

    @Column()
    natural_from: string;

    @Column()
    birth_date: string;

    @Column()
    favorite_foot: string;

    @JoinColumn({name: 'team_id'})
    @ManyToOne(() => Team, team => team.players)
    team: Team;

    @Column()
    team_id: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Player }