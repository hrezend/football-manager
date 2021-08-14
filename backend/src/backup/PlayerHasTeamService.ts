import { getCustomRepository, Repository } from "typeorm";
import { Team } from "../entities/Team";
import { TeamRepository } from "../repositories/TeamRepository";

class PlayerHasTeamService{

    private teamRepository : Repository<Team>;

    constructor(){
        this.teamRepository = getCustomRepository(TeamRepository);
    }

    async addPlayerToTeam(team_id: string, player_id:string){
        const player = await this.playerRepository.find({id: player_id});
        const team = await this.teamRepository.find({id: team_id});

        await this.teamRepository.createQueryBuilder().update(Team).set({player})
    }

}

export { PlayerHasTeamService }