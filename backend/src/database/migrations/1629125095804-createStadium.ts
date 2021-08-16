import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createStadium1629125095804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "stadium",
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
                        name: "capacity",
                        type: "integer",
                        isNullable: true,
                    },
                    {
                        name: "city",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "state",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "country",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "founded_at",
                        type: "varchar",
                        isNullable: true,
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("stadium");
    }

}
