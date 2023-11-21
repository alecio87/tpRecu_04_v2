import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Receta extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.recetas, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  imagen: string;

  @Column()
  ingredientes: string;

  @Column()
  preparacion: string;

  @Column()
  preparacionDeTiempo: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
