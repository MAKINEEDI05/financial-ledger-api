import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", router);

const port = Number(process.env.APP_PORT || 3000);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
