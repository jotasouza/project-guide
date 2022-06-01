import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import * as StoreController from "./src/api/StoreController";

const port = 3000;

async function startup() {
  await createConnection();
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post("/store", StoreController.saveData);
  app.get("/store", StoreController.getAllData);

  app.listen(port, () => {
    console.log("Aplicação rodando na porta " + 3000);
  });
}

startup();
