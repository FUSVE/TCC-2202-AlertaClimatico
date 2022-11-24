import { Request, response, Response } from 'express';

import { CreateStateService } from '../../services/state/CreateStateService';

class CreateStateController{
    async handle(req: Request, res: Response){
        const { name, abbreviation } = req.body;

        const createStateService = new CreateStateService();

        const state = await createStateService.execute({
            name,
            abbreviation
        });
        
        return res.json(state)
    }
}

export { CreateStateController }
