import { Request, Response } from 'express';
import { TeamPlayerService } from '../services/TeamPlayerService';

class TeamPlayerController{

    async bindTeamPlayer(request: Request, response: Response) : Promise<Response>{
        const { team_id, player_id } = request.body;
        const teamPlayerService = new TeamPlayerService();
        const teamPlayer = await teamPlayerService.bindTeamPlayer(player_id, team_id);

        return response.status(201).json({message: "A bind was created with success.", teamPlayer});
    }

    async unbindTeamPlayer(request: Request, response: Response) : Promise<Response>{
        const { id, team_id, player_id } = request.body;
        const teamPlayerService = new TeamPlayerService();

        await teamPlayerService.unbindTeamPlayer(id, player_id, team_id);

        return response.status(200).json({message: "This player was unbind."});
    }
    
}

export { TeamPlayerController }