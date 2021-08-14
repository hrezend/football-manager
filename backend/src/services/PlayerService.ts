import { getCustomRepository, Repository } from "typeorm";
import { AppError } from '../utils/errors/AppError';
import { Player } from "../entities/Player";
import { PlayerRepository } from "../repositories/PlayerRepository";
import { nameValidator  } from '../utils/validators/Validators';

interface IPlayer{
    name: string;
    nationality: string;
    birth_date: string;
}

class PlayerService{

    private playerRepository : Repository<Player>;

    constructor(){
        this.playerRepository = getCustomRepository(PlayerRepository);
    }

    async create({name, birth_date, nationality}:IPlayer){
        const playerAlreadyExists = await this.playerRepository.findOne({name});

        if(playerAlreadyExists){
            throw new AppError("This player already exists.", 400);
        }

        const nameValidatted = nameValidator(name);

        const player = this.playerRepository.create({name: nameValidatted, nationality, birth_date});
        await this.playerRepository.save(player);
        
        return player;
    }
    
    async showAllPlayers(){
        const allPlayers = await this.playerRepository.find();
        
        return allPlayers;
    }

}

export { PlayerService }