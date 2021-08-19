import { EntityRepository, Repository } from "typeorm";
import { Position } from "../entities/Position";

@EntityRepository(Position)
class PositionRepository extends Repository<Position>{}

export { PositionRepository }