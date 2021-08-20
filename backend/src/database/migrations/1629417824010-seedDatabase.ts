import {MigrationInterface, QueryRunner} from "typeorm";

export class seedDatabase1629417824010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO stadium (id, name, capacity, founded_at, city, state, country) VALUES ('1', 'Stamford Bridge', 41837, '28/04/1877', 'London', 'London', 'United Kingdom')");
        await queryRunner.query("INSERT INTO stadium (id, name, capacity, founded_at, city, state, country) VALUES ('2', 'Parc des Princes', 47929, '18/07/1897', 'Paris', 'Paris', 'France')");
        await queryRunner.query("INSERT INTO stadium (id, name, capacity, founded_at, city, state, country) VALUES ('3', 'Signal Iduna Park', 81365, '02/04/1974', 'Dortmund', 'Nordrhein-Westfalen', 'Germany')");
        await queryRunner.query("INSERT INTO team (id, name, headquarters, founded_at, stadium_id) VALUES ('1', 'Chelsea Football Club', 'United Kingdom', '10/03/1905', '1')");
        await queryRunner.query("INSERT INTO team (id, name, headquarters, founded_at, stadium_id) VALUES ('2', 'Paris Saint-Germain Football Club', 'France', '12/08/1970', '2')");
        await queryRunner.query("INSERT INTO team (id, name, headquarters, founded_at, stadium_id) VALUES ('3', 'Borussia Dortmund', 'Germany', '19/12/1909', '3')");
        await queryRunner.query("INSERT INTO player (id, name, height, shirt_number, favorite_foot, natural_from, birth_date, team_id) VALUES ('1', 'Neymar da Silva Santos Júnior', 175, 10, 'Right', 'Brazil', '05/02/1992', '1')");
        await queryRunner.query("INSERT INTO player (id, name, height, shirt_number, favorite_foot, natural_from, birth_date, team_id) VALUES ('2', 'Christian Mate Pulisic', 172, 10, 'Both', 'United States', '18/09/1998', '2')");
        await queryRunner.query("INSERT INTO player (id, name, height, shirt_number, favorite_foot, natural_from, birth_date, team_id) VALUES ('3', 'Erling Braut Haaland', 191, 9, 'Left', 'United Kingdom', '21/07/2000', '3')");
        await queryRunner.query("INSERT INTO player (id, name, height, shirt_number, favorite_foot, natural_from, birth_date, team_id) VALUES ('4', 'Lionel Andrés Messi Cuccittini', 170, 30, 'Left', 'Argentina', '24/06/1987', '1')");
        await queryRunner.query("INSERT INTO position (id, description, main, player_id) VALUES ('1', 'Ponta Esquerda', true, '1')");
        await queryRunner.query("INSERT INTO position (id, description, main, player_id) VALUES ('2', 'Atacante Central', false, '1')");
        await queryRunner.query("INSERT INTO position (id, description, main, player_id) VALUES ('3', 'Meio Campo Ofensivo Central', false, '1')");
        await queryRunner.query("INSERT INTO position (id, description, main, player_id) VALUES ('4', 'Meio Campo Esquerdo', false, '1')");
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
        await queryRunner.query("DELETE FROM stadium WHERE id = '2'");
        await queryRunner.query("DELETE FROM stadium WHERE id = '3'");
    }

}
