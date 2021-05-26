import {MigrationInterface, QueryRunner, Table} from "typeorm";

<<<<<<< HEAD
export class CreateSpecialistsTable1621898769280 implements MigrationInterface {
=======
export class CreateSpecialistsTable1621898769280 implements MigrationInterface {
>>>>>>> 277eaf988b638345cb3e3f29e6bc521bc4196655

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'specialists',
                columns:
                [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'register',
                        type: 'varchar',
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'phone',
                        type: 'integer'
                    },
                    {
                        name: 'cellphone',
                        type: 'integer'
                    },
                    {
                        name: 'email',
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('specialists');
    }

}
