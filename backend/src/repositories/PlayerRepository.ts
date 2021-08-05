import { EntityRepository, Repository } from "typeorm";
import { Player } from "../entities/Player";

@EntityRepository(Player)
class PlayerRepository extends Repository<Player>{}

export {PlayerRepository}