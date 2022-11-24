  import prismaClient from "../../prisma";

  class ListStateService{
    async execute(){

        const state = await prismaClient.state.findMany({
            select:{
                id: true,
                name: true,
                abbreviation: true,
            }
        })

        return state;
    }
  }

  export { ListStateService }