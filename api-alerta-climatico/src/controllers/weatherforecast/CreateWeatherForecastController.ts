import { Request, response, Response } from 'express';

import { CreateWeatherForecastService } from '../../services/weatherforecast/CreateWeatherForecastService';

class CreateWeatherForecastController{
    async handle(req: Request, res: Response){
        const { 
            id,
            temperature_min, 
            temperature_max, 
            thermal_sensation_min, 
            thermal_sensation_max, 
            humidity_max, 
            humidity_min, 
            pressure, 
            probability_rain, 
            rain_precipitation, 
            wind_velocity_avg 
        } = req.body;

        const createWeatherForecastService = new CreateWeatherForecastService();

        const WeatherForecast = await createWeatherForecastService.execute({
            temperature_min, 
            temperature_max, 
            thermal_sensation_min, 
            thermal_sensation_max, 
            humidity_max, 
            humidity_min, 
            pressure, 
            probability_rain, 
            rain_precipitation, 
            wind_velocity_avg
        });
        
        return res.json(WeatherForecast)
    }
}

export { CreateWeatherForecastController }
