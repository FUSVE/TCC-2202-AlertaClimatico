import { Request, Response } from "express";
import { ListWeatherService } from "../../services/weather/ListWeatherService";

class ListWeatherController{
    async handle(req: Request, res: Response){
        const listWeatherService = new ListWeatherService();

        const weather = await listWeatherService.execute();

        return res.json(weather);
    }
}

export { ListWeatherController }