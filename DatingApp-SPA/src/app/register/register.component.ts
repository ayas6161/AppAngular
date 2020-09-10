import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() regCancel = new EventEmitter<boolean>();


  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onRegister()
  {
    this.auth.register(this.model).subscribe(() => {
      console.log('registration success');
    }, error => {
      console.log(error);
    });

  }

  onCancel()
{
this.regCancel.emit(false);
console.log('cancel');

}





}
