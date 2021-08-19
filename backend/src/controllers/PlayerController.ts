import { Request, Response } from 'express';
import { PlayerService } from '../services/PlayerService';

class PlayerController{

    async create(request: Request, response: Response) : Promise<Response>{
        const {name, height, shirt_number, favorite_foot, natural_from, birth_date} = request.body;
        const playerService = new PlayerService();
        await playerService.create({name, height, shirt_number, favorite_foot, natural_from, birth_date});

        return response.status(201).json({message: "A player was created with success."});
    }

    async showAllPlayers(request: Request, response: Response) : Promise<Response>{
        const playerService = new PlayerService();
        const allPlayers = await playerService.showAllPlayers();

        return response.status(200).json(allPlayers);
    }

    async showPlayerByID(request: Request, response: Response) : Promise<Response>{
        const { player_id } = request.body;
        const playerService = new PlayerService();
        const player = await playerService.showPlayerByID(player_id);

        return response.status(200).json(player);
    }

}

export { PlayerController }