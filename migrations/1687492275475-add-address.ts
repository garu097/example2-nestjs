import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAddress1687492275475 implements MigrationInterface {
    name = 'AddAddress1687492275475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`description\` \`address\` varchar(255) NOT NULL DEFAULT 'Non description'`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`address\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`address\` varchar(255) NOT NULL DEFAULT 'Non description'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`address\` \`description\` varchar(255) NOT NULL DEFAULT 'Non description'`);
    }

}
