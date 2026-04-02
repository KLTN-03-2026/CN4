import express, { Request, Response } from "express";
import { prisma } from "./lib/prisma";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      email: "test@gmail.com",
      password_hash: "hashed_password",
      created_at: new Date(),
    },
  });

  console.log(user);
  res.send("Server with TypeScript 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
