import prismaClient from '../../prisma';

interface WeatherForecastRequest{
    temperature_min: number;
    temperature_max: number;
    thermal_sensation_min: number;
    thermal_sensation_max: number;
    humidity_min: number;
    humidity_max: number;
    pressure: number;
    probability_rain: number;
    rain_precipitation: number;
    wind_velocity_avg: number;
}

class CreateWeatherForecastService{
    async execute({temperature_min, temperature_max, thermal_sensation_min, thermal_sensation_max, humidity_max, humidity_min, pressure, probability_rain, rain_precipitation, wind_velocity_avg}: WeatherForecastRequest){

        // verificar se ele enviou a temperatura mínima
        if(!temperature_min){
            throw new Error("Temperatura mínima inválida")
        }

        // verificar se ele enviou a temperatura máxima
        if(!temperature_max){
            throw new Error("Temperatura máxima inválida")
        }

        // verificar se ele enviou a sensação térmica mínima
        if(!thermal_sensation_min){
            throw new Error("Sensação térmica mínima")
        }

        // verificar se ele enviou a sensação térmica máxima
        if(!thermal_sensation_max){
            throw new Error("Sensação térmica máxima inválida")
        }

        // verificar se ele enviou a pressão
        if(!pressure){
            throw new Error("Pressão inválida")
        }

        // verificar se ele enviou a probabilidade de chuva
        if(!probability_rain){
            throw new Error("Probabilidade de chuva inválida")
        }

        // verificar se ele enviou a velocidade média do vento
        if(!wind_velocity_avg){
            throw new Error("Velocidade média do vento inválida")
        }

        const weatherForecast = await prismaClient.weatherForecast.create({
            data:{
                temperature_min: temperature_min,
                temperature_max: temperature_max,
                thermal_sensation_min: thermal_sensation_min,
                thermal_sensation_max: thermal_sensation_max,
                humidity_min: humidity_min,
                humidity_max: humidity_max,
                pressure: pressure,
                probability_rain: probability_rain,
                rain_precipitation: rain_precipitation,
                wind_velocity_avg: wind_velocity_avg,

            },
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

export { CreateWeatherForecastService }