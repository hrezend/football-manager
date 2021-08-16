import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Team } from './Team';

@Entity("stadium")
class Stadium{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    capacity: Number;

    @Column()
    founded_at: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @OneToMany(() => Team, teams => teams.stadium)
    teams: Team[];

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Stadium }