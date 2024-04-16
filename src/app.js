import express from "express";
import morgan from "morgan";
import path from "path";


//routes
import pacienteRoutes from "./routes/paciente.routes";

const app = express();

//setting
app.set("port", 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//rutas
app.use("/paciente", pacienteRoutes);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'patient-list.html'));
});

export default app;
