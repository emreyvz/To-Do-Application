export class UserService{

private isUserLoggedIn=false;
private loggedUsername;

constructor(){
}

setUserLoggedIn(user:string){
    this.isUserLoggedIn = true;
    this.loggedUsername= user;
}

setUserLoggedOut(user:string){
    this.isUserLoggedIn = false;
    this.loggedUsername= '';
}

getUserLoggedIn(){
    return this.isUserLoggedIn;
}

getLoggedUsername(){
    return this.loggedUsername;
}

}