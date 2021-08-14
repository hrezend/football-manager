import { Request, Response } from 'express';
import { PlayerService } from '../services/PlayerService';

class PlayerController{

    async create(request: Request, response: Response) : Promise<Response>{
        const {name, cpf, birth_date} = request.body;
        const playerService = new PlayerService();
        await playerService.create({name, cpf, birth_date});

        return response.status(201).json({message: "A player was created with success."});
    }

    async showAllPlayers(request: Request, response: Response) : Promise<Response>{
        const teamService = new PlayerService();
        const allPlayers = await teamService.showAllPlayers();

        return response.status(200).json(allPlayers);
    }

}

export { PlayerController }