import cors from "cors";
import express, { Application } from "express";
import bodyParser from 'body-parser';
import router from "./app/router";

const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(
  cors({
    // origin: "http://localhost:3000", 
    origin: "https://antopolis-task-client-side.vercel.app", 
    credentials: true,
  })
);

app.use("/", router);

export default app;
