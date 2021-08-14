import { Request, Response } from 'express';
import { ChangelogService } from '../services/ChangelogService';

class ChangelogController{

    async showAllChangelogs(request: Request, response: Response) : Promise<Response>{
        const changelogService = new ChangelogService();
        const allChangelogs = await changelogService.showAllChangelogs();

        return response.status(200).json(allChangelogs);
    }
    
}

export { ChangelogController }