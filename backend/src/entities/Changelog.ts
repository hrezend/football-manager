import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("changelogs")
class Changelog{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    object_id: string;

    @Column()
    manager_id: string;

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