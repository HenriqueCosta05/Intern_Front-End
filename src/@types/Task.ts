import { User } from ".";

export type Task = {
    id: string;
    title: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
    user: User;
    userId: string;
};