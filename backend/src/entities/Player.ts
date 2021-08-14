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
    cpf: string;

    @Column()
    birth_date: string;

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