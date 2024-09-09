import { User } from ".";

export type Task = {
    task_id: string;
    title: string;
    description: string;
    status: string;
    user: User;
    user_id: string;
};