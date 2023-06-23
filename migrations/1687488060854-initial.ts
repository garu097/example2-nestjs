import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1687488060854 implements MigrationInterface {
    name = 'Initial1687488060854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`name\` varchar(255) NULL, \`description\` varchar(255) NOT NULL DEFAULT 'Non description', \`role\` enum ('Admin', 'Normal') NOT NULL DEFAULT 'Normal', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`reports\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` int NOT NULL, \`made\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`approved\` tinyint NOT NULL DEFAULT 0, \`year\` int NOT NULL, \`lng\` int NOT NULL, \`lat\` int NOT NULL, \`mileage\` int NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`reports\` ADD CONSTRAINT \`FK_bed415cd29716cd707e9cb3c09c\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reports\` DROP FOREIGN KEY \`FK_bed415cd29716cd707e9cb3c09c\``);
        await queryRunner.query(`DROP TABLE \`reports\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
