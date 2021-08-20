import { Request, Response } from 'express';
import { TeamService } from '../services/TeamService';

class TeamController{
    
    async create(request: Request, response: Response) : Promise<Response>{
        const { name, headquarters, founded_at } = request.body;
        const teamService = new TeamService();
        await teamService.create({name, headquarters, founded_at});

        return response.status(201).json({message: "A team was created with success."});
    }

    async showAllTeams(request: Request, response: Response) : Promise<Response>{
        const teamService = new TeamService();
        const allTeams = await teamService.showAllTeams();

        return response.status(200).json(allTeams);
    }

    async showTeamByID(request: Request, response: Response) : Promise<Response>{
        const { team_id } = request.body;
        const teamService = new TeamService();
        const team = await teamService.showTeamByID(team_id);

        return response.status(200).json(team);
    }
    
}

export { TeamController }