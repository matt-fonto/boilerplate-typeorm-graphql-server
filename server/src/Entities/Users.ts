// where we will code the typeorm entity for the users table
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
// where we will code the typeorm entity for the users table
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column() //decorator to tell typeorm that this is a column in the table
  name!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;
}
