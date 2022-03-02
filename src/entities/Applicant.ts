export class Applicant {
    private readonly _id: string;
    public code: string;
    public name: string;
    public email: string;
    public birthDay: string;
    public state: string;
    public city: string;
    public languages: string[];
    public files: [];
    public evaluationAverage: number;
    public referralInternal: string;
    public exams: string;
    public apiTests: string;
    public graduations: [];
    public graduationsCustomFields;
    public experience: [];
    public  experiencesCustomFields;
    public lastExperience;
    public mappings: [];
    public source: [];
    public createdAt: Date;
    public updatedAt: Date;


    constructor(props: Applicant){

    }

}