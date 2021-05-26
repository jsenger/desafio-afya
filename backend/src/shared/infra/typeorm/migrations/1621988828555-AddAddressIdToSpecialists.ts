import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddAddressIdToSpecialists1621988828555 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('specialists', new TableColumn({
            name: 'address_id',
            type: 'uuid',
            isNullable: true
        })
        );

        await queryRunner.createForeignKey('specialists', new TableForeignKey({
            name: 'SpecialistAddress',
            columnNames: ['address_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'addresses',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('specialists', 'SpecialistAddress');

        await queryRunner.dropColumn('specialists', 'address_id');
    }

}
