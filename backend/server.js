import express from "express"
import cors from "cors"
import users from './routes/users.routes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/users", users);
app.get('/api/v1/users/:username')
app.use("*", (req, res) => res.status(400).json({ error: "not found"}));

export default app; 