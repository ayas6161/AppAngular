import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Output() regCancel = new EventEmitter<boolean>();


  constructor(private auth: AuthService,private alertify: AlertifyService) { }

  ngOnInit() {
  }

  onRegister()
  {
    this.auth.register(this.model).subscribe(() => {
      this.alertify.success('registration success');
    }, error => {
      this.alertify.error(error);
    });

  }

  onCancel()
{
this.regCancel.emit(false);
console.log('cancel');

}





}
