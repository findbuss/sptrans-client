import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import shapesRouter from "./routes/shapes.router.js";
import linesRouter from "./routes/lines.router.js";
import stopsRouter from "./routes/stops.router.js";
import positionRouter from "./routes/position.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/lines", linesRouter);
app.use("/shapes", shapesRouter);
app.use("/stops", stopsRouter);
app.use("/position", positionRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
