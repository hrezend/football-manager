import { getCustomRepository, Repository } from "typeorm";
import { AppError } from '../errors/AppError';
import { Manager } from "../entities/Manager";
import { ManagerRepository } from "../repositories/ManagerRepository";

interface IManager{
    name: string,
    email: string,
    login: string,
    password: string,
    type: Number
}

class ManagerService{

    private managerRepository : Repository<Manager>;

    constructor(){
        this.managerRepository = getCustomRepository(ManagerRepository);
    }

    async create({name, email, login, password, type}:IManager){
        const alreadyExists = await this.managerRepository.findOne({email, login});

        if(alreadyExists){
            throw new AppError("This e-mail addres or login already exists.", 400);
        }

        const manager = this.managerRepository.create({name, email, login, password, type});
        await this.managerRepository.save(manager);
        return manager;
    }
    
}

export { ManagerService }