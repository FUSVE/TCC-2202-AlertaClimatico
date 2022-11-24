import prismaClient from '../../prisma';

interface RiskZoneRequest{
    name: string;
    risk: string;
    details: string;
    city_id: number;
}

class CreateRiskZoneService{
    async execute({name, risk, details, city_id}: RiskZoneRequest){

        // verificar se ele enviou um nome
        if(!name){
            throw new Error("Nome inválido")
        }

        // verificar se ele enviou um risco
        if(!risk){
            throw new Error("Risco inválido")
        }

        // verificar se ele enviou detalhes
        if(!details){
            throw new Error("Detalhes inválidos")
        }

        // verificar se ele enviou o id da cidade
        if(!city_id){
            throw new Error("Cidade inválida")
        }

        const riskZone = await prismaClient.riskZone.create({
            data:{
                name: name,
                risk: risk,
                details: details,
                city_id: city_id
            },
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

export { CreateRiskZoneService }