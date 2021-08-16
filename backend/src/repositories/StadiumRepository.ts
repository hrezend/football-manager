import { EntityRepository, Repository } from "typeorm";
import { Stadium } from "../entities/Stadium";

@EntityRepository(Stadium)
class StadiumRepository extends Repository<Stadium>{}

export { StadiumRepository }