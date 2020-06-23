import {Injectable} from '@angular/core';
//import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class AuthService 
{
  private key='currentUser';
   constructor(){}

  login(firstName,LastName,Password)
  {
   let User={'firstName':firstName,'LastName':LastName,'Password':Password};

    localStorage.setItem(this.key,JSON.stringify(User));
    console.log(firstName,LastName,Password);
  }
  logout()
  {
    localStorage.removeItem(this.key);
  }
  currentuser()
  {
    localStorage.getItem(this.key);
  }
//   private httpClient:HttpClient
} 