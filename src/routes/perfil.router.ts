import { Router } from "express";
import {
  getPerfiles,
  getPerfil,
  createPerfil,
  updatePerfil,
  deletePerfil,
} from "../controllers/perfil.controller";
import passport from "passport";

const router = Router();

router.get(
  "/perfiles",
  passport.authenticate("jwt", { session: false }),
  getPerfiles
);
router.get(
  "/perfil/:id",
  passport.authenticate("jwt", { session: false }),
  getPerfil
);
router.post(
  "/perfil/:id",
  passport.authenticate("jwt", { session: false }),
  createPerfil
);
router.put(
  "/perfil/:id",
  passport.authenticate("jwt", { session: false }),
  updatePerfil
);
router.delete(
  "/perfil/:id",
  passport.authenticate("jwt", { session: false }),
  deletePerfil
);
export default router;
