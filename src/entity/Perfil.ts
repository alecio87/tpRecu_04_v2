import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Perfil extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  dni: string;

  @Column()
  genero: string;

  @Column()
  direccion: string;

  @Column()
  ciudad: string;

  @Column()
  pais: string;

  @Column()
  celular: string;

  @Column()
  foto: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne((type) => User, (user) => user.perfil, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;
}
