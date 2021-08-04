import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import {Manager} from "./Manager";

@Entity("managers")
class Changelog{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    manager_id: string;

    @ManyToOne(()=> Manager)
    @JoinColumn({name: "manager_id"})
    manager: Manager;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Changelog }