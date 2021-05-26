import {MigrationInterface, QueryRunner, Table} from "typeorm";

<<<<<<< HEAD
export class CreateUsersTable1621897638867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
=======
export class CreateUsersTable1621897638867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
>>>>>>> 277eaf988b638345cb3e3f29e6bc521bc4196655
        await queryRunner.createTable(
            new Table ({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

<<<<<<< HEAD
    public async down(queryRunner: QueryRunner): Promise<any> {
=======
    public async down(queryRunner: QueryRunner): Promise<any> {
>>>>>>> 277eaf988b638345cb3e3f29e6bc521bc4196655
        await queryRunner.dropTable('users');
    }

}
