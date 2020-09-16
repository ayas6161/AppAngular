import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { AlertifyService } from '../../_service/alertify.service';
import {UserService} from './../../_service/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  constructor(private userService: UserService, private alertify: AlertifyService) { }
  users: User[];

  ngOnInit() {
    this.loadUser();  }

  loadUser()
{
this.userService.getUsers().subscribe((users: User[]) =>{
  this.users = users;

}, error => {
  this.alertify.error(error);
});



}
}