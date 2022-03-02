import { CreateUserController } from './createUserController';
import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { dbUsersRepository } from "../../repositories/implementations/dbUsersRepository";
import { CreateUserUseCase } from "./createUserUserCase";


const mailtrapMailProvider = new MailTrapMailProvider();
const dbusersRepository = new dbUsersRepository();

const createuserusecase = new CreateUserUseCase(dbusersRepository, mailtrapMailProvider);

const createUserController = new CreateUserController(createuserusecase);

export { createUserController, createuserusecase}