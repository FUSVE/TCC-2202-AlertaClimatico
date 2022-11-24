import { Request, Response } from "express";
import { ListCityService } from "../../services/city/ListCityService";

class ListCityController{
    async handle(req: Request, res: Response){
        const listCityService = new ListCityService();

        const city = await listCityService.execute();

        return res.json(city);
    }
}

export { ListCityController }