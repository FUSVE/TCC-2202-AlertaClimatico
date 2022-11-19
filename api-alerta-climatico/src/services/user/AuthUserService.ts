import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest{
    email: string;
    password: string;
}


class AuthUserService{
    async execute({email, password}: AuthRequest){
        // verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            throw new Error("Email ou senha incorretos")
        }

        // verificar se a senha informada está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email ou senha incorretos")
        }

        // gerar um Token JWT e devolver os dados do usuário como id, nome e email
        const token = sign({
            name: user.name,
            email: user.email
        },
         process.env.JWT_SECRET,
         {
            subject: user.id.toString(),
            expiresIn: '30d'
         }
        )


        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }