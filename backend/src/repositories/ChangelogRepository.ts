import { EntityRepository, Repository } from "typeorm";
import { Changelog } from "../entities/Changelog";

@EntityRepository(Changelog)
class ChangelogRepository extends Repository<Changelog>{}

export {ChangelogRepository}