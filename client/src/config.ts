const isProduction = import.meta.env.PROD;

export const API_URL = isProduction
  ? import.meta.env.VITE_API_URL // Uses Render's env in production
  : "http://localhost:5001"; // Uses local API during development
