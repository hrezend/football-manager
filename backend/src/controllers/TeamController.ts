import { Request, Response } from 'express';
import { TeamService } from '../services/TeamService';
import { ChangelogService } from '../services/ChangelogService';

class TeamController{
    async create(request: Request, response: Response) : Promise<Response>{
        const { name, founded_at } = request.body;
        const teamService = new TeamService();
        const team = await teamService.create({name, founded_at});

        const changelogService = new ChangelogService();
        const description = "Created a new team.";
        const manager_id = request.headers.authorization;
        const changelog = await changelogService.create({description, manager_id, object_id: team.id});

        return response.status(201).json({message: "A team was created with success."});
    }

    async showAllTeams(request: Request, response: Response) : Promise<Response>{
        const teamService = new TeamService();
        const allTeams = await teamService.showAllTeams();

        return response.status(200).json(allTeams);
    }
}

export { TeamController }