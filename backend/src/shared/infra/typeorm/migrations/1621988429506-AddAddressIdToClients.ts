import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddAddressIdToClients1621988429506 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('clients', new TableColumn({
            name: 'address_id',
            type: 'uuid',
            isNullable: true
        })
        );

        await queryRunner.createForeignKey('clients', new TableForeignKey({
            name: 'ClientAddress',
            columnNames: ['address_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'addresses',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('clients', 'ClientAddress');

        await queryRunner.dropColumn('clients', 'address_id');
    }

}
