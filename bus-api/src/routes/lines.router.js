import { bus, auth } from "../config.js";
import express from "express";

const linesRouter = express.Router();

linesRouter.get("/:terms", async (req, res) => {
  const { terms } = req.params;
  const lines = await getLines(terms);

  res.json(lines);
});

linesRouter.get("/:terms/:direction", async (req, res) => {
  const { terms, direction } = req.params;
  const lines = await getLines(terms, direction);

  res.json(lines);
});

async function getLines(terms, direction = undefined) {
  return await bus.find({
    auth,
    type: "lines",
    terms,
    direction
  });
}

export default linesRouter;
