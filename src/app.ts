import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.router";
import perfilRoutes from "./routes/perfil.router";
import recetaRoutes from "./routes/receta.router";
import passportMiddleware from "./middlewares/passport";
import passport from "passport";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Agregar para jwt
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

const specs = swaggerJsDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api", userRoutes);
app.use("/api", perfilRoutes);
app.use("/api", recetaRoutes);

export default app;
