import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateMedicalCaresTable1621990235944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'medicalCares',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'appointment_date',
                        type: 'timestamp with time zone'
                    },
                    {
                        name: 'date',
                        type: 'timestamp with time zone'
                    },
                    {
                        name: 'amount',
                        type: 'decimal'
                    },
                    {
                        name: 'status',
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
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('medicalCares');
    }

}
