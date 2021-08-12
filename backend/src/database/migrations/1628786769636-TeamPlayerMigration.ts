import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TeamPlayerMigration1628786769636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "teams_players",
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
                    },
                    {
                        name: "active",
                        type: "boolean",
                    }
                ],
                foreignKeys:[
                    {
                        name: "fk_team",
                        referencedTableName: "teams",
                        referencedColumnNames: ["id"],
                        columnNames: ["team_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_player",
                        referencedTableName: "players",
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
        await queryRunner.dropTable("teams_players");
    }

}
