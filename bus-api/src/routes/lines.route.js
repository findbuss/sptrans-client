import { bus, auth, authenticate } from "../config.js";
import express from "express";

const linesRouter = express.Router();

linesRouter.get("/:terms", async (req, res) => {
  const { terms } = req.params;
  const lines = await getLines(terms);

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
