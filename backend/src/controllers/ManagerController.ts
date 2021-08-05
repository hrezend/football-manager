import { Request, Response } from 'express';
import { ManagerService } from '../services/ManagerService';
import { ChangelogService } from '../services/ChangelogService';

class ManagerController{
    async create(request: Request, response: Response) : Promise<Response>{
        const { name, email, login, password, type } = request.body;
        const managerService = new ManagerService();
        const manager = await managerService.create({name, email, login, password, type});

        const changelogService = new ChangelogService();
        const description = "Created a new manager.";
        const manager_id = request.headers.authorization;
        const changelog = await changelogService.create({description, manager_id, object_id: manager.id});

        return response.status(201).json(manager);
    }
}

export { ManagerController }