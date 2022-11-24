import { Request, Response } from "express";
import { ListCurrentWeatherService } from "../../services/currentweather/ListCurrentWeatherService";

class ListCurrentWeatherController{
    async handle(req: Request, res: Response){
        const listCurrentWeatherService = new ListCurrentWeatherService();

        const currentWeather = await listCurrentWeatherService.execute();

        return res.json(currentWeather);
    }
}

export { ListCurrentWeatherController }