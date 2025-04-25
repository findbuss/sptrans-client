import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import linesRoute from "./routes/lines.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/lines", linesRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
