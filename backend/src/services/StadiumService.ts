import { getCustomRepository, Repository } from "typeorm";
import { AppError } from '../utils/errors/AppError';
import { Stadium } from "../entities/Stadium";
import { StadiumRepository } from "../repositories/StadiumRepository";

interface IStadium{
    name: string;
    founded_at: string;
    capacity?: Number;
    city?: string;
    state?: string;
    country?: string;
}

class StadiumService{

    private stadiumRepository : Repository<Stadium>;

    constructor(){
        this.stadiumRepository = getCustomRepository(StadiumRepository);
    }

    async create({name, capacity, founded_at, city, state, country}:IStadium){
        const nameAlreadyUsing = await this.stadiumRepository.findOne({name});

        if(nameAlreadyUsing){
            throw new AppError("Stadium already using this name.", 400);
        }

        const stadium = this.stadiumRepository.create({name, capacity, founded_at, city, state, country});
        await this.stadiumRepository.save(stadium);

        return stadium;
    }

    async showAllStadiums(){
        const allStadiums = await this.stadiumRepository.find();
        
        return allStadiums;
    }

}

export { StadiumService }