import { Request, response, Response } from 'express';

import { CreateWeatherService } from '../../services/weather/CreateWeatherService';

class CreateWeatherController{
    async handle(req: Request, res: Response){
        const { current_weather_id, weather_forecast_id } = req.body;

        const createWeatherService = new CreateWeatherService();

        const weather = await createWeatherService.execute({
            current_weather_id,
            weather_forecast_id
        });
        
        return res.json(weather)
    }
}

export { CreateWeatherController }