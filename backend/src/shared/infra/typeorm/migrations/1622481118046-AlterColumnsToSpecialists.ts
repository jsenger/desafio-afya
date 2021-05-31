import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AlterColumnsToSpecialists1622481118046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('specialists', 'phone');
        await queryRunner.dropColumn('specialists', 'cellphone');

        await queryRunner.addColumn('specialists', new TableColumn({
            name: 'phone',
            type: 'varchar'
        })); 
        await queryRunner.addColumn('specialists', new TableColumn({
            name: 'cellphone',
            type: 'varchar'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('specialists', 'phone');
        await queryRunner.dropColumn('specialists', 'cellphone');

        await queryRunner.addColumn('specialists', new TableColumn({
            name: 'phone',
            type: 'int'
        }));
        await queryRunner.addColumn('specialists', new TableColumn({
            name: 'cellphone',
            type: 'int'
        }));
    }

}
