import { Router } from "express";
import {methods as pacientesController} from "../controllers/paciente.controler";

const router=Router();

router.get("/", pacientesController.getPacientes);
router.post("/", pacientesController.addPacientes);
router.get("/:id", pacientesController.getPaciente);
router.delete("/:id", pacientesController.deletePacientes);
router.put("/:id", pacientesController.updatePacientes);

export default router;
