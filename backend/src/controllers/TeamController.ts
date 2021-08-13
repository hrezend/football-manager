import { Request, Response } from 'express';
import { TeamService } from '../services/TeamService';

class TeamController{
    async create(request: Request, response: Response) : Promise<Response>{
        const { name, founded_at } = request.body;
        const teamService = new TeamService();
        const team = await teamService.create({name, founded_at});

        return response.status(201).json({message: "A team was created with success.", team});
    }

    async showAllTeams(request: Request, response: Response) : Promise<Response>{
        const teamService = new TeamService();
        const allTeams = await teamService.showAllTeams();

        return response.status(200).json(allTeams);
    }
    
}

export { TeamController }