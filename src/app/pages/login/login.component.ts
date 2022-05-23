import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = null;
  psw = null;

  constructor( private authService: AuthService,) { }

  ngOnInit() {
  }

  validateLogin(){

    console.log('varibles', this.user, this.psw);

    this.authService.login(this.user, this.psw).subscribe(
      data => {

        console.log('data login', data);

      },
      err => {

      }
    )

  }

}
