import { Request, Response } from "express";
import { ListRiskZoneService } from "../../services/riskzone/ListRiskZoneService";

class ListRiskZoneController{
    async handle(req: Request, res: Response){
        const listRiskZoneService = new ListRiskZoneService();

        const riskZone = await listRiskZoneService.execute();

        return res.json(riskZone);
    }
}

export { ListRiskZoneController }