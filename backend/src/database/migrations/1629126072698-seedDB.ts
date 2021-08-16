import {MigrationInterface, QueryRunner} from "typeorm";

export class seedDB1629126072698 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO stadium (id, name, capacity, founded_at, city, state, country) VALUES ('1', 'Stamford Bridge', 41837, '28/04/1877', 'London', 'England', 'United Kingdom')");
        await queryRunner.query("INSERT INTO team (id, name, headquarters, founded_at, stadium_id) VALUES ('1', 'Paris Saint-Germain Football Club', 'França', '12/08/1970')");
        await queryRunner.query("INSERT INTO team (id, name, headquarters, founded_at) VALUES ('2', 'Chelsea Football Club', 'Reino Unido', '10/03/1905', '1')");
        await queryRunner.query("INSERT INTO team (id, name, headquarters, founded_at) VALUES ('3', 'Borussia Dortmund', 'Alemanha', '19/12/1909')");
        await queryRunner.query("INSERT INTO player (id, name, natural_from, birth_date, team_id) VALUES ('1', 'Neymar da Silva Santos Júnior', 'Brasil', '05/02/1992', '1')");
        await queryRunner.query("INSERT INTO player (id, name, natural_from, birth_date, team_id) VALUES ('2', 'Christian Mate Pulisic', 'Estados Unidos', '18/09/1998', '2')");
        await queryRunner.query("INSERT INTO player (id, name, natural_from, birth_date, team_id) VALUES ('3', 'Erling Braut Haaland', 'Reino Unido', '21/07/2000', '3')");
        await queryRunner.query("INSERT INTO player (id, name, natural_from, birth_date, team_id) VALUES ('4', 'Lionel Andrés Messi Cuccittini', 'Argentina', '24/06/1987', '1')");
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM team WHERE id = '1'");
        await queryRunner.query("DELETE FROM team WHERE id = '2'");
        await queryRunner.query("DELETE FROM team WHERE id = '3'");
        await queryRunner.query("DELETE FROM player WHERE id = '1'");
        await queryRunner.query("DELETE FROM player WHERE id = '2'");
        await queryRunner.query("DELETE FROM player WHERE id = '3'");
        await queryRunner.query("DELETE FROM player WHERE id = '4'");
        await queryRunner.query("DELETE FROM stadium WHERE id = '1'");
    }

}
