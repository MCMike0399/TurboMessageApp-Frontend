import User from "./User";

export default class Message {
    private msg: string;
    private sender: User;
    private target: User;
    private status: number;

    constructor(msg: string, sender: User, target: User, status: number) {
        this.msg = msg;
        this.sender = sender;
        this.target = target;
        this.status = status;
    }

    getMsg(): string {
        return this.msg;
    }

    getSender(): User {
        return this.sender;
    }

    getTarget(): User {
        return this.target;
    }

    getStatus(): number {
        return this.status;
    }
}