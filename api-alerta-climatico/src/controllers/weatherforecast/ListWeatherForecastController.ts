import { Request, Response } from "express";
import { ListWeatherForecastService } from "../../services/weatherforecast/ListWeatherForecastService";

class ListWeatherForecastController{
    async handle(req: Request, res: Response){
        const listWeatherForecastService = new ListWeatherForecastService();

        const weatherForecast = await listWeatherForecastService.execute();

        return res.json(weatherForecast);
    }
}

export { ListWeatherForecastController }