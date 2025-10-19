import { Router } from 'express';

const router = Router();

router.get("/teste", (_, res) => {
  return res.send("Olá, DEV!");
});




export { router };