import prismaClient from '../../prisma';

interface WeatherRequest{
    current_weather_id: number;
    weather_forecast_id: number;
}

class CreateWeatherService{
    async execute({current_weather_id, weather_forecast_id}: WeatherRequest){

        // verificar se ele enviou o id do clima atual
        if(!current_weather_id){
            throw new Error("Clima atual inválido")
        }

        // verificar se ele enviou o id da previsão do tempo
        if(!weather_forecast_id){
            throw new Error("Previsão do tempo inválida")
        }

        const weather = await prismaClient.weather.create({
            data:{
                current_weather_id: current_weather_id,
                weather_forecast_id: weather_forecast_id,
            },
            select:{
                id: true,
                current_weather_id: true,
                weather_forecast_id: true,
            }
        })

        return weather;
    }
}

export { CreateWeatherService }