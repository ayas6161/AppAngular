import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './../_service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  onLogin(form: NgForm){

    this.model.username = form.value.username;
    this.model.password = form.value.password;
    this.auth.login(this.model).subscribe(next => {
      console.log('Login sucessfull');
    }, error => {
      console.log('Login Failed');
    });

  }
  loggedin(): any{
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(): any{
    localStorage.removeItem('token');

  }

}
