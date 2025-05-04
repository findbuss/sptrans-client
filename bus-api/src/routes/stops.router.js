import { bus, auth } from "../config.js";
import { getStopsAsGeoJSON } from "gtfs";
import express from "express";

const stopsRouter = express.Router();

stopsRouter.get("/", (req, res) => {
  const {
    stop_id,
    stop_lat,
    stop_lon,
    bounding_box_side_m,
    route_id,
    shape_id,
  } = req.query;

  if (stop_lat && stop_lon && bounding_box_side_m) {
    const stopsGeojson = getStopsAsGeoJSON(
      { stop_lat, stop_lon },
      { bounding_box_side_m }
    );
    res.json(stopsGeojson);
  }

  if (route_id) {
    const stopsGeojson = getStopsAsGeoJSON({ route_id });
    res.json(stopsGeojson);
  }

  if (shape_id) {
    const stopsGeojson = getStopsAsGeoJSON({ shape_id });
    res.json(stopsGeojson);
  }

  if (stop_id) {
    const stopsGeojson = getStopsAsGeoJSON({ stop_id });
    res.json(stopsGeojson);
  }

  res.json({});
});

export default stopsRouter;
