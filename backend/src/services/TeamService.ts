import { getCustomRepository, Repository } from "typeorm";
import { AppError } from '../utils/errors/AppError';
import { Team } from "../entities/Team";
import { TeamRepository } from "../repositories/TeamRepository";

interface ITeam{
    name: string;
    headquarters: string;
    founded_at: string;
}

class TeamService{

    private teamRepository : Repository<Team>;

    constructor(){
        this.teamRepository = getCustomRepository(TeamRepository);
    }

    async create({name, headquarters, founded_at}:ITeam){
        const nameAlreadyUsing = await this.teamRepository.findOne({name});

        if(nameAlreadyUsing){
            throw new AppError("Team already using this name.", 400);
        }

        const team = this.teamRepository.create({name, headquarters, founded_at});
        await this.teamRepository.save(team);

        return team;
    }

    async showAllTeams(){
        const allTeams = await this.teamRepository.find();
        
        return allTeams;
    }

    async showTeamByID(team_id: string){
        const allTeams = await this.teamRepository.find({
            where: {id: team_id},
            relations: ["stadium", "players"]
        });
        
        return allTeams;
    }

}

export { TeamService }