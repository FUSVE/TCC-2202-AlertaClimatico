import prismaClient from '../../prisma';

interface StateRequest{
    name: string;
    abbreviation: string;
}

class CreateStateService{
    async execute({name, abbreviation}: StateRequest){

        // verificar se ele enviou um nome
        if(!name){
            throw new Error("Nome inválido")
        }

        // verificar se ele enviou uma sigla
        if(!abbreviation){
            throw new Error("Sigla inválida")
        }

        // verificar se o estado já está cadastrado na plataforma
        const stateAlreadyExists = await prismaClient.state.findFirst({
            where:{
                name: name,
            }
        })

        if(stateAlreadyExists){
            throw new Error("Estado já cadastrado")
        }

        const state = await prismaClient.state.create({
            data:{
                name: name,
                abbreviation: abbreviation.toUpperCase(),
            },
            select:{
                id: true,
                name: true,
                abbreviation: true,
            }
        })

        return state;
    }
}

export { CreateStateService }