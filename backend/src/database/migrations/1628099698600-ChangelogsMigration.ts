import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "created_ad",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_manager",
                        referencedTableName: "managers",
                        referencedColumnNames: ["id"],
                        columnNames: ["manager_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("changelogs");
    }

}
