import { Priority } from '@lib/enums/priority';
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ITask {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    priority: Priority;
    participants: string[];
    date: Date;
}
