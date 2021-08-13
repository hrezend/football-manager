import { getCustomRepository, Repository } from "typeorm";
import { AppError } from '../utils/errors/AppError';
import { Team } from "../entities/Team";
import { TeamRepository } from "../repositories/TeamRepository";

interface ITeam{
    name: string;
    founded_at: string;
}

class TeamService{

    private teamRepository : Repository<Team>;

    constructor(){
        this.teamRepository = getCustomRepository(TeamRepository);
    }

    async create({name, founded_at}:ITeam){
        const nameAlreadyUsing = await this.teamRepository.findOne({name});

        if(nameAlreadyUsing){
            throw new AppError("Team already using this name.", 400);
        }

        const team = this.teamRepository.create({name, founded_at});
        await this.teamRepository.save(team);
        return team;
    }

    async showAllTeams(){
        const allTeams = await this.teamRepository.find();
        return allTeams;
    }

    async showPlayersOfATeam(team_id: string){
        //const activePlayers = await this.teamRepository.query(`select players.name from players left join teams_players on players.id = teams_players.player_id left join teams on teams_players.team_id = teams.id where teams_players.active = true and teams_players.team_id = ${team_id}`);
        const activePlayers = await this.teamRepository.createQueryBuilder("player").leftJoinAndSelect("player.id", "teams_players.player_id");
        return activePlayers;
    }

}

export { TeamService }