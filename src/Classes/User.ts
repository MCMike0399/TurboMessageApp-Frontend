import Message from "./Message";

export default class User {
    private key: string;
    private name: string;
    private contacts: User[];
    private chats: Message[];

    constructor(key: string, name: string, contacts:User[], chats: Message[]) {
        this.key = key;
        this.name = name;
        this.contacts = contacts;
        this.chats = chats;
    }

}