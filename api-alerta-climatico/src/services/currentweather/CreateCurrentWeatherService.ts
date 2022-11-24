import prismaClient from '../../prisma';

interface CurrentWeatherRequest{
    temperature: number;
    thermal_sensation: number;
    humidity: number;
    wind_velocity: number;
    pressure: number;
    condition: string;
    icon: string;    
}

class CreateCurrentWeatherService{
    async execute({temperature, thermal_sensation, humidity, wind_velocity, pressure, condition, icon}: CurrentWeatherRequest){

        // verificar se ele enviou a temperatura
        if(!temperature){
            throw new Error("Temperatura inválida")
        }

        // verificar se ele enviou a sensação térmica
        if(!thermal_sensation){
            throw new Error("Sensação térmica inválida")
        }

        // verificar se ele enviou a umidade
        if(!humidity){
            throw new Error("Umidade inválida")
        }

        // verificar se ele enviou a velocidade do vento
        if(!wind_velocity){
            throw new Error("Velocidade do vento inválida")
        }

        // verificar se ele enviou a pressão
        if(!pressure){
            throw new Error("Pressão inválida")
        }

        // verificar se ele enviou detalhes da condição climática
        if(!condition){
            throw new Error("Condição inválida")
        }

        // verificar se ele enviou o ícone representativo
        if(!icon){
            throw new Error("Ícone inválido")
        }

        const currentWeather = await prismaClient.currentWeather.create({
            data:{
                temperature: temperature,
                thermal_sensation: thermal_sensation,
                humidity: humidity,
                wind_velocity: wind_velocity,
                pressure: pressure,
                condition: condition,
                icon: icon,
            },
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

export { CreateCurrentWeatherService }