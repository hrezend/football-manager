import { getCustomRepository, Repository } from "typeorm";
import { AppError } from '../errors/AppError';
import { Changelog } from "../entities/Changelog";
import { ChangelogRepository } from "../repositories/ChangelogRepository";

interface IChangelog{
    description: string;
    created_at: Date;
    manager_id: string;
}

class ChangelogService{

    private changelogRepository : Repository<Changelog>;

    constructor(){
        this.changelogRepository = getCustomRepository(ChangelogRepository);
    }

    async create({description, manager_id, created_at}:IChangelog){
        const changelog = this.changelogRepository.create({description, manager_id, created_at});
        await this.changelogRepository.save(changelog);
        return changelog;
    }

    async showAllChangelogs(){
        const allChangelogs = await this.changelogRepository.find();
        return allChangelogs;
    }
}

export { ChangelogService }