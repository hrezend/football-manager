import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTeam1628889541853 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "team",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "founded_at",
                        type: "varchar",
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("team");
    }

}
