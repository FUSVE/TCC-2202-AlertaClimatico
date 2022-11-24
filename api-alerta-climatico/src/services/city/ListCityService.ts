import prismaClient from "../../prisma";

class ListCityService{
  async execute(){

      const city = await prismaClient.city.findMany({
          select:{
              id: true,
              name: true,
              state_id: true,
              weather_id: true
          }
      })

      return city;
  }
}

export { ListCityService }