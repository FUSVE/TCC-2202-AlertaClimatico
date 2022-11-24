import { Request, Response } from "express";
import { ListStateService } from "../../services/state/ListStateService";

class ListStateController{
    async handle(req: Request, res: Response){
        const listStateService = new ListStateService();

        const state = await listStateService.execute();

        return res.json(state);
    }
}

export { ListStateController }