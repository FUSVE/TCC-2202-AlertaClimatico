import prismaClient from "../../prisma";

class ListCurrentWeatherService{
  async execute(){

      const currentWeather = await prismaClient.currentWeather.findMany({
          select:{
              id: true,
              temperature: true,
              thermal_sensation: true,
              humidity: true,
              wind_velocity: true,
              pressure: true,
              condition: true,
              icon: true,
          }
      })

      return currentWeather;
  }
}

export { ListCurrentWeatherService }