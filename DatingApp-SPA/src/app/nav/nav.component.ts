import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './../_service/auth.service';
import {AlertifyService} from './../_service/alertify.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public auth: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(form: NgForm){

    this.model.username = form.value.username;
    this.model.password = form.value.password;
    this.auth.login(this.model).subscribe(next => {
      this.alertify.success('Login sucessfull');
    }, error => {
      this.alertify.error(error);
    }, () =>{
      this.router.navigate(['/members']);

    });

  } 
  loggedin(): any{
    return this.auth.loggedin();
    }
  logout(): any{
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);

  }

}
