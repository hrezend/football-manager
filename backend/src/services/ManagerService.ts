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
        const emailAlreadyUsing = await this.managerRepository.findOne({email});
        const loginAlreadyUsing = await this.managerRepository.findOne({login});

        if(emailAlreadyUsing){
            throw new AppError("Manager already using this email.", 400);
        }
        if(loginAlreadyUsing){
            throw new AppError("Manager already using this login.", 400);
        }

        const manager = this.managerRepository.create({name, email, login, password, type});
        await this.managerRepository.save(manager);
        return manager;
    }

    async showAllManagers(){
        const allManagers = await this.managerRepository.find();
        return allManagers;
    }
}

export { ManagerService }