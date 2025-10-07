import express from "express";
import Scenario from "../models/Scenario.js";
import { calculateROI } from "../utils/calculations.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const scenarios = await Scenario.find();
  res.json(scenarios);
});

router.post("/", async (req, res) => {
  const results = calculateROI(req.body);
  const scenario = new Scenario({
    scenario_name: req.body.scenario_name,
    inputs: req.body,
    results
  });
  await scenario.save();
  res.json({ success: true, scenario });
});

router.get("/:id", async (req, res) => {
  const scenario = await Scenario.findById(req.params.id);
  res.json(scenario);
});

export default router;
