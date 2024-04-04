import express from "express";
import morgan from "morgan";
//routes
import pacienteRoutes from "./routes/paciente.routes";

const app = express();

//setting
app.set("port", 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use("/paciente", pacienteRoutes);

export default app;
