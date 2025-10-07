import mongoose from "mongoose";

const scenarioSchema = new mongoose.Schema({
  scenario_name: { type: String, required: true },
  inputs: { type: Object, required: true },
  results: { type: Object, required: true },
});

export default mongoose.model("Scenario", scenarioSchema);
