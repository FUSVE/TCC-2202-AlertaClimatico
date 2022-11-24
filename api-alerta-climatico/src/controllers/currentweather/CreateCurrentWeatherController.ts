import { Request,  Response } from 'express';

import { CreateCurrentWeatherService } from '../../services/currentweather/CreateCurrentWeatherService';

class CreateCurrentWeatherController{
    async handle(req: Request, res: Response){
        const { temperature, thermal_sensation, humidity, wind_velocity, pressure, condition } = req.body;

        const createCurrentWeatherService = new CreateCurrentWeatherService();

        if(!req.file){
            throw new Error("Erro no arquivo para upload")
        } else{

            const { originalname, filename } = req.file;

            const currentWeather = await createCurrentWeatherService.execute({
                temperature,
                thermal_sensation,
                humidity,
                wind_velocity,
                pressure,
                condition,
                icon: '',
            });

            return res.json(currentWeather)
        }
    }
}

export { CreateCurrentWeatherController }