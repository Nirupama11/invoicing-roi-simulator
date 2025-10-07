import React, { useState } from "react";
import "./index.css";

function App() {
  const [invoices, setInvoices] = useState("");
  const [costPerInvoice, setCostPerInvoice] = useState("");
  const [automationCost, setAutomationCost] = useState("");
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const invoicesNum = parseFloat(invoices);
    const costNum = parseFloat(costPerInvoice);
    const automationNum = parseFloat(automationCost);

    if (isNaN(invoicesNum) || isNaN(costNum) || isNaN(automationNum)) {
      setRoi("Please enter valid numbers");
      return;
    }

    const manualCost = invoicesNum * costNum;
    const savings = manualCost - automationNum;
    const roiValue = ((savings / automationNum) * 100).toFixed(2);

    setRoi(`Your ROI is ${roiValue}%`);
  };

  return (
    <div className="app-container">
      <h1 className="title">Invoicing ROI Simulator</h1>

      <div className="form-container">
        <h2>Enter your details</h2>

        <div className="input-group">
          <label>Invoices per Month:</label>
          <input
            type="number"
            value={invoices}
            onChange={(e) => setInvoices(e.target.value)}
            placeholder="e.g. 500"
          />
        </div>

        <div className="input-group">
          <label>Cost per Invoice (₹):</label>
          <input
            type="number"
            value={costPerInvoice}
            onChange={(e) => setCostPerInvoice(e.target.value)}
            placeholder="e.g. 20"
          />
        </div>

        <div className="input-group">
          <label>Monthly Automation Cost (₹):</label>
          <input
            type="number"
            value={automationCost}
            onChange={(e) => setAutomationCost(e.target.value)}
            placeholder="e.g. 5000"
          />
        </div>

        <button onClick={calculateROI}>Calculate ROI</button>
      </div>

      <div className="result-section">
        <h2>ROI Result</h2>
        <p>{roi ? roi : "Your ROI will appear here after calculation."}</p>
      </div>
    </div>
  );
}

export default App;
