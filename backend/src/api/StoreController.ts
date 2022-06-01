import { Store } from "./../entity/Store";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

export async function saveData(req: Request, res: Response) {
  const storeRepository = getRepository(Store);

  const savedStore = await storeRepository.save(req.body);

  return res.status(200).json(savedStore);
}

export async function getAllData(req: Request, res: Response) {
  const storeRepository = getRepository(Store);

  const allStores = await storeRepository.find();

  return res.json(allStores);
}
