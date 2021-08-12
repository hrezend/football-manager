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
}

export { TeamService }