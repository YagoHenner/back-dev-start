import { Request, Response } from 'express';

class GeneralController {
  async api(req: Request, res: Response) {
    return res.json(`api working`);
  }
}

export { GeneralController };
