import { getCustomRepository, Repository } from "typeorm";
import { AppError } from '../utils/errors/AppError';
import { Changelog } from "../entities/Changelog";
import { ChangelogRepository } from "../repositories/ChangelogRepository";

interface IChangelog{
    description: string;
    manager_id: string;
    object_id: string;
}

class ChangelogService{

    private changelogRepository : Repository<Changelog>;

    constructor(){
        this.changelogRepository = getCustomRepository(ChangelogRepository);
    }

    async create({description, manager_id, object_id}:IChangelog){
        const changelog = this.changelogRepository.create({description, manager_id, object_id});
        await this.changelogRepository.save(changelog);
        return changelog;
    }

    async showAllChangelogs(){
        const allChangelogs = await this.changelogRepository.find();
        return allChangelogs;
    }
}

export { ChangelogService }