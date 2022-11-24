import { Request, Response } from "express";
import { ListPointInterestService } from "../../services/pointinterest/ListPointInterestService";

class ListPointInterestController{
    async handle(req: Request, res: Response){
        const listPointInterestService = new ListPointInterestService();

        const pointInterest = await listPointInterestService.execute();

        return res.json(pointInterest);
    }
}

export { ListPointInterestController }