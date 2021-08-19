import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Player } from './Player';

@Entity("position")
class Position{

    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    main: boolean;

    @JoinColumn({name: 'player_id'})
    @ManyToOne(() => Player, player => player.positions)
    player: Player;

    @Column()
    player_id: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Position }