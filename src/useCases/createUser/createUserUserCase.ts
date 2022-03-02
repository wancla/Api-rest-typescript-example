import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./createUserDTO";

export class CreateUserUseCase {
    
    constructor(
       private usersRepository: IUsersRepository,
       private mailProvider: IMailProvider
    ){
    
    }

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExists) 
            throw new Error('Error already exists');
        
        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'teste',
                email: 'teste@email.com',
            },
            subject: 'teste',
            body: '<p>Html tags</p>'
        })
    }
}