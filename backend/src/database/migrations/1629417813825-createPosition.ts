import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPosition1629417813825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "position",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "main",
                        type: "boolean",
                    },
                    {
                        name: "player_id",
                        type: "uuid",
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_player",
                        referencedTableName: "player",
                        referencedColumnNames: ["id"],
                        columnNames: ["player_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("stadium");
    }

}
