import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AlterColumnEmailToLoginAtUsers1622056173075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'email');

        await queryRunner.addColumn('users', new TableColumn({
            name: 'login',
            type: 'varchar'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'login');

        await queryRunner.addColumn('users', new TableColumn({
            name: 'email',
            type: 'varchar'
        }));
    }

}
