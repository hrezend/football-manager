import { EntityRepository, Repository } from "typeorm";
import { TeamPlayer } from "../entities/TeamPlayer";

@EntityRepository(TeamPlayer)
class TeamPlayerRepository extends Repository<TeamPlayer>{}

export {TeamPlayerRepository}