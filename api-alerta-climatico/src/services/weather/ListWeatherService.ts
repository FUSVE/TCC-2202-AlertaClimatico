import prismaClient from "../../prisma";

class ListWeatherService{
  async execute(){

      const weather = await prismaClient.weather.findMany({
          select:{
              id: true,
              current_weather_id: true,
              weather_forecast_id: true
          }
      })

      return weather;
  }
}

export { ListWeatherService }