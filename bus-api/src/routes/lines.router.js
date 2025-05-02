import { getRouteAttributes, getRoutes } from "gtfs";
import { bus, auth } from "../config.js";
import express from "express";

const linesRouter = express.Router();

linesRouter.get("/:terms", async (req, res) => {
  const { terms } = req.params;
  const lines = await getLines(terms);

  try {
    lines.forEach((line, index) => {
      const gtfsData = getRoutes({
        route_id: line.displaySign + "-" + line.type,
      });
      lines[index].gtfsData = gtfsData[0];
    });
  } catch (error) {
    console.log(error);
  }

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
  });
}

export default linesRouter;
