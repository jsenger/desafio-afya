import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddMedicalCareIdToMedicalRecordHistoric1623600803607 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('medicalRecordHistoric', new TableColumn({
            name: 'medical_care_id',
            type: 'uuid', 
            isNullable: true
        }));

        await queryRunner.createForeignKey('medicalRecordHistoric', 
            new TableForeignKey({
                name: 'MedicalRecordsHistoricMedicalCare',
                columnNames: ['medical_care_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medicalCares',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('medicalRecordHistoric', 'MedicalRecordsHistoricMedicalCare');

        await queryRunner.dropColumn('medicalRecordHistoric', 'medical_care_id');
    }

}
