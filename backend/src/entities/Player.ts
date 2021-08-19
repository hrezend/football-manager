import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Position } from './Position';
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

    @OneToMany(() => Position, positions => positions.player)
    positions: Position[];

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Player }