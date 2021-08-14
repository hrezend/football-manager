import { getCustomRepository, IsNull, Repository } from "typeorm";
import { AppError } from "../utils/errors/AppError";
import { Player } from "../entities/Player";
import { Team } from "../entities/Team";
import { PlayerRepository } from "../repositories/PlayerRepository";
import { TeamRepository } from "../repositories/TeamRepository";

class BindService{

    private playerRepository : Repository<Player>;
    private teamRepository : Repository<Team>;

    constructor(){
        this.playerRepository = getCustomRepository(PlayerRepository);
        this.teamRepository = getCustomRepository(TeamRepository);
    }

    async bindPlayerToTeam(player_id: string, team_id: string){
        const player = await this.playerRepository.findOne({id: player_id});

        if(player.team_id != null){
            throw new AppError("This player is binded with some team!", 400);
        }

        const bind = await this.playerRepository.createQueryBuilder().update(Player).set({team_id}).where("id = :player_id", {player_id}).execute();

        return bind;
    }

    async unbindPlayerToTeam(player_id: string, team_id: string){
        const player = await this.playerRepository.findOne({id: player_id});

        if(player.team_id == null){
            throw new AppError("This player is not binded!", 400);
        }

        const bind = await this.playerRepository.createQueryBuilder().update(Player).set({team_id: null}).where("id = :player_id", {player_id}).execute();

        return bind;
    }

}

export { BindService }