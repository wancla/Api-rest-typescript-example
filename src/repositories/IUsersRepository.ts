import { User } from "../entities/User";

export interface IUsersRepository {
    findBy(_id: string): Promise<User>;
    save(user: User): Promise<void>;
}