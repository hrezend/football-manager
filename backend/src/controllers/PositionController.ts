import { Request, Response } from 'express';
import { PositionService} from '../services/PositionService';

class PositionController{

    async create(request: Request, response: Response) : Promise<Response>{
        const { description, main, player_id } = request.body;
        const positionService = new PositionService();
        await positionService.create({ description, main, player_id });

        return response.status(201).json({message: "A player position was created with success."});
    }

}

export { PositionController }