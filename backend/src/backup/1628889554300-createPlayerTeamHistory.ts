import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPlayerTeamHistory1628889554300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "player_team_history",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: "player_id",
                        type: "uuid",
                    },
                    {
                        name: "team_id",
                        type: "uuid",
                    },
                    {
                        name: "started_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "finished_at",
                        type: "timestamp",
                        isNullable: true,
                    }
                ],
                foreignKeys:[
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("player_team_history");
    }

}
