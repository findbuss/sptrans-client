import { bus, auth } from "../config.js";
import express from "express";

const shapesRouter = express.Router();

shapesRouter.get("/:shapeId", async (req, res) => {
  const { shapeId } = req.params;
  const shapes = await getShapeById(shapeId);
  console.log(shapes, shapeId);

  res.json(shapes);
});

async function getShapeById(shapeId) {
  return await bus.find({
    auth,
    type: "shapes",
    shapeId,
  });
}

export default shapesRouter;
