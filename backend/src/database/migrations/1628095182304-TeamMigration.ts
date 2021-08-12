import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TeamMigration1628095182304 implements MigrationInterface{

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "teams",
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
                        isNullable: true,
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("teams");
    }

}
