import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = null;
  psw = null;

  constructor(  private authService: AuthService,
                private appComponent: AppComponent,
                private router: Router,) { 

    this.appComponent.viewAsLoginPage(false);
  }

  ngOnInit() {
    
  }


  validateLogin(){

    console.log('varibles', this.user, this.psw);

    this.authService.login(this.user, this.psw).subscribe(
      data => {

        console.log('data login', data);
        this.appComponent.viewAsLoginPage(true);
        localStorage.setItem('token', data.data.token);
        this.router.navigate(['/dashboard'])

      },
      err => {
        this.router.navigate(['/login'])
      }
    )

  }

}
