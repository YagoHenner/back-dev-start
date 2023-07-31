import { GeneralController } from "../controllers/GeneralController";
import { Router } from 'express';

const routerApi = Router();
const generalController = new GeneralController();


routerApi.get("/api", generalController.api);


export { routerApi };
