import { Router } from "express";
import {
  getRecetas,
  getReceta,
  createReceta,
  updateReceta,
  deleteReceta,
} from "../controllers/receta.controller";
import passport from "passport";

const router = Router();

router.get(
  "/recetas",
  passport.authenticate("jwt", { session: false }),
  getRecetas
);
router.get(
  "/receta/:id",
  passport.authenticate("jwt", { session: false }),
  getReceta
);
router.post(
  "/receta/:id",
  passport.authenticate("jwt", { session: false }),
  createReceta
);
router.put(
  "/receta/:id",
  passport.authenticate("jwt", { session: false }),
  updateReceta
);
router.delete(
  "/receta/:id",
  passport.authenticate("jwt", { session: false }),
  deleteReceta
);
export default router;
