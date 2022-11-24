import prismaClient from "../../prisma";

class ListWeatherForecastService{
  async execute(){

      const weatherForecast = await prismaClient.weatherForecast.findMany({
          select:{
              id: true,
              temperature_min: true,
              temperature_max: true,
              thermal_sensation_min: true,
              thermal_sensation_max: true,
              humidity_min: true,
              humidity_max: true,
              pressure: true,
              probability_rain: true,
              rain_precipitation: true,
              wind_velocity_avg: true,
          }
      })

      return weatherForecast;
  }
}

export { ListWeatherForecastService }