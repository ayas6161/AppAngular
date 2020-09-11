import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient ) { }
jwtHelper = new JwtHelperService();
decodedtoken :any;
baseUrl = 'http://localhost:5000/api/auth/';
login(model: any )
{

return this.http.post(this.baseUrl + 'login', model).pipe( map((response: any) => {
  const user = response;
  this.decodedtoken = this.jwtHelper.decodeToken(user.token);
  localStorage.setItem('token', user.token );
  console.log(this.decodedtoken);
 }
));

}

register(model: any)
{

return this.http.post(this.baseUrl + 'register', model);

}

loggedin(){
const token = localStorage.getItem('token');
console.log( !this.jwtHelper.isTokenExpired(token))
return ! this.jwtHelper.isTokenExpired(token);

}

autologin(){

const token = localStorage.getItem('token');
this.decodedtoken = this.jwtHelper.decodeToken(token);

}
}
