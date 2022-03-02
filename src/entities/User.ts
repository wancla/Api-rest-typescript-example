import { uuid } from "uuidv4";

interface Roles {
    INDICATION?: string;
    MARKED_POSITIONS?: string;
    APPLICANT_MANAGER?: string;
    POSITION_MANAGER?: string;
    RECRUITMENT_MANAGER?: string;
    ADMIN?: string;
    SUPER_ADMIN?: string;
    RP_CREATOR?: string;
    RP_BUSINESS_PARTNER?: string;
    RP_REMUNERATION?: string;
    RP_RECRUITER?: string;
    RP_FINAL_APPROVER?: string;
    CAREER_PAGE_MANAGER?: string;
}

export class User {
    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;
    // public job: string;
    // public manager?: string;
    // public roles: [];

    constructor(props: Omit<User, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id) this.id = uuid();
    }
}