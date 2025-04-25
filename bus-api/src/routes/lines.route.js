import { bus, auth, authenticate } from "../config.js";
import express from "express";

const linesRouter = express.Router();

linesRouter.get("/", async (req, res) => {
  const lines = await getLines("Itaquera");
  console.log(lines);

  res.json(lines);
});

async function getLines(terms) {
  return await bus.find({
    auth,
    type: "lines",
    terms,
  });
}

export default linesRouter;
