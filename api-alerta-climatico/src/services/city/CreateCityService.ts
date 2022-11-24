import prismaClient from '../../prisma';

interface CityRequest{
    name: string;
    state_id: number;
    weather_id: number;
}

class CreateCityService{
    async execute({name, state_id, weather_id}: CityRequest){

        // verificar se ele enviou um nome
        if(!name){
            throw new Error("Nome inválido")
        }

        // verificar se ele enviou o id do estado
        if(!state_id){
            throw new Error("Estado inválido")
        }

        // verificar se ele enviou o id do clima
        if(!weather_id){
            throw new Error("Clima inválido")
        }

        const city = await prismaClient.city.create({
            data:{
                name: name,
                state_id: state_id,
                weather_id: weather_id,
            },
            select:{
                id: true,
                name: true,
                state_id: true,
                weather_id: true,
            }
        })

        return city;
    }
}

export { CreateCityService }