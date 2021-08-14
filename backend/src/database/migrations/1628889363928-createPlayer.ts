import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPlayer1628889363928 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "player",
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
                        name: "cpf",
                        type: "varchar",
                    },
                    {
                        name: "birth_date",
                        type: "varchar",
                    },
                    {
                        name: "team_id",
                        type: "varchar",
                        isNullable: true,
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_team",
                        referencedTableName: "team",
                        referencedColumnNames: ["id"],
                        columnNames: ["team_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("player");
    }

}
