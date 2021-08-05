import { Request, Response } from 'express';
import { PlayerService } from '../services/PlayerService';
import { ChangelogService } from '../services/ChangelogService';

class PlayerController{
    async create(request: Request, response: Response) : Promise<Response>{
        const {name, cpf, birth_date} = request.body;
        const playerService = new PlayerService();
        const player = await playerService.create({name, cpf, birth_date});

        const changelogService = new ChangelogService();
        const description = "Created a new player.";
        const manager_id = request.headers.authorization;
        const changelog = await changelogService.create({description, manager_id, object_id: player.id});

        return response.status(201).json({message: "A player was created with success."});
    }
}

export { PlayerController }