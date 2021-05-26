import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddBloodTypeToClient1621990920075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('clients', new TableColumn({
            name: 'blood_type',
            type: 'varchar'
        }));

        await queryRunner.dropColumn('clients', 'blood-type');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('clients', new TableColumn({
            name: 'blood-type',
            type: 'varchar'
        }));

        await queryRunner.dropColumn('clients', 'blood_type');
    }

}
