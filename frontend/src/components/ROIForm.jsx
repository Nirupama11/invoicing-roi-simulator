import React, { useState } from "react";
import axios from "axios";

const ROIForm = () => {
  const [formData, setFormData] = useState({
    investment: "",
    revenue: "",
    savings: "",
  });

  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/roi", formData);
      setResponse(res.data.message);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error sending data!");
    }
  };

  return (
    <div className="text-white p-6 bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">ROI Simulator</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="number"
          name="investment"
          placeholder="Investment"
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="number"
          name="revenue"
          placeholder="Revenue"
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="number"
          name="savings"
          placeholder="Savings"
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>

      {response && <p className="mt-4 text-green-400">{response}</p>}
    </div>
  );
};

export default ROIForm;
