import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", (req, res) => res.send("Backend is running!"));

// Route to get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json(users.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/memos", async (req, res) => {
  try {
    const memos = await pool.query("SELECT * FROM memo");
    res.json(memos.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// // Route to add a user
// app.post("/api/users", async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const newUser = await pool.query(
//       "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
//       [name, email]
//     );
//     res.json(newUser.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

app.listen(5001, () => console.log("Server running on port 5001"));
