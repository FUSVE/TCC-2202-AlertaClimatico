import prismaClient from "../../prisma";

class ListRiskZoneService{
  async execute(){

      const riskZone = await prismaClient.riskZone.findMany({
          select:{
              id: true,
              name: true,
              risk: true,
              details: true,
              city_id: true
          }
      })

      return riskZone;
  }
}

export { ListRiskZoneService }