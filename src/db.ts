import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Perfil } from "./entity/Perfil";
import { Receta } from "./entity/Receta";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "mysql",
  database: "receta-system-db",
  // logging: true, // muestra peticiones a la bd
  synchronize: true,
  //entities: [User],//es el objeto mapeado de la base de dato
  entities: [User, Perfil, Receta], //es el objeto mapeado de la base de dato
});
