import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class ChangelogsMigration1628099698600 implements MigrationInterface{

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "changelogs",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: "manager_id",
                        type: "uuid",
                    },
                    {
                        name: "object_id",
                        type: "uuid",
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("changelogs");
    }

}
