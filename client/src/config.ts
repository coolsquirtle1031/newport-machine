const isProduction = import.meta.env.PROD;

export const API_URL = isProduction
  ? "https://newport-machine.onrender.com" // Render API URL
  : "http://localhost:5001"; // Local development API
