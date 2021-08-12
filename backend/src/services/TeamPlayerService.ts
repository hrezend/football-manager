import { getCustomRepository, Repository } from "typeorm";
import { AppError } from '../utils/errors/AppError';
import { TeamPlayerRepository } from "../repositories/TeamPlayerRepository";
import { TeamPlayer } from "../entities/TeamPlayer";

interface ITeamPlayer{
    team_id: string;
    player_id: string;
    started_at: Date;
    finished_at: Date;
    active: boolean;
}

class TeamPlayerService{

    private teamPlayerRepository : Repository<TeamPlayer>;

    constructor(){
        this.teamPlayerRepository = getCustomRepository(TeamPlayerRepository);
    }

    async create(player_id: string, team_id: string, started_at: string){

        const playerIsActive = await this.teamPlayerRepository.findOne({player_id, active: true});
        if(playerIsActive){
            throw new AppError("This player is active at some team! Unbind him first.", 400);
        }

        const createTeamPlayer = this.teamPlayerRepository.create({player_id, team_id, started_at, active: true, finished_at: null});
        await this.teamPlayerRepository.save(createTeamPlayer);

        return createTeamPlayer;
    }

    async unbindTeamPlayer(id: string, player_id: string, team_id: string){

        const playerIsActive = await this.teamPlayerRepository.findOne({player_id, active: true});
        if(!playerIsActive){
            throw new AppError("This player is available for hire.", 400);
        }

        const teamPlayer = this.teamPlayerRepository.createQueryBuilder().update(TeamPlayer).set({active: false, finished_at: Date.now()}).where("id = :id", {id}).andWhere("team_id = :team_id", {team_id}).andWhere("player_id = :player_id", {player_id}).execute();
    
        return teamPlayer;
    }
}

export { TeamPlayerService }