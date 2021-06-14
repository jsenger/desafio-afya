import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddSpecialistIdToMedicalRecords1623598295741 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('medicalRecordHistoric', new TableColumn({
            name: 'specialist_id',
            type: 'uuid', 
            isNullable: true
        }));

        await queryRunner.createForeignKey('medicalRecordHistoric', 
            new TableForeignKey({
                name: 'MedicalRecordsHistoricSpecialist',
                columnNames: ['specialist_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'specialists',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('medicalRecordHistoric', 'MedicalRecordsHistoricSpecialist');

        await queryRunner.dropColumn('medicalRecordHistoric', 'specialist_id');
    }

}
