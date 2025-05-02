import { bus, auth } from "../config.js";
import express from "express";

const stopsRouter = express.Router();

stopsRouter.get("/", async (req, res) => {
  const shapes = await getStops();
  res.json(shapes);
});

stopsRouter.get("/:terms", async (req, res) => {
  const { terms } = req.params;
  const shapes = await getStops(terms);
  res.json(shapes);
});

stopsRouter.get("/line/:lineId", async (req, res) => {
  const { lineId } = req.params;
  const stops = await getAllStopsByLineId(lineId);
  res.json(stops);
});

async function getStops(terms = "*") {
  return await bus.find({
    auth,
    type: "stops",
    terms
  });
}

async function getAllStopsByLineId(lineId) {
  return await bus.find({
    auth,
    type: "stopsByLine",
    lineId,
  });
}

export default stopsRouter;
