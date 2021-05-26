import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateMedicalRecordsTable1621991953881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'medicalRecords',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'opening_date',
                    type: 'timestamp with time zone'
                },
                {
                    name: 'client_id',
                    type: 'uuid'
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
        }));

        await queryRunner.createForeignKey('medicalRecords', new TableForeignKey({
            name: 'MedicalRecordClient',
            columnNames: ['client_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'clients',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('medicalRecords', 'MedicalRecordClient');

        await queryRunner.dropTable('medicalRecords');
    }

}
