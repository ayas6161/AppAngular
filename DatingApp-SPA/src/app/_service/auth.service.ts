import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient ) { }
jwtHelper = new JwtHelperService();
decodedtoken: any;
baseUrl = environment.apiUrl + 'auth/';
login(model: any )
{

return this.http.post(this.baseUrl + 'login', model).pipe( map((response: any) => {
  const user = response;
  this.decodedtoken = this.jwtHelper.decodeToken(user.token);
  localStorage.setItem('token', user.token );
 }
));

}

register(model: any)
{

return this.http.post(this.baseUrl + 'register', model);

}

loggedin(){
const token = localStorage.getItem('token');

return ! this.jwtHelper.isTokenExpired(token);

}

autologin(){

const token = localStorage.getItem('token');
this.decodedtoken = this.jwtHelper.decodeToken(token);

}
}
