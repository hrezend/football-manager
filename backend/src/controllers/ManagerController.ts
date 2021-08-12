import { Request, Response } from 'express';
import { ManagerService } from '../services/ManagerService';

class ManagerController{
    async create(request: Request, response: Response) : Promise<Response>{
        const {name, email, login, password, type} = request.body;
        const managerService = new ManagerService();
        const manager = await managerService.create({name, email, login, password, type});

        return response.status(201).json({message: "A manager was created with success."});
    }
}

export { ManagerController }