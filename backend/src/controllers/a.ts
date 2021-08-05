import { ChangelogService } from '../services/ChangelogService';
const changelogService = new ChangelogService();
        const description = "Created a new team.";
        const manager_id = request.headers.authorization;
        const changelog = await changelogService.create({description, manager_id, object_id: team.id});

        const changelogService = new ChangelogService();
        const description = "Created a new manager.";
        const manager_id = request.headers.authorization;
        const changelog = await changelogService.create({description, manager_id, object_id: manager.id});