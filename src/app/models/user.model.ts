export class User {
    username: string;
    password: string;
    email?: string;
    type?: any;
    gender?: any;


    constructor(username: string, password: string, email?: string, type?: any, gender?: any) {

        this.username = username;
        this.password = password;
        this.email = email;
        this.type = type;
        this.gender = gender;
    }
}
