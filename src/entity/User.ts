import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Perfil } from "./Perfil";
import { Receta } from "./Receta";
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne((type) => Perfil, (perfil) => perfil.user, {
    eager: true,
    cascade: true,
  })
  perfil: Perfil;

  @OneToMany(() => Receta, (receta) => receta.user)
  recetas: Receta[];
}
