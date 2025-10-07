import React, { useState } from "react";

function ROIForm() {
  const [formData, setFormData] = useState({
    invoicesPerMonth: "",
    costPerInvoice: "",
    automationCost: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Enter your details
      </h2>

      <label className="block mb-2">
        Invoices per Month:
        <input
          type="number"
          name="invoicesPerMonth"
          value={formData.invoicesPerMonth}
          onChange={handleChange}
          className="mt-1 w-full border p-2 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Cost per Invoice (₹):
        <input
          type="number"
          name="costPerInvoice"
          value={formData.costPerInvoice}
          onChange={handleChange}
          className="mt-1 w-full border p-2 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Monthly Automation Cost (₹):
        <input
          type="number"
          name="automationCost"
          value={formData.automationCost}
          onChange={handleChange}
          className="mt-1 w-full border p-2 rounded"
          required
        />
      </label>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate ROI
      </button>
    </form>
  );
}

export default ROIForm;
