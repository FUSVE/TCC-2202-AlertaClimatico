import { Request, response, Response } from 'express';

import { CreatePointInterestService } from '../../services/pointinterest/CreatePointInterestService';

class CreatePointInterestController{
    async handle(req: Request, res: Response){
        const { risk_zone_id, user_id } = req.body;

        const createPointInterestService = new CreatePointInterestService();

        const pointInterest = await createPointInterestService.execute({
            risk_zone_id: risk_zone_id,
            user_id: user_id
        });
        
        return res.json(pointInterest)
    }
}

export { CreatePointInterestController }