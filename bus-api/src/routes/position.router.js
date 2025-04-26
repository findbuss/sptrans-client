import { bus, auth } from "../config.js";
import express from "express";

const positionRouter = express.Router();

positionRouter.get("/:lineId", async (req, res) => {
  const { lineId } = req.params;
  const vehicles = await getBusesByLineId(lineId);

  res.json(vehicles);
});

positionRouter.get("/arrival/:lineId", async (req, res) => {
  const { lineId, stopId } = req.params;
  const vehicles = await getLineForecast(lineId, stopId);

  res.json(vehicles);
});

positionRouter.get("/arrival/:lineId/:stopId", async (req, res) => {
  const { lineId, stopId } = req.params;
  const vehicles = await getArrivalForecast(lineId, stopId);

  res.json(vehicles);
});

async function getBusesByLineId(lineId) {
  return await bus.find({
    auth,
    type: "vehiclesPosition",
    lineId,
  });
}

async function getArrivalForecast(lineId, stopId) {
  return await bus.find({
    auth,
    type: "arrivalForecast",
    stopId,
    lineId,
  });
}

async function getLineForecast(lineId) {
  return await bus.find({
    auth,
    type: "lineForecast",
    lineId,
  });
}

export default positionRouter;
