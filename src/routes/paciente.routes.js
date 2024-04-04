import { Router } from "express";
import {methods as pacientesController} from "../controllers/paciente.controler";

const router=Router();

router.get("/", pacientesController.getPacientes);
router.post("/", pacientesController.addPacientes);
router.get("/:numero", pacientesController.getPaciente);
router.delete("/:numero", pacientesController.deletePacientes);
router.put("/:numero", pacientesController.updatePacientes);

export default router;
