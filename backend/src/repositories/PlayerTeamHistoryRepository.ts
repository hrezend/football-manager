import { EntityRepository, Repository } from "typeorm";
import { PlayerTeamHistory } from "../entities/PlayerTeamHistory";

@EntityRepository(PlayerTeamHistory)
class PlayerTeamHistoryRepository extends Repository<PlayerTeamHistory>{}

export { PlayerTeamHistoryRepository }