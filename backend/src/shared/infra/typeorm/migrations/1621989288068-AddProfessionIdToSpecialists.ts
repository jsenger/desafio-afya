import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddProfessionIdToSpecialists1621989288068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('specialists', new TableColumn({
            name: 'profession_id',
            type: 'uuid',
            isNullable: true
        })
        );

        await queryRunner.createForeignKey('specialists', new TableForeignKey({
            name: 'SpecialistProfession',
            columnNames: ['profession_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'professions',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('specialists', 'SpecialistProfession');

        await queryRunner.dropColumn('specialists', 'profession_id');
    }

}
