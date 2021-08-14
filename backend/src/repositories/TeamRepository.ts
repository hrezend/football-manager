import { EntityRepository, Repository } from "typeorm";
import { Team } from "../entities/Team";

@EntityRepository(Team)
class TeamRepository extends Repository<Team>{}

export { TeamRepository }