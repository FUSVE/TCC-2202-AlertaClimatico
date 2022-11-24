import prismaClient from "../../prisma";

class ListPointInterestService{
  async execute(){

      const pointInterest = await prismaClient.pointInterest.findMany({
          select:{
              id: true,
              risk_zone_id: true,
              user_id: true
          }
      })

      return pointInterest;
  }
}

export { ListPointInterestService }