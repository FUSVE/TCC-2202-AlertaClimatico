import { Request, response, Response } from 'express';

import { CreateCityService } from '../../services/city/CreateCityService';

class CreateCityController{
    async handle(req: Request, res: Response){
        const { name, state_id, weather_id } = req.body;

        const createCityService = new CreateCityService();

        const city = await createCityService.execute({
            name,
            state_id,
            weather_id
        });
        
        return res.json(city)
    }
}

export { CreateCityController }
