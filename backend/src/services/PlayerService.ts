import { getCustomRepository, Repository } from "typeorm";
import { AppError } from '../utils/errors/AppError';
import { Player } from "../entities/Player";
import { PlayerRepository } from "../repositories/PlayerRepository";

interface IPlayer{
    name: string;
    cpf: string;
    birth_date: Date;
}

class PlayerService{

    private playerRepository : Repository<Player>;

    constructor(){
        this.playerRepository = getCustomRepository(PlayerRepository);
    }

    async create({name, birth_date, cpf}:IPlayer){
        const playerAlreadyExists = await this.playerRepository.findOne({cpf});

        if(playerAlreadyExists){
            throw new AppError("This player already exists.", 400);
        }

        const player = this.playerRepository.create({name, cpf, birth_date});
        await this.playerRepository.save(player);
        return player;
    }
    
}

export { PlayerService }