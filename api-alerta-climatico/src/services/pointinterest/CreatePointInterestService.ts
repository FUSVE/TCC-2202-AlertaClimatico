import prismaClient from '../../prisma';

interface PointInterestRequest{
    risk_zone_id: number;
    user_id: number;    
}

class CreatePointInterestService{
    async execute({risk_zone_id, user_id}: PointInterestRequest){

        // verificar se ele enviou o id da zona de risco
        if(!risk_zone_id){
            throw new Error("Zona de Risco inválida")
        }

        // verificar se ele enviou o id do usuário
        if(!user_id){
            throw new Error("Usuário inválido")
        }

        const pointInterest = await prismaClient.pointInterest.create({
            data:{
                risk_zone_id: risk_zone_id,
                user_id: user_id
            },
            select:{
                id: true,
                risk_zone_id: true,
                user_id: true
            }
        })

        return pointInterest;
    }
}

export { CreatePointInterestService }