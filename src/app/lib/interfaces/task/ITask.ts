import { Priority } from '@lib/enums/priority';
import { IUser } from '@lib/interfaces';
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ITask {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    priority: Priority;
    participants: IUser[];
    date: Date;
}
