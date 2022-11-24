import { Request, response, Response } from 'express';

import { CreateRiskZoneService } from '../../services/riskzone/CreateRiskZoneService';

class CreateRiskZoneController{
    async handle(req: Request, res: Response){
        const { name, risk, details, city_id } = req.body;

        const createRiskZoneService = new CreateRiskZoneService();

        const riskZone = await createRiskZoneService.execute({
            name,
            risk: risk,
            details: details,
            city_id: city_id
        });
        
        return res.json(riskZone)
    }
}

export { CreateRiskZoneController }