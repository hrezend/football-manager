import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("managers")
class Manager{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    type: Number;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    
}

export { Manager }