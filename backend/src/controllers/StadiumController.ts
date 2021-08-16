import { Request, Response } from 'express';
import { StadiumService } from '../services/StadiumService';

class StadiumController{

    async create(request: Request, response: Response) : Promise<Response>{
        const { name, capacity, founded_at, city, state, country } = request.body;
        const stadiumService = new StadiumService();
        await stadiumService.create({name, capacity, founded_at, city, state, country});

        return response.status(201).json({message: "A stadium was created with success."});
    }

    async showAllStadiums(request: Request, response: Response) : Promise<Response>{
        const stadiumService = new StadiumService();
        const allStadiums = await stadiumService.showAllStadiums();

        return response.status(200).json(allStadiums);
    }
    
}

export { StadiumController }