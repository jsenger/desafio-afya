import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddSpecialistIdAndClientIdToMedicalCares1621991292906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('medicalCares', new TableColumn({
            name: 'client_id',
            type: 'uuid'
        }));
        
        await queryRunner.addColumn('medicalCares', new TableColumn({
            name: 'specialist_id',
            type: 'uuid'
        }));

        await queryRunner.createForeignKeys('medicalCares', [
            new TableForeignKey({
                name: 'MedicalCareClient',
                columnNames: ['client_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'clients',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }),
            new TableForeignKey({
                name: 'MedicalCareSpecialist',
                columnNames: ['specialist_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'specialists',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('medicalCares', 'MedicalCareSpecialist');
        
        await queryRunner.dropForeignKey('medicalCares', 'MedicalCareClient');

        await queryRunner.dropColumn('medicalCares', 'specialist_id');
        
        await queryRunner.dropColumn('medicalCares', 'client_id');
    }

}
