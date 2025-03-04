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

app.get("/api/memo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const memo = await pool.query("SELECT * FROM memo WHERE id = $1", [id]);

    if (memo.rows.length === 0) {
      return res.status(404).json({ error: "Memo not found" });
    }

    res.json(memo.rows[0]);
  } catch (error) {
    console.error("Error fetching memo:", error);
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

app.post("/api/memo", async (req, res) => {
  try {
    const { title, text } = req.body;
    if (!title || !text) {
      throw new Error("Title and content is required");
    }
    const newMemo = await pool.query(
      `INSERT INTO memo (title, text, last_modified) 
       VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *`,
      [title, text]
    );
    res.status(201).json(newMemo.rows[0]);
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
