import { EntityRepository, Repository } from "typeorm";
import { Manager } from "../entities/Manager";

@EntityRepository(Manager)
class ManagerRepository extends Repository<Manager>{}

export {ManagerRepository}