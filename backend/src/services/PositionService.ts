import { request } from "express";
import { getCustomRepository, Repository } from "typeorm";
import { Position } from "../entities/Position";
import { PositionRepository } from "../repositories/PositionRepository";

interface IPosition{
    description: string;
    main: boolean;
    player_id: string;
}

class PositionService{

    private positionRepository : Repository<Position>;

    constructor(){
        this.positionRepository = getCustomRepository(PositionRepository);
    }

    async create({description, main, player_id}:IPosition){
        const position = this.positionRepository.create({description, main, player_id})
        await this.positionRepository.save(position);

        return position;
    }
    
}

export { PositionService }