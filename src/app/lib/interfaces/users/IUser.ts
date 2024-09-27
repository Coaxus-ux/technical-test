import { ISkill } from '@lib/interfaces/users/ISkill';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IUser {
    id: number;
    name: string;
    age: number;
    skills: ISkill[];
    avatarSeed: number;
}
