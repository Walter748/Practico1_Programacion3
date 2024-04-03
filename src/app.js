import express from "express";
import morgan from "morgan";
//routes
import languageRoutes from "./routes/language.routes";

const app = express();

//setting
app.set("port", 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use("/api/Language", languageRoutes);

export default app;
