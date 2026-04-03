import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
    res.send("Server with TypeScript 🚀");
});
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
