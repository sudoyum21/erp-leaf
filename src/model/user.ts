export class User {
    private _username : string; 
    private _password : string;
    private _permissions : number[];
    constructor(username : string, password : string){
        this._username = username;
        this._password = password;
    }
}
