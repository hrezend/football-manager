import { Request, Response } from 'express';
import { BindService } from '../services/BindService';

class BindController{

    async bindPlayerToTeam(request: Request, response: Response) : Promise<Response>{
        const { team_id, player_id } = request.body;
        const bindService = new BindService();
        await bindService.bindPlayerToTeam(player_id, team_id);

        return response.status(201).json({message: "A bind was created with success."});
    }

    async unbindPlayerToTeam(request: Request, response: Response) : Promise<Response>{
        const { team_id, player_id } = request.body;
        const bindService = new BindService();
        await bindService.unbindPlayerToTeam(player_id, team_id);

        return response.status(201).json({message: "A bind was broked."});
    }
    
}

export { BindController }